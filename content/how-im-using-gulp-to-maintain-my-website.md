---
title: How I'm using Gulp to maintain my website
dateISO: 2017-09-24
description: |
  I use a single Gulpfile to automate website development. Here's how!
---

## If you're not here for Gulp, you can skip this paragraph
First things first: this is my very first blog post on my new personal site, and I'm super excited. I have been blogging on and off since 2002, first on my own personal websites (remember Greymatter and b2?), later I moved over to LiveJournal. I've fallen out of the habit because other forms of social media took over: Tumblr at first, Facebook later, and then Instagram for photos. I mostly blogged about tv shows (I have books' worth of Battlestar Galactica and Lost theories and recaps), but at some point I have gotten more selective to who had access to my thoughts and feelings, so now I mostly use Twitter, Instagram and WhatsApp.

But anyway, after landing a job as junior frontend developer last year and joining the tech industry as said developer, I realized that I have things to say and to share on different media than social media. I'm hoping this blog will serve me as a repository for code snippets and tips, but also as a place for me to share how I feel about things such as being a self-taught coder, about being a woman in tech, about meet-ups I go to and organize, conferenced I attend, et cetera. The list is long, and I hope you're looking forward to sharing with me!

A few quick notes: English is not my first language, so please excuse any mistakes. I'm also not enabling comments as of yet, but I probably will in the near future. And if you find any bugs, please let me know on [Twitter](https://twitter.com/helenasometimes)!

## Swig, swill, gulp
I freaking love static site generators. I've tried any under the sun: Middleman, Hugo, Hexo, Jekyll, Gatsby, Metalsmith, Octopress, Silex -- I love them! When the documentation's good, I can have a maintainable site up and running in a couple of hours. The thing that keeps me from sticking with one however, is the bloat. My current favorite SSG, Hugo, runs on Go, meaning that I will need to have Go installed locally. So, I'll also need Homebrew (which barely works for me half the time), and then I'll need to remember a bunch of commands and flags, and there's also a bunch of files on my computer that I'm not quite sure what they're doing exactly, but I know that if I'll remove them things stop working, so -- time to get in control and build something from scratch.

Clearly, I'm not going to build a static site generator system. I want something quick and dirty that does its job well. My site is small, so the tools that I use to make my site need to be small. Enter [Gulp](https://gulpjs.com/). I'd never used Gulp before (or any task runner, really), and [this guide](https://css-tricks.com/gulp-for-beginners/) by [Zell Liew](https://twitter.com/zellwk) convinced me that a single Gulpfile would be enough for me to create and maintain a website. This blog is about how I'm leveraging Gulp to do what I need. It's not a tutorial on how to set up a Gulpfile that works for you. If you're looking for a guide like that, refer to Zell's post!

### Set up
I only need a couple things, really:
* A command to spin up a local web server, where I can test my things. While running a local server, I'll need something to convert Less to CSS on the fly, and LiveReload so the unbearable task of hitting CMD+R is done for me after every change.
* A command to build my things: once I'm happy with my site, I'll need to put everything together so that it's ready to deploy. The right files have to be moved to the right folders, images, JS and CSS must be minified, uglified and autoprefixed, and I need this to happen in a certain order because if my HTML builds before [useref](https://www.npmjs.com/package/gulp-useref) has had its chance to replace certain references in my HTML, things will break.
* A command to deploy everything to my DigitalOcean droplet, without me having to enter a password or choose the right folder for deployment.

### Spin it up
The first command, which is _gulp_, does several things:
[gulp-connect](https://www.npmjs.com/package/gulp-connect) for a server and LiveReloading;
[gulp-less](https://www.npmjs.com/package/gulp-less) for converting Less to CSS;
[gulp-watch](https://www.npmjs.com/package/gulp-watch) for watching for changes in HTML, CSS, JS and images, so LiveReloading works.

### Build it
The second command is for building. I move all files to from my _app_ folder to my _dist_ folder. For CSS I use an autoprefixer, and [clean-css](https://github.com/jakubpawlowicz/clean-css). JavaScript files are minified, and the extension _.min.js_ is added to them. I optimize images, so this step is all about cleaning up cruft and making sure the files in the _dist_ folder are ready to be uploaded.

### Deploy
This one took me while to figure out, actually. I tried a bunch of different Gulp packages that would allow me to upload my _dist_ files to the correct folder over SSH. After getting a whole lot of authentication errors with different packages, I found [scp2](https://www.npmjs.com/package/gulp-scp2) which works like a charm. Here's the entire deploy command:

```
scpClient = require('scp2');
gulp.task('deploy', [], function (cb) {
    scpClient.scp('dist', {
        "host": "146.185.169.192",
        "port": "22",
        "username": "my-username",
        "path": "/my/awesome/folder",
        "agent": process.env["SSH_AUTH_SOCK"],
        "agentForward": true,
    }, cb)
});
```

As long as I have an ssh-agent running on my local machine (which is always, unless I restart my computer and forget to add it, leading to many freak-outs because WHY CAN'T I AUTHENTICATE?), _gulp deploy_ opens a connection to my VPS and moves the entire _dist_ folder from my local machine to my website via scp.

## Gettin' explicit with it
The above is pretty straight forward. It took me a good few hours to set it all up, because A) I don't really know JavaScript well and B) Gulp was, and is, still new to me. My Gulpfile can use a lot of refactoring, but for the moment I prefer a more procedural approach to setting up tasks, because then I know which things do what after not having looked at the file for a while. Take this part:

```
// Move HTML files to dist when finished, and process HTML
gulp.task('distHtml', function(){
  return gulp.src('app/*.html')
    .pipe(processhtml())
    .pipe(gulp.dest('dist'))
});

// Move HTML CV files to dist when finished, and process HTML
gulp.task('distCvHtml', function(){
  return gulp.src('app/cv/*.html')
    .pipe(processhtml())
    .pipe(gulp.dest('dist/cv'))
});
```

This could definitely be optimized, because I'm doing the same things twice: _gulp.src()_, _processhtml()_ and _gulp.dest()_. The only difference is that the source and destination differ. But like I said, as a JavaScript newbie, I like to break every single task up into its own little contained block, so not only reading it is easier, but debugging errors is less difficult if it's not one, big task. Hopefully, in the future, I'll get more comfortable writing less procedural, explicit code 🔥

## Magical Gulp
### useref
One of my absolute favorite Gulp packages is [useref](https://www.npmjs.com/package/gulp-useref). At some point, I was struggling with the following: when running _gulp dist_ my JS file is minified and renamed from _all.js_ to _all.min.js_. However, in my _index.html_, the path to JS is still the non-minified _all.js_ file. With the result that on deployment, my shiny minified JS file isn't loaded, because it wasn't called in my index file. Now, I could've changed this:

`<script src="js/all.js" defer></script>`

to this:

`<script src="js/all.min.js" defer></script>`

but then, I'd have to work with a minified file in my development environment, defeating the purpose of setting up such an environment in the first place. Enter useref. This is what my index.html looks like before building:

```
<!-- build:js js/all.min.js -->
<script src="js/all.js" defer></script>
<!-- /build -->
```

The final code in my HTML file, that gets piped to my _dist_ folder (and is thus deployed at some point) is only this:
`<script src="js/all.min.js"></script>`

Exactly what I need, without having to manually change the path.

### run-sequence
Another really cool Gulp package is [run-sequence](https://www.npmjs.com/package/run-sequence). I need tasks to run in a certain order. There's no point to moving CSS files to my _dist_ folder if the Less hasn't compiled into CSS yet. _run-sequence_ helps with that:

```
// Ready for building!
gulp.task('build', function(callback) {
  runSequence('less', 'distCss', (....), callback);
});
```

Gulp converts Less to CSS first, then does its autoprefixing and minifying task, and then moves the final files over to my _dist_ folder.

## Wrapping it up, and sharing discoveries as an inexperienced developer
All in all, my entire Gulp file is 142 lines long. Once I get around to refactoring and optimizing it, I'm sure I can bring it down to below a 100 lines. It has 12 requirements in total, and again, I'm sure I could bring that number down with some optimization. The total build time is about two seconds, and deployment takes not even one second.

Is it perfect? No. Is it beautifully written code? Heck no. Does it work, and did it teach me about Gulp, and how to set up my own building tool? Absolutely. And the latter, to me, is the most important part. Instead of relying on other people's (great) work, where I never really know which process does what, I can rely on my own tools.

As a new frontend developer, I'm in a state of constant overwhelmedness. Everything moves so fast, and once I feel like I understand a certain principle or tool, I feel like everyone has moved on already to the next best thing. I constantly worry about not doing things right and raising the ire of people much smarter and experienced than me. Posting this is actually quite scary for me, because I worry about people thinking "damn, that's a really stupid setup, there are so many ways you could improve on this. What a dummy!"

But code excites me. When I got my first Gulp task working, I felt elated! I am proud of my setup, no matter how janky it might look to others. I wrote it, and I debugged it when it didn't work. I'm sharing my work, because I'm proud of the process (and not so much the end result). I have now been doing frontend development professionally for about ten months, and having gone from 'um, what is an event listener?' to creating my own automated build tool is pretty cool, if I say so myself 😄

I'm looking forward to using this space to share more discoveries, no matter how small or big. If you have anything to share, [please contact me on Twitter](https://twitter.com/helenasometimes) 💙

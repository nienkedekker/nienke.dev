---
title: My favorite tools of 2017
dateISO: 2017-12-31
description: |
  A small collection of useful tools I gathered in 2017.
---

Inspired by [Louis Lazaris' article](https://css-tricks.com/front-end-tools-favorite-finds-2017/), here's a small-ish collection of tools that I discovered this year, ranging from frontend to iOS. I find them very useful and I hope you do too!

## Prezto
[Prezto](https://github.com/sorin-ionescu/prezto) is a framework for Zsh. Earlier this year, I wanted to switch from bash to Oh-My-Zsh, only to be dumbfounded the latter's extreme slowness. It's probably some strange configuration issue particular to my machine, but something like running _cd_ would take over a second. I started looking at alternatives and found Prezto. It's [simple](https://github.com/robbyrussell/oh-my-zsh/issues/377), easily configurable, has some great modules, and most importantly, it's blazingly fast. Unfortunately, the official repo does not seem to get updated a lot, so do as the [readme](https://github.com/sorin-ionescu/prezto#customization) suggests: fork the project and merge whatever open pull requests look good to you!

## tldr
I don't like reading man pages. There's usually too much information packed into too many characters, and this is where [tldr](https://github.com/tldr-pages/tldr) comes in. Instead of man, tldr returns a short description **including practical examples** and it's the examples that have made my life SO much easier. There are tons of clients for it, but if you want to give it a try first, try the [web environment](https://tldr.ostera.io).

## Gulp
I've [blogged about Gulp before](https://nienkedekker.com/blog/how-im-using-gulp-to-maintain-my-website), but I'm now also using it in production at work and I'm absolutely in love. The internet keeps telling me to use Webpack, which I'm sure is great, but I love how intuitive and light-weight Gulp is. My favorite packages, which you may want to look into, are:
- [run-sequence](https://www.npmjs.com/package/run-sequence)
- [plumber](gulp-plumber)
- [svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite)
- [scp2](https://www.npmjs.com/package/scp2) technically not a Gulp package, but works great with Gulp.
- [useref](https://www.npmjs.com/package/gulp-useref)

## Inclusive Components
[This website](https://inclusive-components.design/) is not so much a tool as it is a resource, but nevertheless, it's very valuable. Whenever I have to create a component and I'm not sure what the best approach is, I just go to this site and the author clearly and concisely lays out best practices and how to implement them.

## Alfred (MacOS)
Obviously not a new kid on the block, but a few months ago I got [the powerpack](https://www.alfredapp.com/powerpack/buy/) and ahhh! The workflows 😍! Here are my favorites:
- [Caniuse](https://github.com/willfarrell/alfred-caniuse-workflow)
- [Dash](https://kapeli.com/dash)
- [Encode/decode](https://github.com/willfarrell/alfred-encode-decode-workflow) - transform strings through base64, html, url, and utf-8 encode/decode
- [IP Address](http://dferg.us/ip-address-workflow/): retrieve your current IP address(es)
- [StackOverflow](https://github.com/deanishe/alfred-stackoverflow)
- [Kaomoji](https://github.com/vinkla/alfred-kaomoji) - search for 'table flip' and (ノ⁠ಠ⁠益⁠ಠ)⁠ノ⁠彡⁠┻━┻ returns!
- [HTML Entity Lookup](https://github.com/ajgon/alfred2-html-entity-lookup)
- [Unicode Symbols Search](https://github.com/bevesce/unicode-symbols-search)
- [fkill](https://github.com/SamVerschueren/alfred-fkill): search and kill processes

And there are so much more! You can find a nice list [here](https://github.com/derimagia/awesome-alfred-workflows) and [here](https://github.com/zenorocha/alfred-workflows).

## Karabiner Elements (MacOS)
If you use any kind of external keyboard you'll like [Karabiner Elements](https://github.com/tekezo/Karabiner-Elements). I mostly use it to automatically disable my built-in keyboard when I hook up an external keyboard, so I can put it on top of the built-in one :)

## Textual (MacOS)
I used [LimeChat](http://limechat.net/mac/) as my number one IRC client for a very long time. It's great, but no longer maintained. So this  year I switched to [Textual](https://www.codeux.com/textual/). It's only a couple of euros, and supports things like OTR-messaging and has a powerful ZNC integration. Also, it looks really nice 🤗

## WebStorm and VSCode
At the beginning of 2017, I switched from [Atom](https://atom.io/) to [PHPStorm](https://www.jetbrains.com/phpstorm/) (and am now using [WebStorm](https://www.jetbrains.com/webstorm/), as I'm not doing PHP development anymore). Using an IDE has -literally- changed my life. I've become a much better programmer: it's so much easier to find structure in a code base. For smaller, personal projects where I don't really need an IDE, I'm now using [VSCode](https://code.visualstudio.com/). I find VSCode to be a lot faster and more lightweight than Atom, and the extensions are great.

## Apollo (iOS)
I'm not talking about the GraphQL client, sorry. I'm talking about [Apollo for reddit](https://apolloapp.io/)! I browse reddit a lot, and this app is like AlienBlue (RIP) on steroids. It's completely free, but because it's so good, I actually tipped its creator. The only other free product I've ever donated to is Wikipedia, so I hope that tells you something. It's got a gorgeous dark mode, supports markdown, allows you to customize gestures, and is super fast. Also, it's built by [just one person](https://twitter.com/ChristianSelig) who also does tons of community outreach 😱

---
name: 'designing-and-developing-for-users-with-autism'
title: Designing and Developing for Users with Autism
date: 22 June 2018
dateISO: 2018-06-22
id: 'designing-and-developing-for-users-with-autism'
description: |
  On June 16th, 2018 I gave a lightning talk at role=drinks about designing and developing web applications for users with autism. Here's the talk in article form.
---

A few days ago (June 16th, 2018) I gave a lightning talk (my first ever!) at [role=drinks](https://www.roledrinks.com) about designing and developing web applications for users with autism. Here's the talk in article form. If you spot any errors, please let me know by [sending me a DM on Twitter](https://www.twitter.com/helenasometimes) or by sending me an email at nienkedekker@gmail.com.

## Autism?
I’m going to assume most of you have heard of autism. Broadly speaking, it’s a developmental disability that affects how a person communicates with and relates to other people, and how they experience the world.

Some symptoms are difficulties understanding facial expressions or difficulty with expressing emotions. Other symptoms may include not being comfortable with change, or high sensitivity to sounds, touch, light, et cetera. Some people with autism express their attachment to other people differently, they might not be able to see things from another perspective, or they may have trouble understanding body language, tone of voice and sarcasm ([source](http://www.autism.org.uk/about/what-is.aspx)).

## It's a spectrum
Like most things in life, autism is on a spectrum. This means that there’s a very wide variation when it comes to people with autism. On the one side of the spectrum, we have people who are very close to so-called neurotypicals, meaning people with normal neural development. And on the other side, we have people who are completely non-verbal and/or developmentally disabled. Because autism is a spectrum it’s hard to set hard boundaries between diagnostic categories, but generally we talk about individuals with autism as low functioning, medium functioning, and high functioning. For the sake of clarity, I will be using these definitions.

This article mostly concerns the people on the higher functioning side of the spectrum, because that is what I am personally familiar with, and because a lot of research concerning what users with autism want or need can only be done with folks who are in the medium-to high functioning category.

This is not to say that we as designers and developers should completely forget about those who are non-verbal or in the lower-functioning category, but it’s a lot harder to address their needs and in a world where there is already such limited attention and resources available for accessibility. It makes sense to focus on the part of the spectrum where we’ll really be able to make a difference with relatively little effort.

## Good News
So I have some good news. If you think of accessibility as making your web app useful for people with hearing or visual impairments, and you make your app accessible for those people, you’re automatically already helping people with autism! Let's look at some real world examples.

## Examples
### Subtitles and transcripts
If your web app includes videos and you’re doing your job as a developer, content manager or designer, you’re including subtitles so Deaf people will be able to use the video content as well. You might also be including a transcript, and transcribe what’s happening on the screen, so that people with visual impairments can also understand what’s going on.

What you might not immediately think about is that by including these things, you’re helping people with autism as well. A common symptom of autism is auditory processing disorder. Meaning that some folks, even if their hearing is physically perfect, have a hard time memorising information learned by listening. Written material is in this case extremely helpful.

For me personally, I don’t watch videos without subtitles, even though I can hear just fine. Without subtitles, it’s a lot harder for me to retain information. If there is a lot going on visually as well, subtitles help me focus. And a transcript is even better, because I’ll be able to focus on what is being said and not what is being shown. I can process information on my own terms in my own time, without worrying I’m missing parts of a video.

So really, when including subtitles and transcripts, you’ve got not two but three birds with one stone: Deaf people, people with visual imparments, and people with auditory processing disorder, which again, is common in autism.

### Correct Page Hierarchy
Another good example is presenting information in a well-organised and clear way with correct use of HTML5 elements. You’re not just helping people with screen readers. You’re helping people who are quickly overwhelmed by too much information as well. If your web page has a clear hierarchy, it makes it easier to pick out what’s important and what’s less so. And talking about hierarchy, if you’re indicating where a user is on each page, like where in the context in your web app they are, that helps a lot. If you have a web shop and you’re doing a shopping cart checkout that consists of multiple pages, make sure users can see where in the process they are.

## The extra mile
So let’s say you're following accessibility good practices. This means you’re already making sure autistic people don’t have a terrible experience. But there is more you can do outside of the things I mentioned. If you really want to go that extra mile, I’ve gathered some helpful tips. What’s important here is that everything you do to make your app accessible for people with autism, benefits the general population as well. You’re not excluding anyone when you’re designing for autism.

### Personalization
The first good practice is also the one that’s most difficult to realize: personalization. This is especially true if you’re working with designers with very strong feelings about how things should look. I’m talking about personalization of user interfaces. This means allowing your users to choose the font type and size, line-spacing, and themes for text background and foreground colors. You might also want to allow users to turn off images. I can hear designers and project managers screaming right now. And it makes sense: a designer may not want people to be able to “ruin” their work. And project managers or clients may not be too keen on giving developers the time to implement personalization features. But research shows that allowing people to set their preferences means their reading comprehension and sustained attention goes up _significantly_ ([source](https://depts.washington.edu/ddi/publications/Putnam_Chong.pdf)).

Unfortunately, in the real world you’ll rarely see the ability to sort of design your own user experience. And I get that. So what can you do as a developer? Make sure you have a CSS print stylesheet, where you hide videos, giant logos, bright colors, fancy fonts and such. [Here is a really good Smashing Magazine article](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/) on how to do this. It may only take an afternoon. Of course, if you’re designing an interactive app where user input is necessary, printing a page won’t help those users do what you’re asking of them, but if you’re just presenting content, make sure you have a Print stylesheet (note: my site doesn't have one 🙈. It's on my todo list!)

### Presentation
So let’s move to tip number two, Presentation guidelines. There are a couple of other things you can do to make sure your app meets the needs of people with autism. Here is a list of things to consider when designing for people with autism:

* Use soft, mild colors.
* Present text in a single column.
* Use simple graphics
* Use clear, sans-serif fonts
* Don't implement horizontal scrolling
* Use clear, large buttons with both icons and text
* Take extra care while designing forms. If spacing between labels and input is inconsistent or too much, all your users will have a hard time figuring out which labels belongs to what input, but autistic users especially so. This is because for them (us), it’s harder to put information in context.

And then there are content guidelines (these might be more relevant to your content manager!):

### Content
* For dates, use the full format.
* For phone numbers, make sure the numbers are separated.
* Don’t use roman numerals.
* Bulleted lists are a good idea, because they make it easier to focus on what is most important on a page.
* Keep language simple.
* Don’t include pictures because you feel you have to: only include pictures when they give useful information.

The source for these guidelines is [Nikolay Pavlov's "User Interface for People with Autism Spectrum Disorders"](http://file.scirp.org/pdf/JSEA_2014022510055814.pdf).

## Real World Examples
So I’ve just given you a lot of information. Let’s look at real world examples of design that’s inclusive for people with autism. Let’s look at something we’ve all run into before: 404 pages. A 404 page can be done really well, or terribly. For a lot of devs, a 404 page is a place to put a funny joke instead of useful information, which sucks for users, but especially users who have issues parsing information in the first place.

### The could-be-better
First, let’s look at [the GitHub 404 page](https://github.com/adgkljsjdfkilgh). First of all, it includes a Star Wars joke. I’ve seen Star Wars, so I get the joke. But if you haven’t seen Star Wars, the 404 message makes no sense. I mean, this _is_ the web page I’m looking for. I’ve probably came by this URL by clicking on a link somewhere else, meaning I deliberately went to this page for a specific purpose. So why are they saying it's not the page I'm looking for? This type of unclear language pisses me off. Remember: some people with autism take expressions very literally.

That aside, if you hover over the image it moves. Why? What does that add? User delight? I’m on a 404 page, meaning I can’t find something I’m looking for. I don’t need delight here, I’d just like a “hey, maybe you were looking for this or that”.

The search bar is presented without context. What should I fill in?

Interestingly enough, you will also see this 404 page when a repo is private and you don't have access to it. In that case, "404" is not the correct error response - rather, it should be a 403 in that case.

Hopefully Microsoft can put some of their billions towards fixing this page because this could be done better 😉

### The good
A good example is [the Smashing Magazine 404 page](https://www.smashingmagazine.com/fdgl;fgh). The first thing you see is the large heading: page could not be found, and it includes the error code. Then there’s an image (which doesn’t move!). Then there’s some helpful text, that clearly indicates what may have gone wrong and what actions I can undertake next. We can also see some of the interface guidelines I mentioned earlier. The text is presented in a single column. The font may be serif, but it is large and has plenty of line spacing. The page’s hierarchy makes sense. The image is simple, though it may be distracting to some, especially the bubbles. The colours are a little bright, which may not work for everyone. I think Smashing Magazine could benefit from some user personalization: allow people to set their own main color!

## Wrapping it up
Well, that just about wraps things up. We’ve gone over some dos and don’t, and I’ve shown you two real world examples of how (not) to design a 404 page.

What I want to leave you with is to keep doing what you’re already doing. Make sure your website is available for people with auditory and visual impairments, for people who don’t use a mouse but a keyboard, because the things you’re doing in that space also help people with autism spectrum disorder. And if you can, try to also do the extra things we’ve just talked about, such as personalisation and the presentation guidelines. This might mean you’ll have to challenge your designer or client. Try to impress upon them that all these UI dos and don’t we just talked about are not beneficial purely to people with autism. They can be used to improve accessibility for everyone.

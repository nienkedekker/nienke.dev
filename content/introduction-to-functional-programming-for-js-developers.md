---
title: Introduction to Functional Programming for JavaScript developers who aren't necessarily good at math or formal logic
dateISO: 2020-08-18
description: |
  A short introduction to functional programming for those without Computer Science PhDs
---

If you're like me and started your journey in web development with PHP scripts cobbled together from [hotscripts.com](http://hotscripts.com), you'll most likely at one point have run into the object oriented programming paradigm  (OOP). What I like about OOP is that it maps easily to the real world - you have a `Car` class, which has `drive` and `brake` methods, and may have a relationship to another class such as a `Driver`, who can `buy` or `sell` a `Car` object. It gets harder to reason about when you leave real-world objects like animals and cars and start applying it to your actual program where you'll likely at some point end up with Objects like `NearestGasStationToUserThatTakesMastercard` but that's not a paradigm problem, it's an implementation issue. My point being, OOP is pretty intuitive, even for people (like me) who've never taken a computer science class.

This breaks down when people start talking about functional programming. I don't truly understand how it applies to the real world. It has *currying* and *thunks* and *monads* and *lambdas* and for some reason, everything is immutable. When reading about functional programming I feel like I need a PhD in something like Mathematics or Theoretical Physics. I wouldn't call myself dumb, but I've never been great at math or formal logic, you know, stuff like this:

![](/images/bro-wtf.png)

My mind simply refuses. Which is fine since 95% of my day job consists of tying API endpoints up together and arguing about component naming, but there's just so much buzz about functional programming, specifically within the JavaScript community (to be even more specific: within the React ecosystem), that I can't help but wonder what I'm missing out on. I like to learn by working through a concept and either writing or talking about it, so that's what we're going to do here!

The cool thing about JavaScript is that it's pretty agnostic. If you want your program to have classes that inherit from each other, you can. If you don't want that, it's fine too. JS isn't tied to a particular shared way to communicate, classify and categorize — design patterns — which is one of the reasons it's so popular.

From what I've gathered so far, one of the reasons FP is gaining traction in the JS community is that by using immutable data structures and pure functions, you reduce the complexity of your application because you're avoiding side effects. FP is declarative, not imperative: you tell your program **what** to do, not **how** to do it, and by abstracting the latter away, your program becomes more predictable. The downside is your code becomes more dense and if you're not familiar with functional programming patterns, *really* hard to read.

So let's break down a couple of those core FP concepts that seem to pop up everywhere, and let's try to apply them to a real world program.

- Pure functions are functions that, given the same input, always return the same output, and have no side-effects. They can be used as simple, re-usable building blocks.
- A side effect is a change in your application's state that can be observed *outside of the function that calls that change*. A function that writes data to your file system is an impure function, because you can see its results somewhere other than inside the function.
- Immutability is a *thing* that cannot be modified after it's created. An immutable object is an object that you can't add new properties on after its creation.

Right, I hear your thinking: how the *heck* will my program get anything done if I can't do any of those things? How does one write a working application where, let's say, a user is allowed to upload images and overwrite those images with newer ones if I'm not allowed to mutate objects? Or use side effects?

## Purity

A good thing to know is that side effects are not *verboten* in FP. It'd be hard to write a useful program without them. The point is to isolate side effects from the rest of your software. Instead of performing a side effect in a function, make that function return the information you need to perform the side effect *later*. Let's create an example. This is an impure function:

```js
let count = 1;

function increaseCount() {
 return count = count + 10;
}

increaseCount() // 11
console.log(count) // 11 <- count has been affected..
```

The reason this function is impure is because it affects a variable `count` outside its own scope. Here's how we can make it pure:

```js
let count = 1;

const increaseCount = (value) => value + 10;

increaseCount(count); // 11
console.log(count); // 1 <- count has not been affected!
```

Yes, this is a contrived example - I'm finding it remarkably difficult to write examples you might actually encounter in applications, but I'm hoping you get the gist. This may seem like overkill and If your application deals with little state (and thus, low complexity), writing all your functions to be pure may not be worth it; it will most likely only work to restrict you.

## Immutability

Another, more true to real life example is this:

```js
const addToShoppingBasket = (basket, item, amount) => {
	basket.items.push({
		item,
		amount
	});

	return basket
}
```

Here we're modifying the `basket` shared state directly. How does that affect all other instances where `basket` is used as well? Are you certain that, when adding a new item to the shopping basket, the new amount of items is reflected everywhere in your application?

- Sidenote: A declarative framework like React helps you avoid these issues: you don't tell components *how* to respond to a changed shared state, you tell them *what* they should look like when `basket` changes state.

Let's turn `addToShoppingBasket()` into a pure function:

```js
const cloneDeep = require('clone-deep');

const addToShoppingBasket = (basket, item, amount) => {
 const clonedBasket = cloneDeep(basket)

	clonedBasket.items.push({
		item,
		amount
	});

	return clonedBasket
}
```

Now the function does not mutate the original `basket` object - rather, it returns a deep clone of it with the new item and its quantity added to it. If you're using React, you'd probably use a reducer here which will take care of the state mutations for you.

Remember, the goal is not to write your program using pure functions only. The goal is to make sure impurity stays as far away from the program's business logic as possible. Isolating impurity and making sure side effects are performed at the periphery will make your program easier to reason about.

## Shared state

 Another concept that's worth diving into more is *shared state.* In JavaScript applications, chances are you're dealing with shared state. For example, a user is logged in, and based on their logged in status (`isLoggedIn`) you're showing different components. The state of these components depend on a shared global state. When this becomes problematic is when one component modifies the `isLoggedIn` state (it can do that, because isLoggedIn is global and mutable). This may prevent the other involved parties from working correctly. In short, one component can affect another in ways you can't always predict.

A declarative framework like React helps you avoid these issues, but you can use functional programming methods to avoid issues from cropping up when modifying the global shared state. Instead of mutating the state directly from inside a component, you can create a Store, which contains methods for mutating state, and call those Store methods from inside your component. By moving the responsibility of mutating state from a view component to a single source of truth (the store), your program becomes more predictable. Note that a Store is _still_ an instance of shared state that can be mutated by more than one party, but you've at least managed to somewhat isolate state logic.

## Other concepts

There are many other functional programming concepts that I haven't touched upon here, such as higher order functions (a function that takes another function as its argument), functors (a thing that can be mapped over), streams (a list expressed over time) and more academical (to me) concepts such as currying, monads and monoids. I'm not entirely convinced they're useful to know in your day-to-day work, but you may be using them without knowing it! For example, this is a higher order function:

```js
const add = (x) => (y) => x * y;
const result = add(5)(10); // returns 50
```

This is also an example of currying. We could've written `add()` like this too:

```js
function add(x, y) {
	return x * y
}
```

Currying transforms a function with multiple arguments into a series of functions, each taking a single argument. This can be useful when you need to write little re-usable code modules.

## Wrapping up

It's clear that the functional programming paradigm contains useful concepts to make your code more predictable. For me its biggest drawback is that it makes things harder to read, especially coming from a more traditional JavaScript "let's cobble a bunch of scripts together and see what happens" background. You don't need a computer science degree to understand functional programming, but explanations found online mostly show theoretical examples, making it hard to understand how to apply FP to a real-life application.

If you're using React, you're using functional programming paradigms already, and there's no real reason why you should have to know the `.map()` function is a pure function. You just use it when you need it, and whether it's OOP, FP, or any other programming paradigm, as a web developer your goal is to deliver a working application, not necessarily to get bogged down in academic concerns.

For further reading I can recommend the following links:

- [https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition](https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition)
- [https://tommikaikkonen.github.io/impure-to-pure/](https://tommikaikkonen.github.io/impure-to-pure/)
- [https://2ality.com/2019/10/shared-mutable-state.html#what-is-shared-mutable-state-and-why-is-it-problematic%3F](https://2ality.com/2019/10/shared-mutable-state.html#what-is-shared-mutable-state-and-why-is-it-problematic%3F)
- [https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
- [https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd)
- [https://dev.to/joelnet/functional-javascript---functors-monads-and-promises-1pol](https://dev.to/joelnet/functional-javascript---functors-monads-and-promises-1pol)
- [https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/](https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/)

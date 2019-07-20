---
name: 'getting-started-with-mongoose-discriminators-in-express-js'
title: Getting started with Mongoose discriminators in Express.js
date: 09 February 2017
id: 'getting-started-with-mongoose-discriminators-in-express-js'
description: |
  A starter's guide to extending Mongoose Schemas in Express.js.
---

I recently started rewriting my Rails side project, [what.pm](https://what.pm/), to Express. One reason is that I want to get better at JavaScript, the other is that Rails feels very magical and I don't like the fact that I don't really know what I'm doing when I use it ("it works, but I'm not sure why"). That's not necessarily a bad thing and it's something that can be solved by diving under Rails' hood, but I'm not interested in doing that, to be honest.

So for this rewrite, I wanted to dig a little deeper in storing data and stop relying on behind-the-scenes magic. This means coming up with a proper data model. I wanted a NoSQL database for flexibility (I might need to add different collection types later!). I opted for MongoDB because it meshes well with Node, and because I wanted to try MongooseJS (looking at the docs, it seemed to provide an easy to understand abstraction layer and spoiler alert: it is pretty neat).

## Disclaimer
I'm writing this post as I'm learning, and my understanding of any concepts mentioned might be wrong. If you think that's the case, do let me know 😃 

## The problem
Imagine you're tracking which movies, books and tv shows you consume in a given year. These three things have a few things in common: they all have a title and a date of release. They also differ from eachother, however: a Book has an _author_, whereas a Movie has a _director_. A TV show has neither of these things, but it does have a _season_. So, how would you set up your Mongoose schemas? You could easily create three different schemas for each (Book, Movie and TVshow). However, you'd be repeating yourself - in every schema, you'd have the same title field and date of release field. And if you wanted to add another field that all three schemas have in common - such as whether it's a rewatch/reread ('redo') - you'd have to add that new field to three different files. 

What if you could extend some kind of "Base" schema, and have Movies, Books and TV Shows inherit from that one schema? I didn't know how, but luckily, a [colleague](https://peeke.nl/) suggested I look into Mongoose discriminators. Unfortunately, the documentation is a little sparse, and I couldn't find any Express.js specific tutorials/blog posts, so here's my attempt at fixing that. Hopefully, this post will help those looking to integrate Mongoose discriminators in their Express app :)

## The non-DRY way
Just for clarity, this is what our schemas could look like without discriminators:

```
> models/book.js

// Define our Book schema
const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    release_date: { type: Date, required: true },
  }
);

// Create a model from our schema
module.exports = mongoose.model('Book', BookSchema);
```


```
> models/movie.js

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    release_date: { type: Date, required: true },
  }
);

module.exports = mongoose.model('Movie', MovieSchema);
```

```
> models/tvshow.js

const Tvshow = new mongoose.Schema(
  {
    title: { type: String, required: true },
    season: { type: Number, required: true },
    release_date: { type: Date, required: true },
  }
);

module.exports = mongoose.model('Tvshow', TvshowSchema);
```

Nothing wrong with that! However, like I mentioned before, if we wanted to add a new property, say:

```
// signals whether I've already seen or read the item in question
redo: { type: Boolean, required: false } 
```

We'd have to add it three times in three separate files 😖. So let's try something different. 

We're going to create one 'master' schema called `Base`, and we're going to make `Book`, `Movie` and `Tvshow` inherit from it. This is what we want to achieve in pseudocode:

```
Base:
	title: { type: String, required: true },
	date_released: { type: Date, required: true },
	redo: { type: Boolean, required: false },
    
Book:
	Inherit everything from Base, and add the following just for this schema:
	author: { type: String, required: true }

Movie:
	Inherit everything from Base, and add the following just for this schema:
	director: { type: String, required: true }

TV Show:
	Inherit everything from Base, and add the following just for this schema:
	season: { type: Number, required: true }
```

So how are we going to give our child schemas (Book, Movie, Tvshow) the `Base` options? In other words, how will we extend our `Base`? Enter [discriminators](http://mongoosejs.com/docs/discriminators.html). A discriminator is a function for `model` that _returns a model whose schema is the union of the base schema and the discriminator schema._ So basically, a discriminator will allow us to specify a key, like `kind` or `itemtype`. With this key, we can store different entities (books, movies, tv shows..) in one collection, and we'll still be able to discriminate (*badum tsss*) between these entities.

So let's set up our Base schema. Again, that's the structure that our other schemas will extend from.
```
const baseOptions = {
  discriminatorKey: 'itemtype', // our discriminator key, could be anything
  collection: 'items', // the name of our collection
};

// Our Base schema: these properties will be shared with our "real" schemas
const Base = mongoose.model('Base', new mongoose.Schema({
      title: { type: String, required: true },
      date_added: { type: Date, required: true },
      redo: { type: Boolean, required: false },
    }, baseOptions,
  ),
);

module.exports = mongoose.model('Base');
```

And then we could edit `book.js` like this:

```
> models/book.js

const Base = require('./base'); // we have to make sure our Book schema is aware of the Base schema

const Book = Base.discriminator('Book', new mongoose.Schema({
    author: { type: String, required: true },
  }),
);

module.exports = mongoose.model('Book');
```

With `Base.discriminator()`, we're telling Mongoose that we want to get the properties of `Base`, and add another `author` property, solely for our Book schema. Let's do the same thing with `models/movie.js`:

```
> models/movie.js

const Base = require('./base');

const Movie = Base.discriminator('Movie', new mongoose.Schema({
    director: { type: String, required: true },
  }),
);

module.exports = mongoose.model('Movie');
```

and `tvshow.js`:

```
> models/tvshow.js

const Base = require('./base');

const Tvshow = Base.discriminator('Tvshow', new mongoose.Schema({
    season: { type: Number, required: true },
  }),
);

module.exports = mongoose.model('Tvshow');
```

Now if we create a new book for our collection, the new Book instance will show up in our MongoDB collection like this:

```
{
    "_id": {
        "$oid": "unique object ID"
    },
    "itemtype": "Book", 
    "author": "Book Author 1",
    "title": "Book Title 1",
    "date_added": {
        "$date": "2018-02-01T00:00:00.000Z"
    },
    "redo": false,
}
```

Cool, right? Now let's fetch some data. The example below will return the amount of books in our collection, and all tv shows with their titles and seasons:

```
> controllers/someController.js

const Book = require('../models/book');
const Tvshow = require('../models/tvshow');
const async = require('async');

exports.a_bunch_of_stuff = function(req, res) {
	async.parallel({
		book_count: function (callback) {
			Book.count(callback);
		},
		tvshow_all: function(callback) {
			Tvshow.find({}, 'title season', callback)
		},
	}, function(err, results) {
		res.render('index', { error: err, data: results });
	});
};

```

## Wrapping up
By using a discriminator we have four small files with DRY code, instead of three larger model files with lots of the same code 😎 now anytime I want to add a new property that is shared across schemas, I'll only have to edit `Base`. And if I want to add new models (maybe I should start keeping track of concerts I go to!), I can easily extend existing properties when needed.

If you liked this post, please consider [sharing it](https://twitter.com/intent/tweet?text=Getting%20started%20with%20Mongoose%20discriminators%20in%20Express.js%20by%20@helenasometimes%20-%20https://nienkedekker.com/blog/getting-started-with-mongoose-discriminators-in-express-js)!

<template>
  <main>
    <h1>#staythefuckhome (and read books)</h1>
    <p>👉 support your local book stores (if it's safe to do so)</p>
    <nav>
      <button @click="category=''">
        all
      </button><button
        v-for="(cat, index) in categories"
        :key="index"
        @click="category=cat"
      >
        {{ cat }}
      </button>
    </nav>
    <section>
      <h2>Total: {{ filteredLength }}</h2>
      <ul>
        <li
          v-for="book in filtered"
          :key="book.id"
          class="book"
        >
          <p>{{ book.author }} - <i>{{ book.title }}</i></p>
          <p class="bookDescription">
            {{ book.description }}
          </p>
          <p>
            <a
              :href="book.link"
              class="link"
            >Goodreads</a>
          </p>
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
const getBooks = () => import('~/static/books.json').then((books) => books.default || books);

export default {
  layout: 'books',
  async asyncData() {
    const data = await getBooks();
    return {
      categories: data.books.categories,
      books: data.books.items,
      length: data.books.items.length,
    };
  },
  data() {
    return {
      category: '',
      tags: [],
    };
  },
  computed: {
    filtered() {
      if (this.category === '') {
        return this.books;
      }
      return this.books.filter((books) => books.tags.includes(this.category));
    },
    filteredLength() {
      if (this.category === '') {
        return this.length;
      }
      return this.filtered.length;
    },
  },
};
</script>
<style scoped lang="scss">
  main {
    margin: 2em auto 4em auto;
    padding: 1em;
    font-weight: 400;
    font-size: 1.1em;
    color: #26183c;
    max-width: 800px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    line-height: 2;
  }

  nav {
    margin: 1em 0 1em 0;
  }

  .book {
    margin-bottom: 2em;
  }

  button {
    border: 0;
    padding: .5em 1.2em;
    border-radius: 30px;
    cursor: pointer;
    margin: .6em 1em 0 0;
    background: rgba(116, 88, 196, 0.15);
    font-size: .75em;
    color: #26183c;

    &:hover {
      background: rgba(116, 88, 196, 0.35);
    }
  }

  .bookDescription {
    font-size: .9em;
    line-height: 1.5;
    color: #6c6a86;
  }

  .link {
    font-size: .75em;
    vertical-align: text-top;
    line-height: 1;
    color: #756c95;
    border-bottom: 2px solid rgba(255, 84, 203, 0.33);

    &:hover {
      color: #3a364b;
    }
  }
</style>

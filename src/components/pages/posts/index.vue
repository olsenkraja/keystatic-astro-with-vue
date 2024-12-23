<template>
  <main>
    <ul>
      <li v-for="post in posts">
        <a :href="'/posts/' + post.slug">{{post.data.title}}</a>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { getCollection } from 'astro:content';

const posts = await getCollection('posts');

if (!posts) {
  throw new Error('Entry not found');
}
</script>

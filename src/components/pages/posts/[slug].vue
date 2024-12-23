<template>
  <main>
    <h1>{{ entry.data.title }}</h1>
    <p>{{ entry.data.description }}</p>
    <div v-html="entry.body" />
    <pre>{{entry}}</pre>
  </main>
</template>

<script setup>
import { getEntry } from 'astro:content';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});
// Fetch a single entry by collection and slug
const entry = await getEntry('posts', props.slug);

if (!entry) {
  throw new Error('Entry not found');
}
</script>

# Vue CLI Plugin Markdown

A Vue Cli 3 plugin to `import` or `require` and parse `.md` files with no required configuration.

**IMPORTANT: Your app must be created with Vue-CLI 3 (vue create my-app), will not work with Vue-CLI 2 (vue init webpack my-app)!**

## Quick Start:

Open a terminal in the directory of your app created with Vue-CLI 3.

Then, install vue-cli-plugin-markdown by running:

`vue add markdown`

That's It! You're ready to import or require .md files!

## Example:

```javascript
<template>
  <div v-html="markdown"/>
</template>

<script>
import markdown from "@/assets/markdown.md";

export default {
  data() {
    return {
      markdown
    };
  }
};
</script>

```

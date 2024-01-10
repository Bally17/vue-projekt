import { createPinia } from 'pinia';
import { defineStore } from 'pinia'  
const pinia = createPinia();

export const myStore = defineStore('myStore', {
  state: () => ({
    socialLinks: [
      { name: 'Home', url: '/' },
      { name: 'About us', url: '/about' },
      { name: 'Blog Entries', url: '/blog-entries' },
      { name: 'Post Details', url: '/post-details' },
      { name: 'Contact Us', url: '/contact-us' },
    ],
  }),
});

export default myStore;

import { createPinia } from 'pinia';
import { defineStore } from 'pinia'  
const pinia = createPinia();

export const myStore = defineStore('myStore', {
  state: () => ({
    socialLinks: [
      { name: 'Facebook', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'Behance', url: '#' },
      { name: 'Linkedin', url: '#' },
      { name: 'Dribbble', url: '#' },
    ],
    links: [
        { name: 'Home', url: '/' },
        { name: 'About us', url: '/about' },
        { name: 'Blog Entries', url: '/blog-entries' },
        { name: 'Post Details', url: '/post-details' },
        { name: 'Contact Us', url: '/contact-us' },
      ],
  }),
});

export default myStore;

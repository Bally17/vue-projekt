// src/stores/store.js
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
    copyrightYear: 2020,
    designUrl: 'https://templatemo.com',
  }),
});

export default myStore;

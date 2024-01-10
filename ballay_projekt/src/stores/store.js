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
    commentItems : [
        {
          image: './images/comment-author-01.jpg',
          author: 'Charles Kate',
          date: 'May 16, 2020',
          content: 'Fusce ornare mollis eros. Duis et diam vitae justo fringilla condimentum eu quis leo. Vestibulum id turpis porttitor sapien facilisis scelerisque. Curabitur a nisl eu lacus convallis eleifend posuere id tellus',
        },
        {
          image: './images/comment-author-02.jpg',
          author: 'Thirteen Mana',
          date: 'May 20, 2020',
          content: 'In porta urna sed venenatis sollicitudin. Praesent urna sem, pulvinar vel mattis eget.',
        },
        {
          image: './images/comment-author-03.jpg',
          author: 'Belisimo Mama',
          date: 'May 21, 2020',
          content: 'Nullam nec pharetra nibh. Cras tortor nulla, faucibus id tincidunt in, ultrices eget ligula. Sed vitae suscipit ligula. Vestibulum id turpis volutpat, lobortis turpis ac, molestie nibh.',
        }
      ],
  }),
});

export default myStore;

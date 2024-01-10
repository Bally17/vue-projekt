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
    images: [
        { 
            src: './images/banner-item-01.jpg', 
            alt: 'Image 1 Alt',
            category: 'Fashion',
            title: 'Morbi dapibus condimentum', 
            author: 'Admin',
            date: 'May 12, 2020',
            comment: '12',
        },
        { 
            src: './images/banner-item-02.jpg', 
            alt: 'Image 1 Alt',
            category: 'Nature',
            title: 'Donec porttitor augue at velit', 
            author: 'Admin',
            date: 'May 14, 2020',
            comment: '24',
        },
        { 
            src: './images/banner-item-03.jpg', 
            alt: 'Image 1 Alt',
            category: 'Lifestyle',
            title: 'Best HTML Templates on TemplateMo', 
            author: 'Admin',
            date: 'May 16, 2020',
            comment: '36',
        },
        { 
            src: './images/banner-item-04.jpg', 
            alt: 'Image 1 Alt',
            category: 'Fashion',
            title: 'Responsive and Mobile Ready Layouts', 
            author: 'Admin',
            date: 'May 18, 2020',
            comment: '48',
        },
        { 
            src: './images/banner-item-05.jpg', 
            alt: 'Image 1 Alt',
            category: 'Nature',
            title: 'Cras congue sed augue id ullamcorper', 
            author: 'Admin',
            date: 'May 24, 2020',
            comment: '64',
        },
        { 
            src: './images/banner-item-06.jpg', 
            alt: 'Image 1 Alt',
            category: 'Lifestyle',
            title: 'Suspendisse nec aliquet ligula', 
            author: 'Admin',
            date: 'May 26, 2020',
            comment: '72',
        },
        // Add more images as needed
      ],
  }),
});

export default myStore;

<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="social-icons">
              <li v-for="socialLink in socialLinks" :key="socialLink.name">
                <a :href="socialLink.url">{{ socialLink.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-12">
            <div class="copyright-text">
              <p>
                Copyright {{ copyrightYear }} Stand Blog Co.
                | Design: <a :href="designUrl" rel="nofollow" target="_parent">TemplateMo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
import { defineComponent } from 'vue';
import { myStore } from '@/stores/store.js'; // Adjust the path based on your project structure

export default defineComponent({
  setup() {
    const store = myStore();

    return {
      socialLinks: store.socialLinks,
      copyrightYear: store.copyrightYear,
      designUrl: store.designUrl,
    };
  },
});
</script>
  
<style>
footer {
	margin-top: 100px;
	text-align: center;
	background-color: #20232e;
	padding: 60px 0px;
}

footer ul.social-icons {
	padding-bottom: 60px;
	margin-bottom: 60px;
	border-bottom: 1px solid rgba(250,250,250,0.15);
}

footer ul.social-icons li {
	display: inline-block;
	margin-right: 30px;
}

footer ul.social-icons li:after {
	content: "|";
	color: #fff;
	margin-left: 30px;
}

footer ul.social-icons li:last-child {
	margin-right: 0px;
}

footer ul.social-icons li:last-child::after {
	display: none;
}

footer ul.social-icons li a {
	font-size: 14px;
	text-transform: uppercase;
	color: #fff;
	font-weight: 500;
	letter-spacing: 0.25px;
	transition: all .3s;
    text-decoration: none;
}

footer ul.social-icons li a:hover {
	color: #f48840;
}

footer p {
	font-size: 13px;
	text-transform: uppercase;
	color: #fff;
}

footer p a {
	color: #f48840;
    text-decoration: none;
}

footer p a:hover {
	color: #f48840;
}
</style>
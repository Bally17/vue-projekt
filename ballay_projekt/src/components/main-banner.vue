<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  msg2: {
    type: String,
    required: true
  },
})
</script>
<template>
    <div class="heading-page header-text">
      <section class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-content">
                <h4>{{msg}}</h4>
                <h2>{{msg2}}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<style>
.heading-page {
	padding-top: 110px;
}

.page-heading {
	margin: 0px 10px;
	padding: 120px 0px;
	text-align: left;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(./images/heading-bg.jpg);
}

.page-heading .text-content h4 {
	color: #f48840;
	font-size: 18px;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.5px;
	margin-bottom: 15px;
}

.page-heading .text-content h2 {
	color: #fff;
	font-size: 36px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}
</style>
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
  msg3: {
    type: String,
    required: true
  }
})
</script>
<template>
<div class="col-lg-12">
    <div class="sidebar-item submit-comment">
        <div class="sidebar-heading">
            <h2>{{msg}}</h2>
        </div>
        <div class="content">
            <form id="comment" action="#" method="post">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <fieldset>
                            <input name="name" type="text" id="name" placeholder="Your name">
                        </fieldset>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <fieldset>
                            <input name="email" type="text" id="email" placeholder="Your email" >
                        </fieldset>
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <fieldset>
                            <input name="subject" type="text" id="subject" placeholder="Subject">
                        </fieldset>
                    </div>
                    <div class="col-lg-12">
                        <fieldset>
                            <textarea name="message" rows="6" id="message" :placeholder="msg3" ></textarea>
                        </fieldset>
                    </div>
                    <div class="col-lg-12">
                        <fieldset>
                            <button type="submit" id="form-submit" class="main-button">{{msg2}}</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<style scoped>
.contact-us .down-contact,
.contact-us #map {
	margin-top: 80px;
}

.contact-us .sidebar-heading h2 {
	font-size: 18px;
	text-transform: uppercase;
	font-weight: 900;
	letter-spacing: 0.5px;
	color: #20232e;
	border-bottom: 1px solid #eee;
	padding-bottom: 15px;
	margin-bottom: 25px;
}

.contact-us .contact-form input {
	width: 100%;
	height: 46px;
	border: 1px solid #eee;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	color: #7a7a7a;
	outline: none;
	padding: 0px 15px;
	margin-bottom: 30px;
}

.contact-us .contact-form textarea {
	width: 100%;
	height: 46px;
	border: 1px solid #eee;
	font-size: 13px;
	text-transform: uppercase;
	font-weight: 500;
	color: #7a7a7a;
	outline: none;
	padding: 10px 15px;
	margin-bottom: 30px;
	height: 180px;
	max-height: 220px;
	max-width: 100%;
	min-width: 160px;
}

.contact-us .contact-form input::placeholder,
.contact-us .contact-form textarea::placeholder {
	color: #aaa;
}

.contact-us .contact-form button {
	display: inline-block;
	background-color: #f48840;
	color: #fff;
	font-size: 13px;
	font-weight: 500;
	padding: 12px 20px;
	text-transform: uppercase;
	transition: all .3s;
	border: none;
	outline: none;
}

.contact-us .contact-form button:hover {
	background-color: #fb9857;
}

.contact-us .contact-information {
	margin-left: 30px;
}

.contact-us .contact-information ul li {
	margin-bottom: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #eee;
}

.contact-us .contact-information ul li:last-child {
	margin-bottom: 0px;
	padding-bottom: 0px;
	border-bottom: none;
}

.contact-us .contact-information ul li h5 {
	font-size: 19px;
	font-weight: 900;
	color: #20232e;
	line-height: 30px;
}

.contact-us .contact-information ul li span {
	display: block;
	font-size: 14px;
	color: #aaa;
	margin-top: 8px;
}
</style>
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

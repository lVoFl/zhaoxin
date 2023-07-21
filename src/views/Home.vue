<script setup>
import header1 from '../components/header.vue'
import singup from '../components/sign up.vue'
import clocklist from '../components/clocklist.vue'
import clock from '../components/clock.vue'
import addclock from '../components/addclock.vue'
import checkin from '../components/checkin.vue'
</script>

<template>
  <div id="header1">
    <header1 @change_showcheck="change_showcheck" @change_showadd="change_showadd"></header1>
  </div>
  <div id="Main">
  <div>
    <clocklist></clocklist>
  </div>
  <div>
    <clock></clock>
  </div>

  </div>
  
  <div id="signup" v-show="_showup" >
    <singup @change_showup="change_showup"></singup>
  </div>
  <div id="addclock" v-show="_showadd">
    <addclock @change_showadd="change_showadd"></addclock>
  </div>
</template>
<script>
export default {
  data(){
    return{
      _showup: false,
      _showadd: true,
    }
  },
  components: {
    header1,
    singup,
    clocklist,
    clock,
    addclock,
    checkin,
  },
  methods: {
    change_showup() {
      this._showup = !this._showup;
    },
    change_showadd() {
      this._showadd = !this._showadd;
    },
    change_showcheck() {

    }
  },
};
</script>



<style scoped>
  #header1{
    background-color: antiquewhite;
    margin: 0 auto;
    max-width: 2560px;
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-content:center;
    align-items:center;
    width: 100%;
    min-height: 64px;
  }
  
</style>
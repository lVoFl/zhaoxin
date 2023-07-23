<template>
  <div id="header1">
    <header1 @change_showcheck="change_showcheck" @change_showadd="change_showadd"></header1>
  </div>
  <div class="Main">
    <div id="clocklist">
      <clocklist ref="clocklist1"></clocklist>
    </div>

    <div class="right">
      <clock></clock>
    </div>
  </div>
  
  <div id="signup" v-show="_showup" >
    <singup @change_showup="change_showup"></singup>
  </div>
  <div id="addclock" v-show="_showadd">
    <addclock @change_showadd="change_showadd" @addclock1="addclock1"></addclock>
  </div>
  <div id="checkin" v-show="_showcheck">
    <checkin></checkin>
  </div>
</template>

<script setup>
import header1 from '../components/header.vue'
import singup from '../components/sign up.vue'
import clocklist from '../components/clocklist.vue'
import clock from '../components/clock.vue'
import addclock from '../components/addclock.vue'
import checkin from '../components/checkin.vue'

import { ref } from "vue"

var _showup = ref(false);
var _showadd = ref(false);
var _showcheck = ref(false);

function change_showup() {
  _showup.value = !_showup.value;
}

function change_showadd() {
  _showadd.value = !_showadd.value;
}

function change_showcheck() {
  _showcheck.value = !_showcheck.value;
}

function addclock1(msg) {
  var child = this.$refs.clocklist1;
  child.add_clock(msg);
}
</script>

<style scoped>
  .Main {
    display: grid;
    grid-template-columns: 0.7fr 3fr;
    height: calc(94vh);
  }
  #header1{
    background-color: antiquewhite;
    margin: 0 auto;
    max-width: 2560px;
    top:0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-content:center;
    align-items:center;
    width: 100%;
    height: calc(6vh);
  }
  #clocklist{
    width: 100%;
    overflow: scroll;
    float: left;
  }
  .right{
    background: green;
    overflow: scroll;
    width: 100%;
    
  }

  #addclock{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 30rem;
    height: 15rem;
    border-radius: 1rem;
    background-color: rgb(230,232,235);
  }
</style>

<!--<script>
export default {
  data(){
    return{
      _showup: false,
      _showadd: false,
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
  // emits: ['']
  mounted() {
    
  },
  methods: {
    change_showup() {
      this._showup = !this._showup;
    },
    change_showadd() {
      this._showadd = !this._showadd;
    },
    change_showcheck() {

    },

    addclock1(msg) {
      
    },
    
    
  },
};
</script>--->
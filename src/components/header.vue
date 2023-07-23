<template>
    <div id="icon">
        <img src="../icon/rili.svg" class="svg" id="daka" @click="opencheckin">
        <!-- <img src="../icon/gengduo.svg"> -->
        <img src="../icon/zengjia.svg" class="svg" id="add" @click="openadd">
    </div>
    <div>{{ username }}</div>
</template>

<script setup>
import {ref} from 'vue';
import { defineProps, defineEmits  } from 'vue';
const username = ref('');
const emit = defineEmits(['change_showadd', 'change_showcheck']);
function opencheckin() {
    emit('change_showcheck');
}

function openadd() {
    emit('change_showadd');
}

</script>
<style>
#icon{
    margin: 0 2rem;
}
.svg{
    width: 30px;
    margin: 0 0.5rem;
    cursor: pointer;
}
</style>
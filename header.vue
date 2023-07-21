<template>
    <div id="icon">
        <img src="../icon/rili.svg" class="svg" id="daka" @click="opencheckin">
        <!-- <img src="../icon/gengduo.svg"> -->
        <img src="../icon/zengjia.svg" class="svg" id="add" @click="openadd">
    </div>
    <div>{{ username }}</div>
</template>

<script>
// import { EventBus } from '../event-bus';
export default {
    data() {
        return {
            username: '用户名',
        }
    },
    
    methods: {
        opencheckin() {
            this.$emit("change_showcheck");
        },
        openadd() {
            this.$emit("change_showadd");
        }
    },
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
<template>
    <span><input v-model="name" placeholder="name"/></span>
    <span><input v-model="time" placeholder="time" id="time"/>分钟</span>
    <span>
        <button @click="changetime(15)">15min</button>
        <button @click="changetime(30)">30min</button>
        <button @click="changetime(45)">45min</button>
        <button @click="changetime(60)">1h</button>
    </span>

    <span>
        <button @click="submit">确认</button>
        <button @click="close">取消</button>
    </span>
</template>

<script>
// import { EventBus } from '../event-bus';
export default {
    data() {
        return {
            name: '',
            time: '',
            msg: '',
        }
    },
    // mounted() {
    //     EventBus.$on("aMsg", (msg) => {
    //         this.msg = msg;
    //     })
    // },
    methods: {
        changetime(long) {
            this.time = long;
        },

        close() {
            this.$emit("change_showadd");
        },

        submit() {
            this.close();
        },
        
    }
}
</script>../event-bus
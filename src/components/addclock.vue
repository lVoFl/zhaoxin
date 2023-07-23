<template>
    <span><input v-model="name" placeholder="新建事项"/></span>
    <br />
    <span><input v-model="time" placeholder="time" id="time"/>分钟</span>
    <br />
    <span>
        <button @click="changetime(15)">15min</button>
        <button @click="changetime(30)">30min</button>
        <button @click="changetime(45)">45min</button>
        <button @click="changetime(60)">1h</button>
    </span>
    <br />
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
            time: 5,
            msg: {
                n: '',
                t: '',
            },
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
            this.msg.n = this.name;
            this.msg.t = this.time;
            this.$emit("addclock1", this.msg);
            // console.log(this.name);
            this.close();
        },
        
        
    }
}
</script>
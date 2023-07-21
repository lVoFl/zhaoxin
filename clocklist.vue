<template>
    <div id="_button">
        <button @click="add_clock"></button>
    </div>
    <div id="main">
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            alarm_clock:{
                name: '',
                duration: 0,//时长
                countdown: true,//正向?反向计时
                delet: false,//完成后删除
                repeat: false,//完成后重复
            },
            // clock_list: alarm_clock[50],
            Num: 0,
        }
    },
    methods: {
        add_clock() {
            var new_clock = document.createElement("div");
            new_clock.id = this.Num;
            new_clock.className = 'alarm';
            this.Num = this.Num + 1;
            function suiJi(m,n){
                return m+parseInt(Math.random()*(n-m+1))
            }
            var result = "#"
            for(var i = 0; i<6; i++){
                result +=suiJi(0,15).toString(16)
            }
            new_clock.style.backgroundColor = result;
            document.getElementById('main').appendChild(new_clock);
        }
    },
};
</script>

<style>
.alarm{
    width: 50px;
    height: 30px;
}
</style>
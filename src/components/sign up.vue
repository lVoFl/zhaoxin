<template>
    <div>
      <input v-model="account"  placeholder="账号"/>
      <input v-model="password"  placeholder="密码"/>
      <button @click="submit">确认</button>
      <button @click="close">取消</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        account: '',
        password: ''
      };
    },
    methods: {
      submit() {
        
        // const { account, password } = this;
        // this.account = '';
        // this.password = '';

        this.close();
      },

      close() {
        this.$emit("change_showup");
      }
    }
  };
</script>
<style>
    
</style>
<template>
    <form action="">
        <select v-model="selectedOption">
            <option value="login">登陆</option>
            <option value="register">注册</option>
        </select>

        <br/>

        <label>用户名：</label>
        <input type="text" v-model="name"/>

        <br />
        
        <label>
            <label v-show="nameshow" id="namewrong">用户名错误</label>
        </label>

        <br />
        
        <label>密码：</label>
        <input type="password" v-model="password" />
        
        <br />
        
        <label>
            <label v-show="passwordshow" id="passwordwrong">密码错误</label>
        </label>

        <br />

        <button @click="submit">确认</button>
       
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            password: '',
            nameshow: false,
            passwordshow: false,
            selectedOption: 'login',
        };
    },
    methods: {
        submit() {
            if(selectedOption === 'login'){
                this.login();
            }
            else {
                this.register;
            }
        },
        async login() {
            try {
                // 发送登录请求
                const response = await axios.post('http://localhost:8090/users/login', {
                    name: this.name,
                    password: this.password,
                });

                // 从后端响应中获取 Token
                const token = response.data.token;

                // 保存 Token 到本地
                localStorage.setItem('token', token);
                console.log("success");
                // 登录成功，处理后续逻辑，例如跳转到其他页面
                // 例如：this.$router.push('/dashboard');

            } catch (error) {
                // 处理登录失败情况
                console.log('error');
                console.error('登录失败：', error);
            }
        },
        async register() {
            try {
                // 发送注册请求
                const response = await axios.post('http://localhost:8090/users/register', {
                name: this.name,
                password: this.password,
                });

                // 注册成功，显示成功提示
                console.log('注册成功！');
            } catch (error) {
                // 处理注册失败情况
                console.error('注册失败：', error);
            }
            }
    }
    
}

</script>

<style>
form {
  /* 居中表单 */
  margin: 0;
  width: 400px;
  /* 显示表单的轮廓 */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  /* Margin-bottom: 0; */
}

select{
    width: 80px;
}

label {
	display: inline-block;
	width: 80px;
	text-align: justify;
	text-align-last: justify;
	margin-right: 10px;
}

#namewrong {
    color: red;
    text-align:center;
}
#passwordwrong{
    color: red;
    text-align:center;
}
</style>
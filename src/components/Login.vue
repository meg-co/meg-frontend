<template>
    <div id="nav-login">
        <Navbar title="meg."></Navbar>
        <h1>Please log inwards.</h1>
        <div id="login-form">
            <form>
                <label for="email">Email</label>
                <input id="email"
                       type="text"
                       aria-label="email"
                       v-model="username"
                       placeholder="meg@meg.gg"
                       v-on:keypress="()=>purgeErrors('email')"> <span class="color-error" v-if="emailError">👈 this one please.</span><br/>
                <label for="password">Password</label>
                <input id="password"
                       type="password"
                       aria-label="password"
                       @keypress="()=>purgeErrors('password')"
                       v-model="password"> <span class="color-error" v-if="passwordError">👈 this one please.</span><br/>
                <button type="button" v-on:click="tryLogin">⇨</button> <span v-if="loginError" class="color-error">{{loginError.message}}</span>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Navbar from "./Navbar";
    window.axios = axios;
    export default {
        name: 'Login',
        components: {Navbar},
        data: () => ({
            username: '',
            password: '',
            emailError: false,
            passwordError: false,
            loginError: false
        }),

        methods: {
            tryLogin: async function() {
                this.purgeErrors('all')
                if (!this.password || !this.username) {
                    [this.emailError, this.passwordError] = [!this.username, !this.password];
                    return;
                }
                [this.emailError, this.passwordError] = [false, false]
                console.log(axios);
                let res;
                try {
                    res = await axios.post(`${process.env.VUE_APP_API_URL}/auth`, {
                            username: this.username,
                            password: this.password
                        },
                        {
                            header: {
                                Allow: '*',
                            }
                        });
                    window.localStorage.setItem('access_token', res.data.access_token);
                }
                catch (e) {
                    if (e.response.status === 401) {
                        this.loginError = {message: '👆 Nope.'}
                    }
                    console.dir(e)
                }
                console.log('RES', res);
                window.res = res;
            },
            purgeErrors: function(fromField) {
                if(fromField === 'email' || fromField === 'all') {
                    this.emailError = false;
                }
                if(fromField === 'password' || fromField === 'all') {
                    this.passwordError = false;
                }
                this.loginError = false;
            }
        }

    }
</script>

<style scoped>
    .color-error {
        color: #fc2222;
    }

    form {
        text-align: left;
    }

    #login-form {
        max-width: 240px;
        margin: 0 auto;
    }
    #login-form input {
        display: inline-block;
        float: right;
        margin-left: auto;
        horiz-align: right;
    }
</style>
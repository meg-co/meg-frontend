<template>
    <div id="root">
        <h1>Please log inwards.</h1>
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
</template>

<script>
    import axios from 'axios';
    window.axios = axios;
    export default {
        name: 'Login',
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

    #root {
        max-width: 400px;
        margin: 0 auto;
    }
</style>
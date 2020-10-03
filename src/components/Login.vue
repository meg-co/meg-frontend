<template>
    <div id="nav-login">
        <Navbar title="meg."></Navbar>
        <div class="just-some-extra-space please-keep-6ft-social-distance" style="width: 40px; margin: 60px; display:block;"></div>
        <h1 class="text-center">Please log inwards.</h1>
        <div id="login-form">
            <form>
                <md-field class="squoosh-field">
                    <label>Email</label>
                    <md-input v-model="username" @keypress="submitIfEnter"></md-input>
                </md-field><span class="color-error" v-if="emailError">👆this one please.</span>
                <md-field>
                    <label>Password</label>
                    <md-input v-model="password" type="password" @keypress="submitIfEnter"></md-input>
                </md-field><span class="color-error" v-if="passwordError">👆this one please.</span>
                <md-button id="login-button"
                           type="button"
                           class="md-raised"
                           @click="tryLogin"><i class="fas fa-arrow-right fa-lg"></i></md-button>
            </form>
            <span v-if="loginError" class="color-error">{{loginError.message}}</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Navbar from "./Navbar";

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
            submitIfEnter: async function(event) {
                if(event.key === 'Enter') {
                    return await this.tryLogin();
                }
            },
            tryLogin: async function() {
                console.log(1);
                this.purgeErrors('all')
                if (!this.password || !this.username) {
                    [this.emailError, this.passwordError] = [!this.username, !this.password];
                    return;
                }
                [this.emailError, this.passwordError] = [false, false]
                let res;
                console.log(2);
                try {
                    window.axios = axios;
                    window.t = this;
                    res = await axios.post(`${process.env.VUE_APP_API_URL}/auth`, {
                            username: this.username,
                            password: this.password
                        });
                    window.localStorage.setItem('access_token', res.data.access_token);
                    this.$router.replace(this.$route.query.redirect || '/messages')
                }
                catch (e) {
                    if (e.response.status === 401) {
                        this.loginError = {message: '👆 Nope.'}
                    }
                    else {
                        console.error(e)
                    }
                }
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
    * {
        background-color: #FAFAFA !important;
    }

    .color-error {
        color: #fc2222;
    }
    .text-center {
        text-align: center;
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
    #login-button {
        min-width: 48px;
        float: right;
        margin-right: 0;
        border-color: rgba(44, 62, 80, 0.64);
        border-width: 1px !important;
        border-style: solid;
        box-shadow: none;
    }
    .squoosh-field {
        margin-bottom: 0;
    }
</style>
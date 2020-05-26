<template>
    <section>
        <!-- submit.prevent is used to prevent the default submit reload page event -->
        <v-form v-on:submit.prevent="userLogin">
            <h1>Login</h1>
            <v-text-field v-model="login.username" label="User Name" required filled></v-text-field>
            <v-text-field v-model="login.password" label="Password" required filled type="password"></v-text-field>
            <div>
                <v-btn type="button" v-on:click="register" style="float:left;">New User</v-btn>
                <v-btn type="submit" style="float:right;">Login</v-btn>
            </div>
        </v-form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            login: {
                username: 'test@example.com',
                password: 'pass123'
            }
        }
    },
    methods: {
        async userLogin() {
            try {
                let response = await this.$auth.loginWith('local', { data: this.login })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        },
        register() {
            this.$router.push({ path: '/user/register' })
        }
    }
}
</script>
<style lang="scss" scoped>
.v-form {
    width: 50%;
    margin: 200px auto auto auto;
}
section {
    display: flex;
}
h1 {
    margin-bottom: 30px;
}
</style>

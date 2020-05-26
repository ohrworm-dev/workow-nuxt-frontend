<template>
    <section>
        <!-- submit.prevent is used to prevent the default submit reload page event -->
        <v-form v-on:submit.prevent="userRegister">
            <h1>Register Account</h1>
            <v-text-field v-model="login.username" label="User Name" required filled></v-text-field>
            <v-text-field v-model="login.password" label="Password" required filled type="password"></v-text-field>
            <v-text-field v-model="login.confimPass" label="Password" required filled type="password"></v-text-field>
            <div>
                <v-btn type="submit">Submit</v-btn>
            </div>
        </v-form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            login: {
                username: '',
                password: '',
                confimPass: ''
            }
        }
    },
    methods: {
        async userRegister() {
            try {
                let response = await this.$auth.loginWith('local', { data: this.login })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
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

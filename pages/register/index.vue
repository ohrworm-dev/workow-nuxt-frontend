<template>
    <section>
        <v-form @submit="userLogin" :lazy-validation="lazy">
            <v-text-field v-model="login.username" :counter="10" label="User Name" required></v-text-field>
            <v-text-field v-model="login.password" label="Password" required></v-text-field>
            <v-text-field v-model="login.password" label="Password" required></v-text-field>
            <div>
                <button type="submit">Submit</button>
            </div>
        </v-form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            lazy: false,
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
    margin: auto;
}
</style>

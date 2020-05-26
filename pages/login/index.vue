<template>
    <section>
        <v-form v-on:submit="userLogin">
            <v-text-field v-model="login.username" label="User Name" required></v-text-field>
            <v-text-field v-model="login.password" label="Password" required></v-text-field>
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

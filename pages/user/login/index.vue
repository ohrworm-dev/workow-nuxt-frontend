<template>
    <section>
        <!-- submit.prevent is used to prevent the default submit reload page event -->
        <form class="form-login" v-on:submit.prevent="userLogin">
            <div class="form-head">Login</div>
            <div class="block">
                <label for="user-name" class="form-label">User Name</label>
                <input class="txt-input w-full mb-5" id="user-name" v-model="login.username" label="User Name" placeholder="User Name" />
                <label for="password" class="form-label">Password</label>
                <input class="txt-input w-full mb-5" id="password" v-model="login.password" label="Password" placeholder="Password" type="password" />
            </div>
            <div>
                <button class="bg-gray-400 p-2 border rounded hover:bg-gray-600" type="button" v-on:click="register" style="float:left;">
                    New User
                </button>
                <button class="bg-blue-500 p-2 border rounded hover:bg-blue-700 text-white" type="submit" style="float:right;">Login</button>
            </div>
        </form>
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
<style lang="scss" scoped></style>

<template>
    <section>
        <!-- submit.prevent is used to prevent the default submit reload page event -->
        <form class="form-register" v-on:submit.prevent="userRegister">
            <div class="form-head">Register Account</div>
            <label for="user-name" class="form-label">User Name</label>
            <input class="txt-input mb-5" id="user-name" v-model="register.username" label="User Name" placeholder="User Name" />
            <label for="password" class="form-label">Password</label>
            <input class="txt-input mb-5" id="password" v-model="register.password" label="Password" type="password" placeholder="Password" />
            <label for="confirm-pass" class="form-label">Confirm Password</label>
            <input
                class="txt-input mb-5"
                v-model="register.confimPass"
                id="confirm-pass"
                label="Password"
                placeholder="Confirm Password"
                type="password"
            />
            <div>
                <button class="bg-blue-500 p-2 border rounded hover:bg-blue-700 text-white" type="submit">Submit</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            register: {
                username: '',
                password: '',
                confimPass: ''
            }
        }
    },
    methods: {
        async userRegister() {
            try {
                this.$axios.request()
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>

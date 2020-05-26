<template>
    <v-app-bar id="nav" fixed app>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link class="login" v-if="!$auth.loggedIn" to="/user/login">Login</nuxt-link>
        <div v-else class="auth-options">
            <nuxt-link to="/user/profile">My Profile</nuxt-link>
            <div class="logout">
                <span>Welcome {{ $auth.user.email }}</span>
                <v-btn v-on:click="$auth.logout()">Logout</v-btn>
            </div>
        </div>
    </v-app-bar>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
#nav {
    a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
    .login,
    .logout {
        margin-left: auto;
    }
    .auth-options {
        width: 100%;
        display: flex;
        .v-btn {
            height: 20px;
        }
    }
}
</style>

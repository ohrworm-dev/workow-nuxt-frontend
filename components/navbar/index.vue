<template>
    <v-app-bar id="nav" fixed app>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link v-if="!$auth.loggedIn" to="/login">Login</nuxt-link>
        <div v-else>
            {{ $auth.user.email }}
            <v-btn v-on:click="$auth.logout()">Logout</v-btn>
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
}
</style>

<template>
    <section>
        <div id="nav">
            <!-- <nuxt-link v-for="(link, index) in navLinks" :key="index" :to="link.path">{{ link.name }}</nuxt-link> -->
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link v-if="!$auth.loggedIn" to="/login">Login</nuxt-link>
            <div v-else>
                {{ $auth.user.email }}
                <v-btn>Logout</v-btn>
            </div>
        </div>
    </section>
</template>
<script>
// import router from './nuxt/router.js'
// const { routes } = router.routerOptions
// export default {
//     computed: {
//         navLinks: function() {
//             return routes
//         }
//     }
// }
</script>

<template>
    <section>
        <!-- <navbar-section /> -->
        <navbar-section />
        <router-view />
    </section>
</template>

<script>
export default {
    components: {
        'navbar-section': () => ({
            component: import(/* webpackChunkName "navbarSection" */ '@/components/navbar')
        })
    }
}
</script>

<style lang="scss" scoped>
#nav {
    padding: 30px;

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

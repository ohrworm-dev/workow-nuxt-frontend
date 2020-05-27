<template>
    <div id="app">
        <!-- navbar -->
        <navbar-section />
        <!-- pages injected here -->
        <nuxt />
        <!-- footer -->
    </div>
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

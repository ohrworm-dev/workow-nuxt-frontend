<template>
    <v-app>
        <navbar-section />
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
    </v-app>
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

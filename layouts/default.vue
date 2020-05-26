<template>
    <v-app>
        <!-- navbar -->
        <navbar-section />
        <v-content>
            <v-container>
                <!-- pages injected here -->
                <nuxt />
            </v-container>
        </v-content>
        <!-- footer -->
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

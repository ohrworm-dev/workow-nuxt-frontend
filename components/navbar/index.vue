<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-2">
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <nuxt-link class="nav-link" to="/">
                    Home
                </nuxt-link>
                <nuxt-link v-if="$auth.loggedIn" class="nav-link" to="/user/profile">My Profile</nuxt-link>
            </div>
            <div>
                <nuxt-link class="login" v-if="!$auth.loggedIn" to="/user/login">Login</nuxt-link>
                <div v-else>
                    <span>Welcome {{ $auth.user.email }}</span>
                    <button class="logout" v-on:click="$auth.logout()">Logout</button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.login,
.logout {
    @apply inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4;
    &:hover {
        @apply border-transparent text-teal-500 bg-white;
    }
    @screen lg {
        @apply mt-0;
    }
}
.nav-link {
    @apply text-teal-200 block mt-4 mr-4;
    @screen lg {
        @apply mt-0 inline-block;
    }
    &:hover {
        @apply text-white;
    }
}
</style>

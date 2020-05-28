const actions = {
    API_REGISTER_USER: function({}, form) {
        return this.$axios.request('/user/register', {
            data: form
        })
    },
    API_LOGIN_USER: function({}, form) {
        return this.$auth.loginWith('local', { data: form })
    },
    API_LOGOUT_USER: function({}) {
        return this.$auth.logout()
    }
}

export default {
    actions
}

const actions = {
    LOGIN_USER: async function({ dispatch }, form) {
        console.log('logging in')
        await dispatch('API_LOGIN_USER', form).catch(err => console.error(err))
        console.log('logged in')
    },
    LOGOUT_USER: async function({ dispatch }) {
        await dispatch('API_LOGOUT_USER').catch(err => console.error(err))
    }
}

export default {
    actions
}

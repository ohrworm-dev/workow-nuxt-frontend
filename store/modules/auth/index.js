const actions = {
    LOGIN_USER: async function({ dispatch }, form) {
        await dispatch('API_LOGIN_USER', form).catch(err => console.error(err))
    },
    REGISTER_USER: async function({ dispatch }, form) {
        await dispatch('API_REGISTER_USER').catch(err => console.error(err))
        await dispatch('API_LOGIN_USER', form).catch(err => console.error(err))
    },
    LOGOUT_USER: async function({ dispatch }) {
        await dispatch('API_LOGOUT_USER').catch(err => console.error(err))
    }
}

export default {
    actions
}

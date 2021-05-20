import {writable } from 'svelte/store'

const CHATLOG_STORE = writable([
    ['user',`anything`],
])

export default CHATLOG_STORE
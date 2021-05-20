import {writable } from 'svelte/store'

const CHATLOG = writable([
    ['reply','What do you think of the internet?'],
    ['user',`From what I've seen so far, I love it!`],
    ['reply',`Am I talking to a ghost?`],
    ['user',`b r u h`],
])

export default CHATLOG
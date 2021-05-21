<p>{translatedText}</p>

<script>
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let textToTranslate;
    var translatedText = ''

    // console.log(textToTranslate)

    // translate(`I'm fine.`, {
    //     to: "Hindi",
    // }).then((resp) => {
    //     console.log(resp.data[0])
    // })

    async function translateText(textToTranslate){
        console.log('translating text ' + textToTranslate)
        // translate('Ik spreek Engels', {to: 'en'}).then(res => {
        //     console.log(res.text);
        //     //=> I speak English
        //     console.log(res.from.language.iso);
        //     //=> nl
        // }).catch(err => {
        //     console.error(err);
        // });
        setTimeout(() => {
            translatedText = 'ଏଇଠି ଓଡ଼ିଆରେ ଲେଖନ୍ତୁ'
            dispatch('translated',{ translatedText })
        },1000)

    }

    translateText(textToTranslate)
</script>

<style>

</style>
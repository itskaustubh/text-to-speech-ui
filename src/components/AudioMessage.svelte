<div class="scaffold">
    <div class="odia-audio">
        {#if isProcessing}
            <Bubbles/>
        {:else}
            <PlayButton audioURL ={audioURL}/>
        {/if}
    </div>
    <div class="odia-text">
        <Translate textToTranslate={textToTranslate} on:translated={fetchSpeech}/>
    </div>
</div>

<script>
    import PlayButton from './PlayButton.svelte'
    import Bubbles from './Bubbles.svelte'
    import Translate from './Translate.svelte'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let textToTranslate;

    let isProcessing = true;
    let audioURL = ''

    // console.log(textToTranslate)

     function fetchSpeech(event){
         console.log('fetching speech for ' + event.detail.translatedText)

        setTimeout(function(){ 
            audioURL = 'http://ai4language.in/static/661491423.wav'
            isProcessing = false;
            dispatch('processed')
            console.log(audioURL)
        }, 1000);

        // console.log('testing tts')
        // var rand = Math.floor(Math.random() * 1001);
        // var fileData = new FormData();
        // fileData.append("file", TranslatedOdiaText);
        // fileData.append("id", rand);  

        // fetch('http://ai4language.in/analyze', {
        //     method: 'post',
        //     body: fileData,
        // }).then(r => r.json())
        // .then(r => {
        // console.log('Response: ',r.result) // You will get JSON response here.
        // }).catch(error => console.error('Error', error))

     }


</script>

<style lang='scss'> 
    .scaffold{
        display: flex;

        .odia-text{
            margin-left: 8px;
        }
    }
</style>
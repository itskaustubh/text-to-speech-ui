<div class="scaffold">
    <div class="odia-audio">
        {#if isProcessing}
            <Bubbles/>
        {:else}
            <PlayButton audioURL ={audioURL}/>
        {/if}
    </div>
    <div class="odia-text">
        <Translate textToTranslate={textToTranslate}/>
    </div>
</div>

<script>
    import PlayButton from './PlayButton.svelte'
    import Bubbles from './Bubbles.svelte'
    import Translate from './Translate.svelte'

    export let textToTranslate;

    let isProcessing = true;
    let audioURL = ''

    // console.log(textToTranslate)

    setTimeout(function(){ 
        audioURL = 'http://ai4language.in/static/661491423.wav'
        isProcessing = false;
     }, 1000);

     function fetchSpeech(TranslatedOdiaText){
        console.log('testing tts')
        var rand = Math.floor(Math.random() * 1001);
        var fileData = new FormData();
        fileData.append("file", TranslatedOdiaText);
        fileData.append("id", rand);  

        fetch('http://ai4language.in/analyze', {
            method: 'post',
            body: fileData,
        }).then(r => r.json())
        .then(r => {
        console.log('Response: ',r.result) // You will get JSON response here.
        }).catch(error => console.error('Error', error))
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
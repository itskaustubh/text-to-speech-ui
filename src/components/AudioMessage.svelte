<div class="scaffold">
    <div class="odia-audio">
        {#if isProcessing}
            <Bubbles/>
        {:else}
            <PlayButton/>
        {/if}
    </div>
    <div class="odia-text">
        <Translate/>
    </div>
</div>

<script>
    import PlayButton from './PlayButton.svelte'
    import Bubbles from './Bubbles.svelte'
    import Translate from './Translate.svelte'

    let isProcessing = true;
    setTimeout(function(){ 
        isProcessing = false;
     }, 3000);
</script>

<style lang='scss'> 
    .scaffold{
        display: flex;

        .odia-text{
            margin-left: 8px;
        }
    }
</style>
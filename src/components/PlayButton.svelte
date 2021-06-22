<!-- https://codepen.io/MarioDesigns/pen/ENevMJ -->
<div class="container noselect" >
	<div class="btn play" class:play={!isPlaying} class:pause={isPlaying} on:click={handlePlayPause}>
		<span class="bar bar-1"></span>
		<span class="bar bar-2"></span>			 	
        <span class="bar bar-3"></span>		
	</div>
</div>


<script>
    export let audioURL

    let isPlaying = false
    var audio = new Audio(audioURL);
    audio.addEventListener('ended', () => {
        // console.log('audio ended')
        isPlaying = false
    });

    function handlePlayPause(){
        isPlaying = !isPlaying
        if(isPlaying){
            audio.play();
        }else{
            audio.pause()
        }
    }
</script>

<style lang='scss'>
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    
    .btn {
        position: relative;
        width: 20px;
        height: 20px;
        // border: lightpink 3px solid;
        border-radius: 20px;
        cursor: pointer;
        // transition: border 0.1s ease-in-out;
        
        &:hover {
            // border: #333 3px solid;
            .bar {
                background-color: #333;	
            }
        }
        
        .bar {
            display: inline-block;
            position: absolute;
            top: 0px;
            left: -10px;
            width: 3px;
            height: 20px;
            border-radius: 3px;
            background-color: #6CAD96;
            transform-origin: center;
            transition: transform 0.2s ease-in-out, background 0.1s ease-in-out;
        }
        
        &.pause {
            .bar-1 {
                transform: translateX(13.5px) translateY(0px) rotate(0deg);
            }
            .bar-2 {
                transform: translateX(24px) translateY(0px) rotate(0deg);
            }
                    .bar-3 {
                transform: translateX(13.5px) translateY(0px) rotate(0deg);
            }
        }
        
        &.play {
            .bar-1 {
                transform: translateX(20px) translateY(-5px) rotate(-55deg);
            }
            .bar-2 {
                transform: translateX(20px) translateY(5px) rotate(-125deg);
            }
                    .bar-3 {
                transform: translateX(12px) translateY(-1px) rotate(0deg);
                        height: 22px;
            }
        }
        
    }
</style>
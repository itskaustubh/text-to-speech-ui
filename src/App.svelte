<!-- <div class="background"></div> -->
<div class="flex-div">
	<div class="left-div">
		<Details/>
	</div>
	<div class="center-div">
		<div class="center-header noselect"><h1 id='center-title'>Odia Text to Speech</h1></div>
		<div class="scaffold">
			<div class="chatbox">
				<div class="header">
					<div class="api-status" class:api-status-fade="{serverStatus === 'Connected'}"> 
						<span class="dot" bind:this={serverDot} ></span>
						<p>{serverStatus}</p>
						{#if serverStatus == "Initializing"}
							<p id='three-dots'></p>
						{/if}
					</div>
					
				</div>
				<div class="messages" bind:this={messageBox}>
					<div class="message-reply-scaffold">
						<div class="message-reply"><p>Type anything.. We'll convert it to Odia Speech!</p></div>
					</div>
					{#each CHATLOG as log}
						{#if log[0] === 'reply'}
							<div class="message-reply-scaffold">
								<div class="message-reply">
									<AudioMessage textToTranslate = {textToTranslate} on:processed = {allowNewMessages}/>
								</div>
							</div>
						{:else}
						<div class="message-user-scaffold">
							<div class="message-user"><p>{log[1]}</p></div>
						</div>
						{/if}
					{/each}
				</div>
				<!-- https://svelte.dev/repl/8eb540552faa4651a398b182fa5cdd48?version=3.24.1 -->
				<form class="input-box" on:submit|preventDefault={handleSubmit}>
					<input id="type-message"  type="text" name={Math.random()} maxlength="60" placeholder="type in any language" bind:value={inputText}> 
					<SendButton on:send={handleSubmit}/>
				</form>
			</div>
		</div>
		<div class="center-footer noselect">
			<p id='center-tos'>This demo is for evaluation purposes only. <a href="mailto:info@odialanguage.com">Pricing Support.</a></p>
		</div>
	</div>
	<div class="right-div"></div>
</div>

<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import AudioMessage from './components/AudioMessage.svelte'
	import SendButton from './components/SendButton.svelte'
	import Details from './components/Details.svelte'
	import CHATLOG_STORE from './store/state'
	import { onMount } from 'svelte';


	let CHATLOG = []
	CHATLOG_STORE.subscribe(newLog => {
		// console.log(newLog)
		CHATLOG = newLog
	})

	let inputText = '';
	let messageBox;
	let autoscroll;
	let textToTranslate; 
	var isServerBusy = false
	let serverStatus = 'Initializing'
	let serverDot

	onMount(() => {
		serverDot.style.backgroundColor = '#ff8f00'
        fetch('https://translate.kaustubh.app', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
        }
        }).then(res => res.json())
          .then(data => {
            if(data.active){
				serverDot.style.backgroundColor = 'lightgreen'
				serverStatus = "Connected"
			}
        })
        .catch(error => {
            console.log(error)
			serverDot.style.backgroundColor = '#ff4633'
			serverStatus = "Server Error"
        })  
	})

	beforeUpdate(() => {
		autoscroll = messageBox && (messageBox.offsetHeight + messageBox.scrollTop) > (messageBox.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) {
			messageBox.scrollTo({ top: messageBox.scrollHeight, left: 0, behavior: 'smooth' });	
		} 
	});

	function handleSubmit(){
		// console.log(inputText)
		inputText = inputText.trim()
		if(isServerBusy){
			console.log('server busy!')
		}else if(inputText !== '' && inputText.length <= 60){
			// CHATLOG = [...CHATLOG, ['user',inputText]];
			textToTranslate = inputText
			CHATLOG_STORE.update(currentLogs => {
				return [...currentLogs, ['user',inputText],['reply',inputText]]
			})
			isServerBusy = true
		}

		// temp
		// if(inputText == 'test'){
		// 	fetchSpeech('ଏଇଠି ଓଡ଼ିଆରେ ଲେଖନ୍ତୁ ଓ ଓଡ଼ିଆରେ ଶୁଣନ୍ତୁ')
		// }

		inputText = ''
	}

	// function fetchSpeech(TranslatedOdiaText){
    //     console.log('testing tts')
    //     var rand = Math.floor(Math.random() * 1001);
    //     var fileData = new FormData();
    //     fileData.append("file", TranslatedOdiaText);
    //     fileData.append("id", rand);  

    //     fetch('https://ai4language.in/analyze', {
    //         method: 'post',
    //         body: fileData,
    //     }).then(r => r.json())
    //     .then(r => {
    //     console.log('Response: ',r.result) // You will get JSON response here.
    //     }).catch(error => console.error('Error', error))
    //  }

	 function allowNewMessages(){
		 isServerBusy = false;
		 if (serverStatus == 'Server Error'){
			serverDot.style.backgroundColor = 'lightgreen'
			serverStatus = "Connected"
		 }
	 }

</script>

<!-- https://sass-scss-converter.netlify.app/ -->
<style lang='scss'>

$box-color : #114b5f;
$box-border-thickness : 4px;

	.flex-div{
		display: flex;
		width: 100%;
		height: 100%;
		// background-image: linear-gradient(62deg, rgb(142, 197, 252) 0%, rgb(224, 195, 252) 100%);
		// background-image: linear-gradient(62deg, #ffafbd 0%, #e0c3fc 100%);
		// background-image: linear-gradient(62deg, #7EE8FA 0%, #e0c3fc 100%);
		// background: linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%);
		background: linear-gradient(-20deg, #efd6f3 0%, #a8eefa 100%);

		.left-div{
			flex : 6;
			position : relative;

			// background: lemonchiffon;
			// border-right: 2px dashed $box-color;
		}

		.center-div{
			flex : 5;
			position : relative;
			// background: lemonchiffon;

			.center-header{
				display	: none;
				position : absolute;
				margin: 0 0 0 2rem;
				top : 0;
				animation: fadeIn 2s cubic-bezier(0.36, -0.04, 0.15, 1.64) 0.9s both;

				#center-title{
					font-size: 1.5rem;
				}
			}

			
			.center-footer{
				display	: none;
				position : absolute;
				margin: 0 0 0 2rem;
				bottom: 0;
				right: 0;

				#center-tos{
					font-size : 15px;
					margin-bottom: 2px;
				}
			}

			.scaffold{
				height		: 80vh;
				// background	:lightskyblue;
				width		: 90%;
				
				margin: 10vh auto 0 auto;
				perspective: 500px;
				
				.chatbox{
					box-sizing: border-box;
					height: 100%;
					width: 100%;	
					border: $box-border-thickness solid $box-color;
					border-radius: 12px;
					// transform: rotateY(-10deg);
					transform-style: preserve-3d;
					// transform: perspective(100vh) rotateY(-7deg);
					// box-shadow: 10px 5px 40px 2px rgba(244, 59, 71, 0.4);
					animation: transformThreeDee 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) 0.2s both;


					display: flex;
					flex-direction: column;

					.header{
						flex	: 2;
						border-bottom: $box-border-thickness solid $box-color;

						.api-status{
							display: flex;
							padding: 10px;
							transition: opacity 2s;	
							transition-delay: 2s;
						}

						.api-status-fade{
							opacity : 0;
						}

						.dot {
							height: 15px;
							width: 15px;
							background-color: #ff4633;
							border-radius: 50%;
							display: inline-block;
							margin-right: 5px;		
							border: 2px solid #114b5f;			
						}

						#three-dots::after{
							content : "";
							animation : threeDotsLoop 2s linear infinite;
						}
					}

					.messages{
						flex	: 15;
						border-bottom: $box-border-thickness solid $box-color;
						// background: lemonchiffon;

						display	: flex;
						flex-direction: column;
						padding : 15px 15px 0 15px;
						overflow-y: auto;
						overflow-x: hidden;

						scrollbar-color: #ffb0ac #e8c7d8 !important;
						scrollbar-width: thin;

						.message-reply-scaffold{
							// display: flex;
							// flex: none;
							// background: chocolate;
							padding-bottom: 1rem;
							transform-style: preserve-3d;
							
							.message-reply{
								max-width: 80%;
								background: white;
								border-radius: 24px;
								border-top-left-radius: 0;
								padding: 1rem;
								will-change: transform;
								float: left;

								word-wrap: break-word;
								word-break: break-word;
								hyphens: auto;

								animation: pop 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) 0.5s both;
							}
						}

						.message-user-scaffold{
							align-self: flex-end;
							padding-bottom: 1rem;
							transform-style: preserve-3d;

							.message-user{
								max-width: 80%;
								background: white;
								border-radius: 24px;
								border-top-right-radius: 0;
								padding: 1rem;
								will-change: transform;
								float : right;
								hyphens: auto;
								word-wrap: break-word;
								word-break: break-word;
								animation: pop 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) 0.1s both;
							}
						}
					}

					.input-box{
						flex	: 3;
						display: flex;
					
						
						#type-message{
							flex: auto;
							background: transparent;
							border: none;
							font-size: 1rem;
							padding: 1.5rem;
							outline: 0;

							&:focus{
								border: none;
								outline: 0;
							}
						}

						.send-message{
							// flex : 2;
							width: 55px;
							height: 55px;
							background: #6CAD96;
							cursor: pointer;

							margin: 10px 10px 10px 5px;
							border-radius: 30px;
						}
					}
				}
			}
		}

		.right-div{
			flex : 1;

			// background: lemonchiffon;
			// border-left: 2px dashed $box-color;
		}

	}



@media screen and (max-width: 1000px){
	.flex-div{
		.left-div{
			flex: 4;
		}

		.center-div{
			flex: 4;
		}

		.right-div{
			flex: 0;
		}
	}
}

@media screen and (max-width: 850px){
	.flex-div{
		.left-div{
			flex: 3;
		}
	}
}

@media screen and (max-width: 750px){
	.flex-div{
		.left-div{
			flex: 2;
		}
	}
}

// Smartphone Display
@media screen and (max-width: 600px){
	.flex-div{
		.left-div{
			flex: 0;
		}
		.center-div{
			.scaffold{
				height		: 90vh;
				margin: 5vh auto 0 auto;
				.chatbox{
					transform: initial !important;
				}
			}

			.center-header{
				display: block;
			}

			// .center-footer{
			// 	display: block;
			// }
			
		}
	}
}

@keyframes threeDotsLoop {
	25%{
		content : '.'
	}
	50%{
		content : '..'
	}
	75%{
		content : '...'
	}
}
</style>

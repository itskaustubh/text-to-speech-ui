<div class="flex-div">
	<div class="left-div"></div>
	<div class="center-div">
		<div class="scaffold">
			<div class="chatbox">
				<div class="header"></div>
				<div class="messages" bind:this={messageBox}>
					<div class="message-reply-scaffold">
						<div class="message-reply"><p>Type anything.. We'll convert it to Odia Speech!</p></div>
					</div>
					{#each CHATLOG as log}
						{#if log[0] === 'reply'}
							<div class="message-reply-scaffold">
								<div class="message-reply">
									<AudioMessage/>
								</div>
							</div>
						{:else}
						<div class="message-user-scaffold">
							<div class="message-user"><p>{log[1]}</p></div>
						</div>
						{/if}
					{/each}
						<div class="message-reply-scaffold">
							<div class="message-reply">
								<AudioMessage/>
							</div>
						</div>
				</div>
				<!-- https://svelte.dev/repl/8eb540552faa4651a398b182fa5cdd48?version=3.24.1 -->
				<form class="input-box" on:submit|preventDefault={handleSubmit}>
					<input id="type-message" autocomplete="off" type="text" placeholder="type in any language" bind:value={inputText}> 
					<div class="send-message" on:click={handleSubmit}></div>
				</form>
			</div>
		</div>
	</div>
	<div class="right-div"></div>
</div>

<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import AudioMessage from './components/AudioMessage.svelte'
	import CHATLOG_STORE from './store/state'

	let CHATLOG = []
	CHATLOG_STORE.subscribe(newLog => {
		console.log(newLog)
		CHATLOG = newLog
	})

	let inputText = '';
	let messageBox;
	let autoscroll;

	beforeUpdate(() => {
		autoscroll = messageBox && (messageBox.offsetHeight + messageBox.scrollTop) > (messageBox.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) {
			messageBox.scrollTo({ top: messageBox.scrollHeight, left: 0, behavior: 'smooth' });	
		} 
	});




	async function 	handleSubmit(){
		console.log(inputText)
		if(inputText !== ''){
			// CHATLOG = [...CHATLOG, ['user',inputText]];
			CHATLOG_STORE.update(currentLogs => {
				return [...currentLogs, ['user',inputText]]
			})

			if (inputText == 'test'){
				console.log('testing tts')
				var rand = Math.floor(Math.random() * 1001);
				var fileData = new FormData();
				fileData.append("file", 'ଏଇଠି ଓଡ଼ିଆରେ ଲେଖନ୍ତୁ ଓ ଓଡ଼ିଆରେ ଶୁଣନ୍ତୁ');
				fileData.append("id", rand);  
		
				fetch('http://ai4language.in/analyze', {
					method: 'post',
					body: fileData,
				}).then(r => r.json())
				.then(r => {
				console.log('Response: ',r.result) // You will get JSON response here.
				}).catch(error => console.error('Error', error))
			}
		}

		inputText = ''

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

		.left-div{
			flex : 6;

			background: lemonchiffon;
			border-right: 2px dashed $box-color;
		}

		.center-div{
			flex : 5;
			background: lemonchiffon;

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
					transform: rotateY(-10deg);
					transform-style: preserve-3d;
					// transform: perspective(100vh) rotateY(-7deg);


					display: flex;
					flex-direction: column;

					.header{
						flex	: 2;
						border-bottom: $box-border-thickness solid $box-color;
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

						.message-reply-scaffold{
							// display: flex;
							// flex: none;
							// background: chocolate;
							padding-bottom: 1rem;
							

							.message-reply{
								max-width: 60%;
								background: white;
								border-radius: 24px;
								border-top-left-radius: 0;
								padding: 1rem;
								will-change: transform;
								float: left;

								// word-wrap: break-word;
								// word-break: break-word;
								// hyphens: auto;

								// animation: pop 0.3s cubic-bezier(0.36, -0.04, 0.15, 1.64) 0.9s both;
							}
						}

						.message-user-scaffold{
							align-self: flex-end;
							padding-bottom: 1rem;

							.message-user{
								max-width: 60%;
								background: white;
								border-radius: 24px;
								border-top-right-radius: 0;
								padding: 1rem;
								will-change: transform;
								float : right;
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

							&:focus{
								border: none;
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

			background: lemonchiffon;
			border-left: 2px dashed $box-color;
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
					transform: initial;
				}
			}
		}
	}
}
</style>
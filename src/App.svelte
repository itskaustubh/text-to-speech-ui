<div class="flex-div">
	<div class="left-div"></div>
	<div class="center-div">
		<div class="scaffold">
			<div class="chatbox">
				<div class="header"></div>
				<div class="messages">
					<div class="message-reply-scaffold">
						<div class="message-reply"><p>oh hi! how are you? oh hi! how are you? oh hi! how are you? oh hi! how are you? i'm fine.i'm fine.i'm fine.i'm fine.</p></div>
					</div>
					<div class="message-user-scaffold">
						<div class="message-user">i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine. jeez.</div>
					</div>
					<div class="message-reply-scaffold">
						<div class="message-reply">oh hi! how are you? oh hi! how are you? oh hi! how are you? oh hi! how are you? i'm fine.i'm fine.i'm fine.i'm fine.</div>
					</div>
					<div class="message-user-scaffold">
						<div class="message-user">i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine.i'm fine. jeez.</div>
					</div>
				</div>
				<div class="input"></div>
			</div>
		</div>
	</div>
	<div class="right-div"></div>
</div>

<script>

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
				transform-style: preserve-3d;
				perspective: 500px;
				
				.chatbox{
					box-sizing: border-box;
					height: 100%;
					width: 100%;	
					border: $box-border-thickness solid $box-color;
					border-radius: 12px;
					transform: rotateY(-10deg);
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
						overflow: auto;

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

					.input{
						flex	: 3;
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
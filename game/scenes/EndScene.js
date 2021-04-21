export default {
	name: 'EndScene', //Scene name
	children: [ //Game objects in the scene
		{
			gameObject: {
				name: 'MainCamera',
				components: [
					{ name: 'WorldCameraComponent' }
				],
				children: [
					{
						gameObject: {
							name: 'EndTextObject',
							components: [
								{
									name: 'ScreenTextComponent',
									args: ['', { alignment: 'center', color: 'white' }],
								}
							],
							children: [
								{
									gameObject: {
										name: 'SubtitleTextObject',
										components: [
											{
												name: 'ScreenTextComponent',
												args: ['Press Space to play again', { font: '10pt arial', alignment: 'center', color: 'white' }]
											}
										]
									},
									y: 20,
								}
							]
						},
					}
				]
			}
		},
		{
			gameObject: {
				name: 'ScreenCamera',
				components: [
					{ name: 'ScreenCameraComponent' }
				],
				children: [
					{
						gameObject: {
							name: 'EmptyChangeScene',
							components: [
								{
									name: 'ChangeSceneComponent',
									args: ['TitleScene', 'key', ' '] // change on space bar
								}
							]
						}
					},
					{
						gameObject: {
							name: 'EndTextUpdater',
							components: [
								{
									name: 'EndComponent',
									args: ['You Win!', 'You Lose!']
								}
							]
						}
					}
				]
			}
		},
	]
}
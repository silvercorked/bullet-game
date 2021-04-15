export default {
	name: 'TitleScene', //Scene name
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
							name: 'TitleTextObject',
							components: [
								{
									name: 'ScreenTextComponent',
									args: ['Bullet Game', { alignment: 'center', color: 'white' }],
								}
							],
							children: [
								{
									gameObject: {
										name: 'SubtitleTextObject',
										components: [
											{
												name: 'ScreenTextComponent',
												args: ['Press Space to Start', { font: '10pt arial', alignment: 'center', color: 'white' }]
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
									args: ['LevelScene', 'key', ' '] // change on space bar
								}
							]
						}
					},
				]
			}
		},
	]
}
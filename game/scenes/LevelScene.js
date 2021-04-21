export default {
	name: 'LevelScene', // Scene name
	children: [ // Game objects in the scene
		{
			gameObject: {
				name: 'MainCamera',
				components: [
					{ name: 'WorldCameraComponent' }
				],
                children: []
			},
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
							name: 'EmptyTextObject',
							components: [
								{
									name: 'ScreenTextComponent',
									args: ['Score', { size: '1pt', justification: 'middle', color: 'white' }],
								},
								{
									name: 'ScreenTextComponent',
									args: ['Lives', { size: '2pt', justification: 'middle', color: 'white' }]
								}
							],
						}
					},
					{
						gameObject: {
							name: 'EmptyLevelSceneController',
							components: [
								{
									name: 'LevelComponent'
								}
							]
						}
					}
				]
			}
		},
		{
			prefabName: 'PlayerShip',
			x: 10,
			y: 10,
			sx: 2,
			sy: 2
		},
		{
			prefabName: 'EnemyShip',
			x: 5,
			y: 5,
			sx: 2,
			sy: 2
		},

	]
}
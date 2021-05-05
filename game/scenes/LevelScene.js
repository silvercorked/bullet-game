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
							components: [],
							children: [
								{
									gameObject: {
										name: 'ScoreText',
										components: [
											{
												name: 'ScreenTextComponent',
												args: ['', { color: 'white' }],
											}
										]
									},
									drawLayer: 'screen',
									x: 110,
									y: 16
								},
								{
									gameObject: {
										name: 'LivesText',
										components: [
											{
												name: 'ScreenTextComponent',
												args: ['', { color: 'white' }]
											}
										]
									},
									drawLayer: 'screen',
									x: 0,
									y: 16
								}
							]
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
			x: -200,
			y: -200,
			sx: 2,
			sy: 2
		},
		{
			prefabName: 'EnemyShip',
			x: -25,
			y: -25,
			sx: 2,
			sy: 2
		},
		{
			prefabName: 'EnemyShip',
			x: 100,
			y: 5,
			sx: 2,
			sy: 2
		},
		{
			prefabName: 'EnemyShip',
			x: 200,
			y: 150,
			sx: 2,
			sy: 2
		},
	]
}
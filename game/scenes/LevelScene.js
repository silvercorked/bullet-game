export default {
	name: 'LevelScene', //Scene name
	children: [ //Game objects in the scene
		{
			gameObject: {
				name: 'MainCamera',
				components: [
					{ name: 'WorldCameraComponent' }
				],
                children: [
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
                    {
                        prefabName: 'EnemyShip',
                        x: 15,
                        y: 15,
						sx: 2,
						sy: 2
                    }
                ]
			},
			sx: 3,
			sy: 3
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
                                    args: ['Score', { size: '20pt', alignment: 'left', justification: 'top', color: 'white' }],
                                },
                                {
                                    name: 'ScreenTextComponent',
                                    args: ['Lives', { size: '20pt', alignment: 'right', justification: 'top', color: 'white' }]
                                }
                            ],
                        }
                    }
                ]
			}
		},
	]
}
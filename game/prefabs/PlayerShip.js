export default {
	name: 'PlayerShip',
	children:[],
	components:[
		{
			name: 'DrawGeometryComponent',
			args: ['green']
		},
		{
			name: 'RectangleGeometryComponent',
			args: [1, 1] // hieght width
		},
		{
			name: 'PlayerShipMoveComponent',
            args: [1] // speed
		},
		{
			name: 'PlayerShipRotateComponent',
		},
		{
			name: 'ProjectileSpawnComponent',
			args: ['PlayerProjectile', 'mouse', 0]
		}
	],
}
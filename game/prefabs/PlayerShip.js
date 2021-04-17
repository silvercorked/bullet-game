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
			args: [1, 1] // height width
		},
		{
			name: 'PlayerShipMoveComponent',
            args: [60] // speed
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
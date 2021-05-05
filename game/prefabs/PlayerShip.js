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
			args: [6, 6] // height width
		},
		{
			name: 'PlayerShipMoveComponent',
            args: [180] // speed
		},
		{
			name: 'PlayerShipRotateComponent',
		},
		{
			name: 'ProjectileSpawnComponent',
			args: ['PlayerProjectile', 'mouse', 0]
		},
		{
			name: 'LivesComponent'
		},
		{
			name: 'ScoreComponent'
		}
	],
}
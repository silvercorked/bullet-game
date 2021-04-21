export default {
	name: 'EnemyShip',
	children:[],
	components:[
		{
			name: 'DrawGeometryComponent',
			args: ['red']
		},
		{
			name: 'RectangleGeometryComponent',
			args: [6, 6] // height width
		},
		{
			name: 'EnemyShipMoveComponent',
			args: [60]
		},
		{
			name: 'ProjectileSpawnComponent',
			args: ['EnemyProjectile', 'ticks', 100]
		},
	],
}
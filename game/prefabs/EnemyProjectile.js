export default {
	name:"EnemyProjectile",
	children:[],
	components:[
		{
			name: 'DrawGeometryComponent',
			args: ['red']
		},
		{
			name: 'CircleGeometryComponent',
			args: [3] // height width
		},
		{
			name: 'ProjectileMoveComponent',
			args: [120]
		},
		{
			name: 'ProjectileBounceComponent',
		}
	],
}
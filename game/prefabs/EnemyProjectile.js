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
			args: [0.5] // height width
		},
	],
}
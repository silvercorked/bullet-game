export default {
	name:"PlayerProjectile",
	children:[],
	components:[
		{
			name: 'DrawGeometryComponent',
			args: ['green']
		},
		{
			name: 'CircleGeometryComponent',
			args: [3] // height width
		},
		{
			name: 'ProjectileMoveComponent',
			args: [180]
		},
		{
			name: 'ProjectileBounceComponent',
		}
	],
}
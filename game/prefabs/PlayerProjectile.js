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
			args: [0.5] // height width
		},
	],
}
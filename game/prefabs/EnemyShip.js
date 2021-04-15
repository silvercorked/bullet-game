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
			args: [1, 1] // hieght width
		},
	],
}
const fs = require('fs');
let toBuild = [
	{ dir: "./engine/components/", name: "EngineComponents.js" },
	{ dir: "./engine/geometry/", name: "EngineGeometry.js" },
	{ dir: "./game/components/", name: "GameComponents.js" },
	{ dir: "./game/prefabs/", name: "GamePrefabs.js" },
	{ dir: "./game/scenes/", name: "GameScenes.js" },
];
for (let i = 0; i < toBuild.length; i++) {
	let buildString = "";
	let dir = toBuild[i].dir;
	let buildName = toBuild[i].name;
	let files = fs.readdirSync(dir)
	files.forEach(file => {
		if (file == buildName) return;
		let filename = file.substr(0, file.length - 3);
		buildString += `export {default as ${filename}} from "${"./" + file}"\n`;
	})
	fs.writeFileSync(dir + buildName, buildString);
}
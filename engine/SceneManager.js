import Scene from "./Scene.js"

class SceneManager {
	static currentScene;
	static allComponents;
	static allPrefabs;

	static allScenes = [];
	static changeScene(sceneName) {
		let proposedScene = SceneManager.allScenes.find(i => i.name == sceneName);
		if (!sceneName)
			return console.error("Could now find a scene with the name of " + sceneName);
		if (SceneManager.currentScene && proposedScene.name == SceneManager.currentScene.name)
			return console.log("Trying to change to the current scene " + sceneName)
		let scene = Scene.deserialize(proposedScene, true);  //Deserialize the scene definition
		SceneManager.currentScene = scene;
		scene.callMethod("start")
	}
}

export default SceneManager;

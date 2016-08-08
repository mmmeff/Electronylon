import Babylon from '../../lib/Babylon-2.4';

export default class Renderer {
    createScene (canvas, engine) {
        // Now create a basic Babylon Scene object
        var scene = new Babylon.Scene(engine);
        // Change the scene background color to green.
        scene.clearColor = new Babylon.Color3(0.95, 0.95, 0.95);

        // This creates and positions a free camera
        var camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(10, 5, -10), scene);
        // This targets the camera to scene origin
        camera.setTarget(Babylon.Vector3.Zero());
        // This attaches the camera to the canvas
        camera.attachControl(canvas, false);

        // This creates a light, aiming 0,1,0 - to the sky.
        var light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene);
        // light.intensity = 1;

        // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
        var sphere = Babylon.Mesh.CreateSphere("sphere1", 16, 1.25, scene);
        sphere.position.y = 0.75;
        sphere.material = new Babylon.StandardMaterial('sphereMaterial', scene);
        sphere.material.diffuseColor = new Babylon.Color3.FromHexString('#BE2430');
        sphere.material.specularPower = 128;

        // Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
        var ground = Babylon.Mesh.CreateGround("ground1", 6, 6, 5, scene);
        ground.material = new Babylon.StandardMaterial('groundMaterial', scene);
        ground.material.diffuseColor = new Babylon.Color3.FromHexString('#48838E');

        // Leave this function
        return scene;
    }

    initialize (canvas) {
        // let canvas = document.getElementById('renderCanvas');
        let engine = new Babylon.Engine(canvas, true);
        var scene = this.createScene(canvas, engine);

        engine.runRenderLoop(function() {
            scene.render();
        });

        window.addEventListener('resize', function() {
            engine.resize();
        });
    }
}

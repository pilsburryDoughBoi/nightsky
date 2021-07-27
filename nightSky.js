
nightFunction();
export function nightFunction(){

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 'beige' } );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	
	//RGB string
	const color3 = new THREE.Color("rgb(255, 255, 0)");
	for ( let i = 0; i < 2000; i ++ ) {
	const circle = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: color3 } ) );
	    circle.position.x = Math.random() * 800 - 400;
		circle.position.y = Math.random() * 800 - 400;
		circle.position.z = Math.random() * 800 - 400;
	
		circle.rotation.x = Math.random() * 2 * Math.PI;
		circle.rotation.y = Math.random() * 2 * Math.PI;
		circle.rotation.z = Math.random() * 2 * Math.PI;
	
		circle.scale.x = Math.random() + 0.8;
		circle.scale.y = Math.random() + 0.8;
		circle.scale.z = Math.random() + 0.8;
	
		scene.add( circle );
	}
	camera.position.z = 5;
	let keyPress = {};
	
	function log(msg){
	   document.getElementById('debug').innerText = msg;
	}
	log('start')
	
	document.body.addEventListener('keydown', (event) => {
		log(event.key)
	   keyPress[event.key] = true;
	});
	document.body.addEventListener('keyup', (event) => {
	   keyPress[event.key] = false;
	});
	cubeMove();
	cubeControl();
	function cubeControl(){}
	function cubeMove(){}
	
	  
	var animate = function () {
		requestAnimationFrame( animate );
	  
		//arrow left	37 arrow up	38 arrow right	39 arrow down	40
			 if (keyPress['d']){
			cube.position.x = cube.position.x + 0.1;
		}
		else if (keyPress['a']){
			cube.position.x = cube.position.x - 0.1;
		}
		
		if (keyPress['w']){
	   cube.position.y = cube.position.y + 0.1;
		}else if (keyPress['s']){
	   cube.position.y = cube.position.y - 0.1;
		 }
	//w 87 a 65 s 83 d 68
	if (keyPress['ArrowRight']){
		cube.position.x = cube.position.x + 0.1;
		}else if (keyPress['ArrowLeft']){
		cube.position.x = cube.position.x - 0.1;
		  }
	if (keyPress['ArrowUp']){
	   cube.position.y = cube.position.y + 0.1;
		}else if (keyPress['ArrowDown']){
	   cube.position.y = cube.position.y - 0.1;
	   }
	
	  
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	  //cube.velocity.x += 5;
	  //cube.velocity.y += 5; 
		renderer.render( scene, camera );
	};
	
	animate();
}
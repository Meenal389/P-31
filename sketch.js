const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var particles = []
var divisions = []
var plinkos = []

var divisionHeight=170;

function setup(){
    createCanvas(400,500)
    engine = Engine.create();
	world = engine.world;

	g=new Ground(200,495,400,10)
	g1=new Ground(395,250,10,500)
	g2=new Ground(5,250,10,500)
	g3=new Ground(200,5,400,10)

	for (var d = 10; d <= width ; d = d + 80){
		divisions.push(new Division(d,400,2,divisionHeight))
	}
	
	for (var i = 20; i <= width; i = i + 50){
     plinkos.push(new Plinko(i,75,8))
	}

	for (var i = 50; i <= 350; i = i + 50) {
		plinkos.push(new Plinko(i, 140,8));
	  }

	for (var i = 30; i <= 400; i = i + 50) {
		plinkos.push(new Plinko(i,205,8));
	  }

	  

    var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

      Render.run(render)
      
      //Engine.run(engine);

}

function draw(){
   background(0)
   Engine.update(engine)
  g.display()
 g1.display()
 g2.display()
 g3.display()

 if(frameCount%30===0){
    particles.push(new Particles(random(100,300),10,8));
}

 for (var d = 0; d < divisions.length; d++) {
    divisions[d].display()
  }

  for (var i = 0; i < plinkos.length; i++){
	  plinkos[i].display()
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
 
}


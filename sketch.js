var sunX = 103.483;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(88,197,202);

  
//sun
  fill(210,221,38)
  circle(sunX,103.483,74.157/2)
  
  
  //ground
  fill(35,175,75);
  rect(0,419.27,500,80.73);
  
  
  //tree trunk
  fill(109,83,33);
  rect(197.955,250,89.326,198.483);
  
  
  //tree top
  fill(13,108,55);
  circle(239.528,168.708,278.652/2);

  sunX = sunX +1;
  
  if (sunX >= width){
    sunX = 0;
  }
}  
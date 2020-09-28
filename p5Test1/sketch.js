let b = [];

function setup() {
	createCanvas(600, 400);
	for(var i = 0; i<b.lenght; i++){
	b[i] = new Bubble;
	}
}

function mouseClicked(){
	b.push(new Bubble(mouseX,mouseY));
}

function draw() {

	background(18);

	for(bubble of b){
	bubble.show();
	bubble.move();
	let over = false;

	for(oth of b){
		if(bubble !== oth && bubble.colide(oth)){
			over = true;
		}
	}

	if(over == true){
		bubble.colorChange(255);
	}else{
		bubble.colorChange(18);
	}
	}

}


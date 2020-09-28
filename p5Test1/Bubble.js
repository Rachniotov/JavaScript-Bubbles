class Bubble {
	constructor(x_,y_) {

		this.x = x_
		this.y = y_
		this.r = 15;
		this.c = 18;

		this.show = function () {
			stroke(255);
			strokeWeight(3);
			fill(this.c, 175);
			ellipse(this.x, this.y, this.r * 2, this.r * 2);
		};

		this.move = function () {

			this.x = this.x + random(-1, 1);
			this.y = this.y + random(-1, 1);

		};

		this.colide = function(other){
			this.d = dist(this.x,this.y,other.x,other.y);

			if (this.d < this.r + this.r){
				return true;
			}else{
				return false;
			}
		};

		this.colorChange = function(val){
			this.c = val;
		}

	}
}

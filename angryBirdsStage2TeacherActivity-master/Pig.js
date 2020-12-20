/* 1. change the class name by including 'extends'
2. retain the constructor
3. super (*,*,*,*,...) = Bodies.rectangle (*,*,*,*,,,)  //transfer the props from the parent class to child class
4. remove options
5. image of the class
*/

class Pig extends BaseClass {
    constructor(x, y) {
     super (x, y, 50, 50);
      this.image = loadImage("sprites/enemy.png")
   
    }
  }
  
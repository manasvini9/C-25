/* 1. change the class name by including 'extends'
2. retain the constructor
3. super (*,*,*,*,...) = Bodies.rectangle (*,*,*,*,,,)  //transfer the props from the parent class to child class
4. image of the class
*/



class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x, y, width, height);
        this.image = loadImage("sprites/wood1.png")
    
   
  }
};

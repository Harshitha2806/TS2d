class block{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world,this.body);

    }

    display()
    {

        if(this.body.speed < 3)
        {
            display();
        }
        else {

            World.remove(world,this.body);
            push()
            this.Visibility = this.Visibility - 5;
            tint (255,this.Visibility);
            rect(0,0,this.width,this.height);
        }
        //var pos = this.body.position;
        //var angle = this.body.angle;
        
        //translate(pos.x,pos.y);
        //rotate(angle);
        //rectMode(CENTER);
      
        

    }
}
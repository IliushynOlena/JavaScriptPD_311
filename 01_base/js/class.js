
class Car{
    constructor(model,year,color)
    {
        this.model = model;
        this.year = year;
        this.color = color;
        this._speed = 0;
    }
    set speed(value)
    {
        if(value >= 0)
            this._speed = value;
        else
            this._speed = 0;
    }
    get mils()
    {
        return this._speed * 0.621;
    }
    paint(newColor)
    {
        this.color = newColor;
    }
    print(){
        console.log(`Car:
            ${this.model} 
            ${this.year} 
            ${this.color}  
            ${this._speed} km/h`);
    }
    setSpeed(value)
    {
        if(value >= 0)
            this._speed = value;
        else
            this._speed = 0;
    }
}

const car = new Car("Nissan",2020,"pink");
car.paint("Grey");
car.setSpeed(130);
car.speed = 150;
console.log(`Speed in miles : ${car.mils.toFixed(1)} m/h`);  
// car.model= "Nissan";
// car.year = 2020;
// car.color = "pink";

car.print();

class PoliceCar extends Car
{
    constructor(model, year,color, volume)
    {
        super(model,year,color);
        this.volume = volume;
    }
    beep()
    {
        console.log("Stop!!!! Beep.....beep....beeep...... Volume :"+
            this.volume );
    }
    print()
    {
        super.print();
        console.log(`Volume : ${this.volume}`);
    }
}

const policeCar = new PoliceCar("Toyota prius",2023,"White",1000);
policeCar.speed = 230;
policeCar.print();
policeCar.beep();
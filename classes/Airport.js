import { Flight } from "./Flight.js";

export class Airport {
    constructor(name1, line1, number1, maxPassengers1, name2, line2, number2, maxPassengers2, name3, line3, number3, maxPassengers3){
        this.flight1 = new Flight(name1, line1, number1, maxPassengers1)
        this.flight2 = new Flight(name2, line2, number2, maxPassengers2)
        this.flight3 = new Flight(name3, line3, number3, maxPassengers3)
    }
}
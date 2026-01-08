import { Passenger } from "./Passenger.js"

export class StudentPassenger extends Passenger{
    constructor(id, name, amount, school) {
        super(id, name, amount)
        this.school = school
    }
}
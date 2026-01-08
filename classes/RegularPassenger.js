import { Passenger } from "./Passenger.js"

export class RegularPassenger extends Passenger{
    constructor(id, name, amount, job, knows) {
        super(id, name, amount)
        this.job = job
        this.knows = knows
    }
}
import { v4 } from "uuid"

export class RegularPassenger {
    constructor(name, amount, job, knows) {
        this.id = v4()
        this.name = name
        this.amount = amount
        this.job = job
        this.knows = knows
    }
}
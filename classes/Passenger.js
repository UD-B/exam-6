import { v4 } from "uuid"

export class Passenger {
    constructor(name, amount) {
        this.id = v4()
        this.name = name
        this.amount = amount
    }
}
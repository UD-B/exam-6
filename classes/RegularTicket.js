import { v4 } from "uuid"

export class RegularTicket {
    constructor() {
        this.id = v4()
        this.price = 500
        this.owner = undefined
    }
}
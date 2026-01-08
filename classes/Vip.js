import { v4 } from "uuid"

export class VipTicket {
    constructor() {
        this.id = v4()
        this.price = 1000
        this.owner = undefined
        this.benefits = ["free alcohol", "free food", "hot towels"]
    }
}
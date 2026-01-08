import { v4 } from "uuid"

export class StudentPassenger {
    constructor(name, amount, school) {
        this.id = v4()
        this.name = name
        this.amount = amount
        this.school = school
    }
}
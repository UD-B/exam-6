import { Airport } from "./classes/Airport.js";
import { RegularPassenger } from "./classes/RegularPassenger.js";
import { StudentPassenger } from "./classes/Student.js";

const airport = new Airport("UD", "ud inc.", "1", "BRK", "brk inc.", "2", "GR", "gr inc.", "3")
const student = new StudentPassenger("yudi", 750, "kodcode")
const regular = new RegularPassenger("barak", 850, "web developer", true)


console.log(airport.flight1.buyTicket(student, 'vip'))
console.log(airport.flight1.buyTicket(regular, 'vip'))
console.log(student);
console.log(regular);

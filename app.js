import { Airport } from "./classes/Airport.js";
import { RegularPassenger } from "./classes/RegularPassenger.js";
import { StudentPassenger } from "./classes/Student.js";

const airport = new Airport("UD", "ud inc.", "1", 10, "BRK", "brk inc.", "2", 10, "GR", "gr inc.", "3", 10)
const student = new StudentPassenger("yudi", 750, "kodcode")
const regular = new RegularPassenger("barak", 850, "web developer", true)


airport.flight1.buyTicket(student, 'vip')
airport.flight1.buyTicket(student, 'regular')


import { RegularPassenger } from "./RegularPassenger.js"
import { RegularTicket } from "./RegularTicket.js"
import { StudentPassenger } from "./Student.js"
import { VipTicket } from "./Vip.js"

const regularTicket = new RegularTicket()
const vipTicket = new VipTicket()


export class Flight {
    constructor(name, line, number, maxPassengers) {
        this.name = name
        this.line = line
        this.number = number
        this.maxPassengers = maxPassengers
        this.ticketprice = vipTicket.price
        this.vipprice = regularTicket.price
        this.ticketsList = []
        this.genaratetickes()
    }
    genaratetickes(){
        for (let i = 0; i < this.maxPassengers / 0.9; i++) {
            const newTicket = new RegularTicket()
            this.ticketsList.push(newTicket)
        }
        for (let i = 0; i < this.maxPassengers / 0.1; i++) {
            const newTicket = new VipTicket()
            this.ticketsList.push(newTicket)
        }
    }
    buyTicket(passenger, ticketType) {
        const amount = passenger.amount
        let price = 0
        if (passenger instanceof RegularPassenger) {
            if (passenger.knows) {
                if (ticketType === 'vip') {
                    price = vipTicket.price * 0.85
                } else if (ticketType === 'regular') {
                    price = regularTicket.price * 0.8
                } else {
                    console.log("no such ticket type");
                    
                }
            } else {
                if (ticketType === 'vip') {
                    price = vipTicket.price
                } else if (ticketType === 'regular') {
                    price = regularTicket.price
                } else {
                    console.log("no such ticket type");
                    
                }
            }
        } else if (passenger instanceof StudentPassenger) {
            if (ticketType === 'vip') {
                price = vipTicket.price
            } else if (ticketType === 'regular') {
                price = regularTicket.price * 0.9
            } else {
                console.log("no such ticket type");
                
            }
        }
        if (ticketType === 'regular' && passenger.amount >= price) {
            for (let ticket = 0; ticket < this.ticketsList.length; ticket++) {
                if (ticket instanceof RegularTicket && ticket.owner === undefined) {
                    ticket.name = passenger.name
                } else {
                    console.log("all regular tickets are sold out");
                    
                }
            }
        } else if (ticketType === 'vip' && passenger.amount >= price) {
            for (let ticket = 0; ticket < this.ticketsList.length; ticket++) {
                if (ticket instanceof VipTicket && ticket.owner === undefined) {
                    ticket.name = passenger.name
                } else {
                    console.log("all vip tickets are sold out");
                    
                }
            }
        } else {
            console.log("not enough money");
            
        }
    }
}

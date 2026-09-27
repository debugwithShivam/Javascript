let subs: number | string = 10 + "1M" // now in this case value well be number or string both

let apiRequestStatus: "pending" | "success" | "error" = "pending"

let airLineSeat: "aisle" | "window" | "middle" = "middle"

airLineSeat = "window"

const orders = ["12", "20", "28", "38"];

let currentOrder: String | undefined;

for (let order of orders) {
    if (order == "28") {
        currentOrder = order
        break
    }
}

// currentOrder = 84
console.log(currentOrder)

let obj : object | string = "398" 
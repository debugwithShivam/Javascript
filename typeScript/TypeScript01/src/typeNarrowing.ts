function getNoteBook(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} notes`
    }
    return `Notes Number ${kind}`
}

function serverNotes(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving Default NoteBook`
}

function orederNote(size: "Medium" | "small" | "large" | number) {
    if (size == "small") {
        return `small cutting chai..`
    }
    if (size == "Medium" || size == "large") {
        return `make extra chai..`
    }
    return `chai oredr ${size}`
}

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}
class Cutting{
    serve(){
        return `Serving Cutting Chai`
    }
}

function server(Chai:KulhadChai | Cutting){
    if(Chai instanceof KulhadChai){
        return Chai.serve();
    }
}

type ChaiOrder = {
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
return (
    typeof obj == "object" && obj !== null && typeof obj.type == "string" && typeof obj.type == "number"
)
}

function serverOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}`
    }
    return `Serving custom chai: ${item}`
}
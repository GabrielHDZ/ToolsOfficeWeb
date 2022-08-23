
export default function exampleReturn(user: string): any{
    if (user==null) return
    console.log("se recibio los datos corrrectamente")
}

let data:string=""
console.log(exampleReturn(data));
 

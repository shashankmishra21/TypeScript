interface userType{
    firstName : string,
    age : number,
    lastName : string 
}

function greet ( user : userType){
    console.log(user)
}

let user = {
    firstName : "sh",
    age : 21,
    lastName : "shrt"
}

greet(user);
/* <-------------------------------------------------- Call Back With Normal Functions ---------------------------------------------------> */

function callMaintainence(cb:(text:string)=>void) {
    console.log("Car Had Been Left At The Service Station For Sericve.")
    setTimeout(() => {
        console.log("Car Is Fixed.")
        cb("Come And Take Your Car.")
    }, 2000);
}

function callMaintainenceCallBack(text:string) {
    console.log("Car Maintanence Call Back..." + text)
    pickDress(tailorCallBack)
}

function pickDress(callback:(text:string)=>void) {
    setTimeout(() => {
        console.log("Your Dress Is Ready.")
        callback("Come And Pick Your Dress.")
    }, 2000);
}

function tailorCallBack(text:string) {
    console.log("Tailor Call Back.... " + text)
    attendEvent(eventCallBack)
}

function attendEvent(cb:(text:string)=>void) {
    setTimeout(() => {
        console.log("The Event Is Over")
        cb("Finally I Can Go Home")
    }, 2000);
}

function eventCallBack(text:string) {
    console.log(text)
    backToHome()
}

function backToHome() {
    console.log("Uff! Finally Reached Home")
}

function grocery() {
    console.log("While The Is Being Repaired I Shall Do Some Grocery.")
}

callMaintainence(callMaintainenceCallBack)
grocery()




/* <--------------------------------------------------------Call Back With Promises-------------------------------------------------------> */

//   1ST EXAMPLE

function carMaintainence() {
    console.log("Car Had Been Left At The Service Station For Sericve.");

    let result : Promise<string> = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Your Car Is Fixed.")
            resolve("Come and Get Your Car")
        }, 2000);
    })
    
    return result
}
function pickYourDress() {
    let promise : Promise<string> = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Your Dress Is Ready.")
            resolve("Come and Get Your Dress")
        }, 2000);
    })
    
    return promise
}


function attendEvent1() : Promise<void> {
    console.log("I Picked Up The Dress. Now I can Attend The Event.")
    return Promise.resolve()
}
function doGrocery() : Promise<void> {
    console.log("I Will Do Some Grocery Until The Car Maintanence Company Calls Me.");
    return Promise.resolve()
}

let response = carMaintainence()

response.then((text:string)=>{
    console.log("Car Maintanence response..." , text)
    doGrocery()
    return pickYourDress()
}).then((text:string)=>{
    console.log("Tailor response..." , text)
    attendEvent1()
}).then(()=>{
    console.log("Finally The Event Is Over Now I Can Go Home.")
})

// 2ND EXAMPLE

function rotimaking() {
    console.log("I am Hungry");
    let making : Promise<string> = new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("They Are Always Hungry");
            resolve("It will Be ready in Two Minutes");
            reject("Get Lost")
        }, 1000);
    })
    return making
}
function rotitaking() {
    console.log("Now hurry up And Take it");
    let taking : Promise<string> = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Coming.");
        }, 1000);
    })
    return taking
}
let response2 = rotimaking()
response2.then((text:string)=>{
    console.log("Wife Response.... ", text);
    return rotitaking();
}).then((text:string)=>{
    console.log("Husbands Respnse..... ", text);
}).catch((err:string)=>{
    console.log(err)
})
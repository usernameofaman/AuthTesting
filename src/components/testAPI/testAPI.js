import "./testAPI.css"
// import React from "react"

function testAPI() {
    let test = new Promise(async (resolve, reject) => {
      const res = await fetch("/testAPI").then((res) => res.json());
      if(res.status === "Successful"){
        resolve("API Fetch is Successful")
      }
      else {
        reject("Could not fetch API")
      }
    })
    test.then((message) => {
      console.log(message)
    }).catch((message) => {
      console.log(message)
    })

    return(
      <>

      </>
    )
}
export default testAPI;

function vacccineRegister(){ //stores items in the localStorage
    const password = document.getElementById("confirmPassword").value
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const cardNo = document.getElementById("cardNo").value
    const dateBirth = document.getElementById("dateBirth").value
    const phoneNo = document.getElementById("phoneNo").value
    const emailAddress = document.getElementById("emailAddress").value
    const street = document.getElementById("street").value
    const cityTown = document.getElementById("cityTown").value
    const state = document.getElementById("state").value
    const postalCode = document.getElementById("postalCode").value
    const medical = document.getElementById("medical").value
    const key = document.getElementById('key').value //gets the key from the user

    const applicant = {
        password: password,
        firstName: firstName,
        lastName: lastName,
        cardNo: cardNo,
        dateBirth: dateBirth,
        phoneNo: phoneNo,
        emailAddress: emailAddress,
        street: street,
        cityTown: cityTown,
        state: state,
        postalCode: postalCode,
        medical: medical,
    }

    window.localStorage.setItem(key,JSON.stringify(applicant))  
    //converting object to string
}

function personalDetails(){ //retrieves items in the localStorage
    // console.log("retrieve records")
     const key = document.getElementById('retrieveKey').value
    const records = window.localStorage.getItem(key)
    const paragraph = document.createElement("p")
    const infor = document.createTextNode(records)
    paragraph.appendChild(infor)
    const element = document.getElementById("retrieve")
    element.appendChild(paragraph)
}

function postponeAppointment(){  //deletes item from localStorage
    const key = document.getElementById('removeKey').value
    localStorage.removeItem(key)
    console.log("remove items")
}

// function clearStorage(){
    //clears the entire localStorage
    // localStorage.clear()
    // console.log("clear records")
// }

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("vaccineRegister").onsubmit = vacccineRegister
    // document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("postponeAppointment").onclick = postponeAppointment
    document.getElementById("personalDetails").onclick = personalDetails
}
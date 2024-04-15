const backBtn = ()=>{
  location.replace("index.html");
}


// JavaScript Code For Network Provider Verification

const verifyNum = () =>{
  userInput = []
  let phNum = document.getElementById("phNum").value
  if (phNum === ""){
    document.getElementById("phNum").style.borderColor = "red"
    document.getElementById("networkDiv").style.display = "none"
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Please Enter Phone Number"
    setTimeout(()=>{
      document.getElementById("errorDiv").style.display = "none"
    }, 3000)
    networkImageDiv.innerHTML = `<img src="img/VerifyNet Logo.png" class="col-6 mx-auto rounded-3 mt-2 shadow-lg" alt="VerifyNet Logo" id="networkImg">`
  } else if (phNum.length !== 11) {
    document.getElementById("phNum").style.borderColor = "red"
    document.getElementById("networkDiv").style.display = "none"
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Invalid Phone Number"
    setTimeout(()=>{
      document.getElementById("errorDiv").style.display = "none"
    }, 3000)
    networkImageDiv.innerHTML = `<img src="img/VerifyNet Logo.png" class="col-6 mx-auto rounded-3 mt-2 shadow-lg" alt="VerifyNet Logo" id="networkImg">`
  } else {
    userInput.push(phNum)
    let firstFourDigits = userInput[0].substring(0,4)
    JSON.stringify(firstFourDigits)
    console.log(firstFourDigits);

    // If Statement For All MTN Related Numbers
    if (firstFourDigits === "0803" ||
    firstFourDigits === "0806" ||
    firstFourDigits === "0810" ||
    firstFourDigits === "0813" ||
    firstFourDigits === "0814" ||
    firstFourDigits === "0816" ||
    firstFourDigits === "0903" ||
    firstFourDigits === "0906" ||
    firstFourDigits === "0913" ||
    firstFourDigits === "0916" ||
    firstFourDigits === "0703" ||
    firstFourDigits === "0706"){
      document.getElementById("networkDiv").style.display = "block"
      networkDiv.innerHTML = `${phNum} is an MTN Number`
      networkImageDiv.innerHTML = `<img src="img/mtn Logo.png" class="col-8 mx-auto rounded-3 mt-2 shadow-lg" alt="VerifyNet Logo" id="networkImg">`

    // If Statement For All Airtel Related Numbers
      } else if (firstFourDigits === "0802" ||
      firstFourDigits === "0701" ||
      firstFourDigits === "0708" ||
      firstFourDigits === "0808" ||
      firstFourDigits === "0812" ||
      firstFourDigits === "0901" ||
      firstFourDigits === "0902" ||
      firstFourDigits === "0904" ||
      firstFourDigits === "0907" ||
      firstFourDigits === "0912"){
        document.getElementById("networkDiv").style.display = "block"
        networkDiv.innerHTML = `${phNum} is an Airtel Number`
        networkImageDiv.innerHTML = `<img src="img/airtel Logo.png" class="col-8 mx-auto rounded-3 mt-2 shadow-lg" alt="VerifyNet Logo" id="networkImg">`

      // If Statement For All 9Mobile Related Numbers
      } else if (firstFourDigits === "0909" ||
      firstFourDigits === "0908" ||
      firstFourDigits === "0818" ||
      firstFourDigits === "0809" ||
      firstFourDigits === "0817"){
        document.getElementById("networkDiv").style.display = "block"
        networkDiv.innerHTML = `${phNum} is a 9mobile Number`
        networkImageDiv.innerHTML = `<img src="img/9mobile Logo.png" class="col-8 mx-auto rounded-3 mt-2 shadow-lg" alt="VerifyNet Logo" id="networkImg">`
      } else if (firstFourDigits === "0805" ||
      firstFourDigits === "0905" ||
      firstFourDigits === "0807" ||
      firstFourDigits === "0811" ||
      firstFourDigits === "0705" ||
      firstFourDigits === "0815"){
        document.getElementById("networkDiv").style.display = "block"
        networkDiv.innerHTML = `${phNum} is a GLO Number`
        networkImageDiv.innerHTML = `<img src="img/glo Logo.png" class="col-8 mx-auto rounded-3 mt-2 shadow-lg" alt="VerifyNet Logo" id="networkImg">`
      } else{
        document.getElementById("networkDiv").style.display = "block"
        networkDiv.innerHTML = `Opps! ${phNum} was not verified`
        networkImageDiv.innerHTML = `<img src="img/VerifyNet Logo.png" class="col-8 mx-auto rounded-3 mt-2 shadow-lg" alt="VerifyNet Logo" id="networkImg">`
      }
    }
    document.getElementById("phNum").style.borderColor = "white"
    document.getElementById("phNum").value = ""
}
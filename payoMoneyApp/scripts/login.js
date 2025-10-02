document
  .getElementById("log-in-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;

    const number = document.getElementById("number").value;
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    if (number.length === 11) {
      if (convertedPin === 1234) {
        window.location.href = "./main.html";
      } else {
        console.log("pin is wrong");
      }
    } else {
      console.log("number is wrong");
    }
  });

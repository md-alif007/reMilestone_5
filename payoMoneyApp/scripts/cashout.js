document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("out-phone-number").value;

    const password = document.getElementById("cashOut-mny-pass").value;
    const convertedPass = parseInt(password);

    const mainBalance = document.getElementById("main-balance").innerText;
    const mainConvetedBalance = parseInt(mainBalance);

    const amountCashOut = document.getElementById("amount-cashOut").value;
    const convertdAmountCashOut = parseInt(amountCashOut);

    if (phoneNumber.length === 11) {
      if (convertedPass === 1234) {
        const sum = mainConvetedBalance - convertdAmountCashOut;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("password is wrong");
      }
    } else {
      alert("phone number is wrong");
    }
  });
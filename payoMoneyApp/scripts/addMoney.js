document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;

    const phoneNumber = document.getElementById("phone-number").value;

    const password = document.getElementById("add-mny-pass").value;
    const convertedPass = parseInt(password);

    const mainBalance = document.getElementById("main-balance").innerText;
    const mainConvetedBalance = parseInt(mainBalance);

    const amountAdd = document.getElementById("amount-add").value;
    const convertdAmountAdd = parseInt(amountAdd);

    if (phoneNumber.length === 11) {
      if (convertedPass === 1234) {
        const sum = mainConvetedBalance + convertdAmountAdd;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("password is wrong");
      }
    } else {
      alert("phone number is wrong");
    }
  });

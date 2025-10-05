const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showUser(data);
    });
};

const showUser = (users) => {
  const userNames = document.getElementById("user-names");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    userNames.appendChild(li);
  }
};

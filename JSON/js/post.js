const handlePostButton = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayPost(data)
    });
};

const displayPost = (posts) => {

    const postContainer = document.getElementById('postContainer');

    for (const post  of posts) {
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
    
}


handlePostButton();
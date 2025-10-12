function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  for (const cat of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-red-400 hover:text-white">${cat.category}</button>
    `;
    categoryContainer.appendChild(categoryDiv);
  }
}

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};

const displayVideos = (video) => {
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = "";
  video.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.innerHTML = `
       <div class="shadow-sm rounded-sm ">
            <figure>
                <img class="rounded-t-sm w-[312px] h-[200px] object-cover" src="${video.thumbnail}" alt="Shoes" />
            </figure>
            <div class="mt-4 flex gap-5 px-2">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-7 h-7 rounded-full ring-2 ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" />
                    </div>
                </div>
                <div>
                    <p class="font-serif font-semibold text-sm">${video.title}</p>
                    <p class="font-mono font-thin text-gray-600 flex gap-3 items-center ">
                        ${video.authors[0].profile_name}
                        <span>
                            <img class="w-4"
                                src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="">
                        </span>
                    </p>
                    <p class="font-mono font-thin text-gray-600">${video.others.views} views</p>
                </div>
            </div>
       </div>
    `;
    videoContainer.appendChild(videoDiv);
  });
};

const loadCategoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category));
};

loadCategories();

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

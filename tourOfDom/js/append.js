const placeslist = document.getElementById('places-list');
// console.log(placeslist);

const li = document.createElement('li');
li.innerText = 'Shalbon';

placeslist.appendChild(li);

// adding a section

// 1.where to add 
const mainContainer = document.getElementById('main-content');

// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'pizza';
ul.appendChild(li1);

// add the child
section.appendChild(h1);
section.appendChild(li1);
mainContainer.appendChild(section);


// add directly with html

const sctionDress = document.createElement('section');
sctionDress.innerHTML = `

<h1>my dress section</h1>
<ul>
    <li>shirt</li>
    <li>pant</li>
    <li>lungi</li>
    <li>payjama</li>
</ul>
`

mainContainer.appendChild(sctionDress);
let developersArr = null;

const avatarInput = document.getElementById('edit-avatar')
const nameInput = document.getElementById('edit-name')
const ageInput = document.getElementById('edit-age')
const idInput = document.getElementById('edit-id')
const genderInput = document.getElementById('edit-gender')
const cityInput = document.getElementById('edit-city')
const activityInput = document.getElementById('edit-activity')
const companyInput = document.getElementById('edit-company')
const interestsInput = document.getElementById('edit-interests')
const form = document.getElementById('edit-dev');


function loadData() {
  fetch('/developers')
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      developersArr = data;

      renderCards(data);
    })
    .catch((e) => {
      console.log(e);
    })
}

loadData();


function renderCards(data) {
  const cards = data.map((dev) => {
    const avatarEl = dev.avatar ? `<img src="${dev.avatar}" class="avatar" width="200">` : '';

    return `${avatarEl}<span class="name">${dev.name}</span><b class="age">${dev.age}</b><span class="gender">${dev.gender}</span>
<span class="city">${dev.city}</span><span class="activity">${dev.activity}</span><span class="company">${dev.company}</span>
<span class="interests">${dev.interests}</span><button onclick="editData(${dev.id})">edit</button><br>`
  }).join('');

  developers.innerHTML = cards;
}

function editData(id) {
  const dev = developersArr[id];

  // avatarInput.value = dev.avatar;
  nameInput.value = dev.name;
  ageInput.value = dev.age;
  genderInput.value = dev.gender;
  cityInput.value = dev.city;
  activityInput.value = dev.activity;
  companyInput.value = dev.company;
  interestsInput.value = dev.interests;
  idInput.value = dev.id;
  form.style.display = 'block';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('/developers', {
    method: 'POST',
    body: new FormData(form),
  }).then(() => {
    loadData();
    form.style.display = 'none';
  });
  
})


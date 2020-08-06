import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
                // the data is an OBJECT

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// Appending inside the components function 
// axios.get('https://api.github.com/users/sokaeb')
// .then(response => profileMaker(response.data))
// .catch(err => console.log(err))

          // Making own profile card
axios.get('https://api.github.com/users/sokaeb')
.then(response => {
  const profileCard = profileMaker(response.data);
  profileCards.appendChild(profileCard);
})
.catch(err => {
  console.log(err.message); // if there's an error, a message would appear in the console
});


          // Adding personal followers 
axios.get('https://api.github.com/users/sokaeb/followers') // this is an object
.then(response => { // object
  const followersArray = response.data; // this data is an array 
  followersArray.forEach(follower => {
    const followerCard = profileMaker(follower);
    profileCards.appendChild(followerCard); // this is appending into the DOM
  })
})
.catch(err => {
  console.log(err)
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// Appending inside the components function 
// followersArray.forEach(follower => {
//   axios.get(`https://api.github.com/users/${follower}`)
//   .then(response => profileMaker(response.data))
//   .catch(err => console.log(err))
// });

followersArray.forEach(follower =>{
  axios.get(`https://api.github.com/users/${follower}`)
  .then(response => {
    const other = profileMaker(response.data);
    profileCards.appendChild(other);
  })
  .catch(err => {
    console.log(err.message);
  });
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const profileCards = document.querySelector('.cards')
function profileMaker(profileObj) {
  // creating elements needed to markup the DOM with a profile card - instantiating elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameOfUser = document.createElement('h3');
  const userNamePara = document.createElement('p');
  const locationPara = document.createElement('p');
  const profilePara = document.createElement('p');
  const gitAddress = document.createElement('a');
  const followersPara = document.createElement('p');
  const followingPara = document.createElement('p');
  const bioPara = document.createElement('p');
  // setting class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameOfUser.classList.add('name');
  userNamePara.classList.add('username');
  // setting attributes and sources
  image.setAttribute('src', profileObj.avatar_url);
  gitAddress.setAttribute('href', profileObj.html_url);
  // setting text
  nameOfUser.textContent = profileObj.name;
  userNamePara.textContent = profileObj.login;
  locationPara.textContent = `Location: ${profileObj.location}`;
  profilePara.textContent = 'Profile: ';
  followersPara.textContent = `Followers: ${profileObj.followers}`;
  followingPara.textContent = `Following: ${profileObj.following}`;
  bioPara.textContent = `Bio: ${profileObj.bio}`;
  gitAddress.textContent = profileObj.html_url;
  // creating the hierarchy
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameOfUser);
  cardInfo.appendChild(userNamePara);
  cardInfo.appendChild(locationPara);
  cardInfo.appendChild(profilePara);
  profilePara.appendChild(gitAddress);
  cardInfo.appendChild(followersPara);
  cardInfo.appendChild(followingPara);
  cardInfo.appendChild(bioPara);
  
  // Appending inside the components function 
  // const profileCards = document.querySelector('.cards')
  // profileCards.appendChild(card);

  return card
};


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// 

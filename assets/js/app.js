let myPage = 1;
const myAppElement = document.getElementById("myApp");

// entry point
loadingScreen();
setUpShowAllButton();
setupSearchForm();
fetchOneCharacter(5195);

function fetchOneCharacter(myId) {
  let URI = `https://api.disneyapi.dev/characters/${myId}`;

  fetch(URI)
    .then((response) => {
      //console.log(response);

      if (response.ok) {
        return response.json();
      } else {
        alert("api error du får lige mickey mouse");
        fetchOneCharacter(4703);
      }
    })
    .then((data) => {
      //console.log(data);
      showCharacter(data);
    })
    .catch();
}

function showCharacter(myData) {
  //  myAppElement
  console.log(myData.name);

  let myFilms = "<h3>Films:</h3>";
  myData.films.map((film) => {
    myFilms += `${film}, `;
  });

  let myTvShows = "<h3>TV Shows:</h3>";
  myData.tvShows.map((show) => {
    myTvShows += `${show}, `;
  });

  let myHTML = `<h2>${myData.name}</h2><img src="${myData.imageUrl}"><p>${myFilms}</p><p>${myTvShows}</p>`;
  myAppElement.innerHTML = myHTML;
}

// loading screen  kaldes når vi henter data
function loadingScreen() {
  myAppElement.innerHTML = "<h2>Loading...</h2>";
}

function setUpShowAllButton() {
  let showAllButton = document.getElementById("showAllButton");
  showAllButton.addEventListener("click", (e) => {
    myPage = 1;
    fetchAllCharacters();
  });
}

function setupSearchForm() {
  let searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();

    let searchInput = document.getElementById("searchInput");
    let myValue = searchInput.value;

    if (myValue) {
      console.log(" vi har string " + myValue);
    } else {
      alert("indtast i søge felt.");
    }
  });
}

function fetchCaracterPage() {
  console.log("fetchCaracterPage");
}

/*↑↑↑↑↑↑↑ Bo's code-along ↑↑↑↑↑↑↑ */
/*↓↓↓↓↓↓↓ Mit forsøg ↓↓↓↓↓↓↓*/

/* const disneyAPI = "https://api.disneyapi.dev/characters?page=";

let disneyFetch = fetch(disneyAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showCharacterPage(data);
  })
  .catch((error) => {
    console.log(error);
  });

function fetchCharacterPage() {
  loadingScreen();
  if (disneyFetch) {
    showCharacterPage(data);
  } else {
    alert("Fejl 40");
  }
}

function setUpNavButtons() {}

function showCharacterPage() {
  setUpNavButtons();
}
 */

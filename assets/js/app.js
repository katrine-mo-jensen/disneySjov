//
let myPage = 1;
const myAppElement = document.getElementById("myApp");
// console.log(myAppElement);

loadingScreen();
setUpShowAllButton();
setupSearchForm();

// Loading screen being called while we fetch data
function loadingScreen() {
  myAppElement.innerHTML = "<h2>Loading... </h2>";
}

function setUpShowAllButton() {
  let showAllButton = document.getElementById("showAllButton");
  showAllButton.addEventListener("click", (e) => {
    myPage = 1;
    fetchCharacterPage();
  });
}

function setupSearchForm() {
  let searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let searchInput = document.getElementById("searchInput");
    let myValue = searchInput.value;

    if (myValue) {
      console.log("vi har string " + myValue);
    } else {
      alert("Indtast i søge felt");
    }
  });
}

/*^^^^^^Bo's code along^^^^^^*/

const disneyAPI = "https://api.disneyapi.dev/characters?page=";

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

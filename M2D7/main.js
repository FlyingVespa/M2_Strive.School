// JS Exercises
// DONE EX11) Write a function to add a new link into the navbar
function newLink() {
  const navbar = document.querySelector("nav");
  const li = document.createElement("li");
  const link = document.createElement("a");

  li.className = "p-2 text-muted";
  navbar.appendChild(li);
  link.appendChild(document.createTextNode("New Link"));
  li.appendChild(link);
}

// DONE EX12) Write a function to change the color of the main title

function changeHeaderColor() {
  const headerTitle = document.querySelector("h1");
  headerTitle.style.color = "blue";
}

// DONE EX13) Write a function to change the background of the jumbotron

function jumbronBackgroud() {
  const jumbo = document.querySelector(".jumbotron");
  jumbo.classList.remove("bg-dark");
  jumbo.classList.add("bg-warning");
}

// DONE EX14) Write a function to remove all the links under "Elsewhere"

function removeElsewehere() {
  const elseWhere = document.querySelector("#elseW");
  elseWhere.remove();
}

// DONE EX15) Write a function to change the column size for post headings

function changeColSize() {
  let heading = document.querySelectorAll("h2");
  for (let index = 0; index < heading.length; index++) {
    heading[index].classList.add("col-2");
  }
}

// DONE EX16) Write a function to remove the "Search" magnifying glass icon
function removeMag() {
  const circ = document.querySelector("svg.mx-3");
  circ.remove();
}

// DONE EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
function trimChars() {
  let myPar = document.querySelectorAll(".blog-main p:nth-of-type(2)");
  myPar.forEach((post) => {
    post.innerText = post.innerText.substring(50);
  });
}

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

const newerBtn = document.querySelector(
  "body > main > div > div > nav > a.btn.btn-outline-secondary"
);

window.onload() = () => {
  addNewPost();
};

function addNewPost() {
  const btn = document.querySelectorAll(".blog-pagination a")[1];
  btn.classList.remove("disabled");
  btn.removeAttribute("href");
  btn.addEventListener("click", function () {
    const blog = ` <div class="blog-post">
<h2 class="blog-post-title">New feature</h2>

</div>`;
    const blogMain = document.querySelector(".blog-main");
    blogMain.innerHTML += blog;
  });
}

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

// function removeOlder() {
//   const authors = document.querySelectorAll(
//     " main .blog-main .blog-post > h2 + p"
//   );
//   authors.forEach((a) => {
//     a.addEventListener("mouseenter", function (e) {
//       alert(e.target.innerText);
//     });
// //   });

//   const olderBtn = document.querySelector(
//     "body > main > div > div > nav > a.btn.btn-outline-primary"
//   );
//   olderBtn.removeAttribute("href");
// }

// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

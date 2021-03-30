// JS Exercises
// EX11) Write a function to add a new link into the navbar
function newLink() {
  const navbar = document.querySelector("nav");
  const li = document.createElement("li");
  const link = document.createElement("a");

  li.className = "p-2 text-muted";
  navbar.appendChild(li);
  link.appendChild(document.createTextNode("New Link"));
  li.appendChild(link);
}

// EX12) Write a function to change the color of the main title

function changeHeaderColor() {
  const headerTitle = document.querySelector("h1");
  headerTitle.style.color = "blue";
}

// EX13) Write a function to change the background of the jumbotron

function jumbronBackgroud() {
  const jumbo = document.querySelector(".jumbotron");
  jumbo.classList.remove("bg-dark");
  jumbo.classList.add("bg-warning");
}

// EX14) Write a function to remove all the links under "Elsewhere"

function removeElsewehere() {
  const elseWhere = document.querySelector("#elseW");
  elseWhere.remove();
}

// EX15) Write a function to change the column size for post headings

function changeColSize() {
  const heading = document.getElementsByClassName("blog-post-title");
  heading.classList.add("col-6");
}

// EX16) Write a function to remove the "Search" magnifying glass icon
function removeMag() {
  const circ = document.querySelector("circle");
  circ.remove;
}

// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

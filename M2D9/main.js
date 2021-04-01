const imgCover = document.querySelectorAll("img");

function addBadgeGenre() {
  let imgCovers = imgCover.length;
  if (imgCovers !== "") {
    const span = document.createElement("span");
    span.className = "badge";

    span.appendChild(document.createTextNode("genre"));
    imgCovers.appendChild(span);

    for (let i = 0; i < imgCovers; i++) {
      imgCover.appendChild(newBadge);
    }
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function totalCards() {
  let card = document.querySelectorAll("#album-card");
  let total = document.getElementById("card-total");
  for (let i = 1; i < card.length; i++) {
    i += 1;
    total.innerHTML = `${i}`;
  }
}

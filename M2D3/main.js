function removeBadge() {
  let badge = document.getElementsByClassName("badge");
  while (badge.firstChild) {
    badge.removeChild(badge.firstChild);
  }
}

const name = (params) => {};
const countTravels = () => {
  let destinations = document.getElementsByClassName("card").length;
  let count = document.getElementById("travels");
  count.innerText = destinations;
};
window.onload = function () {
  countTravels();
};

// Need to add function to remove all cards
function removeElementsByClass() {
  var elements = document.querySelectorAll(".card");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function appenddiv() {
  document.querySelectorAll(".welcome").forEach((welcome) => {
    var l = document.createElement("div");
    l.setAttribute("class", "badge badge-danger");
    l.setAttribute("id", "badge");
    l.textContent = "HOT";
    welcome.appendChild(l);
  });
  console.log("it works");
}

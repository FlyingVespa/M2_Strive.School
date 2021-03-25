// function start() {
//   e.preventDefault();
//   let pergroup = document.querySelectorAll(".pergroup");
//   pergroup = parseInt(pergroup).value;

//   document.getElementsByClassName("groups").empty();

//   let groups = document.querySelectorAll(".groups");

//   for (i = 0; i < numgroups; i++) {
//     groups.append(
//       '<div class="group" id="group' +
//         (i + 1) +
//         '"><h2>Group ' +
//         (i + 1) +
//         "</h2></div>"
//     );
//   }

//   $(".group").each(function () {
//     for (j = 0; j < namespergroup; j++) {
//       var randname = Math.floor(Math.random() * allnames.length);
//       if (allnames[randname]) {
//         $(this).append("<p>" + allnames[randname] + "</p>");
//       }
//       allnames.splice(randname, 1);
//       console.log(allnames);
//     }
//   });
// }
// let toggleWrapA = document.querySelectorAll("a");

// toggleWrapA.addEventListener(
//   "click",
//   function (event) {
//     event.preventDefault();
//     let wrap = document.querySelectorAll(".wrap");
//     wrap = wrap.toggleClass("alt");

//     let perGroupWrap = document.querySelectorAll(".pergroup-wrap").find("input")
//       .value;
//     //let numgroupsWrap = document.querySelectorAll(".numgroups-wrap").find("input").value
//     return perGroupWrap;
//   },
//   false
// );

// $(".toggle-wrap a").on("click", function (e) {
//   e.preventDefault();
//   $(".wrap").toggleClass("alt");
//   $(".pergroup-wrap, .numgroups-wrap").find("input").val("");
// });

//Add person to main List
function addPerson() {
  let ul = document.getElementById("person-main-list");
  let person = document.getElementById("person");
  let li = document.createElement("li");
  li.setAttribute("id", "personlisted");
  li.appendChild(document.createTextNode(person.value));
  ul.appendChild(li);
}
// Delete Name from Main List
function removePerson() {
  let ul = document.getElementById("person-main-list");
  let person = document.getElementById("personlisted");
  ul.removeChild(person);
}

// Get The total People on Main List (before assigning to groups)
function getTotalPeople() {
  let person = document.querySelectorAll("#personlisted").length;
  let count = document.querySelector(".total-person-mainlist");
  count.innerText = person + " People On List";
  console.log(person);
}

// Gets Amount of Groups
function groupTotal() {
  let NumberOfGroups = document.getElementById("group-amount").value;
  let NumberOfGroup = document.querySelector(".group-amount-show");
  NumberOfGroup.innerText = NumberOfGroups;
  console.log(NumberOfGroups);
}

// Return Name To Main List
function returnNameToMainList() {
  let personName = document.getElementsByName("personName");
  document.getElementById("person-main-list").appendChild(personName);
}

//Assign Person to Group

//create array off personlist
var x = 0;
var array = Array();

function add_element_to_array() {
  array[x] = document.getElementById("person").value;

  x++;
  document.getElementById("person").value = "";
}

function display_array() {
  var e = "<hr/>";

  for (var y = 0; y < array.length; y++) {
    e += "Element " + y + " = " + array[y] + "<br/>";
  }
  document.getElementById("Result").innerHTML = e;
}

//Shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

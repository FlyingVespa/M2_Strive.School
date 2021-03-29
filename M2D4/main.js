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

// function sort() {
//   array = array.sort(() => Math.random() - 0.5);
//   console.log(array);
// }
// sort();

// devide array
// function* divideGroup(arr, n) {
//   for (let i = 0; i < arr.length; i += n) {
//     yield arr.slice(i, i + n);
//   }
// }
// let group = document.getElementById("groupInput").value;

// oninput = console.log(group);

// console.log([...chunks(array, group)]);

// function splitArrayIntoChunksOfLen(arr, len) {
//   var chunks = [],
//     i = 0,
//     n = arr.length;
//   while (i < n) {
//     chunks.push(arr.slice(i, (i += len)));
//   }
//   return chunks;
// }
// var alphabet = array;
// var alphabetPairs = splitArrayIntoChunksOfLen(alphabet, 2);

// //split into chunks of two
// function display() {
//   //Assigning the variable to the user input
//   let n = document.getElementById("groupInput").value;
//   document.getElementById("printhere").innerHTML = n;
//   let arr = array;
//   for (let i = 0; i < arr.length; i += n) {
//     return arr.slice(i, i + n);
//   }
//   console.log(display(arr, n));
// }

function assign() {
  array = ["aaaa", "bbb", 4444, 44444, 6666, 7777];
  array.sort(function () {
    return Math.round(Math.random()) - 0.5;
  });

  var noOfTeams = document.getElementById("groupInput").value;

  let totalGroups = [];

  for (let index = 0; index < noOfTeams; index++) {
    totalGroups.push([]);
  }

  for (let index = 0; index < array.length; index++) {
    for (i = 0; i < noOfTeams; i++) {
      if (index < array.length) {
        totalGroups[i].push(array[index++]);
      } else {
        break;
      }
    }
    index--;
  }
  console.log(totalGroups);
}

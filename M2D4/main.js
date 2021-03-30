const clearBtn = document.querySelector("#clearBtn");
const person = document.getElementById("name-input");
const mainList = document.querySelector(".main-name-list");
//const item = document.querySelector(".list-person-name");

//Add person to main List
function addPerson() {
  let newPerson = person.value;
  if (person.value !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.className = "col list-person-name card";
    span.className = "person-name";
    span.appendChild(document.createTextNode(`${newPerson}`));
    li.appendChild(span);
    li.addEventListener("click", function (e) {
      e.target.remove();
    });
    mainList.appendChild(li);
    // Alternative create element (preffered method)
    // const newName = `
    //     <div class="col card">
    //     <span>${newPerson}<i class="fas fa-trash float-right"></i></span>
    //     </div>
    //       `;
    // mainList.innerHTML += newName;

    // Clear input
    person.value = "";
  } else {
    alert("Please add a name");
  }
}

// function removePerson(e) {
//   item.remove();
// }

// function clearMainList() {
//   mainList.innerHTML = "";
// }

// item.onclick = (e) => {
//   removePerson(e);
// };

// Delete Name from Main List

// Get The total People on Main List (before assigning to groups)
function getTotalPeople() {
  let personName = document.querySelectorAll(".list-person-name").length;
  let count = document.querySelector(".total-person-mainlist");

  count.innerText = personName;

  console.log(person);
}

/*
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
*/

//Assign Person to Group

//create array off personlist
/*
var x = 0;
var array = Array();

function add_element_to_array() {
  array[x] = document.getElementById("person").value;

  x++;
  document.getElementById("person").value = "";
};

function display_array() {
  var e = "<hr/>";

  for (var y = 0; y < array.length; y++) {
    e += "Element " + y + " = " + array[y] + "<br/>";
  }

  document.getElementById("Result").innerHTML = e;
};
*/

/*
// function assign() {
//   array = ["aaaa", "bbb", 4444, 44444, 6666, 7777];
//   array.sort(function () {
//     return Math.round(Math.random()) - 0.5;
//   });
//   var noOfTeams = document.getElementById("groupInput").value;
//   let totalGroups = [];
//   for (let index = 0; index < noOfTeams; index++) {
//     totalGroups.push([]);
//   }
//   for (let index = 0; index < array.length; index++) {
//     for (i = 0; i < noOfTeams; i++) {
//       if (index < array.length) {
//         totalGroups[i].push(array[index++]);
//       } else {
//         break;
//       }
//     }
//     index
//   console.log(totalGroups);*/

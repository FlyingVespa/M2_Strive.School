// function start() {
//   e.preventDefault();
//   let pergroup = document.querySelectorAll(".pergroup");
//   pergroup = parseInt(pergroup).value;

//   let allnames = document.querySelector("textarea");
//   allnames = allnames.value;
//   allnames = allnames.split("\n");
//   allnameslen = allnames.length;

//   let numgroups = Math.ceil(allnameslen / namespergroup);

//   if (numgroups.value > 1) {
//     numgroups = parseInt(numgroups.value);
//     namespergroup = allnameslen / numgroups;
//   }

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

function addPerson() {
  let ul = document.getElementById("person-main-list");
  let person = document.getElementById("person");
  let li = document.createElement("li");
  li.setAttribute("id", "personlisted");
  li.appendChild(document.createTextNode(person.value));
  ul.appendChild(li);
}

function removePerson() {
  let ul = document.getElementById("person-main-list");
  let person = document.getElementById("person");
  let item = document.getElementById(person.value);
  ul.removeChild(item);
}

const getTotalPeople = () => {
  let person = document.querySelectorAll("#personlisted").length;
  let count = document.querySelector(".tott");
  count.innerText = person + " People On List";
  console.log(person);
};

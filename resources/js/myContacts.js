const row0 = document.getElementById("row0");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const row4 = document.getElementById("row4");
const row5 = document.getElementById("row5");
function replacePhoto(num){
    if (num == 0){
        document.getElementById("image").src = "./resources/images/default.jpeg";
    } else if (num == 1) {
        document.getElementById("image").src = "./resources/images/Chickahauk.jpeg";
    } else if (num == 2) {
        document.getElementById("image").src = "./resources/images/412Lofts.jpeg";
    } else if (num == 3) {
        document.getElementById("image").src = "./resources/images/TheMarshall.jpg";
    } else if (num == 4) {
        document.getElementById("image").src = "./resources/images/402BurntSienna.jpeg";
    } else if (num == 5) {
        document.getElementById("image").src = "./resources/images/Akpsi.jpeg";
    }
}
row0.addEventListener("mouseover", () => replacePhoto(0));
row0.addEventListener("mouseout", () => replacePhoto(0));
row1.addEventListener("mouseover", () => replacePhoto(1));
row1.addEventListener("mouseout", () => replacePhoto(0));
row2.addEventListener("mouseover", () => replacePhoto(2));
row2.addEventListener("mouseout", () => replacePhoto(0));
row3.addEventListener("mouseover", () => replacePhoto(3));
row3.addEventListener("mouseout", () => replacePhoto(0));
row4.addEventListener("mouseover", () => replacePhoto(4));
row4.addEventListener("mouseout", () => replacePhoto(0));
row5.addEventListener("mouseover", () => replacePhoto(5));
row5.addEventListener("mouseout", () => replacePhoto(0));

const nameHeader = document.getElementById("nameCell");
function sortByName(){
    //get contacts then convert into an array
    const contacts = document.getElementsByClassName("contact-row");
    let contactsArr = Array.from(contacts);

    //sort contacts by name
    contactsArr.sort(function(a, b) {
        const name1 = a.firstElementChild.innerText;
        const name2 = b.firstElementChild.innerText;
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    });

    //create elements and append them
    const contactsTable = document.getElementById('contacts-table');
    for (let contact of contactsArr){
        contactsTable.appendChild(contact);
    }
}
nameHeader.addEventListener("click", sortByName);


const emailHeader = document.getElementById("emailHeader");
function sortByEmail(){
    //get contacts then convert into an array
    const contacts = document.getElementsByClassName("contact-row");
    let contactsArr = Array.from(contacts);

    //sort contacts by name
    contactsArr.sort(function(a, b) {
        const name1 = a.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
        const name2 = b.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    });

    //create elements and append them
    const contactsTable = document.getElementById('contacts-table');
    for (let contact of contactsArr){
        contactsTable.appendChild(contact);
    }
  
}
emailHeader.addEventListener("click", sortByEmail);

//saving below code to go over with TA, please dont dock points for keeping it there


// function imagePlacer(event){
//     event.target.style.backgroundColor = "yellow";
//     let image = document.getElementById("#image");
//     console.log("imageplacer");
//     image.src="./resources/402BurntSienna.jpeg";
// }



// function defaultPlacer(){
//     let image = document.getElementById("#image");
//     console.log(image);
//     image.src="./resources/402BurntSienna.jpeg";
// }

// let rows = document.getElementsByTagName("tr");
// console.log(rows.item(1));
// for (let i = 0; i < rows.length; i++){
//     rows[i].addEventListener("mouseover", imagePlacer);
//     rows[i].addEventListener("mouseout", defaultPlacer);
// }

// let elements = document.getElementsByTagName("tr");
// console.log(elements);
// for (let i = 0; i < elements.length; i++){
//     console.log(elements);
// }

// var table = document.getElementById("table");
// for (var i = 0, row; row = table.rows[i]; i++) {
//     row.addEventListener("mouseover", imagePlacer);
//     for (var j = 0, col; col = row.cells[j]; j++) {
//       //iterate through columns
//       //columns would be accessed using the "col" variable assigned in the for loop
//     }
//  }

// const createClickHandler = (row) => {
//     return () => {
//       const [cell] = row.getElementsByTagName("td");
//       const id = cell.innerHTML;
//       console.log(id);
//     };
//   };
  
//   const table = document.querySelector("table");
//   console.log(table)
//   for (const currentRow of table.rows) {
//     currentRow.onclick = createClickHandler(currentRow);
//   }



// function changeImage() {
//     document.getElementById("image").src = "./resources/412Lofts.jpeg";
// }

// function defaultImage() {
//     document.getElementById("table").style.backgroundColor = "white";
// }
//     document.getElementById("table").style.backgroundColor = "white";
// }





// var rows = document.getElementsByTagName("tr");
// console.log(rows);
// for (i=1; i < rows.length; i++) {
//     rows[i].addEventListener("mouseover", mouseOver);
//     rows[i].addEventListener("mouseout", mouseOut);
//     rows[i].addEventListener("click", mouseClick);
//     rows[i].style.color="pink";

// }   

// function mouseOver() {
//     this.style.color = "red";
// }

// function mouseOut() {
//     this.style.color = "black";
// }

// function mouseClick(){
//     alert("Row was clicked!");
// }

// let tableRows = document.getElementsByClassName("trow");
// console.log(tableRows[1].innerHTML)


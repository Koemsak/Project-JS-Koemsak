/* ------------------------------------------------------------------------------------------------------------*/
/*                                    01 - DELETE AND EDIT LI FROM UL                                          */
/* ------------------------------------------------------------------------------------------------------------*/
function deleteAndEditBtn(event) {
    let myDeleteAndEditBtn = event.target.className;
    if (myDeleteAndEditBtn === "fa fa-trash-o btn-delete") {
        let toDelete = event.target.parentElement;
        let toDeleteLi = toDelete.parentElement.parentElement;
        toDeleteLi.remove();
    } else if (myDeleteAndEditBtn === "fa fa-pencil btn-icon") {

        modalForm.style.display="block";
        addButton.style.display = "none";
        updateButton.style.display = "block";
        
        let parent = event.target.parentElement;
        let grandParent = parent.parentElement;
        let toEdits = grandParent.parentElement.firstElementChild;

        let dateEdited = toEdits.lastElementChild;
        startDate.value = dateEdited.firstElementChild.textContent;


        let edited = toEdits.firstElementChild;
        if (edited.children[1].textContent === "FUNNY BOOK") {
            bg.style.background = "red";
        } else if (edited.children[1].textContent === "EDUCATION BOOK") {
            bg.style.background = "green";
        } else if (edited.children[1].textContent === "NOVEL BOOK"){
            bg.style.background = "yellow";
        };
        console.log(bg.style.background)
        selected.value = edited.children[1].textContent;
        txtName.value = edited.children[2].textContent;
        txtNumber.value = edited.children[3].textContent;
        if (edited.children[4].textContent === "M") {
            txtGender[0].checked = true;
        } else {
            txtGender[1].checked = true;
        }
        txtTitle.value = edited.children[5].textContent;

        let toEdit = grandParent.lastElementChild;
        endDate.value = toEdit.firstElementChild.textContent;

        liToEdit = grandParent.parentElement;
        updateButton.addEventListener('click', function() {
            if (txtName.value === "" || txtNumber.value === "" || txtTitle.value === "" || txtGender.value.length === 0 || startDate.value === "" || endDate.value === "") {
                window.confirm('You must fill this form');
            } else {

                let getTask = liToEdit.firstElementChild;

                
                let getTask1 = getTask.firstElementChild;
                getTask1.children[0].style.background = color;
                if (selected.value === "FUNNY BOOK") {
                    getTask1.children[0].style.background = "red";
                } else if (selected.value === "EDUCATION BOOK") {
                    getTask1.children[0].style.background = "green";
                } else if (selected.value === "NOVEL BOOK") {
                    getTask1.children[0].style.background = "yellow";
                }
                getTask1.children[1].textContent = selected.value;
                getTask1.children[2].textContent = txtName.value.toUpperCase(); 
                getTask1.children[3].textContent = txtNumber.value;
                getTask1.children[4].textContent = txtGender.value;
                getTask1.children[5].textContent = txtTitle.value.toUpperCase();
                let getTask2 = liToEdit.firstElementChild.lastElementChild;
                getTask2.children[0].textContent = startDate.value;

                let secondDiv = getTask.nextElementSibling.lastElementChild;
                secondDiv.children[0].textContent = endDate.value;
                
                let thirdDiv = liToEdit.lastElementChild;
                thirdDiv.children[0].textContent = txtName.value.toUpperCase() + " have been added book name " + txtTitle.value.toUpperCase() + " amount " + txtNumber.value + " into library";
                
            }
        
            modalForm.style.display = "none";
            addButton.style.display = "block";
        });
    };
};


/* ------------------------------------------------------------------------------------------------------------*/
/*                                        02 - ADD ITEM INTO BOOK LIST                                         */
/* ------------------------------------------------------------------------------------------------------------*/

let bg = document.querySelector("#color-area");
let color = ""
let selected = document.querySelector("#subject");
selected.addEventListener('click', function() {
    let select = document.querySelector("#subject").selectedIndex;
    let subject = document.querySelectorAll("option")[select].value;
    if (subject === "FUNNY BOOK") {
        color="red";
        bg.style.background = color;
    } else if (subject === "EDUCATION BOOK") {
        color="green";
        bg.style.background = color;
    } else if (subject === "NOVEL BOOK") {
        color="yellow";
        bg.style.background = color;
    }
})


let txtName = document.querySelector("#bookUser");
let txtNumber = document.querySelector("#bookNumber");
let txtGender = form.gender;
let txtTitle = document.querySelector("#bookTitle");
let startDate = document.querySelector("#publised_date");
let endDate = document.querySelector("#purchase_date");
let check_date = document.querySelector(".warning")
function addBookList(event) {
    event.preventDefault();
    let myBtnList = document.querySelector("ul");
    // Get the information from all input
    
    if (txtName.value === "" || txtNumber.value === "" || txtTitle.value === "" || txtGender.value.length === 0 || startDate.value === "" || endDate.value === "") {
        window.confirm('You must fill this form');
    } else {
        if (startDate.value<=endDate.value) {
            check_date.style.display="none"
            
            // Create a li element tage
            let li = document.createElement('li');
            // Create a div with class name = itme
            let item = document.createElement('div');
            item.className = "item";
            // Create a div with class name = text
            let text = document.createElement('div');
            text.className = "text";
            // Create a div with  class name = color
            let colors = document.createElement('div');
            colors.className = "color";
            if (selected.value === "FUNNY BOOK") {
                colors.style.background = 'red';
            } else if (selected.value === "EDUCATION BOOK") {
                colors.style.background = "green";
            } else if (selected.value === "NOVEL BOOK") {
                colors.style.background = "yellow";
            }
            // Create a span with class name = "nameOfSubject"
            let nameOfCategory = document.createElement('span');
            nameOfCategory.className = "nameOfSubject";
            nameOfCategory.textContent = selected.value;
            // Create a span for text name with class = name
            let name = document.createElement('span');
            name.className = "name";
            name.textContent = txtName.value.toUpperCase();
            // Create a span for text number with class = ages
            let numberOfBook = document.createElement('span');
            numberOfBook.className = "number";
            numberOfBook.textContent = txtNumber.value;
            // Create a span for text gender with class = gender
            let gender = document.createElement('span');
            gender.className = "gender";
            gender.textContent = txtGender.value;
            // Create a span for text title  with class = "book-title"
            let book_title = document.createElement('span');
            book_title.className = "book-title";
            book_title.textContent = txtTitle.value.toUpperCase();
            // Create a div with class name = publisedDate
            let DatePublised = document.createElement('div');
            DatePublised.className = "publisedDate";
            // Create a span for date
            let spanPublisedDate = document.createElement('span');
            spanPublisedDate.textContent =  startDate.value;

            // Create a div with class btnD
            let btnD = document.createElement('div');
            btnD.className = "btnD";
            // Create a div with class icon
            let icon = document.createElement('div');
            icon.className = "icon";
            // Create a span for edit btn with class = fa fa-pencil btn-icon
            let edit = document.createElement('span');
            edit.className = "fa fa-pencil btn-icon";
            // Create a span for delet btn with class = btn-delete
            let btnDelete = document.createElement('span');
            btnDelete.className = "fa fa-trash-o btn-delete";
            // Create a div with class = purchesedDate
            let DatePurchesed = document.createElement('div');
            DatePurchesed.className = "purchesedDate";
            // Create a span for  purcheseDate
            let spanPurcheseDate = document.createElement('span');
            spanPurcheseDate.textContent = endDate.value;
            // Create a div with for description with class = tooltip
            let tooltip = document.createElement('div');
            tooltip.className = "tooltip";
            // Create a p for text description
            let p = document.createElement('p');
            p.textContent = txtName.value.toUpperCase() + " have been added book name " + txtTitle.value + " amount " + txtNumber.value + " into library";
            // Add all above span into div class item
            text.appendChild(colors);
            text.appendChild(nameOfCategory);
            text.appendChild(name);
            text.appendChild(numberOfBook);
            text.appendChild(gender);
            text.appendChild(book_title);

            DatePublised.appendChild(spanPublisedDate);

            tooltip.appendChild(p);

            item.appendChild(text);
            item.appendChild(DatePublised);
            // Add all btn span into div with class btnD
            icon.appendChild(edit);
            icon.appendChild(btnDelete);

            DatePurchesed.appendChild(spanPurcheseDate);


            btnD.appendChild(icon);
            btnD.appendChild(DatePurchesed);
            // Add p into div class tooltip
            tooltip.appendChild(p);
            // Add all div into li
            li.appendChild(item);
            li.appendChild(btnD);
            li.appendChild(tooltip);
            // Add li into list-name
            myBtnList.appendChild(li);


            // Set all input to empty after enter
            txtName.value = "";
            txtNumber.value = "";
            txtGender.checked = false;
            txtTitle.value = "";
            startDate.value = "";
            endDate.value = "";

            modalForm.style.display = "none";

            li.addEventListener('mouseover', function() {
                tooltip.style.display = "block";
            });
            li.addEventListener('mouseout', function () {
                tooltip.style.display = "none";
            })
        }else{
            check_date.style.display="block"
            modalForm.style.display = "block";
        }
    };
    
};

/* ------------------------------------------------------------------------------------------------------------*/
/*                                        03 - SEARCH TO FIND BOOK NAME                                        */
/* ------------------------------------------------------------------------------------------------------------*/

function searchValue() {
    let text = searchBox.value.toLowerCase();
    let items = document.querySelectorAll('li');
    for (let value of items) {
        let title = value.firstElementChild.firstElementChild;
        let thidSpan = title.lastElementChild.textContent.toLowerCase();
        if (thidSpan.indexOf(text) === -1) {
            value.style.display = "none";
        } else {
            value.style.display = "";
        }
    }  
};

/* ------------------------------------------------------------------------------------------------------------*/
/*                                        04 - MODAL FORM                                                      */
/* ------------------------------------------------------------------------------------------------------------*/
let modalForm = document.getElementById("modal-form");
function modal() {
    modalForm.style.display = "block";
    updateButton.style.display = "none";
    txtName.value = "";
    txtNumber.value = "";
    txtGender[0].checked = false;
    txtGender[1].checked = false;
    txtTitle.value = "";
    startDate.value = "";
    endDate.value = "";
    selected.value = "FUNNY BOOK";
    bg.style.background = "red";

}

function closeBtn() {
    modalForm.style.display = "none";
    addButton.style.display = "block";
}


/* ------------------------------------------------------------------------------------------------------------*/
/*                                        ALL BUTTON TO CLICK                                                  */
/* ------------------------------------------------------------------------------------------------------------*/

let addButton = document.querySelector(".submit-button");
addButton.addEventListener('click', addBookList);

let updateButton = document.querySelector(".update-button");


let myBtnList = document.querySelector(".card ul");
myBtnList.addEventListener('click', deleteAndEditBtn);



let searchBox = document.querySelector("#search-name");
searchBox.addEventListener('keyup', searchValue);

let selectBtn = document.getElementsByName("book");
for (let book of selectBtn) {
    book.addEventListener('click', category);
}
/* ------------------------------------------------------------------------------------------------------------*/
/*                                        MODAL BUTTON ON TOP                                                  */
/* ------------------------------------------------------------------------------------------------------------*/

let modalBtn = document.querySelector("#add");                                                            
modalBtn.addEventListener("click", modal);

let modalClose = document.querySelector(".close");
modalClose.addEventListener("click", closeBtn);

/*--------------------------------------------------------------------------------------------------------------*/
/*                                                                                                              */
/*--------------------------------------------------------------------------------------------------------------*/
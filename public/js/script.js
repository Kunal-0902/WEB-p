function openTab(tabName) {
    var i, tabcontent;

    // Hide all tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the clicked tab
    document.getElementById(tabName).style.display = "block";

    // Close the navbar on small screens after clicking a tab
    var navbar = document.getElementById("myNavbar");
    if (window.innerWidth <= 600) {
        navbar.classList.remove("responsive");
    }
}

function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
}

// Searchbox
function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const rows = document.getElementById("customerData").getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const rowData = rows[i].textContent || rows[i].innerText;
        if (rowData.toLowerCase().includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Updated JavaScript to handle tab clicks on small screens
function openTab(tabName) {
    var i, tabcontent;

    // Hide all tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the clicked tab
    document.getElementById(tabName).style.display = "block";

    // Close the navbar on small screens after clicking a tab
    var navbar = document.getElementById("myNavbar");
    if (window.innerWidth <= 600) {
        navbar.classList.remove("responsive");
    }
}


// validate the input for phone no
function validatePhoneNumber(input) {
    // Remove non-numeric characters
    let phoneNumber = input.value.replace(/\D/g, '');

    // Limit to 10 digits
    phoneNumber = phoneNumber.slice(0, 10);

    // Update the input value
    input.value = phoneNumber;
}

// delete add btn added dynamicaly

function editRow(button) {
    // Add your edit logic here
    alert('Edit button clicked');
}

function deleteRow(button) {
    // Add your delete logic here
    alert('Delete button clicked');
}   

//search bar
// document.getElementById("searchInput").addEventListener("input", searchTable);

// function searchTable() {
//     const input = document.getElementById("searchInput");
//     const filter = input.value.toLowerCase();
//     const rows = document.getElementById("customerData").getElementsByTagName("tr");

//     for (let i = 0; i < rows.length; i++) {
//         const rowData = rows[i].textContent || rows[i].innerText;
//         if (rowData.toLowerCase().includes(filter)) {
//             rows[i].style.display = "";
//         } else {
//             rows[i].style.display = "none";
//         }
//     }
// }
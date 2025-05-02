// Shape Generator
function getNumber() {
    let num;
    do {
        num = prompt("Enter a number:");
    } while (isNaN(num) || num === "" || num === null);

    num = parseInt(num);
    let output = `Number inputted: ${num}<br><br>`;

    if (num % 2 !== 0) { // Odd - rectangle
        for (let i = num; i >= 1; i--) {
            for (let j = 0; j < num; j++) {
                output += i + " ";
            }
            output += "<br>";
        }
    } else { // Even - triangle
        for (let i = num; i >= 1; i--) {
            for (let j = 0; j < i; j++) {
                output += i + " ";
            }
            output += "<br>";
        }
    }

    document.getElementById("output").innerHTML = output;
}

// Contacts List
let contacts = [];

function updateContactsList() {
    const list = document.getElementById("contactsList");
    list.innerHTML = "";
    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = contact;
        list.appendChild(li);
    });
}

function addContact() {
    const name = document.getElementById("nameInput").value.trim();
    if (name !== "") {
        if (contacts.length >= 7) {
            contacts.shift(); // Remove first
        }
        contacts.push(name);
        updateContactsList();
        document.getElementById("nameInput").value = "";
    }
}

function removeContact() {
    contacts.pop(); // Remove last
    updateContactsList();
}

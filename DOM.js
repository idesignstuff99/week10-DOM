// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

/**
 * What do I need?
 * my button... onClick should add information
 * How do I get information
 * need: firstName, lastName, favColor - store them in a variable
 * 
 * Find a way to the # value 
 * Way to get values from the form... when submitted... then append() the info to the table
 * We need to get the value with: getElementByID()
 */

const formButton = document.getElementById('formSubmit')

let number = 0;

formButton.addEventListener('click', (event) => {
    event.preventDefault()
    
    //variables to hold the values of the form
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let favColor = document.getElementById('favColor').value;


    //to create a node... a tr node... to append to my form

    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let favColorNode = document.createElement('td')
    favColorNode.innerHTML = favColor
    newTableRow.append(favColorNode)


    document.getElementById('tBody').appendChild(newTableRow);

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('favColor').value = '';

    number++
})
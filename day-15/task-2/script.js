// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all button elements
    const buttons = document.querySelectorAll('button');

    // Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Clear the result if the clear button is clicked
            if (this.id === 'clear') {
                document.getElementById('result').value = '';
            }
            // Perform addition if the add button is clicked
            else if (this.id === 'add') {
                document.getElementById('result').value += '+';
            }
            // Perform subtraction if the subtract button is clicked
            else if (this.id === 'subtract') {
                document.getElementById('result').value += '-';
            }
            // Calculate the result if the equal button is clicked
            else if (this.id === 'equal') {
                const expression = document.getElementById('result').value;
                const result = eval(expression); // Evaluate the expression
                document.getElementById('result').value = result;
            }
            // Append the clicked button's value to the result
            else {
                document.getElementById('result').value += this.textContent;
            }
        });
    });
});

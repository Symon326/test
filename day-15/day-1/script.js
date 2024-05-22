document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Getting form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    // Create table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${email}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <!-- Add other table data as per the requirements -->
    `;
    
    // Append multiplevalues to a row
    document.getElementById('tableBody').appendChild(newRow);
    
    //for clearing fields 
    document.getElementById('form').reset();
  });
  
  
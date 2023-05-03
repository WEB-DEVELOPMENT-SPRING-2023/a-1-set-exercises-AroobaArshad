document.getElementById("calculate").addEventListener('click', function() {

    // Getting input values of users for calculating the price

    var Petrol_Price = parseFloat(document.getElementById('Petrol_Price').value);
    var Petrol_Litres = parseFloat(document.getElementById('Petrol_Litres').value);

    // Calculating the total cost of petrol
    // Using arithmetic operations

    var Cost = Petrol_Price * Petrol_Litres;

    // Displaying the total cost to the user
    // Total cost is displayed when the user clicks on the calculate button

    document.getElementById('Cost').innerText = "Total Cost: $" + Cost.toFixed(2);

});
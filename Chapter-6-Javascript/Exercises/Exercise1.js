document.getElementById("calculate").addEventListener('click', function() {

    // Getting input values of users

    var Petrol_Price = parseFloat(document.getElementById('Petrol_Price').value);
    var Petrol_Litres = parseFloat(document.getElementById('Petrol_Litres').value);

    // Calculating the total cost of petrol

    var Cost = Petrol_Price * Petrol_Litres;

    // Displaying the total cost to the user

    document.getElementById('Cost').innerText = "Total Cost: $" + Cost.toFixed(2);

});
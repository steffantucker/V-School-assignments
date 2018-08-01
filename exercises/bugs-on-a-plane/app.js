var form = document.airlineForm;

function formAlert(e) {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    var checked = document.querySelectorAll('input[type=checkbox]:checked');
    for (let i = 0; i < checked.length; i++)
        diet.push(checked[i].value);


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


form.addEventListener('submit', formAlert);
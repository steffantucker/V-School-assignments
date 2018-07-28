document.flight.addEventListener('submit', function(e) {
  e.preventDefault();
  let name = `${document.flight.fname.value} ${document.flight.lname.value}`
  let age = document.flight.age.value;
  let gender = document.flight.gender.value;
  let destination = document.flight.destination.value;
  let dietarychecked = document.querySelectorAll('input[name=dietary]:checked')
  let dietary = [];
  for (let i = 0; i < dietarychecked.length; dietary.push(dietarychecked[i].value), i++ );
  console.log(dietary);
  alert(`${name} flying to ${destination}, age ${age}, gender ${gender} with diet restricted to: ${dietary.join(', ')}`)
})
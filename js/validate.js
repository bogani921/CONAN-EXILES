function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;

  if (name == "") {
    alert("Il campo Nome è obbligatorio.");
    return false;
  }

  if (email == "") {
    alert("Il campo Email è obbligatorio.");
    return false;
  }

  if (password == "") {
    alert("Il campo Password è obbligatorio.");
    return false;
  }

  if (password.length < 6) {
    alert("La password deve contenere almeno 6 caratteri.");
    return false;
  }

  // Altre regole di validazione...

  return true; // Se tutti i campi sono validi
}

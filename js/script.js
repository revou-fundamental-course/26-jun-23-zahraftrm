function validateForm() {
  var name = document.forms["message-form"]["name"].value;
  var email = document.forms["message-form"]["email"].value;
  var phoneNumber = document.forms["message-form"]["phone"].value;
  var messages = document.forms["message-form"]["messages"].value;
  var select = document.forms["message-form"]["option"].value;

  if (
    name == "" ||
    email == "" ||
    phoneNumber == "" ||
    messages == "" ||
    select == ""
  ) {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  document.getElementById("sender-name").innerText = name;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-phone").innerText = phoneNumber;
  document.getElementById("sender-messages").innerText = messages;
  document.getElementById("sender-option").innerText = select;
  return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slideshow");
  if (n > x.length) slideIndex = 1;
  else if (n < 1) slideIndex = x.length;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}
setInterval(() => {
  plusDivs(1);
}, 3000);

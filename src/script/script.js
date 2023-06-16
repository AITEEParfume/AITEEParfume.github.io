// JavaScript
function openWhatsApp(number) {
  // Modify the phone number to include the country code if necessary
  var phoneNumber = "+6289503080624";

  // Open WhatsApp chat with the specified number
  window.open("https://wa.me/" + phoneNumber);
}

function redirectToWebsite(url) {
  // Redirect to the specified website
  window.location.href = url;
}

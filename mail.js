// Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyC0AeJ0p11MpSSvrq7SBdFLRWIF_W2Zk88",
    authDomain: "http://hungerlink-74a1b.firebaseapp.com",
    databaseURL: "http://hungerlink-74a1b.firebaseapp.com",
    projectId: "hungerlink-74a1b",
    storageBucket: "http://hungerlink-74a1b.firebasestorage.app",
    messagingSenderId: "533644181330",
    appId: "1:533644181330:web:5353cb89fdead28a4dc48b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
var db = firebase.firestore();

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from auto-submitting

    // Get form values
    var businessName = document.getElementById("business-name").value;
    var contactName = document.getElementById("contact-name").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var emailId = document.getElementById("email-id").value;
    var address = document.getElementById("address").value;
    var pinCode = document.getElementById("pin-code").value;
    var city = document.getElementById("city").value;

    // Store data in Firestore
    db.collection("donors").add({
        businessName: businessName,
        contactName: contactName,
        phoneNumber: phoneNumber,
        emailId: emailId,
        address: address,
        pinCode: pinCode,
        city: city,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Data stored successfully!");
        window.location.href = "fooddonor.html"; // Redirect after submission
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        alert("Error storing data: " + error.message);
    });
}

// Attach the submit event listener
document.getElementById("donation-form").addEventListener("submit", submitForm);

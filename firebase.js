// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0AeJ0p11MpSSvrq7SBdFLRWIF_W2Zk88",
    authDomain: "hungerlink-74a1b.firebaseapp.com",
    databaseURL: "https://hungerlink-74a1b-default-rtdb.firebaseio.com",
    projectId: "hungerlink-74a1b",
    storageBucket: "hungerlink-74a1b.firebasestorage.app",
    messagingSenderId: "533644181330",
    appId: "1:533644181330:web:5353cb89fdead28a4dc48b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to save user data
function saveUserData(userType, formData) {
    const db = firebase.database().ref(userType);
    db.push(formData)
        .then(() => alert("Data saved successfully!"))
        .catch(error => console.error("Error saving data: ", error));
}

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const formData = {};
            new FormData(form).forEach((value, key) => {
                formData[key] = value;
            });
            const userType = form.getAttribute("data-user-type");
            saveUserData(userType, formData);
        });
    });
});

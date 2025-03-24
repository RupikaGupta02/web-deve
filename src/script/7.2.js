document.getElementById("lang-select").addEventListener("change", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log(document.documentElement); /*access html property*/

    let language = event.target.value;
    document.documentElement.lang = language;

    let heading = document.getElementById("heading");
    let text = document.getElementById("text");

    if (language === "en") {
        heading.textContent = "Hello Users";
        text.textContent = "Welcome to the world of CSS";
    } else if (language === "ar") {
        heading.textContent = "مرحبا بالمستخدمين";
        text.textContent = "مرحباً بكم في عالم CSS";
    } else if (language === "hin") {
        heading.textContent = "नमस्ते उपयोगकर्ता";
        text.textContent = "सीएसएस की दुनिया में आपका स्वागत है";
    } else {
        heading.textContent = "ನಮಸ್ಕಾರ ಬಳಕೆದಾರರು";
        text.textContent = "ಸಿಎಸ್ಎಸ್ ಪ್ರಪಂಚಕ್ಕೆ ಸ್ವಾಗತ.";
    }
});

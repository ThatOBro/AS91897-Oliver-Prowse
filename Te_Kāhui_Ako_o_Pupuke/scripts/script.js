// Define the text content for both languages
const translations = {
    en: {
        page1: "Home Page",
        page2: "Pupuke & Rangitoto",
        page3: "Ngāti Pāoa & Waitematā",
        subtitle: "Satellite Site",
        contactUs: "Contact Us",
        sourceInfo: "Source Info"
    },
    mi: {
        page1: "Whārangi Kāinga",
        page2: "Pupuke me Rangitoto",
        page3: "Ngāti Pāoa me Waitematā",
        subtitle: "Paetukutuku ā-Whetū",
        contactUs: "Whakapā Mai",
        sourceInfo: "Puna Pārongo"
    }
};

// Function to switch language based on the user's choice
function switchLanguage(language) {
    // Update the text content for the relevant elements
    document.querySelector('.page1').textContent = translations[language].page1;
    document.querySelector('.page2').textContent = translations[language].page2;
    document.querySelector('.page3').textContent = translations[language].page3;
    document.querySelector('.subtitle').textContent = translations[language].subtitle;
    document.querySelector('#button-1 .text').textContent = translations[language].contactUs;
    document.querySelector('#button-2 .text').textContent = translations[language].sourceInfo;

    // Save the language choice to localStorage
    localStorage.setItem("language", language);
}

// Function to set the radio input based on the saved language preference
function setRadioInput(language) {
    const radioInputs = document.querySelectorAll('input[name="radio"]');
    radioInputs.forEach(input => {
        if (input.value === language) {
            input.checked = true;
        }
    });
}

// Add event listeners to the radio inputs
document.querySelectorAll('input[name="radio"]').forEach(input => {
    input.addEventListener('change', function() {
        switchLanguage(this.value);
    });
});

// On page load, set the language based on saved choice or default to English
window.onload = function() {
    const savedLanguage = localStorage.getItem("language") || "en";
    switchLanguage(savedLanguage);
    setRadioInput(savedLanguage);
};
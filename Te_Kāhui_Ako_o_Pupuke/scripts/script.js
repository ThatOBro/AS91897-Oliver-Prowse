const translations = {
    en: {
        page1: "Home Page",
        page2: "Pupuke & Rangitoto",
        page3: "Ngāti Pāoa & Waitematā",
        subtitle: "Satellite Site",
        hero_text1: "Our Vision",
        hero_text2: "To create a rich, collaborative culture that unites kura (schools), pouako (teachers), ākonga (students) and whānau to work collectively on common goals for the benefit of all.",
        learn_more: "Learn More",
        tile2h1: "Lake Pupuke",
        tile3h1: "Rangitoto Island",
        contact_us: "Contact Us",
        source_info: "Source Info"
    },
    mi: {
        page1: "Whārangi Kāinga",
        page2: "Pupuke me Rangitoto",
        page3: "Ngāti Pāoa me Waitematā",
        subtitle: "Paetukutuku ā-Whetū",
        hero_text1: "To Tatou Matakite",
        hero_text2: "Ki te hanga i tetahi ahurea whai kiko, mahi tahi e whakakotahi ai nga kura, nga kaiako, nga tauira me nga whanau ki te mahi tahi i runga i nga whaainga kotahi hei painga mo te katoa.",
        learn_more: "Ako atu",
        tile2h1: "Roto Pupuke",
        tile3h1: "Te Moutere o Rangitoto",
        contact_us: "Whakapā Mai",
        source_info: "Puna Pārongo"
    }
};

function switchLanguage(language) {
    const elementsToTranslate = [
        { selector: '.page1', translationKey: 'page1' },
        { selector: '.page2', translationKey: 'page2' },
        { selector: '.page3', translationKey: 'page3' },
        { selector: '.subtitle', translationKey: 'subtitle' },
        { selector: '.hero_text1', translationKey: 'hero_text1' },
        { selector: '.hero_text2', translationKey: 'hero_text2' },
        { selector: '.learn_more1', translationKey: 'learn_more' },
        { selector: '.lake_pupuke', translationKey: 'tile2h1' },
        { selector: '.rangitoto_island', translationKey: 'tile3h1' },
        { selector: '.learn_more2', translationKey: 'learn_more' },
        { selector: '.learn_more3', translationKey: 'learn_more' },
        { selector: '.learn_more4', translationKey: 'learn_more' },
        { selector: '#button-1 .text', translationKey: 'contact_us' },
        { selector: '#button-2 .text', translationKey: 'source_info' },
    ];

    elementsToTranslate.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.textContent = translations[language][item.translationKey];
        } else {
            console.log(`Element with selector '${item.selector}' not found.`);
        }
    });

    const h1Tag = document.querySelector('.rangitoto_island');
    if (h1Tag) {
        if (language === "mi") {
            h1Tag.style.transform = "translateX(10%)";
        } else {
            h1Tag.style.transform = "translateX(37%)";
        }
    }

    localStorage.setItem("language", language);
}

function setRadioInput(language) {
    const radioInputs = document.querySelectorAll('input[name="radio"]');
    radioInputs.forEach(input => {
        if (input.value === language) {
            input.checked = true;
        }
    });
}

document.querySelectorAll('input[name="radio"]').forEach(input => {
    input.addEventListener('change', function() {
        switchLanguage(this.value);
    });
});

window.onload = function() {
    const savedLanguage = localStorage.getItem("language") || "en";
    switchLanguage(savedLanguage);
    setRadioInput(savedLanguage);
};
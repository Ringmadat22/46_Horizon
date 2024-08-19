// Check if the user has already selected a language
window.onload = function() {
    const selectedLanguage = localStorage.getItem('language');
    
    if (!selectedLanguage) {
      // Show the modal if no language is selected
      document.getElementById("languageModal").style.display = "block";
    } else {
      // Load the page in the selected language
      loadLanguage(selectedLanguage);
    }
  }

  // Set language and store it in localStorage
  function setLanguage(language) {
    localStorage.setItem('language', language);
    document.getElementById("languageModal").style.display = "none";
    loadLanguage(language);
  }

  // Function to load content based on the selected language
  function loadLanguage(language) {
    if (language === 'ar') {
      // Arabic translations
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      document.getElementById('slider-title').textContent = 'مرحبًا بكم في 64 هوريزون';
      document.getElementById('slider-description').textContent = 'استمتع بأحدث الأفلام واحجز تذاكرك اليوم!';
      document.getElementById('movies-header').textContent = 'الأفلام في هوريزون';
    } else {
      // Default to English
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      document.getElementById('slider-title').textContent = 'Welcome to 64 Horizon';
      document.getElementById('slider-description').textContent = 'Enjoy our latest movies and book your tickets today!';
      document.getElementById('movies-header').textContent = 'Movies at Horizon';
    }
  }
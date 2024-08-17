document.getElementById('now_showing_btn').addEventListener('click', function () {
    document.querySelector('.now_showing').classList.remove('hidden');
    document.querySelector('.coming_up').classList.add('hidden');
    
    // Add active class to the clicked button and remove from the other
    document.getElementById('now_showing_btn').classList.add('active');
    document.getElementById('coming_soon_btn').classList.remove('active');
  });
  
  document.getElementById('coming_soon_btn').addEventListener('click', function () {
    document.querySelector('.coming_up').classList.remove('hidden');
    document.querySelector('.now_showing').classList.add('hidden');
    
    // Add active class to the clicked button and remove from the other
    document.getElementById('coming_soon_btn').classList.add('active');
    document.getElementById('now_showing_btn').classList.remove('active');
  });
  
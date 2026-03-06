const toggle = document.getElementById('darkToggle'); 
const body = document.body; 


if (localStorage.getItem('darkMode') === 'true') {
   body.classList.add('dark-mode'); toggle.textContent = '☀️'; 
  } 
  
  
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
    const isDark = body.classList.contains('dark-mode'); 
    toggle.textContent = isDark ? '☀️' : '🌙'; 
    localStorage.setItem('darkMode', isDark); 
  });

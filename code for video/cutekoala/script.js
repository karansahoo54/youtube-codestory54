document.querySelector('.body').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === '#767677' ? '#b0b0b0' : '#767677';
  });
  
  document.querySelector('.container').addEventListener('click', function() {
    this.classList.toggle('shake');
  });
  
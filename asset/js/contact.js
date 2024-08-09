window.addEventListener('scroll', function() {
    const targetElement = document.getElementById("Office");
    const targetElement1 = document.getElementById("Office3");
    if (window.scrollY >= 100) {
      targetElement.classList.add('active');
      targetElement1.classList.add('active');
    } else {
      targetElement.classList.remove('active');
      targetElement1.classList.remove('active');
    }
  });
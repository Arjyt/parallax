window.addEventListener('scroll', function() {
    let layers = document.querySelectorAll('.parallax__layer--back');
    let scrollTop = window.pageYOffset;
  
    layers.forEach(layer => {
      let depth = layer.getAttribute('data-depth');
      let movement = -(scrollTop * depth);
      layer.style.transform = `translateY(${movement}px)`;
    });
  });
  
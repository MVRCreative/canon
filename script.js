.swiper-slide {
  height: auto !important;
}

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 10,
    slideShadows: false,
    stretch: 32,
 
  },
  	loop: true,
    slidesPerView: 2,
    slideActiveClass: "is--active",
    centeredSlides: true, 
    dragClass: 'swiper-scrollbar-drag',
    draggable: true,
    grabCursor: true,
    spaceBetween: 30,
    
    
});
</script>


.swiper-slide {
    height: auto !important;


document.addEventListener('DOMContentLoaded', function() {
    let hardwareBlocks = document.querySelectorAll('.js-hardware-block');
    
    let motherboardBlock = document.querySelector('.origin-motherboard'),
        cpuBlock = document.querySelector('.origin-cpu'),
        ramBlock = document.querySelector('.origin-ram'),
        gpuBlock = document.querySelector('.origin-gpu'),
        hddBlock = document.querySelector('.origin-hdd'),
        psBlock = document.querySelector('.origin-ps'),
        caseBlock = document.querySelector('.origin-case');
    
    hardwareBlocks.forEach(function(item){

      item.addEventListener('click', function(e) {

         e.preventDefault();
         let content = item.querySelector('.container').innerHTML
         let hardwareBlockClass = item.classList[1];
         let originBlock = document.querySelector('.origin-' + hardwareBlockClass);
         originBlock.innerHTML = content;
         let closeButton = document.createElement('div');
         closeButton.innerHTML = '<div class="close-container"><div class="leftright"></div><div class="rightleft"></div></div>';                           
                                
         originBlock.querySelector('.hardware-spec').before(closeButton);
          
         let overlay = document.querySelector('.js-overlay-modal');
         modalElem = document.querySelector('.modal[data-modal="' + hardwareBlockClass + '"]');

         modalElem.classList.remove('active');
         overlay.classList.remove('active');
 
      }); 

   });
    
}); 
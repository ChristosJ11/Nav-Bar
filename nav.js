const navSlide = () => {
    const stack = document.querySelector('.stack');
    const links = document.querySelector('.up1 ');
    const links1 = document.querySelector('.up2 ');
    const links2 = document.querySelector('.up3 ');
    const links3 = document.querySelector('.up4 ');
    const line2 = document.querySelector('.line2 ');
    const line1 = document.querySelector('.line1 ');
    const line3 = document.querySelector('.line3 ');
    const back=document.querySelector('.back ');
    
    var done= 0;
    if(done==0){
        stack.addEventListener('click', () => {
            links.classList.toggle('links-active');
            links1.classList.toggle('links-active');
            links2.classList.toggle('links-active');
            links3.classList.toggle('links-active');
            line1.classList.toggle('line1slide');
            line3.classList.toggle('line3slide');
            line2.classList.toggle('hide');
            back.classList.toggle('backalive');
            
            done+=1;
         
            
            
        });
    }
       else if (done==1){
    stack.addEventListener('click', () => {
        line1slide.classList.toggle('line1');
        line3slide.classList.toggle('line3');
        hide.classList.toggle('line2');
        done-=1;
    });
   }
    
}



navSlide();

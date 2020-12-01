const navSlide = () => {
    const stack = document.querySelector('.stack');
    const links = document.querySelector('.up1 ');
    const links1 = document.querySelector('.up2 ');
    const links2 = document.querySelector('.up3 ');
    const links3 = document.querySelector('.up4 ');
    const links4 = document.querySelector('.up5 ');
    const line2 = document.querySelector('.line2 ');
    const line1 = document.querySelector('.line1 ');
    const line3 = document.querySelector('.line3 ');
    const back=document.querySelector('.back ');
    const p = document.querySelector('p');
   
    var done= 0;
    if(done==0){
        stack.addEventListener('click', () => {
            links.classList.toggle('links-active');
            links1.classList.toggle('links-active');
            links2.classList.toggle('links-active');
            links3.classList.toggle('links-active');
            links4.classList.toggle('links-active');
            line1.classList.toggle('line1slide');
            line3.classList.toggle('line3slide');
            line2.classList.toggle('hide');
            back.classList.toggle('backalive');
            p.classList.toggle('pnew');
            
            done+=1;
         
            //WATCH OUT
            const text = document.querySelector('.text');
            const strText= text.textContent;
            const splitText = strText.split("");
            text.textContent = "";
            for(let i = 0; i < splitText.length; i++){
                text.innerHTML += "<span>" + splitText[i] + "</span>";
            }
            let char=0;
            let timer =setInterval(onTick,50);
            function onTick(){
                const span= text.querySelectorAll('span')[char];
                span.classList.add('fade');
                char++;
                if(char === splitText.length){
                    complete();
                    return;
                }
            }
            function complete(){
                clearInterval(timer);
                timer=null;
            }
            //BREHHH
            const text1 = document.querySelector('.text1');
            const strText1= text1.textContent;
            const splitText1 = strText1.split("");
            text1.textContent = "";
            for(let i = 0; i < splitText1.length; i++){
                text1.innerHTML += "<span>" + splitText1[i] + "</span>";
            }
            let char1=0;
            let timer1 =setInterval(onTicky,50);
            function onTicky(){
                const span= text1.querySelectorAll('span')[char1];
                span.classList.add('fade1');
                char1++;
                if(char1 === splitText1.length){
                    completey();
                    return;
                }
            }
            function completey(){
                clearInterval(timer1);
                timer1=null;
            }
            //brehagain
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


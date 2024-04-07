let btns = document.querySelectorAll(".btn");
      let count=document.getElementById('counter');
       let cnt=0;
      btns.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
            let lisiner=e.currentTarget.value;
            if(lisiner==='Decrease'){
              cnt--;
              count.textContent=cnt;
            }
            else  if(lisiner==='Increase'){
              cnt++;
              count.textContent=cnt;
            }
            else{
              cnt=0;
              count.innerHTML=cnt;
            }
            if(cnt>0){
              count.style.color='green';
            }
            if(cnt<0){
              
              count.style.color='red';
            }
            if(cnt==0){
              count.style.color='black';
            }
        })
      });
const imgs = document.querySelectorAll('.slider ul img');
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');

let n =0;

function changeslide()
{
    for(let i = 0; i<imgs.length; i++)
    {
    imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeslide();

prev.addEventListener('click', (e)=>{
    if(n>0)
    {
        n--;
    }else{
        n=imgs.length-1;
    }
    changeslide();
})

next.addEventListener('click', (e)=>{
    if(n<imgs.length-1)
    {
        n++;
    }else{
        n=0;
    }
    changeslide();
})
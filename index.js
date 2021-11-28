
const bar = document.querySelector('.fill');
const h1 = document.querySelector('h1');
gsap.set('.percent', {
    xPercent: -5,
    yPercent: -5
  });


window.addEventListener('mousemove', (e)=> {
  gsap.to('.percent', {x: e.clientX, y: e.clientY})
})

addEventListener('scroll', (e)=> {

  const tl = gsap.timeline({
    default:{
      ease: 'power2'
    }
  })


  const { scrollTop, scrollHeight } = document.documentElement;
  const pourcentage = (scrollTop / (scrollHeight - window.innerHeight) ) * 100;


  let bgColor = pourcentage > 99 ? "#c00" : "#000";
  let txtColor = pourcentage > 99 ? "#c00" : "#fff";


  gsap.set(h1, {
    innerText: `${Math.round(pourcentage)}%`
  })

  tl
  .to(h1, {color:txtColor})
  .to(bar, {height:`${pourcentage}%`, backgroundColor: bgColor})
})

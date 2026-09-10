const header=document.getElementById("header");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
const backTop=document.getElementById("backTop");

menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>20);
  backTop.classList.toggle("show",window.scrollY>450);
});
backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const sections=document.querySelectorAll("main section[id]");
const links=document.querySelectorAll('.nav-links a[href^="#"]');
const navObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.remove("active"));
      const current=document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if(current) current.classList.add("active");
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>navObserver.observe(s));

const track=document.getElementById("galleryTrack");
document.getElementById("next").addEventListener("click",()=>track.scrollBy({left:280,behavior:"smooth"}));
document.getElementById("prev").addEventListener("click",()=>track.scrollBy({left:-280,behavior:"smooth"}));

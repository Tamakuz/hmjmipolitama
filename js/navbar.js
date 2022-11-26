window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop || document.documentElement.scrollTop > 130){
        document.getElementById('navbar').style.backgroundColor = 'white';
        document.getElementById('navbar').style.height = "60px";
        document.getElementById('navbar').style.boxShadow = '0px 1px 3px 0px rgba(0,0,0,0.75)';
        document.getElementById('navbar').style.transition = 'ease-in-out';
        document.getElementById('navbar').style.transitionDuration = '0.3s';
        document.getElementById('title-brand').style.color = 'black' ;
        document.getElementById('list-home').style.color = 'black';
        document.getElementById('list-about').style.color = 'black';
        document.getElementById('list-visi-misi').style.color = 'black';
        document.getElementById('list-anggota').style.color = 'black';
        document.getElementById('list-contact').style.color = 'black';
        document.querySelector('.humberger').style.color = 'black';
    } else {
        document.getElementById('navbar').style.backgroundColor = 'transparent';
        document.getElementById('navbar').style.boxShadow = 'none';
        document.getElementById('title-brand').style.color = 'white' ;
        document.getElementById('list-home').style.color = 'white';
        document.getElementById('list-about').style.color = 'white';
        document.getElementById('list-visi-misi').style.color = 'white';
        document.getElementById('list-anggota').style.color = 'white';
        document.getElementById('list-contact').style.color = 'white';
        document.querySelector('.humberger').style.color = 'white';
    }
}


const li = document.querySelectorAll('nav li');
const section = document.querySelectorAll('section');

li[0].classList.add('active');

function activeMenu() {
    
}

window.addEventListener('scroll', function() {
    let lenSection = section.length;
    const active = 'active';

    while (--lenSection && window.scrollY + 97 < section[lenSection].offsetTop);
    li.forEach(link => link.classList.remove(active));
    li[lenSection].classList.add(active);
});

window.removeEventListener('scroll', function () {
    let lenSection = section.length;
    const active = 'active';

    while (--lenSection && window.scrollY + 97 < section[lenSection].offsetTop);
    li.forEach(link => link.classList.remove(active));
    li[lenSection].classList.add(active);
});
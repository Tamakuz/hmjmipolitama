humberger = document.querySelector(".humberger");
menu = document.querySelector(".navbar ul");

humberger.onclick = function() {
    let active = menu.classList.toggle("active");
    if (active) {
        document.getElementById('list-home').style.color = 'black';
        document.getElementById('list-about').style.color = 'black';
        document.getElementById('list-visi-misi').style.color = 'black';
        document.getElementById('list-anggota').style.color = 'black';
        document.getElementById('list-contact').style.color = 'black';
        document.getElementById('navbar').style.backgroundColor = 'white';
        document.getElementById('navbar').style.height = "60px";
        document.getElementById('navbar').style.boxShadow = '0px 1px 3px 0px rgba(0,0,0,0.75)';
        document.getElementById('navbar').style.transition = 'ease-in-out';
        document.getElementById('navbar').style.transitionDuration = '.5s';
        document.getElementById('title-brand').style.color = 'black' ;
        humberger.style.color = 'black';
        window.onscroll = function() {
            if (document.body.scrollTop || document.documentElement.scrollTop > 0){
                document.getElementById('list-about').style.color = 'black';
                document.getElementById('list-visi-misi').style.color = 'black';
                document.getElementById('list-anggota').style.color = 'black';
                document.getElementById('list-contact').style.color = 'black';
                document.getElementById('navbar').style.backgroundColor = 'white';
                document.getElementById('navbar').style.height = "60px";
                document.getElementById('navbar').style.boxShadow = '0px 1px 3px 0px rgba(0,0,0,0.75)';
                document.getElementById('navbar').style.transition = 'ease-in-out';
                document.getElementById('navbar').style.transitionDuration = '0.3s';
            }
        };
    };
};




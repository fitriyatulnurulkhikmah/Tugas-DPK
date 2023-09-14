const judul = document.getElementById('judul');
judul.style.color='white';
judul.style.backgroundColor='black';
judul.style.textAlign='center';
judul.innerHTML='Fitriyatul';

const p = document.getElementsByTagName('p');
p[2].style.backgroundColor='lightblue';

for(let i=0;i<p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize='50px';

const p4 = document.getElementsByTagName ('p');
p4[3].style.backgroundColor ='pink';

//const sectionB = document.getElementById('p');
//const p4 = sectionB.querySelector('p');
//p4.style.backgroundColor = 'lightblue';
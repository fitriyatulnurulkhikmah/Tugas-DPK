let judul = document.querySelector("p");
judul.innerHTML = "My To Do List";
let list = document.getElementById("list");
list.innerHTML = `
    <div class="row">
<div class="col-8">
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
Tugas Baru
</label>
</div>
</div>
<div class="col-auto">
<div class="btn"><i class="bi bi-trash"></i></div>
</div>
</div >`;

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightgreen';
// judul.style.backgroundColor = 'salmon'; 

let container = document.querySelector('.container');
container.style.margin='135px auto';
container.style.maxWidht='550px';
container.style.background='#ffff';
container.style.borderRadius='7px';
container.style.padding='28px 0;'

document.body.style.backgroundImage = 'linear-gradient(to right, green, blue, red, yellow)';

document.querySelector('#input input').setAttribute('placeholder','Masukan Tugas Baru');
let show =  document.querySelectorAll('#check');
let show_2 =  document.querySelectorAll('#check-1');
let title = document.querySelectorAll("#title")

for (let i = 0; i < show.length; i++) {
    show[i].onclick = function () {
        title[i].style.height = '50px'
        show[i].style.display = 'none'
        show_2[i].style.display = 'block'
        show[i].classList.add('animate')
    }

    show_2[i].onclick = function () {
        title[i].style.height = '0px'
        show[i].style.display = 'block'
        show_2[i].classList.add('animate')
        show_2[i].style.display = 'none'
    }
}

let copy = document.querySelector('#copy');
let date = new Date().getFullYear();
copy.textContent = `Moaaz Tarek © ${date}`;
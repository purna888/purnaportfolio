// // togle and responsive application

// const navSlide = () =>{
//     const burger = document.querySelector(".burger");
//     const navLists = document.querySelector('nav');

//     burger.addEventListener("click", () => {
//         navLists.classList.toggle("nav-active")
//         burger.classList.toggle("toggle-burger")
//     })
// }
// navSlide();

// // clear form before unload
// window.onbeforeunload = () =>{
//     for (const form of document.getElementsByTagName("form")){
//         form.reset()
//     }
// }

// Mengambil elemen yang diperlukan
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Menambahkan event listener untuk klik pada burger
burger.addEventListener('click', () => {
    // Menambahkan atau menghapus kelas 'active' pada navLinks
    navLinks.classList.toggle('active');

    // Menambahkan atau menghapus kelas 'toggle' pada burger
    burger.classList.toggle('toggle');
});



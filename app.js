document.querySelector('.toggle').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.menu').addEventListener('click', function () {
        document.querySelector('.menu').classList.remove('active');
    })
});

function togglePopup(e) {
    document.querySelector('.popup').classList.toggle('hide');
    document.querySelector('body').classList.toggle('scroll-none');
}
document.querySelectorAll('.open-popup').forEach(e => {
    e.addEventListener('click', togglePopup);
});
document.querySelector('.btn-close').addEventListener('click', togglePopup);
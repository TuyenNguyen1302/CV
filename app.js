document.querySelector('.toggle i').addEventListener('click', function () {
    document.querySelector('.menu').classList.add('active');
    document.querySelector('.menu').addEventListener('click', function () {
        document.querySelector('.menu').classList.remove('active');
    })
});

document.querySelectorAll('.open-popup').forEach(project => {
    project.addEventListener('click', () => {
        let pro = project.getAttribute('data-project');
        document.querySelectorAll('.popup').forEach(popup => {
            let pop = popup.getAttribute('data-popup');
            if (pro == pop) {
                popup.classList.remove('hide');
                document.querySelector('body').classList.add('scroll-none');
            }

            document.querySelectorAll('.btn-close').forEach(close => {
                close.addEventListener('click', () => {
                    popup.classList.add('hide');
                    document.querySelector('body').classList.remove('scroll-none');
                })
            })
        })
    })
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.toggle').style.cssText = `background: #efcac3;`;
    } else {
        document.querySelector('.toggle').style.cssText = `background: transperant;`;
    }
}

document.querySelectorAll('.header a').forEach(e => {
    e.addEventListener('click', function () {
        document.querySelectorAll('.header a').forEach(e => {
            e.classList.remove('show');
        });
        this.classList.add('show');
    })
});
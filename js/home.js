document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#9E9E9E',
        lineColor: '#9E9E9E'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);

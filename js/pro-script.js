
window.addEventListener('load', function () {
    setTimeout(()=>{
        const el = document.getElementsByTagName("body")[0];
        el.style.opacity = "1";
    },100);
});


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
document.getElementById("background").style.background = 'radial-gradient(circle, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 85%, #' + params.theme + ' 100%) 50% 50% / cover no-repeat';

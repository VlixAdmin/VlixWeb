
window.addEventListener('load', function () {
    setTimeout(()=>{
        const el = document.getElementsByTagName("body")[0];
        el.style.opacity = "1";
    },100);
});


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params.bg; // "some_value"
console.log(value);
let ddd = document.getElementById("background");
console.log(ddd);
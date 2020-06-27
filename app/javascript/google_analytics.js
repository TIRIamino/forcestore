document.addEventListener('turbolinks:load', function(event) {
if (typeof gtag === 'function') {
gtag('config', GA=UA-105300836-8 , {
'page_location': event.data.url
});
}
});

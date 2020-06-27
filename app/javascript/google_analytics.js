document.addEventListener('turbolinks:load', function(event) {
if (typeof gtag === 'function') {
gtag('config', 'UA-105300836-8', {
'page_location': event.data.url
});
}
});

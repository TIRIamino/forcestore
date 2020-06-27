document.addEventListener('turbolinks:load', function(event) {
if (typeof gtag === 'function') {
gtag('config', GA , {
'page_location': event.data.url
});
}
});

var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');


convertBtn.addEventListener('click', () => {
    
    console.log('URL:' +URLinput.value);
    sendURL(URLinput.value);
});
function sendURL(URL) {
    window.location.href = 'http://146.230.145.7:4000/download?URL='+URL;
}
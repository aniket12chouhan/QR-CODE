
input = document.getElementById('enter')
img = document.getElementById('qrimg')


function qrcode() {
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    console.log(img);
}
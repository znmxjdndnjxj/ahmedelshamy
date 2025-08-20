function options() {
window.location.href=
  "https://m.facebook.com/ig/login_via/app/?lid=1Dt7EXioYT6PUieFY&bn=Y29tLmFuZHJvaWQuY2hyb21l&tade=Q7fLBQGNpkMMi3Oo20BVl61uvgaCtT2V0J5Smbo68gfVAOOKLlKaZ4OJNV6bXN1%2BDsqfQ9R1M22aQg93QTrTvk2GtcF9AiVAVJTfEzG9F7Smw60xi%2FjsrksxKkfCeri%2BFd5RS3MOJA%3D%3D";
}
function google() {
  window.location.href="https://www.google.com/?hl=ar"
}
function gmail() {
  window.location.href="https://mail.google.com/mail/mu/mp/701/"
}
function instgram() {
  window.location.href="https://www.instagram.com/accounts/login/?hl=ar"
}
function button() {
  let but=document.getElementById('button');
  but.addEventListener('click',function () {
  but.style.backgroundColor='red';
  })
}
function sign(){
window.location.href="https://7c641583-88e3-443e-a3a7-cc57e9f4474e-00-1v6gl2ovrk3cx.spock.replit.dev/"
}

let checkbo=document.getElementById('ridl');
checkbo.addEventListener("change",function(){
  

     if (checkbo.checked) {
      alert("✔️ وافقت على الشروط");
    } else {
      alert("❌ لغيت الموافقة");
}         
                        
});
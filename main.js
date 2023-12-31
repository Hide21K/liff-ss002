import './index.css';
import liff from '@line/liff'
require('dotenv').config();

liff.init({
  liffId: '1660949303-Nn8d6W5a', // Use own liffId
});

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.VITE_LIFF_ID })
    .then(() => {
        console.log("Success! you can do something with LIFF API here.")
    })
    .catch((error) => {
        console.log(error)
    })
});

//document.getElementById('send-button').addEventListener('click', function () {
  //var text01 = document.getElementById("text01").value;
  //var msg = text01;
  //sendM(msg);
  //document.getElementById("text01").value="bbb";
//});

document.getElementById("send-button").onclick = function() {
  document.getElementById("text01").value="bbb";
};


function sendM(msg){
  liff.sendMessages([
      {
          type:'text',
          text:msg
      }
  ])
  .then(() => {
      liff.closeWindow();
  })
  .catch((err) => {
      console.log('error', err);
  });
}
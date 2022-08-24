let array=["tahajud","[1:fajir]","ishraq",
"chashat","[2:zuhar]","salat-e-tasbhi",
"[3:asar]","[4:maghrib]","awabeen","[5:isha]",
"total:salah is 5"];

function arrayFuntion(){
let val=document.getElementById("pushval").value;
array.push(val);
arrayLop();


}
function pop(){
    array.pop();
    arrayLop();

}
function arrayLop(){
  document.getElementById("insertArea").innerHTML="";
  document.getElementById("pushval").value="";
  for (let index = 0; index < array.length; index++){

    let html = `<h1>${index+1}:${array[index]} </h1>`;
    document.getElementById("insertArea").innerHTML += html;
  }
}
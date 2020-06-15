//1.Soru
function araba(rengi,modeli,hizi)
{
  this.rengi=rengi;
  this.modeli=modeli;
  this.hizi=hizi;
}
araba.prototype.hızlan=function()
{
   console.log("arabanın hızı arttırılıyor.");
}
araba.prototype.yavasla=function()
{
   console.log("arabanın hızı yavaşlıyor.");
}

const araba1=new araba("Mavi","Renault","200");
const araba2=new araba("Beyaz","Ford","250");
console.log(araba1);
console.log(araba2);

//2.)
const Kamyon=Object.create(araba);
console.log(Kamyon);
//3.Soru
var kedi1=
{
    adi:"Tiger",
    renk:"Kahve",
    yas:0
};
// A.)
const kedi2=Object.create(kedi1);
console.log(kedi2);
// B.)
kedi1.prototype.yasi=0;
// C.)
function kedi(ad,renk)
{
   this.ad=ad;
   this.renk=renk;
}
//console.log(kedi("mavis","siyah"));
// D.)
const kedi3=Object.create(kedi);
console.log(kedi3);

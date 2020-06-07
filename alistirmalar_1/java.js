//1.soru
//a.)
const sor=(soru,evet,hayir) =>
{
    if(confirm(soru))
    {
        evet();
    }
    else
    {
        hayir();
    }
}
//b.)
let topla=(a,b) => a+b;
//c.)
const konus=(name,text) =>
{
    var konusan='konuşan';
    konusan+''+name+': '+text;
}
console.log("ahmet","merhaba");

//2.soru
const obje=
{
    ad:"Mustafa",
    soyad:"Lili",
    adı:"Ali",
    soyad:"Engin",
    adıı:"Mehmet",
    soyad:"Ocak"
};
let map=new Map();
console.log( map.get(obje.ad));
console.log( map.get(obje.adı));
console.log( map.get(obje.adıı));


//3.soru
//a.)
let options=
{
    title:"menü",
    widht:100,
    height:200
};

const {title,widht,height}=options;
//b.)
const {title}=options;
//c.)
const {title}=options;
const obje={...options};

//4.)
let veri=
{
    size:
    {
        widht:100,
        height:200,
    },
    meyve:["elma","armut"],
    varmi:true
};

let deger1,deger2;
[deger1,deger2]=veri.meyve;
console.log(deger1,deger2);

//5.soru
let maaslar=
{
    "ali":100,
    "ayşe":200,
    "ahmet":300,
    
}

//6.soru
let isimler= new Set(["ahmet","ali","ahmet","ayşe","ali","ahmet","veli","ayşe"]);
console.log(isimler);

//7.soru ve 8.soru

const mapp=new Map();
mapp.set(3,"html");
mapp.set(5,"css");
mapp.set(10,"js");
mapp.set(10,"nodejs");

for(let [key,value] of mapp)
{
    console.log(key,value);
}

const sets=new Set();
sets.add(3,"html");
sets.add(5,"css");
sets.add(10,"js");
sets.add(10,"nodejs");
console.log(sets);
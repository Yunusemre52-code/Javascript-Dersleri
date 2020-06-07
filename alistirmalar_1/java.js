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
const obje=[
    {
        ad:"ahmet",
        soyad:"lili"
    },
    {
        ad:"mehmet",
        soyad:"asci"
    },
    {
        ad:"elif",
        soyad:"gedek"
    }
];
let dizicagir=() =>
{
    let map=new Map();
    console.log( map.get(obje[0].ad));
    console.log( map.get(obje[1].ad));
    console.log( map.get(obje[2].ad));
}
dizicagir();



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
const {title,...spread}=options;
console.log(spread,title);


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
let enbuyuk=201;

    if(maaslar>enbuyuk)
    {
        console.log("en yuksek maaş: "+value);
    }
    else
    {
        
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
var isimSoyisim = "My name is Yusuf kranda what about you?"

document.write("Name&surname: " + isimSoyisim + "</br>")
document.write("length: " + isimSoyisim.length + "</br>") // karater sayisi
document.write("indexOf: " + isimSoyisim.indexOf('ad') + "</br>") // sirasini getirir yoksa -1 cevirir
document.write("indexOf: " + isimSoyisim.indexOf('adim') + "</br>")
document.write("lastIndexOf: " + isimSoyisim.lastIndexOf('ad') + "</br>") // sirasini getirir yoksa -1 cevirir
document.write("lastIndexOf: " + isimSoyisim.lastIndexOf('adim') + "</br>") // sirasini getirir yoksa -1 cevirir
document.write("search: " + isimSoyisim.search('ad') + "</br>") // sirasini getirir yoksa -1 cevirir
document.write("search: " + isimSoyisim.search('adim') + "</br>") // sirasini getirir yoksa -1 cevirir
document.write("slice: " + isimSoyisim.slice(5, 15) + "</br>") // araligi getirir
document.write("slice: " + isimSoyisim.slice(5) + "</br>")
document.write("substring: " + isimSoyisim.substring(5, 15) + "</br>") // araligi getirir
document.write("replace: " + isimSoyisim.replace('ad', "isim") + "</br>") // ilk karsilastigi degeri 2. deger ile degistirir 
document.write("toUpperCase: " + isimSoyisim.toUpperCase() + "</br>") // harfleri buyuk yap
document.write("toLowerCase: " + isimSoyisim.toLowerCase() + "</br>") // harfleri kucult
document.write("concat: " + isimSoyisim.concat(" my name is Yusuf") + "</br>") // birlestirme yapar
document.write("charAt: " + isimSoyisim.charAt(2) + "</br>") // siradaki karakteri alir
document.write("split: " + isimSoyisim.split(" ") + "</br>")


var sayi = 20;
var sayiString = sayi.toString() // yaziya cevirme
var sayiString1 = String(sayi); // yaziya cevirme


var fiyat = "10.49";
var fiyatNumber = parseInt(fiyat); // tam sayi
var fiyatNumber1 = parseFloat(fiyat); // ondalikli
var fiyatNumber2 = Number(fiyat); // tam ve ondalik


document.write("fiyatNumber: " + fiyatNumber + "</br>")
document.write("fiyatNumber1: " + fiyatNumber1 + "</br>")
document.write("fiyatNumber2: " + fiyatNumber2 + "</br>")

document.write("sayi: " + isNaN(sayi) + "</br>") // is not number = sayi degilse

var anlikFiyat = 23.496462;
document.write("anlikFiyat: " + anlikFiyat.toFixed(2) + "</br>") // noktadan sonra kac deger olacagini belirtir

document.write("false: " + Number(false) + "</br>") // false 0 dir aslinda
document.write("true: " + Number(true) + "</br>") // true 1 dir


document.write("PI: " + Math.PI + "</br>")

document.write("round: " + Math.round(anlikFiyat) + "</br>") // en yakina yuvarla
document.write("ceil: " + Math.ceil(anlikFiyat) + "</br>")// tavana yuvalar
document.write("floor: " + Math.floor(anlikFiyat) + "</br>") // alta yuvalar
document.write("sqrt: " + Math.sqrt(4) + "</br>") // karekoku
document.write("pow: " + Math.pow(2, 2) + "</br>") // us alma

document.write("min: " + Math.min(4, 2, 4, 5, -1, 10) + "</br>") //en kucugu bulur
document.write("max: " + Math.max(4, 2, 4, 5, -1, 10) + "</br>") // en buyugu bulur

document.write("random: " + Math.random() + "</br>") // rastgele deger uretir 0 ve 1 arasinda


var tarih = new Date() // Tarih

document.write("tarih: " + tarih + "</br>")
document.write("toUTCString: " + tarih.toUTCString() + "</br>")  // temel saat
document.write("toDateString: " + tarih.toDateString() + "</br>") // kisa format

document.write("getDate: " + tarih.getDate() + "</br>")  // ayin gunu
document.write("getDay: " + tarih.getDay() + "</br>") //haftanin gunu
document.write("getFullYear: " + tarih.getFullYear() + "</br>") // yili verir
document.write("getHours: " + tarih.getHours() + "</br>") // saati verir
document.write("getMilliseconds: " + tarih.getMilliseconds() + "</br>") // milisaniye
document.write("getMinutes: " + tarih.getMinutes() + "</br>") // dakika
document.write("getMonth: " + tarih.getMonth() + "</br>") // ay
document.write("getTime: " + tarih.getTime() + "</br>") // 1970 den gunume gecen milisaniye
tarih.setFullYear(2010) // set ile yili degistirdim cunku fullyear
document.write("tarih: " + tarih + "</br>")


var liste = ["apple", "pear", "grape", "banana", "kiwi"];
var liste1 = new Array(1, 3, 5, 5, 7, 1, 4, 7, 10, 60, 12)


document.write("liste: " + liste + "</br>")
document.write("liste0: " + liste[0] + "</br>")
liste[1] = "domates"
document.write("liste: " + liste + "</br>")
document.write("liste: " + liste.length + "</br>")
liste.push('armuttt') // sona ekler
document.write("liste: " + liste + "</br>")
liste.pop() // sondan cikartir
document.write("liste: " + liste + "</br>")
delete liste[1] // bosluk yapar
document.write("liste: " + liste + "</br>")
liste.shift() //bastan kaldirir
document.write("liste: " + liste + "</br>")
liste.unshift('elma') // basa ekler
document.write("liste: " + liste + "</br>")
document.write("liste: " + liste.toString() + "</br>")  // metin yapar
liste.splice(1, 0, "yeniMuz", "yeniKivi") // belirtilen araliga eleman ekler
document.write("liste: " + liste + "</br>")
liste.splice(2, 5) // belirtilen araligi siler
document.write("liste: " + liste + "</br>")
document.write("concat: " + liste.concat(liste1) + "</br>")  // ekleme yapar
document.write("slice: " + liste1.slice(2) + "</br>")  // belirtilen eleman ve devamini verir
document.write("slice: " + liste1.slice(2, 5) + "</br>")  // belirtilen araligi getirir

var liste2 = ["elma", "armut", "uzum", "muz", "kivi"];

document.write("sort: " + liste2.sort() + "</br>")  // siralar
document.write("reverse: " + liste2.reverse() + "</br>")  // ters cevirir
document.write("sort: " + liste1.sort(function (a, b) { return a - b }) + "</br>")  // her bir degeri karsilastirir ve siralar ozellikle sayilar icin


/*
var alacaklarListesi = [
    {ad: "apple", fee: 10},
    {ad: "pear", fee: 1},
    {ad: "grape", fee: 100},
    {ad: "banana", fee: 20},
    {ad: "pear", fee: 11},
    {ad: "tomato", fee: 101},
    {ad: "cucumber", fee: 110},
    {ad: "coke", fee: 9},
    {ad: "fanta", fee: 109}
]

 document.write("sort: " + alacaklarListesi.sort(function(a,b){ return a.fiyat - b.fiyat}) + "</br>") 
*/


switch (3) {
    case 0:
        document.write("bugun pazar" + "</br>")
        break
    case 1:
        document.write("bugun pazartesi" + "</br>")
        break
    case 2:
    case 3:
        document.write("bugun carsamba" + "</br>")
        break
    case 4:
        document.write("bugun persembe" + "</br>")
        break
    case 5:
        document.write("bugun cuma" + "</br>")
        break
    case 6:
        document.write("bugun cumartesi" + "</br>")
        break
    default:
        document.write("bugun gun degil" + "</br>")
        break
}


var liste3 = ["elma", "armut", "uzum", "muz", "kivi","siyahMuz","beyazUzum"];

for(i = 0; i<liste3.length; i++){
    if (i==2) continue
    if (i==4) break
    document.write("i degeri " + i + " elemani: " + liste3[i] + "</br>")
}

for (anahtar in liste3) {
    document.write("anahtar degeri " + anahtar + " elemani: " + liste3[anahtar] + "</br>")
}

var sayac = 0;
while(sayac<liste3.length){
    document.write("sayac degeri " + sayac + " elemani: " + liste3[sayac] + "</br>")
    sayac++;
}

var sayac1 = 0;
do{
    document.write("sayac1 degeri " + sayac1 + " elemani: " + liste3[sayac1] + "</br>")
    sayac1++;
}while(sayac1<liste3.length)

/* 
var mSayi = parseInt(Math.random() * 100)
var hak = 1;
var oSayi = prompt('tahmini gir!');
console.log(mSayi)
while(hak<4){
    if (oSayi == mSayi) {
        ozelp.innerHTML = "kazandiniz"
        break;
    } else{
        if(hak==3){
            ozelp.innerHTML = "kaybettiniz"
        } else {
            if (oSayi>mSayi) {
                oSayi = prompt("kucuk gir");
            } else {
                oSayi =  prompt("buyuk gir")
            }
        }
        hak++;
    }
}

Sayi Tahmin Oyunu
Bir kullanicinin 3 adet hakki hakki vardir, Eger bilirse ekrana bildiginiz 
ama eger bilmedi ve hakki var bu sefer kullanicin girdigi sayi ile oyuncunun
girdigi sayiyi karsilastiriyor sistem. Eger kullanicinin girdigi sayi daha 
buyuk ise ekrana "kucuk gir" ama daha buyuk ise "buyuk gir" yazan ve eger 
hakki biterse ekrana "kaybettiniz" yazan bir uygulama yapiniz.
*/

var bilgim = {
    ad:"can",
    yas: 10
}

var nereli = "isvec"

document.write("isimSoyisim " + typeof isimSoyisim + "</br>")
document.write("sayi " + typeof 20 + "</br>")
document.write("false " + typeof false + "</br>")
document.write("liste " + typeof liste + "</br>")
document.write("function " + typeof function(){} + "</br>")
document.write("bilgim " + typeof bilgim + "</br>")
document.write("tarih " + typeof tarih + "</br>")

nereli = "turkiye"; // 2023

document.write("isimSoyisim " +  isimSoyisim.constructor + "</br>")
document.write("sayi " +  (20).constructor + "</br>")
document.write("false " +  false.constructor + "</br>")
document.write("liste " +  liste.constructor + "</br>")
document.write("function " +  function(){}.constructor + "</br>")
document.write("bilgim " +  bilgim.constructor + "</br>")
document.write("tarih " +  tarih.constructor + "</br>")

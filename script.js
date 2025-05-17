// Notlar
const notes = [
  "İyi ki doğdun balım.",
  "Nice yıllarımız olsun SEVGİLİM.",
  "Gülüşün en güzel şarkım.",
  "Seninle her gün bir şiir.",
  "Kalbim seninle tamam.",
  "Seninle her şey daha güzel.",
  "Gözlerinle kayboldum.",
  "Senin varlığın huzur.",
  "Sen ol yeter.",
  "Her şey seninle anlamlı.",
  "Sevginle büyüyorum.",
  "Seninle geçen zaman cennet.",
  "İyi ki hayatımdasın.",
  "Kalbimin sahibi sensin.",
  "Sana her gün yeniden âşık oluyorum.",
  "Aşkınla yanıyorum.",
  "Seninle bir ömür isterim.",
  "Kalbimin ritmi sensin.",
  "Her sabah seninle başlasın.",
  "Sadece sen, daima sen.",
  "Gülüşün içimi ısıtıyor.",
  "Birlikte nice senelere.",
  "Sen benim mucizemsin.",
  "Seninle olmak ayrıcalık.",
  "Seni düşündükçe yüzüm gülüyor.",
  "Sensiz eksik hissediyorum.",
  "Sen benim her şeyimsin.",
  "Sonsuza kadar seninleyim.",
  "Aşkın en güzel hali sensin.",
  "Seninle tamamlandım.",
  "Varlığın bana yeter.",
  "Seninle geçen her dakika özel.",
  "İyi ki varsın.",
  "Birlikte gülmek en güzeli.",
  "Sen benim en değerlimsin.",
  "Sana sarılmak cennet gibi.",
  "Gözlerinle huzur buluyorum.",
  "Seninle hayallerim gerçek oluyor.",
  "Seninle geçen bir yıl bir ömre bedel.",
  "Sen benim bir tanemsin.",
  "Hayatımın anlamı sensin.",
  "Seninle büyüyorum.",
  "Seninle yaşlanmak istiyorum.",
  "Her şey seninle başlıyor.",
  "Seninle dünyaya meydan okurum.",
  "Senin gülüşün ömre bedel.",
  "Senin sesinle uyanmak isterim.",
  "Seni sevmenin tarifi yok.",
  "Seninle hayat daha güzel.",
  "Sen benim canımsın."
];

const magicNoteBtn = document.getElementById("magicNote");
const noteContent = document.getElementById("noteContent");

magicNoteBtn.addEventListener("click", () => {
  const randomNote = notes[Math.floor(Math.random() * notes.length)];
  noteContent.textContent = randomNote;
  noteContent.style.display = "block";
});

// Kalp mesajı
const heartBtn = document.getElementById("heartBtn");
const heartContent = document.getElementById("heartContent");

const loveMessage = `Bugün bizim için çok özel bir gün. Hem senin doğum günün hem de tam 1 yıldır hayatımda olduğun, birlikte yürüdüğümüz o güzel yolculuğun başlangıç yıldönümü. Sana nasıl teşekkür etsem, hangi kelimelerle sevgimi anlatsam bilmiyorum. Hayatıma girdiğin o ilk günden beri her şey daha renkli, daha anlamlı ve daha huzurlu. Senin gülüşünle sabahlarım aydınlanıyor, sesinle günüm güzelleşiyor. Varlığın bana güven veriyor, kalbime dokunduğun her an içimi sımsıcak bir sevgi sarıyor ❤.
Bazen sadece yanımda olman bile yetiyor iyi hissetmeme. Seninle geçirdiğim her dakika, her an, benim için bir ömre bedel. Birlikte güldük, birlikte sustuk, birlikte büyüdük. Seninle bir yıl geçmiş ama sanki bir ömür gibi dolu dolu, anlamlı ve gerçekti. Seninle nice senelere ulaşmak, hayalini kurduğumuz o geleceği adım adım inşa etmek istiyorum. Doğum günün kutlu olsun aşkım, iyi ki doğdun, iyi ki varsın, iyi ki benimlesin ❤. Seni her şeyden çok seviyorum.

Seninle geçirdiğim bu bir yıl, bana gerçek sevgiyi, sadakati ve huzuru öğretti. Her tartışmamızda bile daha çok bağlandım sana, her gülüşünde bir kez daha âşık oldum. Bana gösterdiğin sabır, verdiğin sevgi, kurduğun o güvenli alan için sonsuz teşekkür ederim. Seninle geçirdiğim zamanlarda kendimi daha çok tanıdım, seninle birlikte kendimi de sevmeyi öğrendim. Kalbimin en derin yerinde taşıyorum seni, öyle bir yer ki kimse dokunamaz, kimse silemez. Hayat bazen zor, bazen yorucu, ama sen yanımdayken her şey kolay geliyor 🍯. Omzuna yaslandığımda dünyanın tüm yükü hafifliyor, gözlerinin içine baktığımda geleceği görüyorum. Ve inan bana, seninle kurduğum hayallerin bir tanesinden bile vazgeçmeye hiç niyetim yok. Ne yaşarsak yaşayalım, ben hep senin yanında olacağım; elini tuttuğum ilk gün verdiğim sözü tutacağım: seni hep seveceğim, koruyacağım, destekleyeceğim ❤.

Sen sadece sevgilim değil, aynı zamanda en yakın dostum, sırdaşım, hayat ortağımsın. Birlikte öğrendik birbirimizi sevmeyi, anlamayı, sarılmayı. Senin gözlerindeki ışığı gördüğümde kendimi en doğru yerde hissediyorum. İyi ki seni tanımışım, iyi ki kalbimde sana yer açmışım. Bu yıl dönümümüz ve doğum günün, bizim için bir başlangıç sadece. Daha yaşayacak o kadar çok anımız, paylaşacak o kadar çok gülüşümüz var ki. Seninle her geçen gün biraz daha tamamlanıyorum. Seni çok seviyorum ve her geçen gün daha da çok seveceğim ❤.

Sen hayatıma sadece sevgi katmadın, beni ben yapan tüm parçaları onardın. Kırık yerlerimi fark ettin, tek tek sarıp sarmaladın. Geçmişte içimde biriktirdiğim kırgınlıkları, umutsuzlukları, yalnızlıkları birer birer yok ettin. Seninle birlikte içimdeki karanlığa ilk kez güneş doğdu. En kötü anlarımda yanımda oldun, sessizce sarıldın, bazen hiçbir şey demeden varlığını hissettirdin ve o bile yetti iyileşmeme. Sadece beni değil, ailemle olan bağımı da onardın. Belki farkında bile değildin ama senin sevgin, anlayışın ve sabrın sayesinde ailemle aram düzeldi, yeniden birbirimizi bulduk. Senin varlığın, hem kalbimi hem hayatımı toparladı. Seni tarif etmek zor çünkü sen sadece bir insan değilsin benim için, sen benim mucizemsin bebi 🍯. İyi ki geldin, iyi ki benim oldun. Her şeyinle, her halinle. seni deliler gibi seviyorum ❤.`;

heartBtn.addEventListener("click", () => {
  heartContent.textContent = loveMessage;
  heartContent.style.display = "block";
});

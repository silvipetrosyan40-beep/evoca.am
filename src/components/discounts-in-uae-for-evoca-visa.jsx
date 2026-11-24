import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function AdidasNews() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/all-news"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl transition-colors font-medium text-sm w-fit"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span>/</span>
            <Link to="/all-news" className="hover:text-gray-900 transition-colors">Նորություններ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Պրոդուկտներ</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">Շաաաաաատ զեղչեր ԱՄԷ-ում Evoca Visa քարտապանների համար




</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
             <Link 
  to="/news/products" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-fuchsia-500 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Պրոդուկտներ
  </span>
</Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
Շաաաաաատ զեղչեր ԱՄԷ-ում Evoca Visa քարտապանների համար
          </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Ուղևորվո՞ւմ ես ԱՄԷ։ Վերցրու քո Evoca Visa քարտը և ստացիր շատ զեղչեր հյուրանոցներում, ռեստորաններում, խանութներում ու ժամանցային վայրերում։

            </p>
            <div className="text-sm font-semibold text-gray-400">
15.04.2025
  </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17447167969525/780x585.png" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Եթե պլանավորում ես ճանապարհորդել ԱՄԷ, մենք քեզ համար լավ նորություն ունենք։
  </p>

  <p>
    <strong className="text-purple-700 font-bold">Evoca Visa քարտապանների</strong> համար գործում են մի շարք առաջարկներ՝ սկսած մեծ զեղչերից ամենալավ ռեստորաններում ու հյուրանոցներում, մինչև բացառիկ արտոնություններ ժամանցի վայրերում ու շոփինգի կենտրոններում[cite: 17]։
  </p>

  <p className="font-bold text-gray-900 pt-2">
    Նرկայացնում ենք ամենահետաքրքիր ու օգտակար առաջարկները․
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-2">
    Հյուրանոցներ
  </h3>

  <p className="font-medium text-gray-900">
    Վայելիր հանգիստդ լավագույն հյուրանոցներում՝ միաժամանակ օգտվելով լավագույն ռեստորաններից[cite: 17]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>
      <strong className="text-purple-700 font-bold">Kempinski Hotels & Resorts</strong> – 20% զեղչ հյուրանոցների ցանցում և ռեստորաններում[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Sheraton Mall of Emirates</strong> – ավելի բարձր՝ մինչև Deluxe դասի սենյակի անվճար տրամադրում, տրանսֆեր մինչև լողափ[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Aloft Dubai Greek</strong> – 20% զեղչ և ավելի բարձր՝ Savvy դասի սենյակի անվճար տրամադրում՝ ծովի տեսարանով[cite: 17]
    </li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Շոփինգ
  </h3>

  <p className="font-medium text-gray-900">
    Եթե շոփինգի սիրահար ես, անպայման կօգտվես այս առաջարկներից[cite: 17]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>
      <strong className="text-purple-700 font-bold">Nail THAT կամ THAT Barber</strong> – վճարիր 2,500 ԱՄԷ դիրհամ և ավելի Evoca Visa քարտով, գեղեցկության կամ խնամքի պրոցեդուրաների համար, ստացիր 30% զեղչ[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">AllSaints</strong> – վճարիր 1,000 ԱՄԷ դիրհամ և ավելի Evoca Visa քարտով, ստացիր 200 դիրհամ հաջորդ գնումների համար[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Psycho Bunny</strong> – վճարիր 1,000 ԱՄԷ դիրհամ և ավելի Evoca Visa քարտով, ստացիր 200 դիրհամ հաջորդ գնումների համար[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">LEGO Certified Stores</strong> – վճարիր 699 ԱՄԷ դիրհամ և ավելի Evoca Visa քարտով, ստացիր նվեր սահմանափակ թողարկումով LEGO էքսկլյուզիվ հավաքածու[cite: 17]
    </li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Կենսակերպ
  </h3>

  <p className="font-medium text-gray-900">
    Թարմացրու ինտերիերդ նորաձև, հարմարավետ և ժամանակակից իրերով[cite: 17]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>
      <strong className="text-purple-700 font-bold">CB2</strong> – վճարիր 1,500 ԱՄԷ դիրհամ և ավելի Evoca Visa քարտով, խնայիր 300 դիրհամ[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Crate & Barrel</strong> – վճարիր 5,000 ԱՄԷ դիրհամ և ավելի Evoca Visa քարտով, խնայիր 1,000 դիրհամ[cite: 17]
    </li>
  </ul>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    Զվարճանք
  </h3>

  <p className="font-medium text-gray-900">
    Բացահայտիր ամենահետաքրքիր վայրերը, վճարիր Evoca Visa քարտով և ստացիր զեղչեր[cite: 17]
  </p>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>
      <strong className="text-purple-700 font-bold">Ski Dubai</strong> – վայելիր ձնային աշխարհը 18% զեղչով[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Snow Abu Dhabi</strong> – փակ դահուկային սպորտ 30% զեղչով[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Activate</strong> – այցելիր աշխարհում առաջին դինամիկ խաղային համալիր 16% զեղչով[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Magic Planet</strong> – 20% լրացուցիչ միավոր զվարճանքի կենտրոնի փաթեթների համար[cite: 17]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">iFly Dubai</strong> – 40% զեղչ սքայդայվինգի համար[cite: 18]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Dubai Aquarium (Dubai Mall)</strong> – վայելիր ստորջրյա աշխարհը. 30% զեղչ տոմսերի համար և 15% զեղչ սննդի, խմիչքի և հուշանվերների համար[cite: 18]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">Sky Views Observatory (Dubai Mall)</strong> – 30% զեղչ տոմսերի համար և 15% զեղչ սննդի համար[cite: 18]
    </li>
    <li>
      <strong className="text-purple-700 font-bold">KidZania Dubai (Dubai Mall)</strong> – 30% զեղչ տոմսերի համար և 15% զեղչ սննդի և խմիչքի համար[cite: 18]
    </li>
  </ul>

  <p className="pt-2">
    Առաջարկները հասանելի են <strong className="text-purple-700 font-bold">բոլոր Evoca Visa քարտապանների համար</strong> մինչև <strong className="text-purple-700 font-bold">հունիսի 30-ը</strong> և գործում են միայն հատուկ պայմաններով[cite: 18]:
  </p>

  <p>
    Առաջարկի մանրամասները կարող եք տեսնել <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">այստեղ</a>[cite: 18]:
  </p>

  <p>
    Հաջորդ անգամ ԱՄԷ մեկնելիս մի մոռացիր քո <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">Evoca Visa քարտը</a>, որպեսզի ճամփորդությունը լինի ոչ միայն հարմար, այլ նաև շահավետ[cite: 18]:
  </p>

  <p>
    Իսկ եթե դեռ չունես <a href="#" className="text-purple-700 font-bold underline hover:text-purple-900 transition-colors">Evoca Visa քարտ</a>, շտապիր ծանոթանալ և պատվիրել քո նախընտրած քարտը հենց հիմա[cite: 18]:
  </p>
</article>
      {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901528701371/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">23.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/back-to-school-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17873217684586/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.08.2026</span>
              </div>
            </Link>

          </div>
        </div>
      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}
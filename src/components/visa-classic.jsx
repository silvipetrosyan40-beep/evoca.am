import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from './header';
import Footer from './footer';

export default function VisaClassic() {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  // Արժույթների բլոկի ակտիվ թաբը (AMD, USD, EUR, RUB)
  const [activeCurrency, setActiveCurrency] = useState('AMD');

  // Ներքին էջի տաբը՝ «Քարտի մասին» թե «Սակագներ և դրույթներ»
  const [activeTab, setActiveTab] = useState('about');

  // Այլ քարտերի ցանկը (օրինակ)
   const cards = [
    { id: 1, title: "Arca Union Pay Co-badge", img: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png", path: "/cards/arca-union-pay" },
    { id: 2, title: "Evoca Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png", path: "/cards/gift-card" },
    { id: 3, title: "Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png", path: "/cards/visa-infinite" },
    { id: 4, title: "Mastercard World Digital", img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png", path: "/cards/mastercard-world-digital" },
    { id: 5, title: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", path: "/card" },
    { id: 6, title: "Visa Classic", img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png", path: "/cards/visa-classic" },
    { id: 7, title: "Mastercard Standard", img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png", path: "/cards/mastercard-standard" },
    { id: 8, title: "Visa Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png", path: "/cards/visa-gold" },
    { id: 9, title: "Mastercard Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png", path: "/cards/mastercard-gold" },
    { id: 10, title: "MyLer Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png", path: "/cards/myler-gift-card" },
    { id: 11, title: "4U.am Gift card", img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png", path: "/cards/4u-gift" },
    { id: 12, title: "ArCa Classic", img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png", path: "/cards/arca-classic" },
    { id: 13, title: "Wilco Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png", path: "/cards/wilco-visa-infinite" },
    { id: 14, title: "Evoca Visa Platinum", img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png", path: "/cards/visa-platinum-card" },
    { id: 15, title: "Visa Digital", img: "	https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png", path: "/cards/visa-digital-card" },
    { id: 16, title: "Rio Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png", path: "/cards/rio-gift-card-tariffs" },
    { id: 17, title: "Dalma Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png", path: "/cards/dalma-gift-card" },
    { id: 18, title: "UnionPay Gold", img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png", path: "/cards/unionpay-gold" },
    { id: 19, title: "UnionPay Business Platinum", img: "	https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png", path: "/cards/unionpay-platinum" },
   { id: 20, title: "Visa Business", img: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png", path: "/cards/visa-business-card" },
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Գլխավոր Հեդեր */}
      <Header />

      {/* Վերևի բարակ ենթամենյուի գիծը՝ Մանուշակագույն ֆոնով */}
      <div className="w-full bg-[#5b06be] text-white px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex space-x-6 overflow-x-auto text-sm font-medium">
          <span className="bg-[#430290] text-white px-3 py-1 rounded-md cursor-pointer">Քարտեր</span>
          <span className="hover:opacity-80 py-1 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
          <span className="hover:opacity-80 py-1 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
          <span className="hover:opacity-80 py-1 cursor-pointer">Evoca Benefits</span>
        </div>
      </div>

      {/* Տակի հերո բլոկը՝ Բաց մոխրագույն ֆոնով (light gray) */}
      <div className="w-full bg-[#f4f4f5] py-12 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-xl mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">Visa Classic</h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:
            </p>
          </div>
          <div className="w-full max-w-md">
            {/* Քարտի նկարը */}
            <img 
              src="https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png" 
              alt="Visa Classic" 
              className="w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Հիմնական բովանդակություն (Տեքստ/Աղյուսակ + Սակագների աջ բլոկ) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col lg:flex-row gap-12 w-full">
        {/* Ձախ կողմի բովանդակություն (ներառյալ «Քարտի մասին» և «Սակագներ և դրույթներ» տաբերը) */}
        <div className="flex-1 space-y-6">
          {/* Ներքին տաբեր՝ Քարտի մասին / Սակագներ և դրույթներ */}
          <div className="flex space-x-8 border-b border-gray-200 pb-3 mb-6">
            <button
              onClick={() => setActiveTab('about')}
              className={`font-semibold text-base sm:text-lg pb-1 relative cursor-pointer transition-colors ${
                activeTab === 'about' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Քարտի մասին
              {activeTab === 'about' && (
                <span className="absolute bottom-[-13px] left-0 w-full h-[3px] bg-[#5b06be] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`font-semibold text-base sm:text-lg pb-1 relative cursor-pointer transition-colors ${
                activeTab === 'terms' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Սակագներ և դրույթներ
              {activeTab === 'terms' && (
                <span className="absolute bottom-[-13px] left-0 w-full h-[3px] bg-[#5b06be] rounded-full"></span>
              )}
            </button>
          </div>

          {/* Պայմանական ռենդեր ըստ տաբերի */}
          {activeTab === 'about' ? (
            <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-gray-900 font-bold">Evoca Visa Classic</strong> քարտն օժտված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով։ Այն միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտ է, որի շնորհիվ սպասարկման կետերում քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում։ Սա նվազեցնում է քարտի հնարավոր կեղծման ռիսկը՝ ցանկացած վճարում դարձնելով պարզ, արագ և հեշտ: Պարզապես մոտեցրու քարտը հատուկ վճարային տերմինալներին, և գործարքը կհաստատվի հաշված վայրկյանների ընթացքում։
              </p>
              <p>
                Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։ Դու կկարողանաս բանկոմատի միջոցով Evoca Visa Classic քարտից գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Visa տարբերանշանը։
              </p>
              <p>
                Քարտը կարող ես պատվիրել և ստանալ առանց բանկ այցելելու։ EvocaTOUCH հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել այն՝ նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը։ Կարևորելով մեր հաճախորդների ժամանակը՝ առաքման անվճար ծառայության միջոցով Հայաստանի ցանկացած կետում կտրամադրենք քո Evoca Visa Classic քարտը։
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Վճարային քարտեր</h2>
              <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                      <th className="p-4 font-semibold">Մատուցվող ծառայություններ</th>
                      <th className="p-4 font-semibold">MasterCard Standard / Visa Classic</th>
                      <th className="p-4 font-semibold">MasterCard Gold / Visa Gold</th>
                      <th className="p-4 font-semibold">Visa Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտի տրամադրում</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտի սպասարկում (Տարեկան)</td>
                      <td className="p-4">5,000 ՀՀ դրամ</td>
                      <td className="p-4">15,000 ՀՀ դրամ</td>
                      <td className="p-4">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտի սպասարկում (Ամսական)</td>
                      <td className="p-4">
                        MasterCard Standard՝ 500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 cursor-pointer underline">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-4">
                        MasterCard Gold՝ 1,500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 cursor-pointer underline">Բանկի մասնաճյուղերում</span>)
                      </td>
                      <td className="p-4">-</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Շտապ թողարկում</td>
                      <td className="p-4">10,000 ՀՀ դրամ</td>
                      <td className="p-4">10,000 ՀՀ դրամ</td>
                      <td className="p-4">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">
                        24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար / Visa Business քարտի դեպքում օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան սպասարկում
                      </td>
                      <td className="p-4">15,000 ՀՀ դրամ</td>
                      <td className="p-4">45,000 ՀՀ դրամ</td>
                      <td className="p-4">30,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Կից քարտի տրամադրում</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Կից քարտի տարեկան սպասարկում</td>
                      <td className="p-4">3,000 ՀՀ դրամ</td>
                      <td className="p-4">10,000 ՀՀ դրամ</td>
                      <td className="p-4">7,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտային հաշվի չվճարվող մնացորդ</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="p-4 font-bold text-gray-900">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">մինչև 5 մլն. ՀՀ դրամ</td>
                      <td className="p-4">0%</td>
                      <td className="p-4">0%</td>
                      <td className="p-4">0%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">5 մլն. ՀՀ դրամ և ավել</td>
                      <td className="p-4">1%</td>
                      <td className="p-4">1%</td>
                      <td className="p-4">1%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">արտարժույթ</td>
                      <td className="p-4">0%</td>
                      <td className="p-4">0%</td>
                      <td className="p-4">0%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">ԱՄՆ դոլար և եվրո</td>
                      <td className="p-4">0.5%</td>
                      <td className="p-4">-</td>
                      <td className="p-4">0.5%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Այլ արտարժույթ</td>
                      <td className="p-4">0.3%</td>
                      <td className="p-4">-</td>
                      <td className="p-4">0.3%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով (ՀՀ դրամ)</td>
                      <td className="p-4">
                        Ամսական մինչև 1,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար,<br/>
                        1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2%,<br/>
                        POS տերմինալով՝ 0.2%
                      </td>
                      <td className="p-4">
                        MasterCard Gold՝ Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար,<br/>
                        2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2%,<br/>
                        POS տերմինալով՝ 0.2%<br/>
                        Visa Gold՝ 0.2%
                      </td>
                      <td className="p-4">0.2%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտերով կանխիկի տրամադրում «Արփա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
                      <td className="p-4">0.8%</td>
                      <td className="p-4">0.8%</td>
                      <td className="p-4">0.8%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «Արփա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
                      <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                      <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտի գործողության կասեցում</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտի վերաթողարկում կորուստի, վնասելու կամ PIN ծածկագրի կորուստի դեպքում</td>
                      <td className="p-4">3,000 ՀՀ դրամ</td>
                      <td className="p-4">10,000 ՀՀ դրամ</td>
                      <td className="p-4">5,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">PIN ծածկագրի գեներացման հայտ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                      <td className="p-4">0</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Կանխիկի մուտքագրում «Արփա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)</td>
                      <td className="p-4">0.6%</td>
                      <td className="p-4">0.6%</td>
                      <td className="p-4">0.6%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                      <td className="p-4">
                        Մինչև 5,000 ՀՀ դրամ գործարքներ՝ 20 ՀՀ դրամ,<br/>
                        5,000 ՀՀ դրամը գերազանցող գործարքներ՝ 0
                      </td>
                      <td className="p-4">20 ՀՀ դրամ (մինչև 5,000 AMD) / 0 (ավելին)</td>
                      <td className="p-4">20 ՀՀ դրամ (մինչև 5,000 AMD) / 0 (ավելին)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Գերածախսի գծով տույժեր</td>
                      <td className="p-4">20% տարեկան</td>
                      <td className="p-4">20% տարեկան</td>
                      <td className="p-4">20% տարեկան</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td colSpan="4" className="p-4 font-bold text-gray-900">Քարտից քարտ փոխանցումներ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Բանկոմատների միջոցով՝ Բանկի վճարային քարտին</td>
                      <td className="p-4">0.3%</td>
                      <td className="p-4">0.3%</td>
                      <td className="p-4">0.3%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">«Արփա» համակարգի անդամ հանդիսացող այլ բանկերի և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին</td>
                      <td className="p-4">0.5%</td>
                      <td className="p-4">0.5%</td>
                      <td className="p-4">0.5%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
                      <td className="p-4">
                        Նույն արժույթով քարտին՝ 0%,<br/>
                        Տարբեր արժույթով քարտերին՝ 0.3%
                      </td>
                      <td className="p-4">0% (նույնը) / 0.3% (տարբեր)</td>
                      <td className="p-4">0% (նույնը) / 0.3% (տարբեր)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «Արփա» համակարգի անդամ հանդիսացող այլ բանկերի և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին</td>
                      <td className="p-4">0.5%</td>
                      <td className="p-4">0.5%</td>
                      <td className="p-4">0.5%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար</td>
                      <td className="p-4">2,000 ՀՀ դրամ</td>
                      <td className="p-4">2,000 ՀՀ դրամ</td>
                      <td className="p-4">2,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
                      <td className="p-4">1,000,000 ՀՀ դրամ</td>
                      <td className="p-4">2,000,000 ՀՀ դրամ</td>
                      <td className="p-4">1,000,000 ՀՀ դրամ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {activeTab === 'about' ? (
            <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-gray-900 font-bold">Evoca Visa Classic</strong> քարտն օժտված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով։ Այն միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտ է, որի շնորհիվ սպասարկման կետերում քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում։ Սա նվազեցնում է քարտի հնարավոր կեղծման ռիսկը՝ ցանկացած վճարում դարձնելով պարզ, արագ և հեշտ: Պարզապես մոտեցրու քարտը հատուկ վճարային տերմինալներին, և գործարքը կհաստատվի հաշված վայրկյանների ընթացքում։
              </p>
              <p>
                Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։ Դու կկարողանաս բանկոմատի միջոցով Evoca Visa Classic քարտից գումար կանխիկացնել և անկանխիկ վճարումներ կատարել աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Visa տարբերանշանը։
              </p>
              <p>
                Քարտը կարող ես պատվիրել և ստանալ առանց բանկ այցելելու։ EvocaTOUCH հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել այն՝ նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը։ Կարևորելով մեր հաճախորդների ժամանակը՝ առաքման անվճար ծառայության միջոցով Հայաստանի ցանկացած կետում կտրամադրենք քո Evoca Visa Classic քարտը։
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Վճարային քարտեր</h2>
                <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                        <th className="p-4 font-semibold">Մատուցվող ծառայություններ</th>
                        <th className="p-4 font-semibold">MasterCard Standard / Visa Classic</th>
                        <th className="p-4 font-semibold">MasterCard Gold / Visa Gold</th>
                        <th className="p-4 font-semibold">Visa Business</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի տրամադրում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի սպասարկում (Տարեկան)</td>
                        <td className="p-4">5,000 ՀՀ դրամ</td>
                        <td className="p-4">15,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի սպասարկում (Ամսական)</td>
                        <td className="p-4">
                          MasterCard Standard՝ 500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 cursor-pointer underline">Բանկի մասնաճյուղերում</span>)
                        </td>
                        <td className="p-4">
                          MasterCard Gold՝ 1,500 ՀՀ դրամ (Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <span className="text-purple-700 cursor-pointer underline">Բանկի մասնաճյուղերում</span>)
                        </td>
                        <td className="p-4">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Շտապ թողարկում</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">
                          24.02.2022թ.-ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար / Visa Business քարտի դեպքում օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան սպասարկում
                        </td>
                        <td className="p-4">15,000 ՀՀ դրամ</td>
                        <td className="p-4">45,000 ՀՀ դրամ</td>
                        <td className="p-4">30,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Կից քարտի տրամադրում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Կից քարտի տարեկան սպասարկում</td>
                        <td className="p-4">3,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">7,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտային հաշվի չվճարվող մնացորդ</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td colSpan="4" className="p-4 font-bold text-gray-900">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">մինչև 5 մլն. ՀՀ դրամ</td>
                        <td className="p-4">0%</td>
                        <td className="p-4">0%</td>
                        <td className="p-4">0%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">5 մլն. ՀՀ դրամ և ավել</td>
                        <td className="p-4">1%</td>
                        <td className="p-4">1%</td>
                        <td className="p-4">1%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">արտարժույթ</td>
                        <td className="p-4">0%</td>
                        <td className="p-4">0%</td>
                        <td className="p-4">0%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">ԱՄՆ դոլար և եվրո</td>
                        <td className="p-4">0.5%</td>
                        <td className="p-4">-</td>
                        <td className="p-4">0.5%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Այլ արտարժույթ</td>
                        <td className="p-4">0.3%</td>
                        <td className="p-4">-</td>
                        <td className="p-4">0.3%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով (ՀՀ դրամ)</td>
                        <td className="p-4">
                          Ամսական մինչև 1,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար,<br/>
                          1,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2%,<br/>
                          POS տերմինալով՝ 0.2%
                        </td>
                        <td className="p-4">
                          MasterCard Gold՝ Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար,<br/>
                          2,000,000 ՀՀ դրամը գերազանցող մասի նկատմամբ՝ 0.2%,<br/>
                          POS տերմինալով՝ 0.2%<br/>
                          Visa Gold՝ 0.2%
                        </td>
                        <td className="p-4">0.2%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտերով կանխիկի տրամադրում «Արփա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
                        <td className="p-4">0.8%</td>
                        <td className="p-4">0.8%</td>
                        <td className="p-4">0.8%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի և «Արփա» համակարգի անդամ չհանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով</td>
                        <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                        <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                        <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի գործողության կասեցում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի վերաթողարկում կորուստի, վնասելու կամ PIN ծածկագրի կորուստի դեպքում</td>
                        <td className="p-4">3,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">5,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">PIN ծածկագրի գեներացման հայտ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Կանխիկի մուտքագրում «Արփա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)</td>
                        <td className="p-4">0.6%</td>
                        <td className="p-4">0.6%</td>
                        <td className="p-4">0.6%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td>
                        <td className="p-4">
                          Մինչև 5,000 ՀՀ դրամ գործարքներ՝ 20 ՀՀ դրամ,<br/>
                          5,000 ՀՀ դրամը գերազանցող գործարքներ՝ 0
                        </td>
                        <td className="p-4">20 ՀՀ դրամ (մինչև 5,000 AMD) / 0 (ավելին)</td>
                        <td className="p-4">20 ՀՀ դրամ (մինչև 5,000 AMD) / 0 (ավելին)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Գերածախսի գծով տույժեր</td>
                        <td className="p-4">20% տարեկան</td>
                        <td className="p-4">20% տարեկան</td>
                        <td className="p-4">20% տարեկան</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td colSpan="4" className="p-4 font-bold text-gray-900">Քարտից քարտ փոխանցումներ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Բանկոմատների միջոցով՝ Բանկի վճարային քարտին</td>
                        <td className="p-4">0.3%</td>
                        <td className="p-4">0.3%</td>
                        <td className="p-4">0.3%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">«Արփա» համակարգի անդամ հանդիսացող այլ բանկերի և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին</td>
                        <td className="p-4">0.5%</td>
                        <td className="p-4">0.5%</td>
                        <td className="p-4">0.5%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում</td>
                        <td className="p-4">
                          Նույն արժույթով քարտին՝ 0%,<br/>
                          Տարբեր արժույթով քարտերին՝ 0.3%
                        </td>
                        <td className="p-4">0% (նույնը) / 0.3% (տարբեր)</td>
                        <td className="p-4">0% (նույնը) / 0.3% (տարբեր)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «Արփա» համակարգի անդամ հանդիսացող այլ բանկերի և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին</td>
                        <td className="p-4">0.5%</td>
                        <td className="p-4">0.5%</td>
                        <td className="p-4">0.5%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Վարկային սահմանաչափի տրամադրման հայտի ուսումնասիրման միջնորդավճար</td>
                        <td className="p-4">2,000 ՀՀ դրամ</td>
                        <td className="p-4">2,000 ՀՀ դրամ</td>
                        <td className="p-4">2,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Գործող վարկային սահմանաչափի ավելացման հայտի ուսումնասիրման միջնորդավճար</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Կանխիկի տրամադրման առավելագույն սահմանաչափ</td>
                        <td className="p-4">1,000,000 ՀՀ դրամ</td>
                        <td className="p-4">2,000,000 ՀՀ դրամ</td>
                        <td className="p-4">1,000,000 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Նոր ավելացված բաժիններ՝ ըստ նկարների */}
              <div className="space-y-6">
                {/* Բանկի վիրտուալ տերմինալների միջոցով տեղական՝ լոկալ, քարտից-քարտ փոխանցումներ */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Բանկի վիրտուալ տերմինալների միջոցով տեղական՝ լոկալ, քարտից-քարտ (card-to card) փոխանցումների սպասարկման միջնորդավճար
                  </h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                          <th className="p-4 font-semibold">Բանկի տերմինալների միջոցով</th>
                          <th className="p-4 font-semibold">Պայմաններ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Բանկի կողմից թողարկված քարտերով իրականացվող գործարքներ</td>
                          <td className="p-4">0</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Արփա անդամ և H2H միացումով Արփա պրոցեսինգային կենտրոնի հետ աշխատող բանկերի կողմից թողարկված քարտերով</td>
                          <td className="p-4">0.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Visa Direct & Money Send */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Բանկի վիրտուալ տերմինալների միջոցով Visa Direct և Money Send ծառայության սպասարկման միջնորդավճար
                  </h3>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Բանկի Arca, Visa և Mastercard քարտերից փոխանցման սակագին</p>
                  <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                          <th className="p-4 font-semibold">Visa Direct</th>
                          <th className="p-4 font-semibold">Mastercard Money Send</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr>
                          <td className="p-4">
                            1.0 % (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to card միջնորդավճար նվազագույնը 1,000 ՀՀ դրամ
                          </td>
                          <td className="p-4">
                            1.0% (սպասարկման միջնորդավճար) + Բանկի տվյալ քարտի համար գործող card-to card միջնորդավճար նվազագույնը 1,000 ՀՀ դրամ
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Սահմանաչափեր */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Քարտից մեկ օրվա ընթացքում իրականացվող գործարքների սահմանաչափ և գործարքների քանակ
                  </h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                    <table className="w-full text-left border-collapse text-sm">
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr>
                          <td className="p-4 font-medium text-gray-900 w-1/2">Մեկ գործարքի առավելագույն սահմանաչափ</td>
                          <td className="p-4 w-1/2">
                            250,000 ՀՀ դրամ<br/>
                            500 ԱՄՆ դոլար<br/>
                            400 Եվրո<br/>
                            6,000 Ռուբլի
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Մեկ հաճախորդի՝ տվյալ վճարային համակարգով գործարքների քանակի առավելագույն օրական սահմանաչափ</td>
                          <td className="p-4">5</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Մեկ հաճախորդի՝ տվյալ վճարային համակարգով գործարքների ծավալի օրական առավելագույն սահմանաչափ</td>
                          <td className="p-4">
                            1,000,000 ՀՀ դրամ<br/>
                            2,000 ԱՄՆ դոլար<br/>
                            1,600 Եվրո<br/>
                            26,000 Ռուբլի
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Այլ բանկերի կողմից թողարկված վճարային քարտերի սակագներ */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Այլ բանկերի կողմից թողարկված վճարային քարտերի սակագներ (բացառությամբ MIR համակարգի քարտերի)
                  </h3>
                  <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                          <th className="p-4 font-semibold">Մատուցվող ծառայություններ</th>
                          <th className="p-4 font-semibold">Արփա համակարգի անդամ չհանդիսացող, H2H կապուղով Արփա համակարգի հետ չաշխատող բանկերի կողմից թողարկված քարտերով (բացառությամբ MIR համակարգի քարտերի) կանխիկացում</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Բանկի բանկոմատներից կանխիկացում</td>
                          <td className="p-4">1.5 % min 1,000 ՀՀ սպասարկման միջնորդավճար</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-gray-900">Բանկի POS-տերմինալներից կանխիկացում</td>
                          <td className="p-4">3 %, min 2,000 ՀՀ դրամ սպասարկման միջնորդավճար</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-xs text-gray-600 leading-relaxed">
  <p>
    <sup className="font-semibold text-purple-700">[1]</sup> MasterCard Standard, Visa Classic, MasterCard Gold, Visa Gold և VISA Infinite տեսակի վճարային քարտերը տրամադրվում են ֆիզիկական անձանց, իսկ Visa Business տեսակի վճարային քարտերը՝ իրավաբանական անձանց:
  </p>
  <p>
    Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ վճարային քարտերի քարտային հաշիվներով (առանց վճարային քարտի առկայության) իրականացվող ցանկացած գործարքի համար գործում է սույն գլխով սահմանված՝ վճարային քարտերի համար սահմանված սակագները (Սակագինը կիրառվում է միայն 01/06/2018թ.-ից ներառյալ տրամադրվող վճարային քարտերի համար):
  </p>
  <p>
    Աշխատավարձային վճարային քարտերի տրամադրման և սպասարկման սակագները սահմանվում են քարտապանի գործատուի հետ կնքված պայմանագրով: Բանկի վարչության որոշմամբ կարող են սահմանվել վճարային քարտերի տրամադրման այլ պայմաններ և սակագներ:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[2]</sup> Visa Gold քարտերի թողարկումը դադարեցվել է 25.11.2024թ.-ից:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[3]</sup> Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[4]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[5]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1 %:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[6]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5 %:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[7]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5 % min 2,500 ՀՀ դրամ:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[8]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[9]</sup> Սակագինը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[10]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1%:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[11]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվերդրաֆտի) առկայությամբ քարտերի համար 1.5%:
  </p>
  <p>
    <sup className="font-semibold text-purple-700">[12]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:
  </p>
</div>
            </div>
          )}
            </div>
          )}
        </div>

        {/* Աջ կողմի սակագների բլոկ */}
        <div className="w-full lg:w-[480px] bg-white rounded-2xl border border-gray-100 shadow-lg p-6 h-fit">
          <div className="flex space-x-2 mb-6 border-b pb-4">
            {['AMD', 'USD', 'EUR', 'RUB'].map((cur) => (
              <button
                key={cur}
                onClick={() => setActiveCurrency(cur)}
                className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-all ${
                  activeCurrency === cur ? 'bg-[#5b06be] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cur === 'AMD' ? '֏' : cur === 'USD' ? '$' : cur === 'EUR' ? '€' : '₽'}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100 text-sm">
              <span className="text-gray-900 font-semibold text-lg">0.2%</span>
              <span className="text-gray-600 text-right">Կանխիկացում բանկի կանխիկացման կետերում</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100 text-sm">
              <span className="text-gray-900 font-semibold text-lg">0.8%</span>
              <span className="text-gray-600 text-right">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100 text-sm">
              <div>
                <span className="text-xs text-purple-600 block">min 1,500 ֏</span>
                <span className="text-gray-900 font-semibold text-lg">1%</span>
              </div>
              <span className="text-gray-600 text-right">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100 text-sm">
              <span className="text-gray-900 font-semibold text-lg">5,000 ֏</span>
              <span className="text-gray-600 text-right">Տարեկան սպասարկում</span>
            </div>
            <div className="flex justify-between items-center py-3 text-sm">
              <span className="text-gray-900 font-semibold text-lg">15,000 ֏</span>
              <span className="text-gray-600 text-right">Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար</span>
            </div>
          </div>
        </div>
      </div>

      {/* Վերադարձման կոճակ և նավիգացիա */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all font-medium text-sm shadow-sm cursor-pointer"
        >
          <span>←</span>
          <span>Վերադառնալ</span>
        </button>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-gray-800">🏠</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-800">Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-800">Քարտեր</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-800">Քարտեր</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-800">Visa</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Visa Classic</span>
        </div>
      </div>

      {/* Ներկառուցված Սլայդեր (Այլ քարտեր) */}
      <div className="w-full bg-gray-50 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="relative">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
                Այլ քարտեր
              </h2>
              
              <div className="flex space-x-2">
                <button 
                  ref={prevRef} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❮
                </button>
                <button 
                  ref={nextRef} 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-purple-700 hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
                >
                  ❯
                </button>
              </div>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="pb-4"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div 
                    onClick={() => navigate(card.path)}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full"
                  >
                    <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      {card.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function VisaVisionCard() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  

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
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Ենթահեդր (Subheader նավիգացիա քարտերի բաժնի համար) */}
      <div className="bg-purple-800 text-white py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 overflow-x-auto text-sm font-medium">
          <Link to="/cards" className="text-white hover:text-purple-200 transition-colors">Քարտեր</Link>
          <Link to="/cards/issuance" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Քարտերի տրամադրում և սպասարկում</Link>
          <Link to="/cards/social" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Սոցիալական ապահովության վճարային քարտեր</Link>
          <Link to="/cards/benefits" className="text-white hover:text-purple-200 transition-colors whitespace-nowrap">Evoca Benefits</Link>
        </div>
      </div>

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">
        
        {/* Գլխավոր Banner բաժին */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 border border-gray-100">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Visa Vision
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները։
            </p>
            <div className="pt-2">
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg cursor-pointer">
                Պատվիրել քարտը
              </button>
            </div>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src=" https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png" 
                alt="Visa Vision Cards" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Ներքին նավիգացիա (Tabs) */}
        <div className="flex border-b border-gray-200 space-x-8 text-lg font-medium">
          <button className="border-b-2 border-purple-700 text-purple-700 pb-3 -mb-px cursor-pointer">
            Քարտի մասին
          </button>
          <button className="text-gray-400 hover:text-gray-700 pb-3 -mb-px transition-colors cursor-pointer">
            Visa Vision քարտի սակագներ
          </button>
        </div>

        {/* Քարտի մասին հիմնական տեքստեր և առավելություններ */}
        <div className="max-w-4xl space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
          
          <p className="text-xl">
            <strong className="text-purple-700 font-semibold">Evocabank</strong>-ը ներկայացնում է իր նոր <span className="text-purple-700 font-semibold">Visa Vision</span> քարտը, որի հետ դու կստանա՝
          </p>

          <ul className="space-y-4 pl-2">
            <li className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full inline-block"></span>
              <span className="text-gray-900 font-medium">0% կանխիկացում Evoca-ի բոլոր բանկոմատներից</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full inline-block"></span>
              <span className="text-gray-900 font-medium">Cashback բոլոր անկանխիկ վճարումներից</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full inline-block"></span>
              <span className="text-gray-900 font-medium">Դրական մնացորդի վրա գումարի կուտակում</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 bg-purple-700 rounded-full inline-block"></span>
              <span className="text-gray-900 font-medium">Վարկային սահմանաչափ՝ քո ցանկությամբ</span>
            </li>
          </ul>

          <p className="pt-4 font-medium text-gray-800">
            Ի դեպ, քո քարտի դիզայնը դու ես ընտրում՝ մինիմալիստական սպիտա՞կ, թե՞ ոճային սև:
          </p>

          {/* Քարտերի դիզայնի ցուցադրություն */}
          <div className="py-6 flex justify-center">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png" 
              alt="Visa Vision Black and White designs" 
              className="max-w-md w-full object-contain rounded-2xl shadow-sm"
            />
          </div>

          <p>
            Դե կարող էդ ընտրել գույնն ու պատվիրել քո <span className="font-semibold text-gray-900">Visa Vision</span> քարտը։
          </p>

          <p className="font-semibold text-gray-900 text-xl pt-2">
            Այո, այս ամենն իրական է!
          </p>

          <p>
            <span className="text-purple-700 font-semibold">Vision</span> քարտը <strong className="text-gray-900">Visa Rewards</strong> տեսակի քարտ է։ Անկախ մնացորդի չափից՝ դրամական քարտի վրա դու կուտակում ես տարեկան <strong className="text-purple-700">4%</strong> գումար, դոլարային քարտերի դեպքում՝ <strong className="text-purple-700">1%</strong>, իսկ եվրոյով՝ <strong className="text-purple-700">0.5%</strong>:
          </p>

          <p className="font-medium text-gray-900">
            Բայց այսքանով քարտի առավելությունները չեն ավարտվում։
          </p>

          <p>
            Կատարիր անկանխիկ գնումներ ու վճարումներ քո <span className="font-semibold text-gray-900">Visa Vision</span> քարտով և ստացիր <strong className="text-purple-700">0.25% cashback</strong> տեղական գործարքների համար, և <strong className="text-purple-700">0.5% cashback</strong> արտասահմանյան գործարքների համար։
          </p>

          <p>
            <span className="text-purple-700 font-semibold">Visa Vision</span> քարտը գործում է ամենուր, որտեղ կարելի է վճարել Visa տեսակի քարտերով՝ <strong className="text-gray-900">թե՛ Հայաստանում, թե՛ Հայաստանից դուրս՝ 200-ից ավել երկրներում</strong>:
          </p>

        </div>

        {/* Evoca Vision քարտով կարելի է կատարել (3 բլոկ) */}
        <div className="space-y-8 pt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <span className="text-purple-700">Evoca Vision</span> քարտով կարելի է կատարել՝
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Բլոկ 1 */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-4 shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Օնլայն գնումներ</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                պարզ, անվտանգ և արագ վճարման միջոց
              </p>
            </div>

            {/* Բլոկ 2 */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-4 shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Բանկոմատով կանխիկացում</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                0% կանխիկացում Evoca բանկոմատներով
              </p>
            </div>

            {/* Բլոկ 3 */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-4 shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Գնումներ և cashback ողջ աշխարհում</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                մինչև 0.5% cashback բոլոր անկանխիկ գնումներից
              </p>
            </div>

          </div>
        </div>

        {/* Ինչպես պատվիրել քարտը & Որտեղ կարելի է օգտագործել */}
        <div className="max-w-4xl space-y-12 text-gray-700 leading-relaxed text-base sm:text-lg">
          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
              Ինչպե՞ս պատվիրել քարտը:
            </h2>
            <p>
              <strong className="text-gray-900">Evoca Vision</strong> քարտը կարող եես պատվիրել՝
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-purple-700 rounded-full inline-block"></span>
                <span className="text-gray-900 font-medium">Evocabank-ի ցանկացած մասնաճյուղում</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-purple-700 rounded-full inline-block"></span>
                <span className="text-gray-900 font-medium">EvocaTOUCH հավելվածի միջոցով</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-purple-700 rounded-full inline-block"></span>
                <span className="text-gray-900 font-medium">evoca.am կայքում</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 pt-2">
              Քարտը ստանալու համար անհրաժեշտ է անձնագիր ու սոց. քարտ կամ նույնականացման քարտ:
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
              Որտե՞ղ կարելի է օգտագործել քարտը:
            </h2>
            <p>
              <strong className="text-gray-900">Evoca Vision</strong> քարտով կարող ես վճարել խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում՝ ինչպես ՀՀ տարածքում, այնպես էլ ՀՀ տարածքից դուրս: Այս քարտով կարելի է նաև կատարել օնլայն գնումներ՝ աշխարհի ցանկացած կետից:
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
              Որքա՞ն է քարտի սպասարկման վճարը:
            </h2>
            <p>
              Քարտի ամսական սպասարկման վճարը կազմում է <strong className="text-gray-900">600 ՀՀ դրամ</strong>:
            </p>
          </div>

        </div>

        {/* Այլ քարտեր բաժին (Swiper Սլայդեր) */}
        <div className="pt-12 border-t border-gray-100">
          <div className="relative">
            {/* Վերնագիր և նավիգացիայի կոճակներ */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Այլ քարտեր</h2>
              
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

            {/* Swiper սլայդեր */}
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
                  <Link 
                    to={card.path} 
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full block"
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
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}
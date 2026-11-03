import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from './header';
import Footer from './footer';

export default function WilcoVisaInfinitePage() {
  const navigate = useNavigate();

  // Ստեղծում ենք activeTab state-ը (միայն 'about' և 'terms' ըստ նկարների)
  const [activeTab, setActiveTab] = useState('about');

  // Սլայդերի նավարկության համար հղումներ (Refs)
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Քարտերի ցանկը
  const otherCards = [
    { id: 1, title: "Arca Union Pay Co-badge", img: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png", path: "/cards/arca-union-pay" },
    { id: 2, title: "Evoca Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png", path: "/cards/gift-card" },
    { id: 3, title: "Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png", path: "/cards/visa-infinite" },
    { id: 4, title: "Mastercard World Digital", img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png", path: "/cards/mastercard-world-digital" },
    { id: 5, title: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", path: "/travel-card" },
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
  // Սակագների և դրույթների աղյուսակի տվյալներ (ըստ նկարների)
  const termsTableData = [
    { label: "Քարտի տրամադրում", value: "0" },
    { label: "Քարտի արժույթ", value: "AMD, USD, EURO" },
    { label: "Քարտ գործողության ժամկետ", value: "5 տարի" },
    { label: "Քարտի սպասարկման միանվագ վճար քարտի գործողության ժամկետի համար", value: "300 000 AMD" },
    { label: "Կից քարտի տրամադրում", value: "0" },
    { label: "Կից քարտի միանվագ վճար քարտի գործողության ժամկետի համար", value: "200 000 AMD" },
    { label: "Հաշվի չնվազող մնացորդ", value: "0" },
    { label: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %", value: "մինչև 5 մլն. ՀՀ դրամ՝ 1.50%\n5 մլն. ՀՀ դրամ և ավել՝ 2%\nարտարժույթ՝ 0%" },
    { label: "Քարտերով կանխիկի տրամադրում Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով", value: "1,2%" },
    { label: "Քարտերով կանխիկի տրամադրում «Արփա» համակարգի անդամ հանդիսացող ՀՀ բանկերի ATM-ներով և POS-տերմինալներով[1]", value: "1,5%" },
    { label: "Քարտերով կանխիկի տրամադրում Բանկի մասնաճյուղերում POS տերմինալով USD կամ EURO", value: "2% min 2,500AMD" },
    { label: "Քարտերով կանխիկի տրամադրում Բանկի մասնաճյուղերում քարտային հաշվից (AMD, USD. EURO)", value: "1,2%" },
    { label: "Քարտերով կանխիկի տրամադրում օտարերկրյա բանկերի ATM-ներով և POS-տերմինալներով", value: "2% min 2,500 AMD" },
    { label: "Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում", value: "0" },
    { label: "Քարտի արգելափակում", value: "0" },
    { label: "Քարտի գործողության ապաարգելափակում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)", value: "1,000 AMD" },
    { label: "Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում", value: "0" },
    { label: "Քարտի վերաթողարկում կորուստի, վնասելու կամ PIN ծածկագրի կորուստի դեպքում", value: "30,000 AMD" },
    { label: "PIN ծածկագրի գեներացում Արփա անդամ բանկերի բանկոմատների կամ Evoca Touch/Evoca Online միջոցով", value: "0 AMD" },
    { label: "PIN ծածկագրի գեներացման հայտի ներկայացում Բանկի մասնաճյուղերում", value: "1, 000 AMD" },
    { label: "Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար", value: "0" },
    { label: "Կանխիկի մուտքագրում «Արփա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)", value: "1%" },
    { label: "Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում հայկական հեռախոսահամարներին", value: "գործարքներ մինչև 5,000 AMD՝ 20 AMD\nգործարքներ ավել 5,000 AMD՝ 0" },
    { label: "Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում միջազգային հեռախոսահամարներին", value: "գործարքներ մինչև 5,000 AMD՝ 200 AMD\nգործարքներ ավել 5,000 AMD՝ 0" },
    { label: "Գերծախսի գծով տույժեր", value: "20 % Տարեկան" },
    { label: "Քարտերի առաքում ՀՀ տարածքում", value: "0 AMD" },
    { label: "Վճարային քարտերի միջազգային առաքում", value: "0 AMD" },
    { label: "Քարտից քարտ փոխանցումներ Բանկի ATM-ների միջոցով", value: "1%" },
    { label: "«Արփա» համակարգի անդամ հանդիսացող այլ բանկերի և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին", value: "1.20%" },
    { label: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով Բանկի ներսում", value: "0.5%" },
    { label: "Քարտից քարտ փոխանցումներ EvocaTouch/EvocaOnline համակարգերի միջոցով «Արփա» համակարգի անդամ հանդիսացող այլ բանկերի և Արփա համակարգի հետ H2H կապուղով աշխատող բանկերի վճարային քարտերին", value: "1.20%" },
    { label: "Կանխիկի տրամադրման առավելագույն սահմանաչափ", value: "5,000,000 AMD, 12,000 USD, 10,000 Euro" },
    { label: "Կանխիկացման գործարքների օրական առավելագույն քանակ", value: "20" },
    { label: "Կանխիկացման սահմանաչափի փոփոխություն 5 մլն ՀՀ դրամ և ավելի դեպքում", value: "4,900 AMD" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        <Header />

        {/* 1. Վերին մանուշակագույն ենթամենյու (#6400DC) */}
        <div className="bg-[#6400DC] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-1 overflow-x-auto text-sm">
              <a href="#" className="bg-[#5200b3] px-5 py-3 font-medium transition-colors">Քարտեր</a>
              <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Քարտերի տրամադրում և սպասարկում</a>
              <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Սոցիալական ապահովության վճարային քարտեր</a>
              <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Evoca Benefits</a>
            </nav>
          </div>
        </div>

        {/* 2. Hero բաժին */}
        <div className="relative bg-gradient-to-tr from-[#6400DC]/10 via-white to-white pt-10 pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Wilco Visa Infinite
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ։
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png" 
                alt="Wilco Visa Infinite" 
                className="max-w-md rounded-2xl shadow-xl object-cover"
              />
            </div>

          </div>

          {/* Վերադառնալ և Հացի փշրանքներ */}
          <div className="max-w-7xl mx-auto px-4 mt-10 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 text-gray-700 font-medium cursor-pointer transition-all"
            >
              <span>←</span>
              <span>Վերադառնալ</span>
            </button>

            <div className="flex items-center space-x-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
              <span className="text-gray-400 text-sm">🏠</span>
              <span>/</span>
              <span>Անհատ</span>
              <span>/</span>
              <span>Քարտեր</span>
              <span>/</span>
              <span>Քարտեր</span>
              <span>/</span>
              <span className="text-gray-800 font-semibold">Wilco Visa Infinite</span>
            </div>
          </div>   
        </div>

        {/* 3. Հիմնական բովանդակություն՝ Տաբերով */}
        <main className="flex-grow w-full py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Ներդիրների կոճակներ */}
            <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 pb-3 sm:pb-4 mb-6 sm:mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('about')}
                className={`font-semibold text-base sm:text-lg pb-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'text-[#6400DC] border-b-2 border-[#6400DC]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Քարտի մասին
              </button>

              <button
                onClick={() => setActiveTab('terms')}
                className={`font-semibold text-base sm:text-lg pb-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'terms'
                    ? 'text-[#6400DC] border-b-2 border-[#6400DC]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Սակագներ և դրույթներ
              </button>
            </div>

            {/* 4. Բովանդակություն՝ կախված ընտրված թաբից */}
            <div className="mt-4 text-gray-700 leading-relaxed space-y-6 pb-12">
              
              {/* Թաբ 1: Քարտի մասին */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      <strong className="text-[#6400DC] font-semibold">Wilco Visa Infinite</strong>-ը <strong className="text-[#6400DC] font-semibold">Evocabank</strong>-ի և Wilco-ի համատեղ թողարկված բացառիկ քարտ է, որը միավորում է պրեմիում բանկային սպասարկումն ու անհատականացված կապիտալի կառավարման միջազգային փորձը:
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      Քարտը հնարավորություն է տալիս օգտվել <strong className="text-[#6400DC] font-semibold">Evoca Visa Infinite</strong>-ի բենեֆիթներից և Wilco-ի կողմից տրամադրվող հատուկ առավելություններից. Wilco-ի փորձագետները կիրականացնեն՝
                    </p>

                    <ul className="space-y-3 list-disc list-inside marker:text-[#6400DC] text-gray-700 font-medium">
                      <li className="pl-1">Ձեր ֆինանսական կառուցվածքի և ներդրումային պորտֆելի անհատական գնահատում</li>
                      <li className="pl-1">Ձեր կապիտալի երկարաժամկետ զարգացման ռազմավարության մշակում</li>
                      <li className="pl-1">Wilco-ի մասնավոր հանդիպումների տարածքներից օգտվելու հնարավորության տրամադրում</li>
                      <li className="pl-1">Ներդրումներին, կապիտալի կառավարմանը, գլոբալ միտումներին և բարձրակարգ կենսակերպին նվիրված բացառիկ միջոցառումներին մասնակցելու հնարավորության տրամադրում</li>
                    </ul>

                    <p className="text-gray-800 font-medium text-base md:text-lg pt-4 border-t border-gray-100">
                      Wilco Visa Infinite քարտ կարող են ձեռք բերել բացառապես Wilco-ի հաճախորդները։ Դառնալով Wilco Visa Infinite քարտապան՝ Դուք կարող եք օգտվել պրեմիում քարտի բացառիկ արտոնություններից, որոնց կարող եք ծանոթանալ <a href="#" className="text-[#6400DC] underline font-semibold">այստեղ</a>:
                    </p>
                  </div>
                </div>
              )}

              {/* Թաբ 2: Սակագներ և դրույթներ (Աղյուսակը) */}
              {activeTab === 'terms' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Սակագներ և դրույթներ</h3>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8 space-y-4">
                    {termsTableData.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                        <div className="md:col-span-1 text-sm font-medium text-gray-600">{item.label}</div>
                        <div className="md:col-span-2 text-sm text-gray-900 font-semibold whitespace-pre-line">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </main>

        {/* 5. Այլ քարտեր (Swiper Slider) */}
        <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 rounded-3xl my-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Այլ քարտեր</h3>
            
            {/* Նավարկության կոճակներ */}
            <div className="flex space-x-3">
              <button 
                ref={prevRef} 
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#6400DC] hover:bg-purple-50 transition-all cursor-pointer shadow-sm"
                aria-label="Previous"
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9L9 17" stroke="#6400DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                ref={nextRef} 
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#6400DC] hover:bg-purple-50 transition-all cursor-pointer shadow-sm"
                aria-label="Next"
              >
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17L9 9L1 1" stroke="#6400DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
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
            className="pb-6"
          >
            {otherCards.map((card, index) => (
              <SwiperSlide key={index}>
                <Link 
                  to={card.path}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer block h-full"
                >
                  <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden rounded-2xl bg-gray-50 p-2">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base leading-tight group-hover:text-[#6400DC] transition-colors">
                    {card.title}
                  </h4>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </div>

      <Footer />

    </div>
  );
}
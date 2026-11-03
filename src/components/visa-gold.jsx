import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from './header';
import Footer from './footer';

export default function MastercardStandard() {
  const navigate = useNavigate();
  const [activeCurrency, setActiveCurrency] = useState('amd');
  const [activeTab, setActiveTab] = useState('about');

  // Սլայդերի նավարկության համար հղումներ (Refs)
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Քարտերի ցանկը
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
                Visa Gold
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից:
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png" 
                alt="Visa Gold" 
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
              <span>Visa</span>
              <span>/</span>
              <span className="text-gray-800 font-semibold">Visa Gold</span>
            </div>
          </div>
        </div>

        {/* 3. Ներդիրներ և բովանդակություն */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          
          <div className="flex space-x-8 border-b border-gray-200 mb-8 text-sm font-medium">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 relative cursor-pointer transition-colors ${
                activeTab === 'about'
                  ? 'text-gray-900 font-bold border-b-2 border-[#6400DC]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('tariffs')}
              className={`pb-3 relative cursor-pointer transition-colors ${
                activeTab === 'tariffs'
                  ? 'text-gray-900 font-bold border-b-2 border-[#6400DC]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Սակագներ և դրույթներ
            </button>
          </div>

          {/* Պայմանական ռենդեր՝ կախված ընտրված ներդիրից */}
          {activeTab === 'about' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-[#6400DC]">Visa Gold քարտ</strong>-ը, Visa International միջազգային վճարահաշվարկային համակարգի պրեմիում դասի չիպային քարտ է, որն ապահովում է Ձեր հարմարավետությունն ու ընդգծում Ձեր կարգավիճակը։
                </p>
                
                <p>
                  <strong className="text-[#6400DC]">Աշխարհի ցանկացած կետում Ձեր ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։</strong> Դուք կկարողանաք բանկոմատի միջոցով Evoca Visa Gold քարտից գումար կանխիկացնել և անկանխիկ վճարումներ կատարել <strong className="text-[#6400DC]">աշխարհի բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Visa տարբերանշանը։</strong>
                </p>

                <p>
                  <strong className="text-[#6400DC]">Evoca Visa Gold </strong> քարտն օժտված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով։ Այն միջազգային payWave տեխնոլոգիայով աշխատող չիպային քարտ է, որի շնորհիվ սպասարկման կետերում անկանխիկ վճարումներ կատարելիս քարտը հատուկ վճարային տերմինալների մեջ տեղադրելու անհրաժեշտություն չի առաջանում:
                </p>

                <p>
                  Սա նվազեցնում է քարտի հնարավոր կեղծման ռիսկը՝ ցանկացած վճարում դարձնելով պարզ, արագ և հեշտ: Պարզապես մոտեցրե՛ք քարտը հատուկ վճարային տերմինալներին, և գործարքը կհաստատվի հաշված վայրկյանների ընթացքում:
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
                <div className="flex justify-between border-b pb-4">
                  {[
                    { id: 'amd', label: '֏' },
                    { id: 'usd', label: '$' },
                    { id: 'eur', label: '€' },
                    { id: 'rub', label: '₽' },
                  ].map((curr) => (
                    <button
                      key={curr.id}
                      onClick={() => setActiveCurrency(curr.id)}
                      className={`w-10 h-10 rounded-full font-bold flex items-center justify-center shadow transition-all cursor-pointer ${
                        activeCurrency === curr.id
                          ? 'bg-[#6400DC] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {curr.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-2xl font-bold text-[#6400DC] w-1/3">0.2%</span>
                    <span className="text-gray-600 w-2/3 text-right">Կանխիկացում բանկի կանխիկացման կետերում</span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-2xl font-bold text-[#6400DC] w-1/3">0.8%</span>
                    <span className="text-gray-600 w-2/3 text-right">Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում</span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="w-1/3">
                      <span className="text-[10px] text-gray-400 block">min 1,500 ֏1%</span>
                      <span className="text-2xl font-bold text-[#6400DC]">1%</span>
                    </div>
                    <span className="text-gray-600 w-2/3 text-right">Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-xl font-bold text-[#6400DC] w-1/3">15,000 ֏</span>
                    <span className="text-gray-600 w-2/3 text-right">Տարեկան սպասարկում</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xl font-bold text-[#6400DC] w-1/3">75,000 ֏</span>
                    <span className="text-gray-600 w-2/3 text-right">Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Սակագներ և դրույթներ ներդիր (դատարկված) */
            <div className="py-12 text-center text-gray-500">
              <p>Սակագներ և դրույթներ բաժինը ժամանակավորապես դատարկ է:</p>
            </div>
          )}
        </section>

        {/* 4. Նոր Բաններ բաժին (համաձայն սքրինշոթի) */}
        <section className="bg-[#7800F0] py-20 text-white text-center relative overflow-hidden mt-12 shadow-inner">
          {/* Ֆոնային երկրաչափական տարրեր և դեղին գնդեր */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute top-4 left-12 w-12 h-12 bg-yellow-300 rounded-full shadow-lg pointer-events-none"></div>
          <div className="absolute bottom-6 right-16 w-16 h-16 bg-yellow-300 rounded-full shadow-lg pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide leading-snug">
              Evoca Visa Gold քարտը ճամփորդության ողջ ընթացքում կլինի Ձեր հուսալի ուղեկիցը և կընդգծի Ձեր յուրահատուկ կարգավիճակը։
            </h2>
          </div>
        </section>

        {/* 5. Այլ քարտեր (Swiper Slider) */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Այլ քարտեր</h3>
            
            {/* Նավարկության կոճակներ */}
            <div className="flex space-x-2">
              <button 
                ref={prevRef} 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#6400DC] hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
              >
                ❮
              </button>
              <button 
                ref={nextRef} 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#6400DC] hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
              >
                ❯
              </button>
            </div>
          </div>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
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
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {card.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </div>

      <Footer />

    </div>
  );
}
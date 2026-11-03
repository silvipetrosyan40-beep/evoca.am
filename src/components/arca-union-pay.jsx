import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from './header';
import Footer from './footer';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ArcaUnionPayCard() {
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
              Arca Union Pay Co-badge
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              Մեկ քարտ, բազմաթիվ հնարավորություններ. Arca՝ ամենօրյա գնումների և Union Pay՝ ճամփորդությունների և միջազգային գնումների համար:
            </p>
            <div className="pt-2">
             
            </div>
          </div>

          {/* Քարտերի պատկեր */}
          <div className="flex justify-center relative">
            <div className="w-full max-w-md h-72 sm:h-80 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png" 
                alt="Arca Union Pay Co-badge Card" 
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
            Սակագներ և դրույթներ
          </button>
        </div>

        {/* Քարտի մասին հիմնական տեքստեր և վիճակագրական բլոկ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p className="text-xl font-medium text-gray-900">
              Պետք չէ ընտրություն կատարել լոկալ և միջազգային քարտերի միջև:
            </p>
            
            <p>
              <strong className="text-purple-700">Evoca</strong>-ն միավորում է <strong className="text-gray-900">Arca</strong> ազգային և <strong className="text-gray-900">Union Pay</strong> միջազգային վճարային համակարգերի հնարավորությունները մեկ քարտում՝ թողարկելով <span className="text-purple-700 font-semibold">Arca Union Pay Co-badge</span> քարտը։
            </p>

            <p>
              <strong className="text-gray-900">Co-badge</strong> քարտերի դեպքում նույն քարտը Հայաստանում աշխատում է որպես Arca վճարային քարտ, իսկ Հայաստանի սահմաններից դուրս՝ միջազգային քարտ, որը սպասարկվում է աշխարհի <strong className="text-gray-900">ավելի քան 189 երկրում</strong>։
            </p>

            <p>
              Ձեռք բերելով <strong className="text-purple-700">Arca Union Pay Co-badge վճարային քարտ</strong>՝ դու հնարավորություն ես ստանում Հայաստանում օգտվել <strong className="text-purple-700">2% cashback</strong>-ից և, միևնույն ժամանակ, նույն քարտով ոչ միայն կատարել գործարքներ ՀՀ սահմաններից դուրս, այլ նաև օգտվել Union Pay վճարային համակարգի կողմից տրամադրվող <strong className="text-gray-900">զեղչերից և առաջարկներից</strong>։
            </p>

            <p className="font-semibold text-purple-700 pt-2">
              Գնումներ Հայաստանում, թե՛ արտերկրում. Arca Union Pay Co-badge քարտը հարմար է երկու դեպքում էլ:
            </p>
          </div>

          {/* Աջ կողմի վիճակագրական տուփը (Rates Box) */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex space-x-3 pb-2">
              <span className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm">դ</span>
              <span className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm">$</span>
              <span className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm">€</span>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Սակագին</p>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-purple-700">2,500֏</span>
                <span className="text-sm text-gray-500">տարեկան (ամսական՝ 250֏)</span>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Cashback</p>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-purple-700">2%</span>
                <span className="text-sm text-gray-500">տեղական գործարքներից</span>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Մինչև</p>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-purple-700">1,000,000֏</span>
                <span className="text-sm text-gray-500">անվճար կանխիկացում Բանկի ATM-ով</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ավելի քան</p>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-purple-700">189</span>
                <span className="text-sm text-gray-500">երկրում քարտով գործարքներ կատարելու հնարավորություն</span>
              </div>
            </div>
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
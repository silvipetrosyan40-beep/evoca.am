import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from './header';
import Footer from './footer';

export default function MyLerGiftCardPage() {
  const navigate = useNavigate();

  // Ստեղծում ենք activeTab state-ը
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
    { id: 5, title: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", path: "/card" },
    { id: 6, title: "Visa Classic", img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png", path: "/cards/visa-classic" },
    { id: 7, title: "Mastercard Standard", img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png", path: "/cards/mastercard-standard" },
    { id: 8, title: "Visa Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png", path: "/cards/visa-gold" },
    { id: 9, title: "Mastercard Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png", path: "/cards/mastercard-gold" },
    { id: 10, title: "MyLer Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png", path: "/cards/myler-gift-card" },
    { id: 11, title: "4U.am Gift card", img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png", path: "/cards/4u-gift" },
    { id: 12, title: "ArCa Classic", img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png", path: "/cards/arca-classic" },
  ];

  // Տրամադրման պայմանների աղյուսակի տվյալներ
  const termsTableData = [
    { label: "Քարտի տեսակ", value: "Arca Gift card" },
    { label: "Քարտի արժույթ", value: "ՀՀ դրամ" },
    { label: "Նվեր քարտի համալրման գումար", value: "Նվազագույնը` 10 000 ՀՀ դրամ\nԱռավելագույնը` 1 000 000 ՀՀ դրամ" },
    { label: "Քարտի գործողության ժամկետ", value: "Քարտի թողարկման պահից 6 ամիս" },
    { label: "4U.am Gift քարտով կատարվող գործարքներ", value: "ՀՀ տարածքում գտնվող առևտրային սպասարկման կետեր[1]" },
    { label: "Կանխիկացում", value: "Չի թույլատրվում" },
    { label: "Քարտային հաշվի չնվազող մնացորդ", value: "Չի սահմանվում" },
    { label: "Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք", value: "0%" },
    { label: "Ապրանքների և ծառայությունների դիմաց անկանխիկ վճարման միջնորդավճար", value: "Անվճար" },
    { label: "Քարտի գործողության կասեցում", value: "Անվճար" },
    { label: "Քարտի վերաթողարկում", value: "Չի վերաթողարկվում" },
    { label: "Մնացորդի տեղափոխման միջնորդավճար [1]", value: "4 900 ՀՀ դրամ" },
    { label: "PIN ծածկագրի գեներացման հայտ", value: "1 000 ՀՀ դրամ" },
    { label: "Քարտի ապապլեքավորման վճար", value: "1 000 ՀՀ դրամ" },
    { label: "Քարտային հաշվի ամսական քաղվածքի տրամադրում", value: "Անվճար" },
    { label: "Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար", value: "Անվճար" },
    { label: "Գործարքների վերաբերյալ SMS հաղորդագրությունների ստացում", value: "Անվճար" },
    { label: "Գերծախսի գծով տույժեր", value: "20% տարեկան" },
    { label: "Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո ամսական սպասարկման վճար:", value: "10% ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ" },
  ];

  // Սպասարկման պայմանների կետերը
  const serviceBulletPoints = [
    "Քարտը տրամադրվում է անվճար:",
    "Քարտի լիցքավորումն իրականացվում է Բանկի, ինչպես նաև այլ վճարային տերմինալների միջոցով, ընդ որում՝ Բանկի վճարային տերմինալների միջոցով լիցքավորում իրականացնելիս միջնորդավճար չի գանձվում:",
    "Քարտի մնացորդի նկատմամբ Բանկի կողմից տոկոսագումարներ չեն վճարվում:",
    "Քարտը գործում է մինչև Քարտի դիմերեսին նշված ամսի վերջին օրը ներառյալ:",
    "Քարտը նվեր ստացած անձը պարտավոր է Քարտի գործողության ժամկետում ներկայանալ Բանկ՝ անձը հաստատող փաստաթղթով և Բանկի հետ կնքել Վճարային քարտի պատվիրման հայտ-պայմանագիր` ակտիվացնելով Քարտը:",
    "Քարտի գործողության ժամկետի ընթացքում նվեր ստացած անձի կողմից Բանկ չներկայանալու և Քարտը չակտիվացնելու դեպքում Քարտի գումարը ենթակա չէ վերադարձման:",
    "Ակտիվացված Քարտի գործողության ժամկետի ավարտից հետո Բանկը սկսում է հաշվարկել ամսական 10% (տասը տոկոս) սպասարկման վճար` ժամկետի ավարտի օրվա դրությամբ քարտային հաշվի մնացորդի նկատմամբ։",
    "Մնացորդային գումարը կարող է տրամադրվել բացառապես մնացորդի տեղափոխման միջոցով այլ Նվեր քարտի` Հաճախորդի /Նվեր Քարտը ստացած քարտապան/ դիմումի հիման վրա: Ընդ որում, մնացորդի տեղափոխում այլ Նվեր քարտի կատարվում է բացառապես արդեն իսկ Հաճախորդին Կցագրված և ժամկետանց/կորցրած/վնասված Նվեր քարտերի դեպքում: Գործարքի համար Բանկի կողմից գանձվում է համապատասխան միջնորդավճար:",
    "Բանկը պատասխանատվություն չի կրում Դիմումատուին հասցված այն վնասի համար, որը հասցվել է Քարտը կորցնելու, Դիմումատուի կողմից Քարտն ու PIN կոդն այլ անձին փոխանցելու, ինչպես նաև Քարտի գործողության ժամկետի ավարտի հետևանքով:",
    "Բանկը պատասխանատվություն չի կրում իր հսկողության տիրույթից դուրս տեղի ունեցած իրադարձությունների համար:",
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
               4U.am Gift card
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
               Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր։
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png" 
                alt="4U.am Gift Card" 
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
              <span>ArCa</span>
              <span>/</span>
              <span className="text-gray-800 font-semibold">4U.am Gift card</span>
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
                Տրամադրման պայմաններ
              </button>

              <button
                onClick={() => setActiveTab('service')}
                className={`font-semibold text-base sm:text-lg pb-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'service'
                    ? 'text-[#6400DC] border-b-2 border-[#6400DC]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Սպասարկման պայմաններ
              </button>
            </div>

            {/* 4. Բովանդակություն՝ կախված ընտրված թաբից */}
            <div className="mt-4 text-gray-700 leading-relaxed space-y-6 pb-12">
              
              {/* Թաբ 1: Քարտի մասին */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8 space-y-6">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      <strong className="text-[#6400DC] font-semibold">Evocabank</strong>-ը և <strong className="text-[#6400DC] font-semibold">4u.am</strong>-ը համատեղ ներկայացնում են նվեր քարտ, որով կարող ես վճարում կատարել ցանկացած POS և V-POS տերմինալով՝
                    </p>
                    
                    <ul className="space-y-3 list-disc list-inside marker:text-[#6400DC] text-gray-700 font-medium">
                      <li className="pl-1">խանութներում,</li>
                      <li className="pl-1">սրճարաններում,</li>
                      <li className="pl-1">զվարճանքի կենտրոններում,</li>
                      <li className="pl-1">սուպերմարկետներում,</li>
                      <li className="pl-1">օնլայն հարթակներում,</li>
                      <li className="pl-1">և բոլոր այն վայրերում, որտեղ ընդունվում են բանկային քարտերով վճարումներ։</li>
                    </ul>

                    <p className="text-gray-800 font-medium text-base md:text-lg pt-4 border-t border-gray-100">
                      Այս նվեր քարտով դու ես որոշում՝ որքան գումար նվիրել, իսկ նրանք՝ որտեղ և ինչպես ծախսել:
                    </p>
                  </div>
                </div>
              )}

              {/* Թաբ 2: Տրամադրման պայմաններ (Աղյուսակը) */}
              {activeTab === 'terms' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Տրամադրման պայմաններ</h3>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8 space-y-4">
                    {termsTableData.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                        <div className="md:col-span-1 text-sm font-medium text-gray-600">{item.label}</div>
                        <div className="md:col-span-2 text-sm text-gray-900 font-semibold whitespace-pre-line">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Ծանոթագրություն ներքևում */}
                  <div className="text-xs text-gray-500 pt-4 space-y-2 border-t border-gray-100">
                    <p>[1] Սահմանափակված են հետևյալ գործարքները` կանխիկացում, կանխիկի մուտքագրում վճարային տերմինալներով և անկանխիկ փոխանցմամբ,  հաշվից հաշիվ փոխանցումներ, կոմունալ վճարումներ, էլեկտրոնային դրամապանակների համալրում, բեթթինգ/գեմբլինգ գործարքները, ինչպես նաև ֆինանսական ծառայությունների վճարման գործարքները (այդ թվում` վարկի մարում, ավանդի համալրում և այլն):</p>
                    <p>[2] Մնացորդի տեղափոխում այլ Նվեր քարտի կատարվում է բացառապես արդեն իսկ Հաճախորդին Կցագրված և ժամկետանց/կորցրած/վնասված Նվեր քարտերի կամ չկցագրված, սակայն գործողության ժամկետի մեջ գտնվող քարտերի դեպքում, երբ հնարավոր է նույնականացնել Նվեր քարտը գնող հաճախորդին, ով նշված դեպքում իրավասու է ներկայացնել մնացորդի տեղափոխման դիմումը:</p>
                  </div>
                </div>
              )}

              {/* Թաբ 3: Սպասարկման պայմաններ (Կետերը) */}
              {activeTab === 'service' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Սպասարկման պայմաններ</h3>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8">
                    <ul className="space-y-4 list-disc list-inside marker:text-[#6400DC]">
                      {serviceBulletPoints.map((point, index) => (
                        <li key={index} className="pl-1 text-sm leading-relaxed text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
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
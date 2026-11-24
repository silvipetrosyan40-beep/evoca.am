import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';

export default function InvestmentServicesPage() {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
              <button onClick={() => handleNavigation('/securities')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Ներդրումային ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/bonds')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Պարտատոմսեր</button>
              <button onClick={() => handleNavigation('/hy/repo-services')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">ՀԿԴ ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/repo-reverse-repo')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ռեպո/Հակադարձ Ռեպո գործարքներ</button>
              <button onClick={() => handleNavigation('/hy/evocalnvest')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">EvocaINVEST</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/individuals')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/securities')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Արժեթղթեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Ներդրումային ծառայություններ</span>
          </div>

          <div className="space-y-6">

            {/* 1. ՀԵՐՈ ԲԼՈԿ (ՆԿԱՐ ԵՎ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ) */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                  Ներդրումային ծառայություններ
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան:
                </p>
              </div>
              <div className="w-full lg:w-[480px] h-72 sm:h-80 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-purple-50">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
                  alt="Ներդրումային ծառայություններ" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2. ԸՆԴՀԱՆՈՒՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ ԵՎ ԿՈՆՏԱԿՏՆԵՐ */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-6 text-gray-800">
              <p className="text-base leading-relaxed">
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
              </p>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h3 className="text-xl font-bold text-purple-900">Ինչպե՞ս դառնալ հաճախորդ.</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <a href="#account-docs" className="text-purple-700 underline font-semibold">այստեղ</a>:
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="bg-gray-50 p-6 rounded-2xl border border-purple-100 space-y-3">
                  <div className="flex items-center gap-2 text-purple-900 font-bold text-lg">
                    <MapPin className="w-5 h-5 text-purple-700" />
                    <span>Հասցե</span>
                  </div>
                  <p className="text-gray-600 text-sm">Երևան, Հանրապետության 44/2</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-purple-100 space-y-3">
                  <div className="flex items-center gap-2 text-purple-900 font-bold text-lg">
                    <Phone className="w-5 h-5 text-purple-700" />
                    <span>Հետադարձ կապ</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <strong>Հեռ.՝</strong> 374 33 777 453, 374 33 603 055
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-md">WhatsApp</span>
                    <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded-md">Telegram</span>
                    <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-md">Viber</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-700" />
                  <span>Էլ. հասցե՝ </span>
                  <a href="mailto:Investsecurities@evoca.am" className="text-purple-700 underline font-semibold">Investsecurities@evoca.am</a>
                </p>
              </div>

              {/* ՈՒՇԱԴՐՈՒԹՅՈՒՆ ԲԼՈԿ */}
              <div className="mt-6 p-6 bg-purple-50 rounded-2xl border border-purple-200 space-y-2">
                <h4 className="font-extrabold text-purple-900 text-sm tracking-wide uppercase">ՈՒՇԱԴՐՈՒԹՅՈՒՆ</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
                </p>
              </div>
            </div>

            {/* 3. ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (ԱԿՈՐԴԵՈՆՆԵՐ) */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
              <div className="space-y-4">
                {[
                  {
  title: "Ներդրումային ծառայությունների մատուցման կանոններ",
  content: (
    <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
      <div>
        <a href="#brokerage-rules" className="text-purple-700 underline font-semibold text-base block mb-2">
          Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
        </a>
        <p>
          Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
        </p>
      </div>

      <div>
        <a href="#custody-rules" className="text-purple-700 underline font-semibold text-base block mb-2">
          Արժեթղթերի Պահառության գործունեության կանոններ
        </a>
        <p>
          Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում՝ Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
        </p>
      </div>
    </div>
  )
},
                  {
  title: "Ծառայությունների մատուցման սակագներ",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <div>
        <a href="#local-tariffs" className="text-purple-700 underline font-semibold text-base block mb-1">
          Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ
        </a>
      </div>

      <div>
        <a href="#international-tariffs" className="text-purple-700 underline font-semibold text-base block mb-1">
          Միջազգային շուկաներում ծառայությունների մատուցման սակագներ
        </a>
      </div>
    </div>
  )
},
                  {
  title: "Լրացուցիչ տեղեկատվություն",
  content: (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <div>
        <a href="#orders-procedure" className="text-purple-700 underline font-semibold text-base block mb-1">
          «Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման» ընթացակարգ
        </a>
      </div>

      <div>
        <a href="#conflict-of-interest" className="text-purple-700 underline font-semibold text-base block mb-1">
          «Շահերի բախման սահմանափակման» ընթացակարգ
        </a>
      </div>

      <div>
        <a href="#stock-exchanges" className="text-purple-700 underline font-semibold text-base block mb-1">
          Ֆոնդային բորսաներ
        </a>
      </div>

      <div>
        <a href="#risk-notifications" className="text-purple-700 underline font-semibold text-base block mb-1">
          Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ
        </a>
      </div>
    </div>
  )
},
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl border border-purple-100 shadow-sm overflow-hidden transition-all">
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex items-center justify-between bg-transparent cursor-pointer hover:bg-purple-50/50 transition-colors"
                    >
                      <span>{item.title}</span>
                      <span className="text-purple-700">
                        {openAccordion === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>
                    {openAccordion === idx && (
                      <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. ՎԵՐՋԻՆ ՆՈՐՈՒԹՅՈՒՆՆԵՐԸ */}
            <div className="w-full py-6 space-y-8">
              {/* Վերնագիր և "Բոլոր նորությունները" կոճակ */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Վերջին նորությունները
                </h2>
                <a 
                  href="/all-news" 
                  className="inline-flex items-center px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 text-sm font-semibold rounded-full transition-colors group"
                >
                  <span>Բոլոր նորությունները</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">›</span>
                </a>
              </div>

              {/* Նորությունների քարտերի ցանց (Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Նորություն 1 */}
                <div 
                  onClick={() => navigate('/news/fincomm-2026')}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
                >
                  <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                    <img 
                      src="https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png" 
                      alt="Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow space-y-3">
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                      Կենսակերպ
                    </span>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                      Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր
                    </h3>
                    <span className="text-xs text-gray-400 mt-auto pt-2">
                      08.10.2026
                    </span>
                  </div>
                </div>

                {/* Նորություն 2 */}
                <div 
                  onClick={() => {}}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
                >
                  <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                    <img 
                      src="https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" 
                      alt="Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow space-y-3">
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                      Կենսակերպ
                    </span>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                      Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր
                    </h3>
                    <span className="text-xs text-gray-400 mt-auto pt-2">
                      06.10.2026
                    </span>
                  </div>
                </div>

                {/* Նորություն 3 */}
                <div 
                  onClick={() => {}}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer"
                >
                  <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                    <img 
                      src="https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" 
                      alt="Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow space-y-3">
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md w-fit">
                      Կենսակերպ
                    </span>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                      Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր
                    </h3>
                    <span className="text-xs text-gray-400 mt-auto pt-2">
                      06.10.2026
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}
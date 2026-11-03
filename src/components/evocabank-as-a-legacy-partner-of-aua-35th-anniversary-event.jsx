import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function NewsDetailFincomm() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      
      {/* Header */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* 1. Վերադարձի կոճակ և Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          
          {/* «Վերադառնալ» կոճակ */}
          <Link
            to="/news/all"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-5 py-2.5 rounded-full transition-all w-fit cursor-pointer text-sm shadow-xs"
          >
            <span className="text-base">←</span>
            <span>Վերադառնալ</span>
          </Link>

          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium overflow-x-auto">
            <Link to="/" className="hover:text-purple-700 transition-colors flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/news/all" className="hover:text-purple-700 transition-colors">
              Նորություններ
            </Link>
            <span className="text-gray-300">›</span>
            <Link to="/news/lifestyle" className="hover:text-purple-700 transition-colors">
              Կենսակերպ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-xs">
            Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր
            </span>
          </nav>

        </div>

        {/* 2. Վերնագրի և մեծ նկարի բլոկ */}
        <div className="relative">
          
          {/* Ձախ կողմի սոցիալական կոճակներ (Desktop-ի համար) */}
          <div className="hidden lg:flex flex-col space-y-2 absolute -left-14 top-0">
            <a href="#facebook" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">f</span>
            </a>
            <a href="#linkedin" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">in</span>
            </a>
            <a href="#instagram" className="w-9 h-9 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <span className="font-bold text-xs">ig</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Վերնագիր և կարճ նկարագրություն */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-4 h-4 bg-lime-400 inline-block rounded-sm"></span>
                <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase">
                  Կենսակերպ
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Evocabank-ը միացավ AUA-ի 35-ամյակի միջոցառմանը՝ որպես միջոցառման Legacy Partner՝ նշելով կրթության ու զարգացման կարևորությունը։
              </p>
              <p>25.09.2026</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[3/2]">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/17906855928227/780x585.png" 
                  alt="Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

 {/* 3. Հոդվածի մանրամասն տեքստեր */}
        <div className="max-w-4xl space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
          
          <p className="font-semibold text-gray-900">
            <strong>Սեպտեմբերի 25-ին</strong> Ամերիկյան համալսարանի (AUA) <strong>35-ամյակի առթիվ</strong> Արամ Խաչատրյան համերգասրահում տեղի ունեցավ տոնական միջոցառում, որի <span className="text-purple-800 font-bold">Legacy Partner</span>-ը <strong>Evocabank</strong>-ն էր:
          </p>

          <p className="font-bold text-gray-900 italic">
            "Paving the Way for Future Leaders"
          </p>

          <p>
            Խորագրով երեկոն մեկտեղեց AUA-ի ուսանողներին, շրջանավարտներին, դասախոսներին ու աշխատակիցներին, ինչպես նաև համալսարանի գործընկերներին ու աջակիցներին:
          </p>

          <p>
            35 տարիների ընթացքում AUA-ն ձևավորել է ավելի քան 8,000 շրջանավարտներից բաղկացած համայնք, որոնցից շատերն այսօր իրենց մասնագիտական գործունեությամբ նպաստում են Հայաստանի և աշխարհի տարբեր ոլորտների զարգացմանը:
          </p>

          <p>
            AUA-ի հետ <strong>Evocabank</strong>-ին կապում է նաև մեր թիմի անդամների անձնական պատմությունը. Բանկի բազմաթիվ աշխատակիցներ, այդ թվում՝ թոփ մենեջմենթի ներկայացուցիչներ, AUA-ի շրջանավարտներ են:
          </p>

          <p>
            Կրթությունն ու շարունակական զարգացումը մեզ համար կարևոր արժեքներ են, ու մենք մեծ սիրով աջակցում ենք մի համալսարանի, որն արդեն 35 տարի նոր հնարավորություններ է ստեղծում Հայաստանի ապագայի համար:
          </p>

          <p>
            Տոնական ծրագրի երաժշտական հատվածն ապահովեց <strong>Հայաստանի ազգային ֆիլհարմոնիկ նվագախումբը</strong>:
          </p>

          <p className="font-semibold text-gray-900 pt-2">
            Շնորհավորում ենք AUA-ին 35-ամյակի կապակցությամբ և ուրախ ենք լինել այս կարևոր ճանապարհի մի մասը:
          </p>

        </div>
        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/life-style/evocabank_as_the_partner_of_fincomm_2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17915391966329/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">08.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/life-style/evocabank-as-the-general-partner-of-armenia-uk-business-forum" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/life-style/evocabank-as-the-financial-partner-of-trf-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="		https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.10.2026</span>
              </div>
            </Link>

          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
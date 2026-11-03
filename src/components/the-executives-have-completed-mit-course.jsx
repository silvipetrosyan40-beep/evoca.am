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
             
                Բանկային
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-xs">      
                 
                    Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը
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
                <span className="w-4 h-4  inline-block rounded-sm"></span>
               <Link 
  to="/news/banking" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-700 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Բանկային
  </span>
</Link>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Evoca-ի ղեկավարները հաջողությամբ ավարտեցին Generative AI դասընթացը
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Evocabank-ը տարածաշրջանում առաջին ընկերությունն է, որի ղեկավարները հաջողությամբ ավարտել են MIT-ի Generative AI դասընթացը։
              </p>
              <p>17.07.2026</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[3/2]">
                <img 
                  src="	https://www.evoca.am/images-cache/news/1/17842875742396/780x585.png" 
                  alt="Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

{/* 3. Հոդվածի մանրամասն տեքստեր */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
          
          <p>
            <strong>Evocabank</strong>-ի ավելի քան <strong>70 ղեկավար</strong> մասնակցեց և հաջողությամբ ավարտեց <strong>Massachusetts Institute of Technology (MIT) Open Learning</strong>-ի երեքշաբաթյա <strong>"Understanding and Using Generative AI" դասընթացը</strong>:
          </p>

          <p>
            Օնլայն դասընթացներին զուգահեռ ծրագիրը ներառում էր նաև real-time վիդեո հանդիպումներ, որոնց ընթացքում MIT Open Learning-ի AI Education & Innovation-ի ղեկավար <strong>Dr. David Dixon</strong>-ը ներկայացնում էր Generative AI-ի կիրառման գործնական հնարավորություններն ու ազդեցությունը բիզնեսի վրա, ինչպես նաև քննարկվում էին Բանկի թիմի կողմից բարձրացված հարցերը:
          </p>

          {/* Նկար (Կենտրոնացված) */}
          <div className="w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-md my-6">
            <img 
              src="https://www.evoca.am/file_manager/IMG_0069.PNG" 
              alt="MIT Open Learning դասընթացի մասնակիցները" 
              className="w-full h-auto object-cover"
            />
          </div>

          <blockquote className="border-l-4 border-purple-700 pl-4 py-2 italic text-gray-800 bg-purple-50/50 rounded-r-xl">
            «Evocabank-ում միշտ բարձր է գնահատվել շարունակական զարգացումն ու ինքնակրթությունը, իսկ արհեստական բանականության հմտություններ սովորելն այսօրվա, ես կասեի անգամ երեկվա պահանջն է: Սա մեր թիմի՝ նոր հմտություններով վերազինման սկիզբն է: Պետք է այնպես անենք, որ AI-ը դառնա մեր թիմի superpower-ը», - նշել է <strong>Evocabank</strong>-ի <strong>Վարչության նախագահ Կարեն Եղիազարյանը</strong>:
          </blockquote>

          <p>
            Ի դեպ, Բանկի ամբողջ թիմն ամիսներ առաջ մասնակցեց <strong>«AI գրագիտության դասընթաց Evocabank-ի համար» 14-ժամյա ծրագրին</strong>, որը հատուկ Բանկի աշխատակիցների համար մշակվել էր <strong>reArmenia ակադեմիայի</strong> կողմից: <strong>Evoca</strong>-նում նաև խրախուսվում են նեղ մասնագիտական AI դասընթացներն ու թրեյնինգները:
          </p>

        </div>
        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/banking/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17908437653512/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                        Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">05.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/block-transactions" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17852444643548/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Գործարքների արգելափակում 1 կոճակով
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">01.06.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/moodys-rating" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17870544210976/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                Ba3 վարկանիշ Moody’s-ից Evocabank-ին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">18.08.2026</span>
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
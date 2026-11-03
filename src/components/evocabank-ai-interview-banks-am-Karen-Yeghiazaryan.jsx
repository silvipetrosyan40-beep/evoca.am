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
             
                    Հարցազրույցներ
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-900 font-semibold truncate max-w-xs">      
                 
                    Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին
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
  to="/news/interviews" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-purple-700 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Հարցազրույցներ
  </span>
</Link>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Կարեն Եղիազարյան․ «Բանկային ոլորտում լավագույն AI-ը անտեսանելի է»։ Evocabank-ի Վարչության նախագահի նոր հարցազրույցն արդեն հասանելի է Banks.am կայքում։
              </p>
              <p>22.07.2026</p>
            </div>

            {/* Մեծ նկար */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-gray-900 aspect-[3/2]">
                <img 
                  src="https://www.evoca.am/images-cache/news/1/17845396816254/780x585.png" 
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
            <strong>Banks.am</strong>-ի հետ հարցազրույցի ընթացքում <strong>Կարեն Եղիազարյանն</strong> ընդգծել է, որ <strong>Evocabank</strong>-ի նպատակը ոչ թե պարզապես AI գործիքների ներդրումն է, այլ AI native բանկի ձևավորումը, որտեղ տեխնոլոգիան օգնում է ստեղծել ավելի արագ, անհատականացված և հասանելի ֆինանսական ծառայություններ:
          </p>

          <blockquote className="border-l-4 border-purple-700 pl-4 py-2 italic text-gray-800 bg-purple-50/50 rounded-r-xl">
            «Բանկային ոլորտում լավագույն արհեստական բանականությունն անտեսանելի է, երբ հաճախորդը ստանում է լավագույն պրոդուկտը, լուծումը, խորհուրդն ու արդյունքն արագ, իրեն հասկանալի, մարդկային լեզվով և իրեն հարմար տարբերակով», - նշել է <strong>Կարեն Եղիազարյանը</strong>:
          </blockquote>

          <p>
            Նա նաև խոսել է <strong>Evocabank</strong>-ում AI-ի կիրառման ներկա և ապագա ուղղությունների մասին՝ սկսած խարդախությունների կանխարգելումից ու ռիսկերի գնահատումից մինչև AI Hub-ի ստեղծում և AI native պրոդուկտների մշակում: Կարեն Եղիազարյանը կարևորել է նաև թիմի AI տրանսֆորմացիան՝ ընդգծելով, որ ապագայում AI-ը պետք է դառնա յուրաքանչյուր աշխատակցի «superpower»-ը:
          </p>

          <p>
            Banks.am-ի ամբողջական հարցազրույցը <strong>Evocabank</strong>-ի Վարչության նախագահ Կարեն Եղիազարյանի հետ կարդացեք{' '}
            <a 
              href="https://www.banks.am" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-700 hover:underline font-bold"
            >
              այստեղ
            </a>:
          </p>

          {/* Նկար 1 (Կենտրոնացված) */}
          <div className="w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-md my-6">
            <img 
              src="https://www.evoca.am/file_manager/Interview/IMG_8633-641x360.png" 
              alt="Կարեն Եղիազարյանի հարցազրույցը" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Նկար 2 (Կենտրոնացված) */}
          <div className="w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-md my-6">
            <img 
              src="https://www.evoca.am/file_manager/Interview/2.png" 
              alt="Կարեն Եղիազարյան" 
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-sm text-gray-500 italic pt-2">
            Ի դեպ, լուսանկարները գեներացված են AI-ի միջոցով:
          </p>

        </div>

        {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/interviews/interview-of-karen-yeghiazaryan-with-los-angeles-times-magazine" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17720089281517/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times ամսագրին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">25.02.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/interviews/Karen-Yeghiazaryan-new-interview-with-banks-am" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17628589568036/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                   Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">11.11.2025</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/interviews/interview-of-karen-yeghiazaryan-with-time-magazine" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17508538711597/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                 Կարեն Եղիազարյանի հարցազրույցը TIME Magazine-ին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">25.06.2025</span>
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
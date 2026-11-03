import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդերի միացումը */}
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/hy/loans')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 whitespace-nowrap">Վարկեր</button>
              <button onClick={() => handleNavigation('/loans/credit-history')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">Վարկային պատմություն և սքոր</button>
              <button onClick={() => handleNavigation('/loans/important-info')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap">Կարևոր տեղեկատվություն</button>
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
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Վարկեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Վարկեր</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Վարկեր</h1>

          {/* ԷՋ ՏԱՆՈՂ ԿՈՃԱԿՆԵՐ */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => handleNavigation('/hy/loans')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Բոլորը
            </button>
            
            <button
              onClick={() => handleNavigation('/loans/collateral-consumer')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Գրավով ապահովված սպառողական վարկեր
            </button>

            <button
              onClick={() => handleNavigation('/hy/loans/unsecured-consumer-loans')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Անգրավ սպառողական վարկեր
            </button>

            <button
              onClick={() => handleNavigation('/loans/mortgage')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Հիփոթեքային վարկեր
            </button>

            <button
              onClick={() => handleNavigation('/loans/auto')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Ավտոմեքենաների ձեռքբերման ֆինանսավորում
            </button>

            <button
              onClick={() => handleNavigation('/loans/express')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Ապառիկ
            </button>

            <button
              onClick={() => handleNavigation('/loans/online')}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer border-none bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Օնլայն վարկեր
            </button>
          </div>

            {/* NO8 ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                       <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                         
                         <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                           <img 
                             src="	https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg" 
                             alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                             className="w-full h-full object-cover"
                           />
                         </div>
           
                         <div className="flex-1">
                           <h3 className="text-2xl font-bold text-gray-900 mb-2">Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով</h3>
                           <p className="text-gray-600 text-sm leading-relaxed mb-6">
                           Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։
                           </p>
           
                           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                             <div>
                               <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                               <span className="font-bold text-purple-700 text-lg">80 մլն. ֏</span>
                               <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                             </div>
                             <div>
                               <span className="text-gray-400 text-xs block mb-1">ժամկետ</span>
                               <span className="font-bold text-purple-700 text-lg">240 ամիս</span>
                               <span className="text-gray-500 text-xs block mt-0.5">ժամկետ</span>
                             </div>
                             <div>
                               <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                               <span className="font-bold text-purple-700 text-lg">13.2%</span>
                               <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                             </div>
                           </div>
                         </div>
           
                         <div className="w-full lg:w-auto flex justify-end shrink-0">
                           <button
                             onClick={() => handleNavigation('/mortgage-loans/residential-mortgage-loans')}
                             className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                           >
                             <span>Մանրամասն</span>
                             <ChevronRight className="w-4 h-4" />
                           </button>
                         </div>
           
                       </div>
           
            {/* NO10 ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                       <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                         
                         <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                           <img 
                             src="	https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png" 
                             alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                             className="w-full h-full object-cover"
                           />
                         </div>
           
                         <div className="flex-1">
                           <h3 className="text-2xl font-bold text-gray-900 mb-2">Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին</h3>
                           <p className="text-gray-600 text-sm leading-relaxed mb-6">
                               Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:
           
           
                           </p>
           
                           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                             <div>
                               <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                               <span className="font-bold text-purple-700 text-lg">55 մլն ֏</span>
                               <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                             </div>
                             <div>
                               <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                               <span className="font-bold text-purple-700 text-lg">120 ամիս</span>
                               <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                             </div>
                             <div>
                               <span className="font-bold text-purple-700 text-lg">13%</span>
                               <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                             </div>
                           </div>
                         </div>
           
                         <div className="w-full lg:w-auto flex justify-end shrink-0">
                           <button
                             onClick={() => handleNavigation('/mortgage-loans/for-displaced-families-of-nagorno-karabakh')}
                             className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                           >
                             <span>Մանրամասն</span>
                             <ChevronRight className="w-4 h-4" />
                           </button>
                         </div>
           
                       </div>
           
                         {/* NO11 ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                      
                                      <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                        <img 
                                          src="	https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg" 
                                          alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                        
                                      <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Հողամասի ձեռքբերման վարկ</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։
                                        </p>
                        
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                          <div>
                                            <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                            <span className="font-bold text-purple-700 text-lg">80 մլն. ֏</span>
                                            <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                          </div>
                                          <div>
                                            <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                            <span className="font-bold text-purple-700 text-lg">240 ամիս</span>
                                            <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                                          </div>
                                          <div>
                                            <span className="text-gray-400 text-xs block mb-1">սկսած
                        </span>
                                            <span className="font-bold text-purple-700 text-lg">14%-ից</span>
                                            <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                          </div>
                                        </div>
                                      </div>
                        
                                      <div className="w-full lg:w-auto flex justify-end shrink-0">
                                        <button
                                          onClick={() => handleNavigation('/mortgage-loans/land-acquisition-loan')}
                                          className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                        >
                                          <span>Մանրամասն</span>
                                          <ChevronRight className="w-4 h-4" />
                                        </button>
                                      </div>
                        
                                    </div>
                        
                                                {/* NO12 ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                
                                                <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                  <img 
                                                    src="https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png" 
                                                    alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                  
                                                <div className="flex-1">
                                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Միկրովերանորոգման վարկ Բանկի ռեսուրսներով</h3>
                                                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                      Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։
                                                  </p>
                                  
                                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                    <div>
                                                      <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                      <span className="font-bold text-purple-700 text-lg">5 մլն. ֏</span>
                                                      <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                    </div>
                                                    <div>
                                                      <span className="font-bold text-purple-700 text-lg">60 ամիս</span>
                                                      <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                                                    </div>
                                                    <div>
                                                      <span className="font-bold text-purple-700 text-lg">17%</span>
                                                      <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                    </div>
                                                  </div>
                                                </div>
                                  
                                                <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                  <button
                                                    onClick={() => handleNavigation('/mortgage-loans/micro-renovation-loan-with-bank-resources')}
                                                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                  >
                                                    <span>Մանրամասն</span>
                                                    <ChevronRight className="w-4 h-4" />
                                                  </button>
                                                </div>
                                  
                                              </div>
                                               {/* NO18   ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                            
                                                            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                              <img 
                                                                src="	https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png" 
                                                                alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                className="w-full h-full object-cover"
                                                              />
                                                            </div>
                                              
                                                            <div className="flex-1">
                                                              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ</h3>
                                                              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                  Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։
                                                              </p>
                                              
                                                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                  <span className="font-bold text-purple-700 text-lg">80 մլն. ֏</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Գումար (Համարժեք արտարժույթ)</span>
                                                                </div>
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                  <span className="font-bold text-purple-700 text-lg">180 ամիս</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Ժամկետ</span>
                                                                </div>
                                                                <div> 
                                                                      <span className="text-gray-400 text-xs block mb-1">Ֆիքսված տոկոսադրույքով սկսած</span>
                                                                  <span className="font-bold text-purple-700 text-lg">8.2%-ից</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                </div>
                                                                <div>
                                                                 <span className="text-gray-400 text-xs block mb-1">Լողացող տոկոսադրույքով սկսած</span>
                                                                  <span className="font-bold text-purple-700 text-lg">7.7%-ից</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                </div>
                                                              </div>
                                                            </div>
                                              
                                                            <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                              <button
                                                                onClick={() => handleNavigation('/mortgage-loans/housing-mortgages-for-non-resident-individuals')}
                                                                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                              >
                                                                <span>Մանրամասն</span>
                                                                <ChevronRight className="w-4 h-4" />
                                                              </button>
                                                            </div>
                                              
                                                          </div>
                                               {/* NO21  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                            
                                                            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                              <img 
                                                                src="	https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg" 
                                                                alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                className="w-full h-full object-cover"
                                                              />
                                                            </div>
                                              
                                                            <div className="flex-1">
                                                              <h3 className="text-2xl font-bold text-gray-900 mb-2">Առևտրային հիփոթեքային վարկեր</h3>
                                                              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                  Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։
                                                              </p>
                                              
                                                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                  <span className="font-bold text-purple-700 text-lg">120 մլն. ֏</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                </div>
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                  <span className="font-bold text-purple-700 text-lg">240 ամիս</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Ժամկետ</span>
                                                                </div>
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                                                                  <span className="font-bold text-purple-700 text-lg">7.2%-ից</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                </div>
                                                              </div>
                                                            </div>
                                              
                                                            <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                              <button
                                                                onClick={() => handleNavigation('/mortgage-loans/commercial-mortgage-loans')}
                                                                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                              >
                                                                <span>Մանրամասն</span>
                                                                <ChevronRight className="w-4 h-4" />
                                                              </button>
                                                            </div>
                                              
                                                          </div>
                                                {/* NO22  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                            
                                                            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                              <img 
                                                                src="		https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg" 
                                                                alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                className="w-full h-full object-cover"
                                                              />
                                                            </div>
                                              
                                                            <div className="flex-1">
                                                              <h3 className="text-2xl font-bold text-gray-900 mb-2">ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր</h3>
                                                              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                              Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող բնակարանային հիփոթեքային վարկեր։
                                              
                                                              </p>
                                              
                                                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                  <span className="font-bold text-purple-700 text-lg">45 մլն. ֏</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                </div>
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">առավելագույնը</span>
                                                                  <span className="font-bold text-purple-700 text-lg">240 ամիս</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետ</span>
                                                                </div>
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                                                                  <span className="font-bold text-purple-700 text-lg">12%</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                </div>
                                                              </div>
                                                            </div>
                                              
                                                            <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                              <button
                                                                onClick={() => handleNavigation('/mortgage-loans/mortgage-loans-under-the-national-mortgage-company-loan-program')}
                                                                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                              >
                                                                <span>Մանրամասն</span>
                                                                <ChevronRight className="w-4 h-4" />
                                                              </button>
                                                            </div>
                                              
                                                          </div>
                                               {/* NO23  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                            
                                                            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                              <img 
                                                                src="https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png" 
                                                                alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                className="w-full h-full object-cover"
                                                              />
                                                            </div>
                                              
                                                            <div className="flex-1">
                                                              <h3 className="text-2xl font-bold text-gray-900 mb-2">ԱՀԸ-ի ծրագրով կառուցապատման վարկեր</h3>
                                                              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                      Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:
                                                              </p>
                                              
                                                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                  <span className="font-bold text-purple-700 text-lg">45 մլն. ֏</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                </div>
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">առավելագույնը</span>
                                                                  <span className="font-bold text-purple-700 text-lg">240 ամիս</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետ</span>
                                                                </div>
                                                                <div>
                                                                  <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                                                                  <span className="font-bold text-purple-700 text-lg">12.5%</span>
                                                                  <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                </div>
                                                              </div>
                                                            </div>
                                              
                                                            <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                              <button
                                                                onClick={() => handleNavigation('/mortgage-loans/construction-loan-national-mortgage-company')}
                                                                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                              >
                                                                <span>Մանրամասն</span>
                                                                <ChevronRight className="w-4 h-4" />
                                                              </button>
                                                            </div>
                                              
                                                          </div>
                                                           {/* NO24  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                                      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                                        
                                                                        <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                                          <img 
                                                                            src="https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg" 
                                                                            alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                            className="w-full h-full object-cover"
                                                                          />
                                                                        </div>
                                                          
                                                                        <div className="flex-1">
                                                                          <h3 className="text-2xl font-bold text-gray-900 mb-2">ԱՀԸ-ի ծրագրով վերանորոգման վարկեր</h3>
                                                                          <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                              Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ։
                                                          
                                                                          </p>
                                                          
                                                                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                            <div>
                                                                              <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                              <span className="font-bold text-purple-700 text-lg">15 մլն. ֏</span>
                                                                              <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                            </div>
                                                                            <div>
                                                                              <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                              <span className="font-bold text-purple-700 text-lg">84 ամիս</span>
                                                                              <span className="text-gray-500 text-xs block mt-0.5">Ժամկետ</span>
                                                                            </div>
                                                                            <div>
                                                                              <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                                                                              <span className="font-bold text-purple-700 text-lg">12.5%</span>
                                                                              <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                          
                                                                        <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                                          <button
                                                                            onClick={() => handleNavigation('/mortgage-loans/renovation-loans-under-national-mortgage-company')}
                                                                            className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                                          >
                                                                            <span>Մանրամասն</span>
                                                                            <ChevronRight className="w-4 h-4" />
                                                                          </button>
                                                                        </div>
                                                          
                                                                      </div>
                                                                      {/* NO25  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                                                  <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                                                    
                                                                                    <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                                                      <img 
                                                                                        src="https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg" 
                                                                                        alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                                        className="w-full h-full object-cover"
                                                                                      />
                                                                                    </div>
                                                                      
                                                                                    <div className="flex-1">
                                                                                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»</h3>
                                                                                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                                          Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:
                                                                                      </p>
                                                                      
                                                                                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                                        <div>
                                                                                          <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                          <span className="font-bold text-purple-700 text-lg">27 մլն. ֏</span>
                                                                                          <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                                        </div>
                                                                                        <div>
                                                                                          <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                          <span className="font-bold text-purple-700 text-lg">180 ամիս</span>
                                                                                          <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետը</span>
                                                                                        </div>
                                                                                        <div>
                                                                                          <span className="font-bold text-purple-700 text-lg">2-ից - 4%</span>
                                                                                          <span className="text-gray-500 text-xs block mt-0.5">Սուբսիդավորվող տոկոս</span>
                                                                                        </div>
                                                                                        <div>
                                                                                          <span className="font-bold text-purple-700 text-lg">6.9-ից - 7.9%</span>
                                                                                          <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք
                                                                      
                                                                                          </span>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                      
                                                                                    <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                                                      <button
                                                                                        onClick={() => handleNavigation('/mortgage-loans/mortgage-loans-under-affordable-housing-for-young-families-program')}
                                                                                        className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                                                      >
                                                                                        <span>Մանրամասն</span>
                                                                                        <ChevronRight className="w-4 h-4" />
                                                                                      </button>
                                                                                    </div>
                                                                      
                                                                                  </div>
                                                                                    {/* NO27  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                                                              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                                                                
                                                                                                <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                                                                  <img 
                                                                                                    src="	https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png" 
                                                                                                    alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                                                    className="w-full h-full object-cover"
                                                                                                  />
                                                                                                </div>
                                                                                  
                                                                                                <div className="flex-1">
                                                                                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին</h3>
                                                                                                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                                                      Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:
                                                                                  
                                                                                                  </p>
                                                                                  
                                                                                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                                                    <div>
                                                                                                      <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">45 մլն ֏</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">120 ամիս</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետ</span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                     <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">10%-ից</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                                                    </div>
                                                                                                    
                                                                                                  </div>
                                                                                                </div>
                                                                                  
                                                                                                <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                                                                  <button
                                                                                                    onClick={() => handleNavigation('/mortgage-loans/housing-affordability-for-displaced-families-of-the-republic-of-artsakh')}
                                                                                                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                                                                  >
                                                                                                    <span>Մանրամասն</span>
                                                                                                    <ChevronRight className="w-4 h-4" />
                                                                                                  </button>
                                                                                                </div>
                                                                                  
                                                                                              </div>
                                                                                    {/* NO28  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                                                              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                                                                
                                                                                                <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                                                                  <img 
                                                                                                    src="https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png" 
                                                                                                    alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                                                    className="w-full h-full object-cover"
                                                                                                  />
                                                                                                </div>
                                                                                  
                                                                                                <div className="flex-1">
                                                                                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին</h3>
                                                                                                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                                                      Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։
                                                                                                  </p>
                                                                                  
                                                                                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                                                    <div>
                                                                                                      <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">10 մլն ֏</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">60 ամիս</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետ</span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                      <span className="font-bold text-purple-700 text-lg">13%
                                                                                  </span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                                                    </div>
                                                                                                    
                                                                                                  </div>
                                                                                                </div>
                                                                                  
                                                                                                <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                                                                  <button
                                                                                                    onClick={() => handleNavigation('/mortgage-loans/mortgage-repairing-loan-for-displaced-families-of-artsakh')}
                                                                                                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                                                                  >
                                                                                                    <span>Մանրամասն</span>
                                                                                                    <ChevronRight className="w-4 h-4" />
                                                                                                  </button>
                                                                                                </div>
                                                                                  
                                                                                              </div>
                                                                                  
                                                                                   {/* NO30  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                                                              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                                                                
                                                                                                <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                                                                  <img 
                                                                                                    src="https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png" 
                                                                                                    alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                                                    className="w-full h-full object-cover"
                                                                                                  />
                                                                                                </div>
                                                                                  
                                                                                                <div className="flex-1">
                                                                                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր</h3>
                                                                                                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                                  Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:
                                                                                  
                                                                                                  </p>
                                                                                  
                                                                                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                                                    <div>
                                                                                                      <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">21 մլն ֏</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                    <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">120 ամիս</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետ</span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                      <span className="font-bold text-purple-700 text-lg">13%
                                                                                  </span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                                                                                    </div>
                                                                                                    
                                                                                                  </div>
                                                                                                </div>
                                                                                  
                                                                                                <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                                                                  <button
                                                                                                    onClick={() => handleNavigation('/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia')}
                                                                                                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                                                                  >
                                                                                                    <span>Մանրամասն</span>
                                                                                                    <ChevronRight className="w-4 h-4" />
                                                                                                  </button>
                                                                                                </div>
                                                                                              </div>
                                                                                    {/* NO33  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                                                              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                                                                
                                                                                                <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                                                                  <img 
                                                                                                    src="	https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png" 
                                                                                                    alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                                                                    className="w-full h-full object-cover"
                                                                                                  />
                                                                                                </div>
                                                                                  
                                                                                                <div className="flex-1">
                                                                                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Հիփոթեքային վարկեր Զինծառայողներին</h3>
                                                                                                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                                                  Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։
                                                                                  
                                                                                  
                                                                                  
                                                                                                  </p>
                                                                                  
                                                                                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                                                                    <div>
                                                                                                      <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                                                                                      <span className="font-bold text-purple-700 text-lg">25,65 մլն ֏</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ</span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                  \                    <span className="font-bold text-purple-700 text-lg">120-240 ամիս</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5"> Մարման ժամկետ
                                                                                  </span>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                      <span className="font-bold text-purple-700 text-lg">11-ից - 12.75%</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Տարեկան անվանական տոկոսադրույք</span>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                   <div>
                                                                                                      <span className="font-bold text-purple-700 text-lg">5%</span>
                                                                                                      <span className="text-gray-500 text-xs block mt-0.5">Սուբսիդավորվող տոկոսադրույք
                                                                                  
                                                                                  </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                  
                                                                                                <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                                                                  <button
                                                                                                    onClick={() => handleNavigation('/mortgage-loans/mortgages-for-service-members')}
                                                                                                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                                                                                  >
                                                                                                    <span>Մանրամասն</span>
                                                                                                    <ChevronRight className="w-4 h-4" />
                                                                                                  </button>
                                                                                                </div>
                                                                                              </div>
        </main>
      </div>

      {/* Ֆութերի միացումը */}
      <Footer />
    </div>
  );
}
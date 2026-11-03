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

          {/* NO3 ԳՈՒՅՔԻ ԳՐԱՎՈՎ ԱՊԱՀՈՎՎԱԾ ՎԱՐԿԻ ՔԱՐՏ */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            
            <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg" 
                alt="Գույքի գրավով ապահովված վարկ" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Գույքի գրավով ապահովված վարկ</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                  <span className="font-bold text-purple-700 text-lg">150 մլն. ֏</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">անշարժ գույքի գրավադրման դեպքում</span>
                  <span className="font-bold text-purple-700 text-lg">24-180 ամիս</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետը</span>
                </div>
                <div>
                  <span className="text-gray-400 text-xs block mb-1">շարժական գույքի գրավադրման դեպքում</span>
                  <span className="font-bold text-purple-700 text-lg">60 ամիս</span>
                  <span className="text-gray-500 text-xs block mt-0.5">Վարկի մարման ժամկետը</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end shrink-0">
              <button
                onClick={() => handleNavigation('/consumer-loans/property-secured-loan')}
                className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
              >
                <span>Մանրամասն</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

           {/* NO5 ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                        
                        <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                          <img 
                            src="https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg" 
                            alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                            className="w-full h-full object-cover"
                          />
                        </div>
          
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ոսկու գրավով (լոմբարդային) վարկ</h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։
                          </p>
          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                              <span className="font-bold text-purple-700 text-lg">50 մլն. ֏</span>
                              <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                            </div>
                            <div>
                              <span className="text-gray-400 text-xs block mb-1">ժամկետ</span>
                              <span className="font-bold text-purple-700 text-lg">3-60 ամիս</span>
                              <span className="text-gray-500 text-xs block mt-0.5">ժամկետ</span>
                            </div>
                            <div>
                              <span className="text-gray-400 text-xs block mb-1">սկսած</span>
                              <span className="font-bold text-purple-700 text-lg">15.5%-ից</span>
                              <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                            </div>
                            <div>
                              <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                              <span className="font-bold text-purple-700 text-lg">150%</span>
                              <span className="text-gray-500 text-xs block mt-0.5">Վարկ / գրավ հարաբերակցություն</span>
                            </div>
                          </div>
                        </div>
          
                        <div className="w-full lg:w-auto flex justify-end shrink-0">
                          <button
                            onClick={() => handleNavigation('/hy/loans/consumer-loans/gold-secured-pawn-loans')}
                            className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                          >
                            <span>Մանրամասն</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                        </div>

                         {/* NO15   ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                      
                                      <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                        <img 
                                          src="	https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" 
                                          alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                        
                                      <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Անհատական վարկ «Ներդրումային»</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։
                                        </p>
                        
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                          <div>
                                            <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                            <span className="font-bold text-purple-700 text-lg">350 մլն ֏</span>
                                            <span className="text-gray-500 text-xs block mt-0.5">Գումար</span>
                                          </div>
                                          <div>
                                            <span className="text-gray-400 text-xs block mb-1">մինչև</span>
                                            <span className="font-bold text-purple-700 text-lg">240 ամիս</span>
                                            <span className="text-gray-500 text-xs block mt-0.5">Մարման ժամկետ</span>
                                          </div>
                                          <div> 
                                            <span className="font-bold text-purple-700 text-lg">15%</span>
                                            <span className="text-gray-500 text-xs block mt-0.5">Տոկոսադրույք</span>
                                          </div>
                                        </div>
                                      </div>
                        
                                      <div className="w-full lg:w-auto flex justify-end shrink-0">
                                        <button
                                          onClick={() => handleNavigation('/consumer-loans/individual-investment-loan')}
                                          className="bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                                        >
                                          <span>Մանրամասն</span>
                                          <ChevronRight className="w-4 h-4" />
                                        </button>
                                      </div>
                        
                                    </div>

                                     {/* NO20  ՈՍԿՈՒ ԳՐԱՎՈՎ (ԼՈՄԲԱՐԴԱՅԻՆ) ՎԱՐԿԻ ՔԱՐՏ */}
                                                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                                                  
                                                  <div className="w-full lg:w-72 h-44 rounded-2xl overflow-hidden shrink-0 bg-yellow-300 flex items-center justify-center">
                                                    <img 
                                                      src="https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg" 
                                                      alt="Ոսկու գրավով (լոմբարդային) վարկ" 
                                                      className="w-full h-full object-cover"
                                                    />
                                                  </div>
                                    
                                                  <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Դրամական միջոցների գրավով ապահովված անհատական վարկ</h3>
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                        Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։
                                                    </p>
                                    
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                      <div>
                                                        <span className="text-gray-400 text-xs block mb-1">ավանդի գումարի մինչև</span>
                                                        <span className="font-bold text-purple-700 text-lg">95%</span>
                                                        <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ</span>
                                                      </div>
                                                      <div>
                                                        <span className="text-gray-400 text-xs block mb-1">պարտատոմսի գումարի մինչև</span>
                                                        <span className="font-bold text-purple-700 text-lg">80%</span>
                                                        <span className="text-gray-500 text-xs block mt-0.5">Սահմանաչափ</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                    
                                                  <div className="w-full lg:w-auto flex justify-end shrink-0">
                                                    <button
                                                      onClick={() => handleNavigation('/consumer-loans/deposit-secured-credit-line-retail')}
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
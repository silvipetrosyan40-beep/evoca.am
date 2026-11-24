import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState(2026);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Մրցանակների տվյալներն ըստ էջերի և տարեթվերի
  const awardsList = [
    // Էջ 1
    [
      {
        year: '2026 թ.',
        title: 'Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման',
        org: 'AMX',
        logo: 'https://www.evoca.am/images-cache/awards/amx.png',
        fallbackLogoText: 'AMX Armenia Stock Exchange',
        path: '/news/amx-awards'
      },
      {
        year: '2026 թ.',
        title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
        org: 'The Digital Banker',
        logo: 'https://www.evoca.am/images-cache/awards/digital-banker.png',
        fallbackLogoText: 'THE DIGITAL BANKER',
        path: '/prizes/new-award-best-sme-bank-by-digital-banker-2026'
      },
      {
        year: '2026 թ.',
        title: 'Excellence in Travel Segment Innovation',
        org: 'Mastercard',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
        fallbackLogoText: 'mastercard',
        path: '/news/allpage2/travel-segment-innovation'
      },
      {
        year: '2025 թ.',
        title: 'Best AI-Powered Mobile App',
        org: 'The Digital Banker',
        logo: 'https://www.evoca.am/images-cache/awards/digital-banker.png',
        fallbackLogoText: 'THE DIGITAL BANKER',
        path: '/news/allpage2/powered-mobile-app'
      },
      {
        year: '2025 թ.',
        title: 'Ամենանորարար ՓՄՁ վարկավորման',
        org: 'International Finance Magazine',
        logo: 'https://www.evoca.am/images-cache/awards/ifm.png',
        fallbackLogoText: 'INTERNATIONAL FINANCE',
        path: '/news/allpage2/banking-armenia-2025'
      },
      {
        year: '2025 թ.',
        title: 'Լավագույն Բանկը Հայաստանում 2025',
        org: 'International Investor Magazine',
        logo: 'https://www.evoca.am/images-cache/awards/iim.png',
        fallbackLogoText: 'INTERNATIONAL INVESTOR',
        path: '/news/allpage3/investor-magazine'
      },
      {
        year: '2025 թ.',
        title: 'Best Mobile Banking in Armenia',
        org: 'Global Business & Finance',
        logo: 'https://www.evoca.am/images-cache/awards/gbf.png',
        fallbackLogoText: 'Global Business & Finance',
        path: '/news/allpage4/finance-magazine'
      },
      {
        year: '2025 թ.',
        title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
        org: 'The Digital Banker',
        logo: 'https://www.evoca.am/images-cache/awards/digital-banker.png',
        fallbackLogoText: 'THE DIGITAL BANKER',
        path: '/news/allpage3/bank-in-armenia-2025'
      },
       {
        year: '2025 թ.',
        title: 'Most Innovative Digital Bank in Armenia',
        org: 'Global Business & Finance Magazine',
        logo: '',
        fallbackLogoText: 'GBF Magazine',
        path: '/news/allpage4/finance-magazine'
      },
      {
        year: '2025 թ.',
        title: 'Award for the Development of International Banking Cooperation',
        org: 'BACEE',
        logo: '',
        fallbackLogoText: 'BACEE',
        path: '/news/allpage3/award-from-bacee'
      },
      {
        year: '2025 թ.',
        title: 'Excellence in New Products Development',
        org: 'Mastercard',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
        fallbackLogoText: 'mastercard',
        path: '/news/allpage4/products-development'
      },
      {
        year: '2024 թ.',
        title: 'Highest Cashless Ratio Achievement',
        org: 'Visa International',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
        fallbackLogoText: 'VISA',
        path: '/news/allpage4/ratio-achievement'
      },
      {
        year: '2024 թ.',
        title: 'Լավագույն բջջային նորարարական բանկային հավելված՝ EvocaTOUCH',
        org: 'Armenia Digital Awards',
        logo: '',
        fallbackLogoText: 'DIGITAL AWARDS 2024',
        path: '/news/allpage5/armenia-digital-awards'
      },
      {
        year: '2024 թ.',
        title: 'Լավագույն վեբ դիզայն՝ evoca.am',
        org: 'Armenia Digital Awards',
        logo: '',
        fallbackLogoText: 'DIGITAL AWARDS 2024',
        path: '/news/allpage5/armenia-digital-awards'
      },
      {
        year: '2025 թ.',
        title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage5/bank-in-armenia'
      },
      {
        year: '2024 թ.',
        title: 'Ամենաինովացիոն թվային բանկը Հայաստանում',
        org: 'Global Business and Finance Magazine',
        logo: '',
        fallbackLogoText: 'GBF Magazine',
        path: '/news/allpage6/business-and-finance'
      },
      {
        year: '2024 թ.',
        title: 'Լավագույն թվային բանկը Հայաստանում',
        org: 'Global Banking & Finance Review',
        logo: '',
        fallbackLogoText: 'FINANCE REVIEW',
        path: '/news/allpage5/finance-review'
      },
      {
        year: '2024 թ.',
        title: 'Աջակցություն Project Management-ի զարգացմանը',
        org: 'PMI Armenia',
        logo: '',
        fallbackLogoText: 'PMI Armenia',
        path: '/hy/news/prizes/pmi-armenia-2024'
      },
    ],
    // Էջ 2
    [
    {
        year: '2024 թ.',
        title: 'Հայաստանում ամենարագ զարգացող',
        org: 'Global Business and Finance Magazine',
        logo: '',
        fallbackLogoText: 'GBF Magazine',
        path: '/news/allpage6/business-and-finance'
      },
      {
        year: '2023 թ.',
        title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage7/evoca-new-awards'
      },
      {
        year: '2023 թ.',
        title: 'Լավագույն սպառողական մոբայլ բանկային',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage7/evoca-new-awards'
      },
      {
        year: '2023 թ.',
        title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage7/evoca-new-awards'
      },
      {
        year: '2023 թ.',
        title: 'Լավագույն կորպորատիվ թվային բանկը',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage7/evoca-new-awards'
      },
      {
        year: '2023 թ.',
        title: 'Թվային վճարումների և փոխանցումների',
        org: 'Visa International',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
        fallbackLogoText: 'VISA',
        path: '/news/allpage8/visa-award-evoca'
      },
      {
        year: '2023 թ.',
        title: '«Օրինապահ հարկ վճարող» հավաստագիր',
        org: 'ՀՀ ՊԵԿ',
        logo: '',
        fallbackLogoText: 'ՀՀ ՊԵԿ',
        path: '/news/allpage8/orinapah'
      },
      {
        year: '2023 թ.',
        title: 'Ամենանորարար թվային բանկը Հայաստանում',
        org: 'Global Business & Finance Magazine',
        logo: '',
        fallbackLogoText: 'GBF Magazine',
        path: '/news/allpage7/digital-bank-2023'
      },
      {
        year: '2023 թ.',
        title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage8/GlobalFinanceSME2022'
      },
      {
        year: '2023 թ.',
        title: 'Երիտասարդ սերնդի արժեքների զարգացում',
        org: 'Mastercard',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
        fallbackLogoText: 'mastercard',
        path: '/news/allpage8/award-mastercard'
      },
      {
        year: '2023 թ.',
        title: 'Wallet վճարումների դինամիկ աճ',
        org: 'Mastercard',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
        fallbackLogoText: 'mastercard',
        path: '/news/allpage8/award-mastercard'
      },
      {
        year: '2023 թ.',
        title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage7/evoca-new-awards'
      },
      {
        year: '2022 թ.',
        title: 'Լավագույն ՓՄՁ բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage10/GlobalFinanceSME'
      },
      {
        year: '2022 թ.',
        title: 'Վիզա պրեմիումի ակտիվ թողարկում',
        org: 'Visa International',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
        fallbackLogoText: 'VISA',
        path: '/news/allpage10/visa-award'
      },
      {
        year: '2021 թ.',
        title: 'Լավագույն մոբայլ բանկը ՀՀ՝ ըստ SME Banking Club-ի',
        org: 'SME Banking Club',
        logo: '',
        fallbackLogoText: 'SME Banking Club',
        path: '/news/allpage10/SME-best-mobile-banking'
      },
      {
        year: '2021 թ.',
        title: 'Լավագույն թվային բանկը Հայաստանում',
        org: 'Global Banking & Finance Review',
        logo: '',
        fallbackLogoText: 'FINANCE REVIEW',
        path: '/news/allpage10/global-finance-banking'
      },
      {
        year: '2021 թ.',
        title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage11/digital-bank-of-armenia'
      },
      {
        year: '2021 թ.',
        title: 'Պատվավոր Մրցանակ Awwwards թիմի կողմից',
        org: 'Awwwards',
        logo: '',
        fallbackLogoText: 'awwwards.',
        path: '/news/allpage10/new-website-award'
      },
      {
        year: '2020 թ.',
        title: 'Լավագույն մոբայլ բանկը Հայաստանում՝ ըստ SME Banking',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage12/bank-in-armenia'
      },
      {
        year: '2020 թ.',
        title: 'Լավագույն թվային բանկը Հայաստանում',
        org: 'Global Banking and Finance Review',
        logo: '',
        fallbackLogoText: 'FINANCE REVIEW',
        path: '/news/allpage12/digital-bank-in-armenia'
      },
        ],
    // Էջ 3
    [
      {
        year: '2020 թ.',
        title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage11/digital-bank-of-armenia'
      },
      
      {
        year: '2019 թ.',
        title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage10/global_finance_2021'
      },
      {
        year: '2018 թ.',
        title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
        org: 'KamoBlog',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/allpage11/digital-bank-of-armenia'
      },
      {
        year: '2017 թ.',
        title: 'Տարվա լավագույն միջոցառում',
        org: 'KamoBlog',
        logo: '',
        fallbackLogoText: 'KAMOBLOG.TV',
        path: '/news/best-event-2017'
      },
      {
        year: '2017 թ.',
        title: 'Լավագույն սպառողական թվային բանկը Հայաստանում',
        org: 'Global Finance',
        logo: '',
        fallbackLogoText: 'GLOBAL FINANCE',
        path: '/news/consumer-digital-bank-2017'
      } 
    ]
  ];

  const currentAwards = awardsList[currentPage - 1] || awardsList[0];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ԱԲՈՒԹԻ ՀԵԴԵՐ */}
        <header className="w-full bg-white shadow-sm font-sans">
          {/* Վերին սպիտակ հեդերի հատված */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => handleNavigation('/')} 
                className="bg-transparent border-none cursor-pointer flex items-center"
              >
                <span className="text-3xl font-black tracking-tight text-neutral-600">evoca</span>
              </button>

              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                <button 
                  onClick={() => handleNavigation('/hy/about')} 
                  className="text-purple-700 bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Սակագներ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/reports')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հաշվետվություններ
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/announcements')} 
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Հայտարարություններ
                </button>
              </nav>
            </div>

            <div>
              <button 
                onClick={() => handleNavigation('/hy/evocaonline')} 
                className="px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer border-none"
              >
                EvocaONLINE
              </button>
            </div>
          </div>

          {/* Ներքին մանուշակագույն երկրորդային ենթաբաժինների բար */}
          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
                <button onClick={() => handleNavigation('/hy/about')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ընդհանուր</button>
                <button onClick={() => handleNavigation('/hy/about/structure')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Կառուցվածք</button>
                <button onClick={() => handleNavigation('/hy/about/shareholders')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Բաժնետերեր</button>
                <button onClick={() => handleNavigation('/hy/about/management')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ղեկավարություն</button>
                <button onClick={() => handleNavigation('/hy/about/partners')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Գործընկերներ</button>
                <button onClick={() => handleNavigation('/hy/about/awards')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Մրցանակներ</button>
                <button onClick={() => handleNavigation('/hy/about/csr')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">CSR</button>
                <button onClick={() => handleNavigation('/hy/about/group')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Էվոկա ֆինանսական խումբ</button>
              </nav>
            </div>
          </div>
        </header>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ՄՐՑԱՆԱԿՆԵՐԻ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Evoca-ի մասին</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Մրցանակներ</span>
          </div>

          {/* Մրցանակների հիմնական բլոկ */}
          <div className="relative bg-white rounded-[40px] p-6 md:p-12 shadow-sm border border-gray-100 overflow-hidden">
            {/* Ֆոնային մեղմ մոխրագույն/մանուշակագույն կորություն */}
            <div className="hidden lg:block absolute top-0 left-0 w-1/3 h-[500px] bg-gradient-to-br from-purple-50/80 to-gray-100/60 rounded-br-[120px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              
              {/* ՁԱԽ ՄԱՍ՝ Դափնեպսակի և Գավաթի նկարները */}
              <div className="w-full lg:w-[32%] flex flex-col items-center justify-between py-6 space-y-24">
                
                {/* Առաջին նկարը՝ Դափնեպսակ */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Դեկորատիվ 3D էլեմենտներ */}
                  <span className="absolute -top-4 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-yellow-400 -rotate-12"></span>
                  <span className="absolute top-2 right-12 w-3 h-7 bg-gradient-to-b from-fuchsia-500 to-purple-600 rounded-sm rotate-12"></span>
                  <div className="w-56 h-56 rounded-full border-4 border-dotted border-yellow-300/60 flex items-center justify-center p-4">
                    <img 
                      src="https://www.evoca.am/img/awards-wreath.png" 
                      alt="Evoca Laurel Wreath" 
                      className="w-full h-full object-contain drop-shadow-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/3112/3112946.png";
                      }}
                    />
                  </div>
                </div>

                {/* Երկրորդ նկարը՝ Արծաթե գավաթ (երևում է միայն մեծ էկրաններին, երբ էջը երկարում է) */}
                <div className="hidden lg:flex relative w-64 h-64 items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-purple-100/70 flex items-center justify-center relative">
                    <img 
                      src="https://www.evoca.am/img/awards-cup.png" 
                      alt="Evoca Trophy" 
                      className="w-52 h-52 object-contain drop-shadow-xl -rotate-12"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/2617/2617955.png";
                      }}
                    />
                  </div>
                </div>

              </div>

              {/* ԱՋ ՄԱՍ՝ Մրցանակների քարտերի ցանց */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentAwards.map((award, index) => (
                    <div
                      key={index}
                      onClick={() => handleNavigation(award.path)}
                      className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(107,33,168,0.12)] border border-gray-100 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[210px] group"
                    >
                      <div>
                        <span className="text-[#6200ee] font-extrabold text-xl block mb-3">
                          {award.year}
                        </span>
                        <h3 className="text-gray-800 font-bold text-base leading-snug group-hover:text-[#6200ee] transition-colors">
                          {award.title}
                        </h3>
                      </div>

                      <div className="mt-8 flex items-end justify-between gap-4">
                        <span className="text-xs text-gray-500 font-medium">
                          {award.org}
                        </span>

                        {/* Կազմակերպության լոգոն */}
                        <div className="h-9 flex items-center justify-end shrink-0">
                          {award.logo ? (
                            <img 
                              src={award.logo} 
                              alt={award.org} 
                              className="max-h-full max-w-[100px] object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                          ) : null}
                          <span 
                            style={{ display: award.logo ? 'none' : 'block' }}
                            className="text-[11px] font-black tracking-tighter text-gray-700 border border-gray-300 px-2 py-1 rounded uppercase"
                          >
                            {award.fallbackLogoText}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ստորին էջերի փոխարկիչ (Pagination) */}
                <div className="mt-12 flex items-center space-x-3">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`w-9 h-9 rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer transition-colors ${
                      currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 150, behavior: 'smooth' });
                      }}
                      className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center border-none cursor-pointer transition-all ${
                        currentPage === page
                          ? 'bg-[#6200ee] text-white shadow-md'
                          : 'bg-transparent text-gray-700 hover:bg-purple-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
                    disabled={currentPage === 3}
                    className={`w-9 h-9 rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer transition-colors ${
                      currentPage === 3 ? 'text-gray-300 cursor-not-allowed' : 'text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
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
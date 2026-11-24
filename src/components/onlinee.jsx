import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function GeneralInformationPage() {
  const navigate = useNavigate();
  // Պահում ենք բացված կատեգորիաների անունները (կարող է մի քանիսը կամ մեկը բաց լինել)
  const [openCategories, setOpenCategories] = useState({ 'Սպառողական վարկեր': true });

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  

  const categories = [
    { 
  name: 'Ավանդների սակագներ', 
  subitems: [
    { title: 'Դասական ավանդ', path: '/hy/about/tariffs/deposits' },
    { title: 'Evoca Online Ավանդ', path: '/hy/about/tariffs/deposits/online' },
    { title: 'Մանկական ավանդ', path: '/hy/about/tariffs/deposits/children' }
  ] 
},
   
  ];

 const paymentCardsData = [
 
    ]

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ */}
        <header className="w-full bg-white shadow-sm font-sans">
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
                  className="text-gray-700 bg-transparent border-none cursor-pointer hover:text-purple-700 transition-colors"
                >
                  Evoca-ի մասին
                </button>
                <button 
                  onClick={() => handleNavigation('/hy/about/tariffs')} 
                  className="text-purple-700 font-bold bg-transparent border-none cursor-pointer hover:text-purple-900 transition-colors"
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

          <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap overflow-x-auto">
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Վարկեր ֆիզիկական անձանց
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/corporate-loans')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Վարկեր իրավաբանական անձանց
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/commissions')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Միջնորդավճարների սակագները
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/deposits')} 
    className="text-white font-semibold bg-purple-900 px-3 py-1.5 rounded-lg transition-colors border-none cursor-pointer whitespace-nowrap shadow-inner shrink-0"
  >
    Ավանդների սակագներ
  </button>
  <button 
    onClick={() => handleNavigation('/hy/about/tariffs/archive')} 
    className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer whitespace-nowrap shrink-0"
  >
    Արխիվ
  </button>
</nav>
            </div>
          </div>
        </header>

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Մեր մասին</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/about/evoca')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Սակագներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Ավանդների սակագներ
</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Ձախ կողմի բացվող-փակվող մենյու */}
            <div className="lg:col-span-4 space-y-3">
              {categories.map((cat, idx) => {
                const isOpen = openCategories[cat.name];
                return (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
                    <button 
                      onClick={() => toggleCategory(cat.name)}
                      className={`w-full flex items-center justify-between p-4 text-left font-semibold text-sm transition-colors cursor-pointer border-none ${
                        isOpen ? 'text-purple-900 bg-purple-50/50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isOpen && <span className="w-1 h-5 bg-purple-700 rounded-full inline-block"></span>}
                        {cat.name}
                      </span>
                      <span className={`text-purple-700 transition-transform duration-300 text-xs ${isOpen ? 'transform rotate-180' : ''}`}>
                        ⌄
                      </span>
                    </button>

                    {isOpen && cat.subitems.length > 0 && (
                      <div className="px-4 py-3 space-y-2 bg-purple-50/20 border-t border-purple-100/50">
                        {cat.subitems.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleNavigation(sub.path)}
                            className="w-full text-left text-xs font-semibold text-purple-900 py-1.5 pl-3 border-l-2 border-purple-700 hover:bg-purple-100/50 transition-colors bg-transparent cursor-pointer block"
                          >
                            {sub.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Աջ կողմի աղյուսակ */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">
        Evoca Online Ավանդ

              </h2>


                <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-6 text-sm md:text-base">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-left text-xs md:text-sm">
      <thead>
        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
          <th className="p-3 font-semibold" rowSpan="2">Նվազագույն գումար և արժույթ</th>
          <th className="p-3 font-semibold" rowSpan="2">Տոկոսների վճարման եղանակը</th>
          <th className="p-3 font-semibold text-center border-l border-purple-100" colSpan="7">Ընդունման ժամկետներն ըստ օրերի քանակի</th>
        </tr>
        <tr className="bg-purple-50/50 text-purple-800 text-xs border-b border-purple-100">
          <th className="p-2 text-center border-l border-purple-100">31 - 90 օր</th>
          <th className="p-2 text-center">91 - 180 օր</th>
          <th className="p-2 text-center">181 - 270 օր</th>
          <th className="p-2 text-center">271 - 365 օր</th>
          <th className="p-2 text-center">366 - 549 օր</th>
          <th className="p-2 text-center">550 - 730 օր</th>
          <th className="p-2 text-center">731 - 1825 օր</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-gray-700">
        {/* 100,000 ՀՀ դրամ */}
        <tr>
          <td className="p-3 font-medium align-middle" rowSpan="3">100,000 ՀՀ դրամ</td>
          <td className="p-3">Տոկոսները ժամկետի վերջում վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100">4.50 %</td>
          <td className="p-3 text-center">6.00 %</td>
          <td className="p-3 text-center">7.00 %</td>
          <td className="p-3 text-center">8.00 %</td>
          <td className="p-3 text-center">9.75 %</td>
          <td className="p-3 text-center">10.25 %</td>
          <td className="p-3 text-center">10.75 %</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Ամսական տոկոսների վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">4.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">5.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">6.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">7.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">9.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">9.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">10.25 %</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Տոկոսները եռամսյա վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">-</td>
          <td className="p-3 text-center border-t border-gray-100">5.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">6.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">7.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">9.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">9.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">10.25 %</td>
        </tr>

        {/* 200 ԱՄՆ դոլար */}
        <tr className="border-t-2 border-purple-100">
          <td className="p-3 font-medium align-middle" rowSpan="3">200 ԱՄՆ դոլար</td>
          <td className="p-3">Տոկոսները ժամկետի վերջում վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100">0.75 %</td>
          <td className="p-3 text-center">2.00 %</td>
          <td className="p-3 text-center">2.50 %</td>
          <td className="p-3 text-center">3.00 %</td>
          <td className="p-3 text-center">4.25 %</td>
          <td className="p-3 text-center">4.75 %</td>
          <td className="p-3 text-center">5.25 %</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Ամսական տոկոսների վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">0.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">1.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">4.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">4.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">5.00 %</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Տոկոսները եռամսյա վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">-</td>
          <td className="p-3 text-center border-t border-gray-100">1.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">4.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">4.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">5.00 %</td>
        </tr>

        {/* 200 եվրո */}
        <tr className="border-t-2 border-purple-100">
          <td className="p-3 font-medium align-middle" rowSpan="3">200 եվրո</td>
          <td className="p-3">Տոկոսները ժամկետի վերջում վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100">0.35 %</td>
          <td className="p-3 text-center">1.00 %</td>
          <td className="p-3 text-center">1.50 %</td>
          <td className="p-3 text-center">1.75 %</td>
          <td className="p-3 text-center">2.25 %</td>
          <td className="p-3 text-center">2.75 %</td>
          <td className="p-3 text-center">3.25 %</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Ամսական տոկոսների վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">0.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">0.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">1.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">1.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">3.00 %</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Տոկոսները եռամսյա վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">-</td>
          <td className="p-3 text-center border-t border-gray-100">0.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">1.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">1.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">2.50 %</td>
          <td className="p-3 text-center border-t border-gray-100">3.00 %</td>
        </tr>

        {/* 30,000 ՌԴ Ռուբլի */}
        <tr className="border-t-2 border-purple-100">
          <td className="p-3 font-medium align-middle" rowSpan="3">30,000 ՌԴ Ռուբլի</td>
          <td className="p-3">Տոկոսները ժամկետի վերջում վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100">4.00 %</td>
          <td className="p-3 text-center">5.00 %</td>
          <td className="p-3 text-center">5.25 %</td>
          <td className="p-3 text-center">5.50 %</td>
          <td className="p-3 text-center">6.25 %</td>
          <td className="p-3 text-center">-</td>
          <td className="p-3 text-center">-</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Ամսական տոկոսների վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">3.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">4.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">5.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">5.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">6.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">-</td>
          <td className="p-3 text-center border-t border-gray-100">-</td>
        </tr>
        <tr>
          <td className="p-3 border-t border-gray-100">Տոկոսները եռամսյա վճարմամբ</td>
          <td className="p-3 text-center border-l border-gray-100 border-t border-gray-100">-</td>
          <td className="p-3 text-center border-t border-gray-100">4.75 %</td>
          <td className="p-3 text-center border-t border-gray-100">5.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">5.25 %</td>
          <td className="p-3 text-center border-t border-gray-100">6.00 %</td>
          <td className="p-3 text-center border-t border-gray-100">-</td>
          <td className="p-3 text-center border-t border-gray-100">-</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


              <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
                <table className="w-full text-left border-collapse text-sm text-gray-700">
                  <tbody>
                    {paymentCardsData.map((row) => (
                      <tr key={row.id} className="border-b border-purple-50 hover:bg-purple-50/10 transition-colors">
                        <td className="p-4 font-medium text-gray-500 w-16 text-center align-top border-r border-purple-50">
                          {row.id}.
                        </td>
                        <td className="p-4 font-semibold text-neutral-900 w-1/3 align-top border-r border-purple-50">
                          {row.title}
                        </td>
                        <td className="p-4 text-gray-700 align-top whitespace-pre-line">
                          {row.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
                  <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-8 text-sm md:text-base">
  <ol className="space-y-4 text-gray-700 leading-relaxed list-none">
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">1.</span>
      <span>Ավանդն ընդունվում է ֆիզիկական անձանցից <strong className="text-purple-900">բացառապես</strong> «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով[cite: 16]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">2.</span>
      <div>
        <span>Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք: Ավանդի համալրումները կարող են իրականացվել ինչպես Բանկի գործունեության վայրում, այնպես էլ «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով: Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 40,000 ՀՀ դրամից, 100 ԱՄՆ դոլարից, 100 եվրոյից կամ 10,000 ՌԴ ռուբլուց: Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել՝[cite: 16]</span>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>ՀՀ դրամի դեպքում Ավանդի ներդրման սկզբնական գումարի կրկնապատիկը[cite: 16]:</li>
          <li>ԱՄՆ դոլարի, եվրոյի և ՌԴ ռուբլու դեպքում Ավանդի ներդրման սկզբնական գումարը[cite: 16]:</li>
        </ul>
        <p className="mt-2">Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում[cite: 16]:</p>
      </div>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">3.</span>
      <span>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում[cite: 16]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">4.</span>
      <span>Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկը իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ հետևյալ դրույքաչափերով[cite: 16]:</span>
    </li>
  </ol>

  {/* Աղյուսակ */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-left">
      <thead>
        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
          <th className="p-3 font-semibold w-1/3">Ավանդի արժույթ</th>
          <th className="p-3 font-semibold text-center" colSpan="2">Տարեկան տոկոսադրույք ըստ ժամկետների</th>
        </tr>
        <tr className="bg-purple-50/50 text-purple-800 text-xs border-b border-purple-100">
          <th></th>
          <th className="p-2 text-center">Մինչև 365 օր</th>
          <th className="p-2 text-center">366 - 1825 օր</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-gray-700">
        <tr>
          <td className="p-3 font-medium">ՀՀ դրամ</td>
          <td className="p-3 text-center">0.5 %</td>
          <td className="p-3 text-center">8.5 %</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">ԱՄՆ դոլար</td>
          <td className="p-3 text-center">0.1 %</td>
          <td className="p-3 text-center">3.5 %</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">Եվրո</td>
          <td className="p-3 text-center">0.1 %</td>
          <td className="p-3 text-center">1.5 %</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">ՌԴ ռուբլի</td>
          <td className="p-3 text-center">0.1 %</td>
          <td className="p-3 text-center">5 %</td>
        </tr>
      </tbody>
    </table>
  </div>

  <ol className="space-y-4 text-gray-700 leading-relaxed list-none">
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">6.</span>
      <span>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում[cite: 16]:</span>
    </li>
  </ol>
</div>
                    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#1d2b36] space-y-8 text-sm md:text-base">
  <div className="space-y-4 pt-4 border-t border-gray-200">
    <h3 className="text-purple-900 font-bold text-base md:text-lg">Լրացուցիչ պայմաններ</h3>
    <ol className="space-y-4 text-gray-700 leading-relaxed list-none">
      <li className="flex items-start gap-3">
        <span className="text-purple-700 font-bold shrink-0">1.</span>
        <span>ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման[cite: 17]:</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-purple-700 font-bold shrink-0">2.</span>
        <span>Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի, սահմանվում է ստորև[cite: 17]:</span>
      </li>
    </ol>
  </div>

  {/* Աղյուսակ */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-left text-xs md:text-sm">
      <thead>
        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
          <th className="p-3 font-semibold">Ավանդի արժույթ/Քարտի տեսակ *</th>
          <th className="p-3 font-semibold">ArCa Classic/ Mastercard Standard/ Visa Classic</th>
          <th className="p-3 font-semibold">Mastercard Gold/Evoca Travel/Visa Platinum <br /><span className="text-xs font-normal text-gray-500">(ըստ հաճախորդի ընտրության)</span></th>
          <th className="p-3 font-semibold">VISA Infinite</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-gray-700">
        <tr>
          <td className="p-3 font-medium">ՀՀ դրամ</td>
          <td className="p-3">500,000 - 10,000,000 (ներառյալ)</td>
          <td className="p-3">10,000,000 - 40,000,000 (ներառյալ)</td>
          <td className="p-3">40,000,000 և ավել</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">ԱՄՆ դոլար</td>
          <td className="p-3">1,000 - 25,000 (ներառյալ)</td>
          <td className="p-3">25,000 - 100,000 (ներառյալ)</td>
          <td className="p-3">100,000 և ավել</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">Եվրո</td>
          <td className="p-3">1,000 - 20,000 (ներառյալ)</td>
          <td className="p-3">20,000 - 100,000 (ներառյալ)</td>
          <td className="p-3">100,000 և ավել</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">ՌԴ ռուբլի</td>
          <td className="p-3">60,000 - 3,000,000 (ներառյալ)</td>
          <td className="p-3">2,000,000 - 7,000,000 (ներառյալ)</td>
          <td className="p-3">7,000,000 և ավել</td>
        </tr>
      </tbody>
    </table>
  </div>

  <ul className="space-y-4 text-gray-700 leading-relaxed list-disc pl-5">
    <li>Քարտերը տրամադրվում են տվյալ քարտային պրոդուկտի համար հասանելի արժույթով ըստ հաճախորդի ցանկության[cite: 17]:</li>
    <li>Հաճախորդի ցանկությամբ վերջինիս ընտանիքի անդամներին (ծնողներ, ամուսին/կին, չափահաս երեխաներ) կարող է տրամադրվել նույն դասի քարտ 50% զեղչով՝ բացառությամբ Infinite քարտի[cite: 17]:</li>
    <li>Մեկ ավանդի շրջանակներում տրամադրվում է մեկ անվճար քարտ ավանդատուի անունով: Ավանդատուի կողմից 1-ից ավել ավանդներ ներդնելու դեպքում յուրաքանչյուր ավանդը դիտարկվում է առանձին[cite: 17]:</li>
    <li>Ավանդի ժամկետը լրանալու կամ ավանդատուի կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցնելու դեպքում, Ավանդի ներդրման դիմաց տրամադրված վճարային քարտի սպասարկումը շարունակվում է իրականացվել առանց տարեկան սպասարկման վճարի գանձման, մինչև վճարային քարտի սպասարկման ժամկետի ավարտը, բացառությամբ Ավանդի ներդրման դիմաց տրամադրված Visa Infinite վճարային քարտերի[cite: 17]:</li>
    <li>Visa Infinite վճարային քարտապանների կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցվելու կամ Ավանդի ժամկետը լրանալու դեպքում Բանկն իրավունք ունի փակել նաև այդ Ավանդի ներդրման դիմաց տրամադրված Visa Infiite վճարային քարտը կամ հաճախորդի ցանկության դեպքում սկսել կիրառել տվյալ պահին Բանկում գործող սակագները և դրույքները[cite: 17]:</li>
    <li>Տրամադրվող հասանելի քարտի դասը որոշվում է քարտի բացման պահին ավանդի գումարի չափով: Ավանդի համալրման դեպքում, եթե հաճախորդը ցանկանում է ավելի բարձր դասի քարտ, ապա գործող քարտը պետք է փակվի և բացվի նոր ավելի բարձր դասի քարտ[cite: 17]:</li>
    <li>
      Քարտի վերթողարկումը գործողության ժամկետը լրանալու կամ այլ պատճառով, իրականացվում է.
      <ul className="list-disc pl-5 mt-2 space-y-2">
        <li>Անվճար, եթե հաճախորդի ավանդը գործում է, կամ եթե վերթողարկման պահին հաճախորդի անունով գործում է համապատասխան սահմանաչափով այլ ավանդ, և որի շրջանակներում հաճախորդին արդեն չի տրամադրվել անվճար քարտ[cite: 17]:</li>
        <li>Բանկի կողմից մատուցվող ծառայությունների սակագներով, եթե ավանդի ժամկետը լրացել է և չի երկարաձգվել[cite: 17]:</li>
      </ul>
    </li>
    <li>Քարտերի սպասարկման այլ սակագները և պայմանները՝ համաձայն Բանկի կողմից մատուցվող ծառայությունների սակագների և պայմանների[cite: 17, 18]:</li>
  </ul>

  <div className="space-y-4 pt-4 border-t border-gray-200">
    <h3 className="text-purple-900 font-bold text-base md:text-lg">Ավանդի տարեկան տոկոսային եկամտաբերության չափը</h3>
    <p className="text-gray-700 leading-relaxed">
      Տարեկան տոկոսային եկամտաբերությունը ըստ ավանդատեսակների՝ հաշվարկված ՀՀ Կենտրոնական բանկի կողմից սահմանված կարգով, կարող եք ծանոթանալ ստորև՝[cite: 18]
    </p>
    <p className="text-xs text-gray-500 font-medium">
      ԱՏ - անվանական տոկոսադրույք<br />
      ՏՏԵ - տարեկան տոկոսային եկամտաբերություն[cite: 18]
    </p>
  </div>

  <div className="space-y-6">
    <h4 className="font-bold text-purple-900 text-sm md:text-base">EVOCA ONLINE ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ[cite: 18]</h4>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-left text-xs md:text-sm">
        <thead>
          <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
            <th className="p-3 font-semibold" rowSpan="2">Արժույթ</th>
            <th className="p-3 font-semibold text-center border-l border-purple-100" colSpan="2">31-90 օր</th>
            <th className="p-3 font-semibold text-center border-l border-purple-100" colSpan="2">91-180 օր</th>
            <th className="p-3 font-semibold text-center border-l border-purple-100" colSpan="2">181-270 օր</th>
          </tr>
          <tr className="bg-purple-50/50 text-purple-800 text-xs border-b border-purple-100">
            <th className="p-2 text-center border-l border-purple-100">Անվանական %-դրույք</th>
            <th className="p-2 text-center">Տարեկան %-ային եկամտաբերություն</th>
            <th className="p-2 text-center border-l border-purple-100">Անվանական %-դրույք</th>
            <th className="p-2 text-center">Տարեկան %-ային եկամտաբերություն</th>
            <th className="p-2 text-center border-l border-purple-100">Անվանական %-դրույք</th>
            <th className="p-2 text-center">Տարեկան %-ային եկամտաբերություն</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          <tr className="bg-purple-50/20 font-medium">
            <td className="p-3 text-purple-900" colSpan="7">Տոկոսների ամսական վճարման դեպքում[cite: 18]</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">AMD</td>
            <td className="p-3 text-center border-l border-gray-100">4.00%</td>
            <td className="p-3 text-center">4.07%</td>
            <td className="p-3 text-center border-l border-gray-100">5.50%</td>
            <td className="p-3 text-center">5.64%</td>
            <td className="p-3 text-center border-l border-gray-100">6.50%</td>
            <td className="p-3 text-center">6.70%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">USD</td>
            <td className="p-3 text-center border-l border-gray-100">0.50%</td>
            <td className="p-3 text-center">0.50%</td>
            <td className="p-3 text-center border-l border-gray-100">1.75%</td>
            <td className="p-3 text-center">1.76%</td>
            <td className="p-3 text-center border-l border-gray-100">2.25%</td>
            <td className="p-3 text-center">2.27%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">EUR</td>
            <td className="p-3 text-center border-l border-gray-100">0.25%</td>
            <td className="p-3 text-center">0.25%</td>
            <td className="p-3 text-center border-l border-gray-100">0.75%</td>
            <td className="p-3 text-center">0.75%</td>
            <td className="p-3 text-center border-l border-gray-100">1.25%</td>
            <td className="p-3 text-center">1.26%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">RUB</td>
            <td className="p-3 text-center border-l border-gray-100">3.75%</td>
            <td className="p-3 text-center">3.82%</td>
            <td className="p-3 text-center border-l border-gray-100">4.75%</td>
            <td className="p-3 text-center">4.85%</td>
            <td className="p-3 text-center border-l border-gray-100">5.00%</td>
            <td className="p-3 text-center">5.12%</td>
          </tr>

          <tr className="bg-purple-50/20 font-medium">
            <td className="p-3 text-purple-900" colSpan="7">Տոկոսների եռամսյակային վճարման դեպքում[cite: 18]</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">AMD</td>
            <td className="p-3 text-center border-l border-gray-100">-</td>
            <td className="p-3 text-center">-</td>
            <td className="p-3 text-center border-l border-gray-100">5.50%</td>
            <td className="p-3 text-center">5.61%</td>
            <td className="p-3 text-center border-l border-gray-100">6.50%</td>
            <td className="p-3 text-center">6.66%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">USD</td>
            <td className="p-3 text-center border-l border-gray-100">-</td>
            <td className="p-3 text-center">-</td>
            <td className="p-3 text-center border-l border-gray-100">1.75%</td>
            <td className="p-3 text-center">1.76%</td>
            <td className="p-3 text-center border-l border-gray-100">2.25%</td>
            <td className="p-3 text-center">2.27%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">EUR</td>
            <td className="p-3 text-center border-l border-gray-100">-</td>
            <td className="p-3 text-center">-</td>
            <td className="p-3 text-center border-l border-gray-100">0.75%</td>
            <td className="p-3 text-center">0.75%</td>
            <td className="p-3 text-center border-l border-gray-100">1.25%</td>
            <td className="p-3 text-center">1.26%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">RUB</td>
            <td className="p-3 text-center border-l border-gray-100">-</td>
            <td className="p-3 text-center">-</td>
            <td className="p-3 text-center border-l border-gray-100">4.75%</td>
            <td className="p-3 text-center">4.84%</td>
            <td className="p-3 text-center border-l border-gray-100">5.00%</td>
            <td className="p-3 text-center">5.09%</td>
          </tr>

          <tr className="bg-purple-50/20 font-medium">
            <td className="p-3 text-purple-900" colSpan="7">Տոկոսների տարեկան կամ ժամկետի վերջում վճարելու դեպքում[cite: 18]</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">AMD</td>
            <td className="p-3 text-center border-l border-gray-100">4.50%</td>
            <td className="p-3 text-center">4.50%</td>
            <td className="p-3 text-center border-l border-gray-100">6.00%</td>
            <td className="p-3 text-center">6.00%</td>
            <td className="p-3 text-center border-l border-gray-100">7.00%</td>
            <td className="p-3 text-center">7.00%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">USD</td>
            <td className="p-3 text-center border-l border-gray-100">0.75%</td>
            <td className="p-3 text-center">0.75%</td>
            <td className="p-3 text-center border-l border-gray-100">2.00%</td>
            <td className="p-3 text-center">2.00%</td>
            <td className="p-3 text-center border-l border-gray-100">2.50%</td>
            <td className="p-3 text-center">2.50%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">EUR</td>
            <td className="p-3 text-center border-l border-gray-100">0.35%</td>
            <td className="p-3 text-center">0.35%</td>
            <td className="p-3 text-center border-l border-gray-100">1.00%</td>
            <td className="p-3 text-center">1.00%</td>
            <td className="p-3 text-center border-l border-gray-100">1.50%</td>
            <td className="p-3 text-center">1.50%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">RUB</td>
            <td className="p-3 text-center border-l border-gray-100">4.00%</td>
            <td className="p-3 text-center">4.00%</td>
            <td className="p-3 text-center border-l border-gray-100">5.00%</td>
            <td className="p-3 text-center">5.00%</td>
            <td className="p-3 text-center border-l border-gray-100">5.25%</td>
            <td className="p-3 text-center">5.25%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
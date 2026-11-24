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
        Մանկական ավանդ


              </h2>

  {/* Առաջին աղյուսակ */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-left">
      <thead>
        <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
          <th className="p-3 font-semibold w-1/2">Նվազագույն գումար</th>
          <th className="p-3 font-semibold w-1/2">Տարեկան տոկոսադրույք</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-gray-700">
        <tr>
          <td className="p-3 font-medium">100,000 ՀՀ դրամ</td>
          <td className="p-3">9.5 %</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">250 ԱՄՆ դոլար</td>
          <td className="p-3">4.5 %</td>
        </tr>
      </tbody>
    </table>
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
      <span>Ավանդն ընդունվում է ֆիզիկական անձանցից, հօգուտ երեխաների Ավանդ ներդնելու պայմանով՝ 2 տարուց մինչև երեխայի 18 տարին լրանալը[cite: 18]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">2.</span>
      <span>Որպես ավանդատու կարող են հանդես գալ ինչպես երեխաների օրինական ներկայացուցիչները (ծնողները, խግամակալները), այնպես էլ երրորդ անձիք[cite: 18]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">3.</span>
      <span>Տոկոսագումարների վճարումը կամ կապիտալացումը իրականացվում է ամենամսյա պարբերականությամբ[cite: 18]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">4.</span>
      <span>Ավանդը կարող է համալրվել (ավելացվել) սկսած նվազագույնը 40,000 ՀՀ դրամից կամ 100 ԱՄՆ դոլարից: Մեկ ամսվա ընթացքում համալրումների ընդհանուր գումարը 5,000,000 ՀՀ դրամը կամ 10,000 ԱՄՆ դոլարը գերազանցելու դեպքում անհրաժեշտ է Բանկի Վարչության որոշումը: Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում[cite: 18]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">5.</span>
      <span>Հօգուտ երեխաների բացված ժամկետային ավանդները տնօրինվում են երեխայի օրինական ներկայացուցիչների կամ երրորդ անձանց կողմից, օրենքով նախատեսված դեպքերում մինչև երեխայի 18 տարին լրանալը[cite: 18]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">6.</span>
      <span>Կնքման օրից սկսած 2 տարվա ընթացքում պայմանագիրը դադարեցնելու դեպքում իրականացվում է Ավանդի տոկոսագումարների վերահաշվարկ ՀՀ դրամում 0.5%, ԱՄՆ դոլարը 0.1% տարեկան տոկոսադրույքով: 2 տարին լրանալուց հետո պահպանվում են մինչև վերջին կապիտալացումը (վճարումը) հաշվարկված տոկոսագումարները, իսկ դրանից հետո ընկած ժամանակահատվածի համար կատարվում է տոկոսագումարների վերահաշվարկ ՀՀ դրամ 0.5%, ԱՄՆ դոլար 0.1% տարեկան տոկոսադրույքով[cite: 18]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">7.</span>
      <span>Պայմանագրի կնքման օրվանից 2 տարի հետո և այնուհետև յուրաքանչյուր հաջորդ տարի Ավանդի տոկոսադրույքը վերանայվում է՝ հիմք ընդունելով վերանայման պահին Բանկում գործող «Դասական» Ավանդատեսակի 366 օր ժամկետի համար սահմանված համապատասխան արժույթի տոկոսադրույքը[cite: 18]:</span>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-purple-700 font-bold shrink-0">8.</span>
      <span>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում[cite: 18]:</span>
    </li>
  </ol>

  <div className="space-y-4 pt-4 border-t border-gray-200">
    <h3 className="text-purple-900 font-bold text-base md:text-lg">Լրացուցիչ պայմաններ</h3>
    <ol className="space-y-4 text-gray-700 leading-relaxed list-none">
      <li className="flex items-start gap-3">
        <span className="text-purple-700 font-bold shrink-0">1.</span>
        <span>ՀՀ ռեզիդենտ հանդիսացող ավանդատուի ցանկության դեպքում Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման[cite: 18]:</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-purple-700 font-bold shrink-0">2.</span>
        <span>Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի, սահմանվում է ստորև[cite: 18]:</span>
      </li>
    </ol>
  </div>

  {/* Երկրորդ աղյուսակ */}
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
    <li>Քարտերը տրամադրվում են տվյալ քարտային պրոդուկտի համար հասանելի արժույթով ըստ հաճախորդի ցանկության[cite: 18, 19]:</li>
    <li>Հաճախորդի ցանկությամբ վերջինիս ընտանիքի անդամներին (ծնողներ, ամուսին/կին, չափահաս երեխաներ) կարող է տրամադրվել նույն դասի քարտ 50% զեղչով՝ բացառությամբ Infinite քարտի[cite: 19]:</li>
    <li>Մեկ ավանդի շրջանակներում տրամադրվում է մեկ անվճար քարտ ավանդատուի անունով: Ավանդատուի կողմից 1-ից ավել ավանդներ ներդնելու դեպքում յուրաքանչյուր ավանդը դիտարկվում է առանձին[cite: 19]:</li>
    <li>Ավանդի ժամկետը լրանալու կամ ավանդատուի կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցնելու դեպքում, Ավանդի ներդրման դիմաց տրամադրված վճարային քարտի սպասարկումը շարունակվում է իրականացվել առանց տարեկան սպասարկման վճարի գանձման, մինչև վճարային քարտի սպասարկման ժամկետի ավարտը, բացառությամբ Ավանդի ներդրման դիմաց տրամադրված Visa Infinite վճարային քարտերի[cite: 19]:</li>
    <li>Visa Infinite վճարային քարտապանների կողմից Ավանդի պայմանագիրը ժամկետից շուտ դադարեցվելու կամ Ավանդի ժամկետը լրանալու դեպքում Բանկն իրավունք ունի փակել նաև այդ Ավանդի ներդրման դիմաց տրամադրված Visa Infiite վճարային քարտը կամ հաճախորդի ցանկության դեպքում սկսել կիրառել տվյալ պահին Բանկում գործող սակագները և դրույքները[cite: 19]:</li>
    <li>Տրամադրվող հասանելի քարտի դասը որոշվում է քարտի բացման պահին ավանդի գումարի չափով: Ավանդի համալրման դեպքում, եթե հաճախորդը ցանկանում է ավելի բարձր դասի քարտ, ապա գործող քարտը պետք է փակվի և բացվի նոր ավելի բարձր դասի քարտ[cite: 19]:</li>
    <li>
      Քարտի վերթողարկումը գործողության ժամկետը լրանալու կամ այլ պատճառով, իրականացվում է.
      <ul className="list-disc pl-5 mt-2 space-y-2">
        <li>Անվճար, եթե հաճախորդի ավանդը գործում է, կամ եթե վերթողարկման պահին հաճախորդի անունով գործում է համապատասխան սահմանաչափով այլ ավանդ, և որի շրջանակներում հաճախորդին արդեն չի տրամադրվել անվճար քարտ[cite: 19]:</li>
        <li>Բանկի կողմից մատուցվող ծառայությունների սակագներով, եթե ավանդի ժամկետը լրացել է և չի երկարաձգվել[cite: 19]:</li>
      </ul>
    </li>
    <li>Քարտերի սպասարկման այլ սակագները և պայմանները՝ համաձայն Բանկի կողմից մատուցվող ծառայությունների սակագների և պայմանների[cite: 19]:</li>
  </ul>

  <div className="space-y-4 pt-4 border-t border-gray-200">
    <h3 className="text-purple-900 font-bold text-base md:text-lg">Ավանդի տարեկան տոկոսային եկամտաբերության չափը</h3>
    <p className="text-gray-700 leading-relaxed">
      Տարեկան տոկոսային եկամտաբերությունը ըստ ավանդատեսակների՝ հաշվարկված ՀՀ Կենտրոնական բանկի կողմից սահմանված կարգով, կարող եք ծանոթանալ ստորև՝[cite: 19]
    </p>
    <p className="text-xs text-gray-500 font-medium">
      ԱՏ - անվանական տոկոսադրույք<br />
      ՏՏԵ - տարեկան տոկոսային եկամտաբերություն[cite: 19]
    </p>
  </div>

  <div className="space-y-6">
    <h4 className="font-bold text-purple-900 text-sm md:text-base">ՄԱՆԿԱԿԱՆ ԱՎԱՆԴԱՏԵՍԱԿԻ ՏԱՐԵԿԱՆ ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆ[cite: 19]</h4>

    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-left text-xs md:text-sm">
        <thead>
          <tr className="bg-purple-50 text-purple-900 border-b border-purple-100">
            <th className="p-3 font-semibold">Արժույթ</th>
            <th className="p-3 font-semibold">ԱՏ</th>
            <th className="p-3 font-semibold">ՏՏԵ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          <tr>
            <td className="p-3 font-medium">ՀՀ դրամ</td>
            <td className="p-3">9.50%</td>
            <td className="p-3">9.50%</td>
          </tr>
          <tr>
            <td className="p-3 font-medium">ԱՄՆ դոլար</td>
            <td className="p-3">4.50%</td>
            <td className="p-3">4.50%</td>
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
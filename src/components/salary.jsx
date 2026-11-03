import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

export default function EvocaSalary() {
  // Սթեյթ՝ բացված հարցերի ինդեքսները պահելու համար (null-ի դեպքում բոլորը փակ են)
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:",
      answer: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից:"
    },
    {
      question: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:",
      answer: "Ո՛չ: Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին:"
    },
    {
      question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:",
      answer: "Իհարկե: Եթե դեռ Evoca-ի հաճախորդ չես, դու նույնպես կարողես միանալ Evoca աշխատավարձային նախագծին:"
    },
    {
      question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:",
      answer: "Արտոնություններից կարողես օգտվել այն պահից, երբ առաջին աշխատավարձը փոխանցվի Evocabank-ի քարտին։\n\nՔարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարողես օգտվել աշխատավարձը Բանկի քարտին մեկ անգամ ստանալուց հետո:"
    },
    {
      question: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:",
      answer: "Այ՛ո, կարողես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարողես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարողես ձեռք բերել 50% զեղչով:"
    },
    {
      question: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:",
      answer: "Միանալու համար կարողես՝\n• Զանգահարել +37410605555 | 8444 հեռախոսահամարներով\n• Այցելել Evocabank-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Գլխավոր հեդրը */}
      <Header />

      {/* 1. Վերևի մեծ բաց բլոկը (Hero section) */}
      <div className="w-full bg-gradient-to-b from-purple-50/75 to-white py-8 sm:py-12 lg:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Ձախ կողմի վերնագիր և նկարագրություն */}
          <div className="max-w-xl space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              EVOCA <br />
              ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ <br />
              ՆԱԽԱԳԻԾ
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։ <br />
              Պարզապես պետք է ընտրել Evocabank-ը։
            </p>
          </div>

          {/* Աջ կողմի նկարը */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
              <img 
                src="	https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
                alt="Evoca Salary Project" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. Հացի փշրանքներ (Breadcrumbs) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6">
        <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-2">
          <button className="flex items-center space-x-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all cursor-pointer shadow-sm">
            <span>← Վերադառնալ</span>
          </button>
          <span className="text-gray-300">/</span>
          <span>Անհատներ</span>
          <span className="text-gray-300">/</span>
          <span className="text-purple-700 font-semibold">EvocaSALARY</span>
        </div>
      </div>

      {/* 3. Հիմնական բովանդակություն */}
      <main className="flex-grow w-full py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Ներածական նկարագրություն */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուից բացի, ցանկանում են նաև ստանալ <span className="text-purple-700 font-semibold">նոր հնարավորություններ ու առավելություններ</span>:
            </p>
          </div>

          {/* Բլոկ 1. Mastercard Gold */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
              Բեր աշխատավարձդ Evoca, տար անվճար <span className="underline decoration-purple-400 cursor-pointer hover:text-purple-900">Mastercard Gold</span>
            </h2>
            <ul className="space-y-3 text-gray-700 pt-2">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Պրեմիում դասի քարտ</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Հասանելի ամբողջ աշխարհում</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Գումարի անվտանգության բարձր մակարդակ</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Դրական մնացորդի նկատմամբ <strong className="text-purple-700">2% տարեկան տոկոսադրույք</strong></span>
              </li>
            </ul>
          </div>

          {/* Բլոկ 2. Evoca Travel Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
              Բեր աշխատավարձդ Evoca, տար 50% զեղչով <span className="underline decoration-purple-400 cursor-pointer hover:text-purple-900">Evoca Travel Card</span>
            </h2>
            <ul className="space-y-3 text-gray-700 pt-2">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Մինչև <strong className="text-purple-700">1.5% cashback</strong> արտասահմանում իրականացրած վճարումների համար</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Անվճար <strong className="text-purple-700">6 մուտք</strong> Lounge Key սրահներ քեզ և հյուրերիդ համար</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Անվճար <strong className="text-purple-700">6 անգամ</strong> Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Այլ ճամփորդական առավելություններ</span>
              </li>
            </ul>
          </div>

          {/* Բլոկ 3. Evoca Benefits */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
              Բեր աշխատավարձդ Evoca, տար մի շարք <span className="underline decoration-purple-400 cursor-pointer hover:text-purple-900">բենեֆիթներ</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <strong className="text-purple-700">Evoca Benefits</strong> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
            </p>
            <ul className="space-y-3 text-gray-700 pt-2">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Մինչև <strong className="text-purple-700">25% զեղչ</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Մինչև <strong className="text-purple-700">25% cashback</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                <span>Նվեր քարտեր</span>
              </li>
            </ul>
          </div>

          {/* Բլոկ 4. Վարկեր և Օվերդրաֆտ */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
              Բեր աշխատավարձդ Evoca, տար ավելի ցածր տոկոսադրույքով վարկեր
            </h2>

            {/* Ենթաբաժին - Օվերդրաֆտ */}
            <div className="space-y-3 pt-2 border-t border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-purple-700 underline decoration-purple-300 cursor-pointer">
                Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ
              </h3>
              <ul className="space-y-3 text-gray-700 pt-2">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Մինչև աշխատավարձի <strong className="text-purple-700">15-ապատիկի չափով</strong></span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Մինչև <strong className="text-purple-700">10 մլն դրամ</strong> գումար</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Մինչև <strong className="text-purple-700">60 ամիս</strong> մարման ժամկետ</span>
                </li>
              </ul>
            </div>

            {/* Ենթաբաժին - Ավտովարկ */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-purple-700">
                Ավտովարկ
              </h3>
              <ul className="space-y-3 text-gray-700 pt-2">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span><strong className="text-purple-700">0.5-ով ցածր</strong> տոկոսադրույք</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Մինչև <strong className="text-purple-700">50 մլն դրամ</strong> գումար</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Մինչև <strong className="text-purple-700">84 ամիս</strong> մարման ժամկետ</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</span>
                </li>
              </ul>
            </div>

            {/* Ենթաբաժին - Անշարժ գույքի գրավով սպառողական վարկ */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-purple-700">
                Անշարժ գույքի գրավով սպառողական վարկ
              </h3>
              <ul className="space-y-3 text-gray-700 pt-2">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span><strong className="text-purple-700">0.5-ով ցածր</strong> տոկոսադրույք</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Մինչև <strong className="text-purple-700">100 մլն դրամ</strong> գումար</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>Մինչև <strong className="text-purple-700">120 ամիս</strong> մարման ժամկետ</span>
                </li>
              </ul>
            </div>

          </div>

          {/* 5. Վերջին նորությունները բլոկ (Այժմ վերևում) */}
          <div className="w-full space-y-8 pt-4">
            
            {/* Վերնագիր և «Բոլոր նորությունները» կոճակ */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
                Վերջին նորությունները
              </h2>
              
              <a 
                href="/all-news" 
                className="inline-flex items-center space-x-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-sm text-sm sm:text-base group"
              >
                <span>Բոլոր նորությունները</span>
                <span className="transform group-hover:translate-x-1 transition-transform">›</span>
              </a>
            </div>

            {/* Քարտերի ցանցը (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Քարտ 1 */}
              <a 
                href="/dilijan-we-are-coming" 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img 
                    src="	https://www.evoca.am/images-cache/news/1/17891134831451/439x320.png" 
                    alt="Դիլիջան, մենք գալիս ենք" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
                    Մնացել է 1
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider">
                      Կենսակերպ
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                      Դիլիջան, մենք գալիս ենք
                    </h3>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    11.09.2026
                  </div>
                </div>
              </a>

              {/* Քարտ 2 */}
              <a 
                href="/news/evocabank-retro-fest-partner" 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17884237814941/439x320.png" 
                    alt="Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider">
                      Կենսակերպ
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                      Evocabank-ը՝ Retro Fest-ի ֆինանսական գործընկեր
                    </h3>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    03.09.2026
                  </div>
                </div>
              </a>

              {/* Քարտ 3 */}
              <a 
                href="/news/back-to-school-cashback" 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img 
                    src="https://www.evoca.am/images-cache/news/1/17873217684586/439x320.png" 
                    alt="Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-bold text-purple-700 uppercase tracking-wider">
                      Պրոդուկտներ
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                      Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
                    </h3>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    21.08.2026
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* 6. Հաճախ տրվող հարցեր (FAQ Accordion - Այժմ ներքևում) */}
          <div className="w-full space-y-6 pt-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
              Հաճախ տրվող հարցեր
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className={`transition-all duration-300 rounded-2xl border ${
                      isOpen 
                        ? 'border-purple-600 shadow-md bg-white' 
                        : 'border-purple-200/60 bg-white hover:border-purple-400 shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                    >
                      <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-purple-700' : 'text-gray-900'}`}>
                        {faq.question}
                      </span>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-purple-100 text-purple-700 rotate-180' : 'bg-purple-50 text-purple-600'}`}>
                        {isOpen ? 'ᐱ' : 'ᐯ'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      {/* Ֆուտերը */}
      <Footer />
    </div>
  );
}
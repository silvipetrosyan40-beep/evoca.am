import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function AdidasNews() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      {/* Հեդրը (Header) */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        
        {/* Վերադառնալ կոճակ և Հացի փշրանքներ (Breadcrumbs) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            to="/all-news"
            className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl transition-colors font-medium text-sm w-fit"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>Վերադառնալ</span>
          </Link>

          <nav className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <span>/</span>
            <Link to="/all-news" className="hover:text-gray-900 transition-colors">Նորություններ</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Պրոդուկտներ</span>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">Evoca Visa պրեմիում քարտեր. ճամփորդիր առանց սահմանների
</span>
          </nav>
        </div>

        {/* Վերնագրի և բաների հատված */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100">
          <div className="space-y-6">
             <Link 
  to="/news/products" 
  className="flex items-center space-x-3 group cursor-pointer w-fit"
>
  <span className="w-5 h-4 bg-fuchsia-500 inline-block rounded-xs transition-transform group-hover:scale-110"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-purple-700 transition-colors">
    Պրոդուկտներ
  </span>
</Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
Evoca Visa պրեմիում քարտեր. ճամփորդիր առանց սահմանների
    </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Անվճար բիզնես սրահներ, Fast Track, զեղչեր հյուրանոցներում, անվճար կայանատեղի, ինտերնետ-ռոումինգ․ քո լավագույն ճամփորդությունը Evoca-ի հետ։


            </p>
            <div className="text-sm font-semibold text-gray-400">
12.02.2025
            </div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/17393570102872/780x585.png" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Վճարիր Evoca Visa պրեմիում քարտերով և ունեցիր ավելի հարմարավետ, արագ ու շքեղ ճանապարհորդություն[cite: 17]:
  </p>

  <p>
    Ճամփորդելիս կարևորը ոչ միայն ուղղությունն է, այլև ընթացքը: Իսկ եթե այդ ընթացքը կարող է լինել առանց հերթերի, առանց անհանգստության և լի արտոնություններով, ինչո՞ւ չօգտվել այդ հնարավորությունից: Մեր նոր առաջարկը Evoca Visa պրեմիում քարտապաններին կտա բացառիկ ճանապարհորդական առավելություններ[cite: 17]:
  </p>

  <h3 className="text-xl font-bold text-purple-700 pt-2">
    Ի՞նչ առավելություններ են սպասում Evoca Visa Premium քարտապաններին
  </h3>

  <div className="space-y-4 pt-2">
    <h4 className="font-bold text-purple-700 text-lg">
      ✈️ Fast Track ծառայություն Zvartnots օդանավակայանում
    </h4>
    <p>
      ➡️ Հերթերը թողե՛ք անցյալում: Ծառայությունից օգտվելու համար մուտք գործեք Visa Concierge չատբոտ, սեղմեք Fast Track Zvartnots կոճակը: Այնուհետև լրացրեք անհրաժեշտ մանրամասները և ստացեք PDF ֆայլ QR կոդով[cite: 17]:
    </p>
    <p>
      Առաջարկը հասանելի է՝
    </p>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>Evoca Visa Infinite քարտապանի համար՝ տարեկան 6 անգամ[cite: 17]</li>
    </ul>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 31.12.2025-ը[cite: 17]:
    </p>
  </div>

  <div className="space-y-4 pt-4">
    <h4 className="font-bold text-purple-700 text-lg">
      🧳 Անվճար մուտք 1200+ բիզնես սրահներ ամբողջ աշխարհում
    </h4>
    <p>
      ➡️ Վայելե՛ք հանգիստ միջավայր, անվճար Wi-Fi և հարմարավետ սպասարկում մինչև թռիչքը[cite: 17]:
    </p>
    <p>
      Առաջարկը հասանելի է՝
    </p>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>Evoca Visa Infinite քարտապանի համար՝ տարեկան 6 անվճար այցելություն[cite: 17]</li>
    </ul>
    <p>
      Իսկ անսահմանափակ անվճար մուտք ունենալու համար հարկավոր է նախորդ 12 ամսվա ընթացքում կատարել առնվազն $400 կամ համարժեք արտարժույթի անկանխիկ վճարումներ[cite: 17]:
    </p>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 31.12.2025-ը[cite: 17]:
    </p>
  </div>

  <div className="space-y-4 pt-4">
    <h4 className="font-bold text-purple-700 text-lg">
      🚗 Անվճար կայանատեղի Zvartnots օդանավակայանում
    </h4>
    <p>
      ➡️ Կայանե՛ք մեքենան անվճար Visa Concierge չատբոտի միջոցով[cite: 17]:
    </p>
    <p>
      Առաջարկը հասանելի է՝
    </p>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>Evoca Visa Infinite քարտապանի համար՝ ցանկացած փաթեթ տարվա ընթացքում 3 անգամ[cite: 17]</li>
    </ul>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 31.12.2025-ը[cite: 17]:
    </p>
  </div>

  <div className="space-y-4 pt-4">
    <h4 className="font-bold text-purple-700 text-lg">
      🎁 Մինչև 12% զեղչ Agoda.com-ում և 8% զեղչ Booking.com-ում
    </h4>
    <p>
      ➡️ Ամրագրե՛ք լավագույն հյուրանոցներն ու բնակարանները՝ խնայելով գումար[cite: 17]:
    </p>
    <p className="font-semibold text-gray-800">
      Ինչպես՝
    </p>
    <p>
      Ամրագրեք հյուրանոցի համար կամ վարձակալեք բնակարան Agoda.com կայքում, վճարեք Visa պրեմիում քարտով և ստացեք մինչև 12% զեղչ[cite: 17]:
    </p>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 14.06.2025-ը[cite: 17]:
    </p>
    <p>
      Կատարեք սենյակի ամրագրում Booking.com կայքում Visa պրեմիում քարտերով և ստացեք մինչև 8% զեղչ: Անհրաժեշտ է այցելել Booking.com կայք, ընտրել «Instant Reward» նշանով հյուրանոցը և օգտագործել VISABKNG պրոմոկոդը[cite: 18]:
    </p>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 31.03.2025-ը[cite: 18]:
    </p>
  </div>

  <div className="space-y-4 pt-4">
    <h4 className="font-bold text-purple-700 text-lg">
      🚗 Մինչև 15% զեղչ SIXT մեքենաների վարձույթի համար
    </h4>
    <p>
      ➡️ Ճամփորդեք ձեր նախընտրած մեքենայով ավելի հարմարավետ ու շահավետ պայմաններով[cite: 18]:
    </p>
    <p>
      Առաջարկից օգտվելու համար՝
    </p>
    <ul className="list-disc pl-6 space-y-1 text-gray-700">
      <li>Մուտք գործեք SIXT ծառայության համապատասխան էջ[cite: 18]</li>
      <li>Ընտրեք ձեր նախընտրած մեքենան[cite: 18]</li>
      <li>Զեղչը կկիրառվի ավտոմատ կերպով[cite: 18]</li>
    </ul>
    <p>
      Առաջարկը հասանելի է՝ Evoca Visa Infinite (Consumer & Business) քարտապանի համար՝ մինչև 15% զեղչ, SIXT պلاتինե կարգավիճակ, 10% զեղչ՝ նախապես ամրագրված ուղղությունների համար[cite: 18]:
    </p>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 25.10.2025-ը[cite: 18]:
    </p>
  </div>

  <div className="space-y-4 pt-4">
    <h4 className="font-bold text-purple-700 text-lg">
      📶 Անվճար 500 MB ռոումինգ Ucom և Team Telecom-ից
    </h4>
    <p>
      ➡️ Մնացեք կապի մեջ՝ անկախ գտնվելու վայրից[cite: 18]:
    </p>
    <p>
      Ucom ինտերնետ-ռոումինգ փաթեթն ակտիվացնելու համար անհրաժեշտ է 1080 կարճ համարին ուղարկել SMS հաղորդագրություն՝ նշելով պրոմոկոդը, որը ստացել եք Visa Concierge չատբոտի միջոցով[cite: 18]:
    </p>
    <p>
      Team Telecom ինտերնետ-ռոումինգ փաթեթն ակտիվացնելու համար անհրաժեշտ է գրանցվել Visa Concierge չատբոտում, սեղմել Visa Roaming կոճակը, հետևել հրահանգներին և ստանալ պրոմոկոդ[cite: 18]:
    </p>
    <p>
      Առաջարկը հասանելի է՝ Evoca Visa Infinite քարտապանի համար՝ տարեկան 6 անգամ[cite: 18]:
    </p>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 30.09.2025-ը[cite: 18]:
    </p>
  </div>

  <div className="space-y-4 pt-4">
    <h4 className="font-bold text-purple-700 text-lg">
      🚖 1,000 դրամ զեղչ gg-ի միջոցով Zvartnots-Երևան ուղևորությունների համար
    </h4>
    <p>
      ➡️ Ուղևորվեք օդանավակայանից Երևան ավելի մատչելի[cite: 18]:
    </p>
    <p>
      Վճարեք gg հավելվածում Evoca Visa պրեմիում քարտերով և ստացեք 1,000 դրամ զեղչ Zvartnots օդանավակայանից դեպի Երևան ցանկացած ուղևորության համար[cite: 18]:
    </p>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 31.03.2025-ը[cite: 18]:
    </p>
  </div>

  <div className="space-y-4 pt-4">
    <h4 className="font-bold text-purple-700 text-lg">
      📦 Ուղեբեռի անվճար փաթեթավորում
    </h4>
    <p>
      ➡️ Ձեր ուղեբեռը ապահով կերպով պատրաստ կլինի թռիչքին[cite: 18]:
    </p>
    <p>
      Ներկայացրեք ձեր Visa Infinite քարտը Zvartnots միջազգային օդանավակայանում և ստացեք ուղեբեռի անվճար փաթեթավորում[cite: 19]:
    </p>
    <p>
      Առաջարկը հասանելի է՝ Evoca Visa Infinite քարտապանի համար՝ 10 անգամ[cite: 19]:
    </p>
    <p className="text-sm text-gray-500">
      Առաջարկը գործում է մինչև 31.12.2025-ը[cite: 19]:
    </p>
  </div>

  <h3 className="text-xl font-bold text-purple-700 pt-4">
    🛈 Ինչպե՞ս օգտվել այս արտոնություններից
  </h3>

  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>✔️ Ներբեռնեք և ակտիվացրեք <a href="#" className="text-purple-700 font-bold underline hover:text-purple-950 transition-colors">Visa Airport Companion</a> հավելվածը[cite: 19]</li>
    <li>✔️ Կատարեք վճարումներ Evoca Visa Premium քարտերով[cite: 19]</li>
    <li>✔️ Ստացեք VIP ծառայությունների հասանելիություն և վայելեք Ձեր անմոռանալի ճանապարհորդությունը[cite: 19]</li>
  </ul>

  <p className="pt-2">
    Եթե դեռ չունեք <a href="#" className="text-purple-700 font-bold underline hover:text-purple-950 transition-colors">Evoca Visa պրեմիում քարտ</a>, սա հիանալի առիթ է ձեռք բերելու համար[cite: 19]:
  </p>

  <p className="pt-2">
    📍 Այցելեք <a href="#" className="text-purple-700 font-bold underline hover:text-purple-950 transition-colors">Evocabank-ի ցանկացած մասնաճյուղ</a> կամ դիմեք օնլայն՝ պրեմիում քարտապան դառնալու համար[cite: 19]:
  </p>
</article>

      {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901528701371/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">23.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/back-to-school-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17873217684586/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Դեպի նոր ուսումնական տարի՝ մինչև 23% cashback-ով
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.08.2026</span>
              </div>
            </Link>

          </div>
        </div>
      </main>

      {/* Ֆութերը (Footer) */}
      <Footer />
    </div>
  );
}
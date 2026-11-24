import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { Home, ArrowLeft } from 'lucide-react';

export default function EvocaDigitalCardsPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Հեդեր */}
        <Header />

        {/* Հիմնական բովանդակություն */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          
          {/* Վերադարձ և Հացի փխուրներ (Breadcrumbs) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-sm border border-gray-200 transition-colors w-fit cursor-pointer font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Վերադառնալ</span>
            </button>

            <div className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
              <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center shrink-0">
                <Home className="w-4 h-4" />
              </button>
              <span>›</span>
              <button onClick={() => handleNavigation('/news')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Նորություններ</button>
              <span>›</span>
              <button onClick={() => handleNavigation('/news/lifestyle')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Կենսակերպ</button>
              <span>›</span>
              <span className="text-gray-800 font-medium shrink-0">Վիճակահանության շահողները





</span>
            </div>
          </div>

          {/* Վերնագրային բլոկ (Hero Section) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
            <Link to="/news/lifestyle" className="flex items-center space-x-2 group w-fit no-underline">
  <span className="w-4 h-2.5 bg-[#84cc16] rounded-sm inline-block"></span>
  <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Կենսակերպ</span>
</Link>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
Վիճակահանության շահողները

              </h1>

                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Շնորհավորում ենք բոլոր հաղթողներին: Հաղթողներն իրենց ուղեկիցների հետ, անձնագրերով պետք է նոյեմբերի 2-3, 10:00-18:00 մոտենան Evocabank` Հանրապետության 44/2:
















         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
02.11.2017
</div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/16120697439682/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Column 1 */}
    <div className="space-y-1">
      {[
        { name: "Փարաջանյան Նունե Մարատի", code: "6431" },
        { name: "Լիլիա Դավթյան", code: "1276" },
        { name: "Մովսես Ստեփանյան", code: "6671" },
        { name: "Սեդրակյան Հռիփսիմե", code: "8941" },
        { name: "Տիգրան Խուդավերդյան", code: "0556" },
        { name: "Բաբայան Արտակ", code: "6580" },
        { name: "Խալաֆյան Արտուշ", code: "8370" },
        { name: "Արտաշես Հարությունյան", code: "6457" },
        { name: "Թերզիյան Տիգրան", code: "6473" },
        { name: "Մարիտա Բաղդասարովա", code: "2455" },
        { name: "Հասմիկ Խալաթյան", code: "8057" },
        { name: "Գոհար Ավետիսյան", code: "9147" },
        { name: "Դավիթ Մամյան", code: "0757" },
        { name: "Առաքելյան Անահիտ", code: "8792" },
        { name: "Ալեքսանդր Գարգալոյան", code: "2513" },
        { name: "Աղաջանյան Լևոն Գագիկի", code: "0963" },
        { name: "Մնացականյան Մնացական", code: "6556" },
        { name: "Անահիտ Գրիգորյան", code: "1359" },
        { name: "Վահագն Համայակյան", code: "6341" },
        { name: "Արմեն Մարտիրոսյան", code: "7588" },
        { name: "Մելիքջանյան Վարդուհի", code: "4741" },
        { name: "Բարսեղյան Կարեն", code: "0648" },
        { name: "Մարիաննա Գասպարյան", code: "3081" },
        { name: "Վռամ Հարությունյան", code: "4196" },
        { name: "Սյուզաննա Եղիազարյան", code: "3397" },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`flex justify-between items-center px-3 py-1.5 rounded-lg text-sm ${
            idx % 2 === 0 ? "bg-purple-200/70" : "bg-purple-50/70"
          }`}
        >
          <span className="text-gray-900 font-medium">{item.name}</span>
          <span className="text-purple-700 font-semibold">{item.code}</span>
        </div>
      ))}
    </div>

    {/* Column 2 */}
    <div className="space-y-1">
      {[
        { name: "Զաքարյան Արման", code: "4022" },
        { name: "Մանուկ Հովհաննիսյան", code: "3685" },
        { name: "Պավլիաշվիլի Մակա", code: "8617" },
        { name: "Իրինա Հակոբյան", code: "8338" },
        { name: "Աննա Պետրոսյան", code: "3850" },
        { name: "Վալերիկ Մանուչարյան", code: "7174" },
        { name: "Հասմիկ Ջիլավյան", code: "4279" },
        { name: "Ղուկասյան Էդուարդ", code: "3701" },
        { name: "Աննա Դիլբարյան", code: "5235" },
        { name: "Անուշ Աղաջանյան", code: "6473" },
        { name: "Հռիփսիմե Ավետիսյան", code: "9337" },
        { name: "Սիրվարդ Խաչատրյան", code: "3834" },
        { name: "Սարգիս Խաչատրյան", code: "2208" },
        { name: "Էմմա Սողոմոնյան", code: "1441" },
        { name: "Պողոսյան Աստղիկ Վիկտորի", code: "0062" },
        { name: "Լևոն Սարգսյան", code: "8641" },
        { name: "Ավետիքյան Աստղիկ", code: "8982" },
        { name: "Էդվարդ Հարությունյան", code: "9857" },
        { name: "Արմինե Համբարձումյան", code: "5417" },
        { name: "Ռուսլան Ավետիսյան", code: "9220" },
        { name: "Լաուրա Կարապետյան", code: "5466" },
        { name: "Նունե Մկրտչյան", code: "4981" },
        { name: "Սուսաննա Սաֆարյան", code: "5186" },
        { name: "Արսեն Հարությունյան", code: "3660" },
        { name: "Հայկ Սաֆարյան", code: "0283" },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`flex justify-between items-center px-3 py-1.5 rounded-lg text-sm ${
            idx % 2 === 0 ? "bg-purple-200/70" : "bg-purple-50/70"
          }`}
        >
          <span className="text-gray-900 font-medium">{item.name}</span>
          <span className="text-purple-700 font-semibold">{item.code}</span>
        </div>
      ))}
    </div>

    {/* Column 3 */}
    <div className="space-y-1">
      {[
        { name: "Վահե Հակոբյան", code: "3421" },
        { name: "Հակոբյան Դավիթ", code: "9733" },
        { name: "Ասատրյան Նարինե", code: "0039" },
        { name: "Անի Հովսեփյան", code: "6960" },
        { name: "Արայիկ Մայսուրյան", code: "8099" },
        { name: "Գոհար Աբրահամյան", code: "8965" },
        { name: "Կարեն Թադևոսյան", code: "6605" },
        { name: "Մհեր Գաբոյան", code: "2480" },
        { name: "Սավարանի Թահմասյան", code: "1747" },
        { name: "Բադալյան Տիգրան Գրիշայի", code: "0633" },
        { name: "Արմենուհի Մանուկյան", code: "4584" },
        { name: "Եսայան Սարմեն Արմենի", code: "1177" },
        { name: "Արմինե Գրիգորյան", code: "8396" },
        { name: "Գաբրիելյան Մարինե Արմենի", code: "9932" },
        { name: "Խառատյան Նարեկ", code: "3222" },
        { name: "Նաիրա Մանուկյան", code: "4676" },
        { name: "Լուսինե Հայրապետյան", code: "7836" },
        { name: "Գեորգի Աղաջանյան", code: "3454" },
        { name: "Հակոբյան Անժելա", code: "5756" },
        { name: "Լուսինե Տերտերյան", code: "5557" },
        { name: "Ռուզան Օսիպյան", code: "1797" },
        { name: "Վահագն Մելիքբեկյան", code: "0762" },
        { name: "Լիդա Առաքելյան", code: "9824" },
        { name: "Արմեն Խաչատրյան", code: "7729" },
        { name: "Թոփունց Կարինե Հակոբի", code: "1430" },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`flex justify-between items-center px-3 py-1.5 rounded-lg text-sm ${
            idx % 2 === 0 ? "bg-purple-200/70" : "bg-purple-50/70"
          }`}
        >
          <span className="text-gray-900 font-medium">{item.name}</span>
          <span className="text-purple-700 font-semibold">{item.code}</span>
        </div>
      ))}
    </div>
  </div>
</article>
                    {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/life-style/evocabank_as_the_partner_of_fincomm_2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17915391966329/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                      Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">08.10.2026</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/life-style/evocabank-as-the-general-partner-of-armenia-uk-business-forum" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17913736819959/428x321.jpg" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր

                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.10.2026
</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/life-style/evocabank-as-the-financial-partner-of-trf-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17912685600228/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                       Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր
            </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">06.10.2026
</span>
              </div>
            </Link>

          </div>
        </div>
                
         
                    
                    
        </main>
      </div>

      {/* Ֆութեր */}
      <Footer />
    </div>
  );
}   
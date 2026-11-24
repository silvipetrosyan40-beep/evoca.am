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
              <button onClick={() => handleNavigation('/news/innovations')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Նորարարություններ</button>
              <span>›</span>
              <span className="text-gray-800 font-medium shrink-0">Evoca-ն հաջողությամբ ավարտել է IFC-ի DigiLab Finance ծրագիրը




</span>
            </div>
          </div>

          {/* Վերնագրային բլոկ (Hero Section) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
             <Link to="/news/innovations" className="flex items-center space-x-2.5 group w-fit no-underline">
  <span className="w-4 h-2.5 bg-[#38d7fe] rounded-[2px] inline-block"></span>
  <span className="text-purple-900 font-bold text-sm sm:text-base group-hover:underline">Նորարարություններ</span>
</Link>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
Evoca-ն հաջողությամբ ավարտել է IFC-ի DigiLab Finance ծրագիրը
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
DigiLab Finance ծրագիրն իրականացվում է Միջազգային ֆինանսական կորպորացիայի` IFC-ի, և Accenture-ի կողմից:

         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
18.05.2022
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/16528587352385/780x585.jpg" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    <strong className="text-purple-800">DigiLab Finance</strong>-ը 12-շաբաթյա նորարարական ծրագիր-աքսելերատոր է, որը հիմնվել է <strong className="text-purple-800">IFC</strong>-ի և <strong className="text-purple-800">Accenture</strong>-ի կողմից: Դրա նպատակն է՝ նպաստել ընկերությունների թվային տրանսֆորմացիային և մշակել անհատական ճանապարհային քարտեզ՝ roadmap: Ծրագրին մասնակցում է <strong className="text-purple-800">Evocabank</strong>-ի ղեկավարությունը, որը ծրագրի ընթացքում վերապատրաստվել է թվային ֆինանսների ոլորտի առաջատար փորձագետների կողմից:
  </p>

  <p>
    Ծրագրի ընթացքում <strong className="text-purple-800">Evocabank</strong>-ի մենթորներն էին <strong className="text-purple-800">Բայամե Սեֆան</strong>, ով IFC-ի Եվրոպայի գործառույթների պատասխանատուն և ֆինանսական հաստատությունների խմբի առաջատար խորհրդատուն է, ինչպես նաև <strong className="text-purple-800">Խոսե Մ.Մորենո դե Բառորան</strong>, ով IFC-ի ֆինանսական հաստատությունների խմբի գլոբալ թվային ֆինանսների մասնագետ է, և <strong className="text-purple-800">Նինո Կարտոզիան</strong>՝ IFC-ի հանրային կապերի մասնագետը, վարել է ծրագիրը՝ աջակցելով մասնակիցներին:
  </p>

  <p>
    Դասընթացի ընթացքում բազմաթիվ առաջատար մասնագետներ տարբեր երկրներից իրենց գիտելիքները և փորձն էին փոխանակում այնպիսի թեմաների շուրջ, ինչպիսիք են՝ թվային տրանսֆորմացիան, design մտածելակերպը, agile մշակույթը, փոփոխությունների կառավարումը, խնայող տեխնոլոգիաները, տվյալների կառավարումը և թվային առաջնորդությունը:
  </p>

  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 italic text-gray-600 bg-purple-50/40 rounded-r-2xl">
    «DigiLab ծրագիրը մեզ համար շատ կարևոր և արժեքավոր փորձ էր: Մեր թվային տրանսֆորմացիայի թիմը մշակեց նոր North Star Բանկի համար, և նախագծեցինք դրան հասնելու roadmap-ը: DigiLab-ը մեզ օգնեց էլ ավելի զարգացնել մեր ռազմավարական հմտություններն ու ունակությունները: Այսպիսով, այժմ մենք պատրաստ ենք ավելի խորանալու մեր թվային ԴՆԹ-ի մեջ և ընդլայնելու Բանկի թվային տրանսֆորմացիայի հորիզոնները», - նշեց <strong className="text-purple-800">Evocabank</strong>-ի Վարչության նախագահի տեղակալ <strong className="text-purple-800">Տաթևիկ Հաճատրյանը</strong>:
  </blockquote>

  <div className="flex justify-center pt-2">
    <img
      src="https://www.evoca.am/file_manager/Evocabank%20DigiLab%20Certificate.JPG"
      alt="Evocabank DigiLab Certificate of Participation"
      className="max-w-md w-full h-auto object-contain rounded-2xl shadow-md border border-purple-100"
    />
  </div>

  <p>
    DigiLab-ը նախագծվել է նորարար տրանսֆորմացիաներին պատրաստ բանկերի համար: <strong className="text-purple-800">Evocabank</strong>-ը ծրագրին անցել է այնպիսի առաջատար թվային բանկերի հետ, ինչպիսիք են՝ <strong className="text-purple-800">FinComBank-ը Մոլդովայից</strong> և <strong className="text-purple-800">Terabank-ը Վրաստանից</strong>:
  </p>

  <p>
    «Թվային փոխակերպումը մեզ համար բացել է նոր մոտեցումներ և ապրանքակենտրոնից անցում դեպի հաճախորդակենտրոն մոդելին: Միասին մենք կերտել ենք մեր North Star-ը՝ «Մարդկային դեմքով բանկ» թվային դարաշրջանում, մարդիկ առաջին հերթին: Սա է մեր ուղենիշը, մեր ձգտումները և մեր բանկի թվային փոխակերպման ճանապարհին բոլոր փոփոխությունների հիմքը: FinComBank-ը, որը թվային բանկային պրոդուկտների և ծառայությունների առումով բարձր դիրքեր է գրավում, անգնահատելի գիտելիքներ և փորձ է ձեռք բերել DigiLab Finance ծրագրի դասընթացների ընթացքում այնպիսի նորարարական բանկերի հետ միասին, ինչպիսին են՝ <strong className="text-purple-800">Evocabank</strong>-ը և <strong className="text-purple-800">Terabank</strong>-ը: Անշուշտ, սա փոխակերպման բոլոր գործընթացների մեկնարկը կդառնա», - ասաց <strong className="text-purple-800">Ավելտանա Միրնովան, FinComBank S.A.-ի Գործադիր տնօրենի ժ.պ.-ն</strong>:
  </p>

  <p className="pt-2 border-t border-purple-50 text-sm text-gray-500">
    «Թվային տրանսֆորմացիայի ծրագրին մեր մասնակցությունը Terabank-ի նորարարական մոտեցումների ներդրման և նորագույն լուծումների ռազմավարական մոտեցումը էլ ավելի բարձր մակարդակի է հասցրել: Այն հնարավորությունները, որոնցով մենք կիսվել ենք ծրագրի ժամանակ, կօգնեն մեզ իրագործելու մեր բիզնես-գործընթացներն այնպես, որ, հիմնվելով թվային փոխակերպման սկզբունքների վրա՝ մենք կարողանանք արձագանքել հաճախորդների կարիքներին ավելի արագ և ավելի ճկուն ձևով», - ասաց <strong className="text-purple-800">Վախթանգ Հուիցիշվիլին, Terabank-ի Օպերացիոն տնօրենը</strong>:
  </p>
</article>

                    {/* 4. Այլ նորություններ (Other News Grid) */}
        <div className="pt-16 border-t border-gray-100 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
            Այլ նորություններ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Քարտ 1 */}
            <Link to="/news/allpage3/function-of-evocatouch" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17515401570632/428x321.png" alt="Armenia-UK Business Forum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                        Ճամփորդիր ուր ուզես, վճարիր որտեղ և երբ ուզես                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">03.07.2025</span>
              </div>
            </Link>

            {/* Քարտ 2 */}
            <Link to="/news/allpage3/payments-with-vpos" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17500622728518/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Նոր ինտերֆեյս՝ ավելի հարմար առցանց վճարումներ
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">16.06.2025</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/news/allpage7/e-sign" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/16854405293433/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                        Էլեկտրոնային ստորագրության e-Sign համակարգ Evocabank-ում             </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">26.05.2023</span>
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
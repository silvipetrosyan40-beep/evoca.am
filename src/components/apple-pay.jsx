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
              <span className="text-gray-800 font-medium shrink-0">Apple Pay-ը հասանելի է Evocabank-ի հաճախորդների համար



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
Apple Pay-ը հասանելի է Evocabank-ի հաճախորդների համար
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
iPhone-ի և Apple Watch-ի միջոցով վճարելու ավելի ապահով, անվտանգ և վստահելի միջոց:


         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
02.08.2022
             </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/16594261127317/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    <strong className="text-purple-800">Evocabank</strong>-ի հաճախորդներն այսօրվանից կարող են օգտվել վճարման ավելի ապահով, անվտանգ և վստահելի գործիքից՝ <strong className="text-purple-800">Apple Pay</strong>-ից, որը կօգնի խուսափել վճարային քարտն ուրիշին հանձնելուց, վճարային տերմինալի կոճակներին հպվելուց կամ կանխիկ գումար փոխանակելուց[cite: 16]: Apple Pay-ի միջոցով իրականացվող յուրաքանչյուր գործարքի պաշտպանություն իրականացվում է iPhone-ի նորարարական տեխնոլոգիաների միջոցով[cite: 16]:
  </p>

  <p>
    Անհարկում վճարում կատարելու համար պարզապես անհրաժեշտ է iPhone-ը կամ Apple Watch-ը մոտեցնել վճարային տերմինալին[cite: 16]: Apple Pay-ի միջոցով իրականացված յուրաքանչյուր վճարում անվտանգ է, քանի որ այն վավերացվում է <strong className="text-purple-800">Face ID-ով, Touch ID-ով կամ սարքի գաղտնաբառով</strong>, ինչպես նաև մեկանգամյա չկրկնվող դինամիկ անվտանգության կոդով[cite: 16]: Apple Pay-ով վճարումներ հնարավոր է կատարել մթերային խանութներում, դեղատներում, տաքսի-ծառայություններից օգտվելիս, ռեստորաններում, սրճարաններում, խանութ-սրահներում և այլ վայրերում[cite: 16]:
  </p>

  <p>
    Apple Pay-ը կարելի է նաև օգտագործել iPhone-ում, iPad-ում և Mac-ում հասանելի հավելվածներում կամ համացանցում Safari-ում, ավելի արագ և հարմարավետ գնումներ կատարելու համար, ընդ որում՝ առանց օգտահաշիվներ ստեղծելու կամ առաքման և վճարային տեղեկությունները մի քանի անգամ մուտքագրելու անհրաժեշտության[cite: 16]: Բացի դրանից, Apple Pay-ը հեշտացնում է սննդամթերքի առաքման, առցանց գնումների, փոխադրման և կայանման համար վճարումները[cite: 16]: Apple Pay-ը կարելի է օգտագործել նաև Apple Watch-ի հավելվածներում վճարումներ կատարելու համար[cite: 16]:
  </p>

  <p className="font-semibold text-purple-900">
    <strong className="text-purple-800">Անվտանգությունն ու գաղտնիությունն</strong> առանցքային նշանակություն ունեն Apple Pay-ի համար[cite: 16]:
  </p>
  <p>
    Կրեդիտային կամ դեբետային քարտը Apple Pay-ին կցելիս տվյալ քարտի իրական համարը չի պահվում ոչ սարքում, ոչ էլ Apple-ի սերվերներում[cite: 16]: Դրա փոխարեն սարքին շնորհվում է չկրկնվող հաշվի համար, որը գաղտնագրվում և պահվում է այդ սարքի «Անվտանգ տարր» (Secure Element) հավաստագրված չիպի մեջ, որը նախատեսված է վճարային տեղեկատվության անվտանգ պահպանման համար[cite: 16]:
  </p>

  <p className="font-semibold text-purple-900">
    <strong className="text-purple-800">Apple Pay-ը կարգավորելը շատ հեշտ է</strong>[cite: 16]:
  </p>
  <p>
    Բավական է պարզապես մտնել iPhone-ում առկա Wallet հավելվածը, սեղմել «+» նշանը և հետևել ցուցումներին՝ <strong className="text-purple-800">Evocabank</strong>-ի կրեդիտային կամ դեբետային քարտը ավելացնելու համար[cite: 16]: Քարտը iPhone-ին, Apple Watch-ին, iPad-ին և Mac-ին կցելուց անմիջապես հետո հաճախորդը կարող է սկսել օգտագործել Apple Pay-ը[cite: 16]: Հաճախորդները կշարունակեն ստանալ բոլոր զեղչերն ու առավելությունները, որոնք <strong className="text-purple-800">Evocabank</strong>-ն առաջարկում է իր քարտապաններին[cite: 16]:
  </p>

  <p className="pt-2 border-t border-purple-50 text-sm text-gray-500">
    <strong className="text-purple-800">Evocabank</strong>-ն արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ[cite: 16]: Բանկն աշխատում է mobile-first ֆորմատով՝ յուրաքանչյուր ծառայություն նախագծելիս հաշվի առնելով դրա՝ հավելվածով օգտագործման հարմարավետությունը[cite: 16]: Բանկը ձգտում է դառնալ ամենانորարար և առաջադեմ բանկային ծառայություններ մատուցող ֆինանսական հաստատությունը Հայաստանում, որի բոլոր ծառայություններից հնարավոր կլինի օգտվել առանց բանկ այցելելու[cite: 16]: <strong className="text-purple-800">Evocabank</strong>-ը 5 տարի անընդמեջ ճանաչվել է <strong className="text-purple-800">«Լավագույն թվային սպառողական բանկը Հայաստանում» Global Finance</strong> հեղինակավոր ամսագրի կողմից[cite: 16]: Ինչպես նաև 2021թ. <strong className="text-purple-800">SME Banking Club</strong> բանկերի միջազգային ասոցիացիայի կողմից Բանկն ընդգրկվել է Հայաստանում լավագույն օնլայն բանկերի եռյակում[cite: 16]:
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
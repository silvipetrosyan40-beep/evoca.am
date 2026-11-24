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
              <span className="text-gray-800 font-medium shrink-0">Հաճելի ճամփորդություն Visa քարտերով

















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
Հաճելի ճամփորդություն Visa քարտերով
              </h1>

                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Հատուկ առաջարկներ Visa քարտերով վճարելիս:










         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
27.07.2022
</div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/16589302340345/780x585.jpg" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>


    <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Հաճա՞խ ես ճամփորդում: Իսկ գիտե՞ս, որ <strong className="text-purple-700">Evoca Visa</strong> քարտերով ճամփորդելն ավելի շահավետ է[cite: 20]:
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>
      <strong className="text-purple-700">Ապահովագրություն Visa-ի կողմից անվտանգ և հարմարավետ ճանապարհորդություն ունենալու համար</strong><br />
      Վճարեք տոմսերի և (կամ) հյուրանոցի դիմաց մինչև ուղևորության սկիզբը, ինչպես նաև գնեք հետադարձ տոմսերը <strong className="text-purple-700">Visa Infinite</strong> քարտով և ավտոմատ կերպով ստացեք ապահովագրություն ուղևորության ողջ տևողության համար: Ակցիան գործում է մինչև 31.05.2023[cite: 20]:
    </li>
    <li>
      <strong className="text-purple-700">10% զեղչ Rentalcars.com-ում ավտոմեքենաների վարձույթի համար</strong><br />
      Մեքենա վարձելն այժմ առավել շահավետ է: Զեղչն ակտիվացնելու համար պարզապես վճարեք ամրագրման դիմաց <strong className="text-purple-700">Visa Infinite</strong> քարտով{' '}
      <a 
        href="/hy" 
        className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
      >
        այստեղ
      </a>[cite: 20]:
      Ակցիան գործում է մինչև 31.12.2022[cite: 20]:
    </li>
    <li>
      <strong className="text-purple-700">Անվճար մուտք 1200 Lounge Key բիզնես սրահներ ողջ աշխարհում</strong><br />
      Առաջարկն առհասարակ հասանելի է տարին 6 անգամ, սակայն մինչև դեկտեմբերի 31-ը մուտքերը կլինեն անսահմանափակ՝ <strong className="text-purple-700">Visa Infinite</strong> քարտով յուրաքանչյուր ուղևորություն լի է բացառիկ սպասարկմամբ և հարմարավետությամբ[cite: 20]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 20]:
    </li>
    <li>
      <strong className="text-purple-700">Ստացե՛ք մինչև 6% cashback Booking.com-ում Visa-ով վճարելիս</strong><br />
      Վայելեք ճանապարհորդությունը Booking.com-ում <strong className="text-purple-700">Visa</strong>-ի հետ: Առաջարկից օգտվելու համար սեղմեք{' '}
      <a 
        href="/hy" 
        className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
      >
        այստեղ
      </a>[cite: 20]:
      Առաջարկը հասանելի է մինչև 31.10.2022[cite: 20]:
    </li>
    <li>
      <strong className="text-purple-700">Մինչև 12% զեղչ Visa-ի և Agoda-ի կողմից</strong><br />
      Կատարեք ամրագրում նշված հյուրանոցներում{' '}
      <a 
        href="/hy" 
        className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
      >
        այստեղ
      </a>{' '}
      և ստացեք մինչև 12% զեղչ[cite: 20]:
      Առաջարկը գործում է <strong className="text-purple-700">Visa Infinite</strong> քարտապանների համար[cite: 20]:
    </li>
    <li>
      <strong className="text-purple-700">Աշխարհի 700 օդանավակայաններում դիմավորելու ծառայություն</strong><br />
      Դիմավորելու <strong className="text-gray-900">Meet and Greet</strong> ծառայությունը, որը հասանելի է աշխարհի ավելի քան 700 օդանավակայաններում, ձեր ճանապարհորդական փորձը կդարձնի հարմարավետ և առանց դժվարությունների[cite: 20]:
    </li>
    <li>
      <strong className="text-purple-700">Fast Track Զվարթնոց օդանավակայանում</strong><br />
      Ի՞նչը կարող է ցանկալի ճանապարհորդությունը դարձնել էլ ավելի հարմարավետ և անմոռանալի: Իհարկե, արագացված Fast Track ծառայությունը[cite: 20]:
      Ստացեք օդանավակայանի անցակետերում առաջնահերթության սկզբունքով անցնելու հնարավորություն և խնայեք ձեր ժամանակը ավելի հաճելի բաների համար: Ծառայությունից կարող եք օգտվել Զվարթնոց օդանավակայանում[cite: 20]:
    </li>
  </ul>

  <p>
    Ծառայությունից օգտվելու համար բացեք <strong className="text-purple-700">Visa Concierge չատբոտը</strong>, անցեք դեպի Visa Travel և սեղմեք Fast Track International կոճակը: Այնուհետև ընտրեք օդանավակայանը, լրացրեք անհրաժեշտ մանրամասները և ստացեք PDF ֆայլ՝ QR կոդով Fast Track-ի համար[cite: 21]:
  </p>

  <p>
    Առաջարկը գործում է մինչև 30.09.2022[cite: 21]:
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>
      <strong className="text-purple-700">Մատչելի ուղևորություն օդանավակայանից դեպի Երևան gg-ով</strong><br />
      Վճարեք gg հավելվածում <strong className="text-purple-700">Visa Infinite</strong> քարտով և ստացեք 1,000 դրամ զեղչ Զվարթնոց օդանավակայանից դեպի Երևան ցանկացած ուղևորության համար: Զեղչը հաշվարկվում է ավտոմատ[cite: 21]:
      Առաջարկը գործում է մինչև դեկտեմբերի 31-ը ներառյալ[cite: 21]:
    </li>
    <li>
      <strong className="text-purple-700">20% զեղչ սուրճերի համար Զվարթնոց օդանավակայանի Segafredo-ում</strong><br />
      Վճարեք <strong className="text-purple-700">Visa Gold</strong> և <strong className="text-purple-700">Visa Infinite</strong> քարտերով և ստացե՛ք 20% զեղչ սուրճերի համար Զվարթնոց օդանավակայանի Segafredo սրճարանում[cite: 21]:
      Առաջարկը գործում է մինչև 31.05.2022[cite: 21]:
    </li>
    <li>
      <strong className="text-purple-700">Զեղչ ուղևորությունների համար gg հավելվածում</strong><br />
      Դարձրեք ձեր ուղևորություններն ավելի հարմարավետ: Շաբաթ, կիրակի և երկուշաբթի ուղևորություններ կատարեք gg-ով և ստացեք մինչև 300 դրամ զեղչ՝ կախված պատվիրելու քաղաքից[cite: 21]:
      Վճարեք ուղևորությունների համար <strong className="text-purple-700">Visa Gold</strong> կամ <strong className="text-purple-700">Visa Infinite</strong> քարտերով և ստացե՛ք զեղչ: Զեղչը հաշվարկվում է ավտոմատ: Առաջարկը գործում է Երևանում, Գյումրիում, Դիլիջանում և Վանաձոր քաղաքներում[cite: 21]:
      *Երևանում զեղչը կազմում է 300 դրամ[cite: 21]:
      *Գյումրիում, Դիլիջանում և Վանաձորում զեղչը կազմում է 100 դրամ[cite: 21]:
    </li>
    <li>
      <strong className="text-purple-700">COVID-19-ի անվճար թեստեր</strong><br />
      Հոգ տարեք ձեր և ձեր սիրելիների առողջության և անվտանգության մասին: <strong className="text-purple-700">Visa Infinite</strong> քարտով ձեզ հասանելի է անվճար PCR թեստ COVID-19-ի համար: Թեստն անցնելու համար գրանցվեք Visa Concierge չատբոտում, սեղմեք «PCR թեստ» կոճակը, մուտքագրեք անհրաժեշտ տվյալները և սպասեք հաստատմանը: Ծառայությունը հասանելի է տարեկան 1 անգամ[cite: 21]:
      Առաջարկը գործում է մինչև 30.12.2022[cite: 21]:
    </li>
    <li>
      <strong className="text-purple-700">Անվճար ինտերնետ ռոումինգ փաթեթ</strong><br />
      Visa Concierge չատբոտում գրանցված <strong className="text-purple-700">Visa Infinite</strong> քարտերի բոլոր սեփականատերերի համար հասանելի է անվճար ինտերնետ ռոումինգ փաթեթ Telecom Armenia-ի կողմից՝ տարին 6 անգամ: Առաջարկից օգտվելու համար գրանցվեք Visa Concierge չատբոտում, սեղմեք Visa Roaming կոճակը և հետևեք պարզ հրահանգներին: Հաջորդիվ դուք կստանաք ինտերնետ ռոումինգն ակտիվացնելու համար հատուկ պրոմոկոդ[cite: 21]:
    </li>
  </ul>

  <h3 className="text-xl font-bold text-gray-900 pt-2">
    Հատուկ առաջարկ ՀԻԳԱԳ վաճառասրահներում
  </h3>

  <p>
    Գնե՛ք Panasonic ապրանքանիշի օդորակիչներ ՀԻԳԱԳ վաճառասրահների ցանցում, վճարեք <strong className="text-purple-700">Visa Gold</strong> կամ <strong className="text-purple-700">Visa Infinite</strong> քարտերով և օգտվեք արտահերթ տեղադրման ծառայությունից 24 ժամվա ընթացքում[cite: 22]:
  </p>

  <p>
    Առաջարկը գործում է մինչև 31.08.2022[cite: 22]:
  </p>

  <p>
    Դարձրու կյանքդ հարմարավետ Visa Concierge չատբոտի հետ[cite: 22]:
  </p>

  <p>
    Visa chatbot-ն ապահովում է 360° տեսակի աջակցություն 24/7 ռեժիմով: Դուք կարող եք ստանալ պրեմիում քարտերի բոլոր առաջարկները, պատվիրել կամ ակտիվացնել տարբեր ծառայություններ չատբոտի միջոցով[cite: 22]:
  </p>

  <div className="flex gap-4 pt-2">
    <a 
      href="/hy" 
      className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
    >
      Viber
    </a>
    <a 
      href="/hy" 
      className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
    >
      Telegram
    </a>
  </div>

  <p>
    Առաջարկը գործում է մինչև 31.12.2022[cite: 22]:
  </p>

  <p>
    Իսկ եթե պատրաստվում եք հանգիստն անցկացնել <strong className="text-purple-700">Հայաստանում</strong>, վճարեք Visa պրեմիում քարտերով և օգտվեք հետևյալ առաջարկներից[cite: 22]․
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>
      <strong className="text-purple-700">Հատուկ առաջարկ Apricot Hotels & Resorts-ում</strong><br />
      Կատարեք վճարումներ Visa Gold կամ Visa Infinite քարտերով և ստացեք հետևյալ առավելությունները Apricot Hotels & Resorts-ում[cite: 22]՝
      <ul className="list-circle pl-6 space-y-1 pt-2 marker:text-purple-700">
        <li>Առկայության դեպքում վաղաժամ մուտքի հնարավորություն՝ մուտքի (գրանցման) ժամից մինչև 4 ժամ առաջ[cite: 22]</li>
        <li>Առկայության դեպքում ուշ ելքի հնարավորություն՝ ելքի ժամից մինչև 4 ժամ ուշ[cite: 22]</li>
        <li>Առկայության դեպքում ավելի բարձր կատեգորիայի հյուրանոցային համարի անվճար տրամադրում[cite: 22]</li>
      </ul>
      Առաջարկը գործում է մինչև 31.12.2022[cite: 22]:
    </li>
    <li>
      <strong className="text-purple-700">Հատուկ առաջարկ Apaga Resort-ից</strong><br />
      Վճարեք <strong className="text-purple-700">Visa Gold</strong> կամ <strong className="text-purple-700">Visa Infinite</strong> քարտերով և Apaga Resort-ում ստացեք հետևյալ առավելությունները[cite: 22]՝
      <ul className="list-circle pl-6 space-y-1 pt-2 marker:text-purple-700">
        <li>Կեցության ծառայությունից օգտվելու դեպքում անվճար մեկ շիշ գինի և ձեռագործ շוקոլադ[cite: 22]</li>
        <li>Ձիավարության ծառայությունից 40 րոպե օգտվելու դեպքում՝ հավելյալ մինչև 1,5 ժամ տևողությամբ ձիարշավ-շրջագայություն[cite: 22]</li>
      </ul>
      Առաջարկը գործում է մինչև 31.12.2022[cite: 22]:
    </li>
    <li>
      <strong className="text-purple-700">Հատուկ առաջարկ Yell Extreme Park-ից</strong><br />
      Վճարեք <strong className="text-purple-700">Visa Gold</strong> կամ <strong className="text-purple-700">Visa Infinite</strong> քարտերով և Yell Extreme Park-ում ստացեք Zip line-ի թռիչքի տոմսը «One Day Pass» տոմսի հետ փոխարինելու հնարավորություն: «One Day Pass» տոմսը ներառում է[cite: 22, 23]՝
      <ul className="list-circle pl-6 space-y-1 pt-2 marker:text-purple-700">
        <li>Zip line flight[cite: 23]</li>
        <li>Rope Park[cite: 23]</li>
        <li>Via Ferrata[cite: 23]</li>
        <li>Off road tour[cite: 23]</li>
      </ul>
      Առաջարկը գործում է մինչև 31.12.2022[cite: 23]:
    </li>
    <li>
      <strong className="text-purple-700">Հատուկ առաջարկ Aperitivo-ից</strong><br />
      Ստացեք հետևյալ առավելությունները Aperitivo-ում[cite: 23]՝
      <ul className="list-circle pl-6 space-y-1 pt-2 marker:text-purple-700">
        <li>Վճարե՛ք <strong className="text-purple-700">Visa Infinite</strong> քարտով, ստացե՛ք 15% զեղչ[cite: 23]</li>
        <li>Վճարե՛ք <strong className="text-purple-700">Visa Gold</strong> քարտով և օգտվե՛ք հատուկ մենյուից[cite: 23]</li>
      </ul>
      Առաջարկը գործում է մինչև 31.12.2022[cite: 23]:
    </li>
    <li>
      <strong className="text-purple-700">10% զեղչ Alexander Spa-ում</strong><br />
      Վճարե՛ք <strong className="text-purple-700">Visa Gold</strong> կամ <strong className="text-purple-700">Visa Infinite</strong> քարտերով և ստացե՛ք 10% զեղչ Alexander Spa by Anne Semonin-ում[cite: 23]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 23]:
    </li>
  </ul>
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
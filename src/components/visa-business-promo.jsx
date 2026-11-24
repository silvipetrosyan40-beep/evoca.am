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
              <span className="text-gray-800 font-medium shrink-0">Մեծ հնարավորություններ ձեր բիզնեսի համար Visa-ի հետ
















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
Մեծ հնարավորություններ ձեր բիզնեսի համար Visa-ի հետ
              </h1>

                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Վճարեք Evoca Visa քարտերով և օգտվեք առավելություններից:









         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
12.08.2022
</div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/16603126347212/780x585.jpg" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>


        <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Զարգացրե՛ք Ձեր բիզնեսը <strong className="text-purple-700">Visa</strong>-ի հետ՝ կառավարելով ձեր ֆինանսները <strong className="text-purple-700">Visa Business քարտերով</strong>[cite: 16]:
  </p>

  <p>
    <strong className="text-purple-700">Visa Business քարտերը</strong> հնարավորություն են տալիս՝[cite: 16]
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>կատարել առցանց վճարումներ ապրանքների և ծառայությունների համար՝ օնլայն գնումներ, տարածքի և կոմունալ ծառայություններ, գործուղումներ, թռիչքներ, կորպորատիվ միջոցառումներ և պետական վճարումներ[cite: 16]</li>
    <li>ստանալ զեղչեր և հատուկ առաջարկներ բիզնեսի կառավարման ծառայությունների համար[cite: 16]</li>
    <li>օգտվել Visa Business Concierge ծառայությունից[cite: 16]</li>
    <li>վայելել բիզնես ուղղությունների և ճանապարհորդությունների ժամանակ առավելությունները՝ ճանապարհորդական ապահովագրություն, Lounge Key, Fast Track, ուղեբերքի անվճար փաթեթավորում, բնակարանների և մեքենաների վարձակալության զեղչեր և այլն[cite: 16]:</li>
  </ul>

  <h3 className="text-xl font-bold text-gray-900 pt-2">
    Տեղի հատուկ առաջարկները ձեր բիզնեսի համար
  </h3>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>
      <strong className="text-purple-700">Մինչև 50% զեղչ Axdraft ծառայությունների համար</strong><br />
      Axdraft-ը կամացած բարդության իրավական փաստաթղթերի ավտոմատացման հարթակ է, որն օգնում է իրավաբաններին և բիզնես թիմերին ազատվել փաստաթղթային գործընթացների բարդ գործընթացներից[cite: 16]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 16]:
    </li>
    <li>
      <strong className="text-purple-700">Անվճար խորհրդատվություններ և մինչև 15% զեղչ Astrum Consulting ծառայությունների համար</strong><br />
      Astrum Consulting-ը ընկերություն է, որը տրամադրում է Կանադայի և ԱՄՆ-ի իրավաբանական անձանց գրանցման, ներմուծման և արտահանման համապատասխան աջակցություն և ընդհանուր կորպորատիվ բիզնես ծառայություններ[cite: 16]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 16]:
    </li>
    <li>
      <strong className="text-purple-700">- 50% PRO փաթեթի համար mssg.me-ից</strong><br />
      mssg.me-ն ծառայություն է, որի միջոցով օգտատերերը կարող են ստեղծել անձնական էջեր՝ նշելով կապի բոլոր հնարավոր ուղիները՝ պրոֆիլներ Skype-ում, Telegram-ում, WhatsApp-ում և այլ մեສենջերներում[cite: 16]:
      Առաջարկը գործում է միայն Visa բիզնես քարտերի համար՝ 01.02.2022-ից մինչև 31.12.2022-ը[cite: 16]:
    </li>
    <li>
      <strong className="text-purple-700">- 50% Perfectum CRM+ERP-ի լիցենզիաների համար</strong><br />
      Perfectum CRM+ERP-ը հաճախորդների հետ հարաբերությունների կառավարման հարթակ է, որը համակարգում է աշխատանքային գործընթացը: Զեղչը գործում է cloud և box տեսակի լիցենզիաների համար[cite: 16]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 16]:
    </li>
    <li>
      <strong className="text-purple-700">Հավելյալ 3 ամիս նվեր ULTRA-ի կողմից 3 ամիս բաժանորդագրության դիմաց</strong><br />
      ULTRA-ն մանրածախ և զվարճանքի ոլորտում գործընթացների ավտոմատացման համար ծրագրային լուծումների ժամանակակից մշակող ծրագիր է[cite: 17]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 17]:
    </li>
    <li>
      <strong className="text-purple-700">-10% Laba-ի յուրաքանչյուր կուրսի միանվագ վճարի դիմաց</strong><br />
      Laba-ն միջազգային բիզնես դպրոց է, որը հնարավորություն է տալիս ձեռք բերել գործնական գիտելիքներ և համապատասխան հմտություններ կադրերի, մարքեթինգի, կառավարման, ֆինանսների և բիզնես անալիտիկայի ոլորտներում[cite: 17]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 17]:
    </li>
  </ul>

  <h3 className="text-xl font-bold text-gray-900 pt-2">
    Միջազգային հատուկ առաջարկները ձեր բիզնեսի համար
  </h3>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>
      <strong className="text-purple-700">-10% զեղչ կոնֆերանս սրահների, բիզնես սենյակների, համատեղ աշխատանքային տարածքների և վիրտուալ գրասենյակների վարձակալության համար Regus-ից</strong><br />
      Առաջարկը գործում է միայն Visa բիզնես քարտերի համար 01.10.2021 մինչև 30.09.2022-ը[cite: 17]:
    </li>
    <li>
      <strong className="text-purple-700">15% զեղչ Global Airport Concierge-ից դիմավորելու ծառայությունների համար աշխարհի 700 օդանավակայաններում</strong><br />
      Global Airport Concierge-ը հատուկ կոնսիերժ ծառայություն է, որը հասանելի է աշխարհի ավելի քան 700 օդանավակայաններում, որպեսզի ձեր ճանապարհորդական փորձը լինի առանց դժվարությունների և հարմարավետության[cite: 17]:
      Առաջարկը գործում է մինչև 30.09.2022[cite: 17]:
    </li>
    <li>
      <strong className="text-purple-700">-20% YQ Assist ծառայության համար</strong><br />
      YQ Assist-ը որակյալ անձնակազմից բաղկացած հատուկ ծառայություն է, որն օգնում է արագ անցնել օդանավակայանի գործընթացները (ուղեբեռ, փոխանցում, հարկի վերադարձ, վիզա ժամանելիս, թղթաբանություն և այլն)[cite: 17]:
      Առաջարկը գործում է միայն Visa բիզնես քարտերի համար 01.10.2021 մինչև 30.09.2022-ը[cite: 17]:
    </li>
    <li>
      <strong className="text-purple-700">Հատուկ առաջարկներ Shopify Core-ում և Shopify Plus-ում</strong><br />
      Shopify Inc.-ը կանադական էլեկտրոնային առևտրի ընկերություն է առցանց խանութների և մանրածախ առևտրի կետերի համար[cite: 17]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 17]:
    </li>
    <li>
      <strong className="text-purple-700">100% քեշբեք Google Ad Spend-ում ծախսված առաջին $100-ի դիմաց*</strong><br />
      Google Ads-ը առցանց գովազդային ծառայություն է, որը թույլ է տալիս տեղադրել ձեր գովազդը Google-ի որոնման արդյունքների էջում[cite: 17]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 17]:
    </li>
    <li>
      <strong className="text-purple-700">-10% Office 365 Business ստանդարտ փաթեթի համար</strong><br />
      Microsoft 365-ը բաժանորդագրություն է, որը ձեզ տեղեկացնում է Microsoft Office-ի վերջին հավելվածների մասին[cite: 18]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 18]:
    </li>
    <li>
      <strong className="text-purple-700">Մինչև $430-ի գովազդային փաթեթ Instagram-ում*</strong><br />
      Instagram Ads-ը գովազդային գործիք է, որն օգնում է ձեզ ցուցադրել ձեր արտադրանքը թիրախային լսարանին անմիջապես բովանդակության հոսքում[cite: 18]:
      Առաջարկը գործում է մինչև 30.09.2022[cite: 18]:
    </li>
    <li>
      <strong className="text-purple-700">-10% Spaces-ից coworking-ի և հանդիպումների սենյակների համար</strong><br />
      Google Workspace-ը cloud-ի վրա հիմնված գործիքների և ծառայությունների փաթեթ է, որը կարող է ընկերությունների համար ապահովել առցանց համագործակցության բոլորովին նոր միջոց՝ բարելավելով բիզնեսի արտադրողականությունը[cite: 18]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 18]:
    </li>
    <li>
      <strong className="text-purple-700">Բաժանորդագրություն Google Workspace-ում $4.99-ով</strong><br />
      Spaces-ը ստեղծագործական վայր է աշխատելու, էլ. նամակները ստուգելու և հաճախորդների հետ հանդիպելու համար: Մի վայր, որտեղ կարող եք ընդհատել՝ վայելելով մի բաժակ լավ սուրճ կամ համեղ ճաշ[cite: 18]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 18]:
    </li>
    <li>
      <strong className="text-purple-700">Մինչև $430-ի գովազդային փաթեթ Facebook-ում</strong><br />
      Facebook-ն օգնում է միլիոնավոր մեծ ու փոքր ձեռնարկությունների կապ պահպանել հաճախորդների հետ: Facebook-ի լուծումներն ու գործիքները կօգնեն հասնել ձեր բիզնես նպատակներին[cite: 18]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 18]:
    </li>
    <li>
      <strong className="text-purple-700">-40% Dropbox Business Standard կամ Dropbox Business Advanced-ում</strong><br />
      Dropbox-ը աշխատանքային փաստաթղթերի միասնական հարթակ է՝ անկախ միայնակ կամ թիմով աշխատելու փաստից[cite: 18]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 18]:
    </li>
    <li>
      <strong className="text-purple-700">-30% Kaspersky Small Office Security-ում</strong><br />
      Kaspersky-ը միջազգային ընկերություն է, որը մասնագիտացված է համակարգչային վрусերից, սպամից, հաքերային հարձակումներից և այլ կիբեր սպառնալիքներից պաշտպանական համակարգերի մշակման մեջ[cite: 18]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 18]:
    </li>
    <li>
      <strong className="text-purple-700">Բացառիկ արտոնություններ շուրջօրյա առաքման համար myUS.com-ից</strong><br />
      myUS.com-ը Միացյալ Նահանգներից բեռների և փոստի առաքման ծառայություն է[cite: 18]:
      Առաջարկը գործում է մինչև 30.09.2022[cite: 19]:
    </li>
    <li>
      <strong className="text-purple-700">Մինչև $5000 վաուչեր Google Cloud հարթակում և/կամ Google Maps-ում</strong><br />
      Google Cloud Platform-ը ծառայությունների մի շարք է, որը հնարավորություն է տալիս աշխատել տարբեր հաշվողական և հոսքինգ գործիքների հետ[cite: 19]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 19]:
    </li>
    <li>
      <strong className="text-purple-700">Մինչև 30% զեղչ Docusign Business Pro-ի տարեկան փաթեթի համար</strong><br />
      Docusign-ը փաստաթղթավորման առցանց ծառայություն է, որը թույլ է տալիս վերբեռնել էլեկտրոնային ստորագրություններ, փաստաթղթեր, ուղարկել դրանք ստորագրության և վերահսկել փաստաթղթերի կարգավիճակը[cite: 19]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 19]:
    </li>
    <li>
      <strong className="text-purple-700">Մինչև 10% զեղչ զեղչ Europcar ցանցի ավտոմեքենաների վարձույթի համար</strong><br />
      Europcar-ը ավտոմեքենաների վարձույթի միջազգային ծառայություն է[cite: 19]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 19]:
    </li>
    <li>
      <strong className="text-purple-700">Մինչև 10% զեղչ British Council-ի կողմից անգլերենի ուսուցման դասընթացների համար</strong><br />
      British Council-ը կազմակերպություն է, որի անգլերենի իմացության մակարդակը համապատասխանում է Ընդհանուր եվրոպական իրավասությունների համակարգին և հանդիսանում է անգլերեն սովորելու միջազգային չափանիշ[cite: 19]:
      Առաջարկը գործում է մինչև 30.09.2022[cite: 19]:
    </li>
    <li>
      <strong className="text-purple-700">-10% Coursera-ի կրթական ծրագրերի համար</strong><br />
      Coursera-ն ամերիկյան առցանց դասընթացների բաց մատակարար է, որը եզակի հնարավորություն է ընձեռում սովորելու առցանց և ստանալու ԱՄՆ առաջատար համալսարանների վկայագրեր[cite: 19]:
      Առաջարկը գործում է մինչև 31.12.2022[cite: 19]:
    </li>
    <li>
      <strong className="text-purple-700">-25% Udemy-ի դասընթացների համար[cite: 19]</strong>
    </li>
    <li>
      <strong className="text-purple-700">-20% iStock-ի նոր բաժանորդագրության համար</strong><br />
      iStock-ը microstock լուսանկարչության համաշխարհային մատակարար է, որն առաջարկում է միլիոնավոր լուսանկարներ, նկարազարդումներ, տեսահոլովակներ, վիդեո և աուդիո նյութեր[cite: 19]:
      Առաջարկը գործում է մինչև 30.09.2022[cite: 19]:
    </li>
  </ul>

  <h3 className="text-xl font-bold text-gray-900 pt-2">
    Իսկ ինչպե՞ս օգտվել Visa Concierge ծառայությունից
  </h3>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>Սկանավորեք QR-ը կամ անցեք{' '}
      <a 
        href="/hy" 
        className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
      >
        այս հղումով
      </a>{' '}
      դեպի Telegram կամ Viber[cite: 20]
    </li>
    <li>Սեղմեք Visa for business[cite: 20]</li>
    <li>Լրացրեք ձեր բիզնես քարտի առաջին 9 թիվը վավերացման համար[cite: 20]</li>
  </ul>

  <p>
    Վավերացումից հետո Visa Business քարտապանների համար հասանելի են Visa գործընկերների հատուկ բիզնես առաջարկները: Վավերացումից հետո կարող եք օգտվել նաև Visa Business Concierge օգնական ծառայությունից, որը պատասխանում է ձեր հարցերին 7/24 ռեժիմով[cite: 20]:
  </p>

  <p>
    Visa Business Concierge ծառայությունն անվճար է[cite: 20]:
  </p>

  <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
    *Ազգային արժույթով վճարման պահին համապատասխան բանկային հաստատության կողմից սահմանված ԱՄՆ դոլարի (ԱՄՆ դոլար) փոխարժեքով[cite: 20]:
  </p>
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
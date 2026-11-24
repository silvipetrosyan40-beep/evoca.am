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
              <span className="text-gray-800 font-medium shrink-0">Վիճակահանության պայմաններ






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
Վիճակահանության պայմաններ

              </h1>

                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Մասնակցիր վիճակահանությանը, շահիր ուղևորություն դեպի Դուբայ 2 անձի համար և Jennifer Lopez-ի համերգի VIP տոմսեր: Նոյեմբերի 1-ին հեռուստատեսությամբ՝ ուղիղ հեռարձակմամբ…

















         </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
30.09.2017
</div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/16120745787425/780x585.png" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>


<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    Ակցիային մասնակցելու համար անհրաժեշտ է հոկտեմբերի 1-ից 31-ը ներառյալ ընկած ժամանակահատվածում ներբեռնել EvocaTouch հավելվածը՝
  </p>

  <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
    <li>App Store-ից (iOS օպերացիոն համակարգով աշխատող սարքերի համար՝ iPhone, iPad)[cite: 17],</li>
    <li>Google Play-ից (Android օպերացիոն համակարգով աշխատող սարքերի համար՝ Samsung, Sony, Asus, Lenovo, Huawei և այլն...)[cite: 17]:</li>
  </ul>

  <div className="space-y-3 pt-2">
    <h3 className="font-bold text-gray-900 text-lg sm:text-xl">Հավելվածի միջոցով պատվիրել միջազգային վճարային քարտ՝</h3>
    <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
      <li>MasterCard Standard՝ 5.000 դրամ տարեկան սպասարկման վճարով[cite: 17],</li>
      <li>MasterCard Gold՝ 15.000 դրամ տարեկան սպասարկման վճարով[cite: 17],</li>
      <li>Visa Classic՝ 5.000 դրամ տարեկան սպասարկման վճարով[cite: 17],</li>
      <li>Visa Gold՝ 15.000 դրամ տարեկան սպասարկման վճարով[cite: 17]:</li>
    </ul>
  </div>

  <p>
    Վիճակահանությանը մասնակցում են միայն հավելվածի միջոցով պատվիրված քարտերը: Հավելվածից բացի այլ եղանակով՝ Բանկում կամ այլ կերպ պատվիրված քարտերը չեն մասնակցելու վիճակահանությանը[cite: 17]:
  </p>

  <p>
    Քարտային հայտը հաստատվելուց հետո հաճախորդը կստանա SMS & email հաղորդագրություն, որտեղ նշված կլինի հաշվի համարը, որին պետք է փոխանցել քարտի տարեկան սպասարկման վճարը[cite: 17]:
  </p>

  <div className="space-y-3 pt-2">
    <h3 className="font-bold text-gray-900 text-lg sm:text-xl">Քարտի սպասարկման վճարը կարելի է վճարել հետևյալ միջոցներով՝</h3>
    <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
      <li>Evocabank-ի գլխամասային գրասենյակում կամ ցանկացած մասնաճյուղում[cite: 17],</li>
      <li>Կատարել փոխանցում այլ բանկերից[cite: 17],</li>
      <li>Վճարային տերմինալների միջոցով (Telcell, EasyPay, Idram) մուտքագրել Բանկի կողմից տրամադրված հաշվի համարին[cite: 17]:</li>
    </ul>
  </div>

  <p>
    Հաճախորդը վիճակահանությանը կարող է մասնակցել միայն քարտի տարեկան սպասարկման վճարը հաշվի համարին ապահովելուց հետո[cite: 17]:
  </p>

  <p>
    Վիճակահանությանը կարող են մասնակցել 18 տարին լրացած ՀՀ ռեզիդենտ հանդիսացող անձինք: Սոցիալական քարտի կամ սոցիալական քարտ չունենալու մասին տեղեկանքի տվյալների առկայությունը պարտադիր է[cite: 17]:
  </p>

  <p>
    Սույն ակցիայի շրջանակներում, յուրաքանչյուր անձ կարող է պատվիրել միայն 1 քարտ[cite: 17]:
  </p>

  <p>
    Հոկտեմբերի 1-31-ը պատվիրված և սպասարկման վճարը վճարված բոլոր քարտապանները կմասնակցեն խաղարկությանը: Եթե քարտը պատվիրվել է, սակայն վճարումը կատարվել է հոկտեմբերի 31-ի ժ. 24:00-ից հետո, ապա քարտապանը չի մասնակցի վիճակահանությանը[cite: 17]:
  </p>

  <p>
    Ակցիայի շրջանակներում պատվիրված քարտերը մասնակիցներին կտրամադրվեն 20/10/17թ.-ից հետո: Քարտերը կարելի է ստանալ Բանկի ցանկացած մասնաճյուղում կամ քարտի հայտի լրացման ժամանակ քարտապանի կողմից նշված հասցեով անվճար առաքման միջոցով[cite: 17]:
  </p>

  <p>
    Այն անձինք, ովքեր արդեն ունեն հավելվածը, պետք է հոկտեմբերի 1-ից հետո թարմացնեն (update) իրենց հավելվածը: Թարմացումից հետո այն ավտոմատ կվերափոխվի EvocaTouch հավելվածի, որից հետո հաճախորդը կարող է մասնակցել ակցիային՝ հավելվածի միջոցով վճարային քարտ պատվիրելով[cite: 18]:
  </p>

  <p>
    Վիճակահանության թափանցիկությունն ապահովելու նպատակով այն անցկացվելու է հրապարակային[cite: 18]:
  </p>

  <p>
    Նոյեմբերի 1-ին հեռուստատեսությամբ՝ ուղիղ հեռարձակմամբ տեղի կունենա վիճակահանությունը, որի ընթացքում Իվետա Մուկուչյանը պատահականության սկզբունքով կհանի այն 75 հաջողակների անունները, ովքեր նոյեմբերի 16-18-ը կմեկնեն Դուբայ՝ իրենց նախընտրած անձանց հետ[cite: 18]:
  </p>

  <p>
    Ցանկության դեպքում, հաղթող քարտապանը կարող է մրցանակը փոխանցել միայն իր ընտանիքի անդամներից որևէ մեկին: Ակցիայի շրջանակում ընտանիքի անդամ են համարվում հայրը, մայրը, ամուսինը, ամուսնու ծնողները, տատը, պապը, քույրը, եղբայրը, երեխան, երեխայի ամուսինը, թոռը, քրոջ, եղբոր ամուսինն ու երեխան: Մրցանակը ընտանիքի անդամներից որևէ մեկին փոխանցելու պարագայում՝ հաղթողը պետք է Բանկ ներկայացնի ընտանեկան կապը հավաստող համապատասխան փաստաթղթերը (անձնագրեր, ծննդյան և ամուսնության վկայականներ)[cite: 18]:
  </p>

  <div className="space-y-3 pt-2">
    <h4 className="font-semibold text-gray-900">Վիճակահանության հաղթողները՝ 150 անձ (75 հաղթող x 2)՝[cite: 18]</h4>
    <ul className="list-disc pl-6 space-y-2 marker:text-purple-700">
      <li>Նոյեմբերի 16-ին հատուկ չվերթով կմեկնեն Դուբայ[cite: 18],</li>
      <li>Կմնան 5 աստղանի The Westin Dubai, Al Habtoor City հյուրանոցում[cite: 18],</li>
      <li>Կմասնակցեն Dubai City Tour-ի[cite: 18],</li>
      <li>Կայցելեն ճաշի աշխարհի լավագույն հյուրանոցներից համարվող՝ Burj Al Arab և Atlantis the Palm[cite: 18],</li>
      <li>Կայցելեն Miracle Garden[cite: 18],</li>
      <li>Կբարձրանան աշխարհի ամենաբարձր շենքի՝ Burj Khalifa-ի գագաթը՝ At The Top[cite: 18],</li>
      <li>Կմասնակցեն նավով կրուիզի Dubai Marina-ում, կընթրեն նավի վրա[cite: 18],</li>
      <li>Կմասնակցեն Jennifer Lopez-ի՝ Դուբայում կայանալիք համերգին՝ VIP տոմսերով[cite: 18],</li>
      <li>Նոյեմբերի 18-ին հատուկ չվերթով կվերադառնան Երևան[cite: 18]:</li>
    </ul>
  </div>

  <p className="pt-2">
    Ակցիայի գովազդային հոլովակը կարող եք դիտել{' '}
    <a 
      href="/hy" 
      className="text-purple-700 underline font-semibold hover:text-purple-900 transition-colors"
    >
      այստեղ
    </a>[cite: 18]:
  </p>

  <p>
    Տուրի 150 մասնակիցների տոմսի, վիզայի, հյուրանոցի, սննդի, տրանսֆերների, տրանսպորտի, տուրերի, էքսկուրսիաների և Jennifer Lopez-ի համերգի տոմսերի ծախսերը հոգալու է Evocabank-ը: Այլ անձնական ծախսերը պետք է հոգան մասնակիցները[cite: 18]:
  </p>

  <p>
    Բանկը մրցանակի փոխարեն գումարային փոխհատուցում չի իրականացնում և չի փոխարինում այլ նվերով[cite: 18]:
  </p>

  <p>
    Բանկը պատասխանատվություն չի կրում վիզայի հնարավոր մերժման համար: Վիզայի մերժման դեպքում, հաղթողն ինքն է որոշում՝ իր ընտանիքի անդամներից ում փոխանցի մրցանակը[cite: 18]:
  </p>

  <div className="space-y-4 pt-4 border-t border-purple-50">
    <h3 className="font-bold text-gray-900 text-lg sm:text-xl">ԱՄՆ-ի վիզա ստանալու գործընթացը՝[cite: 19]</h3>
    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
      <li>Վիզան շնորհվում է ԱՄՆ-ի Իմիգրացիոն գրասենյակի կողմից, և ոչ ոք իրավասություն չունի ազդելու այդ գործընթացի վրա[cite: 19]:</li>
      <li>Բանկը չի երաշխավորում վիզայի ստացումը[cite: 19]:</li>
      <li>Ցանկացած դիմող կարող է մերժվել Իմիգրացիոն գրասենյակի կողմից (առանց հատուկ պատճառ նշելու) կամ կարող են պահանջվել հավելյալ ստուգումներ և փաստաթղթեր[cite: 19]:</li>
      <li>Վիզայի գործընթացի միջին տևողությունը 5-7 աշխատանքային օր է[cite: 19]:</li>
      <li>Սիրիայի քաղաքացիները ներկայումս չկարող են ստանալ ԱՄՆ վիզա[cite: 19]:</li>
      <li>Հայկական անձնագրով, սակայն սիրիական արմատներով կամ ծնունդով Սիրիայից դիմողներից կպահանջվի ներկայացնել հավելյալ փաստաթղթեր[cite: 19]:</li>
      <li>Վիզա ստանալու դիմումը ներկայացնելու պահին անձնագրի վավերականության ժամկետը պետք է լինի առնվազն 6 ամիս[cite: 19]:</li>
    </ol>
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
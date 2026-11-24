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
              <button onClick={() => handleNavigation('/news/products')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer shrink-0">Պրոդուկտներ</button>
              <span>›</span>
              <span className="text-gray-800 font-medium shrink-0">Անցիր էլեկտրական մեքենայի Evoca-ի հետ











</span>
            </div>
          </div>

          {/* Վերնագրային բլոկ (Hero Section) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden">
            <div className="space-y-6">
             <Link to="/news/products" className="flex items-center space-x-2 group w-fit no-underline">
   <span className="w-3 h-3 bg-pink-500 rounded-sm inline-block"></span>
   <span className="text-purple-700 font-bold text-sm sm:text-base group-hover:underline">Պրոդուկտներ</span> </Link>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
Անցիր էլեկտրական մեքենայի Evoca-ի հետ
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Հարմարավետություն, արագություն, շրջակա միջավայրի պահպանություն. Evocabank-ն առաջարկում է էլեկտրական մեքենաների ձեռքբերման ֆինանսավորում:






              </p>

              <div className="text-gray-400 text-sm font-medium pt-2">
09.11.2022
              </div>
            </div>

            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-neutral-900">
              <img 
                src="https://www.evoca.am/images-cache/news/1/16679977844115/780x585.jpg" 
                alt="Evoca Digital քարտեր" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

    <article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p className="font-semibold text-gray-900">
    <strong className="text-purple-800">Evocabank</strong>-ն առաջարկում է անհատական օգտագործման <strong className="text-purple-800 font-bold">էլեկտրական մեքենաների ձեռքբերման վարկ</strong>՝ մինչև 50,000,000 դրամի չափով և մինչև 7 տարի մարման ժամկետով[cite: 16]:
  </p>

  <p>
    Տարեկան անվանական տոկոսադրույքը կազմում է 12%*[cite: 16]:
  </p>

  <p>
    Առաջնային շուկայից գնելու դեպքում դուք կստանաք մեքենայի՝ ավտոսրահի իրացման գնի մինչև 80%-ը[cite: 16]:
  </p>

  <p className="pt-2 border-t border-purple-50">
    Վարկի մանրամասներին ծանոթացեք <a href="#" className="text-purple-700 underline font-medium">այստեղ</a> կամ զանգահարեք <strong className="text-purple-800 font-bold">010605555</strong> հեռախոսահամարով[cite: 16]:
  </p>

  <div className="space-y-4 pt-4 border-t border-purple-100">
    <h3 className="text-xl font-bold text-purple-800">
      Ինչո՞ւ գնել էլեկտրական մեքենա (EV - electric vehicle)[cite: 16]
    </h3>

    <p>
      Էլեկտրական մեքենաներն <strong className="text-purple-800 font-bold">առավել անվտանգ են և էկոլոգիապես մաքուր</strong>: Էլեկտրական մեքենա վարելով դուք հոգ եք տանում շրջակա միջավայրի մասին, քանի որ EV մեքենաներն ավելի քիչ վնասակար գազային արտանետումներ են թողնում[cite: 16]:
    </p>

    <p>
      Էլեկտրական մեքենաները սովորաբար <strong className="text-purple-800 font-bold">ավելի ամուր են ու հուսալի</strong>, ինչի շնորհիվ հազվադեպ են փչանում: Ի տարբերություն ավանդական՝ բենզինով կամ դիզելային վառելիքով մեքենաների՝ դուք չեք ունենա մեքենայի շարժիչի հետ հաճախ հանդիպող անսարքություններ, ինչպես նաև՝ մեքենայի յուղ, ֆիլտր, անտիֆրիզ և մի շարք մասեր փոխելու անհրաժեշտություն[cite: 16]:
    </p>

    <p>
      Էլեկտրական մեքենաներն <strong className="text-purple-800 font-bold">առավել հարմար են քաղաքային տեղաշարժի համար</strong>, քանի որ հաճախ կատարվող կանգառներն ու շարժիչի գործարկումը խնդիր չէ մեքենայի համար,իսկ շարժիչի աղմուկը գրեթե բացակայում է[cite: 16]:
    </p>
  </div>

  <div className="space-y-4 pt-4 border-t border-purple-100">
    <h3 className="text-xl font-bold text-purple-800">
      Ինչպիսի՞ ֆինանսական օգուտներ կունենաք էլեկտրական մեքենայի անցնելով[cite: 16]
    </h3>

    <p>
      Էլեկտրական շարժիչով մեքենաների ՀՀ ներմուծումն ազատված է մաքսատուրքերից, ինչպես նաև՝ 20% ավելացված արժեքի հարկից: Այսինքն՝ <strong className="text-purple-800 font-bold">հարկային-մաքսային առավելության շնորհիվ</strong> դուք ազատվում եք հարկերից՝ մեքենայի գնի մոտ 35%-ի չափով[cite: 16]:
    </p>

    <p>
      Էլեկտրական մեքենա վարելով դուք <strong className="text-purple-800 font-bold">խնայում եք վառելիքի վրա ծախսվող գումարը</strong>: Մեքենայի գնման գումարը մի քանի տարում ձետ է գալու, քանի որ <strong className="text-purple-800 font-bold">լիցքավորման ծախսն առնվազն 10 անգամ ավելի ցածր է</strong>, քան բենզինի կամ դիզելային վառելիքի ծախսը[cite: 16]:
    </p>

    <p>
      Ամբողջապես էլեկտրական շարժիչով կահավորված մեքենաներն <strong className="text-purple-800 font-bold">ազատված են նաև կայանման վճարներից (կարմիր գիծ)</strong>[cite: 16]:
    </p>
  </div>

  <div className="space-y-4 pt-4 border-t border-purple-100">
    <h3 className="text-xl font-bold text-purple-800">
      Ինչպե՞ս լիցքավորել էլեկտրական մեքենան[cite: 16]
    </h3>

    <p>
      Հաճախ վարորդները հրաժարվում են էլեկտրական մեքենա գնելուց, քանի որ չեն պատկերացնում, թե ինչպես է կարելի այն լիցքավորել: EV մեքենան կարելի է լիցքավորման միացնել տնից, ավտոտնակից և հասարակական վայրերում տեղադրված լիցքավորման կայաններից[cite: 16]:
    </p>

    <p>
      Երևանում վարորդը միջինում վարում է 25կմ, այսինքն՝ մեքենայի մեկ ամբողջական լիցքավորման շնորհիվ կարելի է մեքենան վարել մոտ 1 շաբաթ[cite: 16]:
    </p>

    <p>
      ՀՀ տարածքում առկա էլեկտրական մեքենաների լիցքավորման անվճար կայաններ կարելի է գտնել ինչպես Երևանում, այնպես էլ՝ Երևանից դուրս՝ բոլոր մարզերում: Կայներում կգտնեք նաև հոսանքի փոխարկիչներ՝ տարբեր մոդելների մեքենաների համար: Լիցքավորիչների գտնվելու վայրերը կարող եք տեսնել քարտեզով <a href="#" className="text-purple-700 underline font-medium">այստեղ</a>[cite: 16]:
    </p>

    <p>
      EV մեքենաների լիցքավորման միակ անհարմարությունը կարող է լինել լիցքավորման տևողությունը: Եթե տանը կամ ավտոտնակում ունեք լիցքավորման հնարավորություն, մեքենան գիշերը լիցքավորելը լավագույն տարբերակն է: Հակառակ դեպքում լիցքավորումը կարող է տևել 1-ից մինչև մի քանի ժամ: ՀՀ-ում սահմանափակ քանակով կան նաև արագ լիցքավորման կայաններ[cite: 16]:
    </p>

    <p>
      Էլեկտրական մեքենաները կարելի է նույնիսկ վերալիցքավորել՝ օգտագործելով արևային վերականգնվող էներգիա, ինչը կարող է բարձրացնել երկրի էներգետիկ անկախությունը[cite: 17]:
    </p>
  </div>

  <div className="space-y-4 pt-4 border-t border-purple-100">
    <h3 className="text-xl font-bold text-purple-800">
      Ո՞ր դիմել մեքենայի անսարքության դեպքում[cite: 17]
    </h3>

    <p>
      Վերջին տարիներին Հայաստանում բացվել են էլեկտրական մեքենաներ սպասարկող սերվիս-կենտրոններ: Էլեկտրական մեքենաների սպասարկման ծախսերը նույնպես ավելի ցածր են: Կան նաև EV մեքենաներ արտադրող ընկերությունների պաշտոնական ներկայացուցիչներ, որոնք նոր մեքենա գնելու դեպքում տրամադրում են երաշխիք, սպասարկում և այլ արտոնություններ[cite: 17]:
    </p>

    <p>
      Այսօր ՀՀ-ում կա ավելի քան 600 էլեկտրական մեքենա: Վերջինիս քանակի աճին զուգահեռ կբարելավվեն նաև սպասարկման պայմանները և հարմարությունները[cite: 17]:
    </p>

    <p className="pt-2 border-t border-purple-50 font-medium text-purple-900">
      <strong className="text-purple-800">Evocabank</strong>-ը մշտապես ներդնում է միջազգային շուկային համապատասխան պրոդուկտներ և ծառայություններ՝ զարգացնելով երկրի էկոհամակարգը[cite: 17]:
    </p>
  </div>
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
            <Link to="/products/evocabank-participates-in-autoshow-2026" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="	https://www.evoca.am/images-cache/news/1/17902383376936/428x321.png" alt="TRF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
                
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                    Evoca-ն մասնակցում է Armenian Auto Show 2026-ին
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">22.09.2026</span>
              </div>
            </Link>

            {/* Քարտ 3 */}
            <Link to="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col group cursor-pointer">
              <div className="aspect-[439/320] w-full bg-gray-100 overflow-hidden">
                <img src="https://www.evoca.am/images-cache/news/1/17901523859882/428x321.png" alt="AUA 35" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-grow space-y-3">
               
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-purple-700 transition-colors line-clamp-2">
                  Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից
                </h3>
                <span className="text-xs text-gray-400 mt-auto pt-2">21.09.2026</span>
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
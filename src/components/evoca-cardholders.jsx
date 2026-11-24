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
            <span className="text-gray-900 font-medium truncate max-w-xs">Ամենամեծ ակցիան Evoca Visa քարտապանների համար


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
Ամենամեծ ակցիան Evoca Visa քարտապանների համար
    </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
Evoca Visa քարտապա՜ն, այսպիսի մասշտաբային ակցիա դժվար էլ գտնես։ Այս անգամ քեզ համար այնքան շատ զեղչեր ունենք:

            </p>
            <div className="text-sm font-semibold text-gray-400">
26.08.2024
</div>
          </div>
          
          {/* Գլխավոր նկարի հատված */}
          <div className="flex justify-center">
            <div className="w-full h-64 sm:h-80 bg-purple-100 rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="	https://www.evoca.am/images-cache/news/1/1724744341029/780x585.png" 
                alt="Adidas Armenia discount" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
<article className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-purple-100 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>Շտապիր խանութից սրճարան, սպայից մարզասրահ, պասիվ հանգստից էքստրիմ, որ հասցնես ամեն ինչից օգտվել…[cite: 9]</p>
  
  <p>Լաաաավ, չենք ձգձգում, սկսիր ծանոթանալ մեր զեղչերին:[cite: 9]</p>
  
  <p>Քեզ համար հատուկ խմբավորել ենք, որ արագ գտնես քո նախընտրածը:[cite: 9]</p>

  {/* 1. Խանութ-սրահներ */}
  <div className="space-y-3 pt-2">
    <h3 className="text-xl font-bold text-purple-800 text-center">1. Խանութ-սրահներ[cite: 9]</h3>
    <p>Շոփինգի սիրահարներ, այս խումբը քեզ համար ենք առանձնացրել:[cite: 9]</p>
    <p>Մինչև դեկտեմբերի 31-ը կատարիր գնումներ ստորև նշված խանութ-սրահներից, վճարիր քո Evoca Visa քարտով և ստացիր 10% զեղչ[cite: 9]․</p>
    
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>COLE HAAN</strong> (քարտեր՝ Evoca Visa Gold, Evoca Visa Infinite)[cite: 9]</li>
      <li><strong>Jackand Jones</strong> (քարտեր՝ Evoca Visa Gold, Evoca Visa Infinite)Levi's Visa Gold, Visa Infinite[cite: 9]</li>
      <li><strong>Levi's</strong> (քարտեր՝ Evoca Visa Gold, Evoca Visa Infinite)Levi's Visa Gold, Visa Infinite[cite: 9]</li>
      <li><strong>New Balance</strong> (քարտեր՝ Evoca Visa Gold, Evoca Visa Infinite)[cite: 9]</li>
      <li><strong>Puma</strong> (քարտեր՝ Evoca Visa Gold, Evoca Visa Infinite)[cite: 9]</li>
      <li><strong>Lee Wrangler</strong> (քարտեր՝ Evoca Visa Gold, Evoca Visa Infinite)[cite: 9]</li>
    </ul>
  </div>

  {/* 2. Սրճարաններ */}
  <div className="space-y-3 pt-4">
    <h3 className="text-xl font-bold text-purple-800 text-center">2. Սրճարաններ[cite: 9]</h3>
    <p>Քեզ համար բերել ենք նաև ֆենսի սրճարաններ, որտեղ կարող ես ստանալ մեծ զեղչեր:[cite: 9]</p>
    <p>Մինչև դեկտեմբերի 31-ը վճարիր Evoca Visa Gold, Evoca Visa Infinite քարտերով և ստացիր՝[cite: 9]</p>
    
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Pipl</strong> - 10% զեղչ նախաճաշի համար: Զեղչը գործում է ամեն օր՝ ժամը 9:30-ից մինչև 12:00[cite: 9]</li>
      <li><strong>The Lodge</strong> - 10% զեղչ[cite: 9]</li>
      <li><strong>PAUL Armenia</strong> - 10% զեղչ[cite: 9]</li>
      <li><strong>Square One</strong> - 15% զեղչ[cite: 9]</li>
      <li><strong>Cinnabon Armenia</strong> - 15% զեղչ[cite: 9]</li>
      <li><strong>Segafredo Armenia</strong> - 15% զեղչ միայն սուրճի տեսականու համար[cite: 9]</li>
      <li><strong>Prepa</strong> - 5% cashback' միայն Evoca Visa Infinite քարտերով վճարելիս: Գնումներ կատարելիս դիմիր Prepa բոնուսային քարտի համար և ակտիվացրու այն: Ստացված cashback-ը կարող եսօգտագործել հաջորդ գնումների ժամանակ[cite: 9]</li>
    </ul>
  </div>

  {/* 3. Խնամք */}
  <div className="space-y-3 pt-4">
    <h3 className="text-xl font-bold text-purple-800 text-center">3. Խնամք[cite: 9]</h3>
    <p>Դե իհարկե չենք մոռանում խնամքի մասին: Մինչև դեկտեմբերի 31-ը վճարիր Evoca Visa Gold, Evoca Visa Infinite քարտերով և ստացիր՝[cite: 9]</p>
    
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>AKG More Than A Pharmacy</strong> - 10% զեղչ, ստանալու համար հարկավոր է տրամադրել <strong>WOPAKG</strong> պրոմոկոդը[cite: 9]</li>
    </ul>

    <p className="text-sm text-gray-600 pt-2">
      Մասնակից ապրանքանիշեր՝ Jowae, Eucerin, CL, Nuxe, Rocs, Attirance, Royal Comfort pampers, PilloComfort pampers, PilloPremium pampers, Suavinex, Alkmene, Aldo Vandini, Parsa, Batiste, Biolane, La Cure Beaute, Segreta, Prim, EI. , The Body Shop, Apivita, Monsieur Barbier, Cumlaude, Revolution, Uriage, Embryolisse, Hello Nature, Matchstick Monkey, Mincer Pharma, Cerave, Sonisk, The Ordinary:[cite: 9]
    </p>

    <ul className="list-disc pl-6 space-y-2 pt-2">
      <li><strong>The Body Shop</strong> - 10% զեղչ, ստանալու համար հարկավոր է տրամադրել <strong>WOPTBS</strong> պրոմոկոդը[cite: 10]</li>
    </ul>

    <p className="pt-2">Առաջարկը գործում է ապրանքանիշի ողջ տեսականու համար այն քարտապանների համար:[cite: 10]</p>

    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Sirun Ankyun</strong> - վաուչեր քո հաջորդ գնումների համար[cite: 10]</li>
    </ul>

    <p>Վաուչերի գումարը կախված է քո կատարած գնումների չափից՝[cite: 10]</p>
    <ol className="list-decimal pl-6 space-y-1">
      <li>50,000 դրամ գնումների դեպքում տրամադրվում է վաուչեր՝ 5,000 դրամի չափով[cite: 10]</li>
      <li>70,000 դրամ գնումների դեպքում տրամադրվում է վաուչեր՝ 7,000 դրամի չափով[cite: 10]</li>
    </ol>
  </div>

  {/* 4. Սպորտ, հանգիստ և էքստրիմ */}
  <div className="space-y-3 pt-4">
    <h3 className="text-xl font-bold text-purple-800 text-center">4. Սպորտ, հանգիստ և էքստրիմ[cite: 10]</h3>
    <p>Այս խումբն ամենայուրահատուկն է, որովհետև այն կհետաքրքրի և՛ սպորտի, և՛ էքստրիմի սիրահարներին: Այստեղ նաև պասիվ հանգստի սիրահարներն ունեն զեղչեր: Վճարիր Evoca Visa քարտերով և ստացիր՝[cite: 10]</p>

    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Ararat Golf ակումբ</strong> - 15% զեղչ[cite: 10]</li>
    </ul>
    <p className="text-sm text-gray-600">Առաջարկը գործում է մինչև հոկտեմբերի 31-ը՝ միայն Evoca Visa Infinite քարտերով վճարելու դեպքում: Զեղչը չի տարածվում սննդի և խմիչքի վրա:[cite: 10]</p>

    <ul className="list-disc pl-6 space-y-2 pt-2">
      <li><strong>Pure Pilates</strong> -15% զեղչ[cite: 10]</li>
    </ul>
    <p className="text-sm text-gray-600">Առաջարկը գործում է մինչև դեկտեմբերի 31-ը՝ միայն Evoca Visa Infinite քարտերով վճարելու դեպքում:[cite: 10]</p>
    <p className="text-sm text-gray-600">Քարտապանները կարող են օգտվել առաջարկից մեկ անգամ: Այս առաջարկը հասանելի է Pure Pilates-ի նոր հաճախորդների համար: Գործող հաճախորդները չեն կարող օգտվել առաջարկից: Երկարաժամկետ բաժանորդագրություն գնելիս՝ քարտապանն առնվազն մեկ ամիս հնարավորություն է ստանում հյուրին հրավիրել դասի:[cite: 10]</p>

    <ul className="list-disc pl-6 space-y-2 pt-2">
      <li><strong>Apricot հյուրանոց</strong> - արտոնություններ[cite: 10]</li>
    </ul>
    <p className="text-sm text-gray-600">Առաջարկը գործում է մինչև դեկտեմբերի 31-ը: Գյումրու, Երևանի և Աղվերանի Apricot հյուրանոցներում Evoca Visa Gold, Evoca Visa Infinite քարտերով վճարումներ կատարող քարտապանը ստանում է հետևյալ արտոնությունները՝[cite: 10]</p>
    <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-600">
      <li>Հնարավորության դեպքում օգտվել վաղաժամ գրանցման հնարավորությունից մինչև 4 ժամ առաջ,[cite: 10]</li>
      <li>Հնարավորության դեպքում ուշ դուրս գալ համարից՝ մինչև 4 ժամ հետո,[cite: 10]</li>
      <li>Անվճար սենյակի դասի բարձրացում հյուրանոցում՝ կախված առկայությունից:[cite: 11]</li>
    </ol>

    <ul className="list-disc pl-6 space-y-2 pt-2">
      <li><strong>Apaga Resort</strong> - արտոնություններ[cite: 11]</li>
    </ul>
    <p className="text-sm text-gray-600">Առաջարկը գործում է մինչև դեկտեմբերի 31-ը: Evoca Visa Gold, Evoca Visa Infinite քարտերով վճարումներ կատարող քարտապանը ստանում է հետևյալ արտոնությունները՝[cite: 11]</p>
    <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-600">
      <li>Նվեր՝ Darman ապրանքանիշի բուսական թեյերի հավաքածու և ձեռագործ շոկոլադ,[cite: 11]</li>
      <li>Առկայության դեպքում սենյակի դասի բարձրացման հնարավորություն:[cite: 11]</li>
    </ol>

    <ul className="list-disc pl-6 space-y-2 pt-2">
      <li><strong>Yell Extreme Park</strong> - արտոնություններ[cite: 11]</li>
    </ul>
    <p className="text-sm text-gray-600">Առաջարկը գործում է մինչև դեկտեմբերի 31-ը: Evoca Visa Gold, Evoca Visa Infinite քարտերով վճարումներ կատարող քարտապանը ստանում է հետևյալ արտոնությունները՝[cite: 11]</p>
    
    <p className="pt-2">«Zip Line» տոմսը «Special Adventure Pass» տոմսով թարմացնելու հնարավորություն:[cite: 11]</p>
    <p className="font-semibold pt-1">«Special Adventure Pass»-ը ներառում է՝[cite: 11]</p>
    <ol className="list-decimal pl-6 space-y-1">
      <li>Թռիչք զիփլայնով,[cite: 11]</li>
      <li>Ropeway պարկ,[cite: 11]</li>
      <li>Ֆերատա,[cite: 11]</li>
      <li>10 րոպե ձիավարություն արենայում:[cite: 11]</li>
    </ol>
  </div>

  <div className="pt-6 border-t border-purple-100">
    <p className="italic font-semibold text-gray-800">
      <strong>Ուշադրություն.</strong> զեղչերը չեն տարածվում հատուկ առաջարկների կամ զեղչերի վրա:[cite: 11]
    </p>
    <p className="pt-2">
      Լրացուցիչ տեղեկությունների համար կարող ես այցելել{' '}
      <a 
        href="https://cis.visa.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-purple-700 underline font-medium"
      >
        cis.visa.com
      </a>
     [cite: 11]
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
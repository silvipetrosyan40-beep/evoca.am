import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Header from './header';
import Footer from './footer';

export default function MastercardStandard() {
  const navigate = useNavigate();
  const [activeCurrency, setActiveCurrency] = useState('amd');
  const [activeTab, setActiveTab] = useState('about');

  // Սլայդերի նավարկության համար հղումներ (Refs)
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Քարտերի ցանկը
 const cards = [
    { id: 1, title: "Arca Union Pay Co-badge", img: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png", path: "/cards/arca-union-pay" },
    { id: 2, title: "Evoca Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png", path: "/cards/gift-card" },
    { id: 3, title: "Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png", path: "/cards/visa-infinite" },
    { id: 4, title: "Mastercard World Digital", img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png", path: "/cards/mastercard-world-digital" },
    { id: 5, title: "Evoca Digital Card", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", path: "/card" },
    { id: 6, title: "Visa Classic", img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png", path: "/cards/visa-classic" },
    { id: 7, title: "Mastercard Standard", img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png", path: "/cards/mastercard-standard" },
    { id: 8, title: "Visa Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png", path: "/cards/visa-gold" },
    { id: 9, title: "Mastercard Gold", img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png", path: "/cards/mastercard-gold" },
    { id: 10, title: "MyLer Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png", path: "/cards/myler-gift-card" },
    { id: 11, title: "4U.am Gift card", img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png", path: "/cards/4u-gift" },
    { id: 12, title: "ArCa Classic", img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png", path: "/cards/arca-classic" },
    { id: 13, title: "Wilco Visa Infinite", img: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png", path: "/cards/wilco-visa-infinite" },
    { id: 14, title: "Evoca Visa Platinum", img: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png", path: "/cards/visa-platinum-card" },
    { id: 15, title: "Visa Digital", img: "	https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png", path: "/cards/visa-digital-card" },
    { id: 16, title: "Rio Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png", path: "/cards/rio-gift-card-tariffs" },
    { id: 17, title: "Dalma Gift Card", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png", path: "/cards/dalma-gift-card" },
    { id: 18, title: "UnionPay Gold", img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png", path: "/cards/unionpay-gold" },
    { id: 19, title: "UnionPay Business Platinum", img: "	https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png", path: "/cards/unionpay-platinum" },
   { id: 20, title: "Visa Business", img: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png", path: "/cards/visa-business-card" },

  ];
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      
      <div>
        <Header />

        {/* 1. Վերին մանուշակագույն ենթամենյու (#6400DC) */}
        <div className="bg-[#6400DC] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-1 overflow-x-auto text-sm">
              <a href="#" className="bg-[#5200b3] px-5 py-3 font-medium transition-colors">Քարտեր</a>
              <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Քարտերի տրամադրում և սպասարկում</a>
              <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Սոցիալական ապահովության վճարային քարտեր</a>
              <a href="#" className="hover:bg-[#5200b3] px-5 py-3 font-medium transition-colors">Evoca Benefits</a>
            </nav>
          </div>
        </div>

        {/* 2. Hero բաժին */}
        <div className="relative bg-gradient-to-tr from-[#6400DC]/10 via-white to-white pt-10 pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Mastercard Standard
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն:
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png" 
                alt="Mastercard Standard" 
                className=" max-w-md rounded-2xl shadow-xl object-cover"
              />
            </div>

          </div>

          {/* Վերադառնալ և Հացի փշրանքներ */}
          <div className="max-w-7xl mx-auto px-4 mt-10 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 text-gray-700 font-medium cursor-pointer transition-all"
            >
              <span>←</span>
              <span>Վերադառնալ</span>
            </button>

            <div className="flex items-center space-x-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
              <span className="text-gray-400 text-sm">🏠</span>
              <span>/</span>
              <span>Անհատ</span>
              <span>/</span>
              <span>Քարտեր</span>
              <span>/</span>
              <span>Քարտեր</span>
              <span>/</span>
              <span>Mastercard</span>
              <span>/</span>
              <span className="text-gray-800 font-semibold">Mastercard Standard</span>
            </div>
          </div>
        </div>

        {/* 3. Ներդիրներ և բովանդակություն */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          
          <div className="flex space-x-8 border-b border-gray-200 mb-8 text-sm font-medium">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-3 relative cursor-pointer transition-colors ${
                activeTab === 'about'
                  ? 'text-gray-900 font-bold border-b-2 border-[#6400DC]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Քարտի մասին
            </button>
            <button
              onClick={() => setActiveTab('tariffs')}
              className={`pb-3 relative cursor-pointer transition-colors ${
                activeTab === 'tariffs'
                  ? 'text-gray-900 font-bold border-b-2 border-[#6400DC]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Սակագներ և դրույթներ
            </button>
          </div>

          {/* Պայմանական ռենդեր՝ կախված ընտրված ներդիրից */}
          {activeTab === 'about' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-[#6400DC]">Evocabank</strong>-ը, կարևորելով իր հաճախորդների դրամական միջոցների ապահովությունն ու անվտանգությունը, առաջարկում է <strong className="text-[#6400DC]">Mastercard Standard</strong> վճարային քարտեր՝ հնարավորություն տալով կենտրոնանալ կյանքի առավել կարևոր իրադարձությունների վրա:
                </p>
                
                <p>
                  <strong className="text-[#6400DC]">Mastercard Standard</strong> քարտը հանդիսանում է <strong className="text-[#6400DC]">Mastercard միջազգային վճարահաշվարկային համակարգի չիպային քարտ</strong>: Այն օժտված է ժամանակակից տեխնոլոգիաներով և ապահովված է դրամական միջոցների անվտանգության ապահովման բարձր մակարդակով: Քարտը հնարավոր է օգտագործել ինչպես ՀՀ տարածքում, այնպես էլ ամբողջ աշխարհում:
                </p>

                <p>
                  Դու կկարողանաս քո <strong className="text-[#6400DC]">Mastercard Standard</strong> քարտից գումար կանխիկացնել, անկանխիկ վճարումներ կատարել բոլոր այն սպասարկման և առևտրի կետերում, որտեղ փակցված կլինի Mastercard տարբերանշանը:
                </p>

                <p>
                  Եթե հաճախ ես ճամփորդում, այս քարտը քեզ համար պարզապես անհրաժեշտություն կդառնա: Դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա՝ վճարելով <strong className="text-[#6400DC]">Mastercard Standard</strong> քարտով:
                </p>

                <p>
                  Քարտը կարող ես պատվիրել և ստանալ առանց բանկ այցելելու: <strong className="text-[#6400DC]">EvocaTOUCH</strong> հավելվածի միջոցով պարզ քայլերի հաջորդականությամբ կկարողանաս պատվիրել այն՝ նշելով այն հասցեն, որտեղից կցանկանաս ստանալ քարտը: կարևորելով մեր հաճախորդների ժամանակը՝ առաքման անվճար ծառայության միջոցով Հայաստանի ցանկացած կետում կտրամադրենք քո քարտը:
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
                <div className="flex justify-between border-b pb-4">
                  {[
                    { id: 'amd', label: '֏' },
                    { id: 'usd', label: '$' },
                    { id: 'eur', label: '€' },
                    { id: 'rub', label: '₽' },
                  ].map((curr) => (
                    <button
                      key={curr.id}
                      onClick={() => setActiveCurrency(curr.id)}
                      className={`w-10 h-10 rounded-full font-bold flex items-center justify-center shadow transition-all cursor-pointer ${
                        activeCurrency === curr.id
                          ? 'bg-[#6400DC] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {curr.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-2xl font-bold text-[#6400DC] w-1/3">0%</span>
                    <span className="text-gray-600 w-2/3 text-right">Կանխիկացում բանկի կանխիկացման կետերում մինչև 1 մլն ֏</span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-2xl font-bold text-[#6400DC] w-1/3">0.8%</span>
                    <span className="text-gray-600 w-2/3 text-right">Կանխիկացում Արքա անդամ բանկերի կանխիկացման կետերում</span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="w-1/3">
                      <span className="text-[10px] text-gray-400 block">min 1,500 ֏</span>
                      <span className="text-2xl font-bold text-[#6400DC]">1%</span>
                    </div>
                    <span className="text-gray-600 w-2/3 text-right">Կանխիկացում Արքա անդամ չհանդիսացող բանկերի կանխիկացման կետերում</span>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-xl font-bold text-[#6400DC] w-1/3">5000 ֏</span>
                    <span className="text-gray-600 w-2/3 text-right">Քարտի տարեկան սպասարկում</span>
                  </div>

                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xl font-bold text-[#6400DC] w-1/3">15,000 ֏</span>
                    <span className="text-gray-600 w-2/3 text-right">Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Սակագներ և դրույթներ աղյուսակային բաժին */
            <div className="space-y-12">
              
              {/* 1. Հիմնական վճարային քարտերի սակագներ */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#6400DC] pl-3">
                  Վճարային քարտեր <sup>[1]</sup>
                </h2>
                
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-purple-50 text-gray-900 border-b border-gray-200">
                        <th className="p-4 font-semibold w-2/5">Մատուցվող ծառայություններ</th>
                        <th className="p-4 font-semibold w-1/5">MasterCard Standard / Visa Classic</th>
                        <th className="p-4 font-semibold w-1/5">MasterCard Gold / Visa Gold <sup>[2]</sup></th>
                        <th className="p-4 font-semibold w-1/5">Visa Business</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի տրամադրում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի սպասարկում (Տարեկան)</td>
                        <td className="p-4">5,000 ՀՀ դրամ</td>
                        <td className="p-4">15,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի սպասարկում (Ամսական)</td>
                        <td className="p-4">
                          MasterCard Standard՝ 500 ՀՀ դրամ <span className="text-xs text-gray-500 block mt-1">(Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <strong>Բանկի մասնաճյուղերում</strong>)</span>
                        </td>
                        <td className="p-4">
                          MasterCard Gold՝ 1,500 ՀՀ դրամ <span className="text-xs text-gray-500 block mt-1">(Ամսական սպասարկման վճարով քարտի պատվեր հնարավոր է իրականացնել միայն <strong>Բանկի մասնաճյուղերում</strong>)</span>
                        </td>
                        <td className="p-4">-</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Շտապ թողարկում</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Օտարերկրյա քաղաքացիների / ոչ ռեզիդենտների սպասարկում</td>
                        <td className="p-4">15,000 ՀՀ դրամ</td>
                        <td className="p-4">45,000 ՀՀ դրամ</td>
                        <td className="p-4">30,000 ՀՀ դրամ <span className="text-xs text-gray-500 block mt-1"><sup>[3]</sup></span></td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Կից քարտի տրամադրում</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Կից քարտի տարեկան սպասարկում <sup>[4]</sup></td>
                        <td className="p-4">3,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">7,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտային հաշվի չնվազող մնացորդ</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                        <td className="p-4">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. Քարտային հաշվի դրական մնացորդի տոկոսներ */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-sm">
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-medium text-gray-900 w-2/5" rowSpan="3">Մինչև 5 մլն. ՀՀ դրամ / Արտարժույթ</td>
                        <td className="p-4 w-1/5">Մինչև 5 մլն. ՀՀ դրամ</td>
                        <td className="p-4 w-1/5">0 %</td>
                        <td className="p-4 w-1/5">0 %</td>
                        <td className="p-4 w-1/5">0 %</td>
                      </tr>
                      <tr>
                        <td className="p-4">5 մլն. ՀՀ դրամ և ավել</td>
                        <td className="p-4">1 %</td>
                        <td className="p-4">1 %</td>
                        <td className="p-4">1 %</td>
                      </tr>
                      <tr>
                        <td className="p-4">Արտարժույթ</td>
                        <td className="p-4">0 %</td>
                        <td className="p-4">0 %</td>
                        <td className="p-4">0 %</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Կանխիկի տրամադրում (Կանխիկացում) */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Քարտերով կանխիկի տրամադրում</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-purple-50 text-gray-900 border-b border-gray-200">
                        <th className="p-4 font-semibold w-2/5">Ծառայություն</th>
                        <th className="p-4 font-semibold w-1/5">MasterCard Standard / Visa Classic</th>
                        <th className="p-4 font-semibold w-1/5">MasterCard Gold / Visa Gold</th>
                        <th className="p-4 font-semibold w-1/5">Visa Business</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-medium text-gray-900" rowSpan="3">Բանկի ATM-ով, քարտային հաշվից և POS տերմինալով <sup>[5]</sup></td>
                        <td className="p-4">
                          <strong>ՀՀ դրամ՝</strong> Ամսական մինչև 1,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար, գերազանցող մասի նկատմամբ՝ 0.2%։ POS տերմինալով՝ 0.2%
                        </td>
                        <td className="p-4">
                          Mastercard Gold՝ Ամսական մինչև 2,000,000 ՀՀ դրամ (ներառյալ)՝ Անվճար, գերազանցող մասի նկատմամբ՝ 0.2%: POS տերմինալով՝ 0.2%
                        </td>
                        <td className="p-4">0.2%</td>
                      </tr>
                      <tr>
                        <td className="p-4">ԱՄՆ դոլար և եվրո</td>
                        <td className="p-4" colSpan="2">0.5%</td>
                        <td className="p-4">0.5%</td>
                      </tr>
                      <tr>
                        <td className="p-4">Այլ արտարժույթ</td>
                        <td className="p-4" colSpan="2">0.3%</td>
                        <td className="p-4">0.3%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">«Արփա» համակարգի անդամ բանկերի ATM-ներով և POS-տերմինալներով <sup>[6]</sup></td>
                        <td className="p-4">0.8%</td>
                        <td className="p-4">0.8%</td>
                        <td className="p-4">0.8%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Օտարերկրյա և «Արփա» չհանդիսացող բանկերի ATM-ներով և POS-տերմինալներով <sup>[7]</sup></td>
                        <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                        <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                        <td className="p-4">1% min 1,500 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. Անկանխիկ գործարքներ և սպասարկում */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Անկանխիկ գործարքներ և սպասարկում</h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse text-sm">
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-medium text-gray-900 w-2/5">Առևտրի կետերում անկանխիկ գործարքներ</td>
                        <td className="p-4 w-3/5" colSpan="3">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտի գործողության կասեցում</td>
                        <td className="p-4" colSpan="3">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Սխալ PIN կամ CVV մուտքագրում</td>
                        <td className="p-4" colSpan="3">1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Վերաթողարկում ժամկետը լրանալիս</td>
                        <td className="p-4" colSpan="3">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Վերաթողարկում կորստի, վնասման կամ PIN-ի կորստի դեպքում</td>
                        <td className="p-4">3,000 ՀՀ դրամ</td>
                        <td className="p-4">10,000 ՀՀ դրամ</td>
                        <td className="p-4">5,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">PIN կոդի գեներացման հայտ</td>
                        <td className="p-4" colSpan="3">1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քարտային հաշվի ամսական քաղվածքի տրամադրում</td>
                        <td className="p-4" colSpan="3">0</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Քաղվածքի տրամադրում 1 ամսից ավելի ժամանակահատվածի համար <sup>[8]</sup></td>
                        <td className="p-4" colSpan="3">1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Կանխիկի մուտքագրում ATM-ով (ATM CASH-IN)</td>
                        <td className="p-4" colSpan="3">0.6%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">SMS հաղորդագրությունների ստացում <sup>[9]</sup></td>
                        <td className="p-4" colSpan="3">
                          Մինչև 5,000 ՀՀ դրամ գործարքներ՝ 20 ՀՀ դրամ<br/>
                          5,000 ՀՀ դրամը գերազանցող գործարքներ՝ 0
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-900">Գերածախսի գծով տույժեր</td>
                        <td className="p-4" colSpan="3">20% տարեկան</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Ծանոթագրություններ */}
              <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 text-xs text-gray-600 space-y-2">
                <p><sup>[1]</sup> Mastercard Standard, Visa Classic, Mastercard Gold, Visa Gold և VISA Infinite տեսակի վճարային քարտերը տրամադրվում են ֆիզիկական անձանց, իսկ Visa Business տեսակի վճարային քարտերը՝ իրավաբանական անձանց:</p>
                <p><sup>[2]</sup> Visa Gold քարտերի թողարկումը դադարեցվել է 25.11.2024թ.-ից:</p>
                <p><sup>[3]</sup> Visa Business քարտի դեպքում օտարերկրյա քաղաքացիություն ունեցող Հայաստանում գրանցված անհատ ձեռնարկատերերի և իրավաբանական անձանց քարտի տարեկան սպասարկում:</p>
                <p><sup>[4]</sup> Քարտի 5 տարվա սպասարկման վճարը գանձվում է միանվագ՝ քարտի բացման պահին:</p>
                <p><sup>[5]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:</p>
                <p><sup>[6]</sup> – <sup>[11]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ: Սակագործը գործում է նաև գործարքի մերժման դեպքում ուղարկված SMS հաղորդագրության համար՝ անկախ գործարքի գումարի չափից:</p>
              </div>

            </div>
          )}
        </section>

        {/* 4. Բաններ բաժին */}
        <section className="bg-pink-400 py-16 text-white text-center relative overflow-hidden mt-12">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
              Ամենօրյա գնումներից մինչև անմոռանալի ճանապարհորդություն` քո Mastercard Standard քարտով
            </h2>
          </div>
        </section>

        {/* 5. Այլ քարտեր (Swiper Slider) */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Այլ քարտեր</h3>
            
            {/* Նավարկության կոճակներ */}
            <div className="flex space-x-2">
              <button 
                ref={prevRef} 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#6400DC] hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
              >
                ❮
              </button>
              <button 
                ref={nextRef} 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#6400DC] hover:bg-purple-50 transition-all cursor-pointer shadow-sm text-sm"
              >
                ❯
              </button>
            </div>
          </div>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-6"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div 
                  onClick={() => navigate(card.path)}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group cursor-pointer h-full"
                >
                  <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-gray-50 p-2">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {card.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </div>

      <Footer />

    </div>
  );
}
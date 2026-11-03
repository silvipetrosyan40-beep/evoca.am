import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronRight } from 'lucide-react';
import { Globe, Search, Menu, ChevronDown, MapPin, HelpCircle } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Ստեղծում ենք վիճակ ակորդեոնների համար (դեֆոլտ բացված է 4-րդ ակորդեոնը)
  const [openIndex, setOpenIndex] = useState(3);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Evoca Leasing",
      content: (
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ՝
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Արտադրական/արդյունաբերական հաստոցներ/հոսքագծեր,</li>
            <li>Բեռնատար/մարդատար ավտոմեքենաներ,</li>
            <li>Շինարարական տեխնիկա,</li>
            <li>Արևային կայաններ,</li>
            <li>Բժշկական սարքավորումներ,</li>
            <li>Կոմերցիոն անշարժ գույք,</li>
            <li>և այլն:</li>
          </ul>

          <h4 className="text-lg font-bold text-gray-900 pt-2">Լիզինգի առավելությունները</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Առանց գրավի առկայության պրոդուկտ է,</li>
            <li>Առանց նոտարական/կադաստրային ծախսերի,</li>
            <li>Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ,</li>
            <li>Լիզինգի առարկայի ձեռքբերում արտերկրից՝ առանց հաճախորդի մասնակցության գնման գործընթացին,</li>
            <li>Ստանալ էսպերտային գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ:</li>
          </ul>

          <div className="mt-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Պայմաններ և սակագներ՝</h4>
            <div className="overflow-x-auto border border-purple-200 rounded-2xl">
              <table className="w-full text-left border-collapse bg-white">
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 w-1/3 align-top">Արժույթը</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top">ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգառունները</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top">ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի առարկայի ձեռքբերման հնարավորությունները</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top">Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի սահմանաչափերը</td>
                    <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Կանխավճար</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top">Նվազագույնը՝ <strong className="text-purple-700">10%</strong></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մարման ժամկետը</td>
                    <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">6-72 ամիս՝ կախված ձեռքբերվող Լիզինգի առարկայից</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մարման եղանակը</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Անուիտետային</li>
                        <li>Զուպանլակաձև</li>
                        <li>Պայմանագրային</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Տարեկան տոկոսադրույքը</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                      <p>• ՀՀ դրամ՝ սկսած <strong className="text-purple-700">10.5%-ից</strong></p>
                      <p>• ԱՄՆ դոլար՝ սկսած <strong className="text-purple-700">8%-ից</strong></p>
                      <p>• Եվրո՝ սկսած <strong className="text-purple-700">6%-ից</strong></p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                      <p>• Ժամկետանց լիզինգի մայր գումարի դեպքում՝ օրական <strong className="text-purple-700">0.015%-ի</strong> չափով</p>
                      <p>• Ժամկետանց տոկոսագումարների դեպքում՝ օրական <strong className="text-purple-700">0.1%-ի</strong> չափով</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ժամկետից շուտ մարելու տուգանք</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                      <p>• Մինչև պայմանագրի գործողության ժամկետի կեսը մարումների ժամանակացույցով սահմանված ամսական վարձավճարից ավելին մարելու դեպքում վճարում է տուգանք՝ մարումների ժամանակացույցով սահմանված ամսական Լիզինգի մայր գումարի չափը գերազանցող գումարի <strong className="text-purple-700">5%-ի</strong> չափով</p>
                      <p>• Առանձին դեպքերում Բանկի լիազոր մարմնի որոշմամբ սահմանված տուգանքի չափը կարող է փոխվել</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ապահովվածություն</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                      <p>• Երաշխավորություններ՝ ըստ պահանջի</p>
                      <p>• Գույքի/իրավունքի գրավ՝ ըստ պահանջի</p>
                      <p>• Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում կարող է պահանջվել նաև այլ գրավ</p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Գանձվող վճարներ</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                      <p>• Լիզինգային հայտի ուսումնասիրման միանվագ վճար՝ <strong className="text-purple-700">20,000 ՀՀ դրամ</strong></p>
                      <p>• Լիզինգի գումարից միանվագ գանձվող միջնորդավճար՝ <strong className="text-purple-700">0.4-1%</strong>, ոչ ավել քան <strong className="text-purple-700">500,000 ՀՀ դրամ</strong></p>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Սեփականության իրավունքի փոխանցման վճար՝ յուրաքանչյուր պայմանագրի մասով անկախ դրա գույքերի քանակից</td>
                    <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">10,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի պայմանների վերանայում</td>
                    <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">15,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ենթավարձակալությամբ տրամադրելու համաձայնություն</td>
                    <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">50,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի առարկայի տարեկան ապահովագրություն</td>
                    <td className="p-4 sm:p-5 text-gray-700 align-top">Լիզինգի ողջ ժամկետի ընթացքում լիզինգի մնացորդային արժեքի հիման վրա</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm italic mt-4">
              Լիզինգի տրամադրման վերջնական պայմանները, մասնավորապես մարման ժամկետը և տոկոսադրույքը կախված են Լիզինգի առարկայի տեսակից, մատակարարից, բիզնեսի առանձնահատկություններից և այլ ռիսկերից:
            </p>
          </div>
        </div>
      )
    },
    {
      title: "ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)",
      content: (
        <div className="overflow-x-auto border border-purple-200 rounded-2xl">
          <table className="w-full text-left border-collapse bg-white">
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 w-12 text-center align-top">1.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 w-1/3 align-top">Ֆինանսավորում</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">Լիզինգ</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">2.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Արժույթ</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">3.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգառու</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">4.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Նպատակ</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-3">
                  <p>• Նոր (չօգտագործված) մեքենասարքավորումների գնում կամ ներմուծում, որոնք օգտագործվելու են Հայաստանի Հանրապետության տարածքում (ներառում է նաև մեքենասարքավորումների բաղկացուցիչ մասերը):</p>
                  <p>• Կապիտալ շինարարության իրականացում՝ մեքենասարքավորման մոնտաժման և սպասարկման դեպքում, եթե կապալառուն ԱԱՀ հարկ վճարող է և տնտեսվարողը մեքենասարքավորումը ձեռք է բերել սույն Ծրագրի շրջանակում:</p>
                  <p>• Բիզնես գործընթացների թվայնացման նպատակով թվային ծրագրերի կամ հարթակների ձեռքբերում:</p>
                  <p>• Արտադրողականության բարձրացման նպատակով խորհրդատվական ծառայությունների և փորձագետների ներգրավում:</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">5.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Սուբսիդավորվող ոլորտները</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Մշակող արդյունաբերություն</li>
                    <li>Հանքագործական արդյունաբերություն և բացահանքերի շահագործում</li>
                    <li>Տեղեկատվություն և կապ</li>
                    <li>Շինարարություն</li>
                    <li>Փոխադրում և պահեստային տնտեսություն</li>
                    <li>Մասնագիտական, գիտական և տեխնիկական գործունեություն</li>
                    <li>Կրթություն</li>
                    <li>Առողջապահություն և բնակչության սոցիալական սպասարկում</li>
                    <li>Էլեկտրականության, գազի, գոլորշու և լավորակ օդի մատակարարում</li>
                    <li>Ավտոմեքենաների տեխնիկական սպասարկում և նորոգում</li>
                    <li>Վարձույթ և լիզինգ</li>
                    <li>Կացության կազմակերպում (բացառությամբ Երևան քաղաքի վարչական սահմաններում կացության կազմակերպման գործունեություն իրականացնող տնտեսվարողների)</li>
                    <li>Ստեղծագործական, արվեստի և հանդիսադիր ներկայացումների կազմակերպման բնագավառում գործունեություն</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">6.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ֆինանսավորման առավելագույն չափ</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                  <p>• Մեքենասարքավորումների և դրանց բաղկացուցիչ մասերի դեպքում՝ <strong className="text-purple-700">1 մլրդ ՀՀ դրամ</strong> կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով):</p>
                  <p>• Կապիտալ շինարարության դեպքում՝ ձեռք բերված մեքենասարքավորման <strong className="text-purple-700">30%</strong>-ը:</p>
                  <p>• Բիզնես գործընթացների թվայնացման ծրագրային ապահովման և արտադրողականության խորհրդատվության դեպքում՝ <strong className="text-purple-700">400 մլն դրամ</strong> կամ համարժեք արտարժույթ (պայմանագրի ստորագրման պահի փոխարժեքով):</p>
                  <p className="text-sm text-gray-500 italic">• Յուրաքանչյուր լիզինգառու կարող է օգտվել Ծրագրի բոլոր նպատակներից, սակայն սուբսիդավորվող մասի առավելագույն գումարը չի կարող գերազանցել նշված չափը (ներառում է փոխկապակցված համարվող կազմակերպությունները):</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">7.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մարման ժամկետ</td>
                <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">Մինչև 120 ամիս</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">8.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Տարեկան տոկոսադրույք</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                  <p>• ՀՀ դրամ՝ <strong className="text-purple-700">9%-14%</strong></p>
                  <p>• ԱՄՆ դոլար, Եվրո՝ <strong className="text-purple-700">6%-10%</strong></p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">9.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Կանխավճար</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">Լիզինգի առարկայի արժեքի նվազագույնը՝ <strong className="text-purple-700">10%</strong></td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">10.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ապահովություն</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                  <p>• Իրավաբանական անձի, ֆիզիկական անձի երաշխավորություն</p>
                  <p>• Գույքի գրավ (ըստ պահանջի)</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">11.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Սուբսիդավորման ժամանակահատված</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                  <p className="font-semibold text-purple-700">Մինչև 42 ամիս</p>
                  <p className="text-sm">Ընդ որում մատակարարման փուլի տոկոսագումարի սուբսիդավորումը կատարվում է մինչև 180 օր ժամկետի համար՝ սկսած լիզինգի պայմանագրի կնքման օրվանից, իսկ 180 օր ժամկետը գերազանցող ժամկետի համար տոկոսների վճարման պարտականությունը կրում է Լիզինգառուն:</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">12.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Վարկային միջոցի օգտագործում</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">Անկանխիկ և բանկային փոխանցումներով</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">13.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Տոկոսադրույքի սուբսիդավորում</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                  <p>• ՀՀ դրամ՝ <strong className="text-purple-700">8%</strong></p>
                  <p>• ԱՄՆ դոլար, Եվրո՝ <strong className="text-purple-700">6%</strong></p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">14.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի առարկայի արժեք</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">Ներառում է լիզինգի առարկայի ձեռքբերման գինը, ՀՀ Ներմուծման հետ կապված ծախսերը։ Ներմուծման հետ կապված ծախսերն իրենց մեջ պետք է ներառեն տեղափոխման, մաքսազերծման, ավելացված արժեքի հարկի վճարման և տեղափոխման հետ կապված այլ ծախսերը՝ դրանց առկայության դեպքում։</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">15.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մարման եղանակը</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>«Անուիտետային»</li>
                    <li>«Զսպանակաձև»</li>
                    <li>Պայմանագրային</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">16.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մայր գումարի արտոնյալ ժամանակաշրջան</td>
                <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">Մինչև 6 ամիս</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">17.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                  <p>• Ժամկետանց մայր գումարի դեպքում՝ օրական <strong className="text-purple-700">0.015%-ի</strong> չափով</p>
                  <p>• Ժամկետանց տոկոսագումարների դեպքում՝ օրական <strong className="text-purple-700">0.1%-ի</strong> չափով</p>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">18.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ժամկետից շուտ մարելու տուգանք</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">Չի կիրառվում</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">19.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Գանձվող միջնորդավճարներ, սպասարկման այլ վճարներ</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top">Չի կիրառվում</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">20.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լրացուցիչ արտոնություն</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                  <p>Փոխկապակցված կազմակերպությունների խմբի մեջ ներառված տնտեսվարողի կողմից օժանդակության համար դիմելուն նախորդող 12 ամսվա ընթացքում կանոնադրական կապիտալում 200 մլն ՀՀ դրամ և ավել ներդրում կատարելու դեպքում փոխկապակցված կազմակերպությունների խմբի մեջ ներառված տնտեսվարողների համար լիզինգի սուբսիդավորվող մասի առավելագույն գումարը յուրաքանչյուր տնտեսվարողի համար յուրաքանչյուր լիզինգի համար սահմանվում է կանոնադրական կապիտալում կատարված յուրաքանչյուր ներդրման հնգապատիկի չափով, բայց ոչ ավել, քան 10 մլրդ դրամ, իսկ արտարժույթով վարկավորման դեպքում՝ 5 մլրդ դրամին համարժեք/ փոխկապակցված կազմակերպությունների խմբի մեջ ներառված տնտեսվարողների՝ Նպատակային ծրագրի շրջանակներում տրամադրված լիզինգի սուբսիդավորվող մասի հանրագումարով:</p>
                  <p className="text-sm italic text-gray-500">Նշված արտոնությունը չի տարածվում էլեկտրականության, գազի, գոլորշու և լավորակ օդի մատակարարման, շինարարության ոլորտներում գործունեություն իրականացնող տնտեսվարողի վրա:</p>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">21.</td>
                <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Այլ պայմաններ</td>
                <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                  <p>• Մնացած պայմանները գործում են համաձայն ՀՀ կառավարության 2020թ. մարտի 26-ի «Տնտեսության արդիականացման նպատակային ծրագրերը հաստատելու մասին» N 355-Լ որոշման:</p>
                  <p>• Ծրագրի օժանդակությունը հասանելի է նաև Բանկի կողմից տրամադրվող նպատակային լիզինգի (ներառյալ Հայաստանի Հանրապետության կառավարության 2017 թվականի հունիսի 8-ի N 619-Ն որոշմամբ հաստատված Միջազգային զարգացման կազմակերպությունների հետ գործող ծրագրերի շրջանակներում տրամադրվող լիզինգների) համար:</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով",
      content: (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-purple-900 bg-purple-50 p-3 rounded-xl border border-purple-100">
            (Կանխավճարի մասնակի սուբսիդավորումը գործելու է մինչև 30.12.2026թ. լիզինգի տրամադրման պայմանագիր կնքած շահառուների համար)
          </p>

          <div className="overflow-x-auto border border-purple-200 rounded-2xl">
            <table className="w-full text-left border-collapse bg-white text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 w-12 text-center align-top">1.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 w-1/3 align-top">Արժույթ</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">ՀՀ դրամ</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">2.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգառու</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Իրավաբանական անձ, Անհատ ձեռնարկատեր</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">3.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Գործունեության ոլորտ</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Գյուղատնտեսություն</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">4.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Նպատակ</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                    <p className="font-bold text-gray-800">Գյուղատնտեսական տեխնիկայի ձեռքբերում՝</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>տանտորներ՝ տարբեր մակնիշների</li>
                      <li>կոմբայններ</li>
                      <li>հավաքիչ-մամլիչներ</li>
                      <li>շարքացաններ</li>
                      <li>գութաններ</li>
                      <li>խոտհնձիչներ</li>
                      <li>կարտոֆիլատնկիչներ, կարտոֆիլաքաղիչներ</li>
                      <li>կուլտիվատորներ, ֆրեզներ</li>
                      <li>սրսկիչներ</li>
                      <li>տրակտորային կցասայլակներ</li>
                      <li>այլ գյուղատնտեսական տեխնիկա</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">5.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի սահմանաչափ</td>
                  <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">5,100,000-500,000,000 ՀՀ դրամ</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">6.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Կանխավճար</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                    <p>Լիզինգի առարկայի արժեքի <strong className="text-purple-700">20%</strong></p>
                    <p className="text-xs text-gray-500 italic">Ընդ որում Ծրագրի շրջանակներում նույն լիզինգառուի կողմից ձեռք բերվող լիզինգի առարկաների արժեքների հանրագումարը չպետք է գերազանցի 500 մլն դրամը:</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">7.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մարման ժամկետ</td>
                  <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">36-120 ամիս</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">8.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մարման եղանակ</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Մայր գումարի հավասարաչափ վճարում, տոկոսադրույքի հաշվարկ մայր գումարի մնացորդի հաշվով</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">9.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Տարեկան տոկոսադրույք և տոկոսադրույքի սուբսիդավորման չափ</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top leading-relaxed">
                    Մինչև <strong className="text-purple-700">14%</strong>, որի մինչև 12 տոկոսային կետը սուբսիդավորվում է այնպիսի չափաքանակով, որ Լիզինգառուի կողմից վճարվող լիզինգի տարեկան տոկոսադրույքը կազմի <strong className="text-purple-700">2%</strong>, իսկ «Գյուղատնտեսական կոոպերատիվների մասին» օրենքի շրջանակում գրանցված գյուղատնտեսական կոոպերատիվների (լուծարման գործընթացում գտնվելու կամ գործունեությունը (գոյությունը) դադարեցված լինելու կարգավիճակ չունեցող), ՀՀ Կառավարության 2014 թվականի դեկտեմբերի 18-ի 1444-Ն որոշմամբ հաստատված սոցիալական աջակցություն ստացող սահմանամերձ բնակավայրերի տարածքներում գործունեություն իրականացնող տնտեսվարողների համար լիզինգի տոկոսադրույքի սուբսիդավորումը կիրականացվի այնպիսի չափաքանակով, որ լիզինգառուի կողմից վճարման ենթակա լիզինգի տարեկան տոկոսադրույքը կազմի <strong className="text-purple-700">0%</strong>:
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">10.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ապահովում</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Կարող է պահանջվել իրավաբանական անձի, ֆիզիկական անձի երաշխավորություն, այլ գրավ:</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">11.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Գումարի տրամադրման եղանակ</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Անկանխիկ՝ մատակարարի բանկային հաշվին:</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">12.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Մատակարար</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Եվրասիական տնտեսական միության անդամ և այլ երկրներում գյուղատնտեսական տեխնիկա արտադրող ընկերություններից Նոր, չօգտագործված տեխնիկա ներկրող մասնագիտացված կառույցներ, որոնք իրականացնում են նաև գյուղատնտեսական տեխնիկայի երաշխիքային և հետերաշխիքային սպասարկում:</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">13.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Սեփականության իրավունքի պետական գրանցման վճար (պետական տուրք)</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                    <p>• Տրակտորների և կոմբայնների համար՝ <strong className="text-purple-700">5,000 դրամ</strong></p>
                    <p>• Այլ գյուղատնտեսական տեխնիկայի համար՝ վճար չկա:</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">14.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի գումարների և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top space-y-1">
                    <p>• Ժամկետանց լիզինգի դեպքում՝ օրական <strong className="text-purple-700">0.015%-ի</strong> չափով</p>
                    <p>• Ժամկետանց տոկոսագումարների դեպքում՝ օրական <strong className="text-purple-700">0.1%-ի</strong> չափով</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">15.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Լիզինգի գումարը պայմանագրով ամրագրված ժամանակացույցից շուտ մարելու համար վճարվող տուգանք</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Չի կիրառվում</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">16.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Հայտի ուսումնասիրության վճար</td>
                  <td className="p-4 sm:p-5 text-purple-700 font-bold align-top">Միանվագ 20,000 ՀՀ դրամ</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">17.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Ապահովագրություն</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Լիզինգի առարկան լիզինգի պայմանագրի գործողության ամբողջ ժամանակահատվածի ընթացքում ապահովագրվում է վնասվածքի և կորստյան ռիսկերից (կասկո) Բանկի կողմից:</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">18.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Կանխավճարի մասնակի սուբսիդավորում</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top space-y-2">
                    <p>Շահառու՝ «Գյուղատնտեսական կոոպերատիվների մասին» օրենքի շրջանակում գրանցված գյուղատնտեսական կոոպերատիվ:</p>
                    <p className="text-xs text-purple-800 font-semibold">Գործելու է մինչև 30.12.2026թ. լիզինգի տրամադրման պայմանագիր կնքած շահառուների համար:</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-4 sm:p-5 font-medium text-gray-500 text-center align-top">19.</td>
                  <td className="p-4 sm:p-5 font-semibold text-gray-800 align-top">Այլ պայմաններ</td>
                  <td className="p-4 sm:p-5 text-gray-700 align-top">Մնացած պայմանները գործում են համաձայն ՀՀ Կառավարության 2022թ. հունվարի 27-ի «Հայաստանի Հանրապետությունում գյուղատնտեսական տեխնիկայի լիզինգի աջակցության ծրագիրը հաստատելու մասին» N 105-Լ որոշման:</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "Տրանսպորտային միջոցի լիզինգ",
      content: (
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-purple-700 font-bold">Evoca-ի տրանսպորտային միջոցի լիզինգով</strong> կարող եք ձեռք բերել մարդատար, ուղևորատար կամ բեռնատար տրանսպորտային միջոց՝ թե՛ Հայաստանից, թե՛ արտերկրից՝ առաջնային կամ երկրորդային շուկայից:
          </p>
          <p>
            Ընտրության ազատությունը միայն տրանսպորտային միջոցին չի վերաբերում. կարող եք ընտրել նաև լիզինգի արժույթը, մարման եղանակն ու ժամկետը՝ <strong className="text-purple-700 font-bold">6-ից մինչև 72 ամիս</strong>, իսկ ֆինանսավորման սահմանաչափը կարող է հասնել մինչև <strong className="text-purple-700 font-bold">1 մլրդ ՀՀ դրամի կամ համարժեք արտարժույթի</strong>:
          </p>
          <p>
            Ընտրեք Ձեր բիզնեսին հարմար տրանսպորտային միջոցը, իսկ մենք կտրամադրենք Ձեզ ամենահարմար ֆինանսավորումը:
          </p>
        </div>
      )
    }
  ];
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* ՀԵԴԵՐ (HEADER) */}
        <header className="w-full bg-white shadow-sm font-sans relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 text-xs sm:text-sm border-b border-gray-100">
              
              <nav className="flex space-x-6 items-center">
                <button 
                  onClick={() => handleNavigation('/hy/loans')}
                  className="font-semibold text-purple-700 hover:text-purple-900 pb-1 border-b-2 border-purple-700 cursor-pointer bg-transparent border-t-0 border-x-0"
                >
                  Անհատ
                </button>
                <button onClick={() => handleNavigation('/hy/business')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բիզնես</button>
                <button onClick={() => handleNavigation('/hy/instant-payments')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Ակնթարթային վճարումներ</button>
                <button onClick={() => handleNavigation('/hy/about')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Մեր մասին</button>
                <button onClick={() => handleNavigation('/hy/news')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Նորություններ</button>
                <button onClick={() => handleNavigation('/hy/blog')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Բլոգ</button>
                <button onClick={() => handleNavigation('/hy/career')} className="text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">Կարիերա</button>

                <div className="relative">
                  <button 
                    onClick={() => { setIsOnlineAppsOpen(!isOnlineAppsOpen); setIsContactOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <span>Առցանց հայտեր</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOnlineAppsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOnlineAppsOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                      <button onClick={() => { handleNavigation('/online-apps/sme-lending'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        ՓՄՁ վարկավորում
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/visa-infinite'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        Visa Infinite
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/mastercard-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        MasterCard Gold
                      </button>
                      <button onClick={() => { handleNavigation('/online-apps/visa-gold'); setIsOnlineAppsOpen(false); }} className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                        Visa Gold
                      </button>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button 
                    onClick={() => { setIsContactOpen(!isContactOpen); setIsOnlineAppsOpen(false); }}
                    className="flex items-center space-x-1 font-semibold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <span>Հետադարձ կապ</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isContactOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 px-2 z-50 space-y-2 text-sm">
                      <a href="tel:+37410605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 10 605555</a>
                      <a href="tel:+37498205555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 98 205555</a>
                      <a href="tel:+37499605555" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">+374 99 605555</a>
                      <a href="tel:8444" className="block px-4 py-2 font-semibold text-gray-800 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">8444</a>
                      <button onClick={() => { handleNavigation('/callback-order'); setIsContactOpen(false); }} className="w-full text-left px-4 py-2.5 font-bold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors bg-transparent border-none cursor-pointer">
                        Պատվիրել զանգ
                      </button>
                    </div>
                  )}
                </div>
              </nav>

              <div className="flex items-center space-x-5 text-gray-700">
                <button onClick={() => handleNavigation('/branches')} aria-label="Մասնաճյուղեր" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <MapPin className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/help')} aria-label="Օգնություն" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <HelpCircle className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/language')} aria-label="Լեզու" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Globe className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/search')} aria-label="Որոնել" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Search className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavigation('/menu')} aria-label="Գլխավոր մենյու" className="hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-12">
                <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
                  <span className="text-3xl font-extrabold tracking-tight text-gray-700">evoca</span>
                  <span className="w-2.5 h-2.5 bg-purple-600 rounded-full ml-0.5 mb-3"></span>
                </div>

                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm">
                  <button onClick={() => handleNavigation('/hy/business')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Վարկեր</button>
                  <button onClick={() => handleNavigation('/hy/leasing-evoca')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">լիզինգ</button>
                  <button onClick={() => handleNavigation('/hy/business-account-opening-and-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Հաշիվներ</button>
                  <button onClick={() => handleNavigation('/hy/business-classical-deposit')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Ավանդներ</button>
                  <button onClick={() => handleNavigation('/hy/business-investment-services')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Արժեթղթերի շուկա</button>
                  <button onClick={() => handleNavigation('/hy/guarantee')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Առևտրի ֆինանսավորում</button>
                  <button onClick={() => handleNavigation('/hy/v-pos-terminal')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Դիջիթալ</button>
                  <button onClick={() => handleNavigation('/hy/individual-safe-deposit-boxes')} className="text-gray-900 font-medium hover:text-purple-700 transition-colors bg-transparent border-none cursor-pointer">Այլ</button>
                </nav>
              </div>

              <div>
                <button
                  onClick={() => handleNavigation('/evoca-online')}
                  className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-2xl shadow-md transition-all duration-200 ease-in-out flex items-center justify-center cursor-pointer border-none"
                >
                  EvocaONLINE
                </button>
              </div>
            </div>
          </div> 
        </header>

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium">
              <button 
                onClick={() => handleNavigation('/hy/leasing-evoca')} 
                className="text-white hover:text-purple-200 transition-colors bg-transparent border-none cursor-pointer"
              >
                Evoca Leasing
              </button>
              <button 
                onClick={() => handleNavigation('/hy/special-offer')} 
                className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                Հատուկ առաջարկ
              </button>
            </nav>
          </div>
        </div>

       {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16 relative">
        
        {/* Սոցիալական կոճակներ ձախ կողմում՝ SVG-ներով */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-gray-100/80 rounded-lg p-2 space-y-3 absolute left-[-60px] top-28 shadow-xs">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-purple-700 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
            <Home className="w-4 h-4" />
          </button>
          <span>›</span>
          <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Բիզնես</button>
          <span>›</span>
          <button className="hover:text-purple-700 bg-transparent border-none cursor-pointer"> Լիզինգ</button>
          <span>›</span>
          <span className="text-gray-800 font-medium">Evoca Leasing</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Evoca Leasing</h1>

        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Accordion Section) */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="border border-purple-200 rounded-2xl overflow-hidden transition-all bg-white shadow-xs hover:border-purple-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center p-5 text-left bg-transparent border-none cursor-pointer group space-x-3"
                >
                  <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
                  <span className="font-semibold text-gray-800 text-base sm:text-lg group-hover:text-purple-700 transition-colors">
                    {section.title}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-6 pt-2 text-base border-t border-gray-100 animate-fadeIn">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>

    {/* ՖՈՒԹԵՐ (FOOTER) */}
    <Footer />
  </div>
);
}
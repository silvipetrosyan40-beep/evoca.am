import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, ChevronDown, ChevronUp, FileText, Download } from 'lucide-react';

export default function BondsPage() {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Յուրաքանչյուր թողարկման ինֆորմացիան իր աղյուսակով և փաստաթղթերով
  const accordionSections = [
    {
      id: 1,
      title: "ՏԱՍՆՎԵՑԵՐՈՐԴ, ՏԱՍՆՅՈԹԵՐՈՐԴ ԵՎ ՏԱՍՆՈՒԹԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 14.10.2026թ-ի թիվ 1/409Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: "100 Եվրո" },
        { label: "Ընդհանուր ծավալ", amd: "15,000,000,000 ՀՀ դրամ", usd: "15,000,000 ԱՄՆ դոլար", eur: "5,000,000 Եվրո" },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "1,500,000 հատ", usd: "150,000 հատ", eur: "50,000 հատ" },
        { label: "Շրջանառության ժամկետ", amd: "36 ամիս", usd: "36 ամիս", eur: "36 ամիս" },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "10.50%", usd: "5.50%", eur: "4.00%" },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: "Եռամսյակային" },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: "«Էվոկաբանկ» ՓԲԸ", eur: "«Էվոկաբանկ» ՓԲԸ" }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԵՎՐՈՅՈՎ", symbol: "€", link: "#terms-eur" }
      ]
    },
    {
      id: 2,
      title: "ՏԱՍՆՉՈՐՍԵՐՈՐԴ ԵՎ ՏԱՍՆՀԻՆԳԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: null },
        { label: "Ընդհանուր ծավալ", amd: "3,000,000,000 ՀՀ դրամ", usd: "15,000,000 ԱՄՆ դոլար", eur: null },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "300,000 հատ", usd: "150,000 հատ", eur: null },
        { label: "Շրջանառության ժամկետ", amd: "36 ամիս", usd: "36 ամիս", eur: null },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "10%", usd: "5%", eur: null },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: null },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: null, eur: null }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus-14" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd-14" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd-14" }
      ]
    },
    {
      id: 3,
      title: "ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: null },
        { label: "Ընդհանուր ծավալ", amd: "3,000,000,000 ՀՀ դրամ", usd: "15,000,000 ԱՄՆ դոլար", eur: null },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "300,000 հատ", usd: "150,000 հատ", eur: null },
        { label: "Շրջանառության ժամկետ", amd: "36 ամիս", usd: "36 ամիս", eur: null },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "10.25%", usd: "5.25%", eur: null },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: null },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: null, eur: null }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus-12" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd-12" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd-12" }
      ]
    },
{
      id: 4,
      title: "ՏԱՍՆԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: null },
        { label: "Ընդհանուր ծավալ", amd: "2,000,000,000 ՀՀ դրամ", usd: "10,000,000 ԱՄՆ դոլար", eur: null },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "200,000 հատ", usd: "100,000 հատ", eur: null },
        { label: "Շրջանառության ժամկետ", amd: "30 ամիս", usd: "30 ամիս", eur: null },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "11%", usd: "5%", eur: null },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: null },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: null, eur: null }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus-10" },
        { name: "ԱԶԴԱԳՐԻ ԼՐԱՑՈՒՄ", symbol: "+", link: "#prospectus-add-10" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd-10" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd-10" }
      ]
    },
{
      id: 5,
      title: "ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: "100 Եվրո" },
        { label: "Ընդհանուր ծավալ", amd: "2,000,000,000 ՀՀ դրամ", usd: "10,000,000 ԱՄՆ դոլար", eur: "7,000,000 Եվրո" },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "200,000 հատ", usd: "100,000 հատ", eur: "70,000 հատ" },
        { label: "Շրջանառության ժամկետ", amd: "30 ամիս", usd: "39 ամիս", eur: "39 ամիս" },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "11%", usd: "5.25%", eur: "4%" },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: "Եռամսյակային" },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: null, eur: null }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus-7" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd-7" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd-7" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԵՎՐՈՅՈՎ", symbol: "€", link: "#terms-eur-7" }
      ]
    },
{
      id: 6,
      title: "ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: null },
        { label: "Ընդհանուր ծավալ", amd: "2,000,000,000 ՀՀ դրամ", usd: "10,000,000 ԱՄՆ դոլար", eur: null },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "200,000 հատ", usd: "100,000 հատ", eur: null },
        { label: "Շրջանառության ժամկետ", amd: "30 ամիս", usd: "30 ամիս", eur: null },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "11%", usd: "5%", eur: null },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: null },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: null, eur: null }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus-5" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd-5" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd-5" }
      ],
      footerText: "Պարտատոմսերի թողարկման մանրամասներին կարող եք ծանոթանալ այստեղ:"
    },
{
      id: 7,
      title: "ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: null },
        { label: "Ընդհանուր ծավալ", amd: "500,000,000 ՀՀ դրամ", usd: "5,000,000 ԱՄՆ դոլար", eur: null },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "50,000 հատ", usd: "50,000 հատ", eur: null },
        { label: "Շրջանառության ժամկետ", amd: "30 ամիս", usd: "30 ամիս", eur: null },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "10%", usd: "5.5%", eur: null },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: null },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: null, eur: null }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus-3" },
        { name: "ԱԶԴԱԳՐԻ ԼՐԱՑՈՒՄ", symbol: "+", link: "#prospectus-add-3" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd-3" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd-3" }
      ],
      additionalText: "Հաշվի առնելով պարտատոմսերի նկատմամբ ներդրողների ցուցաբերած զգալի հետաքրքրությունը՝ Evocabank-ը մարտ ամսվա ընթացքում իրականացրել է պարտատոմսերի հաջորդ թողարկումը։",
      footerText: "Պարտատոմսերի թողարկման մանրամասներին կարող եք ծանոթանալ այստեղ:"
    },
{
      id: 8,
      title: "ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ",
      decisionText: "Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ Նախագահի 07.10.2020թ. թիվ 1/562 Ա որոշմամբ։",
      tableData: [
        { label: "Անվանական արժեք", amd: "10,000 ՀՀ դրամ", usd: "100 ԱՄՆ դոլար", eur: null },
        { label: "Ընդհանուր ծավալ", amd: "500,000,000 ՀՀ դրամ", usd: "5,000,000 ԱՄՆ դոլար", eur: null },
        { label: "Թողարկվող պարտատոմսերի քանակ", amd: "50,000 հատ", usd: "50,000 հատ", eur: null },
        { label: "Շրջանառության ժամկետ", amd: "30 ամիս", usd: "30 ամիս", eur: null },
        { label: "Արժեկտրոնային տարեկան տոկոսադրույք", amd: "10%", usd: "5.5%", eur: null },
        { label: "Արժեկտրոնների վճարման պարբերականություն", amd: "Եռամսյակային", usd: "Եռամսյակային", eur: null },
        { label: "Տեղաբաշխող", amd: "«Էվոկաբանկ» ՓԲԸ", usd: null, eur: null }
      ],
      docs: [
        { name: "ԾՐԱԳՐԱՅԻՆ ԱԶԴԱԳԻՐ", symbol: "✓", link: "#prospectus-1" },
        { name: "ԱԶԴԱԳՐԻ ԼՐԱՑՈՒՄ", symbol: "+", link: "#prospectus-add-1" },
        { name: "ՊԱՅՄԱՆՆԵՐ ՀՀ ԴՐԱՄՈՎ", symbol: "֏", link: "#terms-amd-1" },
        { name: "ՊԱՅՄԱՆՆԵՐ ԱՄՆ ԴՈԼԱՐՈՎ", symbol: "$", link: "#terms-usd-1" }
      ],
      footerText: "Պարտատոմսերի թողարկման մանրամասներին կարող եք ծանոթանալ այստեղ:"
    },
{
      id: 9,
      title: "Հաճախ տրվող հարցեր պարտատոմսերի մասին",
      content: (
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* Top Illustration/Banner */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg" 
              alt="Հաճախ տրվող հարցեր" 
              className="max-h-48 rounded-2xl object-cover shadow-sm"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-purple-900 text-base sm:text-lg mb-2">
                ? Ի՞նչ է պարտատոմսը։
              </h4>
              <p className="text-sm sm:text-base text-gray-700">
                Պարտատոմսը (լատիներեն՝ obligation - պարտավորություն) պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ դրանում նշված ժամկետում պարտատոմսն թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս։
              </p>
            </div>

            <div>
              <h4 className="font-bold text-purple-900 text-base sm:text-lg mb-2">
                ? Ի՞նչ կլինի, եթե պարտատոմսերում ներդրված գումարն ինձ անհրաժեշտ լինի մինչև մարման ժամկետը։
              </h4>
              <p className="text-sm sm:text-base text-gray-700">
                Evocabank-ի կողմից թողարկված պարտատոմսերը ցուցակվելու են Հայաստանի ֆոնդային բորսայում, և Դուք ցանկացած պահի կարող եք գնել կամ վաճառել դրանք։
              </p>
            </div>

            <div>
              <h4 className="font-bold text-purple-900 text-base sm:text-lg mb-2">
                ? Ինչո՞ւ պետք է գնեմ պարտատոմսեր՝ ավանդ ներդնելու փոխարեն։
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Պարտատոմսեր գնելն էլ ավելի շահավետ է և հարմար: Պարտատոմսերն ունեն մի շարք առավելություններ.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700">
                <li>Պարտատոմսերից ստացված եկամուտները ազատված են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից:</li>
                <li>Պարտատոմսերը վաճառելու դեպքում Դուք պահպանում եք մինչև այդ պահը կուտակված տոկոսագումարները։</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-purple-900 text-base sm:text-lg mb-2">
                ? Իմ ավանդները երաշխավորված են ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից, իսկ պարտատոմսե՞րը։
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Պարտատոմսերը ևս երաշխավորված են։
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի համաձայն՝ Բանկի կողմից թողարկված անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից։
              </p>
            </div>

            <div>
              <h4 className="font-bold text-purple-900 text-base sm:text-lg mb-2">
                ? Ինչպե՞ս կարող եմ գնել Evocabank-ի պարտատոմսեր։
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Պարտատոմսեր գնելու համար անհրաժեշտ է՝
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Մոտենալ Բանկի ցանկացած գրասենյակ, լրացնել պարտատոմսերի ձեռքբերման հայտ-հանձնարարականը, մուտքագրել գումարը հատուկ հաշվին կամ online տարբերակով՝ աշխարհի ցանկացած վայրից, օրվա ցանկացած ժամին։
              </p>
            </div>

            <div>
              <h4 className="font-bold text-purple-900 text-base sm:text-lg mb-2">
                ? Կարող ե՞մ արդյոք անհրաժեշտության դեպքում պարտատոմսերի գրավով վարկ վերցնել։
              </h4>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Այո, կարող եք։
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Ինչպես և ավանդի դեպքում, պարտատոմսերի դեպքում ևս կարելի է պարտատոմսերի գրավով վերցնել կարճաժամկետ վարկ։
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Վարկը տրամադրվում է առավելագույնը պարտատոմսի մարման ժամկետով՝ պարտատոմսի արժեկտրոնային տոկոսադրույք +2%։
              </p>
            </div>
          </div>
        </div>
      )
    },
  ];

  const mainDocuments = [
    "Պարտատոմսերի գները 11.11.2026-15.01.2027 ժամանակահատվածի համար"
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium whitespace-nowrap">
              <button onClick={() => handleNavigation('/securities')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ներդրումային ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/bonds')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Պարտատոմսեր</button>
              <button onClick={() => handleNavigation('/hy/repo-services')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">ՀԿԴ ծառայություններ</button>
              <button onClick={() => handleNavigation('/hy/repo-reverse-repo')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ռեպո/Հակադարձ Ռեպո գործարքներ</button>
              <button onClick={() => handleNavigation('/hy/evocalnvest')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">EvocaINVEST</button>
            </nav>
          </div>
        </div>

        {/* BREADCRUMBS ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/individuals')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/securities')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Արժեթղթեր</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Պարտատոմսեր</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Պարտատոմսեր
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ: Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը:
              </p>
            </div>
            <div className="w-full h-full flex justify-end">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg" 
                alt="Պարտատոմսեր" 
                className="w-full h-auto object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-4 text-gray-700 leading-relaxed mb-12">
            <p>
              Առաջին անգամ հայաստանյան ֆինանսական համակարգում <strong className="text-purple-800 font-semibold">Evocabank</strong>-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ <strong className="text-purple-800 font-semibold">EvocaTOUCH</strong> հավելվածի միջոցով:
            </p>
            <div>
              <p className="font-semibold text-purple-900 mb-2">
                Պարտատոմսերը պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
                </li>
                <li>
                  ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:
                </li>
              </ul>
            </div>
          </div>

          {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Accordions) */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h2>
            <div className="space-y-4">
              {accordionSections.map((section, index) => (
                <div 
                  key={section.id} 
                  className="border border-purple-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-base sm:text-lg">{section.title}</span>
                    {openAccordion === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-700 shrink-0 ml-4" />
                    )}
                  </button>

                  {/* Դինամիկ բովանդակություն ըստ սեղմած կոճակի */}
                  {openAccordion === index && (
                    <div className="px-5 pb-6 pt-3 border-t border-purple-100 bg-purple-50/20 space-y-6">
                      
                      {/* Եթե աղյուսակի տվյալներ կան */}
                      {section.tableData && section.tableData.length > 0 ? (
                        <>
                          <h3 className="text-center text-lg font-bold text-purple-900 mb-2">
                            ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ
                          </h3>
                          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
                            <table className="w-full text-sm text-left text-gray-700">
                              <thead className="bg-gray-50 text-gray-900 font-semibold border-b border-gray-200">
                                <tr>
                                  <th className="py-3 px-4">Դաս</th>
                                  <th className="py-3 px-4">Անվանական արժեկտրոնային</th>
                                  <th className="py-3 px-4">Անվանական արժեկտրոնային</th>
                                  <th className="py-3 px-4">Անվանական արժեկտրոնային</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                {section.tableData.map((row, rIdx) => (
                                  <tr key={rIdx}>
                                    <td className="py-3 px-4 font-medium text-gray-900">{row.label}</td>
                                    <td className="py-3 px-4">{row.amd}</td>
                                    <td className="py-3 px-4">{row.usd}</td>
                                    <td className="py-3 px-4">{row.eur}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      ) : null}

                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        {section.decisionText}
                      </p>

                      {/* Եթե ֆայլերի քարտեր կան */}
                      {section.docs && section.docs.length > 0 && (
                        <div className="bg-purple-50/40 border border-purple-100 rounded-2xl p-4 sm:p-6">
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {section.docs.map((doc, dIdx) => (
                              <a 
                                key={dIdx} 
                                href={doc.link} 
                                className="flex flex-col items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all text-center group cursor-pointer"
                              >
                                <span className="text-xs font-bold text-purple-900 mb-3 group-hover:text-purple-700">
                                  {doc.name}
                                </span>
                                <div className="w-16 h-20 border-2 border-gray-400 rounded-lg flex flex-col justify-between p-2 relative group-hover:border-purple-600">
                                  <div className="space-y-1">
                                    <div className="h-1 bg-gray-300 w-full rounded"></div>
                                    <div className="h-1 bg-gray-300 w-full rounded"></div>
                                    <div className="h-1 bg-gray-300 w-3/4 rounded"></div>
                                  </div>
                                  <div className="self-end text-xs font-bold text-gray-600">
                                    {doc.symbol}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Փաստաթղթեր */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-6">
              Փաստաթղթեր
            </h2>
            <div className="space-y-3">
              {mainDocuments.map((doc, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-purple-50/40 border border-purple-100 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <FileText className="w-5 h-5 text-purple-700 shrink-0" />
                    <span className="text-sm font-medium text-gray-800 truncate group-hover:text-purple-900">{doc}</span>
                  </div>
                  <Download className="w-4 h-4 text-purple-600 shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
import React from 'react';
import { ChevronRight, FileText, Download } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function SafeBoxesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
          
          {/* Հացաշարք (Breadcrumbs) */}
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <span>🏠</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-700 font-medium">Պահատուփեր</span>
          </nav>

          {/* Վերնագիր և Նկարի բլոկ (Flex-ով՝ նկարը աջում) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4 bg-gray-50/50 p-6 rounded-3xl border border-gray-100">
            <div className="space-y-4 md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Անհատական պահատուփեր
              </h1>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական պահատուփեր։
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-md bg-purple-900 md:w-1/2 w-full">
              <img
                src="https://www.evoca.am/images-cache/menu/1/17738350520558/780x585.jpg"
                alt="Անհատական պահատուփեր"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Ներածական տեքստեր */}
          <section className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է։ Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն)։
            </p>
            <p>
              Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո։ Դրանք զինված են միջազգային չափանիշներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական ազդեցություններից։ Յուրաքանչյուր գործարքի ժամանակ, պահատուփերի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե։
            </p>
            <p className="font-semibold text-gray-900">
              Առաջարկում ենք 3 չափսի պահատուփեր՝ փոքր, միջին, մեծ։
            </p>
            <p>
              Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ, իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու բանալիների միաժամանակյա կիրառմամբ)։ Ձեզ տրամադրված բանալիի օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում։
            </p>
            <p>
              Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով։ Վարձակալման գինը կախված է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների։
            </p>
            <p>
              12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով։
            </p>
            <p className="font-semibold text-gray-950">
              Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին։
            </p>
          </section>

          {/* Սակագներ - Աղյուսակ 1 */}
          <section className="space-y-4 pt-4">
            <h2 className="text-lg md:text-xl font-bold text-[#6200ee]">
              Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
            </h2>
            
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-purple-50/50">
                    <th className="p-3 border-b border-gray-200 font-semibold text-gray-700">Ժամկետ</th>
                    <th className="p-3 border-b border-gray-200 font-semibold text-gray-700 text-center" colSpan={3}>
                      Պահարանի չափերը
                    </th>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <th className="p-3 border-b border-gray-200"></th>
                    <th className="p-3 border-b border-gray-200 text-center font-medium text-gray-600">Փոքր</th>
                    <th className="p-3 border-b border-gray-200 text-center font-medium text-gray-600">Միջին</th>
                    <th className="p-3 border-b border-gray-200 text-center font-medium text-gray-600">Մեծ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150">
                  <tr>
                    <td className="p-3 font-medium">14 օր</td>
                    <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">1 ամիս</td>
                    <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">12,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">3 ամիս</td>
                    <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">15,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">20,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">6 ամիս</td>
                    <td className="p-3 text-center">15,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">20,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">25,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">12 ամիս</td>
                    <td className="p-3 text-center">30,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">40,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Երկարաժամկետ</td>
                    <td className="p-3 text-center text-gray-500 italic">պայմանագրային</td>
                    <td className="p-3 text-center text-gray-500 italic">պայմանագրային</td>
                    <td className="p-3 text-center text-gray-500 italic">պայմանագրային</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Պահարանի բանալու կորուստ կամ վնասում</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>20,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Պահարանի վնասում</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>Հասցված վնասի եռապատիկը</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>Յուրաքանչյուր ուշացած օրվա համար 1000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Սակագներ - Աղյուսակ 2 (Օտարերկրյա քաղաքացիների համար) */}
          <section className="space-y-4 pt-4">
            <h2 className="text-lg md:text-xl font-bold text-[#6200ee]">
              Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
            </h2>
            
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-purple-50/50">
                    <th className="p-3 border-b border-gray-200 font-semibold text-gray-700">Ժամկետ</th>
                    <th className="p-3 border-b border-gray-200 font-semibold text-gray-700 text-center" colSpan={3}>
                      Պահարանի չափերը
                    </th>
                  </tr>
                  <tr className="bg-purple-50/30">
                    <th className="p-3 border-b border-gray-200"></th>
                    <th className="p-3 border-b border-gray-200 text-center font-medium text-gray-600">Փոքր</th>
                    <th className="p-3 border-b border-gray-200 text-center font-medium text-gray-600">Միջին</th>
                    <th className="p-3 border-b border-gray-200 text-center font-medium text-gray-600">Մեծ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150">
                  <tr>
                    <td className="p-3 font-medium">14 օր</td>
                    <td className="p-3 text-center">25,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">35,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">1 ամիս</td>
                    <td className="p-3 text-center">35,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">60,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">3 ամիս</td>
                    <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">75,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">100,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">6 ամիս</td>
                    <td className="p-3 text-center">75,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">100,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">125,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">12 ամիս</td>
                    <td className="p-3 text-center">100,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">125,000 ՀՀ դրամ</td>
                    <td className="p-3 text-center">150,000 ՀՀ դրամ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Երկարաժամկետ</td>
                    <td className="p-3 text-center text-gray-500 italic">պայմանագրային</td>
                    <td className="p-3 text-center text-gray-500 italic">պայմանագրային</td>
                    <td className="p-3 text-center text-gray-500 italic">պայմանագրային</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Պահարանի բանալու կորուստ կամ վնասում</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>20,000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Պահարանի վնասում</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>Հասցված վնասի եռապատիկը</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>Յուրաքանչյուր ուշացած օրվա համար 1000 ՀՀ դրամ</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-3 font-semibold text-gray-750" colSpan={2}>Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                    <td className="p-3 text-center font-semibold" colSpan={2}>Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-xs text-gray-500 italic pt-1">
              Նշում - Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ։
            </p>
          </section>

          {/* Փաստաթղթերի բաժին */}
          <section className="space-y-4 pt-4 border-t border-gray-150">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
            
            <div className="space-y-3">
              {[
                "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ."
              ].map((docTitle, index) => (
                <a
                  key={index}
                  href="#download"
                  className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition group shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-50 text-[#6200ee] rounded-lg group-hover:bg-[#6200ee] group-hover:text-white transition">
                      <FileText size={20} />
                    </div>
                    <span className="text-sm md:text-base font-medium text-gray-850">{docTitle}</span>
                  </div>
                  <div className="text-[#6200ee] hover:text-purple-700 transition">
                    <Download size={20} />
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Ֆութերի կցումը import-ով */}
      <Footer />

    </div>
  );
}
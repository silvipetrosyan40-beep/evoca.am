import React, { useState } from 'react';
import { ChevronRight, ChevronDown, FileText } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function EvocaOnlinePage() {
  // Վիճակներ՝ ներքևի 2 ակորդեոնների բացված/փակված լինելը կառավարելու համար
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isActivationOpen, setIsActivationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
          
          {/* Հացաշարք (Breadcrumbs) */}
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <span>🏠</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-700 font-medium">EvocaONLINE</span>
          </nav>

          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            EvocaONLINE
          </h1>

          {/* Նկարագիրը և հնարավորությունները */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Նկարագիրը և հնարավորությունները
            </h2>
            
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              EvocaOnline-ը բանկային հաշիվների հեռակառավարման ինտերնետ-բանկ համակարգ է, որի միջոցով կարող եք հեռակառավարել Ձեր բանկային հաշիվները։ EvocaOnline-ից կարող եք օգտվել մեր կայքի համապատասխան հղման միջոցով։ Համակարգի միջոցով կարող եք՝
            </p>

            {/* Կետ 1 */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-[#6200ee] text-base md:text-lg flex items-center space-x-2">
                <span>•</span> <span>Դիտել տարաբնույթ տեղեկատվություն.</span>
              </h3>
              <ul className="list-disc pl-8 space-y-2 text-sm md:text-base text-gray-700">
                <li>բանկային հաշիվների մնացորդներն ու գործառնությունները,</li>
                <li>հաշիվների,վճարային քարտերի, վարկերի, ավանդների քաղվածքները,</li>
                <li>վճարային քարտերի օնլայն մնացորդները,</li>
                <li>վարկերի մասին ամբողջ տեղեկատվությունն ու մարման ժամանակացույցը,</li>
                <li>ավանդների մասին ամբողջ տեղեկատվությունը,</li>
                <li>արտարժույթի փոխարժեքները։</li>
              </ul>
            </div>

            {/* Կետ 2 */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-[#6200ee] text-base md:text-lg flex items-center space-x-2">
                <span>•</span> <span>Կատարել գործարքներ.</span>
              </h3>
              <ul className="list-disc pl-8 space-y-2 text-sm md:text-base text-gray-700">
                <li>փոխանցումներ՝ միջազգային և Հայաստանի տարածքում (նաև խմբային),</li>
                <li>արտարժույթի փոխանակումներ,</li>
                <li>վարկի մարումներ,</li>
                <li>ավանդի բացում և համալրումներ,</li>
                <li>կոմունալ վճարումներ (նաև խմբային),</li>
                <li>բюдջետային փոխանցումներ,</li>
                <li>գույքահարկի վճարումներ,</li>
                <li>կանխիկացումներ,</li>
                <li>փաստաթղթերի չեղարկում։</li>
              </ul>
            </div>

            {/* Կետ 3 */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-[#6200ee] text-base md:text-lg flex items-center space-x-2">
                <span>•</span> <span>Ինչպես նաև.</span>
              </h3>
              <ul className="list-disc pl-8 space-y-2 text-sm md:text-base text-gray-700">
                <li>ուղարկել և ստանալ ազատ ֆորմատի նամակներ՝ կցված ֆայլերով (MS Word, Excel և այլն),</li>
                <li>ներմուծել տվյալներ xml ֆորմատի ֆայլից,</li>
                <li>ստեղծել փաստաթղթերի ձևանմուշներ (շաբլոններ):</li>
              </ul>
            </div>
          </section>

          {/* Ուշադրություն բաժին */}
          <section className="space-y-4 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold text-[#6200ee]">Ուշադրություն.</h3>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
              <li>EvocaOnline հավելվածով գործարքներ կատարելիս գործում է միջնորդավճարների կիրառման շահավետ զեղչային համակարգ։</li>
              <li>Ծանոթացեք մեր Evoca Online ավանդատեսակին, որի ներդրման պարագայում գործում են ավելի բարձր տոկոսադրույքներ (մեր կողմից առաջարկվող այլ ավանդատեսակների համեմատ)։</li>
              <li>Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում։ Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ այստեղ։</li>
            </ul>
          </section>

          {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Ակորդեոնային կոճակներ) */}
          <section className="space-y-4 pt-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h3>

            <div className="space-y-3">
              {/* Կոճակ 1 - Անվտանգություն */}
              <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm transition">
                <button
                  onClick={() => setIsSecurityOpen(!isSecurityOpen)}
                  className="w-full flex items-center justify-between p-4 bg-purple-50/50 hover:bg-purple-50 text-gray-900 font-semibold transition"
                >
                  <span className="flex items-center space-x-3 text-[#6200ee]">
                    {isSecurityOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    <span>Անվտանգություն</span>
                  </span>
                </button>
                {isSecurityOpen && (
  <div className="p-4 bg-white text-gray-700 text-sm md:text-base space-y-3 border-t border-purple-100">
    <ul className="list-disc pl-5 space-y-3">
      <li>
        Համակարգն առավել անվտանգ դարձնելու նպատակով մեր EvocaOnline համակարգի օգտատերերին առաջարկում ենք <strong>Vasco Token Digipass GO-6</strong> սարք։
      </li>
      <li>
        Vasco Token Digipass GO-6 անվտանգության սարքը մեր սեփականությունն է, որը տրամադրում ենք ձեզ EvocaOnline համակարգ մուտք գործելու անվտանգության համապատասխան գաղտնանիշերի գեներացման համար։
      </li>
      <li>
        Տվյալների գաղտնագրման համար օգտագործվում է <strong>Secure Socket Layer (SSL)</strong> տեխնոլոգիան։
      </li>
    </ul>
  </div>
)}
              </div>

              {/* Կոճակ 2 - Ակտիվացման կարգը */}
              <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm transition">
                <button
                  onClick={() => setIsActivationOpen(!isActivationOpen)}
                  className="w-full flex items-center justify-between p-4 bg-purple-50/50 hover:bg-purple-50 text-gray-900 font-semibold transition"
                >
                  <span className="flex items-center space-x-3 text-[#6200ee]">
                    {isActivationOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    <span>Ակտիվացման կարգը</span>
                  </span>
                </button>
                {isActivationOpen && (
  <div className="p-4 bg-white text-gray-700 text-sm md:text-base space-y-3 border-t border-purple-100">
    <ul className="list-disc pl-5 space-y-3">
      <li>
        Հավելվածը մեր հաճախորդներին տրամադրում ենք «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ[cite: 21]:
      </li>
      <li>
        Մեր և ձեր միջև բանկային ծառայությունների մատուցման որևէ պայմանագիր կնքելու դեպքում (հաշիվների բացում, վարկերի տրամադրում, ավանդների ներգրավում և այլն), հավելվածն ակտիվանում է ավտոմատ կերպով՝ «Միայն դիտելու» հնարավորությամբ[cite: 21]: Համակարգեր մուտք գործելու տվյալները (Login, Password) առկա են ծառայությունների մատուցման պայմանագրերում[cite: 21]: Պայմանագրերում առկա է նաև QR կոդի տեսքով հղում՝ հավելվածը App Store-ից կամ Play Store-ից ներբեռնելու համար[cite: 21]:
      </li>
      <li>
        Ցանկության դեպքում կարող եք ակտիվացնել հավելվածը՝ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ[cite: 21]:
      </li>
      <li>
        Եթե արդեն օգտվում եք մեր ծառայություններից, ապա կարող եք դիմել մեզ և ակտիվացնել հավելվածը՝ «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ[cite: 21]:
      </li>
    </ul>
  </div>
)}
              </div>
            </div>
          </section>

          {/* Փաստաթղթերի բաժին */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
            
            <div className="space-y-3">
              {[
                "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.",
                "SWIFT Transfers (20.03.2026)",
                "SWIFT переводы в РФ (20.03.2026)"
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
                    <span className="text-sm md:text-base font-medium text-gray-800">{docTitle}</span>
                  </div>
                  <div className="text-gray-400 group-hover:text-[#6200ee] transition">
                    ⬇
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
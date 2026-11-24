import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function RegulationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          {/* Հացաշարք (Breadcrumbs) */}
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <span>🏠</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-700 font-medium">Կարգավորում</span>
          </nav>

          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Կարգավորում
          </h1>

          {/* Ենթավերնագիր և Ներածություն */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Բանկի կողմից ծառայությունների մատուցումը կարգավորվում է՝
            </h2>

            {/* Բաժին 1. ՀՀ Օրենքներով */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900 text-base md:text-lg">
                <span className="text-[#6200ee] mr-2">•</span> ՀՀ Օրենքներով՝
              </h3>
              <ul className="list-disc pl-8 space-y-2 text-sm md:text-base text-gray-700">
                <li>«Հայաստանի Հանրապետության Քաղաքացիական օրենսգիրք»</li>
                <li>«Բանկային գաղտնիքի մասին»</li>
                <li>«Բանկային ավանդների ներգրավման մասին»</li>
                <li>«Վճարման հանձնարարականով միջոցների փոխանցումների մասին»</li>
                <li>«Արժութային կարգավորման և արժութային վերահսկողության մասին»</li>
                <li>«Արժեթղթերի շուկայի մասին»</li>
                <li>«Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին»</li>
                <li>«Վճարահաշվարկային համակարգերի և վճարահաշվարկային կազմակերպությունների մասին»</li>
                <li>«Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին»</li>
                <li>«Սպառողական կրեդիտավորման մասին»</li>
                <li>«Բնակարանային հիփոթեքային կրեդիտավորման մասին»</li>
                <li>«Պետական կենսաթոշակների մասին»</li>
                <li>«Ֆինանսական համակարգի հաշտարարի մասին»</li>
                <li>«Պետական նպաստների մասին»</li>
                <li>«Բանկերի և բանկային գործունեության մասին»</li>
              </ul>
            </div>

            {/* Բաժին 2. ՀՀ Կենտրոնական բանկի նորմատիվ իրավական ակտերով */}
            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-gray-900 text-base md:text-lg">
                <span className="text-[#6200ee] mr-2">•</span> ՀՀ Կենտրոնական բանկի նորմատիվ իրավական ակտերով՝
              </h3>
              <ul className="list-disc pl-8 space-y-2 text-sm md:text-base text-gray-700">
                <li>Կանոնակարգ 8/01 «Տարեկան փաստացի տոկոսադրույքի հաշվարկման բացատրություններ ու օրինակներ»</li>
                <li>Կանոնակարգ 8/02 «Բանկային ավանդների տարեկան տոկոսային եկամտաբերության հաշվարկումը»</li>
                <li>Կանոնակարգ 8/03 «Ֆինանսական կազմակերպությունների և ֆինանսական խմբերի կողմից տեղեկությունների հրապարակումը»</li>
                <li>Կանոնակարգ 8/04 «Հաճախորդների բողոքների քննության գործընթացը կարգավորող ներքին իրավական актыերին ներկայացվող նվազագույն պայմաններ և սկզբունքներ»</li>
                <li>Կանոնակարգ 8/05 «Ֆինանսական կազմակերպությունների գործարար վարվելակերպի կանոններ»</li>
                <li>Կանոնակարգ 9 «ՀՀ տարածքում գործող բանկերում կանխիկ դրամով կատարվող գործառնություններ»</li>
              </ul>
            </div>

            {/* Բաժին 3. Բանկի Խորհրդի կողմից հաստատված ներքին իրավական ակտերով */}
            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-gray-900 text-base md:text-lg">
                <span className="text-[#6200ee] mr-2">•</span> Բանկի Խորհրդի կողմից հաստատված ներքին իրավական ակտերով (կանոնակարգեր, կարգեր, ընթացակարգեր և այլն)։
              </h3>
            </div>

          </div>

          {/* Փաստաթղթերի բաժին */}
          <div className="mt-12 space-y-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
            
            <div className="space-y-3">
              {[
                "«Անցանկալի հաճախորդների հետ հարաբերությունների կառավարման» ընթացակարգ (Ուժի մեջ է 30.0...",
                "Բնապահպանական և սոցիալական կառավարման համակարգ",
                "Հաճախորդների սպասարկման գործելակարգ 01.09.2026թ.",
                "Տեղեկատվական անվտանգության քաղաքականություն (Ուժի մեջ է 25.12.2025թ.-ից)"
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
          </div>

        </div>
      </main>

      {/* Ֆութերի կցումը import-ով */}
      <Footer />

    </div>
  );
}
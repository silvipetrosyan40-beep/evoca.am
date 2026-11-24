import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import Header from './header'; // Ենթադրվող ճանապարհը հեդերի
import Footer from './footer'; // Ենթադրվող ճանապարհը ֆութերի

export default function CustomerRightsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          
          {/* Հացաշարք (Breadcrumbs) */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
            <span>🏠</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-700 font-medium">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</span>
          </nav>

          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
          </h1>

          {/* Հիմնական տեքստային բաժին */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Հարգելի Հաճախորդներ՝</h3>
              <p>
                Մեր կողմից հաճախորդների բողոք-պահանջների ընդունման, քննարկման և որոշումների կայացման (արձագանքման) գործընթացը կարգավորվում է «Էվոկաբանկ» ԲՓԸ կողմից հաստատված Բողոքների քննության կանոններով:
              </p>
            </div>

            <p>
              Ձեր իրավունքները կարող են պաշտպանվել ինչպես դատական կարգով, այնպես էլ ֆինանսական համակարգի հաշտարարի միջոցով։ Ֆինանսական համակարգի հաշտարարի քննությանը ենթակա պահանջներ են համարվում այն բողոք պահանջները, որոնք ներկայացվում են ֆիզիկական անձ հաճախորդի կողմից մեր դեմ, կապված են մեր ծառայությունների հետ և պարունակում են 10 մլն դրամը կամ դրան համարժեք արտարժույթով գումարը չգերազանցող գույքային պահանջ:
            </p>

            <p>
              Եթե Ձեր և Մեր միջև կնքվել է արբիտրաժային համաձայնություն, ապա մեր միջև ծագող վեճերը ենթակա են լուծման արբիտրաժային դատարանի կողմից («Առևտրային արբիտրաժի մասին» ՀՀ օրենքին, Արբիտրաժային դատարանի կանոնադրությանը և արբիտրաժի կանոնակարգին համապատասխան):
            </p>

            <p>
              Ֆինանսական համակարգի հաշտարարի գործունեությանը մանրամասն կարող եք ծանոթանալ{' '}
              <a href="https://www.fsm.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline font-medium hover:text-purple-700">
                www.fsm.am
              </a>{' '}
              պաշտոնական կայքում։ Ֆինանսական համակարգի հաշտարարի քննությանը ենթակա պահանջներին առնչվող հարցերով կարող եք դիմել մեր իրավաբանական բաժին՝ այցելելով Գլխամասային գրասենյակ կամ զանգահարելով (010) 60-55-55 հեռախոսահամարով։
            </p>
          </div>

          {/* Ուշադրություն բլոկ */}
          <div className="mt-10 pt-6 border-t border-gray-200 space-y-4">
            <h3 className="text-lg font-bold text-[#6200ee]">Ուշադրություն՝</h3>
            
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-gray-700">
              <li>
                Ցանկացած անձ իրավունք ունի ստանալ «Էվոկաբանկ» ԲՓԸ-ի վերաբերյալ «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի 3-րդ մասով, 43-րդ հոդվածի 2-րդ մասով սահմանված տեղեկատվության պատճենները (օրենքը կարող եք գտնել ՀՀ Կենտրոնական բանկի{' '}
                <a href="https://www.cba.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline hover:text-purple-700">
                  www.cba.am
                </a>{' '}
                ինտերնետային հասցեում): Տեղեկատվության թղթային մեկ տպագիր էջի արժեքը 50 դրամ է, իսկ էլեկտրոնային առաքման դեպքում՝ անվճար է։
              </li>
              <li>
                Վերոնշյալ տեղեկությունները Բանկը տրամադրում է գրավոր դիմում ստանալուց 3 (երեք) աշխատանքային օրվա ընթացքում։ Գրավոր դիմումը կարող է ներկայացվել հետևյալ ձևերով. առձեռն՝ Բանկի գլխամասային գրասենյակում, կամայական մասնաճյուղում, էլեկտրոնային հասցեով՝ <a href="mailto:hello@evoca.am" className="text-[#6200ee] underline">hello@evoca.am</a> կամ փոստով՝ «Էվոկաբանկ» ԲՓԸ, ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով։
              </li>
            </ul>
          </div>

          {/* Փաստաթղթերի բաժին */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
            
            <div className="space-y-3">
              {[
                "«Անցանկալի հաճախորդների հետ հարաբերությունների կառավարման» ընթացակարգ (Ուժի մեջ է 30.0...",
                "Բողոքների քննության կանոններ (01.09.2026թ.)",
                "Ինչ անել, եթե բողոք ունեք (01.09.2026թ.)",
                "Բողոքի ներկայացման հայտ (01.09.2026թ.)",
                "Անձնական տվյալների մշակման և երրորդ անձանց փոխանցման Համաձայնություն",
                "Հաճախորդներին ծառայությունների մատուցման նպատակով Բանկի կողմից «ԷՎԵՆՔ» ՓԲԸ և «ՆՈՐՔ» կ..."
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
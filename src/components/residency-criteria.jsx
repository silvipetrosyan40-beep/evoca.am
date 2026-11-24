import React from 'react';
import { ChevronRight } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function CustomerResidencyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#6200ee]">
            Հաճախորդի ռեզիդենտության չափանիշներ
          </h1>

          {/* Բաժին 1 */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#6200ee]">
              Ո՞վ է համարվում ՀՀ ռեզիդենտ։
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Ձեր ռեզիդենտության կարգավիճակը որոշվում է՝ հաշվի առնելով երկու կարևոր հանգամանք։
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Դուք համարվում եք ՀՀ ռեզիդենտ, եթե՝
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
              <li>տվյալ հարկային տարում ՀՀ-ում գտնվել եք <strong>183 և ավել օր</strong>։</li>
              <li>Ձեր <strong>կենսական շահերի կենտրոնը ՀՀ-ում է</strong>։</li>
            </ul>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-2">
              Կենսական շահերի կենտրոնը գնահատելիս կարող են հաշվի առնվել, օրինակ, Ձեր ընտանիքի բնակության վայրը, մշտական բնակության վայրը, հիմնական աշխատանքը կամ բիզնեսը, գույքը, եկամուտների աղբյուրներն ու տնտեսական գործունեությունը։
            </p>
          </div>

          {/* Բաժին 2 */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-lg font-bold text-[#6200ee]">
              ՀՀ ռեզիդենտ չե՞ք։
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Դուք այլ երկրի քաղաքացի եք և չեք համապատասխանում ՀՀ ռեզիդենտության չափանիշներին։
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Բանկի հաճախորդ կարող եք դառնալ, եթե բավարարում եք ստորև նշված պայմաններից <strong>առնվազն մեկին</strong>։
            </p>
          </div>

          {/* Ցանկ 1 */}
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">
                <span className="text-[#6200ee] mr-2">1.</span> Անշարժ գույք ՀՀ-ում
              </h3>
              <p className="text-sm md:text-base text-gray-700 pl-6">
                ՀՀ-ում ունեք անշարժ գույք և դրա նկատմամբ սեփականության իրավունքը հաստատող գրանցման վկայական։
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">
                <span className="text-[#6200ee] mr-2">2.</span> Ավանդ՝ առնվազն 6 ամիս ժամկետով
              </h3>
              <p className="text-sm md:text-base text-gray-700 pl-6">
                Evocabank-ում պատրաստվում եք ներդնել առնվազն 6 ամիս ժամկետով ավանդ հետևյալ սահմանաչափերով՝
              </p>
              
              <ul className="list-disc pl-11 space-y-2 text-sm md:text-base text-gray-700">
                <li>20,000 ԱՄՆ դոլար,</li>
                <li>20,000 եվրո,</li>
                <li>1,500,000 ՌԴ ռուբլի</li>
                <li>կամ դրանց համարժեք ՀՀ դրամ։</li>
              </ul>
            </div>
          </div>

          {/* Ցանկ 2 */}
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">
                <span className="text-[#6200ee] mr-2">1.</span> Անհատ ձեռնարկատեր ՀՀ-ում
              </h3>
              <p className="text-sm md:text-base text-gray-700 pl-6">
                ՀՀ-ում գրանցված եք որպես անհատ ձեռնարկատեր և ունեք համապատասխան գրանցման վկայական։
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">
                <span className="text-[#6200ee] mr-2">2.</span> Մասնակից կամ բաժնետեր ՀՀ-ում գրանցված ընկերությունում
              </h3>
              <p className="text-sm md:text-base text-gray-700 pl-6">
                ՀՀ-ում գրանցված ընկերության բաժնետեր եք, և այդ կարգավիճակը հաստատված է համապատասխան փաստաթղթերով։
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Ֆութերի կցումը import-ով */}
      <Footer />

    </div>
  );
}
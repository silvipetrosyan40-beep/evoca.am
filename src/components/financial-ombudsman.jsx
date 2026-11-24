import React from 'react';
import { ChevronRight } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function FinancialOmbudsmanPage() {
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
            <span className="text-gray-700 font-medium">Ֆին. հաշտարար</span>
          </nav>

          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ֆին. հաշտարար
          </h1>

          {/* Ներածական տեքստ */}
          <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              <strong>Ֆինանսական համակարգի հաշտարարի</strong> գրասենյակն անկախ կառավարման համակարգով կառույց է, որի հիմնադիրն է ՀՀ կենտրոնական բանկը։ Հաշտարարի գրասենյակը կոչված է լուծելու ֆիզիկական անձ սպառողների և ֆինանսական կազմակերպությունների միջև ծագած գույքային վեճերը։
            </p>
            <p className="font-semibold text-gray-900">
              Հաշտարարի ծառայություններն անվճար են։
            </p>
          </div>

          {/* Նպատակներ */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-gray-900 text-base md:text-lg">
              Ֆինանսական համակարգի հաշտարարի գործունեության նպատակներն են՝
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-700">
              <li>ֆինանսական ոլորտում սպառողների իրավունքների ու շահերի պաշտպանությունը,</li>
              <li>սպառողների պահանջների արագ, արդյունավետ և անվճար քննությունը,</li>
              <li>ֆինանսական համակարգի նկատմամբ հանրության վստահության բարձրացումը։</li>
            </ul>
          </div>

          {/* Գրասենյակի տվյալներ */}
          <div className="space-y-4 pt-4 border-t border-gray-100 text-sm md:text-base text-gray-700">
            <h3 className="text-lg font-bold text-[#6200ee]">
              Ֆինանսական համակարգի հաշտարարի գրասենյակ՝
            </h3>
            
            <div className="space-y-2">
              <p><strong>Ֆինանսական համակարգի գլխավոր հաշտարար, Գրասենյակի կառավարիչ՝</strong> Վազգեն Մնացականյան</p>
              <p><strong>Հաշտարար՝</strong> Փիրուզ Սարգսյան</p>
              <p><strong>Հասցե՝</strong> ՀՀ, 0010, ք. Երևան, Մ. Խորենացու փող., 15, «Էլիտ Մլազա» բիզնես կենտրոն 7-րդ հարկ</p>
              <p><strong>Հեռ.՝</strong> <a href="tel:+37460701111" className="text-[#6200ee] underline">+374 60 70-11-11</a></p>
              <p><strong>Ֆաքս՝</strong> +374 10 58-24-21</p>
              <p><strong>Էլ. հասցե՝</strong> <a href="mailto:info@fsm.am" className="text-[#6200ee] underline">info@fsm.am</a></p>
              <p><strong>Պաշտոնական կայք՝</strong> <a href="https://www.fsm.am" target="_blank" rel="noopener noreferrer" className="text-[#6200ee] underline">www.fsm.am</a></p>
            </div>
          </div>

          {/* Աշխատանքային ժամեր */}
          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-gray-900 text-base">Աշխատանքային ժամեր</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Ֆինանսական համակարգի հաշտարարի գրասենյակն աշխատում է ամեն օր ժամը 09:00 - 18:00 (ընդմիջման ժամ՝ 13:00-ից 14:00), բացի հանգստյան և տոն օրերից։
            </p>
          </div>

        </div>
      </main>

      {/* Ֆութերի կցումը import-ով */}
      <Footer />

    </div>
  );
}
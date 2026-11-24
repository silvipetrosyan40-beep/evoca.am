import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home, FileText, Download } from 'lucide-react';

export default function LoansPage() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const documents = [
    "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26",
    "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ."
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Մանուշակագույն երկրորդային ենթաբաժինների բար */}
        <div className="bg-purple-800 text-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 h-12 items-center text-sm font-medium overflow-x-auto">
              <button onClick={() => handleNavigation('/accounts')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Evoca խնայողական հաշիվ</button>
              <button onClick={() => handleNavigation('/hy/account-opening-service')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Հաշիվների բացում և սպասարկում</button>    
              <button onClick={() => handleNavigation('/hy/unallocated-metal-accounts')} className="text-white border-b-2 border-white pb-3 pt-3 bg-transparent cursor-pointer border-t-0 border-x-0 shrink-0">Առարկայազուրկ մետաղական Հաշիվներ</button>
              <button onClick={() => handleNavigation('/hy/remote-service-for-non-resident-clients')} className="text-purple-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer shrink-0">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</button>
            </nav>
          </div>
        </div>

        {/* ՀԱՑԻ ՓԽՈՒՐՆԵՐ (BREADCRUMBS) ԵՎ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <button onClick={() => handleNavigation('/')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Անհատ</button>
            <span>›</span>
            <button onClick={() => handleNavigation('/hy/loans')} className="hover:text-purple-700 bg-transparent border-none cursor-pointer">Հաշիվներ</button>
            <span>›</span>
            <span className="text-gray-800 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
          </div>

          {/* Top Hero Section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl overflow-hidden mb-12">
            <div className="py-8 px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Առարկայազուրկ մետաղական հաշիվներ
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար[cite: 21]: Այս պահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ[cite: 21]:
              </p>
            </div>
            <div className="w-full h-full flex justify-end">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png" 
                alt="Առարկայազուրկ մետաղական հաշիվներ" 
                className="w-full h-auto object-cover rounded-l-3xl"
              />
            </div>
          </div>

          {/* Հիմնական պայմաններ */}
          <div className="mb-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Հիմնական պայմաններ
            </h2>
            
            <ul className="list-disc pl-5 space-y-4 text-gray-700 leading-relaxed">
              <li>
                Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն <span className="text-purple-800 font-semibold">999.9 հարգի ոսկով</span>, առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած <span className="text-purple-800 font-semibold">31 գրամից</span> (ոսկու գնանշումը կատարվում է դրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից[cite: 22]:
              </li>
              <li>
                Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով՝ ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (դրամային) արտահայտությամբ՝ 0.01 գրամ ճշգրտությամբ կամ տրոյական ուղիաներով 0.001 տրոյական ուղիա ճշգրտությամբ (մեկ տրոյական ուղիան հավասար է 31.1034 գրամի)[cite: 22]:
              </li>
              <li>
                Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով[cite: 22]:
              </li>
              <li>
                Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով[cite: 22]:</li>
                  <li>հաշվի ելքագրում՝ հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով[cite: 22]:</li>
                </ul>
              </li>
              <li>
                Մետաղական հաշիվները կարող են գրավադրվել[cite: 22]:
              </li>
              <li>
                Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Դիմում՝ մեր ձևանմուշի համաձայն[cite: 22]:</li>
                  <li>Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ[cite: 22]:</li>
                  <li>Մեր պահանջով այլ փաստաթղթեր[cite: 22]:</li>
                </ul>
              </li>
              <li>
                Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին ու պայմաններին կարող եք ծանոթանալ <a href="#tariffs" className="text-purple-700 underline font-medium">այստեղ</a>[cite: 22]:
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed pt-2">
              Evocabank-ում նաև կարող եք ձեռք բերել ոսկու գրավով վարկեր՝ ամենահարմար պայմաններով: <a href="#gold-loans" className="text-purple-700 underline font-medium">Ոսկու գրավով վարկը</a> տրամադրվում է նսկյա իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով[cite: 22]:
            </p>

            <p className="text-gray-700 font-semibold text-gray-900 pt-2">
              Ուշադրություն. Ավանդների հատուցումը երաշխավորող հիմնադրամը չի հատուցում մետաղական հաշիվները[cite: 22]:
            </p>
          </div>

          {/* Փաստաթղթեր */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-6">
              Փաստաթղթեր
            </h2>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-purple-50/40 border border-purple-100 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer group">
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
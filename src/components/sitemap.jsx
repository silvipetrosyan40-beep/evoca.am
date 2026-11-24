import React from 'react';
import { ChevronRight } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-10 text-center">
          
          {/* Հացաշարք (Breadcrumbs) */}
          <nav className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <span>🏠</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-700 font-medium">Կայքի քարտեզ</span>
          </nav>

          {/* Բովանդակության ցանց (2 սյունակով, կենտրոնացված) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* ՁԱԽ ՍՅՈՒՆԱԿ */}
            <div className="space-y-12">
              
              {/* Անհատ */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <a href="/hy/loans" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                    Անհատ
                  </a>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/loans" className="hover:text-[#6200ee] transition">Վարկեր</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/loans" className="hover:text-[#6200ee] transition">Վարկեր</a></li>
                      <li><a href="/loans/credit-history" className="hover:text-[#6200ee] transition">Վարկային պատմություն և սքոր</a></li>
                      <li><a href="/loans/important-info" className="hover:text-[#6200ee] transition">Կարևոր տեղեկատվություն</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/cards" className="hover:text-[#6200ee] transition">Քարտեր</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/cards" className="hover:text-[#6200ee] transition">Քարտեր</a></li>
                      <li><a href="/hy/cards-provision-and-service" className="hover:text-[#6200ee] transition">Քարտերի տրամադրում և սպասարկում</a></li>
                      <li><a href="/hy/pension-cards" className="hover:text-[#6200ee] transition">Սոցիալական ապահովության վճարային քարտեր</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/deposits" className="hover:text-[#6200ee] transition">Ավանդներ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/deposits" className="hover:text-[#6200ee] transition">Ավանդներ</a></li>
                      <li><a href="/hy/deposits-important-information" className="hover:text-[#6200ee] transition">Կարևոր տեղեկատվություն</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/accounts" className="hover:text-[#6200ee] transition">Հաշիվներ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/accounts" className="hover:text-[#6200ee] transition">Evoca խնայողական հաշիվ</a></li>
                      <li><a href="/hy/account-opening-service" className="hover:text-[#6200ee] transition">Հաշիվների բացում և սպասարկում</a></li>
                      <li><a href="/hy/unallocated-metal-accounts" className="hover:text-[#6200ee] transition">Առարկայազուրկ մետաղական հաշիվներ</a></li>
                      <li><a href="/hy/remote-service-for-non-resident-clients" className="hover:text-[#6200ee] transition">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/transfers" className="hover:text-[#6200ee] transition">Փոխանցումներ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/transfers" className="hover:text-[#6200ee] transition">Դրամական փոխանցումներ</a></li>
                      <li><a href="/hy/payment-systems" className="hover:text-[#6200ee] transition">Վճարային համակարգեր</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/securities" className="hover:text-[#6200ee] transition">Արժեթղթեր</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/securities" className="hover:text-[#6200ee] transition">Ներդրումային ծառայություններ</a></li>
                      <li><a href="/hy/bonds" className="hover:text-[#6200ee] transition">Պարտատոմսեր</a></li>
                      <li><a href="/hy/repo-services" className="hover:text-[#6200ee] transition">ՀԿԳ ծառայություններ</a></li>
                      <li><a href="/hy/repo-reverse-repo" className="hover:text-[#6200ee] transition">Ռեպո/Հակադարձ Ռեպո գործարքներ</a></li>
                      <li><a href="/hy/evocalnvest" className="hover:text-[#6200ee] transition">EvocaINVEST</a></li>
                    </ul>
                  </div>

                  <div className="pt-2 space-y-2">
                    <p><a href="/salary" className="font-bold text-gray-900 hover:text-[#6200ee] transition">EvocaSALARY</a></p>
                    <p><a href="/evocatouch" className="font-bold text-gray-900 hover:text-[#6200ee] transition">EvocaTOUCH</a></p>
                  </div>
                </div>
              </div>

              {/* Բիզնես */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <a href="/hy/business" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                    Բիզնես
                  </a>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/business" className="hover:text-[#6200ee] transition">Վարկեր</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/business" className="hover:text-[#6200ee] transition">Բիզնես վարկեր</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/leasing-evoca" className="hover:text-[#6200ee] transition">Լիզինգ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/leasing-evoca" className="hover:text-[#6200ee] transition">Evoca Leasing</a></li>
                      <li><a href="/hy/special-offer" className="hover:text-[#6200ee] transition">Հատուկ առաջարկ</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/business-account-opening-and-services" className="hover:text-[#6200ee] transition">Հաշիվներ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/business-account-opening-and-services" className="hover:text-[#6200ee] transition">Հաշիվների բացում և սպասարկում</a></li>
                      <li><a href="/hy/business-unallocated-metal-accounts" className="hover:text-[#6200ee] transition">Առարկայազուրկ մետաղական հաշիվներ</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/business-classical-deposit" className="hover:text-[#6200ee] transition">Ավանդներ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/business-classical-deposit" className="hover:text-[#6200ee] transition">Դասական ավանդ</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/business-investment-services" className="hover:text-[#6200ee] transition">Արժեթղթերի շուկա</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/business-investment-services" className="hover:text-[#6200ee] transition">Ներդրումային ծառայություններ</a></li>
                      <li><a href="/hy/business-bonds" className="hover:text-[#6200ee] transition">Պարտատոմսեր</a></li>
                      <li><a href="/hy/business-repo-services" className="hover:text-[#6200ee] transition">ՀԿԳ ծառայություններ</a></li>
                      <li><a href="/hy/business-repo-reverse" className="hover:text-[#6200ee] transition">Ռեպո/Հակադարձ Ռեպո գործարքներ</a></li>
                      <li><a href="/hy/business-evocainvest" className="hover:text-[#6200ee] transition">EvocaINVEST</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/guarantee" className="hover:text-[#6200ee] transition">Առևտրի ֆինանսավորում</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/guarantee" className="hover:text-[#6200ee] transition">Երաշխիք</a></li>
                      <li><a href="/hy/factoring-finance" className="hover:text-[#6200ee] transition">Ֆակտորինգային ֆինանսավորում</a></li>
                      <li><a href="/hy/letter-of-credit" className="hover:text-[#6200ee] transition">Ակրեդիտիվ</a></li>
                      <li><a href="/hy/documentary-collection" className="hover:text-[#6200ee] transition">Ինկասո</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/v-pos-terminal" className="hover:text-[#6200ee] transition">Դիջիթալ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/v-pos-terminal" className="hover:text-[#6200ee] transition">V-POS Տերմինալ</a></li>
                      <li><a href="/hy/pos-terminal" className="hover:text-[#6200ee] transition">POS Տերմինալ</a></li>
                      <li><a href="/hy/tariffs" className="hover:text-[#6200ee] transition">Սակագներ</a></li>
                      <li><a href="/hy/terminal-application" className="hover:text-[#6200ee] transition">Տերմինալի տեղադրման հայտ</a></li>
                      <li><a href="/hy/evoca-mobile-pos" className="hover:text-[#6200ee] transition">Evoca Mobile POS՝ mPOS</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">
                      <a href="/hy/individual-safe-deposit-boxes" className="hover:text-[#6200ee] transition">Այլ</a>
                    </h3>
                    <ul className="space-y-1.5 text-gray-600">
                      <li><a href="/hy/individual-safe-deposit-boxes" className="hover:text-[#6200ee] transition">Պահատուփեր</a></li>
                      <li><a href="/hy/transfers" className="hover:text-[#6200ee] transition">Փոխանցումներ</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ակնթարթային վճարումներ */}
              <div className="border-b border-gray-200 pb-2">
                <a href="/hy/akntartayinvcharumner" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                  Ակնթարթային վճարումներ
                </a>
              </div>

              {/* Մեր մասին */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <a href="/hy/about" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                    Մեր մասին
                  </a>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/hy/about" className="font-bold text-gray-900 hover:text-[#6200ee] transition">Evoca-ի մասին</a></li>
                  <li><a href="/hy/about" className="hover:text-[#6200ee] transition">Ընդհանուր</a></li>
                </ul>
              </div>

            </div>

            {/* ԱՋ ՍՅՈՒՆԱԿ */}
            <div className="space-y-12 text-sm">
              
              {/* Ընդհանուր ենթաբաժիններ */}
              <div className="space-y-6">
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/hy/about/structure" className="hover:text-[#6200ee] transition">Կառուցվածք</a></li>
                  <li><a href="/hy/about/shareholders" className="hover:text-[#6200ee] transition">Բաժնետերեր</a></li>
                  <li><a href="/hy/about/management" className="hover:text-[#6200ee] transition">Ղեկավարություն</a></li>
                  <li><a href="/hy/about/partners" className="hover:text-[#6200ee] transition">Գործընկերներ</a></li>
                  <li><a href="/hy/about/awards" className="hover:text-[#6200ee] transition">Մրցանակներ</a></li>
                  <li><a href="/hy/about/csr" className="hover:text-[#6200ee] transition">CSR</a></li>
                  <li><a href="/hy/about/group" className="hover:text-[#6200ee] transition">Էվոկա ֆինանսական խումբ</a></li>
                </ul>

                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-base">
                    <a href="/hy/about/tariffs" className="hover:text-[#6200ee] transition">Սակագներ</a>
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><a href="/hy/about/tariffs" className="hover:text-[#6200ee] transition">Վարկեր ֆիզիկական անձանց</a></li>
                    <li><a href="/hy/about/tariffs/corporate-loans" className="hover:text-[#6200ee] transition">Վարկեր իրավաբանական անձանց</a></li>
                    <li><a href="/hy/about/tariffs/commissions" className="hover:text-[#6200ee] transition">Միջնորդավճարների սակագները</a></li>
                    <li><a href="/hy/about/tariffs/deposits" className="hover:text-[#6200ee] transition">Ավանդների սակագները</a></li>
                    <li><a href="/hy/about/tariffs/archive" className="hover:text-[#6200ee] transition">Արխիվ</a></li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-gray-900 text-base">
                    <a href="/hy/about/reports" className="hover:text-[#6200ee] transition">Հաշվետվություններ</a>
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><a href="/hy/about/reports" className="hover:text-[#6200ee] transition">Աուդիտորական եզրակացություն</a></li>
                    <li><a href="/hy/about/reports/financial" className="hover:text-[#6200ee] transition">Ֆինանսական հաշվետվություններ</a></li>
                    <li><a href="/hy/about/reports/investors" className="hover:text-[#6200ee] transition">Ներդրողների համար</a></li>
                    <li><a href="/hy/about/reports/semiannual" className="hover:text-[#6200ee] transition">Կիսամյակային հաշվետվություններ</a></li>
                    <li><a href="/hy/about/reports/annual" className="hover:text-[#6200ee] transition">Տարեկան հաշվետվություններ</a></li>
                  </ul>
                </div>

                <p>
                  <a href="/hy/about/announcements" className="font-bold text-gray-900 text-base hover:text-[#6200ee] transition">
                    Հայտարարություններ
                  </a>
                </p>
              </div>

              {/* Նորություններ */}
              <div className="border-b border-gray-200 pb-2">
                <a href="/all-news" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                  Նորություններ
                </a>
              </div>

              {/* Բլոգ */}
              <div className="border-b border-gray-200 pb-2">
                <a href="/hy/blog" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                  Բլոգ
                </a>
              </div>

              {/* Կարիերա */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <a href="/hy/career" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                    Կարիերա
                  </a>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900">
                    <a href="/hy/career" className="hover:text-[#6200ee] transition">Evoca Լայֆ</a>
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><a href="/hy/career" className="hover:text-[#6200ee] transition">Մշակույթ</a></li>
                    <li><a href="/hy/career-benefits" className="hover:text-[#6200ee] transition">Առավելություններ</a></li>
                    <li><a href="/hy/career-faq" className="hover:text-[#6200ee] transition">Հաճախ տրվող հարցեր</a></li>
                  </ul>

                  <h3 className="font-bold text-gray-900 pt-2">
                    <a href="/hy/work-at-evoca" className="hover:text-[#6200ee] transition">Աշխատանք և պրակտիկա</a>
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><a href="/hy/work-at-evoca" className="hover:text-[#6200ee] transition">Աշխատանք Evoca-ում</a></li>
                    <li><a href="/hy/career/internship" className="hover:text-[#6200ee] transition">Ուսումնական պրակտիկա</a></li>
                    <li><a href="/hy/career/evocabridge" className="hover:text-[#6200ee] transition">EvocaBRIDGE</a></li>
                  </ul>
                </div>
              </div>

              {/* Բանկի մասին */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <a href="/hy/about" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                    Բանկի մասին
                  </a>
                </div>
                <ul className="space-y-2 font-semibold text-gray-800">
                  <li><a href="/hy/about" className="hover:text-[#6200ee] transition">Մեր մասին</a></li>
                  <li><a href="/hy/about/management" className="hover:text-[#6200ee] transition">Ղեկավարություն</a></li>
                  <li><a href="/hy/about/shareholders" className="hover:text-[#6200ee] transition">Բաժնետերեր</a></li>
                  <li><a href="/hy/about/reports" className="hover:text-[#6200ee] transition">Հաշվետվություններ</a></li>
                  <li><a href="/hy/about/regulations" className="hover:text-[#6200ee] transition">Իրավական ակտեր</a></li>
                  <li><a href="/hy/about/tariffs" className="hover:text-[#6200ee] transition">Սակագներ</a></li>
                  <li><a href="/hy/about/property" className="hover:text-[#6200ee] transition">Օտարվող գույք</a></li>
                  <li><a href="/hy/about/developers" className="hover:text-[#6200ee] transition">Կառուցապատողներ</a></li>
                  <li><a href="/hy/about/partner-salons" className="hover:text-[#6200ee] transition">Գործընկեր ավտոսրահներ</a></li>
                  <li><a href="/hy/about/tariffs/archive" className="hover:text-[#6200ee] transition">Սակագների արխիվ</a></li>
                </ul>
              </div>

              {/* Օգտակար հղումներ */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <a href="/hy/customer-rights" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                    Օգտակար հղումներ
                  </a>
                </div>
                <ul className="space-y-2 font-semibold text-gray-800">
                  <li><a href="/hy/customer-rights" className="hover:text-[#6200ee] transition">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
                  <li><a href="/hy/residency-criteria" className="hover:text-[#6200ee] transition">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
                  <li><a href="/hy/regulation" className="hover:text-[#6200ee] transition">Կարգավորում</a></li>
                  <li><a href="/hy/privacy-policy" className="hover:text-[#6200ee] transition">Գաղտնիության քաղաքականություն</a></li>
                  <li><a href="/hy/financial-ombudsman" className="hover:text-[#6200ee] transition">Ֆին. հաշտարար</a></li>
                  <li><a href="/hy/financial-cooperations" className="hover:text-[#6200ee] transition">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
                  <li><a href="/hy/cardholder-links" className="hover:text-[#6200ee] transition">Հղումներ Բանկի քարտապանների համար</a></li>
                </ul>
              </div>

              {/* Այլ հղումներ */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <a href="/hy/evocaonline" className="text-xl font-bold text-gray-900 hover:text-[#6200ee] transition pb-2 border-b-2 border-[#6200ee] inline-block">
                    Այլ հղումներ
                  </a>
                </div>
                <ul className="space-y-2 font-semibold text-gray-800">
                  <li><a href="/hy/evocaonline" className="hover:text-[#6200ee] transition">EvocaONLINE</a></li>
                  <li><a href="/hy/safe-boxes" className="hover:text-[#6200ee] transition">Պահատուփեր</a></li>
                  <li><a href="/help" className="hover:text-[#6200ee] transition">Հաճախ տրվող հարցեր</a></li>
                  <li><a href="/hy/about/announcements" className="hover:text-[#6200ee] transition">Հայտարարություններ</a></li>
                  <li><a href="/hy/dibrary" className="hover:text-[#6200ee] transition">Dibrary</a></li>
                  <li><a href="/hy/bulletins" className="hover:text-[#6200ee] transition">Բուկլետներ</a></li>
                  <li><a href="/hy/contact" className="hover:text-[#6200ee] transition">Հետադարձ կապ</a></li>
                  <li><a href="/hy/sitemap" className="hover:text-[#6200ee] transition">Կայքի քարտեզ</a></li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Ֆութերի կցումը import-ով */}
      <Footer />

    </div>
  );
}
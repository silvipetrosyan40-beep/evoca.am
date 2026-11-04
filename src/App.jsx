import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/header';
import Footer from './components/footer';

// Page components
import Glxavor from './components/glxavor';
import TravelCard from './components/travel-card';
import Salary from './components/salary'; 
import Allnews from './components/all-news'; 
import Dilijanwearecoming from './components/dilijan-we-are-coming';
import Evocabankretrofestpartner from './components/evocabank-retro-fest-partner';
import Evocabankistheofficialsponsorofthefibaeurobasket from './components/evocabank-is-the-official-sponsor-of-the-fiba-eurobasket';
import Backtoschoolcashback from './components/back-to-school-cashback'; 
import WilcoCard from './components/wilco-card';
import Adidasdiscount from './components/adidas-discount';
import Globbingadvantages from './components/globbing-advantages';
import Contact from './components/contact';
import Blocktransactions from './components/block-transactions';
import Greenrockheadquarters from './components/green-rock-headquarters';
import Moodysrating from './components/moodys-rating';
import Visavision from './components/visa-vision';
import Arcaunionpay from './components/arca-union-pay';
import Giftcard from './components/gift-card';
import Visainfinite from './components/visa-infinite';
import Mastercardworlddigital from './components/mastercard-world-digital';
import Visaclassic from './components/visa-classic';
import Mastercardstandard from './components/mastercard-standard';
import Visagold from './components/visa-gold';
import Mastercardgold from './components/mastercard-gold';
import Mylergiftcard from './components/myler-gift-card';
import UGiftcard from './components/4u-gift';
import Arcaclassic from './components/arca-classic';
import Wilcovisainfinite from './components/wilco-visa-infinite';
import VisaPlatinumCard from './components/visa-platinum-card'; 
import VisaDigitalCard from './components/visa-digital-card';
import RioGiftCardTariffs from './components/rio-gift-card-tariffs';
import DalmaGiftCard from './components/dalma-gift-card';
import UnionPayGold from './components/unionpay-gold';
import UnionPayPlatinum from './components/unionpay-platinum';
import VisaBusinessCard from './components/visa-business-card';
import Loans from './components/loans';
import Credithistory from './components/credit-history';
import Importantinfo from './components/important-info';
import UnsecuredConsumer from './components/unsecured-consumer';
import Credithistoryandscore from './components/credit-history-and-score';
import CarLoans from './components/car-loans'; 
import PropertySecuredLoan from './components/property-secured-loan';
import EvocapowerLoan from './components/evocapower-loan';
import GoldSecuredPawnLoans from './components/gold-secured-pawn-loans';
import PointOfSaleLoans from './components/point-of-sale-loans'; 
import SalaryOverdrafts from './components/salary-overdrafts';
import ResidentialMortgageLoans from './components/residential-mortgage-loans'; 
import ActionLoan from './components/action-loan';
import ForDisplacedFamilies from './components/for-displaced-families-of-nagorno-karabakh';
import LandAcquisitionLoan from './components/land-acquisition-loan'; 
import MicroRenovationLoanWithBankResources from './components/micro-renovation-loan-with-bank-resources';
import LeasingOfVehiclesForIndividuals from './components/leasing-of-vehicles-for-individuals';
import OnlineOverdraft from './components/online-overdraft';
import IndividualInvestmentLoan from './components/individual-investment-loan';
import ParkingSpacePurchaseLoan from './components/parking-space-purchase-loan'; 
import BicyclePurchaseLoan from './components/bicycle-purchase-loan'; 
import HousingMortgagesForNonResidentIndividuals from './components/housing-mortgages-for-non-resident-individuals'; // Ավելացվեց ոչ ռեզիդենտների հիփոթեքային վարկերի բաղադրիչի ներմուծումը
import Evocahome from './components/evocahome'; 
import Depositsecuredcreditlineretail from './components/deposit-secured-credit-line-retail'; 
import Commercialmortgageloans from './components/commercial-mortgage-loans'; 
import Mortgageloansunderthenationalmortgagecompanyloanprogram from './components/mortgage-loans-under-the-national-mortgage-company-loan-program'; 
import Constructionloannationalmortgagecompany from './components/construction-loan-national-mortgage-company'; 
import Renovationloansundernationalmortgagecompany from './components/renovation-loans-under-national-mortgage-company'; 
import Mortgageloansunderaffordablehousingforyoungfamiliesprogram from './components/mortgage-loans-under-affordable-housing-for-young-families-program'; 
import Creditlinewithvisainfinitecard from './components/credit-line-with-visa-infinite-card'; 
import Housingaffordabilityfordisplacedfamiliesoftherepublicofartsakh from './components/housing-affordability-for-displaced-families-of-the-republic-of-artsakh'; 
import Mortgagerepairingloanfordisplacedfamiliesofartsakh from './components/mortgage-repairing-loan-for-displaced-families-of-artsakh';
import Studentloans from './components/student-loans'; 
import Mortgageloanforbuildingaresidentialhouseinbordersettlementsofarmenia from './components/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia'; 
import Evolution from './components/evolution';
import Mortgagesforservicemembers from './components/mortgages-for-service-members'; 
import Collateralconsumer from './components/collateral-consumer';
import Unsecuredconsumerloans from './components/unsecured-consumer-loans';
import Mortgage from './components/mortgage';
import Auto from './components/auto';
import Express from './components/express';
import Online from './components/online';
import Business from './components/business';
import Leasingevoca from './components/leasing-evoca'
import Specialoffer from './components/special-offer'
import Businessaccountopeningandservices from './components/business-account-opening-and-services'
import Businessunallocatedmetalaccounts from './components/business-unallocated-metal-accounts'
import Businessclassicaldeposit from './components/business-classical-deposit';
import Businessinvestmentservices from './components/business-investment-services'
import Businessbonds from './components/business-bonds'
import Businessreposervices from './components/business-repo-services'
import Businessreporeverse from './components/business-repo-reverse'
import Businessevocainvest from './components/business-evocainvest'
import Guarantee from './components/guarantee'
import Factoringfinance from './components/factoring-finance'
import Letterofcredit from './components/letter-of-credit'
import Documentarycollection from './components/documentary-collection'
import News from './components/news'
import Evocabankasthepartneroffincomm2026 from './components/evocabank_as_the_partner_of_fincomm_2026'
import Evocabankasthegeneralpartnerofarmeniaukbusinessforum from './components/evocabank-as-the-general-partner-of-armenia-uk-business-forum'
import Evocabankasthefinancialpartneroftrf2026 from './components/evocabank-as-the-financial-partner-of-trf-2026'
import Evocabankasalegacypartnerofaua35thanniversaryevent from './components/evocabank-as-a-legacy-partner-of-aua-35th-anniversary-event'
import Usd10millionsubordinateddeftfinancingfromfinanceinmotiontoevocabank from './components/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank'
import Firebirdai from './components/firebird-ai'
import Evocabankintroducedthearcaunionpaycobadgedcard from './components/evocabank-introduced-the-arca-unionpay-co-badged-card'
import Evocabankparticipatesinautoshow2026 from './components/evocabank-participates-in-autoshow-2026'
import Paywithevocacardsatrienaportergetcashback from './components/pay-with-evoca-cards-at-rien-a-porter-get-cashback'
import Bestbankinarmenia2026byinternationalinvestormagazine from './components/best-bank-in-armenia-2026-by-international-investor-magazine'
import Themostinnovativedigitalbank2026byglobalbusinessandfinancemagazine from './components/the-most-innovative-digital-bank-2026-by-global-business-and-finance-magazine'
import EvocabankaiinterviewbanksamKarenYeghiazaryan from './components/evocabank-ai-interview-banks-am-Karen-Yeghiazaryan'
import Theexecutiveshavecompletedmitcourse from './components/the-executives-have-completed-mit-course'
import Evocabankisthemainsponsorofthepreparun from './components/evocabank-is-the-main-sponsor-of-the-prepa-run'
import Evocabankisthemainpartnerofthenewmagsummerfast2026 from './components/evocabank-is-the-main-partner-of-the-newmag-summerfast-2026'
import Evocanorakaruycsigning from './components/digital-card'
import Amxawards from './components/amx-awards'
import Memorandumofcooperationstreetartsbyevoca from './components/memorandum-of-cooperation-street-arts-by-evoca'
import Clarificationaboutevocabankonhetqam from './components/clarification-about-evocabank-on-hetq-am'
import Vazgengevorkyanawardedananiashirakatsimedal from './components/vazgen-gevorkyan-awarded-anania-shirakatsi-medal'
import Gyumribranchnowoperatingatanewaddress from './components/gyumri-branch-now-operating-at-a-new-address'
import Newawardbestsmebankbydigitalbanker2026 from './components/new-award-best-sme-bank-by-digital-banker-2026'
import Evocabankandproparcohavesignedacreditagreement from './components/evocabank-and-proparco-have-signed-a-credit-agreement'
import Newofferpaywithevocamastercardonglovogetamd10000 from './components/new-offer-pay-with-evoca-mastercard-on-glovo-get-amd-10000'
import Evocabankparticipatesincareercityfest2026 from './components/evocabank-participates-in-career-city-fest-2026'
import KarenYeghiazaryanparticipatesintheSpringMeetings2026 from './components/Karen-Yeghiazaryan-participates-in-the-Spring-Meetings-2026'
import Allpage1 from './components/allpage1'
import Allpage2 from './components/allpage2'
import Allpage3 from './components/allpage3'
import Allpage4 from './components/allpage4'
import Allpage5 from './components/allpage5'
import Allpage6 from './components/allpage6'
import Allpage7 from './components/allpage7'
import Allpage8 from './components/allpage8'
import Allpage9 from './components/allpage9'
import Allpage10 from './components/allpage10'
import Allpage11 from './components/allpage11'
import Allpage12 from './components/allpage12'
import Allpage13 from './components/allpage13'
import Allpage14 from './components/allpage14'
import Cards from './components/cards'
import Premium from './components/premium'
import Gift from './components/gift'
import Digital from './components/digital'
import Arca from './components/arca'
import Visa from './components/visa'
import Mastercard from './components/mastercard'
import Unionpay from './components/unionpay'
import Deposits from './components/deposits'
import Accounts from './components/accounts'
import Transfers from './components/transfers'
import Securities from './components/securities'
import Evocatouch from './components/evocatouch'
import About from './components/about'
import Digitalevocatouchbanking from './components/digital-evocatouch-banking'
import General from './components/general'
import Banking from './components/banking'
import Evocadigitalcard from './components/evoca-digital-card'
import Fastbusinessloan from './components/fast-business-loan'
import Loansforimportingtextilerawmaterials from './components/loans-for-importing-textile-raw-materials'
import Businessloanrefinancing from './components/Business-loan-refinancing'
import Loansecuredbybonds from './components/Loan-secured-by-bonds'
import Businessloan from './components/business-loan'
import Evocagoloan from './components/evoca-go-loan'
import Loansprovidedwithintheframeworkofgafenergyefficiencyforsme from './components/loans-provided-within-the-framework-of-gaf-energy-efficiency-for-sme'
import Loansprovidedwithintheframewokofrenewableenergyandenergysavingprogram from './components/loans-provided-within-the-framewok-of-renewable-energy-and-energy-saving-program'
import Simplebusinessloan from './components/simple-business-loan'
import Accountlending from './components/account-lending'
import Renewablecreditline from './components/renewable-credit-line'
// Գլխավոր էջի բաղադրիչը
function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow w-full">
        <section className="w-full">
          <Glxavor />
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Բարի գալուստ Evoca Online
            </h1>
            <p className="text-gray-600">
              Այստեղ կարող եք կառավարել ձեր վարկերը, քարտերը և կատարել ակնթարթային վճարումներ։
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Ժամանակավոր էջ մանրամասների համար
function CardDetailView() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16 text-center flex-grow">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Քարտի մանրամասներ</h1>
        <p className="text-gray-600 mb-8">Այս էջը գտնվում է մշակման փուլում:</p>
        <a href="/" className="bg-[#5b21b6] text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-800 transition-colors">
          Վերադառնալ գլխավոր էջ
        </a>
      </div>
      <Footer />
    </div>
  );
}

// Հիմնական App բաղադրիչը
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/travel-card" element={<TravelCard />} />
      <Route path="/all-news" element={<Allnews />} />
      <Route path="/dilijan-we-are-coming" element={<Dilijanwearecoming />} />
      <Route path="/news/evocabank-retro-fest-partner" element={<Evocabankretrofestpartner />} />
      <Route path="/evocabank-is-the-official-sponsor-of-the-fiba-eurobasket" element={<Evocabankistheofficialsponsorofthefibaeurobasket />} />
      <Route path="/salary" element={<Salary />} />
      <Route path="/evocabank-is-the-main-sponsor-of-the-preparun" element={<Evocabankisthemainsponsorofthepreparun />} />
      <Route path="/news/back-to-school-cashback" element={<Backtoschoolcashback />} />
      <Route path="/news/wilco-card" element={<WilcoCard />} />
      <Route path="/news/adidas-discount" element={<Adidasdiscount />} />
      <Route path="/news/globbing-advantages" element={<Globbingadvantages />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news/block-transactions" element={<Blocktransactions />} />
      <Route path="/news/green-rock-headquarters" element={<Greenrockheadquarters />} />
      <Route path="/news/moodys-rating" element={<Moodysrating />} />
      <Route path="/visa-vision" element={<Visavision />} />
      <Route path="/firebird-ai" element={<Firebirdai />} />
      <Route path="/hy/special-offer" element={<Specialoffer />} />
      
      {/* Քարտերի ուղիներ */}
      <Route path="/cards/arca-union-pay" element={<Arcaunionpay />} />
      <Route path="/cards/visa-infinite" element={<Visainfinite />} />
      <Route path="/cards/mastercard-world-digital" element={<Mastercardworlddigital />} />
      <Route path="/cards/visa-classic" element={<Visaclassic />} />
      <Route path="/cards/mastercard-standard" element={<Mastercardstandard />} />
      <Route path="/cards/visa-gold" element={<Visagold />} />
      <Route path="/cards/mastercard-gold" element={<Mastercardgold />} />
      <Route path="/cards/arca-classic" element={<Arcaclassic />} />
      <Route path="/cards/wilco-visa-infinite" element={<Wilcovisainfinite />} />
      <Route path="/cards/visa-platinum-card" element={<VisaPlatinumCard />} /> 
      <Route path="/cards/visa-digital-card" element={<VisaDigitalCard />} />
      <Route path="/cards/unionpay-gold" element={<UnionPayGold />} />
      <Route path="/cards/unionpay-platinum" element={<UnionPayPlatinum />} />
      <Route path="/cards/visa-business-card" element={<VisaBusinessCard />} />
      
      <Route path="/hy/loans" element={<Loans />} />
      <Route path="/loans/credit-history" element={<Credithistory />} />
      <Route path="/loans/important-info" element={<Importantinfo />} />
      <Route path="/loans/unsecured-consumer" element={<UnsecuredConsumer />} />
      <Route path="/hy/credit-history-and-score" element={<Credithistoryandscore />} />
      <Route path="/hy/loans/car-loans/car-loans" element={<CarLoans />} /> 
      <Route path="/consumer-loans/property-secured-loan" element={<PropertySecuredLoan />} />
      <Route path="/hy/loans/installment/evocapower-loan" element={<EvocapowerLoan />} />
      <Route path="/hy/loans/consumer-loans/gold-secured-pawn-loans" element={<GoldSecuredPawnLoans />} />
      <Route path="/installment/point-of-sale-loans" element={<PointOfSaleLoans />} />
      <Route path="/unsecured-consumer-loans/salary-overdrafts" element={<SalaryOverdrafts />} />
      <Route path="/mortgage-loans/residential-mortgage-loans" element={<ResidentialMortgageLoans />} />
      <Route path="/online-loans/action-loan" element={<ActionLoan />} />
      <Route path="/mortgage-loans/for-displaced-families-of-nagorno-karabakh" element={<ForDisplacedFamilies />} />
      <Route path="/mortgage-loans/land-acquisition-loan" element={<LandAcquisitionLoan />} />
      <Route path="/mortgage-loans/micro-renovation-loan-with-bank-resources" element={<MicroRenovationLoanWithBankResources />} />
      <Route path="/car-loans/leasing-of-vehicles-for-individuals" element={<LeasingOfVehiclesForIndividuals />} />
      <Route path="/online-loans/online-overdraft" element={<OnlineOverdraft />} />
      <Route path="/consumer-loans/individual-investment-loan" element={<IndividualInvestmentLoan />} />
      <Route path="/unsecured-consumer-loans/parking-space-purchase-loan" element={<ParkingSpacePurchaseLoan />} />
      <Route path="/installment/bicycle-purchase-loan" element={<BicyclePurchaseLoan />} />
      <Route path="/mortgage-loans/housing-mortgages-for-non-resident-individuals" element={<HousingMortgagesForNonResidentIndividuals />} />
      <Route path="/installment/evocahome" element={<Evocahome />} />
      <Route path="/consumer-loans/deposit-secured-credit-line-retail" element={<Depositsecuredcreditlineretail/>} />
      <Route path="/mortgage-loans/commercial-mortgage-loans" element={<Commercialmortgageloans />} />
      <Route path="/mortgage-loans/mortgage-loans-under-the-national-mortgage-company-loan-program" element={<Mortgageloansunderthenationalmortgagecompanyloanprogram />} />
      <Route path="/mortgage-loans/construction-loan-national-mortgage-company" element={<Constructionloannationalmortgagecompany />} />
      <Route path="/mortgage-loans/renovation-loans-under-national-mortgage-company" element={<Renovationloansundernationalmortgagecompany />} />
      <Route path="/mortgage-loans/mortgage-loans-under-affordable-housing-for-young-families-program" element={<Mortgageloansunderaffordablehousingforyoungfamiliesprogram />} />
      <Route path="/unsecured-consumer-loans/credit-line-with-visa-infinite-card" element={<Creditlinewithvisainfinitecard />} />
      <Route path="/mortgage-loans/housing-affordability-for-displaced-families-of-the-republic-of-artsakh" element={<Housingaffordabilityfordisplacedfamiliesoftherepublicofartsakh />} />
      <Route path="/mortgage-loans/mortgage-repairing-loan-for-displaced-families-of-artsakh" element={<Mortgagerepairingloanfordisplacedfamiliesofartsakh />} />
      <Route path="/unsecured-consumer-loans/student-loans" element={<Studentloans />} />
      <Route path="/mortgage-loans/mortgage-loan-for-building-a-residential-house-in-border-settlements-of-armenia" element={<Mortgageloanforbuildingaresidentialhouseinbordersettlementsofarmenia />} />
      <Route path="/unsecured-consumer-loans/evolution" element={<Evolution/>} />
      <Route path="/mortgage-loans/mortgages-for-service-members" element={<Mortgagesforservicemembers/>} />
      <Route path="/loans/collateral-consumer" element={<Collateralconsumer/>} />
      <Route path="/hy/loans/unsecured-consumer-loans" element={<Unsecuredconsumerloans/>} />
      <Route path="/loans/mortgage" element={<Mortgage/>} />
      <Route path="/loans/auto" element={<Auto/>} />
      <Route path="/loans/express" element={<Express/>} />
      <Route path="/loans/online" element={<Online/>} />
      <Route path="/hy/business" element={<Business/>} />
      <Route path="/hy/leasing-evoca" element={<Leasingevoca/>} />
      <Route path="/hy/business-account-opening-and-services" element={<Businessaccountopeningandservices/>} />
      <Route path="/hy/business-unallocated-metal-accounts" element={<Businessunallocatedmetalaccounts/>} />
      <Route path="/hy/business-classical-deposit" element={<Businessclassicaldeposit/>} />
      <Route path="/hy/business-investment-services" element={<Businessinvestmentservices/>} />
      <Route path="/hy/business-bonds" element={<Businessbonds/>} />
      <Route path="/hy/business-repo-services" element={<Businessreposervices/>} />
      <Route path="/hy/business-repo-reverse" element={<Businessreporeverse/>} />
      <Route path="/hy/business-evocainvest" element={<Businessevocainvest/>} />
      <Route path="/hy/guarantee" element={<Guarantee/>} />
      <Route path="/hy/factoring-finance" element={<Factoringfinance/>} />
      <Route path="/hy/letter-of-credit" element={<Letterofcredit/>} />
      <Route path="/hy/documentary-collection" element={<Documentarycollection/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/life-style/evocabank_as_the_partner_of_fincomm_2026" element={<Evocabankasthepartneroffincomm2026/>} />
      <Route path="/life-style/evocabank-as-the-general-partner-of-armenia-uk-business-forum" element={<Evocabankasthegeneralpartnerofarmeniaukbusinessforum/>} />
      <Route path="/life-style/evocabank-as-the-financial-partner-of-trf-2026" element={<Evocabankasthefinancialpartneroftrf2026/>} />
      <Route path="/life-style/evocabank-as-a-legacy-partner-of-aua-35th-anniversary-event" element={<Evocabankasalegacypartnerofaua35thanniversaryevent/>} />
      <Route path="/banking/usd-10-million-subordinated-deft-financing-from-finance-in-motion-to-evocabank" element={<Usd10millionsubordinateddeftfinancingfromfinanceinmotiontoevocabank/>} />
      <Route path="/news/firebird-ai" element={<Firebirdai/>} />
      <Route path="/products/evocabank-introduced-the-arca-unionpay-co-badged-card" element={<Evocabankintroducedthearcaunionpaycobadgedcard/>} />
      <Route path="/products/evocabank-participates-in-autoshow-2026" element={<Evocabankparticipatesinautoshow2026/>} />
      <Route path="/products/pay-with-evoca-cards-at-rien-a-porter-get-cashback" element={<Paywithevocacardsatrienaportergetcashback/>} />
      <Route path="/prizes/best-bank-in-armenia-2026-by-international-investor-magazine" element={<Bestbankinarmenia2026byinternationalinvestormagazine/>} />
      <Route path="/prizes/the-most-innovative-digital-bank-2026-by-global-business-and-finance-magazine" element={<Themostinnovativedigitalbank2026byglobalbusinessandfinancemagazine/>} />
      <Route path="/interviews/evocabank-ai-interview-banks-am-Karen-Yeghiazaryan" element={<EvocabankaiinterviewbanksamKarenYeghiazaryan/>} />
      <Route path="/banking/the-executives-have-completed-mit-course" element={<Theexecutiveshavecompletedmitcourse/>} />
      <Route path="/evocabank-is-the-main-sponsor-of-the-prepa-run" element={<Evocabankisthemainsponsorofthepreparun/>} />
      <Route path="/life-style/evocabank-is-the-main-partner-of-the-newmag-summerfast-2026" element={<Evocabankisthemainpartnerofthenewmagsummerfast2026/>} />
      <Route path="/main/evoca-norakaruyc-signing" element={<Evocanorakaruycsigning/>} />
      <Route path="/news/amx-awards" element={<Amxawards/>} />
      <Route path="/life-style/memorandum-of-cooperation-street-arts-by-evoca" element={<Memorandumofcooperationstreetartsbyevoca/>} />
      <Route path="/banking/clarification-about-evocabank-on-hetq-am" element={<Clarificationaboutevocabankonhetqam/>} />
      <Route path="/banking/vazgen-gevorkyan-awarded-anania-shirakatsi-medal" element={<Vazgengevorkyanawardedananiashirakatsimedal/>} />
      <Route path="/banking/gyumri-branch-now-operating-at-a-new-address" element={<Gyumribranchnowoperatingatanewaddress/>} />
      <Route path="/prizes/new-award-best-sme-bank-by-digital-banker-2026" element={<Newawardbestsmebankbydigitalbanker2026/>} />
      <Route path="/banking/evocabank-and-proparco-have-signed-a-credit-agreement" element={<Evocabankandproparcohavesignedacreditagreement/>} />
      <Route path="/products/new-offer-pay-with-evoca-mastercard-on-glovo-get-amd-10000" element={<Newofferpaywithevocamastercardonglovogetamd10000/>} />
      <Route path="/life-style/evocabank-participates-in-career-city-fest-2026" element={<Evocabankparticipatesincareercityfest2026/>} />
      <Route path="/banking/Karen-Yeghiazaryan-participates-in-the-Spring-Meetings-2026" element={<KarenYeghiazaryanparticipatesintheSpringMeetings2026/>} />
      <Route path="/news/allpage1" element={<Allpage1 />} />
      <Route path="/news/allpage2" element={<Allpage2/>} />
      <Route path="/news/allpage3" element={<Allpage3/>} />
      <Route path="/news/allpage4" element={<Allpage4/>} />
      <Route path="/news/allpage5" element={<Allpage5/>} />
      <Route path="/news/allpage6" element={<Allpage6/>} />
      <Route path="/news/allpage7" element={<Allpage7/>} />
      <Route path="/news/allpage8" element={<Allpage8/>} />
      <Route path="/news/allpage9" element={<Allpage9/>} />
      <Route path="/news/allpage10" element={<Allpage10/>} />
      <Route path="/news/allpage11" element={<Allpage11/>} />
      <Route path="/news/allpage12" element={<Allpage12/>} />
      <Route path="/news/allpage13" element={<Allpage13/>} />
      <Route path="/news/allpage14" element={<Allpage14/>} />
      <Route path="/cards" element={<Cards/>} />
      <Route path="/cards/premium" element={<Premium/>} />
      <Route path="/cards/gift" element={<Gift/>} />
      <Route path="/cards/digital" element={<Digital/>} />
      <Route path="/cards/arca" element={<Arca/>} />
      <Route path="/cards/visa" element={<Visa/>} />
      <Route path="/cards/mastercard" element={<Mastercard/>} />
      <Route path="/cards/unionpay" element={<Unionpay/>} />
      <Route path="/deposits" element={<Deposits/>} />
      <Route path="/accounts" element={<Accounts/>} />
      <Route path="/transfers" element={<Transfers/>} />
      <Route path="/securities" element={<Securities/>} />
      <Route path="/evocatouch" element={<Evocatouch/>} />
      <Route path="/hy/about" element={<About/>} />
      <Route path="/hy/digital-evocatouch-banking/" element={<Digitalevocatouchbanking/>} />
      <Route path="/news/general" element={<General/>} />
      <Route path="/news/banking" element={<Banking/>} />
      <Route path="/products/evoca-digital-card" element={<Evocadigitalcard/>} />
      <Route path="/business-loans/fast-business-loan" element={<Fastbusinessloan/>} />
      <Route path="/business-loans/loans-for-importing-textile-raw-materials" element={<Loansforimportingtextilerawmaterials/>} />
      <Route path="/business-loans/Business-loan-refinancing" element={<Businessloanrefinancing/>} />
      <Route path="/business-loans/Loan-secured-by-bonds" element={<Loansecuredbybonds/>} />
      <Route path="/business-loans/business-loan" element={<Businessloan/>} />
      <Route path="/business-loans/evoca-go-loan" element={<Evocagoloan/>} />
      <Route path="/business-loans/loans-provided-within-the-framework-of-gaf-energy-efficiency-for-sme" element={<Loansprovidedwithintheframeworkofgafenergyefficiencyforsme/>} />
      <Route path="/business-loans/loans-provided-within-the-framewok-of-renewable-energy-and-energy-saving-program" element={<Loansprovidedwithintheframewokofrenewableenergyandenergysavingprogram/>} />
      <Route path="/business-loans/simple-business-loan" element={<Simplebusinessloan/>} />
      <Route path="/business-loans/account-lending" element={<Accountlending/>} />
      <Route path="/business-loans/renewable-credit-line" element={<Renewablecreditline/>} />


      {/* Ուղղված ենթաուղիներ */}
      <Route path="/cards/gift-card" element={<Giftcard />} />
      <Route path="/cards/myler-gift-card" element={<Mylergiftcard />} />
      <Route path="/cards/4u-gift" element={<UGiftcard />} />
      <Route path="/cards/rio-gift-card-tariffs" element={<RioGiftCardTariffs />} />
      <Route path="/cards/dalma-gift-card" element={<DalmaGiftCard />} />


      {/* Ժամանակավոր / մշակման փուլում գտնվող էջեր */}
      <Route path="/visa-infinite" element={<CardDetailView />} />
      <Route path="/mortgage" element={<CardDetailView />} />
      <Route path="/union-pay" element={<CardDetailView />} />
      <Route path="/deposit" element={<CardDetailView />} />
      <Route path="/gift-card" element={<CardDetailView />} />
    </Routes>
  );
}




// <button onClick={() => handleNavigation('/online-apps/sme-lending')} className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-2xl shadow-md transition-all cursor-pointer border-none text-center block">
//                 Դիմել առցանց
//               </button>



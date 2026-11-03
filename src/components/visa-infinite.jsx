import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

    export default function VisaInfinite() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('about');
    const [activeCurrency, setActiveCurrency] = useState('AMD');
        

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />

        {/* Վերնագրի հատվածը */}
        <div className="bg-gray-100 text-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl mb-8 md:mb-0">
                <button 
                onClick={() => navigate(-1)}
                className="inline-flex items-center text-sm bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full mb-6 transition-colors shadow-sm"
                >
                ← Վերադառնալ
                </button>
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">Visa Infinite</h1>
                <p className="text-lg text-gray-600">
                Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է:
                </p>
            </div>
            <div className="w-72 md:w-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                {/* Այստեղ տեղադրեք քարտի նկարի Ձեր լինկը */}
                <img 
                src="https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png" 
                alt="Visa Infinite Card" 
                className="w-full drop-shadow-2xl rounded-2xl"
                />
            </div>
            </div>
        </div>

        {/* Հիմնական բովանդակություն և ներդիրներ (Tabs) */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Ներդիրների կոճակներ */}
            <div className="flex border-b border-gray-200 mb-8 space-x-8 overflow-x-auto">
            <button
                onClick={() => setActiveTab('about')}
                className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'about'
                    ? 'border-purple-600 text-purple-700'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
            >
                Քարտի մասին
            </button>
            <button
                onClick={() => setActiveTab('conditions')}
                className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'conditions'
                    ? 'border-purple-600 text-purple-700'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
            >
                Սահմանաչափի տրամադրման պայմանները
            </button>
            <button
                onClick={() => setActiveTab('warning')}
                className={`pb-4 font-semibold text-base whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'warning'
                    ? 'border-purple-600 text-purple-700'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
            >
                Զգուշացում
            </button>
            </div>

            {/* 1. Քարտի մասին բովանդակություն */}
            {activeTab === 'about' && (
            <div className="space-y-12">
                {/* Վերին հատված. նկարագրություն և սակագներ */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                    <p>
                    <strong>Visa Infinite</strong> քարտը տալիս է բազմաթիվ արտոնություններ ոչ միայն Հայաստանում, այլև ամբողջ աշխարհում, ներառյալ՝ քարտատիրոջ և նրա ընտանիքի անդամների ճամփորդական ապահովագրություն, գնումների ապահովագրություն, կոնսիերժ ծառայություն (<span className="text-purple-600 font-medium">Telegram, Viber</span>), անվճար մուտք ավելի քան 1,200 օդանավակայանի բիզնես սպասասրահներ աշխարհի 450-ից ավելի քաղաքներում, Speed Pass ծառայություն, ավելի քան 900 լյուքս դասի շքեղ հյուրանոցներում VIP հյուրի կարգավիճակ և բազմաթիվ այլ արտոնություններ:
                    </p>
                    <p>
                    Մեր <strong>Visa Infinite</strong> գործընկերները կարող են ստանալ հատուկ արտոնյալ պայմաններով վարկային սահմանաչափ: Սահմանաչափի համար կարելի է դիմել <span className="text-purple-600 font-bold">EvocaTOUCH</span> հավելվածի միջոցով, շաբաթվա բոլոր օրերին և ցանկացած ժամի՝ առանց հավելյալ թղթաբանության ու ժամանակ կորցնելու կամ այցելելԲանկի գլխավոր գրասենյակ կամ ցանկացած մասնաճյուղ:
                    </p>
                </div>

                {/* Աջ կողմի սակագնային բլոկը */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-center space-x-2 mb-6 bg-purple-900 p-2 rounded-xl">
                    {['AMD', 'USD', 'EUR', 'RUB'].map((curr) => {
                        const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };
                        return (
                        <button
                            key={curr}
                            onClick={() => setActiveCurrency(curr)}
                            className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-all ${
                            activeCurrency === curr ? 'bg-white text-purple-900 shadow-md' : 'text-white hover:bg-purple-800'
                            }`}
                        >
                            {symbols[curr]}
                        </button>
                        );
                    })}
                    </div>

                    <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-2xl font-bold text-purple-700">1%</span>
                        <span className="text-sm text-gray-600 text-right">Կանխիկացում բանկի կանխիկացման կետերում</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-2xl font-bold text-purple-700">1.2%</span>
                        <span className="text-sm text-gray-600 text-right">Կանխիկացում ԱրՓա անդամ բանկերի կետերում</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-sm font-semibold text-purple-700">min 2,500 ֏<br/><span className="text-2xl font-bold">1.5%</span></span>
                        <span className="text-sm text-gray-600 text-right">Կանխիկացում ԱրՓա անդամ չհանդիսացող բանկերում</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-xl font-bold text-purple-700">100,000 ֏</span>
                        <span className="text-sm text-gray-600 text-right">Տարեկան սպասարկում</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                        <span className="text-xl font-bold text-purple-700">300,000 ֏</span>
                        <span className="text-sm text-gray-600 text-right">Տարեկան սպասարկում օտարերկրյա քաղաքացիների համար</span>
                    </div>
                    </div>
                </div>
                </div>

                {/* Առավելությունների բաժին */}
                <div className="mt-16 space-y-12">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-4">Քարտի առավելությունները</h2>

                {/* 1. Visa Airport Companion */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="	https://www.evoca.am/images-cache/cards/1/16123452035243/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />                </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Visa Airport Companion - Անվճար</h3>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Visa Airport Companion</strong> հավելվածում գրանցվելով՝ Դուք ոչ միայն ստանում եք թվային անդամակցություն, այլև հնարավորություն՝ ծանոթանալու բիզնես սրահներին, ստուգելու Ձեզ հասանելի տարեկան մուտքերի քանակը և այլ առավելություններ:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Դուք գտաք օդանավակայաններում հարմարավետության Ձեր բանալին: Պարզություն՝ սկզբից մինչև վերջ. ընդամենը հարկավոր է ներբեռնել Visa Airport Companion հավելվածը, գրանցել Ձեր վավեր Evoca Visa Infinite պրեմիում քարտը և ստանալ Ձեր թվային բաժանորդագրության անցագիրը:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Չմոռանանք, որ կարող եք օգտագործել նաև <strong>Visa Concierge Chatbot</strong>-ը՝ Ձեր թվային բաժանորդագրությունը ստանալու համար:
                    </p>
                    <p className="text-gray-700 text-sm">
                        Իսկ թե ինչպես գրանցվել Visa Airport Companion հավելվածում և մուտք գործել բիզնես սրահներ, ծանոթացեք <a href="#" className="text-purple-600 font-medium underline">այստեղ</a>:
                    </p>
                    </div>
                </div>

                {/* 2. Մուտք DragonPass բիզնես սրահներ */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/17561928638218/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Մուտք DragonPass բիզնես սրահներ</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Ամբողջ աշխարհում ավելի քան 1,200 օդանավակայանի բիզնես սպասասրահներ սպասում են Ձեզ: Էսկլյուզիվ սպասարկում, նորաճաշակ միջավայր, հատուկ առավելություններ միայն Evoca Visa Infinite գործընկերների համար:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Դուք կարող եք օգտվել օդանավակայանների բիզնես սպասասրահների 20 անվճար մուտքի հնարավորությունից, եթե նախորդ 35 օրվա ընթացքում Ձեր Evoca Visa Infinite քարտով կատարել եք առնվազն 400 ԱՄՆ դոլարի կամ համարժեք արտարժույթի անկանխիկ վճարումներ: Իսկ եթե ոչ, կակտիվանա տարեկան 3 անվճար մուտքի հնարավորությունը:
                    </p>
                    </div>
                </div>
            {/* 3. Բժշկական միջազգային ապահովագրություն */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/16121914750055/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Բժշկական միջազգային ապահովագրություն</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Բոլոր անկանխատեսելի իրավիճակներում Դուք միշտ ապահով եք ու պաշտպանված, քանի որ մեկ զանգով մենք կտրամադրենք Ձեզ անհրաժեշտ բժշկական և իրավաբանական խորհրդատվություն, տեղեկատվություն բժշկական կենտրոնների մասին, կապ կհաստատենք լավագույն բժիշկների հետ, կկատարենք բուժման համար բոլոր քայլերը, իսկ անհրաժեշտության դեպքում՝ կապահովենք Ձեր և Ձեր ընտանիքի հարմարավետ ու արագ տեղափոխումը տուն՝ վճարելով առաջացած ծախսերը:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Որպես <strong>Visa Infinite</strong> քարտի արտոնյալ Գործընկեր՝ Դուք ունեք բժշկական ապահովագրության <span className="text-purple-700 font-bold">2,500,000 ԱՄՆ դոլարի</span> ծածկույթ: Բժշկական ապահովագրությունը տրամադրվում է անվճար՝ տարեկան 90 օր, ամբողջ ընտանիքի համար և գործում է աշխարհի ցանկացած կետում:
                    </p>
                    <p className="text-gray-700 text-sm">
                        Ապահովագրությունը տրամադրվում է միջազգային առաջատար <strong>CHUBB</strong> ապահովագրական ընկերության կողմից: Ապահովագրության մանրամասներին կարող եք ծանոթանալ <a href="#" className="text-purple-600 font-medium underline">հետևյալ հղումով</a>:
                    </p>
                    </div>
                </div>
                

                {/* 4. Ճամփորդական ապահովագրություն */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/16121914750013/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Ճամփորդական ապահովագրություն</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Չեղարկվե՞լ կամ փոխվել՞ են ճանապարհորդության սկզբնական պլանները, հետաձգվել՞ է թռիչքը, կորել՞ է ուղեբեռը կամ կանխիկ դրամական միջոցները, մենք կփոխհատուցենք առաջացած ծախսերը:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Վայելեք կյանքի ամեն րոպեն, ստացեք ադրենալինի Ձեր չափաբաժինը էքստրեմալ սպորտից: Մենք ապահովագրել ենք շուրջ 58 սպորտաձևի արդյունքում վնասվածքներ ստանալու դեպքերը: Իսկ եթե ճամփորդության ընթացքում վարձակալել եք մեքենա, կարող եք հանգիստ լինել դրա խափանման դեպքերի համար:
                    </p>
                    <p className="text-purple-700 font-semibold text-sm">
                        Visa Infinite գործընկերների համար ճամփորդական ապահովագրությունը տարեկան 90 օր տրամադրվում է անվճար:
                    </p>
                    </div>
                </div>

                {/* 5. Visa Concierge Chatbot */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/16123452035284/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Visa Concierge Chatbot</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Աշխարհի ցանկացած կետում, օրվա ցանկացած ժամին Ձեր անձնական օգնականը պատրաստ է Ձեզ տեղեկություն տրամադրել ավելի քան 6,000 ծառայությունների մասին և ամրագրել դրանք Ձեզ համար բացարձակապես անվճար:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Visa Concierge Chatbot</strong>-ը թույլ է տալիս Visa պրեմիում քարտապաններին մեկ տեղից իմանալ ամեն ինչ Ձեր <strong>Visa Infinite</strong> քարտի առավելությունների մասին:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Մենք Ձեզ համար կգնենք ինքնաթիռի ու թատրոնի տոմսերը, ընթրիքի համար սեղան կամրագրենք լավագույն ռեստորաններում, կգտնենք լավագույն գոլֆի դաշտը կամ արվեստի յուրօրինակ գործը:
                    </p>
                    <p className="text-purple-700 font-semibold text-sm">Visa Infinite գործընկերների համար կոնսիերժ ծառայությունն անվճար է:</p>
                    <div className="flex gap-4 pt-2">
                        <span className="px-4 py-2 bg-purple-50 text-purple-700 font-medium rounded-xl text-sm">Telegram</span>
                        <span className="px-4 py-2 bg-purple-50 text-purple-700 font-medium rounded-xl text-sm">Viber</span>
                    </div>
                    </div>
                </div>

                
                {/* 8. Անվտանգ գնումներ */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/16121916004099/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Անվտանգ գնումներ</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Ձեր գնումները պաշտպանված են: Մենք կհոգանք Ձեր իրերի ապահովության համար:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Գնումների անվտանգության ծրագիրը Ձեր իրերի ապահովությունն է հնարավոր կորուստի, գողության կամ չկանխամտածված վնասի դեպքում՝ գնումից <span className="text-purple-700 font-bold">90 օրվա</span> ընթացքում:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                        <p className="font-semibold text-gray-800 text-sm">Վնասված կամ կորցրած գնումների դիմաց փոխհատուցում ստանալու համար.</p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Վճարումը պետք է 100%-ով կատարված լինի Visa Infinite քարտով (ոչ ապառիկ կամ ապառիկ), իսկ ապրանքի նվազագույն արժեքը պետք է լինի առնվազն 100 ԱՄՆ դոլար:</li>
                        <li>Պարտադիր է ներկայացնել գնման անդորրագիրը, հաշվից ելքագրումը, երաշխավորման կտրոնը, խանութի կողմից երաշխիքային սպասարկումից հրաժարումը և վերանորոգման վճարման դեպքում անդորրագրերը:</li>
                        <li>Գողության դեպքում պարտադիր է ներկայացնել ոստիկանական ընթացակարգ:</li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* 7. Fast Track */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/16123452035204/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Fast Track</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Վայելեք Ձեր ճամփորդությունը՝ խուսափելով օդանավակայաններում հերթերից։
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Visa Infinite քարտապանները կարող են արագ և հարմարավետ անցնել անվտանգության, միգրացիոն և մաքսային ստուգումները ավելի քան 100 միջազգային օդանավակայանում, այդ թվում՝ Զվարթնոցում։
                    </p>
                    <p className="text-purple-700 font-semibold text-sm">
                    Ինչպե՞ս օգտվել ծառայությունից.
                    </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Chatbot-ի միջոցով գեներացնել QR-ծածկագիր մեկնելուց ոչ ուշ, քան 24 ժամ առաջ։</li>
                        <li>Սքանավորել QR-ծածկագիրը՝ Fast Track անցակետերը հասանելի դարձնելու համար։</li>
                        </ul>
                    </div>
                </div>
                    {/* 7. Անվճար կայանատեղի Զվարթնոց օդանավակայանում*/}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/17561933972248/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Անվճար կայանատեղի Զվարթնոց օդանավակայանում</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Evocabank-ի Visa Infinite քարտապանները կարող են անվճար կայանել մեքենան «Զվարթնոց» օդանավակայանում տարեկան 3 անգամ Visa Concierge Chatbot-ի միջոցով՝ օգտվելով առկա փաթեթներից`
                    </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>1 ժամ տևողությամբ վաուչեր</li>
                        <li>2 ժամ տևողությամբ վաուչեր</li>
                        </ul>
                    </div>
                </div>
        {/* 7.Ուղեբեռի անվճար փաթեթավորում */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/17561931057039/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Ուղեբեռի անվճար փաթեթավորում</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Որպես Evocabank–ի պրեմիում քարտապան` Դուք կարող եք նաև օգտվել ուղեբեռի անվճար փաթեթավորման հնարավորությունից։
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Ինչպե՞ս օգտվել ծառայությունից․
                    </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Ցույց տվեք Ձեր Visa Infinite քարտը Զվարթնոց օդանավակայանի ուղեբեռի սպասարկման տարածքում:</li>
                        <li>Տեղեկացրեք անձնակազմին, որ ցանկանում եք օգտվել Visa-ի կողմից տրամադրվող անվճար փաթեթավորման ծառայությունից:</li>
                        </ul>
                    </div>
                    </div> 
            </div>
        {/* 7.Ինտերնետ ռոումինգ*/}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="	https://www.evoca.am/images-cache/cards/1/17561931057059/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Ինտերնետ ռոումինգ</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Որպես Visa Infinite քարտապան՝ Դուք ունեք՝ </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>3GB անվճար ռոումինգ AIR ALO-ից</li>
                        <li>UCOM-ից 500MB</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                    Ակտիվացման համար անհրաժեշտ է`
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Գրանցվել կամ գրանցված լինել Visa Concierge Chatbot-ում:</li>
                        <li>Chatbot-ում ընտրել «Ռոումինգ» բաժինը:</li>
                        <li>Ծանոթանալ կանոններին և ստուգել քարտի համապատասխանությունը ծառայությունից օգտվելու համար:</li>
                            <li>Հետևել Chatbot-ի հրահանգներին՝ ակտիվացման QR-կոդ ստանալու համար:</li>
                        </ul>
                    </div>
                </div>
                    
                {/* 7. Արտոնությունների աշխարհ */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="	https://www.evoca.am/images-cache/cards/1/16121914749964/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Արտոնությունների աշխարհ</h3>
                    <p className="text-gray-700 leading-relaxed">
    Visa Infinte-ը Ձեր բանալին է դեպի արտոնությունների մեծ աշխարհ:

                    </p>
                    <p className="text-gray-700 leading-relaxed">
    Ավելի քան 600 գործընկեր աշխարհի տարբեր կետերում…

    Վայելեք շրջապատի ամեն մի մանրուքը՝ ճամփորդելով մեքենայով, իսկ մեքենան վարձակալեք մինչև 35% զեղչով:                  </p>
                    <p className="text-purple-700 font-semibold text-sm">
    Իսկ աշխարհի ավելի քան 985,000 հյուրանոցներ հատուկ Ձեզ համար կտրամադրվեն մինչև 12% զեղչով:
    Visa-ն միայն Ձեզ համար առանձնացրել է 900 լյուքս դասի շքեղ հյուրանոց, որտեղ Դուք կստանաք՝                  </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Տվյալ պահին երաշխավորված ամենացածր գին</li>
                        <li>VIP հյուրի կարգավիճակ։</li>
                        <li>Սենյակի դասի ավտոմատ բարձրացում ժամանման պահին</li>
                        <li>Կոնտինենտալ նախաճաշ</li>
                        <li>Անհրաժեշտության դեպքում՝ ուշ դուրսգրում</li>
                        <li>Սննդի և խմիչքների վաուչեր</li>
                            <li>Visa Infinite գործընկերների համար արտոնությունները տրամադրվում են անվճար</li>
                        </ul>
                    </div>
                </div>
                {/* 7.Պահատուփ */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="	https://www.evoca.am/images-cache/cards/1/16123452035318/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">Պահատուփ</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Դուք հանգիստ ճամփորդում եք, իսկ մենք 24-ժամյա հսկողության ներքո պահպանում ենք Ձեր արժեքավոր իրերը: </p>
                        <p className="text-gray-700 leading-relaxed">Պահատուփերի պարունակությունը միայն Ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր՝ դրամ, արժեթղթեր, թանկարժեք մետաղներ ու քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն:</p>
                        <p className="text-gray-700 leading-relaxed">
                    Visa Infinite գործընկերների համար Evocabank-ում չհրկիզվող պահատուփը տրամադրվում է անվճար:
                    </p>
                    </div>
                </div>
                {/* 7.YQnow Group */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="https://www.evoca.am/images-cache/cards/1/17561931057001/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">YQnow Group</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Մինչև 25% զեղչ օդանավակայններում ուղեկցման ծառայությունների համար։ </p>
                        <p className="text-gray-700 leading-relaxed">YQnow Group-ի ծառայությունները հասանելի են ավելի քան 500 միջազգային օդանավակայանում: YQnow Group-ի ծառայությունների օգնությամբ Դուք կարող եք ավելի հեշտ ու արագ անցնել գրանցումներն օդանավակայանում, Ձեզ կօգնեն տեղափոխել Ձեր ուղեբեռը, ժամանելուն պես կազմակերպել տեղափոխում և շատ ավելին:</p>
                        <p className="text-gray-700 leading-relaxed">
    Ծառայությունը հասանելի է մինչև 2026թ. դեկտեմբերի 31-ը:

                    </p>
                    
                    </div>
                </div>
                {/* 7. gg Airport rides*/}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-purple-50 p-6 rounded-2xl flex-shrink-0 flex items-center justify-center w-32 h-32">
                    <img src="	https://www.evoca.am/images-cache/cards/1/17561933084058/83x111.png" alt="DragonPass բիզնես սրահներ" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">gg Airport rides</h3>
                    <p className="text-gray-700 leading-relaxed">
                    Visa Infinite քարտապանները կարող են օգտվել gg-ի հատուկ սակագներից՝ «Զվարթնոց» օդանավակայանից ուղևորությունների դեպքում` ստանալով 1,000 դրամ զեղչ։ </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                    Ինչպե՞ս օգտվել առաջարկից․
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Ներբեռնեք gg հավելվածը:</li>
                        <li>Կցեք Ձեր Visa Infinite քարտը:</li>
                            <li>Պատվիրեք ուղևորություն «Զվարթնոց» օդանավակայանից հավելվածի միջոցով և ստացեք 1,000 դրամ զեղչ օդանավակայանից gg-ով ուղևորությունների դեպքում:</li>
                        </ul>
                    </div>
                </div>
                    </div>
            
            )}

            {/* 2. Սահմանաչափի տրամադրման պայմաններ */}
            {activeTab === 'conditions' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
                <h2 className="text-xl font-bold text-purple-900">Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ</h2>
                <p className="text-gray-700">
                Մեր Visa Infinite գործընկերները կարող են ստանալ հատուկ արտոնյալ պայմաններով վարկային սահմանաչափ: Սահմանաչափի համար կարելի է դիմել EvocaTOUCH հավելվածի միջոցով, շաբաթվա բոլոր օրերին և ցանկացած ժամի՝ առանց հավելյալ թղթաբանության ու ժամանակ կորցնելու կամ այցելելով մեր ցանկացած գրասենյակ:
                </p>
                <p className="text-gray-700 font-medium">
                Օնլայն հայտերը հաստատվում են ավտոմատ կերպով, 24/7 ռեժիմում, հայտի հաստատման մասին տեղեկացումը ստացվում է EvocaTouch հավելվածի միջոցով՝ հաշված րոպեների ընթացքում:
                </p>

                <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse">
                    <tbody>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտի տրամադրում</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտի տարեկան սպասարկում</td><td className="py-3 text-gray-900 font-semibold">100,000 ՀՀ դրամ</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Շտապ թողարկում</td><td className="py-3 text-gray-900 font-semibold">10,000 ՀՀ դրամ</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">24.02.2022թ.–ից հետո Բանկի հաճախորդ դարձած օտարերկրյա ոչ ռեզիդենտ քաղաքացիների համար<sup className="text-purple-700 font-bold">[1]</sup>:</td><td className="py-3 text-gray-900 font-semibold">300,000 ՀՀ դրամ</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Կից քարտի տրամադրում</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտային հաշվի չնվազող մնացորդ</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվարկվող տարեկան %</td><td className="py-3 text-gray-900 font-semibold"></td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700 pl-4">մինչև 5 մլն. ՀՀ դրամ</td><td className="py-3 text-gray-900 font-semibold">1.5%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700 pl-4">5 մլն. ՀՀ դրամ և ավել</td><td className="py-3 text-gray-900 font-semibold">2%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700 pl-4">արտարժույթ</td><td className="py-3 text-gray-900 font-semibold">0%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Առևտրի կետերում Բանկի և այլ բանկերի POS տերմինալներով անկանխիկ գործարքների իրականացում</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտի գործողության կասեցում</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտի գործողության ապակասեցում (սխալ PIN ծածկագրի կամ CVV մուտքագրման դեպքում)</td><td className="py-3 text-gray-900 font-semibold">1,000 ՀՀ դրամ</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտի վերաթողարկում գործողության ժամկետը ավարտվելու դեպքում</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտի վերաթողարկում կորստի, վնասելու կամ PIN ծածկագրի կորստի դեպքում</td><td className="py-3 text-gray-900 font-semibold">30,000 ՀՀ դրամ</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">PIN ծածկագրի գեներացման հայտ</td><td className="py-3 text-gray-900 font-semibold">1,000 ՀՀ դրամ</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Քարտային հաշվի քաղվածքի տրամադրում 1 ամսից ավել ժամանակահատվածի համար<sup className="text-purple-700 font-bold">[11]</sup></td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Կանխիկի մուտքագրում «ԱրՔա» համակարգի անդամ հանդիսացող բանկերի ATM-ով (ATM CASH-IN)</td><td className="py-3 text-gray-900 font-semibold">1.2%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Բանկի վճարային տերմինալներով հաշվի/քարտի համալրում</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Գործարքի վերաբերյալ SMS հաղորդագրությունների ստացում</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Գործարքի վերաբերյալ հաղորդագրությունների ստացում Evoca Touch հավելվածով</td><td className="py-3 text-gray-900 font-semibold">0</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Cash back միջազգային գործարքներից<sup className="text-purple-700 font-bold">[12]</sup></td><td className="py-3 text-gray-900 font-semibold">1%</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-3 font-medium text-gray-700">Բանկի վճարային քարտերին<sup className="text-purple-700 font-bold">[13]</sup></td><td className="py-3 text-gray-900 font-semibold">1%</td></tr>
                    </tbody>
                </table>
                </div>

                {/* Ստորև ավելացված ծանոթագրությունները (1-ից 15) */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-600 space-y-3">
                <p><sup className="text-purple-700 font-bold">[1]</sup> Օտարերկրյա քաղաքացիների համար գործում է նշված սակագնի հնգապատիկը, ընդ որում լրացուցիչ քարտերը կտրամադրվեն նախապես երեք տարվա միջնորդավճարը վճարելու պայմանով:</p>
                <p><sup className="text-purple-700 font-bold">[2]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվվերդրաֆտի) առկայությամբ քարտերի համար՝ 1%:</p>
                <p><sup className="text-purple-700 font-bold">[3]</sup> Սակագինը գործում է VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:</p>
                <p><sup className="text-purple-700 font-bold">[4]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվվերդրաֆտի) առկայությամբ քարտերի համար՝ 1.5%:</p>
                <p><sup className="text-purple-700 font-bold">[5]</sup> Սակագինը գործում է VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:</p>
                <p><sup className="text-purple-700 font-bold">[6]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվվերդրաֆտի) առկայությամբ քարտերի համար՝ 1.5% min 2,500 ՀՀ դրամ:</p>
                <p><sup className="text-purple-700 font-bold">[7]</sup> Սակագինը գործում է VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:</p>
                <p><sup className="text-purple-700 font-bold">[8]</sup> Սակագինը գործում է նաև VISA Infinite վճարային քարտի քարտային հաշվից փոխանցում իրականացնելու դեպքում:</p>
                <p><sup className="text-purple-700 font-bold">[9]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվվերդրաֆտի) առկայությամբ քարտերի համար՝ ՀՀ դրամ՝ 1%, արտարժույթ՝ 1%: Այս սակագինը գործում է նաև Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվվերդրաֆտի) առկայությամբ քարտի քարտային հաշվից փոխանցում իրականացնելու դեպքում:</p>
                <p><sup className="text-purple-700 font-bold">[10]</sup> Սակագինը գործում է նաև VISA Infinite քարտին կից տրամադրված ցանկացած տեսակի լրացուցիչ քարտերի դեպքում:</p>
                <p><sup className="text-purple-700 font-bold">[11]</sup> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
                <p><sup className="text-purple-700 font-bold">[12]</sup> Cashback տրամադրվում է, եթե կուտակված cashback-ի գումարը գերազանցում է 5000 ՀՀ դրամը կամ համարժեք արտարժույթը: Cashback առավելագույն սահմանաչափը կազմում է 200 000 ՀՀ դրամ կամ համարժեք արտարժույթ:</p>
                <p><sup className="text-purple-700 font-bold">[13]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվվերդրաֆտի) առկայությամբ քարտերի համար՝ 1%:</p>
                <p><sup className="text-purple-700 font-bold">[14]</sup> Հավելյալ ժամկետով (արտոնյալ ժամանակահատվածով) վարկային սահմանաչափի (օվվերդրաֆտի) առկայությամբ քարտերի համար՝ 1.5%:</p>
                <p><sup className="text-purple-700 font-bold">[15]</sup> Գանձվում է միայն այն դեպքում, երբ բողոքարկման գործընթացի արդյունքում պարզվել է, որ գործարքը կատարվել է հաճախորդի կողմից կամ հաճախորդի կողմից քարտի օգտագործման կանոնների խախտման հետևանքով:</p>
                </div>
            </div>
            )}

            {/* 3. Զգուշացում */}
            {activeTab === 'warning' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
                <div className="flex items-start space-x-4">
                <span className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-800 font-semibold uppercase leading-relaxed">
                    ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐ ՀԵՏՈ ՁԵՐ ՏՎՅԱԼՆԵՐԸ (ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՉԿԱՏԱՐՄԱՆ, ԹԵՐԻ ԿԱՏԱՐՄԱՆ ՄԱՍԻՆ ՏԵՂԵԿՈՒԹՅՈՒՆՆԵՐԸ) ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:
                </p>
                </div>
                <div className="flex items-start space-x-4">
                <span className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-gray-700 leading-relaxed">
                    Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր վարկային պատմության վրա: Վարկային պատմությունը Ձեր ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկությունների այն ամբողջությունն է, որը հավաքվում, կուտակվում և պարբերաբար նորացվում է Ձեզ վարկ տրամադրած կազմակերպությունների և/կամ Վարկային բյուրոյի կողմից:
                </p>
                
                </div>
                
            </div>
            
        )}

      </main>

      <Footer />
    </div>
  );
}
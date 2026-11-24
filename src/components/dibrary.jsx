import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function DibraryPage() {
  // Գործընկեր գրադարանների և շտեմարանների ցանկը՝ իրենց լոգոներով և հղումներով
  const libraryPartners = [
    { name: "EBSCO", img: "https://www.evoca.am/file_manager/Dibrary/1_Ebso.jpg", url: "https://login.ebsco.com/?requestIdentifier=b0a14013-ff27-44a2-bde5-36dba3180a34&acrValues=uid&ui_locales&redirect_uri=https://logon.ebsco.zone/api/dispatcher/continue/prompted?state=YWEyNTI4MjNlMTY2NDhjZTlhODgzYzhkMThhN2I4NmY=&authRequest=eyJraWQiOiIxNzY5MTEwMjQ0MDQ3IiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguZWJzY28uem9uZS9hcGkvZGlzcGF0Y2hlciIsImF1dGhSZXF1ZXN0Ijp7ImxvZ2luX2hpbnQiOiIiLCJhY3JfdmFsdWVzIjoidWlkIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgYWZmaWxpYXRpb24iLCJyZXNwb25zZV90eXBlIjoiY29kZSIsInJlZGlyZWN0X3VyaSI6Imh0dHBzOi8vc2VhcmNoLmVic2NvaG9zdC5jb20vd2ViYXV0aC9Qcm9tcHRlZENhbGxiYWNrLmFzcHgiLCJzdGF0ZSI6IkF4bVBlOVFkTXUyRXBQdllfQnVycmg0UHZ6T29GUG5xV3JZQlFEQ29MaVpMTGY4TG9JbFlEZzBuWTJVcUl0U2s4UmpNajdYOHpDUm9YbGFvektIVTZod25sVFduT0hrMDlaaDh4OVFBbWNSNnAzS3gxdzlGX193ZW1Md24tU2FCNXp5NWlPN0F2ZTV3dDEwcTZ1eE5NdmN6UlhuNjhGLWdSTGdONk51SkZ6ZzFqNFpFaEZEWllYMEI5c09faUNFbVhodnFrcVVPSVpmSVNMSG9fbmFReFZhR0dpSVV5czJYQjdUNHNIU0NEQm1PenF3Vzg3bEtITGQ1WDJFSGRfWnI5ZWJQV1hLRFhFQTNUZGo0MVh4T2Qyb3QzMVJwcDBFZG45dmZoX19Jb1VvWkgxZnJGVC1feXVHY3UyTHdTSkhsUjNQN3FZWWIxb1JDV0pReTZ6TU50S3A5amNkckpyck9HdFhvY0t5SXd1TG9JRjgiLCJjbGllbnRfaWQiOiJhd2d5Y0l4NTdNcnduRFE1aDRVZTZ5Q1ZFUDByNU10OSJ9LCJpYXQiOjE3OTUwMTU5NTMsImp0aSI6IjdkYzY3YTkwLTY5Y2UtNGNmZC1hYTA3LThjYWZmODRjMjhjMCIsInJlcUlkIjoiYjBhMTQwMTMtZmYyNy00NGEyLWJkZTUtMzZkYmEzMTgwYTM0In0.RrDOu4Dowfwvvqo9yj0EijdvctaT7tN36qSsWrvI94CrGgY0pg86yKK_KCaGofKj68FN3E6YtOQR_mPbiTpTFMgWJOmQI73UfaRczWPrew2lNG3D3pe_oj93NWuEzi2k1pifIQyW0IWPqV5zNkBL3jxDWDjI9-OviKcq23X44fjIP164UitmKu2mFKTiRhxTZ5LLWgUeMgwd_4WvR-GfvNdSGlEH4tF5VrPMl2AmT2CTIyct1HvjzIM35tArYOleK1G8zM3TqOkjQvdz9U6uZXkbFM9Kr01ZuvKWHe2nni-KVY4hldNXU18dRsQyMATVEw9NH8lrvhwCR_-6a3dGLA" },
    { name: "OpenStax", img: "https://www.evoca.am/file_manager/Dibrary/Openstax.jpg", url: "https://openstax.org" },
    { name: "OAPEN", img: "https://www.evoca.am/file_manager/Dibrary/5_Logo_OAPEN.png", url: "https://oapen.org/home" },
    { name: "Elibrary", img: "https://www.evoca.am/file_manager/Dibrary/N.jpg", url: "https://elibrary.ru" },
    { name: "Springer", img: "https://www.evoca.am/file_manager/Dibrary/2_Sp[1].jpg", url: "https://www.springer.com" },
    { name: "Polpred", img: "https://www.evoca.am/file_manager/Dibrary/3_POlP.jpg", url: "https://polpred.com/news" },
    { name: "Search / Other", img: "https://www.evoca.am/file_manager/Dibrary/431ea875.jpg", url: "https://cse.google.com/cse?cx=004286394939895931631:yqpm8pjcllz" },
    { name: "Royal Society", img: "https://www.evoca.am/file_manager/Dibrary/RS.jpg", url: "https://royalsociety.org/" },
    { name: "Library.ru", img: "https://www.evoca.am/file_manager/Dibrary/Library.ru.jpg", url: "http://www.library.ru" },
    { name: "Open Textbook Library", img: "https://www.evoca.am/file_manager/Dibrary/4_71691ad9.jpg", url: "https://open.umn.edu/opentextbooks/textbooks/web-literacy-for-student-fact-checkers?fbclid=IwAR2FJzSPnd_qS1uQE9EbiGE_wiC0DyapSQ4SgJs7CQ9OB3lQZvUzpIAKFq8" },
    { name: "DOAJ", img: "https://www.evoca.am/file_manager/Dibrary/e6797964.jpg", url: "https://doaj.org/" },
    { name: "NLA", img: "https://www.evoca.am/file_manager/Dibrary/NLA.jpg", url: "https://www.nla.gov.au" },
    { name: "DOAB", img: "https://www.evoca.am/file_manager/Dibrary/4_Doab.jpg", url: "https://www.directoryofopenaccessbooks.org" },
    { name: "OER Commons", img: "https://www.evoca.am/file_manager/Dibrary/1_c55c00d4.jpg", url: "https://www.oercommons.org" },
    { name: "OpenDOAR", img: "https://www.evoca.am/file_manager/Dibrary/OpD.jpg", url: "https://v2.sherpa.ac.uk/opendoar/" },
    { name: "Duke University Press", img: "https://www.evoca.am/file_manager/Dibrary/Duke.jpg", url: "https://read.dukeupress.edu" },
    { name: "JSTOR", img: "https://www.evoca.am/file_manager/Dibrary/5_JS[1].jpg", url: "https://www.jstor.org" },
    { name: "Open Book Publishers", img: "https://www.evoca.am/file_manager/Dibrary/2_OBP.jpg", url: "https://www.openbookpublishers.com" },
    { name: "SAGE Journals", img: "https://www.evoca.am/file_manager/Dibrary/Sage.jpg", url: "https://journals.sagepub.com" },
    { name: "Bookboon", img: "https://www.evoca.am/file_manager/Dibrary/3e144dee.jpg", url: "https://bookboon.com" },
    { name: "Questia", img: "https://www.evoca.am/file_manager/Dibrary/6_Quest.jpg", url: "https://www.questia.com" },
    { name: "Journals4free", img: "https://www.evoca.am/file_manager/Dibrary/Logo_Journals4free.png", url: "http://www.journals4free.com" },
    { name: "ScienceDirect", img: "https://www.evoca.am/file_manager/Dibrary/SD.jpg", url: "https://www.sciencedirect.com" },
    { name: "Open Knowledge Maps", img: "https://www.evoca.am/file_manager/Dibrary/OKM.jpg", url: "https://openknowledgemaps.org" },
    { name: "B-OK", img: "https://www.evoca.am/file_manager/Dibrary/dibrary-2.jpg", url: "#" },
    { name: "Open Knowledge Repository", img: "https://www.evoca.am/file_manager/Dibrary/4_Logo_OpenKnowledgeRepository.png", url: "https://openknowledge.worldbank.org" },
    { name: "Elgaronline", img: "https://www.evoca.am/file_manager/Dibrary/Elg.jpg", url: "https://www.elgaronline.com" },
    { name: "Search tool", img: "https://www.evoca.am/file_manager/Dibrary/Search.jpg", url: "#" },
    { name: "BookBoon Free", img: "https://www.evoca.am/file_manager/Dibrary/Logo_BookBoon.png", url: "https://bookboon.com" },
    { name: "IDEAS RePEc", img: "https://www.evoca.am/file_manager/Dibrary/ideas.png", url: "https://ideas.repec.org" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col justify-between">
      
      {/* Հեդերի կցումը import-ով */}
      <Header />

      {/* Հիմնական բովանդակություն */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          
          {/* Հացաշարք (Breadcrumbs) */}
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <span>🏠</span>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-700 font-medium">Dibrary</span>
          </nav>

          {/* Վերնագիր և Նկարի բլոկ (Flex-ով՝ նկարը աջում) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4 bg-gray-50/50 p-6 md:p-10 rounded-3xl border border-gray-100">
            <div className="space-y-4 md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Dibrary - Digital Library
              </h1>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Evocabank-ի նոր և գերժամանակակից «Թումանյան» մասնաճյուղում՝ Թումանյան 15 հասցեով, բացի ստանդարտ բանկային ծառայություններից, կգործի նաև Dibrary – digital library:
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg bg-purple-900 md:w-1/2 w-full">
              <img
                src="https://www.evoca.am/images-cache/menu/1/16117479662777/780x585.jpg"
                alt="Dibrary Digital Library"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Նկարագրական տեքստեր */}
          <section className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              #dibrary-ում կարելի է անվճար օգտվել էլեկտրոնային բիզնես ռեսուրսներից՝ <strong>E-Duke Journals Scholarly Collection</strong>, <strong>ASTM Compass</strong>, <strong>Edward Elgar Publishing Journals</strong>, <strong>Mathematical Sciences Publishers Journals</strong>, <strong>Royal Society Journals Collection</strong>, <strong>SAGE Premier</strong> և այլն...
            </p>
            <p>
              #dibrary-ի գրքերը, հոդվածները և հրապարակումները շարունակաբար համալրվելու են՝ ներառելով նաև համաշխարհային լավագույն համալսարանների փակ վճարովի ռեսուրսներ: Բացի էլեկտրոնային նյութերից, #dibrary-ում կարելի է գտնել նաև դասական գրքեր, ինչպես նաև ժամանակակից բիզնես գրականության բեսթսելերներ, որոնք կարելի է կարդալ տեղում, իսկ ցանկության դեպքում՝ նաև տանել տուն:
            </p>
            <p>
              #dibrary-ի բացման գործում մեզ աջակցել են <strong>DLAA-ը՝ Հայաստանի թվային գրադարանների ասոցիացիան (Digital Library Association of Armenia)</strong>, <strong>Ավետիք Իսահակյանի անվան գրադարանը</strong> և <strong>American Corner Yerevan-ը</strong>: Նրանց աջակցության շնորհիվ #dibrary-ում կարելի է անվճար օգտվել այնպիսի հրատարակիչների նյութերից, որոնց անդամակցությունը բավականին թանկ է և շատերի համար՝ անհասանելի:
            </p>
          </section>

          {/* Գործընկերների ցանց (Լոգոները՝ A թեգերով) */}
          <section className="space-y-6 pt-6">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
              Մեր գործընկեր էլեկտրոնային շտեմարանները և գրադարանները
            </h2>

           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              {libraryPartners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100 h-28 shadow-2xs"
                  title={partner.name}
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </section>

          {/* Փաստաթղթերի բաժին */}
          <section className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
            
            <div className="space-y-3">
              {[
                "Dibrary կանոնակարգ և պայմաններ",
                "Էլեկտրոնային գրադարանից օգտվելու ուղեցույց"
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
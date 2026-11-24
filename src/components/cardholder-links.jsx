import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import Header from './header';
import Footer from './footer';

export default function CardholdersLinksPage() {
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
            <span className="text-gray-700 font-medium">Հղումներ Բանկի քարտապանների համար</span>
          </nav>

          {/* Գլխավոր Վերնագիր */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Հղումներ Բանկի քարտապանների համար
          </h1>

          {/* Փաստաթղթերի բաժին */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Փաստաթղթեր</h2>
            
            <div className="space-y-3">
              {[
                "Ինչ անել, եթե բողոք ունեք (01.09.2026թ.)",
                "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ."
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
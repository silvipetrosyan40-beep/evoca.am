import React, { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 sm:px-10 shadow-sm rounded-3xl border border-gray-100 space-y-8">
          
          {/* Վերնագիր */}
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Մուտք համակարգ
          </h2>

          {/* Մուտքի ֆորմա */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Մուտքանուն */}
            <div>
              <input 
                type="text" 
                placeholder="Մուտքանուն"
                className="w-full border border-gray-200 rounded-xl p-3.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600 transition-colors text-sm" 
              />
            </div>

            {/* Գաղտնաբառ */}
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Գաղտնաբառ"
                className="w-full border border-gray-200 rounded-xl p-3.5 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-purple-600 transition-colors text-sm" 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none bg-transparent border-none cursor-pointer"
              >
                {/* Աչքի իկոն (Password hide/show) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>

            {/* Մուտք կոճակ */}
            <button 
              type="submit" 
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 border-none cursor-pointer text-base"
            >
              Մուտք
            </button>

            {/* Մոռացել եք */}
            <div className="text-center pt-2">
              <a href="#forgot" className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors no-underline">
                Մոռաց՞ել եք մուտքանունը կամ գաղտնաբառը
              </a>
            </div>
          </form>
        </div>

        {/* Մուտք QR կոդով */}
        <div className="mt-6 bg-white py-6 px-6 sm:px-10 shadow-sm rounded-3xl border border-gray-100 text-center">
          <button 
            type="button"
            className="w-full flex items-center justify-center space-x-3 bg-transparent hover:bg-purple-50/50 border border-transparent hover:border-purple-100 rounded-xl py-3 transition-all cursor-pointer"
          >
            <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
            </svg>
            <span className="font-semibold text-purple-900 text-base">Մուտք QR կոդով</span>
          </button>
        </div>

        {/* Կայքի հին տարբերակ */}
        <div className="mt-8 text-center">
          <a href="#old-version" className="text-sm font-semibold text-gray-800 hover:text-purple-700 transition-colors no-underline">
            Կայքի հին տարբերակ
          </a>
        </div>
      </div>
    </div>
  );
}
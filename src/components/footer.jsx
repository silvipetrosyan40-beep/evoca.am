import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 py-12 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Logo & Address */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="text-2xl font-black tracking-wider text-purple-900 no-underline block">
              evocabank
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Evocabank-ը վերահսկվում է <br />
              <strong className="text-slate-700">Հայաստանի Հանրապետության <br />Կենտրոնական բանկի կողմից</strong>
            </p>
            <p className="text-[11px] text-slate-400">
              1990 - 2026, © ԲՈԼՈՐ ՍԻՐՎԱԾ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Column 2: Բանկի մասին */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Բանկի մասին</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/hy/about" className="hover:text-purple-700 no-underline text-slate-600">Մեր մասին</Link></li>
              <li><Link to="/hy/about/management" className="hover:text-purple-700 no-underline text-slate-600">Ղեկավարություն</Link></li>
              <li><Link to="/hy/about/shareholders" className="hover:text-purple-700 no-underline text-slate-600">Բաժնետերեր</Link></li>
              <li><Link to="/hy/about/reports" className="hover:text-purple-700 no-underline text-slate-600">Հաշվետվություններ</Link></li>
              <li><Link to="/hy/about/regulations" className="hover:text-purple-700 no-underline text-slate-600">Իրավական ակտեր</Link></li>
              <li><Link to="/hy/about/tariffs" className="hover:text-purple-700 no-underline text-slate-600">Սակագներ</Link></li>
              <li><Link to="/hy/about/property" className="hover:text-purple-700 no-underline text-slate-600">Օտարվող գույք</Link></li>
              <li><Link to="/hy/about/developers" className="hover:text-purple-700 no-underline text-slate-600">Կառուցապատողներ</Link></li>
              <li><Link to="/hy/about/partner-salons" className="hover:text-purple-700 no-underline text-slate-600">Գործընկեր ավտոսրահներ</Link></li>
              <li><Link to="/hy/about/tariffs/archive" className="hover:text-purple-700 no-underline text-slate-600">Սակագների արխիվ</Link></li>
            </ul>
          </div>

          {/* Column 3: Օգտակար հղումներ */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Օգտակար հղումներ</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/hy/customer-rights" className="hover:text-purple-700 no-underline text-slate-600">Հաճախորդի իրավունքները (Բողոքների...)</Link></li>
              <li><Link to="/hy/residency-criteria" className="hover:text-purple-700 no-underline text-slate-600">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
              <li><Link to="/hy/regulation" className="hover:text-purple-700 no-underline text-slate-600">Կարգավորում</Link></li>
              <li><Link to="/hy/privacy-policy" className="hover:text-purple-700 no-underline text-slate-600">Գաղտնիության քաղաքականություն</Link></li>
              <li><Link to="/hy/financial-ombudsman" className="hover:text-purple-700 no-underline text-slate-600">Ֆին. հաշտարար</Link></li>
              <li><Link to="/hy/financial-cooperations" className="hover:text-purple-700 no-underline text-slate-600">Ֆինանսական համագործակցությունների...</Link></li>
              <li><Link to="/hy/cardholder-links" className="hover:text-purple-700 no-underline text-slate-600">Հղումներ Բանկի քարտապանների համար</Link></li>
            </ul>
          </div>

          {/* Column 4: Այլ հղումներ */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm">Այլ հղումներ</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/hy/evocaonline" className="hover:text-purple-700 no-underline text-slate-600">EvocaONLINE</Link></li>
              <li><Link to="/hy/safe-boxes" className="hover:text-purple-700 no-underline text-slate-600">Պահատուփեր</Link></li>
              <li><Link to="/help" className="hover:text-purple-700 no-underline text-slate-600">Հաճախ տրվող հարցեր</Link></li>
              <li><Link to="/hy/about/announcements" className="hover:text-purple-700 no-underline text-slate-600">Հայտարարություններ</Link></li>
              <li><Link to="/hy/dibrary" className="hover:text-purple-700 no-underline text-slate-600">Dibrary</Link></li>
              <li><Link to="/hy/bulletins" className="hover:text-purple-700 no-underline text-slate-600">Բուլետեններ</Link></li>
              <li><Link to="/hy/contact" className="hover:text-purple-700 no-underline text-slate-600">Հետադարձ կապ</Link></li>
              <li><Link to="/hy/sitemap" className="hover:text-purple-700 no-underline text-slate-600">Կայքի քարտեզ</Link></li>
            </ul>
          </div>

          {/* Column 5: Socials & Contacts */}
          <div className="space-y-6">
            <div className="flex space-x-3 text-slate-600">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaFacebookF size={14} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaInstagram size={14} /></a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaPinterestP size={14} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaYoutube size={14} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-purple-700 hover:text-white transition"><FaLinkedinIn size={14} /></a>
            </div>

            {/* App Badges */}
            <div className="flex flex-col space-y-2">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-32 cursor-pointer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32 cursor-pointer" />
            </div>

            <div className="space-y-1 text-sm font-medium">
              <Link to="/hy/branches" className="block text-purple-700 hover:underline no-underline">Բանկի հասցեները և աշխատաժամերը</Link>
              <Link to="/hy/contact" className="block text-purple-700 hover:underline no-underline">Կապ մեզ հետ</Link>
              <p className="text-slate-800 pt-2 font-bold">+374 10 605555</p>
              <p className="text-slate-800 font-bold">8444</p>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="border-t border-slate-200 pt-6 text-[11px] text-slate-500 leading-relaxed flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-5xl">
            Հարգելի' այցելու, կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նույնը տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Էվոկաբանկ» ԲԲԸ-ն պատասխանատվություն չի կրում ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգման և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար։
          </p>
          <div className="flex items-center space-x-4 opacity-70">
            <span className="text-xs font-semibold text-slate-600">arca</span>
            <span className="text-xs font-semibold text-slate-600">fininfo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
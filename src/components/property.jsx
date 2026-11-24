import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Home } from 'lucide-react';

export default function AlienatedPropertyPage() {
  // Օտարվող գույքի ցանկը՝ ըստ նկարի տվյալների
  const propertyList = [
    {
      address: 'Կոտայքի մարզ, գ. Սոլակ 1-ին փող., 4-րդ նրբ., թիվ 2 հողամաս',
      description: 'հողատարածք',
      area: '1340 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/solak.png'
    },
    {
      address: 'ք. Երևան, Արաբկիր, Բաղրամյան պողոտա 53շ, 69',
      description: 'ոչ բնակելի տարածք',
      area: '180 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/baghramyan-53.jpg'
    },
    {
      address: 'Պռոշյան գյուղ, Մայիլյան 4-րդ նրբանցք, 21 տուն',
      description: 'բնակելի տուն',
      area: '1400 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/proshyan.jpg'
    },
    {
      address: 'Կոտայքի մարզ, գ. Մարմարիկ',
      description: 'հողամաս',
      area: '7600 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/marmarik.jpg'
    },
    {
      address: 'Կոտայքի մարզ, Արտավազ համ., Կարմիր հովիտ',
      description: 'հողամաս, (նպատակային նշ.` արոտավայր)',
      area: '10000 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/karmir-hovit_0.jpg'
    },
    {
      address: 'ք. Գյումրի, Ղուկասյան փողոց 8 շարք, թիվ 33 բն.',
      description: 'տուն',
      area: '115 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/Gyumri.jpg'
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Ներմուծված Հեդեր */}
        <Header />

        {/* ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-16">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-purple-700 flex items-center no-underline text-gray-500">
              <Home className="w-4 h-4" />
            </Link>
            <span>›</span>
            <span className="text-gray-800 font-medium">Օտարվող գույք</span>
          </div>

          <div className="bg-white rounded-[30px] p-6 md:p-12 shadow-sm border border-gray-100 space-y-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Օտարվող գույք
            </h1>

            {/* Աղյուսակ (Table) */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-500 text-sm">
                    <th className="py-4 px-4 font-semibold w-[35%]">ՀԱՍՑԵ</th>
                    <th className="py-4 px-4 font-semibold w-[30%]">ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ</th>
                    <th className="py-4 px-4 font-semibold w-[15%]">ՄԱԿԵՐԵՍ</th>
                    <th className="py-4 px-4 font-semibold w-[20%]">ՆԿԱՐ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {propertyList.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-4 text-gray-800 text-sm font-medium leading-relaxed">
                        {item.address}
                      </td>
                      <td className="py-6 px-4 text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </td>
                      <td className="py-6 px-4 text-gray-700 text-sm font-semibold whitespace-nowrap">
                        {item.area}
                      </td>
                      <td className="py-6 px-4">
                        {/* Նկարի չափսերը մեծացված են (w-52 h-36) */}
                        <div className="w-52 h-36 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm flex items-center justify-center">
                          <img 
                            src={item.image} 
                            alt={item.description} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import { Menu, X, AlertCircle, Activity, TrendingUp } from 'lucide-react';
import Navbar from './components/Navbar';
import PieChartExample from './components/PieChart';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen md:grid md:grid-cols-6 md:grid-rows-12 gap-4 p-4 bg-slate-50">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-purple-700 bg-white p-2 rounded-lg shadow-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Desktop */}
      <aside className="hidden mb-4 lg:flex lg:col-span-1 row-span-12 rounded-3xl">
        <Navbar />
      </aside>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <aside className="absolute mb-4 z-40 lg:hidden w-64 h-full bg-white shadow-xl rounded-3xl">
          <Navbar />
        </aside>
      )}

      {/* Conteúdo Principal */}
      <main className=" md:col-span-4 mb-4 md:row-span-8 rounded-3xl shadow-md overflow-hidden">
        <div
          className='lg:bg-primary  w-full h-24'
          style={{

            clipPath: 'inset(0 0 -10px 0)'
          }}
        >
          <h2 className="text-2xl font-bold sm:text-primary lg:text-white  pt-6 text-center">
            Dashboard Financeiro
          </h2>
        </div>
        <PieChartExample />
      </main>

      {/* Card Status (Direita) */}
      <div className="md:row-span-12 mb-4 md:col-start-6 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 text-[#4b245b] mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-800">Status do Sistema</h3>
          <p className="text-sm text-slate-500 mt-2">Operacional</p>
          <div className="mt-4 h-2 bg-slate-200 rounded-full">
            <div className="w-3/4 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Cards Inferiores */}
      <div className="md:col-span-2 mb-4 md:row-span-4 md:col-start-2 md:row-start-9 bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
        <div
          className='lg:bg-primary w-full h-20 flex flex-col items-center justify-center shadow-md'
          style={{
            marginTop: '-1px',
            clipPath: 'inset(0 0 -10px 0)'
          }}
        >
          <div className="flex items-center gap-2 mt-4">
            <TrendingUp className="w-6 h-6 lg:text-white text-primary" />
            <h3 className="text-lg font-semibold lg:text-white text-primary">Vendas Hoje</h3>
          </div>
        </div>

        <div className='p-6 space-y-4 flex-1 flex flex-col items-center justify-center text-center'>
          <div className="text-3xl font-bold text-slate-800 mb-2">R$ 12.450</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-green-500">+2.5% vs ontem</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 mb-4 md:row-span-4 md:col-start-4 md:row-start-9 bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
        {/* Cabeçalho Roxo */}
        <div
          className='lg:bg-primary w-full h-20 flex flex-col items-center justify-center shadow-md'
          style={{
            marginTop: '-1px',
            clipPath: 'inset(0 0 -10px 0)'
          }}
        >
          <div className="flex items-center gap-2 mt-4">
            <AlertCircle className="w-6 h-6 lg:text-white text-primary" />
            <h3 className="text-lg font-semibold lg:text-white text-primary">Alertas</h3>
          </div>
        </div>

        {/* Lista de Alertas */}
        <div className='p-6 space-y-4 flex-1'>
          <ul className="space-y-3 w-full">
            <li className="text-sm text-slate-600  px-4 py-2  text-center">
              Estoque baixo: Produto X
            </li>
            <li className="text-sm text-slate-600 px-4 py-2  text-center">
              Pagamento pendente
            </li>
            <li className="text-sm text-slate-600 px-4 py-2  text-center">
              Meta não atingida
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;

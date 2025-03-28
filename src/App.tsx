<<<<<<< HEAD
import React from 'react'
=======
import React, { useState } from 'react';
import { Menu, X, AlertCircle, Activity, TrendingUp } from 'lucide-react';
import Navbar from './components/Navbar';
import PieChartExample from './components/PieChart';
>>>>>>> 54ee30d0888bcad3684ab4e710b6e201ccdf6d1e

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className=''>

=======
    <div className="h-screen w-screen grid md:grid-cols-6 md:grid-rows-12 gap-4 p-4 bg-slate-50">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 text-purple-700 bg-white p-2 rounded-lg shadow-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex lg:col-span-1 row-span-12 rounded-lg bg-purple-700">
        <Navbar />
      </aside>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <aside className="absolute z-40 lg:hidden w-64 h-full bg-white shadow-xl rounded-r-lg">
          <Navbar />
        </aside>
      )}

      {/* Conteúdo Principal */}
      <main className="md:col-span-4 md:row-span-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Dashboard Financeiro</h2>
        <PieChartExample />
      </main>

      {/* Card Status (Direita) */}
      <div className="md:row-span-12 md:col-start-6 bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 text-teal-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-800">Status do Sistema</h3>
          <p className="text-sm text-slate-500 mt-2">Operacional</p>
          <div className="mt-4 h-2 bg-slate-200 rounded-full">
            <div className="w-3/4 h-2 bg-teal-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Cards Inferiores */}
      <div className="md:col-span-2 md:row-span-4 md:col-start-2 md:row-start-9 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-blue-400" />
          <h3 className="text-lg font-semibold text-slate-800">Vendas Hoje</h3>
        </div>
        <div className="text-3xl font-bold text-slate-800">R$ 12.450</div>
        <span className="text-sm text-green-500">+2.5% vs ontem</span>
      </div>

      <div className="md:col-span-2 md:row-span-4 md:col-start-4 md:row-start-9 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-pink-400" />
          <h3 className="text-lg font-semibold text-slate-800">Alertas</h3>
        </div>
        <ul className="space-y-3">
          <li className="text-sm text-slate-600">Estoque baixo: Produto X</li>
          <li className="text-sm text-slate-600">Pagamento pendente</li>
          <li className="text-sm text-slate-600">Meta não atingida</li>
        </ul>
      </div>
>>>>>>> 54ee30d0888bcad3684ab4e710b6e201ccdf6d1e
    </div>
  )
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 54ee30d0888bcad3684ab4e710b6e201ccdf6d1e

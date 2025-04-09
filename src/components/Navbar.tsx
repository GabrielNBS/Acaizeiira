import {
    House,
    LucideChartGantt,
    LucideChartNoAxesCombined,
    LucideCircleArrowLeft,
    LucideCircleUserRound
  } from "lucide-react"

  export default function Navbar() {
      return (
          <nav className="bg-primary p-6 rounded-2xl h-[calc(100vh-2rem)] flex flex-col justify-between z-50">
              <ul className="space-y-4 text-white font-comfortaa">
                  <li>
                      <a href="Perfil" className="flex gap-3 items-center p-3 hover:bg-[#a76fad] rounded-lg transition-colors duration-300">
                          <LucideCircleUserRound className="w-6 h-6" />
                          <span>Perfil</span>
                      </a>
                  </li>
                  <li>
                      <a href="home" className="flex gap-3 items-center p-3 hover:bg-[#a76fad] rounded-lg transition-colors duration-300">
                          <House className="w-6 h-6" />
                          <span>Home</span>
                      </a>
                  </li>
                  <li>
                      <a href="estoque" className="flex gap-3 items-center p-3 hover:bg-[#a76fad] rounded-lg transition-colors duration-300">
                          <LucideChartGantt className="w-6 h-6" />
                          <span>Estoque</span>
                      </a>
                  </li>
                  <li>
                      <a href="financeiro" className="flex gap-3 items-center p-3 hover:bg-[#a76fad] rounded-lg transition-colors duration-300">
                          <LucideChartNoAxesCombined className="w-6 h-6" />
                          <span>Financeiro</span>
                      </a>
                  </li>
              </ul>

              <button className="flex gap-3 items-center p-3 text-white hover:bg-[#a76fad] rounded-lg transition-colors duration-300 mx-auto mb-4 w-[calc(100%-1.5rem)]">
                  <LucideCircleArrowLeft className="w-6 h-6" />
                  <span>Sair</span>
              </button>
          </nav>
      )
  }

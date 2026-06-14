import { useState } from 'react';
import Cnpj from './Cnpj';
import Cep from './Cep';
import Feriado from './Feriado';

export default function Home() {
  const [activeTab, setActiveTab] = useState('cnpj');

  const tabs = [
    { id: 'cnpj', label: 'Consulta CNPJ', icon: '🏢' },
    { id: 'cep', label: 'Consulta CEP', icon: '📍' },
    { id: 'feriado', label: 'Feriados', icon: '📅' },
  ];

  return (
    <section className="w-full flex flex-col items-center pt-10 pb-20 px-4">
      {/* Hero Header */}
      <div className="text-center mb-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Dados estruturados na <span className="text-[#A8DADC]">velocidade</span> que você precisa
        </h2>
        <p className="text-[#A8DADC]/80 text-lg">
          Sem burocracia. Selecione a ferramenta abaixo e consulte as informações em tempo real diretamente da BrasilAPI.
        </p>
      </div>

      {/* Interactive Hero Tool Area */}
      <div className="w-full max-w-3xl glass-panel p-2 md:p-4 mb-10 shadow-2xl shadow-[#A8DADC]/5">
        {/* Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 p-2 bg-[#1e202e]/80 rounded-xl mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-[#A8DADC] text-[#1e202e] shadow-md'
                  : 'text-[#A8DADC]/60 hover:text-[#A8DADC] hover:bg-[#A8DADC]/10'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="p-2 md:p-4 min-h-[300px]">
          {activeTab === 'cnpj' && <Cnpj />}
          {activeTab === 'cep' && <Cep />}
          {activeTab === 'feriado' && <Feriado />}
        </div>
      </div>

      {/* Value Proposition area */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="text-center p-6 rounded-2xl bg-[#A8DADC]/5 border border-[#A8DADC]/10">
          <div className="text-2xl mb-2 text-[#A8DADC]">⚡</div>
          <h3 className="font-bold text-white mb-2">Zero Atrito</h3>
          <p className="text-sm text-[#A8DADC]/70">Pesquise diretamente da tela principal, sem mudar de página.</p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-[#FFEE8C]/5 border border-[#FFEE8C]/10">
          <div className="text-2xl mb-2 text-[#FFEE8C]">🎯</div>
          <h3 className="font-bold text-white mb-2">Alta Precisão</h3>
          <p className="text-sm text-[#A8DADC]/70">Dados formatados para leitura rápida usando tipografia otimizada.</p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-[#D8F3DC]/5 border border-[#D8F3DC]/10">
          <div className="text-2xl mb-2 text-[#D8F3DC]">🔒</div>
          <h3 className="font-bold text-white mb-2">100% Estável</h3>
          <p className="text-sm text-[#A8DADC]/70">Infraestrutura baseada nos serviços da BrasilAPI.</p>
        </div>
      </div>
    </section>
  );
}
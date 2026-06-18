import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-20 px-4">
      {/* Hero Header */}
      <div className="text-center mb-10 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Dados estruturados na{' '}
          <span className="text-[#A8DADC]">velocidade</span> que você precisa
        </h2>

        <p className="text-[#A8DADC]/80 text-lg">
          Consulte informações em tempo real diretamente da BrasilAPI.
        </p>
      </div>

      {/* Navegação */}
      <div className="w-full max-w-3xl glass-panel p-4 mb-10 shadow-2xl shadow-[#A8DADC]/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <NavLink
            to="/cnpj"
            className="flex flex-col items-center p-6 rounded-xl bg-[#A8DADC]/10 hover:bg-[#A8DADC]/20 transition-all"
          >
            <span className="text-4xl mb-2">🏢</span>
            <h3 className="text-white font-bold">Consulta CNPJ</h3>
            <p className="text-sm text-[#A8DADC]/70 text-center mt-2">
              Consulte informações de empresas através do CNPJ.
            </p>
          </NavLink>

          <NavLink
            to="/cep"
            className="flex flex-col items-center p-6 rounded-xl bg-[#A8DADC]/10 hover:bg-[#A8DADC]/20 transition-all"
          >
            <span className="text-4xl mb-2">📍</span>
            <h3 className="text-white font-bold">Consulta CEP</h3>
            <p className="text-sm text-[#A8DADC]/70 text-center mt-2">
              Encontre endereços utilizando o CEP.
            </p>
          </NavLink>

          <NavLink
            to="/feriado"
            className="flex flex-col items-center p-6 rounded-xl bg-[#A8DADC]/10 hover:bg-[#A8DADC]/20 transition-all"
          >
            <span className="text-4xl mb-2">📅</span>
            <h3 className="text-white font-bold">Feriados</h3>
            <p className="text-sm text-[#A8DADC]/70 text-center mt-2">
              Consulte os feriados nacionais do ano.
            </p>
          </NavLink>

        </div>
      </div>

      {/* Benefícios */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">

        <div className="text-center p-6 rounded-2xl bg-[#A8DADC]/5 border border-[#A8DADC]/10">
          <div className="text-2xl mb-2 text-[#A8DADC]">⚡</div>
          <h3 className="font-bold text-white mb-2">Zero Atrito</h3>
          <p className="text-sm text-[#A8DADC]/70">
            Navegação rápida entre as funcionalidades.
          </p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-[#FFEE8C]/5 border border-[#FFEE8C]/10">
          <div className="text-2xl mb-2 text-[#FFEE8C]">🎯</div>
          <h3 className="font-bold text-white mb-2">Alta Precisão</h3>
          <p className="text-sm text-[#A8DADC]/70">
            Dados atualizados diretamente da BrasilAPI.
          </p>
        </div>

        <div className="text-center p-6 rounded-2xl bg-[#D8F3DC]/5 border border-[#D8F3DC]/10">
          <div className="text-2xl mb-2 text-[#D8F3DC]">🔒</div>
          <h3 className="font-bold text-white mb-2">100% Estável</h3>
          <p className="text-sm text-[#A8DADC]/70">
            Consultas rápidas e seguras.
          </p>
        </div>

      </div>
    </section>
  );
}
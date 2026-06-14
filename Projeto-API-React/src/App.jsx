import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#FFEE8C] selection:text-[#1e202e]">
      {/* Glow effects de fundo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#A8DADC] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D8F3DC] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-[#FFEE8C] rounded-full mix-blend-multiply filter blur-[128px] opacity-5"></div>
      </div>

      <Header />

      <main className="flex-1 flex flex-col justify-center">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
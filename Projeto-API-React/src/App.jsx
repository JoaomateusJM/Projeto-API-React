import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <div>
      <Header />

      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
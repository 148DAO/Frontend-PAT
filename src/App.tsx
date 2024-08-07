import Navbar from './components/sideNavbr.tsx';
import ViewPage from './components/ViewPage.tsx';

function App() {
  return (
    <main className="flex space-x-2">
      <Navbar />
      <ViewPage />
    </main>
  );
}

export default App;

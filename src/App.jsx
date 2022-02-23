import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ToastContainer } from 'react-toastify';
import ParticlesBackground from "./components/ParticlesBackground";
import './index.css';
import DataProvider from "./contexts/DataProvider";
import RoutesApp from "./Routes";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <DataProvider>
        <RoutesApp />
      </DataProvider>
      <ToastContainer />
    </div>
  )
}

export default App;
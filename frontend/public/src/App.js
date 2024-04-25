import Topbar from './components/Topbar';
import PageNormal from './pages/PageNormal';
import PageEdit from './pages/PageEdit';
import PageCreate from './pages/PageCreate';
import './App.css';

function App() {
  return (
    <div className="All">
      <Topbar/>
      <PageEdit/>
    </div>
  );
}

export default App;

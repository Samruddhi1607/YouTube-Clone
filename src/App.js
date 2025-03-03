import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendVideo from './RecommendVideo';
function App() {
  return (
    <div className='app'> 
      <Header/>
      <div className='app-page'>
      <Sidebar/>
      <RecommendVideo/>
      </div>
     
    </div>
  );
}

export default App;

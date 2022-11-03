import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../../components/dashboard/dashboard';
import Sidebar from '../../components/sidebar/sidebar';
import HomeComp from '../../components/homecomp';

export function HomePage() {
  return (
    <div className="App">
      <Dashboard/>
      
      <div className='main'  id='home-page'>
        <HomeComp/>
        <p>page 1</p>
      </div>
      
      <Sidebar/>
    </div>
  );
}

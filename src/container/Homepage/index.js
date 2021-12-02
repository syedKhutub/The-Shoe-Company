import Dashboard from '../Dashboard';
import Filter from '../Filter';
import './css/index.css';
import { ALL_SHOES } from '../Dashboard/constants';

function Homepage() {
  return (
    <div className="App">
      <div style={{ display: 'flex'}}>
        <Filter/>
        <Dashboard data={ALL_SHOES} />
      </div>
    </div>
  );
}

export default Homepage;

import Dashboard from '../container/Dashboard';
import Filter from '../container/Filter';
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

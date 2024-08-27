import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import { Home, MouseFun, Timeline, CMail, I } from './components/pages';
import Layout from './components/layout/Layout';
import {Dashboard, InputFields} from './components/pages';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" exactly element={<Home />} />
      
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/inputs' element = {<InputFields/>} />
      <Route path="/mouseFun" element={<MouseFun />} />
      <Route path="/mail/" element= {<Layout />} >
       <Route index element= {<CMail />} />
      </Route>
    </Routes>
    </> 
  );
}



export default App;

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './pages/Services';
import Features from './pages/Features';
import Team from './pages/Team';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path= '/'>
            <Home />
          </Route>
          <Route exact path="/services">
              <Services />
          </Route>
          <Route exact path="/features">
              <Features />
          </Route> 
          <Route exact path="/team">
              <Team />
          </Route>
          <Route exact path="/faq">
              <FAQ />
          </Route>      
          <Route exact path="/contact">
              <Contact />
          </Route>   
        </Switch>
      </div>
    </Router>
  )
}

export default App
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';
import Stats from './pages/StatPage';
import Header from './components/Header';
import Goals from "./components/Goals";
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <main className="container">
                    <header>
                        <div className="left-hello">
                            <h1><span id={'random-sentence'}>Heureux de te revoir</span> <span id='name'>Sylvain</span>
                            </h1>
                        </div>
                        <div className="right-goals container-box blur">
                            <Goals/>
                        </div>
                    </header>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/objectifs' component={GoalsPage}/>
                        <Route exact path='/stats' component={Stats}/>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;

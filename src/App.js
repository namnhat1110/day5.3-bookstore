import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import BookDetailPage from './pages/BookDetailPage'
import ReadingPage from './pages/ReadingPage'
import HomePage from './pages/HomePage'
import NotfoundPage from './pages/NotfoundPage'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/books/:id" component={BookDetailPage} />
        <Route exact path="/reading" component={ReadingPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotfoundPage} />
      </Switch>
    </Router>
  );
}

export default App;

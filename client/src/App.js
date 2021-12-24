import AllSongs from './components/albums'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Switch>
      <Route path="/" exact render={() => <AllSongs />} />
    </Switch>

  );
}

export default App;

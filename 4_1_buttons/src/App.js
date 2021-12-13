import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button boldText="boldText" textBtn="Important"/>
      <Button textBtn="Not Important"/>
    </div>
  );
}

export default App;

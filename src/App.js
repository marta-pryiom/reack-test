import ColorPicker from './components/ColorPicker/ColorPicker'
import Alert from './components/Alert/Alert';
import Container from "./components/Container/Container"

function App() {
  return (
    <div>
       <Container> 
        <ColorPicker options = {colorPickerOptions}/> 
        <Alert text="В тебе все вийде!!!!" type='error'/>
        <Alert text="В тебе все вийде!!!!" type='success'/>
        <Alert text="В тебе все вийде!!!!" type='warning'/> 
      </Container> 
    </div>
  );
}

export default App;

const colorPickerOptions = [
  { label:'red', color: '#F44336'},
  { label:'green', color: '#4CAF50'},
  { label:'blue', color: '#2196F3'},
  { label:'grey', color: '#607D8B'},
  { label:'pink', color: '#E91E63'},
  { label:'indigo', color: '#3F51B5'}
]

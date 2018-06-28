import React, { Component, PropTypes} from 'react';
import AddColorForm from './add-color-form';
import ColorList from './color-list';
import v4 from 'uuid';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      colors: []
    }
    this.addColor = this.addColor.bind(this);
    this.rateColor =this.rateColor.bind(this);
    this.removeColor =this.removeColor.bind(this);
  }
  
  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id:v4(),
        title,
        color,
        rating:0
      }
    ]
    this.setState({colors})
  }

  rateColor(id, rating){
   console.log("here");
  }
  removeColor(id){
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({colors})
  }
 render() {
   const {addColor, rateColor, removeColor} =this;
   const {colors} = this.state
   return (
     <div className="app">
        <AddColorForm onNewColor={addColor}/>
        <colorList colors={colors}
                  onRate={rateColor}
                  onRemove={removeColor}/>
     </div>
   )
 }
}

export default App;

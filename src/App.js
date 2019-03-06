import React from 'react';
import Game from './stories/Game'
import './style.css'
class App extends React.Component {

  reset = ()=>{
    console.log("hello world");
    window.location.reload()
  }

  render() {
    return (
      <div>
        <Game color={"red"} reset={this.reset} />
      </div>

    )
  }
}
export default App;
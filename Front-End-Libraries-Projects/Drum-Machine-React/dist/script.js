/*
https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine
*/
const projectName = 'javascript-drum-machine',
      drumKit = [
        {name: 'Heater-1', key: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
        {name: 'Heater-2', key: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
        {name: 'Heater-3', key: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
        {name: 'Heater-4', key: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
        {name: 'Clap', key: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
        {name: 'Open-HH', key: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
        {name: "Kick-'n-Hat", key: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
        {name: 'Kick', key: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
        {name: 'Closed-HH', key: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
      ]

class KeyBoard extends React.Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.keyIsDown)
    window.focus()
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyIsDown)
  }
  
  keyIsDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
       this.play()
    }
  }
  
  play = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.updateDisplay(this.props.id)
  }
    
  render(){
    return (
      <div 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.play} 
      >
          {this.props.letter}
          <audio 
            className="clip" 
            ref={ref => this.audio = ref} 
            id={this.props.letter} 
            src={this.props.src}>
          </audio>
      </div>
    );
  }
}
   
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'click a button or press a key'
    }
  }
  
  updateDisplay = name => this.setState({ name: name })
    
  render() {
    return (
      <div>
      <h2>JavaScript Drum Machine.</h2> 
      <div id="drum-machine">
        <div id='drum-pads'>
          {drumKit.map(i => (
            <KeyBoard
              id={i.name}
              letter={i.key}
              src={i.src}
              updateDisplay={this.updateDisplay}
            />  
          ))} 
        </div>
        <div id='display'>{this.state.name}</div> 
      </div>
      <br />  
      <div id="codedBy">
        <a target="_blank" href= 'https://www.freecodecamp.org/'>FreeCodeCamp </a> 
        Front End Libraries Project 
        <br /> 
        designed and coded by 
        <a target="_blank" href="https://codepen.io/krayevska"> Olga Krayevska</a>
      </div>
    </div>
    )
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));




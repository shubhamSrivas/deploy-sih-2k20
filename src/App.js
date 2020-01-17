import React, {Component} from 'react';
import Dropzone from './components/Dropzone';
import Home from './components/Home';
import 'react-dropzone-uploader/dist/styles.css';
import './App.css';

let max_offset,initial_offset;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      header: false,
    };
    this.makeShowLogo = this.makeShowLogo.bind(this);
    this.hideLogo = this.hideLogo.bind(this);
  }
  componentDidMount(){
    this.prev = window.scrollY;
    window.addEventListener('scroll',e => this.handleScroll(e));
  }

  handleScroll = e => {
    const window = e.currentTarget;
    if (this.prev > window.scrollY) {
        window.scrollBy({left:0,top:-window.innerHeight,behavior: 'smooth'});
    } else if (this.prev < window.scrollY) {
      window.scrollBy({left:0,top:window.innerHeight,behavior:'smooth'});
    }
    this.prev = window.scrollY;
  }
  
  makeShowLogo() {
    const { header } = this.state;
    if (!header) this.setState({ header: true });
  }

  hideLogo() {
    const { header } = this.state;
    if (header) this.setState({ header: false });
  }
  render(){
  return (
    <div className="App">
      <Home makeShowLogo={this.makeShowLogo} hideLogo={this.hideLogo}/>
      <Dropzone/>
    </div>
  );
  }
}

export default App;

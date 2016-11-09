import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(...args){
      super(...args);
      this.state = {
        currentLevel: 0,
        phase: null,
        cycling: false,
        script: [
          {
            key: 0,
            title: 'The Descent',
            message: 'The journey starts anew. You begin your descent.'
          },
          {
            key: 1,
            title: 'Floor One',
            message: 'The walls are devoid of any features. The rooms feel claustrophobic. You press on.'
          },
          {
            key: 2,
            title: 'Floor Two',
            message: 'You\'re not sure why you are compelled to descend. It just feels... correct. You continue.'
          },
          {
            key: 3,
            title: 'Floor Three',
            message: 'The translucent red columns give off a heat and a low, ominous buzz. They sicken you. You would probably destroy them even if you didn\'t have to.'
          },
          {
            key: 4,
            title: 'Floor Four',
            message: 'Each time you reach for one of the purple orbs, a powerful wave of deja vu overtakes you, and energy crackles from your fingertips. This Power was destined for you, or perhaps the other way around.'
          },

        ],
        pc: {
            level: 0,
            hp: null,
            atk: null,
            def: null,
          },
        npc: [],
        map: null


      }
      this.hydrate = this.hydrate.bind(this);
      this.lifeCycle = this.lifeCycle.bind(this);
      this.generateLevel = this.generateLevel.bind(this);
    };
    hydrate(){
      this.setState({


      });
    };
    lifeCycle(){
      if (this.state.cycling === false){
        this.setState({
          cycling: true
        });

      }
      console.log("lifeCycle is running");
    };
    generateLevel(){

    };
render(){
    return (
      <div>Hello World
        <button onClick={() => this.lifeCycle()}>Start</button>
      </div>
    );
  }
}

export default App;

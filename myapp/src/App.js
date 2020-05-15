import React, {Component} from 'react';
import "./App.css"
import TabList from './Components/TabList';
import Body from './Components/Body';
import ScrollUpButton from "react-scroll-up-button";

export class App extends Component {
  constructor(){
    super();
    this.state={
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }
  render(){
    document.title = "Siqi Zhao"; 
    const tabs = [
      {
        id: 1,
        title: "Home"
      },
      {
        id: 2,
        title: "Photographs"
      },
      {
        id: 3,
        title: "Videos"
      },
      {
        id: 4,
        title: "Favorite Websites"
      },
      {
        id: 5,
        title: "Q&C"
      },
      {
        id: 6,
        title: "Movies"
      }
    ]

  return(
      <div>
        <div className='header'>
          <h1> Welcome to Siqi's Secret Garden</h1>
        </div>
        <div className="body">
          <div className="nav-bar">
            <TabList tabs={tabs} changeTab={this.changeTab} activeTab={this.state.activeTab}/>
          </div>
          <div className="main-body">
            <Body activeTab={this.state.activeTab}/>
          </div>
          <div>
            <ScrollUpButton/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
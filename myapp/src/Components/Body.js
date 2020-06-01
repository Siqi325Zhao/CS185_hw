import React, {Component} from 'react';
import Home from './Home'
import Photographs from './Photographs'
import Videos from './Videos'
import FavoriteWebsites from './FavoriteWebsites'
import Guestbook from './Guestbook'
import Movies from './Movies'
import AddMovie from './AddMovie'
import CreateList from './CreateList'

export class Body extends Component {
  displayContent=()=>{
    var activeTab=this.props.activeTab
    if(activeTab===1)
      return <Home/>
    else if(activeTab===2)
      return <Photographs/>
    else if(activeTab===3)
      return <Videos/>
    else if(activeTab===4)
      return <FavoriteWebsites/>
    else if(activeTab===5)
      return <Guestbook/>
    else if(activeTab===6)
      return <Movies/>
    else if(activeTab===7)
      return <AddMovie/>
    else
      return <CreateList/>
  }
  render(){
    return(this.displayContent());
  }
}
export default Body;
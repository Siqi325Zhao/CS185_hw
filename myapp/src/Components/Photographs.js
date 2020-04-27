import React, {Component} from 'react';
import Zmage from 'react-zmage'

export class Photographs extends Component {
    render(){
        return(
            <div>
                <div className="parent">
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/dali.jpg') })}><img className = "myimg" src={ require('./images/dali.jpg') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/luoyang.JPG') })}><img className = "myimg" src={ require('./images/luoyang.JPG') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/wuhan.jpg') })}><img className = "myimg" src={ require('./images/wuhan.jpg') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/zhengzhou.jpg') })}><img className = "myimg" src={ require('./images/zhengzhou.jpg') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/inner mongolia.JPG') })}><img className = "myimg" src={ require('./images/inner mongolia.JPG') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/inner mongolia2.JPG') })}><img className = "myimg" src={ require('./images/inner mongolia2.JPG') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/san francisco.jpg') })}><img className = "myimg" src={ require('./images/san francisco.jpg') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/santa barbara.jpg') })}><img className = "myimg" src={ require('./images/santa barbara.jpg') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <a onClick={() => Zmage.browsing({ src:require('./images/malibu.jpg') })}><img className = "myimg" src={ require('./images/malibu.jpg') } alt = "Photographs" style = {{float:'center', width:'100%'}}/></a>
                    </div>
                    <div className = "child">
                        <font size="6">Coming Soon!</font>
                    </div>   
        </div>

            </div>
    );
  }
}
export default Photographs;
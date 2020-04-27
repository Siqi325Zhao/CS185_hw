import React, {Component} from 'react';

export class Videos extends Component {
    render(){
        return(
            <div>
                <div className="vidparent">
                    <div className="vidchild"><iframe title="1" width="300" height="300" src="https://youtube.com/embed/utO2xTIDCOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>                 
                    <div className="vidchild"><iframe title="2" width="300" height="300" src="https://youtube.com/embed/7ea8S4uC3ZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className="vidchild"><iframe title="3" width="300" height="300" src="https://youtube.com/embed/SbtBqG8wvt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className="vidchild"><iframe title="4" width="300" height="300" src="https://youtube.com/embed/W759Mhu0u4I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className="vidchild"><iframe title="5" width="300" height="300" src="https://youtube.com/embed/3ERQbyomFKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            </div>
    );
  }
}
export default Videos;
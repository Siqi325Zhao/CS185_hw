import React, {Component} from 'react';

export class FavoriteWebsites extends Component {
    render(){
        return(
        <div class="links">
            <h2>
                These are my favorite websites.
            </h2>
            <div class="link">
                <img className = "myimgs" src={ require('./images/youtube.png') } alt = "sites" style = {{float:'center', width:'25%'}}></img>
                <a href="https://www.youtube.com/">Youtube</a>
                <font size="5">My favorite video searching website.</font>
            </div>
            <div class="link">
                <img className = "myimgs" src={ require('./images/wechat.png') } alt = "sites" style = {{float:'center', width:'25%'}}></img>
                <a href="https://www.wechat.com/en/">Wechat</a>
                <font size="5">My favorite social networking application.</font>
            </div>
            <div class="link">
                <img className = "myimgs" src={ require('./images/netease.png') } alt = "sites" style = {{float:'center', width:'25%'}}></img>
                <a href="https://music.163.com">Netease</a>
                <font size="5">My favorite music searching website.</font>
            </div>
            <div class="link">
                <img className = "myimgs" src={ require('./images/taobao.jpeg') } alt = "sites" style = {{float:'center', width:'25%'}}></img>
                <a href="https://www.taobao.com">Taobao</a>
                <font size="5">My favorite online-shopping website.</font>
            </div>
        </div>  
    );
  }
}
export default FavoriteWebsites;
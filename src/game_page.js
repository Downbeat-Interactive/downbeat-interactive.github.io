'use strict';
import ErrorBoundary from './error_boundary.js';
import GameFeatureFull from './game_features.js';
import data from './game_data.js'
import {Header, Footer, NavigationMenu} from './common_components.js'

let domContainer = document.querySelector('#app_container');

function getData(id){
    for (let i = 0; i < data.length; i++) {
        const game = data[i];
        if(game.id == id){
            return data[i];
        }
    }

}



class GamePage extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.id = domContainer.getAttribute("game");
        this.props.data = getData(this.id);
    }
    render(){
        var game = this.props.data;
        console.log(game);
        document.title = game.title + " | Downbeat Games";
      return (
        <div>
            <Header/>
            <NavigationMenu/>
            <section className="wrapper style3 align-center">
            <div className="game-page-feature-container">
            <GameFeatureFull  
                key={game.id} 
                id={game.id} 
                title={game.title} 
                url={game.url} 
                description={game.description} 
                videoUrl={game.videoUrl}
                storeUrl={game.storeUrl}
                subtitle={game.subtitle}
                videoDimensions={game.videoDimensions}
            /></div></section>
            <Footer/>
        </div>
      );
    }
  
}

  

ReactDOM.render(<GamePage/>, domContainer);
'use strict';
import ErrorBoundary from './error_boundary.js';
import {GameFeatureFull, GameFeatureScreenshots} from './game_features.js';
import data from './game_data.js'
import {Header, Footer, NavigationMenu, Content} from './common_components.js'

let domContainer = document.querySelector('#app_container');

function getData(id){
    for (let i = 0; i < data.length; i++) {
        const game = data[i];
        if(game.id == id){
            return data[i];
        }
    }
    return data[0];
}



class GamePage extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.id = domContainer.getAttribute("game");
        this.props.data = getData(this.id);
        this.props.html = domContainer.getAttribute("html-data");
    }
    render(){
        var game = this.props.data;
        if(game.title.length>0){
            document.title = game.title + " | Downbeat Games";
            
          return (
            <div>
                <Header fixed="true"/>
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
                    bundle={game.bundle}
                    subtitle={game.subtitle}
                    videoDimensions={game.videoDimensions}
                    showPrivacyURL = "true"
                /></div>
                 <ErrorBoundary>
                    <GameFeatureScreenshots data={game}/>
                </ErrorBoundary>
                </section>
                <Footer/>
            </div>
          );
        }
        else return( <div>
            <Header fixed="true"/>
            <NavigationMenu/>
            <Content html={this.props.html}/>
            <Footer/>
        </div>);
    }
  
}

  

ReactDOM.render(<GamePage />, domContainer);
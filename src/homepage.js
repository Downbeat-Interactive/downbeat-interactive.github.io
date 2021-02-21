'use strict';
import {GameFeatureFull, GameFeatureScreenshots} from './game_features.js';
import ErrorBoundary from './error_boundary.js';
import data from './game_data.js'
import {Header, Footer, NavigationMenu} from './common_components.js'

let domContainer = document.querySelector('#app_container');

class HomePageBanner extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }
  componentDidMount(){
    var vid = document.getElementById('banner-video');
    vid.addEventListener("timeupdate", function () {
      if (vid.currentTime > vid.duration - 0.5) {
        vid.pause();
      }
    });
  }


  render(){
    var output = (<section id="top-banner" className="banner full">
    <article>
      <video id='banner-video' loop muted poster="images/intro.png" >
          <source src="images/intro.webm" type="video/webm"/>
          <source src="images/intro.mp4" type="video/mp4"/>
          <img id="first-img" src="images/intro.png" alt="" />
      </video>
        <div className="inner">
            <a href="#about">
                <header>
                    <p></p>
                    <h2>Welcome</h2>
                </header>
            </a>
        </div>
    </article>
  </section>)
   

    return  output;
  }
}
  
class HomePageFeatures extends React.Component{
  render(){
    return <ErrorBoundary showBack={true}>
    {data.map(game => (
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
        />
    ))}
    </ErrorBoundary>
  }

}

class HomePage extends React.Component{
  render(){
    return (
      <div>
          <Header/>
          <NavigationMenu data={data}/>
          <HomePageBanner />
          <HomePageFeatures/>
          <Footer/>
      </div>
    );
  }

}



ReactDOM.render(<HomePage/>, domContainer);
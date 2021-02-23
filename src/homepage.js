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
    var output = (
      <section id="top-banner" className="banner full">
      <HomePageBannerArticle 
        id="first-img" 
        poster="images/intro.png" 
        webm="images/intro.webm" 
        mp4="images/intro.mp4"
        title="Welcome"
        subtitle=""
        link="" />
      <HomePageBannerArticle 
        poster="images/dandy-tiny.jpg" 
        webm="images/dandy-short.webm" 
        mp4="images/dandy-short.mp4"
        title="Dandy Drift"
        subtitle="Our Games" 
        link="dandy-drift"
        />
       <HomePageBannerArticle 
        poster="images/dance-background.jpg" 
        // webm="images/dance-background.webm" 
        mp4="images/dance-background.mp4"
        title="Tactics Rush"
        subtitle="Our Games" 
        link="tactics-rush"
        />
      </section>
   
 )
   

    return  output;
  }
}
  


class HomePageBannerArticle extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.scrollTo = this.scrollTo.bind(this);
  }
  scrollTo(){
    const yOffset = -75; 
    var target = document.getElementById(this.props.link);
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  componentDidMount() {
    var elem = document.getElementById("header-"+this.props.link)
    if(elem!=null)
      elem.addEventListener("click",this.scrollTo);
   }
 

  render(){
    var header = null;
    if(this.props.link.length>0){
      
      header=  <a id={"header-"+this.props.link} className="click-pointer" ><header>
      <p>{this.props.subtitle}</p>
      <h2>{this.props.title}</h2>
  </header></a>
    }
    else{
      header=  <header>
      <p>{this.props.subtitle}</p>
      <h2>{this.props.title}</h2>
  </header>
    }

    return(
    
      <article>
        <video id='banner-video' loop muted poster={this.props.poster} >
            <source src={this.props.webm} type="video/webm"/>
            <source src={this.props.mp4} type="video/mp4"/>
            <img id={this.props.id} src={this.props.poster} alt="" />
        </video>
          <div className="inner" data-aos="flip-left" data-aos-delay="200">
                 {header}
          </div>
      </article>
    );
  }

}


class HomePageFeatures extends React.Component{
  render(){
    return <ErrorBoundary showBack={true}>
    {data.map(game => (
      <GameFeatureFull
        data={game} 
        showPlayStoreButton = "false"
        showPrivacyURL = "false"
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
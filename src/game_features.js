'use strict';
import ErrorBoundary from './error_boundary.js';
import {PrivacyLink, GamePageLink} from './common_components.js';
import * as gplay from '../node_modules/google-play-scraper/index.js'


class FeatureStoreButton extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }
  
    render(){
      if(typeof this.props.bundle !== 'undefined' && this.props.bundle.length>0)
        return <a target="_blank" href={"https://play.google.com/store/apps/details?id="+this.props.bundle}><img className="image-button" src="/images/google-play-download.png" alt="See on Google Play"/></a>
      else
        return <div/>
    }
  }
  
  class FeatureVideo extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }
    render(){
      if(typeof this.props.url !== 'undefined' && this.props.url.length>0){
          return (<ErrorBoundary showBack={false}>
          <div id={this.props.id + "-video"} className="iframe-container align-center">
            <iframe className="feature-iframe"
              width   = {this.props.width}
              height  = {this.props.height}
              src= {this.props.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          </ErrorBoundary>
        );
    }
    else
        return <div/>
    }
  }

  
  class GameFeatureFull extends React.Component {
    
    constructor(props){
      super(props);
      this.props = props;
    }
  
    render() {
      return <ErrorBoundary>
      <section className="wrapper style2">
            <div className="inner" >
                <div id={this.props.id} data-aos="fade-right" data-aos-delay="100" className="box align-center" >
                   <FeatureVideo url={this.props.videoUrl} id={this.props.id} />
                    
                    <div className="content">
                        <header className="align-center" data-aos="slide-left" data-aos-duration="400">
                            <p>{this.props.subtitle}</p>
                            <a className = "no-decoration" href={this.props.url}><h2 className="feature-title">{this.props.title}</h2></a>
                        </header>
                        <div className="align-center feature-content" data-aos="fade-up"  >
                          <div dangerouslySetInnerHTML={{__html: this.props.description, sanitize: true}} />
                          <br/>
                         <GamePageLink url={this.props.url}/>
                        </div>
                          
                        <footer className="align-center" data-aos="zoom-in">
                           <FeatureStoreButton bundle={this.props.bundle}/>
                        </footer>
                        <PrivacyLink url={this.props.url}/>
                    </div>
                </div>
                </div>
          </section>
          </ErrorBoundary> 
    }
  }



  class GameFeatureScreenshots extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }
  
    render(){
      
 
gplay.app({appId: 'com.google.android.apps.translate'})
  .then(console.log, console.log);
    }

  }
export default GameFeatureFull;
export {
  GameFeatureFull,
  GameFeatureScreenshots
}

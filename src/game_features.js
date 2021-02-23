'use strict';
import ErrorBoundary from './error_boundary.js';
import {PrivacyLink, GamePageLink} from './common_components.js';
import {GooglePlayScraper} from './utils.js'

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
          <div id={this.props.id + "-video"} className="iframe-container align-center feature-video">
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

  
  class BoxFull extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }
    render(){
      return  <section className="wrapper style2">
      <div className="inner" >
          <div id={this.props.id} data-aos="fade-right" data-aos-delay="100" className="box align-center" >
          {this.props.inner}
          </div></div></section>
    }

  }

  class GameFeatureFull extends React.Component {
    
    constructor(props){
      super(props);
      this.props = props;
    }
  
    render() {
      if(this.props.id!='default' && this.props.id.length>0){
      return <ErrorBoundary>
     <BoxFull id={this.props.id} inner={<div>
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
                        <PrivacyLink url={this.props.url} show={this.props.showPrivacyURL}/>
                    </div>
                    </div>}/>
          </ErrorBoundary> }
          else{
            return null;
          }
    }
  }



  class GameFeatureScreenshots extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
      this.data=props.data;
    }
  
    render(){
        if(this.data.nScreens>0){
          var output = [];

          output.push( );
          for(var i=0; i<this.data.nScreens; i++){
              output.push(<a><img className="game-screenshot" src={this.props.data.url + "/screens/"+i.toString() + ".png"}/></a>);
          }     

         return <BoxFull id={this.props.data.id} inner={
           <div className="content">
            <header className="align-center" data-aos="slide-left" data-aos-mirror="false" data-aos-duration="400">
                            <p>{this.props.data.title}</p>
                            <a className = "no-decoration" ><h2 className="feature-title">Screenshots</h2></a>
                        </header>
                        <div className="align-center feature-content"  >
                          <br/>
                        </div>
                 <div className="screenshots-container" data-aos="flip-left" data-aos-duration="500">
                 {output}
                 </div>
                 <div/>
           </div>
           }

           />
        }
        else
        return null;
     
    }

  }
export default GameFeatureFull;
export {
  GameFeatureFull,
  GameFeatureScreenshots
}

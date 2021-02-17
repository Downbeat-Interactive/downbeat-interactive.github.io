'use strict';
import ErrorBoundary from './error_boundary.js';
import data from './game_data.js'
import GameFeatureFull from './game_features.js';

class NavigationMenu extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
      return (
        <ErrorBoundary>
        <nav id="menu">
        
          <ul className="links">
         
            <li key="home">
              <a href="/">Home</a>
            </li>
                {data.map(game => (
                <li  
                key={game.id} 
                title={game.title} 
                ><a href ={"/#"+game.id}>{game.title}</a></li>
                ))}
                <li><a target = "_blank" href="https://us2.list-manage.com/contact-form?u=6567dd34ecd4d4f21831b0826&form_id=89b3517fe84a4fe3f83c5ce30f6cef7f">Contact Us</a></li>
          </ul>
        </nav>
        </ErrorBoundary>
      );
  
    }
  }
  
  class Header extends React.Component{
    render(){
      return (
        <ErrorBoundary>
        <header id="header" className="alt">
          <div className="logo"><a href="/">Downbeat <span>| Interactive LLC</span></a></div>
          <a href="#menu">Menu</a>
        </header>
        </ErrorBoundary>
      )
  
    }
  }
  
  
  class Socials extends React.Component{
    render(){
      return(
          <ErrorBoundary>
            <ul className="icons">
                    <li key="item0">
                      <a
                        target="_blank "
                        href="https://twitter.com/DownbeatGames "
                        className="icon fa-twitter "
                      >
                        <span className="label ">Twitter</span>
                      </a>
                    </li>
                    <li key="item1">
                      <a
                        target="_blank "
                        href="https://www.facebook.com/downbeat.interactive"
                        className="icon fa-facebook "
                      >
                        <span className="label ">Facebook</span>
                      </a>
                    </li>
                    <li key="item2">
                      <a
                        target="_blank "
                        href="https://www.instagram.com/downbeat.interactive/ "
                        className="icon fa-instagram "
                      >
                        <span className="label ">Instagram</span>
                      </a>
                    </li>
                    <li key="item3">
                      <a
                        target="_blank "
                        href="https://www.youtube.com/channel/UCWCmhKBiBgqx-RswULM0uoQ "
                        className="icon fa-youtube "
                      >
                        <span className="label ">YouTube</span>
                      </a>
                    </li>
                    <li key="item4">
                      <a
                        target="_blank "
                        href="https://downbeat-interactive.itch.io/"
                        className="icon fa-itch-io "
                      >
                        <span className="label ">Itch</span>
                      </a>
                    </li>
                    <li key="item5">
                      <a
                        target="_blank "
                        href="https://us2.list-manage.com/contact-form?u=6567dd34ecd4d4f21831b0826&form_id=89b3517fe84a4fe3f83c5ce30f6cef7f"
                        className="icon fa-envelope "
                      >
                        <span className="label ">Email</span>
                      </a>
                    </li>
                  </ul>
          </ErrorBoundary>
      )
    }
  
  }

  class PrivacyLink extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }
    render(){
      if(typeof this.props.url !== 'undefined' && this.props.url.length>0){
          return (<ErrorBoundary showBack={false}>
            <a href={this.props.url+"/privacy-policy/"}><p>Privacy Policy</p></a>
          </ErrorBoundary>
        );
    }
    else
        return <div/>
    }
  }

  class GamePageLink extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }
    render(){
      if(typeof this.props.url !== 'undefined' && this.props.url.length>0){
          return (<ErrorBoundary showBack={false}>
           <a href={this.props.url}><p>More info <i className="fas fa-arrow-right"/></p></a>
          </ErrorBoundary>
        );
    }
    else
        return <div/>
    }
  }
  
  class Footer extends React.Component{
    render(){
        return (
          <ErrorBoundary>
            <footer id="footer" className="downbeat-footer">
              <div className="container align-center">
                <Socials/>
              </div>
              <div className="copyright downbeat-copyright">
                <div className="content copyright align-center">
                  Downbeat Interactive LLC
                  <br /> Google Play and the Google Play logo are trademarks of
                  Google LLC.
                  <br />
                </div>
              </div>
            </footer>
          </ErrorBoundary>
        );
      
    }
  
  }
 
  class Content extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }
    render(){
      return <div>
      <ErrorBoundary>
      <section className="wrapper style2">
            <div className="inner" >
                <div id={this.props.id} data-aos="fade-right" data-aos-delay="100" className="box align-center" >
                    <div className="content">
                        <div className="align-center feature-content" data-aos="fade-up"  >
                          <div  className="align-center feature-content" dangerouslySetInnerHTML={{__html: this.props.html, sanitize: true}} />
                          <br/>
                        </div>
                    </div>
                </div>
                </div>
          </section>
     


        </ErrorBoundary>
      </div>
    }
  }
  export {
        NavigationMenu, 
        Header,
        Footer,
        PrivacyLink,
        GamePageLink,
        Content,
        Socials}

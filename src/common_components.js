'use strict';
import ErrorBoundary from './error_boundary.js';
import data from './game_data.js'

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
                        href="mailto:connect@downbeat.games"
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

  export {
        NavigationMenu, 
        Header,
        Footer,
        Socials}

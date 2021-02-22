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
              <a href="/"><i class="fas fa-home"></i>    Home</a>
            </li>
              <GamesDropdown />
            <li><a target = "_blank" href="https://us2.list-manage.com/contact-form?u=6567dd34ecd4d4f21831b0826&form_id=89b3517fe84a4fe3f83c5ce30f6cef7f">
                <i class="fas fa-envelope"></i>    Contact Us</a></li>
            <li> <a target="_blank"
                        href="http://eepurl.com/hqpHjL"
                      ><i class="fas fa-bullhorn"></i>    Get our newsletter</a></li>
          </ul>
        </nav>
        </ErrorBoundary>

      );
  
    }
  }
  

  class GamesDropdown extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
      this.clickExpandGames = this.clickExpandGames.bind(this);
      this.state = {listExpanded: false};
    }



  clickExpandGames(e){
    // e.preventDefault();
    // e.stopPropagation();
    this.setState((state,props) => ({ listExpanded: !this.state.listExpanded    }));

    var list = document.getElementById("game-list");

    var dropdown = document.getElementById("games-dropdown");
    if(this.state.listExpanded){
      dropdown.classList.remove("fa-chevron-down");
      dropdown.classList.add("fa-chevron-up");
      list.classList.add("show");
      list.classList.remove("hide");
      var index = 0;
      list.childNodes.forEach(element => {
        element.classList.remove("hide");
        element.classList.add("show-"+index);
        index++;
      });
    }
    else{
      dropdown.classList.remove("fa-chevron-up");
      dropdown.classList.add("fa-chevron-down");
      list.classList.add("hide");
      list.classList.remove("show");
      var index = 0;
      list.childNodes.forEach(element => {
        element.classList.add("hide");
        element.classList.remove("show-"+index);
        index++;
      });
    }


  }
  componentDidMount() {
   document.getElementById("games-li").addEventListener("click",this.clickExpandGames);
  }

  

    render(){
          return <li id= "games-li" className="game-list" key = "games">
            <a> <i class="fas fa-gamepad"></i>    Games   <i id="games-dropdown" class="fas fa-chevron-down"></i></a>
                <ul id="game-list" className="links align-right hide">
                    {data.filter(game=>game.title.length>0).map(game => (
                      <li className="game-list-item hide"key={game.id} title={game.title}>
                        <a href ={game.url}>{game.title}</a>
                      </li>
                    ))}
              </ul>
            </li>
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
      if(this.props.show=='true'&&typeof this.props.url !== 'undefined' && this.props.url.length>0){
          return (<ErrorBoundary showBack={false}>
            <a href={this.props.url+"/privacy-policy/"}><p>Privacy Policy</p></a>
          </ErrorBoundary>
        );
    }
    else
        return null
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

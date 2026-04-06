'use strict';
import ErrorBoundary from './error_boundary.js';
import mobileData from './mobile_game_data.js'

class NavigationMenu extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
      }
      clickMenu(){
        var target = document.getElementById("menu");
        target.style.zIndex = 10;
        target.style.visibility="visible";
        target.style.transform = "translateX(0)";
        const y = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    
    
      componentDidMount(){
        if(this.props.dandy == "true")
          document.getElementById("menu-button").addEventListener("click",this.clickMenu);
      }

    render(){

      return (
        <ErrorBoundary>
        <nav id="menu">
          <ul className="links">
            <li key="home">
              <a href="/"><i class="fas fa-home"></i>    Home</a>
            </li>
            <li key="about">
              <a href="/about/"><i class="fas fa-info-circle"></i>    About Us</a>
            </li>
              <GamesDropdown data={this.props.data}/>
            <li><a target = "_blank" href="https://us7.list-manage.com/contact-form?u=38cc654b1acbc51ccf30871b4&form_id=e7f0d3184720285b9c1a3012f721277c">
                <i class="fas fa-envelope"></i>    Contact Us</a></li>
            <li> <a target="_blank"
                        href="https://mailchi.mp/5a08e8f7d203/subscribe"
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
      this.clickExpandMobile = this.clickExpandMobile.bind(this);
      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.rootRef = React.createRef();
      this.state = {listExpanded: false, mobileListExpanded: false};
      
    }


  componentDidMount(){
    if(this.rootRef.current)
      this.rootRef.current.addEventListener('click', this.handleMenuClick);
  }

  componentWillUnmount(){
    if(this.rootRef.current)
      this.rootRef.current.removeEventListener('click', this.handleMenuClick);
  }

  handleMenuClick(e){
    const target = e.target;
    const gamesToggle = target.closest && target.closest('.game-list-toggle');

    if(gamesToggle && this.rootRef.current.contains(gamesToggle)){
      this.clickExpandGames(e);
      return;
    }

    const mobileToggle = target.closest && target.closest('.game-list-group-toggle');

    if(mobileToggle && this.rootRef.current.contains(mobileToggle))
      this.clickExpandMobile(e);
  }


  clickExpandGames(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState((state) => ({
      listExpanded: !state.listExpanded,
      mobileListExpanded: state.listExpanded ? false : state.mobileListExpanded
    }));


  }
  clickExpandMobile(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState((state) => ({ mobileListExpanded: !state.mobileListExpanded }));
  }
    render(){
          const pageData = Array.isArray(this.props.data) ? this.props.data : [];
          const games = [...mobileData, ...pageData].filter((game, index, array) => (
            game.title.length>0 && array.findIndex(item => item.id == game.id) == index
          ));
          const mobileGameIds = new Set(mobileData.map(game => game.id));
          const mobileGames = games.filter(game => mobileGameIds.has(game.id));
          const directGames = games.filter(game => !mobileGameIds.has(game.id));
          const topLevelItems = [];

          if(mobileGames.length > 0){
            topLevelItems.push({
              key: 'mobile-games',
              title: 'Mobile',
              type: 'group',
              games: mobileGames
            });
          }

          directGames.forEach(game => {
            topLevelItems.push({
              key: game.id,
              title: game.title,
              type: 'link',
              url: game.url
            });
          });

          return <li ref={this.rootRef} id= "games-li" className="game-list" key = "games">
            <button type="button" className="game-list-toggle"> <i class="fas fa-gamepad"></i>    Games   <i id="games-dropdown" class={"fas "+(this.state.listExpanded?"fa-chevron-up":"fa-chevron-down")}></i></button>
                <ul id="game-list" className={"links align-right "+(this.state.listExpanded?"show":"hide")}>
                    {topLevelItems.map((item, index) => (
                      item.type == 'group' ?
                      <li className={"game-list-item game-list-group "+(this.state.listExpanded?"show-"+index:"hide")} key={item.key} title={item.title}>
                        <button type="button" className="game-list-group-toggle">{item.title} <i className={"fas "+(this.state.mobileListExpanded?"fa-chevron-up":"fa-chevron-down")}></i></button>
                        <ul className={"game-sub-list "+(this.state.mobileListExpanded?"show":"hide")}>
                          {item.games.map(game => (
                            <li key={game.id} title={game.title}>
                              <a href ={game.url}>{game.title}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      :
                      <li className={"game-list-item "+(this.state.listExpanded?"show-"+index:"hide")} key={item.key} title={item.title}>
                        <a href ={item.url}>{item.title}</a>
                      </li>
                    ))}
              </ul>
            </li>
    }

  }


  class Header extends React.Component{
    constructor(props){
      super(props);
      this.props = props;
    }

    render(){
      return (
        <ErrorBoundary>
        <header id="header" className={this.props.fixed=="true"?"":"alt"}>
          <div className="logo"><a href="/">Downbeat <span>| Interactive LLC</span></a></div>
          <a id="menu-button" href="#menu">Menu</a>
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
                          href="https://discord.gg/9BH7a6QEh5"
                          className="icon fa-discord "
                        >
                          <span className="label ">Discord</span>
                        </a>
                      </li>
                      <li key="item6">
                      <a
                        target="_blank "
                        href="https://us7.list-manage.com/contact-form?u=38cc654b1acbc51ccf30871b4&form_id=e7f0d3184720285b9c1a3012f721277c"
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

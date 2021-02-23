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
                data={game} 
                showPlayStoreButton = "true"
                showPrivacyURL = "true"
                />
               </div>
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

  
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });


ReactDOM.render(<GamePage />, domContainer);
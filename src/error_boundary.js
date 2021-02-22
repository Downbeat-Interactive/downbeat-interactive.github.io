'use strict';
export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {    // Update state so the next render will show the fallback UI.    
      return { hasError: true };  
    }
    componentDidCatch(error, errorInfo) {    // You can also log the error to an error reporting service    
      console.log(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {         
        return (
          <div className="box error">
            <div className="inner">
              <h3 className="align-center">
                <b>
                  <i className="fas fa-exclamation-circle"></i> Uh oh! Something
                  went wrong. <i className="fas fa-bug"></i>
                </b>
                <br/>
                <br/>
                {this.props.showBack ? 
                  <a href="/"><p><i className="fas fa-arrow-left"></i> Return to Downbeat</p></a>
                  :<div/>}
              </h3>
            </div>
          </div>
        );
        }
        return this.props.children; 
    }
  }
  
  export default ErrorBoundary;
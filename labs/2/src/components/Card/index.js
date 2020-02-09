import "./index.css"

class Card {
    set component(component) {
      this.component = component;
      this.props = props;
    }
    get component() {
      return this.component;
    }
    
    constructor(elementTag) {
      this.element = document.createElement(elementTag);
      document.body.appendChild(this.element);
    }
    
    render() {
      this.element.innerHTML = this.component.render();
    }
  
  }

export default Card;


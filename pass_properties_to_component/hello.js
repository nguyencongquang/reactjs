'use strict';
const e = React.createElement;
class HelloWorld extends React.Component {

    render() {
        return e(
            'div',
            null,
            `Hello ${this.props.name}`
        );
    }
}


const domContainer = document.querySelector('#root');
ReactDOM.render(e(HelloWorld, {name: 'world'}), domContainer);

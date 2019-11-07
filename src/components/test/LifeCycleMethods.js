import React, { Component } from 'react';

class LifeCycleMethods extends Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        console.log('Component Did Mount');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({
                title: json.title,
                body: json.body
            }));
    }

    // componentWillMount() {
    //     console.log('Component Will Mount');
    // }

    // componentDidUpdate() {
    //     console.log('Component Did Update');
    // }

    // componentWillUpdate() {
    //     console.log('Component Will Update');
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('Component Will Receive Props');
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null;
    // }

    render() {
        return (
            <div>
                <h1>LifeCycleMethods</h1>
            </div>
        );
    }
}

export default LifeCycleMethods;
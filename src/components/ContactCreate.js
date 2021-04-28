import React from 'react';

export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        let nextState = {};
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        }

        this.props.onCreate(contact);

        this.setState({name: '', phone: ''});
    }

    handleKeyPress(event) {
        if(event.charCode === 13) {//엔터누를 누르면
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.handleClick}>Create</button>
                </p>
            </div>
        );
    }
}

ContactCreate.defaultProps = {
    onCreate: () => {console.error("onCrteate not defined"); }
}
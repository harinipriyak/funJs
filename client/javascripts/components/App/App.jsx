import React from 'react';

class App extends React.Component{
constructor(props){
    super(props);
    this.state = {
        value: ''
    }

    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
    this.setState({value: event.target.value});
    }

getemployeeName = () => {
    this.props.callgetemployeeName(this.state.value);
}

render(){

    return(
        <React.Fragment>
            <section className="body">                    
                <h1 className="title">Here you go!  Enter employee Id [1/2]</h1>
                <div className="example">
                <input className="example__input-box" type="text" value={this.state.value} onChange={this.handleChange} />
                <input className="example__submit-box" type="submit" value="GET EMPLOYEE NAME" onClick={this.getemployeeName} /> 
                <div className = "example__result">{this.props.result}</div>    
                </div>               
            </section>
        </React.Fragment>
    )
}
}

export default App;

const voteData = [
    {
        name: "Berlin",
        country : "Germany"
    }, 
    {
        name: "Paris",
        country: "France"
    }
];

class Hello extends React.Component {
    render() {
        return <h1>Hello, React!!!!!</h1>;
    }
}


class City extends React.Component {
    render() {
        return <div class="city">{this.props.name}, <br/> {this.props.country} </div>;
    }
}

/*
class Vote extends React.Component {
    render() {
        return(
                <div>
                    <City name="Berlin" country="Germany" /> 
                    <City name="Rome" country="Italy" />
                </div>
        );
    }
}


<City name="{this.props.voteData[0].name}" country="{this.props.voteData[0].country}" /> 
<City name="{this.props.voteData[1].name}" country="{this.props.voteData[1].country}" /> 


*/

class Vote extends React.Component {
    render() {
        return(
                <div>
                    <City name={this.props.voteData[0].name} country={this.props.voteData[0].country} /> 
                    <City name={this.props.voteData[1].name} country={this.props.voteData[1].country} /> 
                </div>
        );
    }
}

const test = ["11111", "22222"];

ReactDOM.render(
    <Vote voteData={voteData} />,
    document.getElementById("app")
);

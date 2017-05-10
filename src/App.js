import React, {Component} from "react";
import "./App.css";
import axios from "axios";

const AWSLambdaApiURL = "https://y1ye4cr14g.execute-api.eu-central-1.amazonaws.com/prod/aws-lambda-twilio-prod-sendText";

class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			to: '',
			message: ''
		}
	}
	
	onPhoneNumberChanged(e) {
		this.setState({to: Object.assign({}, this.state.to, {to: e.target.value})})
	}
	
	onMessageChanged(e) {
		this.setState({message: Object.assign({}, this.state.message, {message: e.target.value})})
	}
	
	sendSmsMessage() {
		
		const payload = {
			to: this.state.to,
			message: this.state.message
		}
		
		console.log("Sending sms with payload " + JSON.stringify(payload));
		
		axios.post(AWSLambdaApiURL, {
				to: payload.to,
				message: payload.message
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		
	}
	
	render() {
		return (
			<div className="App">
				<h1>A Serverless API deployed in AWS Lambda made by Jun Huh</h1>
				<div class="inputs">
					<input id="phone-number" placeholder="Phone Number" onChange={this.onPhoneNumberChanged.bind(this)}/>
					<input id="text" placeholder="Input your text message" onChange={this.onMessageChanged.bind(this)}/>
				</div>
				<div class='api-actions'>
					<button id="send-text" class="btn" onClick={this.sendSmsMessage.bind(this)}>Send Text</button>
				</div>
			</div>
		);
	}
}

export default App;
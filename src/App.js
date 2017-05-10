import React, {Component} from "react";
import "./App.css";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
const AWSLambdaApiURL = "https://y1ye4cr14g.execute-api.eu-central-1.amazonaws.com/prod/aws-lambda-twilio-prod-sendText";

const styles = {
	wrapper: {
		display: 'block',
		flexWrap: 'wrap'
	},
	button: {
		margin: 10
	}
};
injectTapEventPlugin();

class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			to: '',
			message: ''
		}
	}
	
	onPhoneNumberChanged(e) {
		this.setState({to: e.target.value})
	}
	
	onMessageChanged(e) {
		this.setState({message: e.target.value})
	}
	
	sendSmsMessage() {
		
		const payload = {
			to: this.state.to,
			message: this.state.message
		};
		
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
			<MuiThemeProvider>
				<div className="App">
					<h1>A Serverless API deployed in AWS Lambda made by Jun Huh</h1>
					<div style={styles.wrapper}>
						<TextField floatingLabelText="Phone Number... (+460701712323)" name="Phone Number" value={this.state.to} onChange={this.onPhoneNumberChanged.bind(this)}/>
					</div>
					<div style={styles.wrapper}>
						<TextField hintText="Text message..." multiLine={true} fullWidth={false} value={this.state.message} onChange={this.onMessageChanged.bind(this)}/>
					</div>
					<div style={styles.button}>
						<RaisedButton primary={true} onClick={this.sendSmsMessage.bind(this)} label="Send SMS"/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
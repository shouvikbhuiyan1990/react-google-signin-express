import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './App.css';

function App() {
	const getAllUsers = async () => {
		const data = await axios.get('/user/authenticated/getAll');
		console.log(data);
	}
	const responseGoogle = async (response) => {
		const bodyObject = {
			authId: response.tokenId
		};
		await axios.post('/login/user', bodyObject);
	}
	return (
		<div className="App">
			<header className="App-header">
				<p>Google Login Raect/Node/Express</p>
			</header>
			<body>
				<GoogleLogin
					clientId="752664132019-6vnl4no33uaarqe6jdqfhubttd0ac5h6.apps.googleusercontent.com"
					render={renderProps => (
						<button className='btn g-sigin'
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							<p>Continue with Google</p>
						</button>
					)}
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
				<button onClick={getAllUsers}>Get All Users in db</button>
			</body>
		</div>
	);
}

export default App;

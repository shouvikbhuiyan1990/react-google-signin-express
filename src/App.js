import GoogleLogin from 'react-google-login';
import './App.css';

function App() {
	const responseGoogle = (response) => {
		debugger
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
			</body>
		</div>
	);
}

export default App;

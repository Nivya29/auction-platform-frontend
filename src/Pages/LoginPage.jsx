
import LoginForm from '../Components/LoginForm';
import BackgroundContainer from '../Components/BackgroundContainer';


const LoginPage = () => {
  const handleLogin = (values) => {
    console.log('Logging in with:', values);
  };

  return (
    <BackgroundContainer>
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
    </BackgroundContainer>
  );
};
export default LoginPage;

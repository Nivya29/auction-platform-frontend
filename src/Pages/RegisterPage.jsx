
import RegisterForm from '../Components/RegisterForm';
import BackgroundContainer from '../Components/BackgroundContainer';

const RegisterPage = () => {
  const handleRegister = async (values) => {
    try {
      
      console.log('Registering user with:', values);

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Registration failed');
    }
  };

  return (
    <BackgroundContainer>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
    </BackgroundContainer>
  );
};

export default RegisterPage;

import './App.css'
import SignUp from './components/signup'
import ImgOfSignUp from './components/image'
export default function App() {
  return (
    <main className='Main'>
      <SignUp />
      <ImgOfSignUp src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1697035438~exp=1697036038~hmac=a5049e17561662c9e62e4dcfef94d817bbeb4049726cfc45943f7e1b874e45bc" alt="SignUp" />
    </main>
  )
}

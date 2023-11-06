import { useState, useNavigate, useEffect } from "react"
import { GetNewsService } from '../../services/ApiService'


export const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  //const navigate = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value);
  }

  const onPassChange = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userBody = {
      email: email,
      password: password
    };
    try {
      await GetNewsService.createUser(userBody.email, userBody.password)
    } catch (error) {
      console.log(error, 'ups')
    }

  }

  return (
    <>
      <div className={"mainContainer mt-32 ml-56"}>
        <div className={"titleContainer"}>
          <div>Sign Up</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={onEmailChange}
            className={"inputBox"} />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={onPassChange}
            className={"inputBox"} />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <button onClick={handleSubmit}>Sign up</button>
        </div>

      </div>
    </>
  )
}

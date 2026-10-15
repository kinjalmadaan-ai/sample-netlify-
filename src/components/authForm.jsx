import { useState } from "react";
import { useAuth } from  "../context/authContext"

//Defalut Function
export default function AuthForm(){
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const {signup, login, loginWithGoogle} = useAuth();

    //Handle Submit Function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setSubmitting(true);
        setError("");
        try{
            if(isRegister){
                await signup(email,password);
            }else{
                await login(email,password);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    }
    const handleGoogleLogin = async () => {
        setSubmitting(true);
        setError("");
        try {
            await loginWithGoogle();
        } catch (error) {
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    }
    return(
        <div>
            <h2>{isRegister? "Create an account" : "Welcome Back"}</h2>
            <p>{isRegister? "Sign up to get started" : "Sign in to continue"}</p>
            {error && <p>{error}</p>}
            <button onClick={handleGoogleLogin} disabled={submitting}>Sign in with google</button>
            <span>or continue with email</span>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email address:</label>
                    <input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="someone@example.com"></input>
                </div>
                <div>
                    <label>Passowrd:</label>
                    <input type="password" required value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="enter your password"></input>
                </div>
                <button type="submit" disabled={submitting}> {submitting ? "Submitting..." : isRegister ? "Sign Up" : "Sign In" } </button>
                
            </form>

            <p>
                {isRegister ? "Already have an account?":"Don't have an account?"}
                <button onClick={()=> {setIsRegister(!isRegister);
                    setError("")
                }}>
                    {isRegister ? "Sign In" : "Sign Up"}
                </button>
            </p>
        </div>
    )
}
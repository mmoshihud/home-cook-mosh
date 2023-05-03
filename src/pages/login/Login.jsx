import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import app from "../../utilities/firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [warning, setWarning] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email.length < 2) {
      setWarning("Warning: Invalid email address!");
      return;
    }
    event.target.reset();
    setWarning("");
    console.log(email, password);
  };

  const showPasswordHandle = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form
        onSubmit={handleLoginForm}
        className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <div className="w-1/3 rounded-2xl bg-white p-6 shadow-2xl">
          <Link
            to="/"
            className="mb-8 block rounded-xl bg-amber-800 p-4 text-center text-2xl font-semibold text-white"
          >
            Home Cook by Mosh
          </Link>
          {warning ? (
            <div className="alert alert-warning mb-4 shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{warning}</span>
              </div>
            </div>
          ) : (
            ""
          )}

          <h1 className="mb-3 text-center text-4xl font-bold">Login</h1>
          <label className="mb-2 block text-xl" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Email"
          />
          <label className="mb-2 block text-xl" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Password"
          />
          <button
            onClick={showPasswordHandle}
            className="mb-4 text-amber-900 underline"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          <p className="mb-4 font-bold">
            Sign in With
            <svg
              onClick={handleGoogleLogin}
              className="ml-2 inline w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            <svg
              onClick={handleGithubLogin}
              className="ml-2 inline w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </p>
          <p className="mb-4">
            By clicking Create Account, you acknowledge you have read and agreed
            to our Terms of Use and Privacy Policy.
          </p>
          <Link to="/register" className="text-amber-900 underline">
            New here? Click here to Sign Up
          </Link>
          <button
            type="submit"
            className="mt-4 w-full rounded-xl border-2 border-amber-900 bg-amber-900 px-5 py-2 text-xl font-bold text-white hover:bg-transparent hover:text-amber-900"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;

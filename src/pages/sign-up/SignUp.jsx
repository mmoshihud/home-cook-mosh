import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../utilities/firebase";

const SignUp = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [warning, setWarning] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignUpForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirm.value;
    const photoUrl = event.target.photo_url.value;

    if (email.length < 1) {
      setWarning("Warning: Invalid email address!");
      setError("");
      setSuccess("");
      return;
    }
    if (password.length < 6) {
      setError("The Password is less than 6 characters");
      setWarning("");
      setSuccess("");
      return;
    }
    if (password !== confirmPassword) {
      setError("The Password didn't match");
      setWarning("");
      setSuccess("");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        console.log(user);
        setError("");
        setWarning("");
        setSuccess("You have successfully registered");
        event.target.reset();
      })
      .catch((error) => {
        setWarning("");
        setSuccess("");
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setError("");
        setWarning("");
        setSuccess("You have successfully Logged in through Google");
      })
      .catch((error) => {
        setWarning("");
        setSuccess("");
        setError(error.message);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setError("");
        setWarning("");
        setSuccess("You have successfully Logged in through GitHub");
      })
      .catch((error) => {
        setWarning("");
        setSuccess("");
        setError(error.message);
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };

  const showPasswordHandle = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <>
      <form
        onSubmit={handleSignUpForm}
        className="flex h-screen items-center justify-center bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500"
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
          {error ? (
            <div className="alert alert-error mb-4 shadow-lg">
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
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          ) : (
            ""
          )}
          {success ? (
            <div className="alert alert-success mb-4 shadow-lg">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{success}</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <h1 className="mb-3 text-center text-4xl font-bold">Registration</h1>
          <label className="mb-2 block text-xl" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Full Name"
          />
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
          <label className="mb-2 block text-xl" htmlFor="confirm">
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirm"
            className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Confirm Password"
          />
          <label className="mb-2 block text-xl" htmlFor="photo_url">
            Photo Url
          </label>
          <input
            type="text"
            name="photo_url"
            className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
            placeholder="Enter Photo URL"
          />
          <button
            onClick={showPasswordHandle}
            className="mb-4 text-amber-900 underline"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          <p className="mb-4 font-bold">
            Sign in With
            <FaGoogle onClick={handleGoogleLogin} className="mx-2 inline" />
            <FaGithub onClick={handleGithubLogin} className="inline" />
          </p>
          <p className="mb-4">
            By clicking Create Account, you acknowledge you have read and agreed
            to our Terms of Use and Privacy Policy.
          </p>
          <Link to="/login" className="text-amber-900 underline">
            Already have an Account? Click here to Login
          </Link>
          <button
            type="submit"
            className="mt-4 w-full rounded-xl border-2 border-amber-900 bg-amber-900 px-5 py-2 text-xl font-bold text-white hover:bg-transparent hover:text-amber-900"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;

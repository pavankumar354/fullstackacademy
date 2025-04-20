import React, { useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
// import apiList from '../../src/Services/apiList';
import '../styles/SignUpPage.css';
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Please enter your email");
    } else if (password === "") {
      toast.error("Please enter your password");
    } else {
      try {
        if (isLogin) {
          // ✅ LOGIN
          try {
            const response = await axios.post("https://fsa-backend-m95b.onrender.com/loginUser", {
              email,
              password,
            }, {
              withCredentials: true
            });
        
            toast.success(response.data.message);
            alert("Login successful"); // ✅ ALERT ON SUCCESS
        
            // Store user in localStorage
            localStorage.setItem("user", JSON.stringify(response.data.user));
        
            // Clear fields
            setEmail("");
            setPassword("");
        
            // Redirect
            navigate("/dashboard");
        
          } catch (error) {
            const msg = error.response?.data?.message || "Something went wrong";
            toast.error(msg);
            alert("Login failed: " + msg); // ✅ ALERT ON FAILURE
          }
        }
         else {
          // ✅ SIGNUP
          const response = await axios.post("https://fsa-backend-m95b.onrender.com/CreateUsers", {
            firstName,
            lastName,
            zip,
            email,
            phone,
            password,
          }, {
            withCredentials: true // ✅ Ensures session cookie is sent
          });

          toast.success(response.data.message || "Signup successful");
          alert("Signup Successful")
          // Clear all fields
          setFirstName("");
          setLastName("");
          setZip("");
          setEmail("");
          setPhone("");
          setPassword("");

          // ✅ Replace alert with toast
          toast.success("Signup Successful");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    // navigate("/login");
  }

  return (
    <div className="signup-page">
      <div className="signup-left">
        <div className="text-box">
          <h1>Intro to Coding</h1>
          <p>
            See if coding is the challenge you’ve been looking for — this online course taught
            through videos and challenges will set you up for bootcamp success.
          </p>
        </div>
      </div>
      <div className="signup-right">
        <div className="form-box">
          <h2>{isLogin ? 'Login to your account' : 'Get starter course today for free'}</h2>
          <form className="form2" onSubmit={signupHandler}>
            {!isLogin && (
              <>
                <div className="row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">Zip Code</label>
                    <input
                      id="zip"
                      type="text"
                      placeholder="Zip Code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password {isLogin ? '' : '(Must include uppercase, number & special character)'}
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                pattern={!isLogin ? "(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{6,}" : undefined}
                title={
                  !isLogin
                    ? 'Must contain at least one uppercase letter, one number, one special character, and be at least 6 characters long'
                    : undefined
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group checkbox">
                <label>
                  <input type="checkbox" required />
                  I consent to receive phone calls or text messages from Fullstack Academy...
                </label>
              </div>
            )}

            <button className="submit-btn" type="submit">
              {isLogin ? 'LOGIN' : 'SIGN UP'}
            </button>

            <div className="form-links">
              {isLogin ? (
                <>
                  <button type="button" onClick={() => alert('Redirect to password recovery')}>
                    Forgot password?
                  </button>
                  <button type="button" onClick={() => setIsLogin(false)}>
                    Sign Up
                  </button>
                </>
              ) : (
                <button type="button" onClick={() => setIsLogin(true)}>
                  Already have an account? Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

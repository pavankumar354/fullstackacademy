import React, { useState } from 'react';
import '../styles/SignUpPage.css';

const SignUpPage = () => {
  const [isLogin, setIsLogin] = useState(false);

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
          <form>
            {!isLogin && (
              <>
                <div className="row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" placeholder="First Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">Zip Code</label>
                    <input id="zip" type="text" placeholder="Zip Code" required />
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Email" required />
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
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group checkbox">
                <label>
                  <input type="checkbox" />
                  I consent to receive phone calls or text messages from Fullstack Academy...
                </label>
              </div>
            )}

            <button className="submit-btn" type="submit">
              {isLogin ? 'LOGIN' : 'SIGN UP'}
            </button>

            {isLogin ? (
              <div className="form-links">
                <button type="button" onClick={() => alert('Redirect to password recovery')}>
                  Forgot password?
                </button>
                <button type="button" onClick={() => setIsLogin(false)}>
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="form-links">
                <button type="button" onClick={() => setIsLogin(true)}>
                  Already have an account? Login
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

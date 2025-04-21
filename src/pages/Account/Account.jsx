import React, { useState } from 'react';
import styles from './Account.module.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.accountPage}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${isLogin ? styles.active : ''}`}
              onClick={() => setIsLogin(true)}
            >
              SIGN IN
            </button>
            <button 
              className={`${styles.tab} ${!isLogin ? styles.active : ''}`}
              onClick={() => setIsLogin(false)}
            >
              JOIN
            </button>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {!isLogin && (
              <>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">FIRST NAME:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">LAST NAME:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div className={styles.formGroup}>
              <label htmlFor="email">EMAIL ADDRESS:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">PASSWORD:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isLogin && (
                <button type="button" className={styles.forgotPassword}>
                  Forgot password?
                </button>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              {isLogin ? 'SIGN IN' : 'JOIN JUSA'}
            </button>

            {!isLogin && (
              <p className={styles.terms}>
                By creating your account, you agree to our{' '}
                <a href="#terms">Terms & Conditions</a> and{' '}
                <a href="#privacy">Privacy Policy</a>
              </p>
            )}
          </form>

          <div className={styles.socialLogin}>
            <p>OR SIGN IN WITH:</p>
            <div className={styles.socialButtons}>
              <button className={`${styles.socialButton} ${styles.google}`}>
                <i className="fab fa-google"></i> GOOGLE
              </button>
              <button className={`${styles.socialButton} ${styles.facebook}`}>
                <i className="fab fa-facebook-f"></i> FACEBOOK
              </button>
              <button className={`${styles.socialButton} ${styles.apple}`}>
                <i className="fab fa-apple"></i> APPLE
              </button>
            </div>
          </div>
        </div>

        <div className={styles.benefits}>
          <h2>BENEFITS OF JOINING JUSA:</h2>
          <ul>
            <li>
              <i className="fas fa-truck"></i>
              <span>Free Delivery</span>
              <p>Get complimentary standard delivery on all orders</p>
            </li>
            <li>
              <i className="fas fa-gift"></i>
              <span>Birthday Treat</span>
              <p>Receive exclusive offers on your birthday</p>
            </li>
            <li>
              <i className="fas fa-percent"></i>
              <span>Exclusive Discounts</span>
              <p>Be the first to know about sales and special offers</p>
            </li>
            <li>
              <i className="fas fa-heart"></i>
              <span>Saved Items</span>
              <p>Create wishlists and save your favorite items</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;

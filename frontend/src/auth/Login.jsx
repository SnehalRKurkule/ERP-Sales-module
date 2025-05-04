// import React, { useState } from "react";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/auth/login", {
//         email,
//         password,
//       });

//       // Assuming token or user data is returned
//       setMessage("Login successful!");
//       console.log(response.data);

//       // You can redirect or save token to localStorage here
//       // localStorage.setItem("token", response.data.token);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import axios from "axios";
// import "./Login.css";
// import image from "../assets/image.png"; // update path if needed

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/auth/login", {
//         email,
//         password,
//       });

//       setMessage("Login successful!");
//       console.log(response.data);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-image">
//         <img src={image} alt="conveyor" />
//       </div>

//       <div className="login-container">
//         <form className="login-form" onSubmit={handleLogin}>
//           <h2>Sign In</h2>

//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           {message && <p className="message">{message}</p>}

//           <button type="submit">Sign In</button>

//           <p className="register-text">
//             Not Registered? <a href="/register">Register</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import image from "../assets/image.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      setMessage("Login successful!");
      console.log(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-image">
        <div className="image-overlay"></div>
        <img src={image} alt="conveyor" />
        <div className="image-content">
          <h2>Welcome Back</h2>
          <p>Streamline your workflow with our powerful platform</p>
        </div>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-header">
            <h2>Sign In</h2>
            <p>Please enter your credentials</p>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className={`message ${message.includes("success") ? "success" : "error"}`}>
              {message}
            </p>
          )}

          <button type="submit" className="login-button">
            <span>Sign In</span>
          </button>

          <div className="form-footer">
            <p className="register-text">
              Not Registered? <a href="/register">Create an account</a>
            </p>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
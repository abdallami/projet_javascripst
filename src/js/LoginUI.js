import Auth from "./Auth.js";

const mainApp = document.querySelector(".main");

class LoginUI {
  setLoginPage() {
    mainApp.innerHTML = `
    <div class="login-container" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div class="login-box">
        <h1>🏪 Gestion d'E-Stock</h1>
        <p class="login-subtitle">Connexion</p>
        
        <form id="loginForm">
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="votre@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Votre mot de passe"
              required
            />
          </div>

          <button type="submit" class="login-btn">Se connecter</button>
          
          <p class="signup-link">
            Pas encore de compte? 
            <a href="#" id="signupLink">S'inscrire</a>
          </p>
          
          <div style="background: #f0f0f0; padding: 10px; margin-top: 15px; border-radius: 5px; font-size: 12px;">
            <p style="margin: 0; font-weight: bold;">👤 Compte admin :</p>
            <p style="margin: 5px 0 0 0;">📧 admin@stock.com</p>
            <p style="margin: 5px 0 0 0;">🔑 admin123</p>
            <p style="margin: 5px 0 0 0;">Pour client s'inscrire et se connecter</p>
          </div>
        </form>

        <div id="loginMessage" class="login-message"></div>
      </div>
    </div>
    `;

    const loginForm = document.getElementById("loginForm");
    const signupLink = document.getElementById("signupLink");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleLogin();
    });

    signupLink.addEventListener("click", (e) => {
      e.preventDefault();
      this.setSignupPage();
    });
  }

  setSignupPage() {
    mainApp.innerHTML = `
    <div class="login-container" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div class="login-box style="
      justify-content: center; align-items: center;
      height: 50%;
  ">
        <h1>🏪 Gestion d'E-Stock</h1>
        <p class="login-subtitle">Créer un compte</p>
        
        <form id="signupForm">
          <div class="form-group">
            <label for="fullName">Nom complet:</label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Votre nom"
              required
            />
          </div>

          <div class="form-group">
            <label for="signupEmail">Email:</label>
            <input 
              type="email" 
              id="signupEmail" 
              placeholder="votre@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="signupPassword">Mot de passe:</label>
            <input 
              type="password" 
              id="signupPassword" 
              placeholder="Au moins 6 caractères"
              required
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirmer mot de passe:</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirmer mot de passe"
              required
            />
          </div>

          <button type="submit" class="login-btn">S'inscrire</button>
          
          <p class="signup-link">
            Vous avez un compte? 
            <a href="#" id="loginLink">Se connecter</a>
          </p>
        </form>

        <div id="signupMessage" class="login-message"></div>
      </div>
    </div>
    `;

    const signupForm = document.getElementById("signupForm");
    const loginLink = document.getElementById("loginLink");

    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSignup();
    });

    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      this.setLoginPage();
    });
  }

  handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("loginMessage");

    const result = Auth.login(email, password);
    
    if (result.success) {
      messageDiv.innerHTML = `<p class="success">✅ ${result.message}</p>`;
      setTimeout(() => {
        // ✅ Appelle la fonction pour charger l'app
        window.initializeApp();
      }, 1000);
    } else {
      messageDiv.innerHTML = `<p class="error">❌ ${result.message}</p>`;
    }
  }

  handleSignup() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageDiv = document.getElementById("signupMessage");

    if (password !== confirmPassword) {
      messageDiv.innerHTML = `<p class="error">❌ Les mots de passe ne correspondent pas!</p>`;
      return;
    }

    if (password.length < 6) {
      messageDiv.innerHTML = `<p class="error">❌ Le mot de passe doit avoir au moins 6 caractères!</p>`;
      return;
    }

    const result = Auth.registerUser({
      fullName,
      email,
      password,
      role: "client"
    });

    if (result.success) {
      messageDiv.innerHTML = `<p class="success">✅ ${result.message} Connecte-toi maintenant!</p>`;
      setTimeout(() => {
        this.setLoginPage();
      }, 1500);
    } else {
      messageDiv.innerHTML = `<p class="error">❌ ${result.message}</p>`;
    }
  }
}

export default new LoginUI();
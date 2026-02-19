class Authentication {
  constructor() {
    // ✅ NE PAS charger l'utilisateur au démarrage
    this.currentUser = null;
  }

  // Enregistrer un nouvel utilisateur
  registerUser(data) {
    const users = this.getAllUsers();
    
    const existingUser = users.find(u => u.email === data.email);
    if (existingUser) {
      return { success: false, message: "Cet email existe déjà!" };
    }

    const newUser = {
      id: new Date().getTime(),
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      role: data.role || "client",
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(users));
    
    return { success: true, message: "Utilisateur créé avec succès!" };
  }

  // Se connecter
  login(email, password) {
    const users = this.getAllUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: "Email ou mot de passe incorrect!" };
    }

    // ✅ Sauvegarde explicitement dans localStorage
    localStorage.setItem("CurrentUser", JSON.stringify(user));
    this.currentUser = user;
    
    return { success: true, message: "Connexion réussie!", user };
  }

  // Se déconnecter
  logout() {
    // ✅ Supprime complètement la session
    localStorage.removeItem("CurrentUser");
    this.currentUser = null;
  }

  // Obtenir l'utilisateur actuel
  getCurrentUser() {
    return this.currentUser;
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn() {
    // ✅ Vérifie dans localStorage, pas juste this.currentUser
    const user = localStorage.getItem("CurrentUser");
    if (user) {
      this.currentUser = JSON.parse(user);
      return true;
    }
    return false;
  }

  // Vérifier si l'utilisateur est admin
  isAdmin() {
    return this.currentUser && this.currentUser.role === "admin";
  }

  // Obtenir tous les utilisateurs
  getAllUsers() {
    const users = localStorage.getItem("Users");
    return users ? JSON.parse(users) : [];
  }

  // Créer l'admin par défaut UNE SEULE FOIS
  initializeDefaultAdmin() {
    const users = this.getAllUsers();
    const adminExists = users.find(u => u.email === "admin@stock.com");
    
    if (!adminExists) {
      const adminUser = {
        id: 1,
        email: "admin@stock.com",
        password: "admin123",
        fullName: "Administrateur",
        role: "admin",
        createdAt: new Date().toISOString()
      };
      users.push(adminUser);
      localStorage.setItem("Users", JSON.stringify(users));
      console.log("✅ Admin créé par défaut");
    }
  }
}

export default new Authentication();
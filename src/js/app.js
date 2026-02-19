import DashboardUi from "./Dashboard.js";
import InventoryUi from "./InventoryView.js";
import CategoryUi from "./categoryView.js";
import Auth from "./Auth.js";
import LoginUI from "./LoginUI.js";

const mainApp = document.querySelector(".main");

// ✅ AU DÉMARRAGE
document.addEventListener("DOMContentLoaded", () => {
  // Créer l'admin par défaut (une seule fois)
  Auth.initializeDefaultAdmin();

  // ✅ TOUJOURS afficher la page de login d'abord
  LoginUI.setLoginPage();
});

// ✅ Fonction pour afficher l'application après login
function initializeApp() {
  setupNavbar();

  const dashboardBtns = [...document.querySelectorAll(".sideBar__dashboard")];
  const inventoryBtns = [...document.querySelectorAll(".sideBar__inventory")];
  const categoryBtns = [...document.querySelectorAll(".sideBar__setting")];
  const menuToggle = document.querySelector(".menu-toggle");
  const sideBarOnToggle = document.querySelector(".sideBar-ontoggle");
  const sideBarBackdrop = document.querySelector(".sideBar-ontoggle-backdrop");
  const searchBar = document.querySelector(".searchBarInput");

  const app = new App(
    dashboardBtns,
    inventoryBtns,
    categoryBtns,
    menuToggle,
    sideBarOnToggle,
    sideBarBackdrop,
    searchBar
  );

  app.addEventListeners();
  CategoryUi.updateCategoryOptions();
  DashboardUi.setApp();
}

// ✅ Afficher les infos utilisateur et le bouton déconnexion
function setupNavbar() {
  const user = Auth.getCurrentUser();
  
  // Chercher la barre de navigation
  let navbar = document.querySelector(".sideBar__top");
  
  if (!navbar) {
    // Si elle n'existe pas, chercher la sidebar
    const sidebar = document.querySelector(".sideBar");
    if (sidebar) {
      navbar = document.createElement("div");
      navbar.className = "sideBar__top";
      sidebar.insertBefore(navbar, sidebar.firstChild);
    }
  }

  if (navbar) {
    // Vider la navbar d'abord (pour éviter les doublons)
    navbar.innerHTML = "";

    // ===== INFOS UTILISATEUR =====
    const userInfo = document.createElement("div");
    userInfo.style.cssText = `
      padding: 15px;
      border-bottom: 1px solid #e0e0e0;
      text-align: center;
      background: #f8f9fa;
      border-radius: 5px;
      margin: 4px;
    `;
    userInfo.innerHTML = `
      <p style="margin: 0 0 5px 0; font-size: 11px; color: #999; text-transform: uppercase;">📌 Utilisateur actif</p>
      <p style="margin: 0; font-size: 14px; font-weight: bold; color: #333;">${user.fullName}</p>
      <p style="margin: 5px 0 0 0; font-size: 12px; padding: 5px; background: ${
        user.role === "admin" ? "#fff3cd" : "#d1ecf1"
      }; border-radius: 3px; color: ${user.role === "admin" ? "#856404" : "#0c5460"};">
        ${user.role === "admin" ? "👑 Administrateur" : "👤 Client"}
      </p>
    `;

    navbar.appendChild(userInfo);

    // ===== BOUTON DÉCONNEXION =====
    const logoutBtnContainer = document.createElement("div");
    logoutBtnContainer.style.cssText = `
      padding: 10px;
      text-align: center;
    `;

    const logoutBtn = document.createElement("button");
    logoutBtn.type = "button";
    logoutBtn.textContent = "🚪 Se déconnecter";
    logoutBtn.style.cssText = `
      width: 90%;
      padding: 12px;
      background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 5px rgba(231, 76, 60, 0.3);
    `;

    // ===== ÉVÉNEMENTS =====
    logoutBtn.addEventListener("mouseover", () => {
      logoutBtn.style.transform = "translateY(-2px)";
      logoutBtn.style.boxShadow = "0 5px 15px rgba(231, 76, 60, 0.4)";
    });

    logoutBtn.addEventListener("mouseout", () => {
      logoutBtn.style.transform = "translateY(0)";
      logoutBtn.style.boxShadow = "0 2px 5px rgba(231, 76, 60, 0.3)";
    });

    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (confirm("Es-tu sûr de vouloir te déconnecter ?")) {
        Auth.logout();
        window.location.reload();
      }
    });

    logoutBtnContainer.appendChild(logoutBtn);
    navbar.appendChild(logoutBtnContainer);

    console.log("✅ Bouton déconnexion ajouté avec succès!");
  }

  // Masquer les catégories pour les clients
  if (!Auth.isAdmin()) {
    const categoryBtns = document.querySelectorAll(".sideBar__setting");
    categoryBtns.forEach(btn => {
      btn.parentElement.style.display = "none";
    });
  }
}
class App {
  constructor(
    dashboardBtns,
    inventoryBtns,
    categoryBtns,
    menuToggle,
    sideBarOnToggle,
    sideBarBackdrop,
    searchBar,
    
  ) {
    this.dashboardBtns = dashboardBtns;
    this.inventoryBtns = inventoryBtns;
    this.categoryBtns = categoryBtns;
    this.menuToggle = menuToggle;
    this.sideBarOnToggle = sideBarOnToggle;
    this.sideBarBackdrop = sideBarBackdrop;
    this.searchBar = searchBar;
 this.categoryBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // ✅ Le bouton est visible, mais on affiche une page protégée
    this.categoryBtnLogic(e);
    this.hideMenu();
  });
});
  }

  addEventListeners() {
    this.dashboardBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.dashboardBtnLogic(e);
        this.hideMenu();
      });
    });

    this.inventoryBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.inventoryBtnLogic(e);
        this.hideMenu();
      });
    });

    this.categoryBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (Auth.isAdmin()) {
          this.categoryBtnLogic(e);
          this.hideMenu();
        } else {
          alert("❌ Accès réservé aux administrateurs!");
        }
      });
    });

    this.menuToggle.addEventListener("click", () => {
      this.menuToggleLogic();
    });

    this.sideBarBackdrop.addEventListener("click", () => {
      this.hideMenu();
    });

    this.searchBar.addEventListener("input", () => {
      this.searchInputLogic();
      this.hideMenu();
      this.inventoryBtns.forEach((btn) =>
        btn.classList.add("--selectedBtnUi")
      );
    });
  }

  searchInputLogic() {
    InventoryUi.setApp();
    InventoryUi.seachLogic(this.searchBar.value);
    this.removeCurrentSelectedBtn();
  }

  dashboardBtnLogic(event) {
    DashboardUi.setApp();
    this.searchBar.value = "";
    this.removeCurrentSelectedBtn();
    event.target.classList.add("--selectedBtnUi");
  }

  inventoryBtnLogic(event) {
    InventoryUi.setApp();
    this.searchBar.value = "";
    this.removeCurrentSelectedBtn();
    event.target.classList.add("--selectedBtnUi");
  }

  categoryBtnLogic(event) {
    CategoryUi.setApp();
    this.searchBar.value = "";
    this.removeCurrentSelectedBtn();
    event.target.classList.add("--selectedBtnUi");
  }

  menuToggleLogic() {
    this.sideBarOnToggle.classList.remove("--hidden");
    this.sideBarBackdrop.classList.remove("--hidden");
  }

  hideMenu() {
    this.sideBarOnToggle.classList.add("--hidden");
    this.sideBarBackdrop.classList.add("--hidden");
  }

  removeCurrentSelectedBtn() {
    const allBtns = [
      ...this.dashboardBtns,
      ...this.inventoryBtns,
      ...this.categoryBtns
    ];
    allBtns.forEach((btn) => btn.classList.remove("--selectedBtnUi"));
  }
}

// ✅ Exporter pour être utilisée dans LoginUI
window.initializeApp = initializeApp;
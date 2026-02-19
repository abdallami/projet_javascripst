import Storage from "./API.js";
import Auth from "./Auth.js";

const mainApp = document.querySelector(".main");
const addProModal = document.querySelector(".addProSection");
const ProModalAddBtn = document.querySelector(".addProModalSubmitBtn");
const ProModalCancelBtn = document.querySelector(".addProModalCancelBtn");
const ModalTitle = document.querySelector(".addProModal__title");

const productNameInput = document.querySelector(".productNameInput");
const categoryInput = document.querySelector("#categoryInput");
const productQuantityInput = document.querySelector(".productQuantityInput");
const productPriceInput = document.querySelector(".productPriceInput");

const searchBar = document.querySelector(".searchBarInput");

class InventoryUi {
  constructor() {
    this.id = 0;
    ProModalAddBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.addProductModalLogic();
    });
    ProModalCancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeProductModal();
    });

    addProModal.addEventListener("click", (e) => {
      if (e.target.classList.contains("addProSection")) {
        this.closeProductModal(e);
      }
    });
  }

  setApp() {
    const isAdmin = Auth.isAdmin();

    mainApp.innerHTML = `
    <div class="inventory-app">
        <div class="product-section__header">
        <h1>📦 Produits</h1>
        <div class="product-section__header__buttons">
            ${isAdmin ? '<button class="addProBtn">➕ Ajouter Produit</button>' : ''}
        </div>
        </div>

        <div class="product-section">
        <table class ="product-section-table">
        </table>
        </div>
    </div>`;

    // Si c'est un admin, ajouter l'événement du bouton
    if (isAdmin) {
      const addProBtn = document.querySelector(".addProBtn");
      if (addProBtn) {
        addProBtn.addEventListener("click", () => {
          ModalTitle.textContent = "📝 Nouveau Produit";
          ProModalAddBtn.textContent = "Ajouter";
          this.openProductModal();
        });
      }
    }

    this.productSectionHTMl = document.querySelector(".product-section-table");
    this.updateDom(Storage.getProducts());
  }

  updateDom(allProducts) {
    const isAdmin = Auth.isAdmin();

    let result = `
    <tr class="table__title">
        <td>Produit</td>
        <td>Quantité</td>
        <td>Prix</td>
        <td>Catégorie</td>
        ${isAdmin ? '<td>Actions</td>' : ''}
    </tr>    
    `;

    allProducts.forEach((product) => {
      result += this.createProductHTML(product, isAdmin);
    });

    this.productSectionHTMl.innerHTML = result;

    if (isAdmin) {
      const deleteBtns = document.querySelectorAll(".deleteIcon");
      deleteBtns.forEach((deleteBtn) =>
        deleteBtn.addEventListener("click", (e) => {
          const id = Number(e.target.dataset.id);
          this.deleteBtnLogic(id);
        })
      );

      const editBtns = document.querySelectorAll(".editIcon");
      editBtns.forEach((editBtn) =>
        editBtn.addEventListener("click", (e) => {
          const id = Number(e.target.dataset.id);
          this.editBtnLogic(id);
        })
      );
    }
  }

createProductHTML(product, isAdmin) {
  return `
  <tr>
    <td>${product.title}</td>
    <td>${product.quantity}</td>
    <td>$${product.price}</td>
    <td>${product.category}</td>
    ${isAdmin ? `
    <td>
      <svg class="icon editIcon" data-id="${product.id}" style="cursor: pointer; margin-right: 10px;" title="Modifier">
        <use xlink:href="../assets/images/sprite.svg#editIcon"></use>
      </svg>
      <img
        src="../assets/images/deleteIcon.svg"
        alt="Supprimer"
        class="deleteIcon"
        data-id="${product.id}"
        style="cursor: pointer; width: 20px;"
        title="Supprimer"
      />
    </td>
    ` : `
    <td style="color: #999; font-size: 12px;">👤 Lecture seule</td>
    `}
  </tr>`;
}

  openProductModal() {
    addProModal.classList.remove("--hidden");
    this.clearInputs();
  }

  closeProductModal() {
    addProModal.classList.add("--hidden");
    this.clearInputs();
    this.id = 0;
  }

  clearInputs() {
    productNameInput.value = "";
    productQuantityInput.value = "";
    productPriceInput.value = "";
    categoryInput.value = "";
  }

  addProductModalLogic() {
    // ✅ Vérifier si c'est un admin
    if (!Auth.isAdmin()) {
      alert("❌ Vous n'avez pas la permission d'ajouter des produits!");
      return;
    }

    if (
      productNameInput.value === "" ||
      productQuantityInput.value === "" ||
      productPriceInput.value === "" ||
      categoryInput.value === ""
    ) {
      alert("❌ Veuillez remplir tous les champs!");
      return;
    }

    const productData = {
      id: this.id,
      title: productNameInput.value,
      quantity: Number(productQuantityInput.value),
      price: Number(productPriceInput.value),
      category: categoryInput.value
    };

    Storage.saveProduct(productData);
    this.setApp();
    this.closeProductModal();
  }

  editBtnLogic(id) {
    // ✅ Vérifier si c'est un admin
    if (!Auth.isAdmin()) {
      alert("❌ Vous n'avez pas la permission de modifier les produits!");
      return;
    }

    const allProducts = Storage.getProducts();
    const product = allProducts.find((p) => p.id === id);

    if (product) {
      this.id = id;
      productNameInput.value = product.title;
      productQuantityInput.value = product.quantity;
      productPriceInput.value = product.price;
      categoryInput.value = product.category;

      ModalTitle.textContent = "✏️ Modifier Produit";
      ProModalAddBtn.textContent = "Mettre à jour";
      this.openProductModal();
    }
  }

  deleteBtnLogic(id) {
    // ✅ Vérifier si c'est un admin
    if (!Auth.isAdmin()) {
      alert("❌ Vous n'avez pas la permission de supprimer les produits!");
      return;
    }

    if (confirm("Es-tu sûr de vouloir supprimer ce produit ?")) {
      Storage.deleteProduct(id);
      this.setApp();
    }
  }

  seachLogic(searchTerm) {
    const allProducts = Storage.getProducts();
    const filteredProducts = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.updateDom(filteredProducts);
  }
}

export default new InventoryUi();
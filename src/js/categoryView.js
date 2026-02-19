import Storage from "./API.js";
import Auth from "./Auth.js";

const mainApp = document.querySelector(".main");

const categoryModal = document.querySelector(".EditCategorySection");
const categoryBack = document.querySelector(".EditCategorySection");
const cancelBtnEdit = document.querySelector(".cancelBtnEdit");
const categoryModTitle = document.querySelector(".EditCatMod__title");

const editTitleInput = document.querySelector("#editTitle");
const editDesInput = document.querySelector("#editDescription");

const submitBtnEdit = document.querySelector(".submitBtnEdit");

const categoryInput = document.querySelector("#categoryInput");

class CategoryUi {
  constructor() {
    this.id = 0;
    cancelBtnEdit.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeCategoryModal();
    });

    categoryBack.addEventListener("click", (e) => {
      if (e.target.classList.contains("EditCategorySection"))
        this.closeCategoryModal();
    });

    submitBtnEdit.addEventListener("click", (e) => {
      e.preventDefault();
      this.submitBtnLogic();
    });
  }

  setApp() {
    const isAdmin = Auth.isAdmin();

    // ✅ AFFICHER TOUJOURS LA PAGE, MAIS AVEC CONTENU DIFFÉRENT
    if (!isAdmin) {
      // Les clients voient juste les catégories, pas de bouton d'ajout
      mainApp.innerHTML = `
      <div class="categoryUi">
          <div class="category__header">
              <h1>📂 Catégories</h1>
              <p style="color: #999; font-size: 14px;">👤 Lecture seule - Vous n'avez pas accès à la modification</p>
          </div>
          <div class="category__items">
             
          </div>
      </div>
      `;
    } else {
      // Les admins voient le bouton d'ajout
      mainApp.innerHTML = `
      <div class="categoryUi">
          <div class="category__header">
              <h1>📂 Catégories</h1>
              <button class="addCategoryBtn">➕ Ajouter Catégorie</button>
          </div>
          <div class="category__items">
             
          </div>
      </div>
      `;

      const addCategoryBtn = document.querySelector(".addCategoryBtn");
      if (addCategoryBtn) {
        addCategoryBtn.addEventListener("click", () => {
          categoryModTitle.textContent = "📝 Ajouter Catégorie";
          this.openCategoryModal();
        });
      }
    }

    this.HTMLContainer = document.querySelector(".category__items");
    this.updateDOM();
  }

  openCategoryModal() {
    categoryModal.classList.remove("--hidden");
    this.clearInputs();
  }

  closeCategoryModal() {
    categoryModal.classList.add("--hidden");
    this.clearInputs();
    this.id = 0;
  }

  createHTML(category) {
    const isAdmin = Auth.isAdmin();

    return `
     <div class="category__item">
        <div class="category__item__text">
            <h2 class="title">${category.title}</h2>
            <p class="description">${category.description}</p>
        </div>
        <div class="category__item__icons">
            ${isAdmin ? `
            <svg class="icon editCategoryIcon" data-id="${category.id}" style="cursor: pointer;">
                <use xlink:href="../assets/images/sprite.svg#editIcon"></use>
            </svg>
            <img
                src="../assets/images/deleteIcon.svg"
                alt="Supprimer"
                class="deleteBtnCategory"
                data-id="${category.id}"
                style="cursor: pointer;"
            />
            ` : `
            <p style="color: #999; font-size: 12px;">🔒 Modification refusée</p>
            `}
        </div>
    </div>`;
  }

  submitBtnLogic() {
    // ✅ Vérifier si c'est un admin
    if (!Auth.isAdmin()) {
      alert("❌ Vous n'avez pas la permission de modifier les catégories!");
      return;
    }

    if (editDesInput.value == "" || editTitleInput.value == "") {
      alert("❌ Veuillez remplir tous les champs!");
      return;
    }

    if (this.id != 0) {
      const allCategories = Storage.getCategories();
      const otherCategories = allCategories.filter(
        (category) => category.id != this.id
      );
      const existed = otherCategories.find(
        (category) =>
          category.title.toLowerCase().trim() ==
          editTitleInput.value.toLowerCase().trim()
      );
      if (existed) {
        alert("❌ Cette catégorie existe déjà!");
        return;
      }
    } else {
      const allCategories = Storage.getCategories();
      const existed = allCategories.find(
        (category) =>
          category.title.toLowerCase().trim() ==
          editTitleInput.value.toLowerCase().trim()
      );
      if (existed) {
        alert("❌ Cette catégorie existe déjà!");
        return;
      }
    }

    const data = {
      id: this.id,
      title: editTitleInput.value,
      description: editDesInput.value
    };

    Storage.saveCategorie(data);
    this.setApp();
    this.closeCategoryModal();
    this.updateCategoryOptions();
  }

  updateDOM() {
    const allCategories = Storage.getCategories();
    let result = "";

    allCategories.forEach((category) => {
      result += this.createHTML(category);
    });

    this.HTMLContainer.innerHTML = result;

    // ✅ SEULEMENT POUR LES ADMINS
    if (Auth.isAdmin()) {
      const editBtns = document.querySelectorAll(".editCategoryIcon");
      editBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = Number(e.target.dataset.id);
          this.editCategoryBtnLogic(id);
        });
      });

      const deleteBtns = document.querySelectorAll(".deleteBtnCategory");
      deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = Number(e.target.dataset.id);
          this.deleteCategoryLogic(id);
        });
      });
    }
  }

  editCategoryBtnLogic(id) {
    // ✅ Vérifier si c'est un admin
    if (!Auth.isAdmin()) {
      alert("❌ Vous n'avez pas la permission de modifier les catégories!");
      return;
    }

    const allCategories = Storage.getCategories();
    const category = allCategories.find((cat) => cat.id == id);

    if (category) {
      this.id = id;
      editTitleInput.value = category.title;
      editDesInput.value = category.description;
      categoryModTitle.textContent = "✏️ Modifier Catégorie";
      submitBtnEdit.textContent = "Mettre à jour";
      this.openCategoryModal();
    }
  }

  deleteCategoryLogic(id) {
    // ✅ Vérifier si c'est un admin
    if (!Auth.isAdmin()) {
      alert("❌ Vous n'avez pas la permission de supprimer les catégories!");
      return;
    }

    if (confirm("Es-tu sûr de vouloir supprimer cette catégorie ?")) {
      Storage.deleteCategory(id);
      this.setApp();
      this.updateCategoryOptions();
    }
  }

  clearInputs() {
    editTitleInput.value = "";
    editDesInput.value = "";
  }

  updateCategoryOptions() {
    const allCategories = Storage.getCategories();
    if (categoryInput) {
      categoryInput.innerHTML = '<option value="">Sélectionner une catégorie</option>';
      allCategories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.title;
        option.textContent = category.title;
        categoryInput.appendChild(option);
      });
    }
  }
}

export default new CategoryUi();
# 📖 GUIDE D'INSTALLATION COMPLET
## 🏪 Gestion d'E-Stock - Application Web

**Version :** 1.0  
**Date :** 19 Février 2026  
**Temps estimé :** ⏱️ 10 minutes

---

## 📑 TABLE DES MATIÈRES

1. [Vue d'ensemble](#vue-densemble)
2. [Configuration rapide](#configuration-rapide)
3. [Installation détaillée](#installation-détaillée)
4. [Utilisation de l'application](#utilisation-de-lapplication)
5. [Comptes de test](#comptes-de-test)
6. [Dépannage](#dépannage)

---
## ⚡ CONFIGURATION RAPIDE

**Si vous êtes pressé, voici les 5 étapes essentielles :**

```
ÉTAPE 1️⃣  → Extraire le fichier ZIP
         ↓
ÉTAPE 2️⃣  → Ouvrir le dossier dans VS Code
         ↓
ÉTAPE 3️⃣  → Installer l'extension Live Server
         ↓
ÉTAPE 4️⃣  → Lancer l'application (clic droit sur index.html qui est dans dossier publique )
         ↓
ÉTAPE 5️⃣  → Se connecter entend que admin ou creer un compte pour se connecter entend qu'un client pour tester.
         ↓

## 🎯 VUE D'ENSEMBLE

### Qu'est-ce que Gestion d'E-Stock ?

Une **application web complète de gestion d'inventaire** qui permet de :

✅ Gérer les produits et catégories  
✅ Consulter un dashboard avec statistiques  
✅ Contrôler l'accès selon les rôles (Admin/Client)  
✅ Rechercher et filtrer les produits  
✅ Stocker les données localement  

### Fonctionnalités principales

| Fonction | Admin | Client |
|----------|-------|--------|
| 📊 Voir le Dashboard | ✅ | ✅ |
| 📦 Voir les produits | ✅ | ✅ |
| ➕ Ajouter un produit | ✅ | ❌ |
| ✏️ Modifier un produit | ✅ | ❌ |
| 🗑️ Supprimer un produit | ✅ | ❌ |
| 📂 Gérer les catégories | ✅ | ❌ |
| 🔍 Rechercher | ✅ | ✅ |

---




## 📋 INSTALLATION DÉTAILLÉE

### PRÉREQUIS

**Avant de commencer, assurez-vous d'avoir :**

- ✅ **Un ordinateur** (Windows, Mac, Linux)
- ✅ **Un navigateur** (Chrome, Firefox, Safari, Edge)
- ✅ **Visual Studio Code** (gratuit) - [Télécharger ici](https://code.visualstudio.com/)
- ✅ **Le fichier ZIP** du projet

**Navigateurs recommandés :**
- 🥇 Google Chrome (meilleur)
- 🥈 Mozilla Firefox
- 🥉 Microsoft Edge
- Safari (Mac)

---

### ÉTAPE 1️⃣ : EXTRAIRE LE FICHIER

#### **Sur Windows :**

1. **Localisez le fichier ZIP** du projet
2. **Clic droit** sur le fichier
3. **Sélectionnez :** "Extraire tout..."
4. **Choisissez un dossier** de destination (ex: Bureau)
5. **Cliquez sur :** "Extraire"

```
Exemple :
C:\Users\VotreNom\Desktop\estock/
```

#### **Sur Mac :**

1. **Double-cliquez sur le fichier ZIP**
2. **Le dossier s'extrait automatiquement**
3. **Vous voyez un dossier `estock` ou `gestion-estock`**

#### **Sur Linux :**

```bash
unzip estock.zip
cd estock
```

✅ **Vous avez maintenant le dossier du projet !**

---

### ÉTAPE 2️⃣ : OUVRIR DANS VS CODE

#### **Méthode 1 : Par le menu** (plus simple)

1. **Ouvrez Visual Studio Code**
2. **Cliquez sur :** `File` (menu en haut)
3. **Sélectionnez :** `Open Folder...`

   ![File Menu](https://imgur.com/8P9k5wJ.png)

4. **Naviguez jusqu'au dossier du projet**
5. **Cliquez une fois sur le dossier** pour le sélectionner
6. **Cliquez sur :** `Select Folder` ou `Ouvrir`

7. **Attendez le chargement** (~2 secondes)

✅ **Vous voyez l'arborescence du projet à gauche**

#### **Méthode 2 : Par le clavier**

1. **Appuyez sur :** `Ctrl+K Ctrl+O` (ou `Cmd+K Cmd+O` sur Mac)
2. **Naviguez jusqu'au dossier**
3. **Cliquez sur "Select Folder"**

#### **Méthode 3 : Glisser-déposer**

1. **Glissez le dossier du projet**
2. **Déposez-le dans la fenêtre VS Code**

✅ **Le dossier s'ouvre !**

---

### ÉTAPE 3️⃣ : INSTALLER LIVE SERVER

**Live Server** permet de lancer l'application dans votre navigateur.

#### **Étapes d'installation :**

1. **Cliquez sur l'icône "Extensions"** à gauche
   - C'est le symbole des 4 carrés

   ![Extensions Icon](https://imgur.com/5K8rZ9J.png)

2. **Tapez dans la barre de recherche :**
   ```
   Live Server
   ```

3. **Vous voyez ce résultat :**

   ```
   Live Server
   ritwickdey.LiveServer
   ⭐⭐⭐⭐⭐ 5 stars
   ```

4. **Cliquez sur le bouton bleu "Install"**

   ![Install Button](https://imgur.com/K2z3pjQ.png)

5. **Attendez l'installation** (~10 secondes)

6. **Vous verrez "Reload" → Cliquez dessus**

✅ **Live Server est maintenant installé !**

---

### ÉTAPE 4️⃣ : NAVIGUER JUSQU'À INDEX.HTML

1. **À gauche, vous voyez l'arborescence du projet**

2. **Cherchez cette structure :**
   ```
   📁 estock/
      📁 public/
         📄 index.html ← CELUI-LÀ !
   ```

3. **Cliquez sur la flèche** `>` à côté de `public/` pour l'ouvrir

4. **Vous voyez maintenant `index.html`** ✅

---

### ÉTAPE 5️⃣ : LANCER L'APPLICATION

#### **La meilleure façon : Clic droit**

1. **Faites un clic droit** sur le fichier `index.html`

   ![Right Click Menu](https://imgur.com/9J2xK8L.png)

2. **Sélectionnez :** `Open with Live Server`

3. **Votre navigateur s'ouvre automatiquement** 🎉

#### **Alternative : Bouton "Go Live"**

1. **Cliquez sur `index.html`** (une seule fois)
2. **En bas à droite, vous verrez :**
   ```
   "Go Live"
   ```
3. **Cliquez dessus**
4. **Le navigateur s'ouvre** 🎉

✅ **L'application est maintenant lancée !**

---

## 🔐 UTILISATION DE L'APPLICATION

### Première connexion

**Voici ce que vous verrez :**

```
┌──────────────────────────────────────┐
│     🏪 Gestion d'E-Stock            │
│                                      │
│        📝 FORMULAIRE DE CONNEXION    │
│                                      │
│    Email : [____________________]    │
│    Mot de passe : [_____________]    │
│                                      │
│       [   Se connecter   ]           │
│                                      │
│    Pas de compte ? S'inscrire        │
│                                      │
│    👤 Compte de démo :               │
│    📧 admin@stock.com                │
│    🔑 admin123                       │
│                                      │
└──────────────────────────────────────┘
```

---

## 👥 COMPTES DE TEST

### Compte ADMIN fourni

```
Rôle : 👑 Administrateur
Email : admin@stock.com
Mot de passe : admin123

Accès : COMPLET
├─ ✅ Dashboard
├─ ✅ Voir les produits
├─ ✅ Ajouter des produits
├─ ✅ Modifier les produits
├─ ✅ Supprimer les produits
├─ ✅ Gérer les catégories
└─ ✅ Rechercher
```

**Comment se connecter en tant qu'Admin :**

1. **Tapez l'email :** `admin@stock.com`
2. **Tapez le mot de passe :** `admin123`
3. **Cliquez sur :** "Se connecter"
4. **Vous voyez le Dashboard** ✅

---

### Compte CLIENT (à créer)

```
Rôle : 👤 Client
Accès : LIMITÉ
├─ ✅ Dashboard (en lecture seule)
├─ ✅ Voir les produits (en lecture seule)
├─ ✅ Rechercher
├─ ❌ Ajouter des produits
├─ ❌ Modifier les produits
├─ ❌ Supprimer les produits
└─ ❌ Gérer les catégories
```

**Comment créer un compte Client :**

1. **Cliquez sur :** "S'inscrire"
2. **Remplissez les informations :**

   ```
   Nom complet : Jean Dupont
   Email : jean@example.com
   Mot de passe : motdepasse123
   Confirmer mot de passe : motdepasse123
   ```

3. **Cliquez sur :** "S'inscrire"
4. **Connectez-vous avec votre nouveau compte**
5. **Vous verrez une interface simplifiée** ✅

**Différence entre Admin et Client :**

| Fonctionnalité | Admin | Client |
|---|---|---|
| Voir Dashboard | ✅ | ✅ |
| Ajouter produit | ✅ ➕ | ❌ |
| Modifier produit | ✅ ✏️ | ❌ |
| Supprimer produit | ✅ 🗑️ | ❌ |
| Gérer catégories | ✅ | ❌ |

---

### Données de test incluses

L'application contient **50 produits** pré-chargés :

```
📦 ÉLECTRONIQUE (10 produits)
   - Smartphone X1
   - Laptop Pro
   - Casque Bluetooth
   - Et 7 autres...

👕 VÊTEMENTS (10 produits)
   - T-shirt Coton
   - Jeans Classique
   - Chaussures Sport
   - Et 7 autres...

📚 LIVRES (10 produits)
   - Harry Potter
   - 1984
   - Dune
   - Et 7 autres...

🍽️ ALIMENTS (10 produits)
   - Café Premium
   - Chocolat Noir
   - Riz Basmati
   - Et 7 autres...

🪑 MOBILIER (10 produits)
   - Bureau Moderne
   - Canapé 3 Places
   - Lit Queen
   - Et 7 autres...
```

---

## 🎮 COMMENT UTILISER L'APPLICATION

### En tant qu'ADMIN

#### 📊 Voir le Dashboard
```
1. Cliquez sur "📊 Dashboard"
2. Vous voyez les statistiques :
   - Nombre de produits
   - Quantité totale
   - Valeur totale
   - Nombre de catégories
```

#### 📦 Voir les produits
```
1. Cliquez sur "📦 Inventory"
2. Vous voyez un tableau avec tous les produits
3. Colonnes : Nom | Quantité | Prix | Catégorie | Actions
```

#### ➕ Ajouter un produit (Admin seulement)
```
1. Cliquez sur "➕ Ajouter Produit"
2. Une popup s'ouvre
3. Remplissez :
   - Nom du produit
   - Quantité
   - Prix
   - Catégorie
4. Cliquez sur "Ajouter"
5. Le produit apparaît dans la liste
```

#### ✏️ Modifier un produit (Admin seulement)
```
1. Allez dans "📦 Inventory"
2. Trouvez le produit à modifier
3. Cliquez sur l'icône ✏️ (modifier)
4. Modifiez les informations
5. Cliquez sur "Mettre à jour"
```

#### 🗑️ Supprimer un produit (Admin seulement)
```
1. Allez dans "📦 Inventory"
2. Trouvez le produit à supprimer
3. Cliquez sur l'icône 🗑️ (supprimer)
4. Confirmez la suppression
5. Le produit est supprimé
```

#### 📂 Gérer les catégories (Admin seulement)
```
1. Cliquez sur "📂 Catégories"
2. Vous voyez les catégories existantes
3. Cliquez sur "➕ Ajouter Catégorie" pour en ajouter
4. Cliquez sur ✏️ pour modifier
5. Cliquez sur 🗑️ pour supprimer
```

#### 🔍 Rechercher un produit
```
1. Allez dans "📦 Inventory"
2. Utilisez la barre de recherche en haut
3. Tapez le nom du produit
4. Les résultats s'affichent en temps réel
5. Appuyez sur Entrée ou attendez
```

### En tant que CLIENT

**Un Client voit la même interface, MAIS :**

```
❌ Pas de bouton "Ajouter Produit"
❌ Pas d'icônes "Modifier" ou "Supprimer"
❌ Section "Catégories" en lecture seule
✅ Peut voir le Dashboard
✅ Peut voir les produits
✅ Peut utiliser la recherche
```

---

## ❓ DÉPANNAGE

### ❌ Problème : "Module not found" ou erreurs

**Cause :** L'application est ouverte en mode `file://` au lieu de via Live Server

**Solution :**

```
❌ MAUVAIS :
   Double-cliquer sur index.html

✅ BON :
   Clic droit sur index.html → "Open with Live Server"
```

---

### ❌ Problème : Page blanche après "Open with Live Server"

**Solution :**

1. **Appuyez sur F12** pour ouvrir la console
2. **Vérifiez s'il y a des erreurs en rouge**
3. **Rechargez la page** : `Ctrl+R` ou `Cmd+R`
4. **Vide le cache** : `Ctrl+Shift+Delete`
5. **Redémarre VS Code**

---

### ❌ Problème : "Live Server" n'apparaît pas au clic droit

**Solution :**

1. **Allez dans "Extensions"** (icône carrés)
2. **Cherchez "Live Server"**
3. **Si vous ne le voyez pas, installez-le**
4. **Rechargez VS Code** : `Ctrl+Shift+P` → tapez "Reload Window"

---

### ❌ Problème : Impossible de se connecter

**Vérifiez :**

```
✅ Email : admin@stock.com (exact)
✅ Mot de passe : admin123 (exact)
✅ Pas d'espaces avant/après
✅ Pas de majuscules mal placées
```

**Si ça ne marche pas :**

1. **Appuyez sur F12**
2. **Allez dans "Application" → "Local Storage"**
3. **Cliquez sur votre domaine (http://localhost:...)**
4. **Supprimez tout** (Clic droit → "Delete")
5. **Rechargez la page**
6. **Réessayez**

---

### ❌ Problème : Les images ne s'affichent pas

**Solution :**

Vérifiez que le dossier `src/assets/` existe :

```
✅ Structure correcte :
estock/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
```

---

### ❌ Problème : Le style CSS ne s'applique pas

**Solution :**

1. **Assurez-vous que `src/css/styles.css` existe**
2. **Rechargez la page** : `Ctrl+Shift+R` (hard refresh)
3. **Videz le cache** : `Ctrl+Shift+Delete`

---

## 📞 SUPPORT

**Besoin d'aide ?**

📧 **Email :** [elikebir@gmail.com]  
💬 **Slack/Teams :** [abdallami.com]  
📱 **Téléphone :** [81708043]

**Avant de contacter, vérifiez :**

- ✅ Vous utilisez Live Server
- ✅ Vous êtes sur un navigateur moderne
- ✅ Vous avez suivi toutes les étapes
- ✅ Vous avez vidé le cache

---

## ✅ CHECKLIST DE DÉMARRAGE

Avant de tester, assurez-vous que :

- [ ] VS Code est installé
- [ ] Le dossier du projet est ouvert dans VS Code
- [ ] Live Server est installé
- [ ] Vous êtes dans le dossier `public/`
- [ ] Vous avez cliqué "Open with Live Server" sur `index.html`
- [ ] Le navigateur a ouvert la page automatiquement
- [ ] Vous voyez le formulaire de connexion
- [ ] Vous êtes prêt à tester ! 🎉

---

## 🎬 SCENARIO DE TEST COMPLET

### Scénario 1 : Tester en tant qu'Admin

```
⏱️ Durée : 5 minutes

1️⃣ Connectez-vous avec admin@stock.com / admin123
2️⃣ Allez sur le Dashboard
   → Vérifiez les statistiques
3️⃣ Allez sur Inventory
   → Vous voyez la liste des produits
4️⃣ Ajoutez un nouveau produit
   → Cliquez "➕ Ajouter Produit"
   → Remplissez les données
   → Cliquez "Ajouter"
5️⃣ Modifiez un produit
   → Cliquez sur l'icône ✏️
   → Changez les données
   → Cliquez "Mettre à jour"
6️⃣ Supprimez un produit
   → Cliquez sur l'icône 🗑️
   → Confirmez la suppression
7️⃣ Allez dans Catégories
   → Vous voyez toutes les catégories
   → Vous pouvez ajouter/modifier/supprimer
8️⃣ Testez la recherche
   → Tapez "Smartphone"
   → Vérifiez les résultats
9️⃣ Se déconnecter
   → Cliquez "🚪 Déconnexion"
   → Vous retournez au login
```

✅ **Tout fonctionne !**

---

### Scénario 2 : Tester en tant que Client

```
⏱️ Durée : 3 minutes

1️⃣ Créez un compte client
   → Cliquez "S'inscrire"
   → Remplissez les informations
   → Cliquez "S'inscrire"
2️⃣ Connectez-vous avec vos identifiants
3️⃣ Observez les différences par rapport à l'Admin
   → Pas de bouton "➕ Ajouter Produit"
   → Pas d'icônes ✏️ et 🗑️
   → Section Catégories en lecture seule
4️⃣ Allez sur le Dashboard
   → Vous pouvez voir les statistiques
5️⃣ Allez sur Inventory
   → Vous pouvez voir les produits
   → Vous ne pouvez pas les modifier
6️⃣ Testez la recherche
   → Tapez un nom de produit
   → Vérifiez que ça fonctionne
7️⃣ Se déconnecter
```

✅ **Les permissions marchent !**

---

## 🚀 C'EST PRÊT !

Vous pouvez maintenant :

✅ **Tester l'application**  
✅ **Créer des comptes**  
✅ **Gérer les produits** (si Admin)  
✅ **Consulter les données** (tous)  
✅ **Rechercher et filtrer**  

---

## 📚 DOCUMENTS SUPPLÉMENTAIRES
si vous n'avez pu configurer tapez ca dans votre navigateur :http://127.0.0.1:5501/public/index.html
pour cette adresse vs aurez pas tous les produits que nous avons enregistre vs devez d'arbord ajouter des categories avant d'ajouter des produits par ce que le camps categorie est obligatoire .

- 📄 `Cahier_des_Charges.pdf` - Spécifications du projet
- 📄 `Cahier_de_Conception.pdf` - Architecture technique
- 📄 `GUIDE_UTILISATEUR.pdf` - Guide complet pour les utilisateurs
- 📄 `Contrat_Developpement.pdf` - Informations légales



---

**Pour tout problème :** Contactez [81708034]  
**Date :** 19 Février 2026  
**Version :** 1.0

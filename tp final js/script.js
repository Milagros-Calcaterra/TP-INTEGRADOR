// ===== Variables globales =====
let products = [];
let cart = [];

// ===== Fetch de personajes =====
async function loadProducts() {
  try {
    const res = await fetch("products.json");
    products = await res.json();
    renderProducts();
  } catch (error) {
    console.error("Error cargando productos:", error);
  }
}

// ===== Render de productos =====
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.species} - ${product.status}</p>
      <div class="actions">
        <button class="detail-btn">Ver detalle</button>
        <button class="cart-btn">Agregar al carrito</button>
      </div>
    `;

    // Evento detalle
    card.querySelector(".detail-btn").addEventListener("click", () => showDetail(product));

    // Evento carrito
    card.querySelector(".cart-btn").addEventListener("click", () => addToCart(product));

    container.appendChild(card);
  });
}

// ===== Mostrar detalle arriba =====
function showDetail(product) {
  closePanels(); // cierro cualquier otro panel

  const detailSection = document.getElementById("detail");
  detailSection.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.image}" alt="${product.name}">
    <p><strong>Especie:</strong> ${product.species}</p>
    <p><strong>Estado:</strong> ${product.status}</p>
    <button id="close-detail">Cerrar</button>
  `;
  detailSection.classList.remove("hidden");

  document.getElementById("close-detail").addEventListener("click", () => {
    detailSection.classList.add("hidden");
    detailSection.innerHTML = "";
  });
}

// ===== Agregar al carrito =====
function addToCart(product) {
  cart.push(product);
  updateCart();
  showToast(`${product.name} agregado al carrito`);
}

// ===== Mostrar carrito arriba =====
function showCart() {
  closePanels(); // cierro otros paneles

  const cartSection = document.getElementById("cart");
  const count = document.getElementById("cart-count");
  cartSection.innerHTML = "<h2>Carrito</h2>";

  if (cart.length === 0) {
    cartSection.innerHTML += "<p>Tu carrito está vacío.</p>";
  } else {
    cart.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML = `
        <span>${item.name}</span>
        <button class="remove-btn">Eliminar</button>
      `;

      row.querySelector(".remove-btn").addEventListener("click", () => {
        cart.splice(index, 1);
        updateCart();
        showCart(); // refresco el panel
      });

      cartSection.appendChild(row);
    });
  }

  count.textContent = cart.length;
  cartSection.classList.remove("hidden");
}

// ===== Cerrar paneles =====
function closePanels() {
  const detailSection = document.getElementById("detail");
  const cartSection = document.getElementById("cart");

  detailSection.classList.add("hidden");
  detailSection.innerHTML = "";

  cartSection.classList.add("hidden");
  cartSection.innerHTML = "";
}

// ===== Actualizar contador =====
function updateCart() {
  const count = document.getElementById("cart-count");
  count.textContent = cart.length;
}

// ===== Toast =====
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ===== Navegación =====
document.getElementById("show-products").addEventListener("click", () => {
  closePanels();
  document.getElementById("products").classList.remove("hidden");
});

document.getElementById("show-cart").addEventListener("click", () => {
  document.getElementById("products").classList.remove("hidden");
  showCart();
});

// ===== Init =====
loadProducts();

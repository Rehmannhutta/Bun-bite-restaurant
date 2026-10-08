/**
 * Bun & Bite Restaurant (Kasur)
 * Interactive Menu, Cart & WhatsApp Ordering Engine
 * Designed for High-Conversion & Seamless Pakistani Food Ordering Experience
 */

// Restaurant Contact Details
const RESTAURANT_PHONE = "923052241222"; // +92 305 2241222
const RESTAURANT_NAME = "Bun & Bite";
const RESTAURANT_CITY = "Kasur";

// Menu Data with Realistic Fast Food Items & PKR Pricing
const menuData = [
  // 1. BURGERS
  {
    id: "b1",
    name: "Classic Zinger Crunch Burger",
    category: "burgers",
    price: 450,
    badge: "Bestseller 🔥",
    desc: "100% crispy battered chicken fillet, iceberg lettuce, signature chili garlic mayo inside freshly toasted brioche sesame bun.",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },
  {
    id: "b2",
    name: "Mighty Double Patty Tower",
    category: "burgers",
    price: 680,
    badge: "Chef Special ⭐",
    desc: "Double crispy fried chicken fillet, double cheddar cheese slices, spicy jalapeños and secret house relish sauce.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },
  {
    id: "b3",
    name: "Smoky BBQ Grilled Burger",
    category: "burgers",
    price: 520,
    badge: "Smoky Goodness",
    desc: "Tender flame-grilled chicken breast glazed with hickory BBQ sauce, caramelized onions and melted gouda cheese.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },
  {
    id: "b4",
    name: "Crispy Chapli Patty Burger",
    category: "burgers",
    price: 380,
    badge: "Desi Twist 🌶️",
    desc: "Traditional spiced minced patty with coriander, fresh mint mayo, tomatoes and crisp onions.",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },

  // 2. PIZZAS
  {
    id: "p1",
    name: "Chicken Tikka Feast Pizza",
    category: "pizzas",
    price: 850,
    badge: "Most Loved 🍕",
    desc: "Rich marinara sauce, marinated spicy tikka chicken chunks, red onions, diced bell peppers and double mozzarella cheese.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/pizza-special.jpg"
  },
  {
    id: "p2",
    name: "Chicken Fajita Supreme",
    category: "pizzas",
    price: 890,
    badge: "Crispy Crust",
    desc: "Smoky fajita chicken cubes, green peppers, black olives, sweet corn, mushrooms and golden melting mozzarella.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/pizza-special.jpg"
  },
  {
    id: "p3",
    name: "Kasur Special Crown Crust",
    category: "pizzas",
    price: 1150,
    badge: "Signature Crown 👑",
    desc: "Royal crown crust stuffed with garlic cream cheese kebabs, loaded with tandoori chunks and spicy ranch sauce.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/pizza-special.jpg"
  },
  {
    id: "p4",
    name: "Four Cheese Margherita",
    category: "pizzas",
    price: 780,
    badge: "Cheesy Classic",
    desc: "Herbed Italian tomato base covered with thick blend of mozzarella, cheddar, parmesan and oregano.",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/pizza-special.jpg"
  },

  // 3. WRAPS & SHAWARMA
  {
    id: "w1",
    name: "Jumbo Crispy Zinger Roll",
    category: "wraps",
    price: 380,
    badge: "Crispy Delight 🌯",
    desc: "Whole golden zinger strip wrapped in flaky crispy paratha with garlic sauce, fresh pickles and spiced mayo.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/shawarma-wrap.jpg"
  },
  {
    id: "w2",
    name: "Arabic Shawarma Wrap",
    category: "wraps",
    price: 320,
    badge: "Traditional",
    desc: "Juicy shredded roasted chicken with tahini sauce, pickled cucumbers and light french fries wrapped in soft pita.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/shawarma-wrap.jpg"
  },
  {
    id: "w3",
    name: "Cheesy Grilled Fajita Wrap",
    category: "wraps",
    price: 420,
    badge: "Cheesy",
    desc: "Grilled spicy chicken tenders, sautéed bell peppers, mozzarella melt and chipotle sauce wrapped to perfection.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/shawarma-wrap.jpg"
  },

  // 4. FRIES & SIDES
  {
    id: "f1",
    name: "Mega Loaded Cheesy Fries",
    category: "fries",
    price: 450,
    badge: "Heavy Hit 🍟",
    desc: "Crispy golden french fries drowned in hot melted cheddar sauce, crispy chicken nuggets pieces, and jalapeños.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/loaded-fries.jpg"
  },
  {
    id: "f2",
    name: "Garlic Mayo Masala Fries",
    category: "fries",
    price: 280,
    badge: "Kasur Favorite",
    desc: "Fresh crinkle cut potato fries sprinkled with chatpata secret spice and rich garlic mayonnaise drizzle.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/loaded-fries.jpg"
  },
  {
    id: "f3",
    name: "Crispy Chicken Wings (6 Pcs)",
    category: "fries",
    price: 390,
    badge: "Spicy Wings",
    desc: "Crunchy battered chicken wings tossed in your choice of Buffalo hot or sweet garlic honey sauce.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/loaded-fries.jpg"
  },
  {
    id: "f4",
    name: "Golden Chicken Nuggets (8 Pcs)",
    category: "fries",
    price: 350,
    badge: "Kids & Snacks",
    desc: "Crispy outside and juicy inside chicken breast nuggets served with BBQ dip.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/loaded-fries.jpg"
  },

  // 5. SHAKES & DRINKS
  {
    id: "d1",
    name: "Thick Oreo Blizzard Shake",
    category: "drinks",
    price: 350,
    badge: "Chilled Sweet 🥤",
    desc: "Rich vanilla ice cream blended with crushed chocolate Oreos and topped with whipped cream & chocolate syrup.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },
  {
    id: "d2",
    name: "Chilled Mint Margarita",
    category: "drinks",
    price: 250,
    badge: "Refreshing 🌿",
    desc: "Fresh crushed garden mint leaves, lemon juice, sparkling soda and rock salt. The ultimate fast food refresher.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },
  {
    id: "d3",
    name: "Cold Soft Drink (500ml / Can)",
    category: "drinks",
    price: 130,
    badge: "Chilled",
    desc: "Ice-cold Coca Cola / Sprite / Fanta / Dew.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },

  // 6. SPECIAL DEALS
  {
    id: "deal1",
    name: "Student Crunch Deal",
    category: "deals",
    price: 580,
    badge: "Save Rs. 150 🔥",
    desc: "1x Crispy Zinger Burger + 1x Regular Masala Fries + 1x Chilled Cold Drink 345ml.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/hero-burger.jpg"
  },
  {
    id: "deal2",
    name: "Duo Hunger Buster",
    category: "deals",
    price: 1099,
    badge: "Save Rs. 280 👥",
    desc: "2x Zinger Burgers + 1x Loaded Fries Basket + 2x Cold Drinks 500ml.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/loaded-fries.jpg"
  },
  {
    id: "deal3",
    name: "Mega Family Feast Box",
    category: "deals",
    price: 2299,
    badge: "Family Saver 👨‍👩‍👧‍👦",
    desc: "1x Large 12' Chicken Tikka Pizza + 2x Zinger Burgers + 6x Hot Wings + 1.5 Liter Cold Drink.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    localImage: "assets/images/pizza-special.jpg"
  }
];

// App State
let cart = JSON.parse(localStorage.getItem("bun_bite_cart")) || [];
let currentCategory = "all";
let searchQuery = "";

// DOM Initialization
function initializeBunBiteApp() {
  initMenu();
  updateCartUI();
  setupEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeBunBiteApp);
} else {
  initializeBunBiteApp();
}

// Render Menu Cards
function initMenu() {
  const container = document.getElementById("menuContainer");
  if (!container) return;

  const filteredItems = menuData.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #94a3b8;">
        <i class="fa-solid fa-utensils" style="font-size: 3rem; margin-bottom: 16px; color: #2d3345;"></i>
        <h3 style="color: #fff; margin-bottom: 8px;">Koi item nahi mila!</h3>
        <p>Aap jo search kar rahe hain wo menu me mojood nahi ya spelling check karein.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredItems.map(item => `
    <div class="menu-card" data-category="${item.category}">
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.src='${item.localImage}';">
        ${item.badge ? `<span class="dish-badge">${item.badge}</span>` : ""}
      </div>
      <div class="menu-card-body">
        <span class="dish-category">${getCategoryLabel(item.category)}</span>
        <h3 class="dish-name">${item.name}</h3>
        <p class="dish-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <div class="dish-price"><span>Rs. </span>${item.price.toLocaleString()}</div>
          <div class="card-action-btns">
            <button class="btn-add-cart" onclick="addToCart('${item.id}')">
              <i class="fa-solid fa-plus"></i> Add
            </button>
            <button class="btn-quick-wa" title="Direct WhatsApp Order" onclick="quickWhatsAppOrder('${item.id}')">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function getCategoryLabel(cat) {
  const labels = {
    burgers: "Burger",
    pizzas: "Pizza",
    wraps: "Shawarma & Roll",
    fries: "Fries & Sides",
    drinks: "Beverage",
    deals: "Combo Deal"
  };
  return labels[cat] || "Fast Food";
}

// Category Filter Handler
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".category-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === cat);
  });
  initMenu();
}

// Search Handler
function handleSearch(query) {
  searchQuery = query;
  initMenu();
}

// Add Item to Cart
function addToCart(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${item.name}" to cart! 🍔`);
}

// Change Quantity in Cart
function updateQty(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== itemId);
  }

  saveCart();
  updateCartUI();
}

// Remove Item from Cart
function removeFromCart(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  saveCart();
  updateCartUI();
  showToast("Item removed from cart");
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem("bun_bite_cart", JSON.stringify(cart));
}

// Update Cart Drawer UI & Counter Badges
function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  countBadges.forEach(b => b.textContent = totalCount);

  const cartList = document.getElementById("cartItemsList");
  const emptyState = document.getElementById("emptyCartState");
  const checkoutSection = document.getElementById("checkoutSection");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (checkoutSection) checkoutSection.style.display = "none";
    if (cartSubtotal) cartSubtotal.textContent = "Rs. 0";
    if (cartTotal) cartTotal.textContent = "Rs. 0";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (checkoutSection) checkoutSection.style.display = "block";

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.onerror=null; this.src='${item.localImage}';">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">Rs. ${(item.price * item.quantity).toLocaleString()} <span style="font-size:0.75rem; color:#94a3b8; font-weight:normal;">(Rs. ${item.price} each)</span></div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
        <span class="qty-num">${item.quantity}</span>
        <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
      </div>
      <button class="remove-item-btn" title="Remove" onclick="removeFromCart('${item.id}')">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryCharges = 80;
  const total = subtotal + deliveryCharges;

  if (cartSubtotal) cartSubtotal.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (cartTotal) cartTotal.textContent = `Rs. ${total.toLocaleString()}`;
}

// Drawer Controls
function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Send Order to WhatsApp with Formatted Message
function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast("Aapka cart khali hai!");
    return;
  }

  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");
  const addressInput = document.getElementById("customerAddress");
  const orderTypeInput = document.getElementById("orderType");
  const notesInput = document.getElementById("specialNotes");

  const name = nameInput?.value.trim() || "Customer";
  const phone = phoneInput?.value.trim() || "Not specified";
  const address = addressInput?.value.trim() || "Kasur";
  const orderType = orderTypeInput?.value || "Home Delivery";
  const notes = notesInput?.value.trim() || "None";

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryCharges = orderType === "Takeaway" ? 0 : 80;
  const grandTotal = subtotal + deliveryCharges;

  let message = `*🍔 NAYA ORDER - BUN & BITE (KASUR) 🍔*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Customer:* ${name}\n`;
  if (phone !== "Not specified") message += `*Contact:* ${phone}\n`;
  message += `*Order Type:* ${orderType}\n`;
  message += `*Location / Address:* ${address}\n`;
  if (notes !== "None") message += `*Special Note:* ${notes}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*ITEMS ORDERED:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* x ${item.quantity} = Rs. ${item.price * item.quantity}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Subtotal:* Rs. ${subtotal}\n`;
  if (orderType !== "Takeaway") {
    message += `*Delivery Fee (Kasur):* Rs. ${deliveryCharges}\n`;
  }
  message += `*GRAND TOTAL:* Rs. ${grandTotal}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Please confirm my order and share estimated delivery time._\n`;
  message += `_Website Order powered by Rehman Web Studio_`;

  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encodedMessage}`;

  window.open(waUrl, "_blank");
}

// Quick 1-Item WhatsApp Order
function quickWhatsAppOrder(itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;

  let message = `*🍔 QUICK ORDER - BUN & BITE (KASUR) 🍔*\n`;
  message += `Salam! Main ye item order karna chahta hoon:\n\n`;
  message += `*Item:* ${item.name}\n`;
  message += `*Price:* Rs. ${item.price}\n`;
  message += `*Quantity:* 1\n\n`;
  message += `Please confirm my order & delivery details for Kasur city. Shukriya!`;

  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${RESTAURANT_PHONE}?text=${encodedMessage}`;

  window.open(waUrl, "_blank");
}

// Show Toast Notification
function showToast(text) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #22c55e;"></i> <span>${text}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Event Listeners setup
function setupEventListeners() {
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });
  }

  const navToggle = document.getElementById("mobileNavToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}

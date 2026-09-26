// Mock Product Database
const products = [
  // MOBILES
  {
    id: "mob-1",
    title: "Apple iPhone 15 (Blue, 128 GB)",
    category: "mobiles",
    price: 69999,
    originalPrice: 79900,
    discount: 12,
    rating: 4.6,
    reviews: 42150,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Apple",
    model: "iPhone 15",
    desc: "Experience the ultimate iPhone experience with Dynamic Island, a 48MP main camera, and USB-C speed."
  },
  {
    id: "mob-2",
    title: "Samsung Galaxy S24 Ultra 5G (Titanium Gray, 512 GB)",
    category: "mobiles",
    price: 129999,
    originalPrice: 139999,
    discount: 7,
    rating: 4.8,
    reviews: 12510,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    desc: "Unleash new ways to create, connect and more with the power of Galaxy AI and a stunning 200MP camera."
  },
  {
    id: "mob-3",
    title: "OnePlus 12 5G (Flowy Emerald, 256 GB)",
    category: "mobiles",
    price: 64999,
    originalPrice: 69999,
    discount: 7,
    rating: 4.5,
    reviews: 8430,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "OnePlus",
    model: "OnePlus 12",
    desc: "Powered by Snapdragon 8 Gen 3 and 4th Gen Hasselblad Camera for Mobile."
  },
  {
    id: "mob-4",
    title: "Redmi Note 13 Pro+ 5G (Fusion Purple, 256 GB)",
    category: "mobiles",
    price: 31999,
    originalPrice: 35999,
    discount: 11,
    rating: 4.3,
    reviews: 18240,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    assured: false,
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro+",
    desc: "Stunning 200MP camera with OIS, 120W HyperCharge, and a beautiful 3D curved AMOLED screen."
  },

  // ELECTRONICS
  {
    id: "elec-1",
    title: "Sony WH-1000XM5 Wireless Active Noise Cancelling Headphones",
    category: "electronics",
    price: 29999,
    originalPrice: 34999,
    discount: 14,
    rating: 4.7,
    reviews: 9420,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Sony",
    model: "WH-1000XM5",
    desc: "Industry-leading noise cancellation, exceptional sound quality, and crystal-clear hands-free calling."
  },
  {
    id: "elec-2",
    title: "Apple MacBook Air M3 (13-inch, 8GB RAM, 256GB SSD)",
    category: "electronics",
    price: 104900,
    originalPrice: 114900,
    discount: 8,
    rating: 4.8,
    reviews: 3120,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Apple",
    model: "MacBook Air M3",
    desc: "Supercharged by the next-generation M3 chip, with up to 18 hours of battery life and a liquid retina display."
  },
  {
    id: "elec-3",
    title: "Noise ColorFit Pulse Smartwatch (Jet Black)",
    category: "electronics",
    price: 1499,
    originalPrice: 4999,
    discount: 70,
    rating: 4.1,
    reviews: 154230,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    assured: false,
    brand: "Noise",
    model: "ColorFit Pulse",
    desc: "1.4-inch full touch display, 10-day battery life, 24/7 heart rate monitoring, and IP68 waterproof rating."
  },
  {
    id: "elec-4",
    title: "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
    category: "electronics",
    price: 9999,
    originalPrice: 13999,
    discount: 28,
    rating: 4.4,
    reviews: 21450,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "JBL",
    model: "Flip 6",
    desc: "Louder, more powerful sound with 2-way speaker system. IP67 waterproof and dustproof with 12 hours playtime."
  },

  // FASHION
  {
    id: "fas-1",
    title: "Puma Men's Regular Fit Solid Crew Neck T-Shirt",
    category: "fashion",
    price: 799,
    originalPrice: 1499,
    discount: 46,
    rating: 4.2,
    reviews: 32100,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Puma",
    model: "Solid Tee",
    desc: "Comfortable and classic cotton t-shirt with signature Puma logo embroidery. Ideal for casual wear."
  },
  {
    id: "fas-2",
    title: "Levis Men's 511 Slim Fit Blue Jeans",
    category: "fashion",
    price: 1899,
    originalPrice: 3299,
    discount: 42,
    rating: 4.3,
    reviews: 14500,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Levis",
    model: "511 Slim",
    desc: "A modern slim with room to move. Crafted with high-quality stretch denim for ultimate comfort."
  },
  {
    id: "fas-3",
    title: "Nike Air Max SYSTM Men's Sneakers (White/Black)",
    category: "fashion",
    price: 5499,
    originalPrice: 8495,
    discount: 35,
    rating: 4.5,
    reviews: 6200,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Nike",
    model: "Air Max SYSTM",
    desc: "Bringing back the aesthetic of 80s heritage running. Visible Air cushioning delivers time-tested comfort."
  },

  // GROCERY
  {
    id: "groc-1",
    title: "Fortune Premium Kachi Ghani Pure Mustard Oil (1 L)",
    category: "grocery",
    price: 165,
    originalPrice: 195,
    discount: 15,
    rating: 4.5,
    reviews: 84900,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Fortune",
    model: "Mustard Oil",
    desc: "Made from first-press mustard seeds, this oil is perfect for traditional Indian cooking and pickles."
  },
  {
    id: "groc-2",
    title: "Cadbury Dairy Milk Silk Chocolate Bar (Pack of 3)",
    category: "grocery",
    price: 240,
    originalPrice: 300,
    discount: 20,
    rating: 4.6,
    reviews: 12400,
    image: "https://images.unsplash.com/photo-1548907040-4d42b52125ca?auto=format&fit=crop&w=600&q=80",
    assured: false,
    brand: "Cadbury",
    model: "Silk Combo",
    desc: "Indulge in the smooth and creamy taste of Cadbury Dairy Milk Silk. Ideal for sharing and gifting."
  },

  // HOME & LIVING
  {
    id: "home-1",
    title: "Sleepwell Orthopedic Memory Foam Mattress (King Size)",
    category: "home",
    price: 14999,
    originalPrice: 24999,
    discount: 40,
    rating: 4.4,
    reviews: 5800,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "Sleepwell",
    model: "Ortho Foam",
    desc: "Specially designed for spine alignment and body pressure relief. Breathable fabric cover."
  },
  {
    id: "home-2",
    title: "Solid Wood Study Desk with Drawer (Honey Finish)",
    category: "home",
    price: 6499,
    originalPrice: 12999,
    discount: 50,
    rating: 4.2,
    reviews: 3400,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80",
    assured: false,
    brand: "HomeTown",
    model: "Study Desk",
    desc: "Spacious tabletop crafted from premium Sheesham wood. Perfect for home office setups."
  },

  // APPLIANCES
  {
    id: "app-1",
    title: "LG 242 L Double Door Smart Inverter Refrigerator",
    category: "appliances",
    price: 25999,
    originalPrice: 32999,
    discount: 21,
    rating: 4.4,
    reviews: 24900,
    image: "https://images.unsplash.com/photo-1571175482282-4b37d0f2b53f?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "LG",
    model: "Smart Inverter",
    desc: "Energy-efficient double-door refrigerator with auto-defrost system and multi-air flow cooling."
  },
  {
    id: "app-2",
    title: "IFB 6 kg 5 Star Fully Automatic Front Load Washing Machine",
    category: "appliances",
    price: 22490,
    originalPrice: 28990,
    discount: 22,
    rating: 4.3,
    reviews: 18400,
    image: "https://images.unsplash.com/photo-1545173168-9f1907e80067?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "IFB",
    model: "Diva Aqua VX",
    desc: "Super-efficient front loading machine equipped with aqua energie filter and 2D wash system."
  },

  // BEAUTY & TOYS
  {
    id: "toy-1",
    title: "LEGO Marvel Avengers Quinjet Building Toy Set",
    category: "beauty",
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    rating: 4.7,
    reviews: 1200,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
    assured: true,
    brand: "LEGO",
    model: "Marvel Quinjet",
    desc: "Recreate legendary movie scenes with this authentic spacecraft building set, including 5 minifigures."
  }
];

// Carousel Banners
const banners = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
];

// State Management
let currentSlide = 0;
let cart = JSON.parse(localStorage.getItem("fk_cart")) || [];
let activeFilters = {
  category: "all",
  search: "",
  maxPrice: 150000,
  rating: "all",
  discount: "0",
  assured: false
};
let currentSort = "relevance";
let currentUser = JSON.parse(localStorage.getItem("fk_user")) || null;

// DOM Elements
const carouselContainer = document.getElementById("carousel-container");
const carouselIndicators = document.getElementById("carousel-indicators");
const dealsContainer = document.getElementById("deals-container");
const productGrid = document.getElementById("product-grid");
const emptyState = document.getElementById("empty-state");
const cartBadge = document.getElementById("cart-badge");
const cartSidebar = document.getElementById("cart-sidebar");
const cartPanel = document.getElementById("cart-panel");
const cartItemsList = document.getElementById("cart-items-list");
const authModal = document.getElementById("auth-modal");
const productModal = document.getElementById("product-modal");
const checkoutModal = document.getElementById("checkout-modal");
const successModal = document.getElementById("success-modal");

// Initialize Website
document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
  startDealTimer();
  renderDeals();
  renderCategoryFilters();
  applyFilters();
  updateCartUI();
  updateUserUI();
});

// Carousel Functions
function initCarousel() {
  carouselContainer.innerHTML = banners.map((banner, index) => `
    <div class="min-w-full h-full relative">
      <img src="${banner}" alt="Banner ${index + 1}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-center px-12 text-white">
        <span class="bg-fkYellow text-fkDarkBlue text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">Festive Special</span>
        <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight">BIG BILLION DAYS</h2>
        <p class="text-sm md:text-lg mt-1 text-gray-200">Up to 80% Off on Top Categories & Brands</p>
        <button onclick="filterByCategory('electronics')" class="mt-4 bg-white text-fkBlue font-bold px-6 py-2 rounded shadow text-xs uppercase w-fit hover:bg-fkYellow hover:text-fkDarkBlue transition-all">Shop Now</button>
      </div>
    </div>
  `).join('');

  carouselIndicators.innerHTML = banners.map((_, index) => `
    <button onclick="goToSlide(${index})" class="w-2.5 h-2.5 rounded-full transition-all ${index === 0 ? 'bg-white scale-125' : 'bg-white/50'}"></button>
  `).join('');

  // Auto scroll banner
  setInterval(() => {
    nextSlide();
  }, 5000);
}

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  const indicators = carouselIndicators.querySelectorAll("button");
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.remove("bg-white/50");
      indicator.classList.add("bg-white", "scale-125");
    } else {
      indicator.classList.remove("bg-white", "scale-125");
      indicator.classList.add("bg-white/50");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % banners.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + banners.length) % banners.length;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Deals Countdown Timer
function startDealTimer() {
  let hours = 15;
  let minutes = 42;
  let seconds = 59;
  const timerText = document.getElementById("timer-text");

  setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          hours = 23;
        }
      }
    }
    timerText.innerHTML = `${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s Left`;
  }, 1000);
}

// Render Deals of the Day (Horizontal scroll)
function renderDeals() {
  const deals = products.slice(0, 6); // Grab first 6 products as deals
  dealsContainer.innerHTML = deals.map(product => `
    <div onclick="openProductDetail('${product.id}')" class="min-w-[180px] bg-white border border-gray-100 rounded p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-all shrink-0">
      <div class="h-28 w-28 flex items-center justify-center mb-3">
        <img src="${product.image}" alt="${product.title}" class="max-h-full max-w-full object-contain hover:scale-105 transition-transform">
      </div>
      <h3 class="text-xs font-semibold text-gray-800 line-clamp-1 w-full">${product.title}</h3>
      <span class="text-xs font-bold text-fkGreen mt-1">${product.discount}% Off</span>
      <span class="text-xs text-gray-500 mt-0.5">From ₹${product.price.toLocaleString('en-IN')}</span>
    </div>
  `).join('');
}

// Render Checkbox list for Categories in Sidebar
function renderCategoryFilters() {
  const categoryFilterList = document.getElementById("category-filter-list");
  const uniqueCategories = ["all", ...new Set(products.map(p => p.category))];
  
  categoryFilterList.innerHTML = uniqueCategories.map(cat => `
    <label class="flex items-center gap-2 text-sm cursor-pointer hover:text-fkBlue capitalize">
      <input type="radio" name="sidebar-category" value="${cat}" ${cat === 'all' ? 'checked' : ''} onchange="filterByCategory('${cat}')" class="accent-fkBlue">
      <span>${cat === 'all' ? 'All Categories' : cat}</span>
    </label>
  `).join('');
}

// Filter and Sort implementation
function applyFilters() {
  let filtered = [...products];

  // 1. Category Filter
  if (activeFilters.category !== "all") {
    filtered = filtered.filter(p => p.category === activeFilters.category);
    // Sync category radio check
    const radios = document.getElementsByName("sidebar-category");
    radios.forEach(r => {
      r.checked = (r.value === activeFilters.category);
    });
  }

  // 2. Search Filter
  if (activeFilters.search.trim() !== "") {
    const query = activeFilters.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query)
    );
  }

  // 3. Price Filter
  filtered = filtered.filter(p => p.price <= activeFilters.maxPrice);

  // 4. Rating Filter
  if (activeFilters.rating !== "all") {
    const minRating = parseFloat(activeFilters.rating);
    filtered = filtered.filter(p => p.rating >= minRating);
  }

  // 5. Discount Filter
  const minDiscount = parseInt(activeFilters.discount);
  filtered = filtered.filter(p => p.discount >= minDiscount);

  // 6. Assured Filter
  const assuredChecked = document.getElementById("assured-filter").checked;
  if (assuredChecked) {
    filtered = filtered.filter(p => p.assured === true);
  }

  // Apply Sorting
  sortFilteredProducts(filtered);

  // Render Product Count
  document.getElementById("product-count").innerHTML = `(Showing ${filtered.length} products)`;
  document.getElementById("catalog-title").innerHTML = activeFilters.category === "all" ? "All Products" : `${activeFilters.category.toUpperCase()} Catalog`;

  // Render to grid
  renderProductGrid(filtered);
  renderActiveChips();
}

function renderProductGrid(items) {
  if (items.length === 0) {
    productGrid.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  }

  productGrid.classList.remove("hidden");
  emptyState.classList.add("hidden");

  productGrid.innerHTML = items.map(product => `
    <div onclick="openProductDetail('${product.id}')" class="product-card bg-white border border-gray-200 rounded overflow-hidden flex flex-col cursor-pointer p-4 relative">
      
      <!-- Wishlist Star icon -->
      <button onclick="toggleWishlist(event, '${product.id}')" class="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors text-lg z-10">
        <i class="fa-solid fa-heart"></i>
      </button>

      <!-- Product Image -->
      <div class="h-44 w-full flex items-center justify-center mb-4 bg-white relative">
        <img src="${product.image}" alt="${product.title}" class="max-h-full max-w-full object-contain">
      </div>

      <!-- Detail Info -->
      <div class="flex-1 flex flex-col justify-between gap-1">
        <div>
          <h3 class="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight hover:text-fkBlue mb-1">${product.title}</h3>
          
          <!-- Stars & ratings -->
          <div class="flex items-center gap-1.5 mt-1">
            <span class="bg-fkGreen text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
              ${product.rating} <i class="fa-solid fa-star text-[8px]"></i>
            </span>
            <span class="text-xs text-gray-500 font-semibold">(${product.reviews.toLocaleString('en-IN')})</span>
            ${product.assured ? `<img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="Assured" class="h-3.5 ml-1">` : ''}
          </div>
        </div>

        <!-- Pricing -->
        <div class="mt-3 flex flex-col gap-0.5">
          <div class="flex items-baseline gap-2">
            <span class="text-base font-bold text-gray-900">₹${product.price.toLocaleString('en-IN')}</span>
            <span class="text-xs line-through text-gray-400">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            <span class="text-xs font-bold text-fkGreen">${product.discount}% off</span>
          </div>
          <span class="text-[11px] text-gray-500 font-medium">Free Delivery</span>
        </div>
      </div>
    </div>
  `).join('');
}

function updatePriceFilterLabel(val) {
  activeFilters.maxPrice = parseInt(val);
  document.getElementById("price-filter-label").innerText = `Max: ₹${activeFilters.maxPrice.toLocaleString('en-IN')}`;
  applyFilters();
}

function filterByCategory(cat) {
  activeFilters.category = cat;
  applyFilters();
}

function handleSearch(e) {
  e.preventDefault();
  const searchInput = document.getElementById("search-input").value;
  const searchInputMobile = document.getElementById("search-input-mobile").value;
  activeFilters.search = searchInput || searchInputMobile;
  applyFilters();
  document.getElementById("search-suggestions").classList.add("hidden");
}

function showSearchSuggestions(value) {
  const suggestionsBox = document.getElementById("search-suggestions");
  if (!value.trim()) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  const matches = products.filter(p => 
    p.title.toLowerCase().includes(value.toLowerCase()) ||
    p.category.toLowerCase().includes(value.toLowerCase())
  ).slice(0, 5);

  if (matches.length === 0) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  suggestionsBox.innerHTML = matches.map(p => `
    <div onclick="selectSuggestion('${p.title}')" class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
      <i class="fa-solid fa-magnifying-glass text-gray-400 text-xs"></i>
      <span class="text-sm font-medium text-gray-800 truncate">${p.title}</span>
    </div>
  `).join('');
  suggestionsBox.classList.remove("hidden");
}

function selectSuggestion(title) {
  document.getElementById("search-input").value = title;
  activeFilters.search = title;
  applyFilters();
  document.getElementById("search-suggestions").classList.add("hidden");
}

// Sort Products
function sortProducts(type) {
  currentSort = type;
  
  // Update button highlights
  const sortButtons = ["relevance", "low-high", "high-low", "discount"];
  sortButtons.forEach(btn => {
    const el = document.getElementById(`sort-${btn}`);
    if (el) {
      if (btn === type) {
        el.className = "px-3 py-1 rounded text-fkBlue font-bold bg-fkBlue/10";
      } else {
        el.className = "px-3 py-1 rounded text-gray-600 hover:text-fkBlue font-medium";
      }
    }
  });

  applyFilters();
}

function sortFilteredProducts(items) {
  if (currentSort === "low-high") {
    items.sort((a, b) => a.price - b.price);
  } else if (currentSort === "high-low") {
    items.sort((a, b) => b.price - a.price);
  } else if (currentSort === "discount") {
    items.sort((a, b) => b.discount - a.discount);
  } else {
    // Default relevance (based on rating * reviews count)
    items.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
  }
}

// Active Filter Chips UI
function renderActiveChips() {
  const container = document.getElementById("active-filters-container");
  const chips = [];

  if (activeFilters.category !== "all") {
    chips.push({ key: "category", label: `Category: ${activeFilters.category}` });
  }
  if (activeFilters.search !== "") {
    chips.push({ key: "search", label: `Search: "${activeFilters.search}"` });
  }
  if (activeFilters.maxPrice < 150000) {
    chips.push({ key: "price", label: `Under ₹${activeFilters.maxPrice.toLocaleString('en-IN')}` });
  }
  if (activeFilters.rating !== "all") {
    chips.push({ key: "rating", label: `${activeFilters.rating}★ & above` });
  }

  if (chips.length > 0) {
    container.innerHTML = `
      <span class="text-xs text-gray-500 font-semibold flex items-center">Active Filters:</span>
      ${chips.map(chip => `
        <span class="bg-gray-200 text-gray-800 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
          <span>${chip.label}</span>
          <button onclick="removeFilterChip('${chip.key}')" class="text-gray-500 hover:text-gray-800 font-bold"><i class="fa-solid fa-xmark"></i></button>
        </span>
      `).join('')}
    `;
    container.classList.remove("hidden");
  } else {
    container.classList.add("hidden");
  }
}

function removeFilterChip(key) {
  if (key === "category") activeFilters.category = "all";
  if (key === "search") {
    activeFilters.search = "";
    document.getElementById("search-input").value = "";
    document.getElementById("search-input-mobile").value = "";
  }
  if (key === "price") {
    activeFilters.maxPrice = 150000;
    document.getElementById("price-range").value = 150000;
    document.getElementById("price-filter-label").innerText = `Max: ₹1,50,000`;
  }
  if (key === "rating") {
    activeFilters.rating = "all";
    document.querySelector('input[name="rating-filter"][value="all"]').checked = true;
  }
  applyFilters();
}

function clearAllFilters() {
  activeFilters = {
    category: "all",
    search: "",
    maxPrice: 150000,
    rating: "all",
    discount: "0",
    assured: false
  };
  document.getElementById("search-input").value = "";
  document.getElementById("search-input-mobile").value = "";
  document.getElementById("price-range").value = 150000;
  document.getElementById("price-filter-label").innerText = `Max: ₹1,50,000`;
  document.getElementById("assured-filter").checked = false;
  document.querySelector('input[name="rating-filter"][value="all"]').checked = true;
  document.querySelector('input[name="discount-filter"][value="0"]').checked = true;
  applyFilters();
}

function resetFilters() {
  clearAllFilters();
}

// Product Details Modal
function openProductDetail(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  document.getElementById("modal-breadcrumb-cat").innerText = item.category;
  document.getElementById("modal-breadcrumb-title").innerText = item.title;
  document.getElementById("modal-product-img").src = item.image;
  document.getElementById("modal-product-title").innerText = item.title;
  document.getElementById("modal-product-rating").innerHTML = `${item.rating} <i class="fa-solid fa-star text-[10px]"></i>`;
  document.getElementById("modal-rating-count").innerText = `${item.reviews.toLocaleString('en-IN')} Ratings & ${(item.reviews/10).toFixed(0).toLocaleString('en-IN')} Reviews`;
  
  document.getElementById("modal-product-price").innerText = `₹${item.price.toLocaleString('en-IN')}`;
  document.getElementById("modal-product-oldprice").innerText = `₹${item.originalPrice.toLocaleString('en-IN')}`;
  document.getElementById("modal-product-discount").innerText = `${item.discount}% off`;
  
  document.getElementById("modal-product-desc").innerText = item.desc;
  document.getElementById("modal-spec-brand").innerText = item.brand;
  document.getElementById("modal-spec-model").innerText = item.model;

  if (item.assured) {
    document.getElementById("modal-assured-badge").classList.remove("hidden");
    document.getElementById("modal-assured-tag").classList.remove("hidden");
  } else {
    document.getElementById("modal-assured-badge").classList.add("hidden");
    document.getElementById("modal-assured-tag").classList.add("hidden");
  }

  // Bind actions
  document.getElementById("modal-add-to-cart-btn").onclick = () => {
    addToCart(item.id);
    closeProductModal();
  };
  document.getElementById("modal-buy-now-btn").onclick = () => {
    addToCart(item.id);
    closeProductModal();
    openCart();
  };

  productModal.classList.remove("hidden");
}

function closeProductModal() {
  productModal.classList.add("hidden");
}

// Cart System
function addToCart(id) {
  const targetItem = products.find(p => p.id === id);
  if (!targetItem) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...targetItem, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${targetItem.title.substring(0, 20)}... to cart!`);
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (totalCount > 0) {
    cartBadge.classList.remove("hidden");
    cartBadge.innerText = totalCount;
  } else {
    cartBadge.classList.add("hidden");
  }

  document.getElementById("cart-count-header").innerText = totalCount;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 text-center text-gray-500">
        <i class="fa-solid fa-cart-shopping text-5xl mb-3 text-gray-300"></i>
        <h4 class="font-bold text-gray-700">Your Cart is Empty!</h4>
        <p class="text-xs mt-1">Explore our hot deals and add items now.</p>
        <button onclick="closeCart()" class="mt-4 bg-fkBlue text-white font-bold px-6 py-2 rounded text-xs uppercase">Shop Now</button>
      </div>
    `;
    // Update price summary to 0
    document.getElementById("cart-calc-qty").innerText = "0";
    document.getElementById("cart-calc-original-price").innerText = "₹0";
    document.getElementById("cart-calc-discount").innerText = "-₹0";
    document.getElementById("cart-calc-total").innerText = "₹0";
    return;
  }

  // Render items
  cartItemsList.innerHTML = cart.map(item => `
    <div class="bg-white p-4 rounded border border-gray-200 flex gap-4 shadow-sm relative">
      <div class="w-20 h-20 shrink-0 flex items-center justify-center bg-white border rounded">
        <img src="${item.image}" alt="${item.title}" class="max-h-full max-w-full object-contain">
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-xs font-semibold text-gray-900 line-clamp-1">${item.title}</h4>
          <span class="text-[10px] text-gray-400 capitalize">Category: ${item.category}</span>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-sm font-bold text-gray-900">₹${item.price.toLocaleString('en-IN')}</span>
            <span class="text-xs line-through text-gray-400">₹${item.originalPrice.toLocaleString('en-IN')}</span>
            <span class="text-[10px] font-bold text-fkGreen">${item.discount}% Off</span>
          </div>
        </div>

        <div class="flex items-center justify-between mt-2">
          <!-- Quantity Controls -->
          <div class="flex items-center border rounded">
            <button onclick="updateQty('${item.id}', -1)" class="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold text-xs"><i class="fa-solid fa-minus text-[10px]"></i></button>
            <span class="px-3 py-0.5 text-xs font-bold text-gray-800">${item.quantity}</span>
            <button onclick="updateQty('${item.id}', 1)" class="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold text-xs"><i class="fa-solid fa-plus text-[10px]"></i></button>
          </div>

          <!-- Remove Button -->
          <button onclick="removeFromCart('${item.id}')" class="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1">
            <i class="fa-solid fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Calculate Price Details
  const origTotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const actualTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountTotal = origTotal - actualTotal;

  document.getElementById("cart-calc-qty").innerText = totalCount;
  document.getElementById("cart-calc-original-price").innerText = `₹${origTotal.toLocaleString('en-IN')}`;
  document.getElementById("cart-calc-discount").innerText = `-₹${discountTotal.toLocaleString('en-IN')}`;
  document.getElementById("cart-calc-total").innerText = `₹${actualTotal.toLocaleString('en-IN')}`;
  document.getElementById("checkout-total-price").innerText = `₹${actualTotal.toLocaleString('en-IN')}`;
}

function updateQty(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  showToast("Item removed from cart.");
}

function saveCart() {
  localStorage.setItem("fk_cart", JSON.stringify(cart));
}

// Side Cart Panel Controls
function openCart() {
  cartSidebar.classList.remove("hidden");
  // Small delay to trigger sliding CSS transition
  setTimeout(() => {
    cartPanel.classList.remove("translate-x-full");
  }, 10);
}

function closeCart() {
  cartPanel.classList.add("translate-x-full");
  setTimeout(() => {
    cartSidebar.classList.add("hidden");
  }, 300);
}

// Toast Display
function showToast(message) {
  const toast = document.getElementById("toast");
  document.getElementById("toast-message").innerText = message;
  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3000);
}

// Auth Flow
function openAuthModal() {
  authModal.classList.remove("hidden");
}

function closeAuthModal() {
  authModal.classList.add("hidden");
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const username = document.getElementById("auth-username").value;
  currentUser = { username: username.split("@")[0] };
  localStorage.setItem("fk_user", JSON.stringify(currentUser));
  updateUserUI();
  closeAuthModal();
  showToast(`Welcome back, ${currentUser.username}!`);
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("fk_user");
  updateUserUI();
  showToast("Logged out successfully.");
}

function updateUserUI() {
  const loginBtn = document.getElementById("login-btn");
  const userProfileMenu = document.getElementById("user-profile-menu");
  const usernameDisplay = document.getElementById("username-display");

  if (currentUser) {
    loginBtn.classList.add("hidden");
    userProfileMenu.classList.remove("hidden");
    usernameDisplay.innerText = currentUser.username;
  } else {
    loginBtn.classList.remove("hidden");
    userProfileMenu.classList.add("hidden");
  }
}

// Checkout Flow
function proceedToCheckout() {
  if (cart.length === 0) {
    showToast("Please add items to cart first!");
    return;
  }
  closeCart();
  checkoutModal.classList.remove("hidden");
}

function closeCheckoutModal() {
  checkoutModal.classList.add("hidden");
}

function processOrder(e) {
  e.preventDefault();
  closeCheckoutModal();
  
  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();

  // Show Success modal
  successModal.classList.remove("hidden");
}

function closeSuccessModal() {
  successModal.classList.add("hidden");
}

// Wishlist interaction
function toggleWishlist(e, id) {
  e.stopPropagation(); // Prevent opening detail modal
  const btn = e.currentTarget;
  btn.classList.toggle("text-red-500");
  btn.classList.toggle("text-gray-300");
  
  const isWishlisted = btn.classList.contains("text-red-500");
  if (isWishlisted) {
    showToast("Added to Wishlist!");
  } else {
    showToast("Removed from Wishlist.");
  }
}

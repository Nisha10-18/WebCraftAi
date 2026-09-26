// ==========================================
// FilmyBol - Premium Movie Discovery Platform
// Vanilla JS Application
// ==========================================

// --- Mock Movie Database ---
const moviesData = [
    {
        id: "m1",
        title: "Dune: Part Two",
        year: 2024,
        duration: "2h 46m",
        rating: 8.8,
        popularity: 98,
        genres: ["Sci-Fi", "Adventure", "Drama"],
        director: "Denis Villeneuve",
        cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        ageRating: "PG-13",
        reviews: [
            { name: "John Doe", rating: 5, text: "An absolute visual masterpiece! Denis does it again." },
            { name: "Sarah K.", rating: 4, text: "Incredible sound design and cinematography. Must watch in IMAX!" }
        ]
    },
    {
        id: "m2",
        title: "Oppenheimer",
        year: 2023,
        duration: "3h 00m",
        rating: 8.9,
        popularity: 95,
        genres: ["Drama", "History"],
        director: "Christopher Nolan",
        cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, leading to the dawn of the nuclear age.",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        ageRating: "R",
        reviews: [
            { name: "NolanFan99", rating: 5, text: "Cillian Murphy's performance is hauntingly perfect." },
            { name: "Elena R.", rating: 5, text: "A spectacular historical drama. The tension is real." }
        ]
    },
    {
        id: "m3",
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        duration: "2h 20m",
        rating: 8.7,
        popularity: 92,
        genres: ["Animation", "Action", "Sci-Fi"],
        director: "Joaquim Dos Santos",
        cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
        description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
        ageRating: "PG",
        reviews: [
            { name: "Alex G.", rating: 5, text: "Every single frame is a work of art. Unbelievable animation!" }
        ]
    },
    {
        id: "m4",
        title: "Interstellar",
        year: 2014,
        duration: "2h 49m",
        rating: 8.7,
        popularity: 97,
        genres: ["Sci-Fi", "Drama", "Adventure"],
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        description: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80",
        ageRating: "PG-13",
        reviews: [
            { name: "CosmicGazer", rating: 5, text: "The soundtrack by Hans Zimmer makes me cry every time." }
        ]
    },
    {
        id: "m5",
        title: "Jawan",
        year: 2023,
        duration: "2h 49m",
        rating: 7.5,
        popularity: 89,
        genres: ["Action", "Thriller"],
        director: "Atlee Kumar",
        cast: "Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Deepika Padukone",
        description: "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society. Backed by a stellar cast and mass elevation scenes.",
        poster: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
        ageRating: "UA",
        reviews: [
            { name: "Rajesh K.", rating: 5, text: "SRK at his absolute massiest best! Pure entertainment." }
        ]
    },
    {
        id: "m6",
        title: "The Dark Knight",
        year: 2008,
        duration: "2h 32m",
        rating: 9.0,
        popularity: 99,
        genres: ["Action", "Thriller", "Drama"],
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart, Maggie Gyllenhaal",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
        ageRating: "PG-13",
        reviews: [
            { name: "JokerFan", rating: 5, text: "Heath Ledger gave the performance of a lifetime. Legendary." }
        ]
    },
    {
        id: "m7",
        title: "Spirited Away",
        year: 2001,
        duration: "2h 05m",
        rating: 8.6,
        popularity: 91,
        genres: ["Animation", "Adventure", "Drama"],
        director: "Hayao Miyazaki",
        cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        poster: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1200&q=80",
        ageRating: "PG",
        reviews: [
            { name: "GhibliLover", rating: 5, text: "Pure magic. Miyazaki is a national treasure." }
        ]
    },
    {
        id: "m8",
        title: "Parasite",
        year: 2019,
        duration: "2h 12m",
        rating: 8.5,
        popularity: 93,
        genres: ["Drama", "Thriller"],
        director: "Bong Joon Ho",
        cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=1200&q=80",
        ageRating: "R",
        reviews: [
            { name: "CinephileX", rating: 5, text: "Deserves every single Oscar it won. Mind-bending thriller." }
        ]
    },
    {
        id: "m9",
        title: "La La Land",
        year: 2016,
        duration: "2h 08m",
        rating: 8.0,
        popularity: 88,
        genres: ["Romance", "Drama"],
        director: "Damien Chazelle",
        cast: "Ryan Gosling, Emma Stone, Rosemarie DeWitt, J.K. Simmons",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        ageRating: "PG-13",
        reviews: [
            { name: "MusicLover", rating: 4, text: "Beautiful, bitter-sweet love letter to Hollywood." }
        ]
    },
    {
        id: "m10",
        title: "Everything Everywhere All at Once",
        year: 2022,
        duration: "2h 19m",
        rating: 8.1,
        popularity: 94,
        genres: ["Action", "Sci-Fi", "Drama"],
        director: "Daniel Kwan, Daniel Scheinert",
        cast: "Michelle Yeoh, Stephanie Hsu, Ke Huy Quan, Jamie Lee Curtis",
        description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
        poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=1200&q=80",
        ageRating: "R",
        reviews: [
            { name: "MultiverseTraveler", rating: 5, text: "Hilarious, heartbreaking, and completely original." }
        ]
    },
    {
        id: "m11",
        title: "Kantara",
        year: 2022,
        duration: "2h 30m",
        rating: 8.2,
        popularity: 87,
        genres: ["Action", "Drama", "Thriller"],
        director: "Rishab Shetty",
        cast: "Rishab Shetty, Sapthami Gowda, Kishore Kumar G.",
        description: "When greed paves the way for betrayal, scheming and rebellion, a young protagonist reluctantly inherits the myths and legends of his ancestors to restore peace and balance to his forest village.",
        poster: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
        ageRating: "UA",
        reviews: [
            { name: "Sandeep M.", rating: 5, text: "The climax of this film is absolutely breathtaking. Superb!" }
        ]
    },
    {
        id: "m12",
        title: "RRR",
        year: 2022,
        duration: "3h 07m",
        rating: 7.8,
        popularity: 96,
        genres: ["Action", "Drama"],
        director: "S.S. Rajamouli",
        cast: "N.T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt",
        description: "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        poster: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
        backdrop: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=1200&q=80",
        ageRating: "UA",
        reviews: [
            { name: "GlobalCinemaFan", rating: 5, text: "Most energetic action film I have ever seen. Naatu Naatu!" }
        ]
    }
];

// --- State Management ---
let watchlist = JSON.parse(localStorage.getItem('filmybol_watchlist')) || [];
let activeGenre = 'all';
let searchQuery = '';
let activeSort = 'popular';
let selectedMovie = null;
let selectedRating = 0;

// --- DOM Elements ---
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const genrePills = document.getElementById('genrePills');
const sortSelect = document.getElementById('sortSelect');
const statusBar = document.getElementById('statusBar');
const statusText = document.getElementById('statusText');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const noResults = document.getElementById('noResults');
const clearAllFiltersBtn = document.getElementById('clearAllFiltersBtn');

// Watchlist Drawer elements
const watchlistToggleBtn = document.getElementById('watchlistToggleBtn');
const watchlistDrawer = document.getElementById('watchlistDrawer');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const drawerOverlay = document.getElementById('drawerOverlay');
const watchlistItems = document.getElementById('watchlistItems');
const watchlistEmpty = document.getElementById('watchlistEmpty');
const drawerFooter = document.getElementById('drawerFooter');
const clearWatchlistBtn = document.getElementById('clearWatchlistBtn');
const watchlistCountBadge = document.getElementById('watchlistCount');

// Movie Details Modal elements
const movieModal = document.getElementById('movieModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalPoster = document.getElementById('modalPoster');
const modalTitle = document.getElementById('modalTitle');
const modalRating = document.getElementById('modalRating');
const modalYear = document.getElementById('modalYear');
const modalDuration = document.getElementById('modalDuration');
const modalAgeRating = document.getElementById('modalAgeRating');
const modalGenres = document.getElementById('modalGenres');
const modalSynopsis = document.getElementById('modalSynopsis');
const modalDirector = document.getElementById('modalDirector');
const modalCast = document.getElementById('modalCast');
const modalWatchlistToggle = document.getElementById('modalWatchlistToggle');
const modalShareBtn = document.getElementById('modalShareBtn');
const modalPlayTrailerBtn = document.getElementById('modalPlayTrailerBtn');

// Reviews & Rating Form in Modal
const addReviewForm = document.getElementById('addReviewForm');
const starRatingInput = document.getElementById('starRatingInput');
const reviewerNameInput = document.getElementById('reviewerName');
const reviewTextInput = document.getElementById('reviewText');
const reviewsList = document.getElementById('reviewsList');

// Trailer Modal elements
const trailerModal = document.getElementById('trailerModal');
const closeTrailerBtn = document.getElementById('closeTrailerBtn');
const videoPlayPause = document.getElementById('videoPlayPause');
const videoProgressBar = document.getElementById('videoProgressBar');
const videoTime = document.getElementById('videoTime');
const videoFullscreen = document.getElementById('videoFullscreen');

// Hero Section elements
const heroPlayBtn = document.getElementById('heroPlayBtn');
const heroDetailsBtn = document.getElementById('heroDetailsBtn');

// Toast Container
const toastContainer = document.getElementById('toastContainer');

// Header Scroll Effect
const mainHeader = document.querySelector('.main-header');

// Mobile menu toggles
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');
const closeMobileMenu = document.getElementById('closeMobileMenu');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initHeroSection();
    renderMovies();
    updateWatchlistUI();
    setupEventListeners();
});

// --- Functions ---

// 1. Dynamic Hero Section Selection
function initHeroSection() {
    // Select Oppenheimer as the default epic banner, or Dune
    const featuredMovie = moviesData.find(m => m.id === 'm1') || moviesData[0];
    
    const heroSection = document.getElementById('heroSection');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');
    
    if (featuredMovie) {
        heroSection.style.backgroundImage = `url('${featuredMovie.backdrop}')`;
        heroTitle.textContent = featuredMovie.title;
        heroDescription.textContent = featuredMovie.description;
        
        // Update hero meta details
        const metaContainer = heroSection.querySelector('.hero-meta');
        metaContainer.innerHTML = `
            <span class="hero-rating"><i class="fa-solid fa-star"></i> ${featuredMovie.rating}</span>
            <span class="hero-year">${featuredMovie.year}</span>
            <span class="hero-duration">${featuredMovie.duration}</span>
            <span class="hero-category">${featuredMovie.genres.join(' / ')}</span>
        `;
        
        // Setup CTA events
        heroPlayBtn.onclick = () => openTrailerModal(featuredMovie);
        heroDetailsBtn.onclick = () => openMovieDetails(featuredMovie.id);
    }
}

// 2. Render Movie Cards
function renderMovies() {
    // Filter
    let filteredMovies = moviesData.filter(movie => {
        const matchesGenre = activeGenre === 'all' || movie.genres.includes(activeGenre);
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = movie.title.toLowerCase().includes(searchLower) || 
                              movie.director.toLowerCase().includes(searchLower) ||
                              movie.cast.toLowerCase().includes(searchLower);
        return matchesGenre && matchesSearch;
    });

    // Sort
    if (activeSort === 'rating') {
        filteredMovies.sort((a, b) => b.rating - a.rating);
    } else if (activeSort === 'year-new') {
        filteredMovies.sort((a, b) => b.year - a.year);
    } else if (activeSort === 'year-old') {
        filteredMovies.sort((a, b) => a.year - b.year);
    } else { // 'popular'
        filteredMovies.sort((a, b) => b.popularity - a.popularity);
    }

    // Render Grid
    moviesGrid.innerHTML = '';
    
    if (filteredMovies.length === 0) {
        noResults.style.display = 'block';
        statusBar.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        
        // Show status bar if filters are active
        if (activeGenre !== 'all' || searchQuery !== '') {
            statusBar.style.display = 'flex';
            statusText.textContent = `Found ${filteredMovies.length} movie${filteredMovies.length > 1 ? 's' : ''} matching your selection`;
        } else {
            statusBar.style.display = 'none';
        }

        filteredMovies.forEach(movie => {
            const isAdded = watchlist.includes(movie.id);
            const card = document.createElement('div');
            card.classList.add('movie-card');
            card.innerHTML = `
                <div class="card-poster-container" onclick="openMovieDetails('${movie.id}')">
                    <img src="${movie.poster}" alt="${movie.title}" class="card-poster" loading="lazy">
                    <div class="card-overlay">
                        <button class="btn btn-primary btn-sm"><i class="fa-solid fa-play"></i> Explore</button>
                    </div>
                    <div class="card-badge-rating">
                        <i class="fa-solid fa-star"></i> ${movie.rating}
                    </div>
                </div>
                <button class="card-watchlist-toggle ${isAdded ? 'in-watchlist' : ''}" 
                        data-id="${movie.id}" 
                        title="${isAdded ? 'Remove from Watchlist' : 'Add to Watchlist'}">
                    <i class="${isAdded ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                </button>
                <div class="card-info">
                    <div class="card-genres">${movie.genres.slice(0, 2).join(', ')}</div>
                    <h3 class="card-title" onclick="openMovieDetails('${movie.id}')">${movie.title}</h3>
                    <div class="card-meta">
                        <span>${movie.year}</span>
                        <span><i class="fa-regular fa-clock"></i> ${movie.duration}</span>
                    </div>
                </div>
            `;
            moviesGrid.appendChild(card);
        });

        // Re-bind card watchlist toggles
        document.querySelectorAll('.card-watchlist-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const movieId = btn.getAttribute('data-id');
                toggleWatchlist(movieId);
            });
        });
    }
}

// 3. Watchlist Logic
function toggleWatchlist(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;

    const index = watchlist.indexOf(movieId);
    if (index > -1) {
        watchlist.splice(index, 1);
        showToast(`Removed "${movie.title}" from Watchlist`, 'remove');
    } else {
        watchlist.push(movieId);
        showToast(`Added "${movie.title}" to Watchlist`, 'add');
    }

    localStorage.setItem('filmybol_watchlist', JSON.stringify(watchlist));
    updateWatchlistUI();
    renderMovies(); // Refresh grid state

    // Update modal button state if modal is open
    if (selectedMovie && selectedMovie.id === movieId) {
        updateModalWatchlistButton();
    }
}

function updateWatchlistUI() {
    // Update count badge
    watchlistCountBadge.textContent = watchlist.length;

    // Populate drawer list
    watchlistItems.innerHTML = '';
    
    if (watchlist.length === 0) {
        watchlistEmpty.style.display = 'block';
        drawerFooter.style.display = 'none';
    } else {
        watchlistEmpty.style.display = 'none';
        drawerFooter.style.display = 'block';

        watchlist.forEach(id => {
            const movie = moviesData.find(m => m.id === id);
            if (movie) {
                const item = document.createElement('div');
                item.classList.add('watchlist-item');
                item.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}" class="watchlist-item-poster">
                    <div class="watchlist-item-info">
                        <h4 class="watchlist-item-title">${movie.title}</h4>
                        <div class="watchlist-item-meta">${movie.year} • ${movie.rating} ★</div>
                    </div>
                    <button class="watchlist-item-remove" data-id="${movie.id}" title="Remove">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                `;
                watchlistItems.appendChild(item);
            }
        });

        // Re-bind trash buttons
        document.querySelectorAll('.watchlist-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                toggleWatchlist(id);
            });
        });
    }
}

// 4. Movie Details Modal
function openMovieDetails(movieId) {
    selectedMovie = moviesData.find(m => m.id === movieId);
    if (!selectedMovie) return;

    // Reset Review Input Form
    selectedRating = 0;
    resetStarRatingInput();
    reviewerNameInput.value = '';
    reviewTextInput.value = '';

    // Populate Modal Info
    modalBackdrop.style.backgroundImage = `url('${selectedMovie.backdrop}')`;
    modalPoster.src = selectedMovie.poster;
    modalTitle.textContent = selectedMovie.title;
    modalRating.textContent = selectedMovie.rating;
    modalYear.textContent = selectedMovie.year;
    modalDuration.textContent = selectedMovie.duration;
    modalAgeRating.textContent = selectedMovie.ageRating;
    modalSynopsis.textContent = selectedMovie.description;
    modalDirector.textContent = selectedMovie.director;
    modalCast.textContent = selectedMovie.cast;

    // Populate Genres
    modalGenres.innerHTML = '';
    selectedMovie.genres.forEach(g => {
        const span = document.createElement('span');
        span.classList.add('modal-genre-pill');
        span.textContent = g;
        modalGenres.appendChild(span);
    });

    // Populate Reviews
    renderReviews();

    // Set Watchlist Button State
    updateModalWatchlistButton();

    // CTA Actions inside Modal
    modalWatchlistToggle.onclick = () => toggleWatchlist(selectedMovie.id);
    modalPlayTrailerBtn.onclick = () => {
        openTrailerModal(selectedMovie);
    };
    modalShareBtn.onclick = () => {
        navigator.clipboard.writeText(window.location.href);
        showToast("Movie link copied to clipboard!", "success");
    };

    // Show Modal
    movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalWatchlistButton() {
    if (!selectedMovie) return;
    const isAdded = watchlist.includes(selectedMovie.id);
    if (isAdded) {
        modalWatchlistToggle.innerHTML = `<i class="fa-solid fa-check"></i> In Watchlist`;
        modalWatchlistToggle.classList.remove('btn-primary');
        modalWatchlistToggle.classList.add('btn-secondary');
    } else {
        modalWatchlistToggle.innerHTML = `<i class="fa-solid fa-plus"></i> Add to Watchlist`;
        modalWatchlistToggle.classList.remove('btn-secondary');
        modalWatchlistToggle.classList.add('btn-primary');
    }
}

function renderReviews() {
    reviewsList.innerHTML = '';
    if (!selectedMovie.reviews || selectedMovie.reviews.length === 0) {
        reviewsList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">No reviews yet. Be the first to leave a review!</p>`;
    } else {
        selectedMovie.reviews.forEach(rev => {
            const revCard = document.createElement('div');
            revCard.classList.add('review-card');
            
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                starsHtml += i <= rev.rating ? `<i class="fa-solid fa-star"></i>` : `<i class="fa-regular fa-star"></i>`;
            }

            revCard.innerHTML = `
                <div class="review-card-header">
                    <span class="reviewer-name">${rev.name}</span>
                    <span class="review-stars">${starsHtml}</span>
                </div>
                <p class="review-comment">${rev.text}</p>
            `;
            reviewsList.appendChild(revCard);
        });
    }
}

// 5. Mock Video Trailer Player
let trailerTimer = null;
function openTrailerModal(movie) {
    trailerModal.classList.add('active');
    
    // Set dynamic animation colors/mood based on movie rating
    const visualizer = document.getElementById('videoBgAnimation');
    if (movie.rating > 8.5) {
        visualizer.style.background = `radial-gradient(circle, rgba(255, 184, 0, 0.2) 0%, transparent 70%)`;
    } else {
        visualizer.style.background = `radial-gradient(circle, rgba(255, 42, 95, 0.2) 0%, transparent 70%)`;
    }

    // Reset progress bar
    videoProgressBar.style.width = '0%';
    let progress = 0;
    
    // Mock progress bar flow
    if (trailerTimer) clearInterval(trailerTimer);
    trailerTimer = setInterval(() => {
        progress += 0.5;
        if (progress > 100) progress = 0; // loop
        videoProgressBar.style.width = `${progress}%`;
        
        // update time
        const totalDurationSec = 150; // 2:30
        const currentSec = Math.floor((progress / 100) * totalDurationSec);
        const formatTime = (sec) => {
            const m = Math.floor(sec / 60);
            const s = sec % 60;
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        };
        videoTime.textContent = `${formatTime(currentSec)} / 2:30`;
    }, 100);

    showToast(`Playing Cinematic Trailer for "${movie.title}"`, 'success');
}

function closeTrailer() {
    trailerModal.classList.remove('active');
    if (trailerTimer) {
        clearInterval(trailerTimer);
    }
}

// 6. Toast System
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    
    let icon = 'fa-circle-check';
    if (type === 'remove') {
        icon = 'fa-bookmark';
        toast.style.borderLeftColor = 'var(--text-muted)';
    } else if (type === 'add') {
        icon = 'fa-bookmark';
    }

    toast.innerHTML = `
        <i class="fa-solid ${icon} toast-icon"></i>
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger transition
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// 7. Event Listeners Setup
function setupEventListeners() {
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Drawer Toggles
    mobileMenuToggle.addEventListener('click', () => {
        mobileNav.classList.add('open');
    });
    closeMobileMenu.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    });

    // Mobile Navigation links active state & scroll
    document.querySelectorAll('.mobile-link, .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.mobile-link, .nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            mobileNav.classList.remove('open');
        });
    });

    // Watchlist Drawer Toggles
    watchlistToggleBtn.addEventListener('click', () => {
        watchlistDrawer.classList.add('open');
        drawerOverlay.classList.add('active');
    });

    closeDrawerBtn.addEventListener('click', () => {
        watchlistDrawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
    });

    drawerOverlay.addEventListener('click', () => {
        watchlistDrawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
    });

    clearWatchlistBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your entire watchlist?')) {
            watchlist = [];
            localStorage.setItem('filmybol_watchlist', JSON.stringify(watchlist));
            updateWatchlistUI();
            renderMovies();
            showToast('Watchlist cleared completely', 'remove');
        }
    });

    // Close Movie Details Modal
    closeModalBtn.addEventListener('click', () => {
        movieModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        selectedMovie = null;
    });

    movieModal.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            movieModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            selectedMovie = null;
        }
    });

    // Close Trailer Modal
    closeTrailerBtn.addEventListener('click', closeTrailer);
    trailerModal.addEventListener('click', (e) => {
        if (e.target === trailerModal) {
            closeTrailer();
        }
    });

    // Search input live filtering
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery.length > 0) {
            clearSearchBtn.style.display = 'block';
        } else {
            clearSearchBtn.style.display = 'none';
        }
        renderMovies();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderMovies();
    });

    // Genre pills clicking
    genrePills.addEventListener('click', (e) => {
        if (e.target.classList.contains('genre-pill')) {
            document.querySelectorAll('.genre-pill').forEach(pill => pill.classList.remove('active'));
            e.target.classList.add('active');
            activeGenre = e.target.getAttribute('data-genre');
            renderMovies();
        }
    });

    // Sort dropdown change
    sortSelect.addEventListener('change', (e) => {
        activeSort = e.target.value;
        renderMovies();
    });

    // Reset active filters
    const resetFn = () => {
        activeGenre = 'all';
        searchQuery = '';
        activeSort = 'popular';
        searchInput.value = '';
        sortSelect.value = 'popular';
        clearSearchBtn.style.display = 'none';
        document.querySelectorAll('.genre-pill').forEach(pill => {
            if (pill.getAttribute('data-genre') === 'all') {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });
        renderMovies();
    };

    resetFiltersBtn.addEventListener('click', resetFn);
    clearAllFiltersBtn.addEventListener('click', resetFn);

    // Star rating input hover/click inside review form
    starRatingInput.addEventListener('click', (e) => {
        if (e.target.tagName === 'I') {
            selectedRating = parseInt(e.target.getAttribute('data-rating'));
            updateStarRatingInput();
        }
    });

    // Review Form Submission
    addReviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (selectedRating === 0) {
            alert("Please provide a star rating before submitting.");
            return;
        }

        const reviewerName = reviewerNameInput.value.trim();
        const reviewText = reviewTextInput.value.trim();

        if (reviewerName && reviewText && selectedMovie) {
            // Append new review to database
            const newReview = {
                name: reviewerName,
                rating: selectedRating,
                text: reviewText
            };

            // Locate movie and add review
            const movieIndex = moviesData.findIndex(m => m.id === selectedMovie.id);
            if (movieIndex > -1) {
                if (!moviesData[movieIndex].reviews) {
                    moviesData[movieIndex].reviews = [];
                }
                moviesData[movieIndex].reviews.unshift(newReview);
                
                // Refresh reviews list UI
                renderReviews();
                showToast("Review submitted successfully!", "success");

                // Reset fields
                selectedRating = 0;
                resetStarRatingInput();
                reviewerNameInput.value = '';
                reviewTextInput.value = '';
            }
        }
    });

    // Newsletter Submission
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        showToast(`Successfully subscribed: ${email}`, 'success');
        newsletterForm.reset();
    });
}

function updateStarRatingInput() {
    const stars = starRatingInput.querySelectorAll('i');
    stars.forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.replace('fa-regular', 'fa-solid');
            star.classList.add('active');
        } else {
            star.classList.replace('fa-solid', 'fa-regular');
            star.classList.remove('active');
        }
    });
}

function resetStarRatingInput() {
    const stars = starRatingInput.querySelectorAll('i');
    stars.forEach(star => {
        star.classList.replace('fa-solid', 'fa-regular');
        star.classList.remove('active');
    });
}

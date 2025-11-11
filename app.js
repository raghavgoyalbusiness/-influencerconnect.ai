/*
 * Influencer Connect MVP script
 *
 * This file handles the prompt parsing, data loading,
 * filtering, sorting and rendering of influencer cards.
 */

// Influencers data - embedded directly to avoid CORS issues
const influencersData = [
  {
    "id": 1,
    "name": "Sarah Smith",
    "platform": "tiktok",
    "category": "beauty",
    "location": "London",
    "age": 22,
    "gender": "female",
    "followers": 250000,
    "engagementRate": 6.5,
    "authenticityScore": 85,
    "samplePosts": [
      "Summer make‑up tutorial",
      "Skin care tips for sensitive skin"
    ]
  },
  {
    "id": 2,
    "name": "Mike Johnson",
    "platform": "youtube",
    "category": "fitness",
    "location": "New York",
    "age": 28,
    "gender": "male",
    "followers": 350000,
    "engagementRate": 4.8,
    "authenticityScore": 80,
    "samplePosts": [
      "Home workout for beginners",
      "What I eat in a day as a fitness coach"
    ]
  },
  {
    "id": 3,
    "name": "Emily Chen",
    "platform": "instagram",
    "category": "fashion",
    "location": "Paris",
    "age": 26,
    "gender": "female",
    "followers": 180000,
    "engagementRate": 7.2,
    "authenticityScore": 88,
    "samplePosts": [
      "How to style spring outfits",
      "A day in my life as a fashion blogger"
    ]
  },
  {
    "id": 4,
    "name": "Aisha Khan",
    "platform": "tiktok",
    "category": "food",
    "location": "London",
    "age": 24,
    "gender": "female",
    "followers": 120000,
    "engagementRate": 6.0,
    "authenticityScore": 92,
    "samplePosts": [
      "Easy vegan lunch recipes",
      "Exploring London street food"
    ]
  },
  {
    "id": 5,
    "name": "Luca Rossi",
    "platform": "youtube",
    "category": "travel",
    "location": "Rome",
    "age": 29,
    "gender": "male",
    "followers": 300000,
    "engagementRate": 5.1,
    "authenticityScore": 90,
    "samplePosts": [
      "Hidden gems in Rome",
      "Travel tips for solo travellers"
    ]
  },
  {
    "id": 6,
    "name": "Ana Silva",
    "platform": "instagram",
    "category": "fitness",
    "location": "Lisbon",
    "age": 21,
    "gender": "female",
    "followers": 90000,
    "engagementRate": 7.5,
    "authenticityScore": 95,
    "samplePosts": [
      "Morning yoga routine",
      "Healthy smoothie recipes"
    ]
  },
  {
    "id": 7,
    "name": "Tom Lee",
    "platform": "tiktok",
    "category": "gaming",
    "location": "Los Angeles",
    "age": 23,
    "gender": "male",
    "followers": 400000,
    "engagementRate": 3.9,
    "authenticityScore": 78,
    "samplePosts": [
      "Best tips for FPS games",
      "Reacting to new game releases"
    ]
  },
  {
    "id": 8,
    "name": "Maya Patel",
    "platform": "instagram",
    "category": "fitness",
    "location": "London",
    "age": 27,
    "gender": "female",
    "followers": 220000,
    "engagementRate": 5.6,
    "authenticityScore": 82,
    "samplePosts": [
      "Post‑workout recovery routine",
      "High intensity interval training at home"
    ]
  },
  {
    "id": 9,
    "name": "James Wilson",
    "platform": "youtube",
    "category": "tech",
    "location": "San Francisco",
    "age": 31,
    "gender": "male",
    "followers": 850000,
    "engagementRate": 5.2,
    "authenticityScore": 88,
    "samplePosts": [
      "Latest smartphone reviews",
      "Tech tips and tricks for productivity"
    ]
  },
  {
    "id": 10,
    "name": "Sofia Martinez",
    "platform": "instagram",
    "category": "lifestyle",
    "location": "Barcelona",
    "age": 25,
    "gender": "female",
    "followers": 320000,
    "engagementRate": 6.8,
    "authenticityScore": 91,
    "samplePosts": [
      "Daily routines for success",
      "Balancing work and personal life"
    ]
  },
  {
    "id": 11,
    "name": "David Kim",
    "platform": "tiktok",
    "category": "comedy",
    "location": "Seoul",
    "age": 24,
    "gender": "male",
    "followers": 1200000,
    "engagementRate": 8.5,
    "authenticityScore": 93,
    "samplePosts": [
      "Relatable daily life skits",
      "Funny takes on current trends"
    ]
  },
  {
    "id": 12,
    "name": "Emma Thompson",
    "platform": "instagram",
    "category": "wellness",
    "location": "Melbourne",
    "age": 29,
    "gender": "female",
    "followers": 180000,
    "engagementRate": 7.3,
    "authenticityScore": 89,
    "samplePosts": [
      "Meditation and mindfulness tips",
      "Natural wellness routines"
    ]
  },
  {
    "id": 13,
    "name": "Alex Rodriguez",
    "platform": "youtube",
    "category": "food",
    "location": "Mexico City",
    "age": 26,
    "gender": "male",
    "followers": 450000,
    "engagementRate": 6.1,
    "authenticityScore": 87,
    "samplePosts": [
      "Authentic Mexican recipes",
      "Street food adventures in Mexico"
    ]
  },
  {
    "id": 14,
    "name": "Priya Sharma",
    "platform": "instagram",
    "category": "fashion",
    "location": "Mumbai",
    "age": 23,
    "gender": "female",
    "followers": 280000,
    "engagementRate": 7.8,
    "authenticityScore": 90,
    "samplePosts": [
      "Indian fashion fusion styles",
      "Affordable fashion hauls"
    ]
  },
  {
    "id": 15,
    "name": "Marcus Brown",
    "platform": "tiktok",
    "category": "fitness",
    "location": "Toronto",
    "age": 30,
    "gender": "male",
    "followers": 650000,
    "engagementRate": 6.9,
    "authenticityScore": 85,
    "samplePosts": [
      "Quick home workout routines",
      "Nutrition tips for muscle gain"
    ]
  },
  {
    "id": 16,
    "name": "Lily Chen",
    "platform": "instagram",
    "category": "beauty",
    "location": "Tokyo",
    "age": 22,
    "gender": "female",
    "followers": 410000,
    "engagementRate": 8.2,
    "authenticityScore": 94,
    "samplePosts": [
      "Japanese skincare routines",
      "K-beauty product reviews"
    ]
  },
  {
    "id": 17,
    "name": "Oliver Schmidt",
    "platform": "youtube",
    "category": "travel",
    "location": "Berlin",
    "age": 28,
    "gender": "male",
    "followers": 520000,
    "engagementRate": 5.5,
    "authenticityScore": 86,
    "samplePosts": [
      "Budget travel across Europe",
      "Hidden gems in European cities"
    ]
  },
  {
    "id": 18,
    "name": "Zara Ahmed",
    "platform": "tiktok",
    "category": "food",
    "location": "Dubai",
    "age": 25,
    "gender": "female",
    "followers": 380000,
    "engagementRate": 7.1,
    "authenticityScore": 88,
    "samplePosts": [
      "Middle Eastern cuisine recipes",
      "Food culture in Dubai"
    ]
  },
  {
    "id": 19,
    "name": "Ryan O'Connor",
    "platform": "instagram",
    "category": "gaming",
    "location": "Dublin",
    "age": 27,
    "gender": "male",
    "followers": 290000,
    "engagementRate": 4.5,
    "authenticityScore": 82,
    "samplePosts": [
      "Gaming setup tours",
      "Indie game recommendations"
    ]
  },
  {
    "id": 20,
    "name": "Chloe Williams",
    "platform": "instagram",
    "category": "lifestyle",
    "location": "Sydney",
    "age": 26,
    "gender": "female",
    "followers": 340000,
    "engagementRate": 6.7,
    "authenticityScore": 92,
    "samplePosts": [
      "Coastal living inspiration",
      "Sustainable lifestyle choices"
    ]
  },
  {
    "id": 21,
    "name": "Hassan Ali",
    "platform": "youtube",
    "category": "tech",
    "location": "Singapore",
    "age": 29,
    "gender": "male",
    "followers": 720000,
    "engagementRate": 5.8,
    "authenticityScore": 89,
    "samplePosts": [
      "AI and tech trends",
      "Gadget unboxings and reviews"
    ]
  },
  {
    "id": 22,
    "name": "Isabella Rossi",
    "platform": "tiktok",
    "category": "beauty",
    "location": "Milan",
    "age": 21,
    "gender": "female",
    "followers": 560000,
    "engagementRate": 8.9,
    "authenticityScore": 96,
    "samplePosts": [
      "Italian beauty secrets",
      "Trendy makeup tutorials"
    ]
  },
  {
    "id": 23,
    "name": "Noah Taylor",
    "platform": "instagram",
    "category": "fitness",
    "location": "Vancouver",
    "age": 24,
    "gender": "male",
    "followers": 195000,
    "engagementRate": 6.4,
    "authenticityScore": 84,
    "samplePosts": [
      "Outdoor fitness routines",
      "Nutrition for active lifestyles"
    ]
  },
  {
    "id": 24,
    "name": "Mia Johnson",
    "platform": "youtube",
    "category": "food",
    "location": "Los Angeles",
    "age": 28,
    "gender": "female",
    "followers": 480000,
    "engagementRate": 6.3,
    "authenticityScore": 87,
    "samplePosts": [
      "Healthy meal prep ideas",
      "Plant-based recipe tutorials"
    ]
  },
  {
    "id": 25,
    "name": "Ethan Davis",
    "platform": "tiktok",
    "category": "comedy",
    "location": "Chicago",
    "age": 26,
    "gender": "male",
    "followers": 980000,
    "engagementRate": 9.2,
    "authenticityScore": 95,
    "samplePosts": [
      "Hilarious storytime videos",
      "Comedy sketches and parodies"
    ]
  },
  {
    "id": 26,
    "name": "Sophia Kim",
    "platform": "instagram",
    "category": "fashion",
    "location": "Seoul",
    "age": 23,
    "gender": "female",
    "followers": 620000,
    "engagementRate": 8.1,
    "authenticityScore": 93,
    "samplePosts": [
      "K-fashion street style",
      "Seasonal wardrobe essentials"
    ]
  },
  {
    "id": 27,
    "name": "Lucas Silva",
    "platform": "youtube",
    "category": "travel",
    "location": "São Paulo",
    "age": 30,
    "gender": "male",
    "followers": 390000,
    "engagementRate": 5.4,
    "authenticityScore": 85,
    "samplePosts": [
      "South American travel guides",
      "Adventure travel vlogs"
    ]
  },
  {
    "id": 28,
    "name": "Grace Murphy",
    "platform": "instagram",
    "category": "wellness",
    "location": "Portland",
    "age": 27,
    "gender": "female",
    "followers": 165000,
    "engagementRate": 7.6,
    "authenticityScore": 91,
    "samplePosts": [
      "Holistic health practices",
      "Mental health awareness content"
    ]
  },
  {
    "id": 29,
    "name": "Jack Anderson",
    "platform": "tiktok",
    "category": "gaming",
    "location": "London",
    "age": 25,
    "gender": "male",
    "followers": 740000,
    "engagementRate": 7.4,
    "authenticityScore": 88,
    "samplePosts": [
      "Gaming highlights and clips",
      "Game strategy guides"
    ]
  },
  {
    "id": 30,
    "name": "Ava White",
    "platform": "instagram",
    "category": "lifestyle",
    "location": "New York",
    "age": 24,
    "gender": "female",
    "followers": 430000,
    "engagementRate": 7.0,
    "authenticityScore": 90,
    "samplePosts": [
      "NYC lifestyle content",
      "Productivity and organization tips"
    ]
  },
  {
    "id": 31,
    "name": "Mohamed Hassan",
    "platform": "youtube",
    "category": "tech",
    "location": "Cairo",
    "age": 32,
    "gender": "male",
    "followers": 580000,
    "engagementRate": 5.7,
    "authenticityScore": 87,
    "samplePosts": [
      "Tech reviews in Arabic",
      "Programming tutorials"
    ]
  },
  {
    "id": 32,
    "name": "Olivia Brown",
    "platform": "tiktok",
    "category": "beauty",
    "location": "Paris",
    "age": 20,
    "gender": "female",
    "followers": 890000,
    "engagementRate": 9.5,
    "authenticityScore": 97,
    "samplePosts": [
      "French beauty routines",
      "Trendy makeup transformations"
    ]
  },
  {
    "id": 33,
    "name": "Daniel Park",
    "platform": "instagram",
    "category": "fitness",
    "location": "Seoul",
    "age": 29,
    "gender": "male",
    "followers": 270000,
    "engagementRate": 6.2,
    "authenticityScore": 83,
    "samplePosts": [
      "Calisthenics workouts",
      "Fitness motivation content"
    ]
  },
  {
    "id": 34,
    "name": "Emma Wilson",
    "platform": "youtube",
    "category": "food",
    "location": "London",
    "age": 31,
    "gender": "female",
    "followers": 510000,
    "engagementRate": 6.0,
    "authenticityScore": 89,
    "samplePosts": [
      "British comfort food recipes",
      "Cooking challenges and experiments"
    ]
  },
  {
    "id": 35,
    "name": "Charlie Taylor",
    "platform": "tiktok",
    "category": "comedy",
    "location": "Toronto",
    "age": 23,
    "gender": "male",
    "followers": 1100000,
    "engagementRate": 8.8,
    "authenticityScore": 94,
    "samplePosts": [
      "Relatable Canadian humor",
      "Trending comedy content"
    ]
  },
  {
    "id": 36,
    "name": "Luna Martinez",
    "platform": "instagram",
    "category": "fashion",
    "location": "Barcelona",
    "age": 22,
    "gender": "female",
    "followers": 370000,
    "engagementRate": 7.9,
    "authenticityScore": 92,
    "samplePosts": [
      "Sustainable fashion finds",
      "Vintage style inspiration"
    ]
  },
  {
    "id": 37,
    "name": "Sam Chen",
    "platform": "youtube",
    "category": "travel",
    "location": "Tokyo",
    "age": 27,
    "gender": "male",
    "followers": 440000,
    "engagementRate": 5.9,
    "authenticityScore": 86,
    "samplePosts": [
      "Japan travel guides",
      "Cultural experiences in Asia"
    ]
  },
  {
    "id": 38,
    "name": "Ruby Singh",
    "platform": "instagram",
    "category": "wellness",
    "location": "Mumbai",
    "age": 26,
    "gender": "female",
    "followers": 210000,
    "engagementRate": 7.7,
    "authenticityScore": 90,
    "samplePosts": [
      "Yoga and meditation practices",
      "Ayurvedic wellness tips"
    ]
  },
  {
    "id": 39,
    "name": "Max Weber",
    "platform": "tiktok",
    "category": "gaming",
    "location": "Berlin",
    "age": 24,
    "gender": "male",
    "followers": 670000,
    "engagementRate": 7.3,
    "authenticityScore": 87,
    "samplePosts": [
      "Esports highlights",
      "Gaming setup and tech reviews"
    ]
  },
  {
    "id": 40,
    "name": "Zoe Anderson",
    "platform": "instagram",
    "category": "lifestyle",
    "location": "Melbourne",
    "age": 28,
    "gender": "female",
    "followers": 290000,
    "engagementRate": 6.6,
    "authenticityScore": 91,
    "samplePosts": [
      "Minimalist living tips",
      "Work-life balance advice"
    ]
  }
];

// Initialize data
let influencersCache = [];
let dataLoaded = false;
let shortlist = [];
let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
let currentFilters = {};
let currentResults = [];
let currentInfluencerForOutreach = null;
let currentInfluencerForPayment = null;
let userCredits = parseInt(localStorage.getItem('userCredits') || '0');
let selectedCreditPackage = null;

// Credits configuration
const CREDITS_PER_SEARCH = 1;
const INITIAL_FREE_CREDITS = 3; // Free credits for new users

// Offers Marketplace Data Models
const LS_OFFERS_KEY = 'ic_offers';
const LS_APPLICATIONS_KEY = 'ic_applications';
const LS_CONTRACTS_KEY = 'ic_contracts';
const LS_SUBMISSIONS_KEY = 'ic_submissions';

// Load data immediately (no fetch needed)
influencersCache = influencersData;
dataLoaded = true;

// Initialize offers data structures
function getOffers() {
  try {
    return JSON.parse(localStorage.getItem(LS_OFFERS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveOffers(offers) {
  localStorage.setItem(LS_OFFERS_KEY, JSON.stringify(offers));
}

function getApplications() {
  try {
    return JSON.parse(localStorage.getItem(LS_APPLICATIONS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveApplications(applications) {
  localStorage.setItem(LS_APPLICATIONS_KEY, JSON.stringify(applications));
}

function getContracts() {
  try {
    return JSON.parse(localStorage.getItem(LS_CONTRACTS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveContracts(contracts) {
  localStorage.setItem(LS_CONTRACTS_KEY, JSON.stringify(contracts));
}

function getSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(LS_SUBMISSIONS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveSubmissions(submissions) {
  localStorage.setItem(LS_SUBMISSIONS_KEY, JSON.stringify(submissions));
}

// Calculate stats from data
function calculateStats() {
  const totalCreators = influencersCache.length;
  const avgEngagement = (influencersCache.reduce((sum, inf) => sum + inf.engagementRate, 0) / totalCreators).toFixed(1);
  const verifiedCount = totalCreators; // All are verified in our demo
  
  return {
    creators: totalCreators,
    engagement: avgEngagement + '%',
    verified: verifiedCount
  };
}

// Update stats display
function updateStats() {
  const stats = calculateStats();
  const creatorsEl = document.getElementById('stats-creators');
  const engagementEl = document.getElementById('stats-engagement');
  const verifiedEl = document.getElementById('stats-verified');
  
  if (creatorsEl) creatorsEl.textContent = stats.creators;
  if (engagementEl) engagementEl.textContent = stats.engagement;
  if (verifiedEl) verifiedEl.textContent = stats.verified;
}

// Search function
function performSearch() {
  const prompt = document.getElementById('prompt-input').value.trim();
  if (!prompt) return;
  
  // Check if user is logged in (for brands, they need to be logged in)
  if (!currentUser) {
    showNotification('Please login to search for influencers. Brands need credits to search.', 'warning');
    showLoginModal();
    return;
  }
  
  // Check if brand user has enough credits
  if (!hasEnoughCredits()) {
    showNotification('❌ You don\'t have enough credits to perform a search. Please buy more credits.', 'error');
    showBuyCreditsModal();
    return;
  }
  
  // Deduct credits before performing search
  if (!deductCredits()) {
    showNotification('❌ Failed to deduct credits. Please try again.', 'error');
    return;
  }
  
  // Add to recent searches
  if (!recentSearches.includes(prompt)) {
    recentSearches.unshift(prompt);
    if (recentSearches.length > 5) {
      recentSearches = recentSearches.slice(0, 5);
    }
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    updateRecentSearches();
  }
  
  // Hide hero and stats, show results
  const heroSection = document.getElementById('hero-section');
  const statsSection = document.getElementById('stats-section');
  const recentSearchesSection = document.getElementById('recent-searches');
  const mainSearchSection = document.getElementById('main-search-section');
  const resultsSection = document.getElementById('results-section');
  
  if (heroSection) heroSection.classList.add('hidden');
  if (statsSection) statsSection.classList.add('hidden');
  if (recentSearchesSection) recentSearchesSection.classList.add('hidden');
  if (mainSearchSection) mainSearchSection.classList.add('compact');
  if (resultsSection) resultsSection.classList.remove('hidden');
  
  // Show loading state
  const container = document.getElementById('results-container');
  const resultsTitle = document.getElementById('results-title');
  if (container) container.innerHTML = '<p style="text-align: center; color: #fff; font-size: 1.2rem; padding: 2rem;">Searching...</p>';
  if (resultsTitle) resultsTitle.textContent = 'Searching...';
  
  // Small delay to show loading, then perform search
  setTimeout(() => {
    const criteria = parsePrompt(prompt);
    const results = searchInfluencers(criteria);
    renderResults(results, criteria);
  }, 300);
}

// Update recent searches display
function updateRecentSearches() {
  const recentSearchesList = document.getElementById('recent-searches-list');
  const recentSearchesSection = document.getElementById('recent-searches');
  
  if (!recentSearchesList) return;
  
  if (recentSearches.length === 0) {
    if (recentSearchesSection) recentSearchesSection.classList.add('hidden');
    return;
  }
  
  if (recentSearchesSection) recentSearchesSection.classList.remove('hidden');
  
  recentSearchesList.innerHTML = recentSearches.map(search => {
    const escapedSearch = search.replace(/'/g, "\\'");
    return `<button class="recent-search-item" onclick="document.getElementById('prompt-input').value='${escapedSearch}'; performSearch();">
      <span>🔍</span> ${search}
    </button>`;
  }).join('');
}

// Show home view (hero, stats, recent searches)
function showHomeView() {
  const heroSection = document.getElementById('hero-section');
  const statsSection = document.getElementById('stats-section');
  const recentSearchesSection = document.getElementById('recent-searches');
  const mainSearchSection = document.getElementById('main-search-section');
  const resultsSection = document.getElementById('results-section');
  const analyticsSection = document.getElementById('analytics-section');
  
  if (heroSection) heroSection.classList.remove('hidden');
  if (statsSection) statsSection.classList.remove('hidden');
  if (recentSearchesSection && recentSearches.length > 0) recentSearchesSection.classList.remove('hidden');
  if (mainSearchSection) mainSearchSection.classList.remove('compact');
  if (resultsSection) resultsSection.classList.add('hidden');
  if (analyticsSection) analyticsSection.classList.add('hidden');
}

// Shortlist functions
function addToShortlist(id) {
  if (!shortlist.includes(id)) {
    shortlist.push(id);
    updateShortlistUI();
    saveShortlist();
  }
}

function removeFromShortlist(id) {
  shortlist = shortlist.filter(item => item !== id);
  updateShortlistUI();
  saveShortlist();
  // Update card buttons
  const card = document.querySelector(`[data-influencer-id="${id}"]`);
  if (card) {
    const btn = card.querySelector('.shortlist-btn');
    if (btn) {
      btn.classList.remove('in-shortlist');
      btn.innerHTML = '<span>➕</span> Add to Shortlist';
    }
  }
}

function updateShortlistUI() {
  const shortlistBtn = document.getElementById('shortlist-btn');
  const shortlistCount = document.getElementById('shortlist-count');
  
  if (shortlistCount) {
    shortlistCount.textContent = shortlist.length;
  }
  
  if (shortlistBtn) {
    if (shortlist.length > 0) {
      shortlistBtn.classList.remove('hidden');
    } else {
      shortlistBtn.classList.add('hidden');
    }
  }
  
  // Update all card buttons
  document.querySelectorAll('.shortlist-btn').forEach(btn => {
    const card = btn.closest('.card');
    const id = card.getAttribute('data-influencer-id');
    if (shortlist.includes(id)) {
      btn.classList.add('in-shortlist');
      btn.innerHTML = '<span>✓</span> In Shortlist';
    } else {
      btn.classList.remove('in-shortlist');
      btn.innerHTML = '<span>➕</span> Add to Shortlist';
    }
  });
}

function saveShortlist() {
  localStorage.setItem('shortlist', JSON.stringify(shortlist));
}

function loadShortlist() {
  const saved = localStorage.getItem('shortlist');
  if (saved) {
    shortlist = JSON.parse(saved);
    updateShortlistUI();
  }
}

function showShortlist() {
  // Hide home view, show results
  const heroSection = document.getElementById('hero-section');
  const statsSection = document.getElementById('stats-section');
  const recentSearchesSection = document.getElementById('recent-searches');
  const mainSearchSection = document.getElementById('main-search-section');
  const resultsSection = document.getElementById('results-section');
  
  if (heroSection) heroSection.classList.add('hidden');
  if (statsSection) statsSection.classList.add('hidden');
  if (recentSearchesSection) recentSearchesSection.classList.add('hidden');
  if (mainSearchSection) mainSearchSection.classList.add('compact');
  if (resultsSection) resultsSection.classList.remove('hidden');
  
  const shortlistedInfluencers = influencersCache.filter(inf => shortlist.includes(inf.id.toString()));
  renderResults(shortlistedInfluencers, {}, 'Your Shortlist');
}

// Wait for DOM to be ready before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listener to search button
  const searchBtn = document.getElementById('search-btn');
  const promptInput = document.getElementById('prompt-input');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }
  
  // Attach event listener for Enter key
  if (promptInput) {
    promptInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  // Set up modal close handlers
  const modal = document.getElementById('profile-modal');
  const closeBtn = document.querySelector('.modal-close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProfileModal);
  }
  
  // Close modal when clicking outside of it
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProfileModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeProfileModal();
    }
  });
  
  // Set up example prompt tags
  const promptTags = document.querySelectorAll('.prompt-tag');
  promptTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const prompt = tag.getAttribute('data-prompt');
      const promptInput = document.getElementById('prompt-input');
      if (promptInput) {
        promptInput.value = prompt;
        performSearch();
      }
    });
  });
  
  // Set up shortlist button
  const shortlistBtn = document.getElementById('shortlist-btn');
  if (shortlistBtn) {
    shortlistBtn.addEventListener('click', showShortlist);
  }
  
  // Initialize stats and recent searches
  updateStats();
  updateRecentSearches();
  loadShortlist();
  initializeFilters();
  checkUserLogin();
  initializeOnboarding();
  updateCreditsDisplay();
  
  // Initialize pre-registration sidebar widget
  initializePreRegModal();
  
  // Initialize offers marketplace
  initializeOffersMarketplace();
  
  // Set initial view to Discover
  showHomeView();
});

// Initialize Offers Marketplace
function initializeOffersMarketplace() {
  // Create offer form
  const createOfferForm = document.getElementById('create-offer-form');
  if (createOfferForm) {
    createOfferForm.addEventListener('submit', handleCreateOffer);
  }
  
  // Budget type change handler
  const budgetTypeSelect = document.getElementById('offer-budget-type');
  if (budgetTypeSelect) {
    budgetTypeSelect.addEventListener('change', handleBudgetTypeChange);
  }
  
  // Offer filters
  const offerSearch = document.getElementById('offer-search');
  const offerFilters = document.querySelectorAll('.offer-filter');
  
  if (offerSearch) {
    offerSearch.addEventListener('input', renderOffersList);
    offerSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        renderOffersList();
      }
    });
  }
  
  offerFilters.forEach(filter => {
    filter.addEventListener('change', renderOffersList);
  });
  
  // Populate location filter
  populateLocationFilter();
  
  // Create sample offer for demo
  createSampleOfferIfNeeded();
}

function populateLocationFilter() {
  const locationFilter = document.getElementById('offer-filter-location');
  if (!locationFilter) return;
  
  const offers = getOffers();
  const locations = [...new Set(offers.map(o => o.location))].sort();
  
  locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
  });
}

function createSampleOfferIfNeeded() {
  const offers = getOffers();
  
  // Check if sample offers already exist
  const sampleOfferIds = [
    'offer_sample_1', 'offer_sample_2', 'offer_sample_3', 'offer_sample_4',
    'offer_sample_5', 'offer_sample_6', 'offer_sample_7', 'offer_sample_8'
  ];
  
  const existingSampleIds = offers.filter(o => sampleOfferIds.includes(o.id)).map(o => o.id);
  
  // Create multiple sample offers for better discovery
  const sampleOffers = [
    {
      id: 'offer_sample_1',
      business_id: 'demo@beanlab.co.uk',
      title: '3-story IG shoutout for new flat-white',
      location: 'Shoreditch, London',
      radius: 2,
      platforms: ['instagram'],
      deliverables: '1x IG Reel + 2x Stories within 7 days. Tag @BeanLabCoffee, use #BeanLabShoreditch',
      timeline: 7,
      budget_type: 'both',
      budget_cash: 60,
      in_kind: 'Free drink + pastry',
      usage_rights: 'Organic repost on our socials (30 days)',
      hashtags: ['BeanLabShoreditch', 'CoffeeTime'],
      utm_code: 'BEANLAB20',
      criteria: 'London food/coffee creators, 5k-50k followers, ER > 2%',
      status: 'open',
      created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'offer_sample_2',
      business_id: 'demo@fitnessstudio.co.uk',
      title: 'TikTok workout video collaboration',
      location: 'Camden, London',
      radius: 5,
      platforms: ['tiktok'],
      deliverables: '1x 60-second workout video featuring our new equipment. Include #FitStudioCamden and tag @FitStudioLondon',
      timeline: 10,
      budget_type: 'cash',
      budget_cash: 150,
      in_kind: '',
      usage_rights: 'Use across our social media and website (60 days)',
      hashtags: ['FitStudioCamden', 'WorkoutMotivation'],
      utm_code: 'FITSTUDIO15',
      criteria: 'Fitness creators, 10k-100k followers, ER > 3%',
      status: 'open',
      created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'offer_sample_3',
      business_id: 'demo@fashionboutique.co.uk',
      title: 'Instagram fashion haul and styling',
      location: 'Soho, London',
      radius: 3,
      platforms: ['instagram'],
      deliverables: '1x carousel post (10 images) + 3x Stories showcasing our spring collection. Tag @FashionBoutiqueSoho',
      timeline: 14,
      budget_type: 'both',
      budget_cash: 200,
      in_kind: 'Keep the featured items (worth £300)',
      usage_rights: 'Repost on our Instagram and website (90 days)',
      hashtags: ['FashionBoutiqueSoho', 'SpringStyle', 'LondonFashion'],
      utm_code: 'FASHION25',
      criteria: 'Fashion/lifestyle creators, 15k-75k followers, ER > 2.5%',
      status: 'open',
      created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'offer_sample_4',
      business_id: 'demo@techreview.co.uk',
      title: 'YouTube product review and unboxing',
      location: 'London',
      radius: 10,
      platforms: ['youtube'],
      deliverables: '1x 5-8 minute review video with unboxing, features demo, and honest opinions. Include link in description',
      timeline: 21,
      budget_type: 'cash',
      budget_cash: 500,
      in_kind: '',
      usage_rights: 'Use clips for marketing (1 year)',
      hashtags: ['TechReview', 'Unboxing'],
      utm_code: 'TECHREVIEW10',
      criteria: 'Tech YouTubers, 20k-200k subscribers, ER > 4%',
      status: 'open',
      created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 16 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'offer_sample_5',
      business_id: 'demo@restaurant.co.uk',
      title: 'Instagram restaurant experience',
      location: 'Covent Garden, London',
      radius: 4,
      platforms: ['instagram'],
      deliverables: '1x Reel showcasing dining experience + 1x carousel post with food photos + 2x Stories. Tag @RestaurantCG',
      timeline: 7,
      budget_type: 'both',
      budget_cash: 80,
      in_kind: 'Complimentary meal for 2 (worth £120)',
      usage_rights: 'Share on our social media (30 days)',
      hashtags: ['RestaurantCG', 'LondonFood', 'CoventGardenEats'],
      utm_code: 'RESTCG20',
      criteria: 'Food/lifestyle creators, 8k-60k followers, ER > 2%',
      status: 'open',
      created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'offer_sample_6',
      business_id: 'demo@beautysalon.co.uk',
      title: 'TikTok beauty transformation',
      location: 'Chelsea, London',
      radius: 6,
      platforms: ['tiktok', 'instagram'],
      deliverables: '1x TikTok video showing before/after transformation + 1x Instagram Reel + 2x Stories. Tag @BeautySalonChelsea',
      timeline: 10,
      budget_type: 'cash',
      budget_cash: 120,
      in_kind: '',
      usage_rights: 'Use for marketing materials (60 days)',
      hashtags: ['BeautySalonChelsea', 'Transformation', 'BeautyTok'],
      utm_code: 'BEAUTY15',
      criteria: 'Beauty creators, 10k-80k followers, ER > 3%',
      status: 'open',
      created_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'offer_sample_7',
      business_id: 'demo@travelagency.co.uk',
      title: 'Instagram travel destination feature',
      location: 'London',
      radius: 15,
      platforms: ['instagram'],
      deliverables: '1x carousel post (12 images) showcasing travel destination + 5x Stories with travel tips. Tag @TravelAgencyUK',
      timeline: 30,
      budget_type: 'both',
      budget_cash: 300,
      in_kind: 'Travel voucher worth £200',
      usage_rights: 'Use for promotional materials (90 days)',
      hashtags: ['TravelAgencyUK', 'TravelInspiration', 'Wanderlust'],
      utm_code: 'TRAVEL20',
      criteria: 'Travel/lifestyle creators, 25k-150k followers, ER > 2.5%',
      status: 'open',
      created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 29 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'offer_sample_8',
      business_id: 'demo@gym.co.uk',
      title: 'Instagram fitness challenge',
      location: 'Islington, London',
      radius: 5,
      platforms: ['instagram'],
      deliverables: '1x Reel demonstrating workout routine + 3x Stories with progress updates + 1x carousel post. Tag @GymIslington',
      timeline: 14,
      budget_type: 'cash',
      budget_cash: 100,
      in_kind: '1 month free gym membership',
      usage_rights: 'Share on our social media (45 days)',
      hashtags: ['GymIslington', 'FitnessChallenge', 'Workout'],
      utm_code: 'GYM10',
      criteria: 'Fitness/wellness creators, 12k-70k followers, ER > 2.5%',
      status: 'open',
      created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      deadline: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];
  
  // Only add sample offers that don't already exist
  sampleOffers.forEach(offer => {
    if (!existingSampleIds.includes(offer.id)) {
      offers.push(offer);
    }
  });
  
  saveOffers(offers);
}

// Offer Details Modal
function showOfferDetailsModal(offerId) {
  const offer = getOffers().find(o => o.id === offerId);
  if (!offer) {
    showNotification('Offer not found', 'error');
    return;
  }
  showOfferDetails(offer);
}

function showOfferDetails(offer) {
  const modal = document.getElementById('offer-details-modal');
  const content = document.getElementById('offer-details-content');
  if (!modal || !content) return;
  
  const budgetDisplay = offer.budget_type === 'in-kind' 
    ? offer.in_kind 
    : offer.budget_type === 'both'
    ? `£${offer.budget_cash} + ${offer.in_kind}`
    : `£${offer.budget_cash}`;
  
  const applications = getApplications().filter(app => app.offer_id === offer.id);
  const contracts = getContracts().filter(contract => contract.offer_id === offer.id);
  
  content.innerHTML = `
    <div class="offer-details">
      <h2>${escapeHtml(offer.title)}</h2>
      <div class="offer-card-badge ${offer.status}">${offer.status}</div>
      
      <h3>Budget</h3>
      <div class="budget-display">${escapeHtml(budgetDisplay)}</div>
      
      <h3>Location</h3>
      <p>📍 ${escapeHtml(offer.location)} (${offer.radius}km radius)</p>
      
      <h3>Platforms</h3>
      <div class="platform-badges">
        ${offer.platforms.map(p => `<span class="platform-badge">${capitalize(p)}</span>`).join('')}
      </div>
      
      <h3>Deliverables</h3>
      <p>${escapeHtml(offer.deliverables)}</p>
      
      <h3>Timeline</h3>
      <p>⏰ ${offer.timeline} days</p>
      
      ${offer.usage_rights ? `<h3>Usage Rights</h3><p>${escapeHtml(offer.usage_rights)}</p>` : ''}
      
      ${offer.hashtags && offer.hashtags.length > 0 ? `<h3>Required Hashtags</h3><p>${offer.hashtags.map(h => h.startsWith('#') ? h : `#${h}`).join(', ')}</p>` : ''}
      
      ${offer.utm_code ? `<h3>UTM Code / Coupon</h3><p>${escapeHtml(offer.utm_code)}</p>` : ''}
      
      ${offer.criteria ? `<h3>Target Creator Criteria</h3><p>${escapeHtml(offer.criteria)}</p>` : ''}
      
      <div class="offer-card-footer">
        <span>Posted ${formatDate(offer.created_at)}</span>
        <span>Deadline: ${new Date(offer.deadline).toLocaleDateString()}</span>
      </div>
      
      ${currentUser && currentUser.type === 'influencer' 
        ? (() => {
            const userContract = contracts.find(c => c.creator_id === currentUser.email);
            if (userContract) {
              const submission = getSubmissions().find(sub => sub.contract_id === userContract.id);
              if (submission) {
                return `
                  <div style="margin-top: 2rem;">
                    <h3>Your Contract</h3>
                    <p>Status: ${userContract.status}</p>
                    ${submission.status === 'pending' 
                      ? '<p>⏳ Submission pending approval</p>'
                      : submission.status === 'approved'
                      ? '<p>✅ Submission approved! Payment released (simulated).</p>'
                      : '<p>❌ Submission rejected</p>'}
                    <button class="btn-primary" onclick="closeOfferDetailsModal(); showSubmissionModal('${userContract.id}')">View Submission</button>
                  </div>
                `;
              } else {
                return `
                  <div style="margin-top: 2rem;">
                    <h3>Your Contract</h3>
                    <p>You've been accepted! Submit your work below.</p>
                    <button class="btn-primary" onclick="closeOfferDetailsModal(); showSubmissionModal('${userContract.id}')">Submit Work</button>
                  </div>
                `;
              }
            } else {
              const existingApp = getApplications().find(app => 
                app.offer_id === offer.id && app.creator_id === currentUser.email
              );
              if (existingApp) {
                return `
                  <div style="margin-top: 2rem;">
                    <p>✅ Application submitted. Status: ${existingApp.status}</p>
                  </div>
                `;
              } else {
                return `<div style="margin-top: 2rem;"><button class="btn-primary" onclick="closeOfferDetailsModal(); showApplicationModal('${offer.id}')">Apply to Offer</button></div>`;
              }
            }
          })()
        : ''}
      
      ${currentUser && currentUser.type === 'brand' && currentUser.email === offer.business_id
        ? `
          <h3>Applications (${applications.length})</h3>
          ${applications.length > 0 
            ? `<div class="applications-list">
                ${applications.map(app => {
                  // For demo, show creator email. In production, would match by creator_id to influencer profile
                  const creatorName = app.creator_id || 'Unknown Creator';
                  return `
                    <div class="application-item">
                      <div class="application-item-header">
                        <span class="application-item-creator">${escapeHtml(creatorName)}</span>
                        <span class="application-item-score">Score: ${app.score || 'N/A'}%</span>
                      </div>
                      <p>${escapeHtml(app.pitch || 'No pitch provided')}</p>
                      ${app.portfolio ? `<p><a href="${escapeHtml(app.portfolio)}" target="_blank">Portfolio Link</a></p>` : ''}
                      <div class="application-item-actions">
                        <button class="btn-primary" onclick="acceptApplication('${app.id}', '${offer.id}')">Accept</button>
                        <button class="btn-secondary" onclick="rejectApplication('${app.id}')">Reject</button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>`
            : '<p>No applications yet</p>'}
          
          <h3>Submissions</h3>
          ${(() => {
            const offerSubmissions = getSubmissions().filter(sub => {
              const contract = contracts.find(c => c.id === sub.contract_id);
              return contract !== undefined;
            });
            
            if (offerSubmissions.length > 0) {
              return `
                <div class="applications-list">
                  ${offerSubmissions.map(sub => {
                    const contract = contracts.find(c => c.id === sub.contract_id);
                    const creatorName = contract ? contract.creator_id : 'Unknown Creator';
                    return `
                      <div class="application-item">
                        <div class="application-item-header">
                          <span class="application-item-creator">${escapeHtml(creatorName)}</span>
                          <span class="submission-status ${sub.status}">${sub.status}</span>
                        </div>
                        <p><strong>Links:</strong></p>
                        <ul>
                          ${sub.links.map(link => `<li><a href="${escapeHtml(link)}" target="_blank">${escapeHtml(link)}</a></li>`).join('')}
                        </ul>
                        ${sub.screenshots && sub.screenshots.length > 0 
                          ? `<p><strong>Screenshots:</strong> ${sub.screenshots.length} uploaded</p>`
                          : ''}
                        <p>Submitted: ${formatDate(sub.posted_at)}</p>
                        ${sub.checks ? `<p>URL Check: ${sub.checks.url_ok ? '✅' : '❌'} | Date Check: ${sub.checks.date_ok ? '✅' : '❌'}</p>` : ''}
                        ${sub.status === 'pending'
                          ? `<div class="application-item-actions">
                              <button class="btn-primary" onclick="approveSubmission('${sub.id}', '${contract.id}', '${offer.id}')">Approve & Release Payment</button>
                              <button class="btn-secondary" onclick="rejectSubmission('${sub.id}')">Request Revision</button>
                            </div>`
                          : sub.status === 'approved'
                          ? `<p>✅ Approved on ${formatDate(sub.approved_at)}</p>`
                          : `<p>❌ Rejected on ${sub.rejected_at ? formatDate(sub.rejected_at) : 'N/A'}</p>`}
                      </div>
                    `;
                  }).join('')}
                </div>
              `;
            } else {
              return '<p>No submissions yet</p>';
            }
          })()}
        `
        : ''}
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function approveSubmission(submissionId, contractId, offerId) {
  const submissions = getSubmissions();
  const submission = submissions.find(sub => sub.id === submissionId);
  if (!submission) return;
  
  submission.status = 'approved';
  submission.approved_at = new Date().toISOString();
  saveSubmissions(submissions);
  
  // Update contract
  const contracts = getContracts();
  const contract = contracts.find(c => c.id === contractId);
  if (contract) {
    contract.status = 'completed';
  }
  saveContracts(contracts);
  
  // Update offer
  const offers = getOffers();
  const offer = offers.find(o => o.id === offerId);
  if (offer) {
    offer.status = 'approved';
  }
  saveOffers(offers);
  
  // Simulate payment release (in production, this would call Stripe to release escrow)
  const platformFee = offer.budget_cash * 0.15;
  const creatorPayout = offer.budget_cash - platformFee;
  
  showNotification(`Submission approved! £${creatorPayout.toFixed(2)} released to creator (15% platform fee: £${platformFee.toFixed(2)})`, 'success');
  
  // Refresh views
  if (offer) showOfferDetails(offer);
  renderMyOffers();
}

function rejectSubmission(submissionId) {
  const submissions = getSubmissions();
  const submission = submissions.find(sub => sub.id === submissionId);
  if (submission) {
    submission.status = 'rejected';
    submission.rejected_at = new Date().toISOString();
    saveSubmissions(submissions);
    showNotification('Submission rejected. Creator can submit a revision.', 'success');
  }
}

function closeOfferDetailsModal() {
  const modal = document.getElementById('offer-details-modal');
  if (modal) modal.classList.add('hidden');
}

// Application Modal
function showApplicationModal(offerId) {
  if (!currentUser || currentUser.type !== 'influencer') {
    showNotification('Please login as an influencer to apply', 'warning');
    showLoginModal();
    return;
  }
  
  const offer = getOffers().find(o => o.id === offerId);
  if (!offer) {
    showNotification('Offer not found', 'error');
    return;
  }
  
  // Check if already applied
  const existingApp = getApplications().find(app => 
    app.offer_id === offerId && app.creator_id === currentUser.email
  );
  
  if (existingApp) {
    showNotification('You have already applied to this offer', 'warning');
    return;
  }
  
  const modal = document.getElementById('application-modal');
  const content = document.getElementById('application-content');
  if (!modal || !content) return;
  
  // Find current user's influencer profile (match by location/category for demo)
  // In production, this would match by authenticated user ID
  const influencer = influencersCache.find(inf => 
    inf.location.toLowerCase().includes(offer.location.toLowerCase().split(',')[0].toLowerCase())
  ) || influencersCache[0];
  
  // Calculate auto-score
  const score = calculateApplicationScore(influencer, offer);
  
  content.innerHTML = `
    <div class="application-form">
      <div class="application-score">
        <h4>Your Match Score</h4>
        <div class="application-score-value">${score.total}%</div>
        <div class="application-score-breakdown">
          Niche: ${score.niche}% | Platform: ${score.platform}% | Location: ${score.location}% | Engagement: ${score.engagement}%
        </div>
      </div>
      
      <div class="form-group">
        <label>Your Pitch</label>
        <textarea id="application-pitch" rows="4" placeholder="Tell the business why you're a great fit for this offer..."></textarea>
      </div>
      
      <div class="form-group">
        <label>Portfolio Links (optional)</label>
        <input type="text" id="application-portfolio" placeholder="https://instagram.com/yourhandle">
      </div>
      
      <div class="form-actions">
        <button type="button" class="btn-secondary" onclick="closeApplicationModal()">Cancel</button>
        <button type="button" class="btn-primary" onclick="submitApplication('${offerId}', ${score.total})">Submit Application</button>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function closeApplicationModal() {
  const modal = document.getElementById('application-modal');
  if (modal) modal.classList.add('hidden');
}

function calculateApplicationScore(influencer, offer) {
  let score = {
    niche: 0,
    platform: 0,
    location: 0,
    engagement: 0,
    total: 0
  };
  
  // Platform match (40 points)
  if (offer.platforms.includes(influencer.platform.toLowerCase())) {
    score.platform = 40;
  }
  
  // Niche match (30 points) - simple keyword matching
  const offerText = (offer.criteria + ' ' + offer.deliverables).toLowerCase();
  const influencerCategory = influencer.category.toLowerCase();
  if (offerText.includes(influencerCategory) || influencerCategory.includes(offerText.split(' ')[0])) {
    score.niche = 30;
  } else {
    score.niche = 15; // Partial match
  }
  
  // Location match (20 points) - simplified
  if (offer.location.toLowerCase().includes('london') && influencer.location.toLowerCase().includes('london')) {
    score.location = 20;
  } else {
    score.location = 10; // Partial
  }
  
  // Engagement rate (10 points)
  if (influencer.engagementRate >= 2) {
    score.engagement = 10;
  } else if (influencer.engagementRate >= 1) {
    score.engagement = 5;
  }
  
  score.total = score.niche + score.platform + score.location + score.engagement;
  
  return score;
}

function submitApplication(offerId, score) {
  const pitch = document.getElementById('application-pitch')?.value || '';
  const portfolio = document.getElementById('application-portfolio')?.value || '';
  
  const application = {
    id: 'app_' + Date.now(),
    offer_id: offerId,
    creator_id: currentUser.email,
    pitch: pitch,
    portfolio: portfolio,
    score: score,
    status: 'pending',
    created_at: new Date().toISOString()
  };
  
  const applications = getApplications();
  applications.push(application);
  saveApplications(applications);
  
  showNotification('Application submitted successfully!', 'success');
  closeApplicationModal();
  
  // Refresh offer details if open
  const offer = getOffers().find(o => o.id === offerId);
  if (offer) {
    showOfferDetails(offer);
  }
}

function acceptApplication(applicationId, offerId) {
  const applications = getApplications();
  const application = applications.find(app => app.id === applicationId);
  if (!application) return;
  
  // Update application status
  application.status = 'accepted';
  application.accepted_at = new Date().toISOString();
  saveApplications(applications);
  
  // Update offer status
  const offers = getOffers();
  const offer = offers.find(o => o.id === offerId);
  if (offer) {
    offer.status = 'shortlisting';
    saveOffers(offers);
  }
  
  // Create contract
  const contract = {
    id: 'contract_' + Date.now(),
    offer_id: offerId,
    creator_id: application.creator_id,
    terms_url: '',
    milestones: offer.deliverables.split(',').map(d => d.trim()),
    escrow_tx_id: 'escrow_' + Date.now(),
    status: 'active',
    created_at: new Date().toISOString()
  };
  
  const contracts = getContracts();
  contracts.push(contract);
  saveContracts(contracts);
  
  // Simulate escrow (in production, this would call Stripe)
  showNotification('Application accepted! Escrow created (simulated). Creator can now submit work.', 'success');
  
  // Refresh views
  if (offer) showOfferDetails(offer);
  renderMyOffers();
}

function rejectApplication(applicationId) {
  const applications = getApplications();
  const application = applications.find(app => app.id === applicationId);
  if (application) {
    application.status = 'rejected';
    saveApplications(applications);
    showNotification('Application rejected', 'success');
  }
}

// My Offers Rendering
function renderMyOffers() {
  if (!currentUser || currentUser.type !== 'brand') return;
  
  const myOffersList = document.getElementById('my-offers-list');
  if (!myOffersList) return;
  
  const offers = getOffers().filter(offer => offer.business_id === currentUser.email);
  myOffersList.innerHTML = '';
  
  if (offers.length === 0) {
    myOffersList.innerHTML = '<p>You haven\'t created any offers yet. <a href="#" onclick="showCreateOfferModal()">Create your first offer</a>!</p>';
    return;
  }
  
  offers.forEach(offer => {
    const card = createMyOfferCard(offer);
    myOffersList.appendChild(card);
  });
}

function createMyOfferCard(offer) {
  const card = document.createElement('div');
  card.className = 'offer-card';
  
  const applications = getApplications().filter(app => app.offer_id === offer.id);
  const contracts = getContracts().filter(contract => contract.offer_id === offer.id);
  const submissions = getSubmissions().filter(sub => {
    const contract = contracts.find(c => c.id === sub.contract_id);
    return contract !== undefined;
  });
  
  const budgetDisplay = offer.budget_type === 'in-kind' 
    ? offer.in_kind 
    : offer.budget_type === 'both'
    ? `£${offer.budget_cash} + ${offer.in_kind}`
    : `£${offer.budget_cash}`;
  
  card.innerHTML = `
    <div class="offer-card-header">
      <div>
        <h3 class="offer-card-title">${escapeHtml(offer.title)}</h3>
        <div class="offer-card-meta">
          <span>📍 ${escapeHtml(offer.location)}</span>
          <span>📱 ${offer.platforms.map(p => capitalize(p)).join(', ')}</span>
          <span>📊 ${applications.length} applications</span>
          ${contracts.length > 0 ? `<span>📝 ${contracts.length} active contract${contracts.length > 1 ? 's' : ''}</span>` : ''}
        </div>
      </div>
      <span class="offer-card-badge ${offer.status}">${offer.status}</span>
    </div>
    <div class="offer-card-budget">${escapeHtml(budgetDisplay)}</div>
    <div class="offer-card-description">${escapeHtml(offer.deliverables)}</div>
    <div class="offer-card-actions">
      <button class="btn-primary" onclick="showOfferDetailsModal('${offer.id}')">View Details</button>
      ${submissions.length > 0 ? `<button class="btn-secondary" onclick="showSubmissionsForOffer('${offer.id}')">View Submissions (${submissions.length})</button>` : ''}
    </div>
    <div class="offer-card-footer">
      <span>Posted ${formatDate(offer.created_at)}</span>
      <span>Deadline: ${new Date(offer.deadline).toLocaleDateString()}</span>
    </div>
  `;
  
  return card;
}

// Submission Flow
function showSubmissionsForOffer(offerId) {
  const contracts = getContracts().filter(c => c.offer_id === offerId);
  const submissions = getSubmissions().filter(sub => {
    return contracts.some(c => c.id === sub.contract_id);
  });
  
  if (submissions.length === 0) {
    showNotification('No submissions yet for this offer', 'warning');
    return;
  }
  
  // Show submissions in a modal or navigate to a submissions view
  showNotification(`${submissions.length} submission(s) found. View in offer details.`, 'success');
  showOfferDetailsModal(offerId);
}

function showSubmissionModal(contractId) {
  const contract = getContracts().find(c => c.id === contractId);
  if (!contract) {
    showNotification('Contract not found', 'error');
    return;
  }
  
  const offer = getOffers().find(o => o.id === contract.offer_id);
  if (!offer) {
    showNotification('Offer not found', 'error');
    return;
  }
  
  const existingSubmission = getSubmissions().find(sub => sub.contract_id === contractId);
  
  const modal = document.getElementById('submission-modal');
  const content = document.getElementById('submission-content');
  if (!modal || !content) return;
  
  if (existingSubmission) {
    // Show existing submission
    content.innerHTML = `
      <div class="submission-form">
        <h2>Submission Status</h2>
        <div class="submission-status ${existingSubmission.status}">${existingSubmission.status}</div>
        
        <h3>Submitted Links</h3>
        <ul>
          ${existingSubmission.links.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('')}
        </ul>
        
        ${existingSubmission.screenshots && existingSubmission.screenshots.length > 0
          ? `<h3>Screenshots</h3><p>${existingSubmission.screenshots.length} screenshot(s) uploaded</p>`
          : ''}
        
        <p>Submitted: ${formatDate(existingSubmission.posted_at)}</p>
        
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="closeSubmissionModal()">Close</button>
        </div>
      </div>
    `;
  } else {
    // Show submission form
    content.innerHTML = `
      <div class="submission-form">
        <h2>Submit Work</h2>
        <p>Submit proof of posting for: ${escapeHtml(offer.title)}</p>
        
        <div class="submission-checklist">
          <h3>Deliverables Checklist</h3>
          ${contract.milestones.map((milestone, idx) => `
            <div class="submission-checklist-item">
              <input type="checkbox" id="milestone-${idx}" />
              <label for="milestone-${idx}">${escapeHtml(milestone)}</label>
            </div>
          `).join('')}
        </div>
        
        <div class="form-group">
          <label>Post Links <span class="req">*</span></label>
          <textarea id="submission-links" rows="3" placeholder="https://instagram.com/p/...&#10;https://instagram.com/stories/..." required></textarea>
          <small>Enter one link per line</small>
        </div>
        
        <div class="form-group">
          <label>Screenshot URLs (optional)</label>
          <textarea id="submission-screenshots" rows="2" placeholder="https://example.com/screenshot1.jpg"></textarea>
          <small>Upload screenshots to an image host and paste URLs here</small>
        </div>
        
        <div class="form-actions">
          <button type="button" class="btn-secondary" onclick="closeSubmissionModal()">Cancel</button>
          <button type="button" class="btn-primary" onclick="submitWork('${contractId}', '${offer.id}')">Submit Work</button>
        </div>
      </div>
    `;
  }
  
  modal.classList.remove('hidden');
}

function closeSubmissionModal() {
  const modal = document.getElementById('submission-modal');
  if (modal) modal.classList.add('hidden');
}

function submitWork(contractId, offerId) {
  const linksText = document.getElementById('submission-links')?.value || '';
  const screenshotsText = document.getElementById('submission-screenshots')?.value || '';
  
  if (!linksText.trim()) {
    showNotification('Please provide at least one post link', 'error');
    return;
  }
  
  const links = linksText.split('\n').map(l => l.trim()).filter(l => l);
  const screenshots = screenshotsText ? screenshotsText.split('\n').map(s => s.trim()).filter(s => s) : [];
  
  // Basic URL validation
  const urlPattern = /^https?:\/\/.+/;
  if (!links.every(l => urlPattern.test(l))) {
    showNotification('Please provide valid URLs', 'error');
    return;
  }
  
  // Check URLs (simulated - in production, this would verify the links are live)
  const urlChecks = links.map(link => ({
    url: link,
    ok: true, // Simulated - would check if URL is live
    date_ok: true // Simulated - would check if posted within window
  }));
  
  const submission = {
    id: 'sub_' + Date.now(),
    contract_id: contractId,
    application_id: getApplications().find(app => {
      const contract = getContracts().find(c => c.id === contractId);
      return contract && app.creator_id === contract.creator_id && app.offer_id === offerId;
    })?.id,
    links: links,
    screenshots: screenshots,
    posted_at: new Date().toISOString(),
    checks: {
      url_ok: urlChecks.every(c => c.ok),
      date_ok: urlChecks.every(c => c.date_ok)
    },
    status: 'pending'
  };
  
  const submissions = getSubmissions();
  submissions.push(submission);
  saveSubmissions(submissions);
  
  // Update contract status
  const contracts = getContracts();
  const contract = contracts.find(c => c.id === contractId);
  if (contract) {
    contract.status = 'submitted';
  }
  saveContracts(contracts);
  
  // Update offer status
  const offers = getOffers();
  const offer = offers.find(o => o.id === offerId);
  if (offer) {
    offer.status = 'submitted';
  }
  saveOffers(offers);
  
  showNotification('Work submitted successfully! Waiting for business approval.', 'success');
  closeSubmissionModal();
  
  // Refresh views
  renderMyOffers();
  if (offer) showOfferDetails(offer);
}

// Filter Functions
function initializeFilters() {
  // Populate location filter
  const locationFilter = document.getElementById('filter-location');
  if (locationFilter && dataLoaded) {
    const locations = [...new Set(influencersCache.map(inf => inf.location))].sort();
    locations.forEach(loc => {
      const option = document.createElement('option');
      option.value = loc;
      option.textContent = loc;
      locationFilter.appendChild(option);
    });
  }
  
  // Update payment amount calculation
  const paymentAmount = document.getElementById('payment-amount');
  if (paymentAmount) {
    paymentAmount.addEventListener('input', updatePaymentSummary);
  }
}

function toggleFilters() {
  const filtersPanel = document.getElementById('filters-panel');
  const toggleBtn = document.querySelector('.btn-filter-toggle');
  if (filtersPanel) {
    filtersPanel.classList.toggle('hidden');
    if (toggleBtn) {
      toggleBtn.innerHTML = filtersPanel.classList.contains('hidden') 
        ? '<span>🔽</span> Filters' 
        : '<span>🔼</span> Hide Filters';
    }
  }
}

function applyFilters() {
  const filters = {
    platform: document.getElementById('filter-platform')?.value || '',
    location: document.getElementById('filter-location')?.value || '',
    category: document.getElementById('filter-category')?.value || '',
    followersMin: parseInt(document.getElementById('filter-followers-min')?.value) || null,
    followersMax: parseInt(document.getElementById('filter-followers-max')?.value) || null,
    ageMin: parseInt(document.getElementById('filter-age-min')?.value) || null,
    ageMax: parseInt(document.getElementById('filter-age-max')?.value) || null,
    gender: document.getElementById('filter-gender')?.value || ''
  };
  
  currentFilters = filters;
  
  // Filter current results (no credits deducted for filtering)
  if (currentResults.length > 0) {
    const filtered = currentResults.filter(inf => {
      if (filters.platform && inf.platform !== filters.platform) return false;
      if (filters.location && inf.location !== filters.location) return false;
      if (filters.category && inf.category !== filters.category) return false;
      if (filters.followersMin && inf.followers < filters.followersMin) return false;
      if (filters.followersMax && inf.followers > filters.followersMax) return false;
      if (filters.ageMin && inf.age < filters.ageMin) return false;
      if (filters.ageMax && inf.age > filters.ageMax) return false;
      if (filters.gender && inf.gender !== filters.gender) return false;
      return true;
    });
    
    renderResults(filtered, {}, null, false);
  }
}

function clearFilters() {
  document.getElementById('filter-platform').value = '';
  document.getElementById('filter-location').value = '';
  document.getElementById('filter-category').value = '';
  document.getElementById('filter-followers-min').value = '';
  document.getElementById('filter-followers-max').value = '';
  document.getElementById('filter-age-min').value = '';
  document.getElementById('filter-age-max').value = '';
  document.getElementById('filter-gender').value = '';
  
  currentFilters = {};
  
  // Re-render original results
  if (currentResults.length > 0) {
    renderResults(currentResults, {}, null, false);
  }
}

// User Account Functions
function checkUserLogin() {
  if (currentUser) {
    document.getElementById('login-btn').classList.add('hidden');
    document.getElementById('user-menu-btn').classList.remove('hidden');
    document.getElementById('user-name').textContent = currentUser.name || 'User';
    
    // Show/hide "My Offers" nav link based on user type
    const navMyOffers = document.getElementById('nav-my-offers');
    if (navMyOffers) {
      if (currentUser.type === 'brand') {
        navMyOffers.classList.remove('hidden');
      } else {
        navMyOffers.classList.add('hidden');
      }
    }
    
    // Refresh results to show outreach/payment buttons if on results page
    if (currentResults.length > 0) {
      renderResults(currentResults, {}, null, false);
    }
  } else {
    document.getElementById('login-btn').classList.remove('hidden');
    document.getElementById('user-menu-btn').classList.add('hidden');
    const navMyOffers = document.getElementById('nav-my-offers');
    if (navMyOffers) navMyOffers.classList.add('hidden');
  }
  updateCreditsDisplay();
}

// Credits Functions
function updateCreditsDisplay() {
  const creditsDisplay = document.getElementById('credits-display');
  const creditsBalance = document.getElementById('credits-balance');
  const creditsNotice = document.getElementById('credits-notice');
  const searchBtn = document.getElementById('search-btn');
  
  if (creditsDisplay && creditsBalance) {
    // Only show credits for brand users
    if (currentUser && currentUser.type === 'brand') {
      creditsDisplay.classList.remove('hidden');
      creditsBalance.textContent = userCredits;
      
      // Add warning class if low on credits
      if (userCredits === 0) {
        creditsDisplay.classList.add('low-credits');
        if (creditsNotice) creditsNotice.classList.remove('hidden');
        if (searchBtn) {
          searchBtn.style.opacity = '0.6';
          searchBtn.style.cursor = 'not-allowed';
          searchBtn.title = 'You need credits to search. Click to buy credits.';
        }
      } else {
        creditsDisplay.classList.remove('low-credits');
        if (creditsNotice) creditsNotice.classList.add('hidden');
        if (searchBtn) {
          searchBtn.style.opacity = '1';
          searchBtn.style.cursor = 'pointer';
          searchBtn.title = '';
        }
      }
    } else {
      creditsDisplay.classList.add('hidden');
      if (creditsNotice) creditsNotice.classList.add('hidden');
      if (searchBtn) {
        searchBtn.style.opacity = '1';
        searchBtn.style.cursor = 'pointer';
        searchBtn.title = '';
      }
    }
  }
}

function hasEnoughCredits() {
  // Influencers don't need credits
  if (currentUser && currentUser.type === 'influencer') {
    return true;
  }
  
  // Brands need credits
  if (currentUser && currentUser.type === 'brand') {
    return userCredits >= CREDITS_PER_SEARCH;
  }
  
  // Non-logged-in users can't search (they need to login first)
  return false;
}

function deductCredits() {
  // Only deduct for brand users
  if (currentUser && currentUser.type === 'brand') {
    if (userCredits >= CREDITS_PER_SEARCH) {
      userCredits -= CREDITS_PER_SEARCH;
      localStorage.setItem('userCredits', userCredits.toString());
      updateCreditsDisplay();
      
      if (userCredits === 0) {
        showNotification('⚠️ You\'ve run out of credits! Buy more to continue searching.', 'warning');
      } else if (userCredits <= 3) {
        showNotification(`⚠️ Low credits! You have ${userCredits} credits remaining.`, 'warning');
      }
      
      return true;
    }
    return false;
  }
  return true; // Influencers don't need credits
}

function showBuyCreditsModal() {
  document.getElementById('buy-credits-modal').classList.remove('hidden');
  document.getElementById('credit-payment-summary').classList.add('hidden');
  selectedCreditPackage = null;
}

function closeBuyCreditsModal() {
  document.getElementById('buy-credits-modal').classList.add('hidden');
  selectedCreditPackage = null;
}

function selectCreditPackage(credits, price) {
  selectedCreditPackage = { credits, price };
  
  // Update UI to show selected package
  document.querySelectorAll('.credits-package').forEach(pkg => {
    pkg.classList.remove('selected');
    if (parseInt(pkg.dataset.credits) === credits) {
      pkg.classList.add('selected');
    }
  });
  
  // Show payment summary
  document.getElementById('selected-credits').textContent = credits;
  document.getElementById('selected-price').textContent = `$${price.toFixed(2)}`;
  document.getElementById('selected-total').textContent = `$${price.toFixed(2)}`;
  document.getElementById('credit-payment-summary').classList.remove('hidden');
  
  // Scroll to payment summary
  document.getElementById('credit-payment-summary').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function processCreditPayment() {
  if (!selectedCreditPackage) {
    showNotification('Please select a credit package first', 'warning');
    return;
  }
  
  // Mock payment processing
  // In production, this would integrate with Stripe API
  userCredits += selectedCreditPackage.credits;
  localStorage.setItem('userCredits', userCredits.toString());
  
  showNotification(`✅ Successfully purchased ${selectedCreditPackage.credits} credits! You now have ${userCredits} credits.`, 'success');
  updateCreditsDisplay();
  closeBuyCreditsModal();
  
  // In production, this would integrate with Stripe
  console.log(`Payment processed: $${selectedCreditPackage.price} for ${selectedCreditPackage.credits} credits`);
}

function showLoginModal() {
  document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.add('hidden');
}

function loginAsBrand() {
  currentUser = { type: 'brand', name: 'Brand User', email: 'brand@example.com' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  // Give free credits to new brand users
  if (userCredits === 0) {
    userCredits = INITIAL_FREE_CREDITS;
    localStorage.setItem('userCredits', userCredits.toString());
    showNotification(`Welcome! You received ${INITIAL_FREE_CREDITS} free credits to get started!`);
  }
  
  closeLoginModal();
  checkUserLogin();
  updateCreditsDisplay();
  
  if (currentResults.length > 0) {
    // Show notification
    showNotification('Logged in as Brand User. You can now create contracts!');
  }
}

function loginAsInfluencer() {
  currentUser = { type: 'influencer', name: 'Influencer', email: 'influencer@example.com' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  closeLoginModal();
  checkUserLogin();
  updateCreditsDisplay(); // Hide credits for influencers
  showNotification('Logged in as Influencer. Connect your social accounts!');
}

function oauthLogin(provider) {
  // Mock OAuth login
  const isBrand = provider !== 'instagram';
  currentUser = { 
    type: isBrand ? 'brand' : 'influencer', 
    name: provider === 'google' ? 'Google User' : 'Instagram User',
    email: `${provider}@example.com`,
    provider: provider
  };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  // Give free credits to new brand users
  if (isBrand && userCredits === 0) {
    userCredits = INITIAL_FREE_CREDITS;
    localStorage.setItem('userCredits', userCredits.toString());
    showNotification(`Welcome! You received ${INITIAL_FREE_CREDITS} free credits to get started!`);
  }
  
  closeLoginModal();
  checkUserLogin();
  updateCreditsDisplay();
  showNotification(`Connected with ${provider}! (Demo mode)`);
}

function showNotification(message, type = 'success') {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  const bgColor = type === 'warning' ? '#f39c12' : type === 'error' ? '#e74c3c' : '#27ae60';
  notification.style.cssText = `position: fixed; top: 20px; right: 20px; background: ${bgColor}; color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 10000; animation: slideIn 0.3s ease; max-width: 400px;`;
  document.body.appendChild(notification);
  
  const duration = type === 'warning' ? 5000 : 3000;
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, duration);
}

// ===== Pre-registration Sidebar Widget =====
let form, emailInput, nameInput, companyInput, roleSelect, consent;
let errEmail, errConsent, successBox, doneBtn, exportCsvLink;
let preregWidget, preregWidgetContent, preregWidgetToggle;

const LS_DONE_KEY = 'ic_prereg_done';
const LS_SUBS_KEY = 'ic_prereg_submissions';

let _firstResultShown = false;
let _preregWidgetExpanded = false;

function getSubs() {
  try {
    return JSON.parse(localStorage.getItem(LS_SUBS_KEY) || '[]');
  } catch {
    return [];
  }
}

function setSubs(arr) {
  localStorage.setItem(LS_SUBS_KEY, JSON.stringify(arr));
}

function markDone() {
  localStorage.setItem(LS_DONE_KEY, '1');
}


function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).toLowerCase());
}

function validate() {
  let ok = true;
  if (errEmail) errEmail.textContent = '';
  if (errConsent) errConsent.textContent = '';
  
  if (!validEmail(emailInput?.value || '')) {
    if (errEmail) errEmail.textContent = 'Enter a valid email.';
    ok = false;
  }
  
  if (!consent?.checked) {
    if (errConsent) errConsent.textContent = 'Please agree to be contacted.';
    ok = false;
  }
  
  return ok;
}


// Initialize pre-registration sidebar widget after DOM is ready
function initializePreRegModal() {
  preregWidget = document.getElementById('prereg-widget');
  preregWidgetContent = document.getElementById('prereg-widget-content');
  preregWidgetToggle = document.getElementById('prereg-widget-toggle');
  form = document.getElementById('prereg-form');
  emailInput = document.getElementById('prereg-email');
  nameInput = document.getElementById('prereg-name');
  companyInput = document.getElementById('prereg-company');
  roleSelect = document.getElementById('prereg-role');
  consent = document.getElementById('prereg-consent');
  errEmail = document.getElementById('err-email');
  errConsent = document.getElementById('err-consent');
  successBox = document.getElementById('prereg-success');
  doneBtn = document.getElementById('prereg-done');
  exportCsvLink = document.getElementById('export-csv');
  
  if (!preregWidget) return;
  
  // Hide widget if user already submitted
  if (localStorage.getItem(LS_DONE_KEY) === '1') {
    preregWidget.style.display = 'none';
    return;
  }
  
  // Auto-expand widget after 8 seconds or after first search
  if (localStorage.getItem(LS_DONE_KEY) !== '1') {
    setTimeout(() => {
      if (!_preregWidgetExpanded) {
        togglePreRegWidget();
      }
    }, 8000);
  }
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) return;
      
      // Save locally
      const now = new Date().toISOString();
      const payload = {
        email: (emailInput?.value || '').trim(),
        name: (nameInput?.value || '').trim(),
        company: (companyInput?.value || '').trim(),
        role: (roleSelect?.value || '').trim(),
        consent: !!consent?.checked,
        ts: now
      };
      
      const subs = getSubs();
      subs.push(payload);
      setSubs(subs);
      
      // Optional: POST to your backend or Formspree / Netlify here
      // fetch('/api/prereg', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });
      
      if (form) form.classList.add('hidden');
      if (successBox) successBox.classList.remove('hidden');
      markDone();
      
      // Hide widget after submission
      setTimeout(() => {
        if (preregWidget) {
          preregWidget.style.display = 'none';
        }
      }, 3000);
    });
  }
  
  // CSV export (hidden link in footer)
  if (exportCsvLink) {
    exportCsvLink.classList.remove('hidden');
    exportCsvLink.addEventListener('click', (e) => {
      e.preventDefault();
      const subs = getSubs();
      if (!subs.length) {
        alert('No prereg submissions yet.');
        return;
      }
      
      const headers = ['email', 'name', 'company', 'role', 'consent', 'ts'];
      const rows = [headers.join(',')].concat(
        subs.map(s =>
          headers.map(h => `"${String(s[h] ?? '').replace(/"/g, '""')}"`).join(',')
        )
      );
      
      const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'influencer-connect-prereg.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }
}

function triggerAfterResults(count) {
  if (_firstResultShown) return;
  if (count > 0 && localStorage.getItem(LS_DONE_KEY) !== '1') {
    _firstResultShown = true;
    setTimeout(() => {
      if (!_preregWidgetExpanded && preregWidget) {
        togglePreRegWidget();
      }
    }, 400); // small delay so it doesn't clash with UI
  }
}

function toggleUserMenu() {
  document.getElementById('user-menu').classList.toggle('hidden');
}

// ===== Offers Marketplace Functions =====

// View Navigation
function showHomeView() {
  hideAllSections();
  
  // Show discover page sections
  const heroSection = document.getElementById('hero-section');
  const statsSection = document.getElementById('stats-section');
  const recentSearchesSection = document.getElementById('recent-searches');
  const mainSearchSection = document.getElementById('main-search-section');
  
  if (heroSection) heroSection.classList.remove('hidden');
  if (statsSection) statsSection.classList.remove('hidden');
  if (recentSearchesSection) recentSearchesSection.classList.remove('hidden');
  if (mainSearchSection) {
    mainSearchSection.classList.remove('hidden');
    mainSearchSection.classList.remove('compact');
  }
  
  // Update navigation state
  updateNavigationState('discover');
}

function showOffersView() {
  hideAllSections();
  const offersSection = document.getElementById('offers-section');
  if (offersSection) {
    offersSection.classList.remove('hidden');
    renderOffersList();
  }
  
  // Update navigation state
  updateNavigationState('offers');
}

function showBrowseOffersView() {
  showOffersView();
  // Focus on search/filters
  const offerSearch = document.getElementById('offer-search');
  if (offerSearch) offerSearch.focus();
}

function showMyOffersView() {
  if (!currentUser || currentUser.type !== 'brand') {
    showNotification('Please login as a brand to view your offers', 'warning');
    showLoginModal();
    return;
  }
  
  hideAllSections();
  const myOffersSection = document.getElementById('my-offers-section');
  if (myOffersSection) {
    myOffersSection.classList.remove('hidden');
    renderMyOffers();
  }
  
  // Update navigation state
  updateNavigationState('my-offers');
}

function updateNavigationState(activePage) {
  // Update logo nav buttons
  const discoverBtn = document.getElementById('nav-discover-btn');
  const offersBtn = document.getElementById('nav-offers-btn');
  const myOffersBtn = document.getElementById('nav-my-offers-btn');
  
  // Remove active class from all
  [discoverBtn, offersBtn, myOffersBtn].forEach(btn => {
    if (btn) btn.classList.remove('active');
  });
  
  // Add active class to current page
  if (activePage === 'discover' && discoverBtn) {
    discoverBtn.classList.add('active');
  } else if (activePage === 'offers' && offersBtn) {
    offersBtn.classList.add('active');
  } else if (activePage === 'my-offers' && myOffersBtn) {
    myOffersBtn.classList.add('active');
  }
  
  // Update header nav links
  const discoverLink = document.getElementById('nav-link-discover');
  const offersLink = document.getElementById('nav-link-offers');
  
  [discoverLink, offersLink].forEach(link => {
    if (link) link.classList.remove('active');
  });
  
  if (activePage === 'discover' && discoverLink) {
    discoverLink.classList.add('active');
  } else if (activePage === 'offers' && offersLink) {
    offersLink.classList.add('active');
  }
}

function hideAllSections() {
  const sections = [
    'hero-section',
    'stats-section',
    'recent-searches',
    'main-search-section',
    'results-section',
    'analytics-section',
    'offers-section',
    'my-offers-section'
  ];
  
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  
  const mainSearchSection = document.getElementById('main-search-section');
  if (mainSearchSection) mainSearchSection.classList.remove('compact');
}

// Render Offers List
function renderOffersList() {
  const offersList = document.getElementById('offers-list');
  const offersEmpty = document.getElementById('offers-empty');
  if (!offersList) return;
  
  const offers = getOffers().filter(offer => offer.status === 'open');
  const filteredOffers = filterOffers(offers);
  
  offersList.innerHTML = '';
  
  if (filteredOffers.length === 0) {
    if (offersEmpty) offersEmpty.classList.remove('hidden');
    offersList.innerHTML = '';
    return;
  }
  
  if (offersEmpty) offersEmpty.classList.add('hidden');
  
  filteredOffers.forEach(offer => {
    const card = createOfferCard(offer);
    offersList.appendChild(card);
  });
}

function filterOffers(offers) {
  const searchTerm = document.getElementById('offer-search')?.value.toLowerCase() || '';
  const platformFilter = document.getElementById('offer-filter-platform')?.value || '';
  const locationFilter = document.getElementById('offer-filter-location')?.value || '';
  const budgetFilter = document.getElementById('offer-filter-budget')?.value || '';
  const typeFilter = document.getElementById('offer-filter-type')?.value || '';
  
  return offers.filter(offer => {
    // Search filter
    if (searchTerm) {
      const searchable = `${offer.title} ${offer.location} ${offer.deliverables} ${offer.criteria || ''}`.toLowerCase();
      if (!searchable.includes(searchTerm)) return false;
    }
    
    // Platform filter
    if (platformFilter && !offer.platforms.includes(platformFilter)) return false;
    
    // Location filter
    if (locationFilter && offer.location !== locationFilter) return false;
    
    // Budget filter
    if (budgetFilter) {
      const cash = offer.budget_cash || 0;
      const [min, max] = budgetFilter.split('-').map(v => v === '+' ? Infinity : parseFloat(v));
      if (cash < min || cash > max) return false;
    }
    
    // Type filter
    if (typeFilter) {
      if (typeFilter === 'cash' && (!offer.budget_cash || offer.budget_cash === 0)) return false;
      if (typeFilter === 'in-kind' && (!offer.in_kind || offer.budget_type === 'cash')) return false;
      if (typeFilter === 'both' && (!offer.budget_cash || !offer.in_kind)) return false;
    }
    
    return true;
  });
}

function createOfferCard(offer) {
  const card = document.createElement('div');
  card.className = 'offer-card';
  
  const budgetDisplay = offer.budget_type === 'in-kind' 
    ? offer.in_kind 
    : offer.budget_type === 'both'
    ? `£${offer.budget_cash} + ${offer.in_kind}`
    : `£${offer.budget_cash}`;
  
  card.innerHTML = `
    <div class="offer-card-header">
      <div>
        <h3 class="offer-card-title">${escapeHtml(offer.title)}</h3>
        <div class="offer-card-meta">
          <span>📍 ${escapeHtml(offer.location)} (${offer.radius}km)</span>
          <span>📱 ${offer.platforms.map(p => capitalize(p)).join(', ')}</span>
          <span>⏰ ${offer.timeline} days</span>
        </div>
      </div>
      <span class="offer-card-badge ${offer.status}">${offer.status}</span>
    </div>
    <div class="offer-card-budget">${escapeHtml(budgetDisplay)}</div>
    <div class="offer-card-description">${escapeHtml(offer.deliverables)}</div>
    <div class="offer-card-footer">
      <span>Posted ${formatDate(offer.created_at)}</span>
      ${currentUser && currentUser.type === 'influencer' 
        ? '<button class="btn-primary" onclick="event.stopPropagation(); showApplicationModal(\'' + offer.id + '\')">Apply</button>'
        : ''}
    </div>
  `;
  
  card.addEventListener('click', () => showOfferDetailsModal(offer.id));
  
  return card;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  return date.toLocaleDateString();
}

// Create Offer Modal
function showCreateOfferModal() {
  if (!currentUser || currentUser.type !== 'brand') {
    showNotification('Please login as a brand to create offers', 'warning');
    showLoginModal();
    return;
  }
  
  const modal = document.getElementById('create-offer-modal');
  if (modal) {
    modal.classList.remove('hidden');
    // Reset form
    document.getElementById('create-offer-form')?.reset();
    document.getElementById('offer-budget-type').addEventListener('change', handleBudgetTypeChange);
    handleBudgetTypeChange(); // Set initial state
  }
}

function closeCreateOfferModal() {
  const modal = document.getElementById('create-offer-modal');
  if (modal) modal.classList.add('hidden');
}

function handleBudgetTypeChange() {
  const budgetType = document.getElementById('offer-budget-type')?.value;
  const cashRow = document.getElementById('offer-cash-row');
  const inkindRow = document.getElementById('offer-inkind-row');
  const cashInput = document.getElementById('offer-budget-cash');
  
  if (budgetType === 'cash') {
    if (cashRow) cashRow.style.display = 'block';
    if (inkindRow) inkindRow.style.display = 'none';
    if (cashInput) cashInput.required = true;
  } else if (budgetType === 'in-kind') {
    if (cashRow) cashRow.style.display = 'none';
    if (inkindRow) inkindRow.style.display = 'block';
    if (cashInput) cashInput.required = false;
  } else { // both
    if (cashRow) cashRow.style.display = 'block';
    if (inkindRow) inkindRow.style.display = 'block';
    if (cashInput) cashInput.required = true;
  }
}

// Create Offer Form Submission
function handleCreateOffer(e) {
  e.preventDefault();
  
  if (!currentUser || currentUser.type !== 'brand') {
    showNotification('Please login as a brand', 'error');
    return;
  }
  
  const form = e.target;
  const platforms = Array.from(form.querySelectorAll('input[name="platform"]:checked')).map(cb => cb.value);
  
  if (platforms.length === 0) {
    showNotification('Please select at least one platform', 'error');
    return;
  }
  
  const budgetType = document.getElementById('offer-budget-type').value;
  const budgetCash = budgetType === 'in-kind' ? 0 : parseFloat(document.getElementById('offer-budget-cash').value) || 0;
  const inKind = budgetType === 'cash' ? '' : (document.getElementById('offer-inkind').value || '');
  
  if (budgetType !== 'in-kind' && budgetCash === 0) {
    showNotification('Please enter a cash budget', 'error');
    return;
  }
  
  if (budgetType === 'in-kind' && !inKind) {
    showNotification('Please enter an in-kind description', 'error');
    return;
  }
  
  const offer = {
    id: 'offer_' + Date.now(),
    business_id: currentUser.email,
    title: document.getElementById('offer-title').value,
    location: document.getElementById('offer-location').value,
    radius: parseInt(document.getElementById('offer-radius').value) || 5,
    platforms: platforms,
    deliverables: document.getElementById('offer-deliverables').value,
    timeline: parseInt(document.getElementById('offer-timeline').value) || 7,
    budget_type: budgetType,
    budget_cash: budgetCash,
    in_kind: inKind,
    usage_rights: document.getElementById('offer-usage').value || '',
    hashtags: document.getElementById('offer-hashtags').value.split(',').map(h => h.trim()).filter(h => h),
    utm_code: document.getElementById('offer-utm').value || '',
    criteria: document.getElementById('offer-criteria').value || '',
    status: 'open',
    created_at: new Date().toISOString(),
    deadline: new Date(Date.now() + (parseInt(document.getElementById('offer-timeline').value) || 7) * 24 * 60 * 60 * 1000).toISOString()
  };
  
  const offers = getOffers();
  offers.push(offer);
  saveOffers(offers);
  
  showNotification('Offer created successfully!', 'success');
  closeCreateOfferModal();
  
  // Calculate and charge listing fee (simulated)
  if (budgetType === 'in-kind') {
    // £5 listing fee for in-kind only
    showNotification('£5 listing fee charged (simulated)', 'success');
  } else {
    // Free listing for cash offers (fee taken on payout)
    showNotification('Offer listed for free (15% fee on payout)', 'success');
  }
  
  // Refresh offers list if on offers view
  if (!document.getElementById('offers-section').classList.contains('hidden')) {
    renderOffersList();
  }
  
  // Show my offers if on my offers view
  if (!document.getElementById('my-offers-section').classList.contains('hidden')) {
    renderMyOffers();
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  document.getElementById('login-btn').classList.remove('hidden');
  document.getElementById('user-menu-btn').classList.add('hidden');
  document.getElementById('user-menu').classList.add('hidden');
  const navMyOffers = document.getElementById('nav-my-offers');
  if (navMyOffers) navMyOffers.classList.add('hidden');
  updateCreditsDisplay(); // Hide credits when logged out
}

// Outreach Functions
function showOutreachModal(influencer) {
  currentInfluencerForOutreach = influencer;
  document.getElementById('outreach-modal').classList.remove('hidden');
  // Reset form
  document.getElementById('outreach-brand').value = currentUser?.name || 'Your Brand';
  document.getElementById('outreach-campaign').value = '';
  document.getElementById('outreach-budget').value = '';
  document.getElementById('outreach-message').classList.add('hidden');
}

function closeOutreachModal() {
  document.getElementById('outreach-modal').classList.add('hidden');
  document.getElementById('outreach-message').classList.add('hidden');
}

function generateOutreachMessage() {
  const brand = document.getElementById('outreach-brand').value || 'Your Brand';
  const campaign = document.getElementById('outreach-campaign').value || 'collaboration opportunity';
  const budget = document.getElementById('outreach-budget').value || '';
  
  if (!currentInfluencerForOutreach) return;
  
  const inf = currentInfluencerForOutreach;
  const message = `Hi ${inf.name},

I hope this message finds you well! I'm reaching out from ${brand} because I've been impressed by your ${inf.category} content on ${capitalize(inf.platform)}.

We're currently looking for creators to partner with for a ${campaign}${budget ? ` with a budget of ${budget}` : ''}.

Your authentic style and engagement with your audience (${formatNumber(inf.followers)} followers, ${inf.engagementRate}% engagement rate) align perfectly with our brand values. We'd love to explore a potential collaboration.

Would you be interested in learning more? I'd be happy to discuss the details and answer any questions you might have.

Looking forward to hearing from you!

Best regards,
${brand} Team

---
This message was generated by Influencer Connect`;
  
  document.getElementById('message-content').textContent = message;
  document.getElementById('outreach-message').classList.remove('hidden');
}

function copyOutreachMessage() {
  const message = document.getElementById('message-content').textContent;
  navigator.clipboard.writeText(message).then(() => {
    alert('Message copied to clipboard!');
  });
}

function openEmailClient() {
  const inf = currentInfluencerForOutreach;
  const subject = encodeURIComponent(`Collaboration Opportunity - ${inf.name}`);
  const body = encodeURIComponent(document.getElementById('message-content').textContent);
  window.location.href = `mailto:${inf.name.toLowerCase().replace(' ', '.')}@example.com?subject=${subject}&body=${body}`;
}

// Payment Functions
function showPaymentModal(influencer) {
  currentInfluencerForPayment = influencer;
  document.getElementById('payment-influencer').value = influencer.name;
  document.getElementById('payment-modal').classList.remove('hidden');
}

function closePaymentModal() {
  document.getElementById('payment-modal').classList.add('hidden');
}

function updatePaymentSummary() {
  const amount = parseFloat(document.getElementById('payment-amount').value) || 0;
  const platformFee = amount * 0.05;
  const total = amount + platformFee;
  
  document.getElementById('platform-fee').textContent = `$${platformFee.toFixed(2)}`;
  document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
}

function processPayment() {
  const amount = parseFloat(document.getElementById('payment-amount').value);
  if (!amount || amount <= 0) {
    alert('Please enter a valid amount');
    return;
  }
  
  // Mock payment processing
  alert(`Payment processed successfully! (Demo Mode)\n\nAmount: $${amount}\nInfluencer: ${currentInfluencerForPayment.name}\n\nIn production, this would integrate with Stripe.`);
  closePaymentModal();
}

// Analytics Functions
function showAnalyticsDashboard() {
  // Hide other sections
  const heroSection = document.getElementById('hero-section');
  const statsSection = document.getElementById('stats-section');
  const recentSearchesSection = document.getElementById('recent-searches');
  const mainSearchSection = document.getElementById('main-search-section');
  const resultsSection = document.getElementById('results-section');
  const analyticsSection = document.getElementById('analytics-section');
  
  if (heroSection) heroSection.classList.add('hidden');
  if (statsSection) statsSection.classList.add('hidden');
  if (recentSearchesSection) recentSearchesSection.classList.add('hidden');
  if (mainSearchSection) mainSearchSection.classList.add('compact');
  if (resultsSection) resultsSection.classList.add('hidden');
  if (analyticsSection) analyticsSection.classList.remove('hidden');
  
  renderAnalyticsDashboard();
  toggleUserMenu();
}

function closeAnalytics() {
  document.getElementById('analytics-section').classList.add('hidden');
}

function renderAnalyticsDashboard() {
  const content = document.getElementById('analytics-content');
  
  // Mock analytics data
  const mockData = {
    totalCampaigns: 5,
    totalReach: 2500000,
    totalEngagement: 125000,
    avgEngagementRate: 5.2,
    topInfluencers: [
      { name: 'Sarah Smith', reach: 250000, engagement: 16250, rate: 6.5 },
      { name: 'Mike Johnson', reach: 350000, engagement: 16800, rate: 4.8 },
      { name: 'Emily Chen', reach: 180000, engagement: 12960, rate: 7.2 }
    ]
  };
  
  content.innerHTML = `
    <div class="analytics-stats">
      <div class="analytics-stat-card">
        <h3>Total Campaigns</h3>
        <div class="stat-value">${mockData.totalCampaigns}</div>
      </div>
      <div class="analytics-stat-card">
        <h3>Total Reach</h3>
        <div class="stat-value">${formatNumber(mockData.totalReach)}</div>
      </div>
      <div class="analytics-stat-card">
        <h3>Total Engagement</h3>
        <div class="stat-value">${formatNumber(mockData.totalEngagement)}</div>
      </div>
      <div class="analytics-stat-card">
        <h3>Avg. Engagement Rate</h3>
        <div class="stat-value">${mockData.avgEngagementRate}%</div>
      </div>
    </div>
    <div class="analytics-table">
      <h3>Top Performing Influencers</h3>
      <table>
        <thead>
          <tr>
            <th>Influencer</th>
            <th>Reach</th>
            <th>Engagement</th>
            <th>Engagement Rate</th>
          </tr>
        </thead>
        <tbody>
          ${mockData.topInfluencers.map(inf => `
            <tr>
              <td>${inf.name}</td>
              <td>${formatNumber(inf.reach)}</td>
              <td>${formatNumber(inf.engagement)}</td>
              <td>${inf.rate}%</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <p class="analytics-note">📊 Analytics data is simulated for demo purposes</p>
  `;
}

function showCampaigns() {
  alert('Campaigns feature coming soon! (Demo Mode)');
  toggleUserMenu();
}

// Onboarding Functions
function initializeOnboarding() {
  const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
  if (!hasSeenOnboarding) {
    document.getElementById('onboarding-section').classList.remove('hidden');
  }
}

function toggleOnboarding() {
  const section = document.getElementById('onboarding-section');
  section.classList.toggle('hidden');
}

function closeOnboarding() {
  document.getElementById('onboarding-section').classList.add('hidden');
  localStorage.setItem('hasSeenOnboarding', 'true');
}

/**
 * Parse the user prompt into a criteria object.
 * This function uses simple heuristics to extract
 * location, gender, category, platform, age range and
 * follower range.
 *
 * @param {string} prompt
 * @returns {Object} criteria
 */
function parsePrompt(prompt) {
  const lower = prompt.toLowerCase();
  const criteria = {};

  // Gender with variations
  if (/\b(female|woman|women|girl|ladies|she|her)\b/.test(lower)) {
    criteria.gender = 'female';
  } else if (/\b(male|man|men|boy|guys|guy|he|him)\b/.test(lower)) {
    criteria.gender = 'male';
  }

  // Platform with variations
  if (/\b(tiktok|tick tock|tt)\b/.test(lower)) {
    criteria.platform = 'tiktok';
  } else if (/\b(instagram|ig|insta)\b/.test(lower)) {
    criteria.platform = 'instagram';
  } else if (/\b(youtube|yt)\b/.test(lower)) {
    criteria.platform = 'youtube';
  }

  // Category (niche) with synonyms
  const categoryMap = {
    'fitness': ['fitness', 'workout', 'exercise', 'gym', 'health', 'yoga', 'pilates', 'cardio', 'strength', 'training'],
    'beauty': ['beauty', 'makeup', 'cosmetics', 'skincare', 'make-up', 'glam', 'beauty tips'],
    'fashion': ['fashion', 'style', 'clothing', 'outfit', 'wardrobe', 'apparel', 'trends', 'styling'],
    'food': ['food', 'cooking', 'recipe', 'culinary', 'cuisine', 'eating', 'chef', 'meal', 'cook'],
    'travel': ['travel', 'tourism', 'vacation', 'trip', 'adventure', 'explore', 'wanderlust', 'journey'],
    'gaming': ['gaming', 'game', 'gamer', 'esports', 'video games', 'streaming', 'twitch'],
    'tech': ['tech', 'technology', 'gadget', 'electronic', 'software', 'hardware', 'ai', 'coding', 'programming', 'review'],
    'lifestyle': ['lifestyle', 'life', 'daily', 'routine', 'living', 'day in the life', 'vlog'],
    'comedy': ['comedy', 'funny', 'humor', 'humour', 'jokes', 'comedy', 'entertainment', 'fun'],
    'wellness': ['wellness', 'well-being', 'wellbeing', 'mental health', 'meditation', 'mindfulness', 'self-care', 'holistic']
  };
  
  for (const [category, keywords] of Object.entries(categoryMap)) {
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        criteria.category = category;
        break;
      }
    }
    if (criteria.category) break;
  }

  // Location: look for any influencer location appearing in prompt
  // Build a unique list of locations from the dataset
  // Only if data is loaded (prevents race condition)
  if (dataLoaded && influencersCache.length > 0) {
    const locSet = new Set(influencersCache.map((inf) => inf.location.toLowerCase()));
    for (const loc of locSet) {
      if (lower.includes(loc)) {
        criteria.location = capitalizeEachWord(loc);
        break;
      }
    }
  }

  // Age range, pattern like "18-24" or "18 to 24"
  const ageMatch = lower.match(/(\d{1,2})\s*(?:-|to)\s*(\d{1,2})/);
  if (ageMatch) {
    const minAge = parseInt(ageMatch[1], 10);
    const maxAge = parseInt(ageMatch[2], 10);
    criteria.ageRange = { min: Math.min(minAge, maxAge), max: Math.max(minAge, maxAge) };
  }

  // Initialize followers range object
  criteria.followersRange = {};
  
  // Parse follower ranges first (e.g., "50k-200k") - most specific
  const followerRangeMatch = lower.match(/(\d+(?:\.\d+)?)\s*(k|m|thousand|million)\s*(?:-|to)\s*(\d+(?:\.\d+)?)\s*(k|m|thousand|million)/);
  if (followerRangeMatch) {
    const minNum = parseFloat(followerRangeMatch[1]);
    const minUnit = followerRangeMatch[2].toLowerCase();
    const maxNum = parseFloat(followerRangeMatch[3]);
    const maxUnit = followerRangeMatch[4].toLowerCase();
    const minFollowers = minUnit.includes('m') || minUnit.includes('million') ? minNum * 1000000 : minNum * 1000;
    const maxFollowers = maxUnit.includes('m') || maxUnit.includes('million') ? maxNum * 1000000 : maxNum * 1000;
    criteria.followersRange = { min: minFollowers, max: maxFollowers };
  } else {
    // Parse specific follower numbers (e.g., "100k", "500k", "1m")
    const followerMatch = lower.match(/(\d+(?:\.\d+)?)\s*(k|m|thousand|million)/);
    if (followerMatch) {
      const number = parseFloat(followerMatch[1]);
      const unit = followerMatch[2].toLowerCase();
      const minFollowers = unit.includes('m') || unit.includes('million') ? number * 1000000 : number * 1000;
      criteria.followersRange = { min: minFollowers };
    } else {
      // Follower range based on micro/macro cues
      if (lower.includes('micro') || lower.includes('small') || lower.includes('nan')) {
        // micro-influencers: up to 100k
        criteria.followersRange = { max: 100000 };
      } else if (lower.includes('macro') || lower.includes('large') || lower.includes('big')) {
        // macro-influencers: more than 100k
        criteria.followersRange = { min: 100000 };
      } else if (lower.includes('mega') || lower.includes('celebrity')) {
        // mega-influencers: more than 1M
        criteria.followersRange = { min: 1000000 };
      }
    }
  }
  
  // If no range was set, remove the empty object
  if (Object.keys(criteria.followersRange).length === 0) {
    delete criteria.followersRange;
  }

  return criteria;
}

/**
 * Filter and rank influencers based on criteria.
 *
 * @param {Object} criteria
 * @returns {Array} list of matching influencers
 */
function searchInfluencers(criteria) {
  const matches = influencersCache.filter((inf) => {
    // Location
    if (criteria.location && inf.location.toLowerCase() !== criteria.location.toLowerCase()) {
      return false;
    }
    // Gender
    if (criteria.gender && inf.gender !== criteria.gender) {
      return false;
    }
    // Category
    if (criteria.category && inf.category !== criteria.category) {
      return false;
    }
    // Platform
    if (criteria.platform && inf.platform !== criteria.platform) {
      return false;
    }
    // Age range
    if (criteria.ageRange) {
      if (inf.age < criteria.ageRange.min || inf.age > criteria.ageRange.max) {
        return false;
      }
    }
    // Followers range
    if (criteria.followersRange) {
      if (
        (criteria.followersRange.min && inf.followers < criteria.followersRange.min) ||
        (criteria.followersRange.max && inf.followers > criteria.followersRange.max)
      ) {
        return false;
      }
    }
    return true;
  });

  // Compute a score and sort
  const scored = matches.map((inf) => {
    const engagementScore = inf.engagementRate * 10; // weight engagement
    const authenticityScore = inf.authenticityScore;
    return { ...inf, score: engagementScore + authenticityScore };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

/**
 * Render the results section with influencer cards.
 *
 * @param {Array} results
 * @param {Object} criteria
 */
function renderResults(results, criteria, customTitle = null, saveResults = true) {
  const resultsSection = document.getElementById('results-section');
  const container = document.getElementById('results-container');
  const resultsTitle = document.getElementById('results-title');
  const resultsSubtitle = document.getElementById('results-subtitle');
  container.innerHTML = '';
  
  // Save current results for filtering
  if (saveResults) {
    currentResults = [...results];
  }
  
  // Trigger pre-registration modal after first successful search
  if (saveResults && results.length > 0 && typeof triggerAfterResults === 'function') {
    triggerAfterResults(results.length);
  }
  
  if (!results.length) {
    container.innerHTML = '<p style="text-align: center; color: #fff; font-size: 1.2rem; padding: 2rem; background: rgba(255,255,255,0.1); border-radius: 12px; backdrop-filter: blur(10px);">No influencers found for your criteria. Try adjusting your prompt or filters.</p>';
    if (resultsTitle) resultsTitle.textContent = 'No Results Found';
    if (resultsSubtitle) resultsSubtitle.textContent = 'Try a different search query or clear filters';
  } else {
    if (resultsTitle) {
      resultsTitle.textContent = customTitle || `${results.length} ${results.length === 1 ? 'Creator' : 'Creators'} Found`;
    }
    if (resultsSubtitle) {
      resultsSubtitle.textContent = 'Ranked by relevance and authenticity score';
    }
    results.forEach((inf) => {
      const card = document.createElement('div');
      card.className = 'card';
      
      const nameEl = document.createElement('h3');
      nameEl.textContent = inf.name;
      
      const metaEl = document.createElement('div');
      metaEl.className = 'meta';
      
      // Platform badge with icon
      const platformSpan = document.createElement('span');
      platformSpan.className = `platform-badge ${inf.platform}`;
      
      // Platform icons
      const platformIcons = {
        'tiktok': '🎵',
        'instagram': '📷',
        'youtube': '▶️'
      };
      platformSpan.innerHTML = `${platformIcons[inf.platform] || '📱'} ${capitalize(inf.platform)}`;
      
      // Category and location with better styling
      const categoryText = document.createTextNode(capitalize(inf.category));
      const locationText = document.createTextNode(`📍 ${inf.location}`);
      
      metaEl.appendChild(platformSpan);
      metaEl.appendChild(document.createTextNode(' • '));
      metaEl.appendChild(categoryText);
      metaEl.appendChild(document.createTextNode(' • '));
      metaEl.appendChild(locationText);
      
      const metricsEl = document.createElement('div');
      metricsEl.className = 'metrics';
      metricsEl.innerHTML = `
        <div><strong>👥 Followers:</strong> ${formatNumber(inf.followers)}</div>
        <div><strong>💬 Engagement:</strong> ${inf.engagementRate}%</div>
        <div><strong>⭐ Authenticity:</strong> ${inf.authenticityScore}/100</div>
      `;
      
      const explanationEl = document.createElement('div');
      explanationEl.className = 'explanation';
      explanationEl.textContent = buildExplanation(inf, criteria);
      
      // Add card ID for shortlist tracking
      card.setAttribute('data-influencer-id', inf.id.toString());
      
      // Add a "View Profile" button FIRST
      const viewProfileBtn = document.createElement('button');
      viewProfileBtn.className = 'view-profile-btn';
      viewProfileBtn.textContent = 'View Profile';
      viewProfileBtn.setAttribute('type', 'button');
      viewProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        showProfileModal(inf);
      });
      
      // Add shortlist button
      const shortlistBtn = document.createElement('button');
      shortlistBtn.className = 'shortlist-btn';
      shortlistBtn.setAttribute('type', 'button');
      const influencerId = inf.id.toString();
      
      // Check current shortlist state
      function updateShortlistButtonState() {
        const isInShortlist = shortlist.includes(influencerId);
        if (isInShortlist) {
          shortlistBtn.classList.add('in-shortlist');
          shortlistBtn.innerHTML = '<span>✓</span> In Shortlist';
        } else {
          shortlistBtn.classList.remove('in-shortlist');
          shortlistBtn.innerHTML = '<span>➕</span> Add to Shortlist';
        }
      }
      
      updateShortlistButtonState();
      
      shortlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const isInShortlist = shortlist.includes(influencerId);
        if (isInShortlist) {
          removeFromShortlist(influencerId);
        } else {
          addToShortlist(influencerId);
        }
        updateShortlistButtonState();
      });
      
      // Make card clickable
      card.style.cursor = 'pointer';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View profile of ${inf.name}`);
      
      // Add click handler to entire card - click anywhere on card opens modal
      card.addEventListener('click', (e) => {
        // Only prevent if clicking directly on the button itself
        if (e.target === viewProfileBtn || viewProfileBtn.contains(e.target)) {
          return; // Button will handle its own click
        }
        // Otherwise, open the modal
        showProfileModal(inf);
      });
      
      // Keyboard accessibility
      card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showProfileModal(inf);
        }
      });
      
      // Append all elements to card
      card.appendChild(nameEl);
      card.appendChild(metaEl);
      card.appendChild(metricsEl);
      card.appendChild(explanationEl);
      
      // Button container
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'card-buttons';
      buttonContainer.appendChild(viewProfileBtn);
      buttonContainer.appendChild(shortlistBtn);
      
      // Add outreach button if logged in
      if (currentUser) {
        const outreachBtn = document.createElement('button');
        outreachBtn.className = 'outreach-btn';
        outreachBtn.innerHTML = '<span>💬</span> Outreach';
        outreachBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          showOutreachModal(inf);
        });
        buttonContainer.appendChild(outreachBtn);
        
        // Add payment button if brand user
        if (currentUser.type === 'brand') {
          const paymentBtn = document.createElement('button');
          paymentBtn.className = 'payment-btn';
          paymentBtn.innerHTML = '<span>💳</span> Create Contract';
          paymentBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            showPaymentModal(inf);
          });
          buttonContainer.appendChild(paymentBtn);
        }
      }
      
      card.appendChild(buttonContainer);
      
      container.appendChild(card);
    });
  }
  resultsSection.classList.remove('hidden');
  // Scroll into view after rendering
  resultsSection.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Build a human‑readable explanation why the influencer matches.
 *
 * @param {Object} inf
 * @param {Object} criteria
 * @returns {string}
 */
function buildExplanation(inf, criteria) {
  const reasons = [];
  if (criteria.category) {
    reasons.push(`creates ${criteria.category} content`);
  }
  if (criteria.location) {
    reasons.push(`is based in ${inf.location}`);
  }
  if (criteria.gender) {
    reasons.push(`is ${criteria.gender}`);
  }
  if (criteria.ageRange) {
    reasons.push(`is aged ${inf.age}`);
  }
  if (criteria.platform) {
    reasons.push(`uses ${capitalize(criteria.platform)}`);
  }
  if (criteria.followersRange) {
    if (criteria.followersRange.max && inf.followers <= criteria.followersRange.max) {
      reasons.push(`is a micro‑influencer`);
    } else if (criteria.followersRange.min && inf.followers >= criteria.followersRange.min) {
      reasons.push(`has a larger following`);
    }
  }
  // Always mention engagement/authenticity
  reasons.push(`has ${inf.engagementRate}% engagement`);
  reasons.push(`has authenticity score of ${inf.authenticityScore}`);
  return 'This creator ' + reasons.join(', ') + '.';
}

/**
 * Show the profile modal with influencer details.
 *
 * @param {Object} inf
 */
function showProfileModal(inf) {
  const modal = document.getElementById('profile-modal');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalBody) {
    alert('Error: Could not open profile. Please refresh the page.');
    return;
  }
  
  // Build modal content
  modalBody.innerHTML = `
    <div class="profile-header">
      <h2>${inf.name}</h2>
      <div class="profile-badges">
        <span class="platform-badge ${inf.platform}">${capitalize(inf.platform)}</span>
        <span class="category-badge">${capitalize(inf.category)}</span>
      </div>
    </div>
    
    <div class="profile-info">
      <div class="info-section">
        <h3>📍 Location</h3>
        <p>${inf.location}</p>
      </div>
      
      <div class="info-section">
        <h3>👤 Demographics</h3>
        <p><strong>Age:</strong> ${inf.age} years old</p>
        <p><strong>Gender:</strong> ${capitalize(inf.gender)}</p>
      </div>
      
      <div class="info-section">
        <h3>📊 Metrics</h3>
        <div class="metrics-grid">
          <div class="metric-item">
            <div class="metric-value">${formatNumber(inf.followers)}</div>
            <div class="metric-label">Followers</div>
          </div>
          <div class="metric-item">
            <div class="metric-value">${inf.engagementRate}%</div>
            <div class="metric-label">Engagement Rate</div>
          </div>
          <div class="metric-item">
            <div class="metric-value">${inf.authenticityScore}</div>
            <div class="metric-label">Authenticity Score</div>
          </div>
        </div>
      </div>
      
      <div class="info-section">
        <h3>📝 Sample Posts</h3>
        <ul class="sample-posts">
          ${inf.samplePosts.map(post => `<li>${post}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  
  // Ensure close button handler is attached
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    // Remove any existing handlers and add new one
    closeBtn.onclick = closeProfileModal;
  }
  
  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Close the profile modal.
 */
function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
  }
}


/**
 * Utility: Capitalize first letter.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Utility: Capitalize each word in a string.
 */
function capitalizeEachWord(str) {
  return str
    .split(' ')
    .map((w) => capitalize(w))
    .join(' ');
}

/**
 * Utility: Format numbers with commas.
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
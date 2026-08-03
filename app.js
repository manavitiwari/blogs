/* ==========================================================================
   Chronicle & Mind - Application Logic & State Engine
   ========================================================================== */

// --- INITIAL SEED ARTICLES ---
const SEED_ARTICLES = [
  {
    id: "art-1",
    title: "Building Autonomous AI Agents with Modern Web APIs",
    subtitle: "How web streams, web workers, and local browser capabilities empower a new generation of intelligent agentic software.",
    excerpt: "Discover how modern browser capabilities, high-performance web streams, and client-side intelligence are enabling a new paradigm of multi-agent web software without heavy server round-trips.",
    category: "Technology",
    format: "indepth",
    authorType: "group",
    authorName: "Tech Explorers Collective",
    authorBio: "Group Publication • 12 Senior Engineers & AI Researchers",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    coverImage: "assets/tech_ai.jpg",
    date: "Aug 3, 2026",
    readingTime: "6 min read",
    claps: 142,
    tags: ["AI", "Web APIs", "Architecture"],
    featured: true,
    content: `## The Next Evolution of Autonomous Web Software

For years, web applications relied on traditional request-response backend cycles for complex tasks. Today, modern Web APIs paired with streaming models and client-side web workers allow us to build autonomous agentic workflows directly inside the browser environment.

> "The browser is no longer just a rendering document engine; it is a full-fledged distributed execution platform."

### Key Architectural Patterns

When building agentic web applications, three foundational pillars must be considered:

1. **Reactive State Syncing**: Using modern WebSockets and LocalStorage sync events to keep real-time UI states consistent across tabs.
2. **Web Worker Offloading**: Moving heavy markdown processing, search indexing, and graph computations off the main thread.
3. **Progressive Enhancement**: Ensuring features degrade gracefully on slower devices while providing desktop-class speeds on high-end hardware.

\`\`\`javascript
// Example: Creating a non-blocking background worker stream
const worker = new Worker('agent-worker.js', { type: 'module' });
worker.postMessage({ task: 'ANALYZE_STREAM', payload: dataChunk });
worker.onmessage = (e) => updateUI(e.data);
\`\`\`

### Summary & Future Outlook

As browser standards continue to evolve with anchor positioning, container queries, and native view transitions, building ultra-smooth agentic experiences will become standard practice across all web platforms.`
  },
  {
    id: "art-2",
    title: "Late Night Thoughts: Lessons Learned After 5 Years of Remote Work",
    subtitle: "A personal reflection on solitude, deep focus, boundaries, and finding joy in quiet routines.",
    excerpt: "Looking back at half a decade of working from coffee shops, home desks, and silent evenings across three timezones. Here is what stayed with me.",
    category: "Personal",
    format: "diary",
    authorType: "individual",
    authorName: "Elena Rostova",
    authorBio: "Personal Columnist & UX Writer",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    coverImage: "assets/diary_cozy.jpg",
    date: "Aug 2, 2026",
    readingTime: "4 min read",
    claps: 89,
    tags: ["Diary", "Work Life", "Reflections"],
    featured: false,
    content: `## Rainy Evenings & Quiet Desks

It's 11:30 PM as I write this. Rain is tapping against my window pane, and the steam from my chamomile tea is slowly dissolving into the dim desk lamp glow. Five years ago today, I packed my office desk and walked away from corporate cubicles for good.

### What Nobody Tells You About Remote Solitude

When you work in complete autonomy, freedom is both a gift and a responsibility that requires gentle discipline:

* **The Power of Micro-Routines**: A 10-minute morning walk without headphones resets your circadian rhythm better than any coffee.
* **Separating Space from Mind**: Never work in the same spot where you relax or sleep. The mental boundaries matter more than physical walls.
* **Asynchronous Clarity**: Writing thoughtful, concise messages saves hours of unnecessary video meetings.

> "True flexibility isn't working 24/7 whenever you feel like it. It's knowing when to close the laptop and be present in the room."

I wouldn't trade these peaceful late nights for anything.`
  },
  {
    id: "art-3",
    title: "10 Pro Tips for Ultra-Clean CSS Architecture in 2026",
    subtitle: "Actionable developer tips to eliminate CSS debt, leverage modern selectors, and master layout math.",
    excerpt: "Stop wrestling with specificity wars and redundant utility classes. Master modern CSS container queries, `:has()` relational selectors, and clean custom properties.",
    category: "Design",
    format: "tips",
    authorType: "individual",
    authorName: "Marcus Vance",
    authorBio: "Lead Design Systems Engineer",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    coverImage: "assets/tips_design.jpg",
    date: "Aug 1, 2026",
    readingTime: "5 min read",
    claps: 215,
    tags: ["CSS", "Frontend", "Pro Tips"],
    featured: false,
    content: `## Clean Up Your Stylesheet Today

CSS in 2026 has evolved faster than ever. Here are 5 essential rules to write clean, maintainable stylesheets for modern web projects:

### Tip 1: Use `:has()` for Parent Selection without JavaScript

You no longer need JS to style a container based on its child states:

\`\`\`css
/* Style card header dynamically if it contains a featured badge */
.card-header:has(.badge-spotlight) {
  background: rgba(99, 102, 241, 0.1);
  border-bottom: 1px solid var(--accent-primary);
}
\`\`\`

### Tip 2: Modular CSS Variables for Theming

Group your design tokens into logical HSL variables so switching dark/light modes requires zero code duplication.

### Tip 3: Fluid Typography with \`clamp()\`

\`\`\`css
/* Smooth fluid scaling between mobile and desktop */
h1 {
  font-size: clamp(1.8rem, 4vw + 1rem, 3.2rem);
}
\`\`\`

Implement these patterns today to trim your CSS bundle size by up to 40%!`
  },
  {
    id: "art-4",
    title: "The Philosophy of Minimalist UI & Motion Design",
    subtitle: "Why subtle micro-interactions and intentional white space create emotional user resonance.",
    excerpt: "An exploration of minimalist digital interfaces, glassmorphic elevation layers, and how fluid animations elevate user engagement.",
    category: "Design",
    format: "article",
    authorType: "group",
    authorName: "Design Guild Collective",
    authorBio: "Group Publication • International UI/UX Designers",
    authorAvatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80",
    coverImage: "assets/tips_design.jpg",
    date: "Jul 30, 2026",
    readingTime: "7 min read",
    claps: 176,
    tags: ["UI/UX", "Animation", "Design"],
    featured: false,
    content: `## Silence in Visual Design

Great design is not about adding more elements until there's no space left; it's about removing clutter until only what is meaningful remains.

### The 3 Core Principles of Emotional Motion

1. **Subtle Feedback**: Every interactive hover and click should feel responsive without distracting from the content.
2. **Consistent Spatial Geometry**: Maintain strict grid padding and dynamic container proportions.
3. **Harmonious Color Palettes**: Limit primary accents and use translucent glass overlays for visual depth.`
  },
  {
    id: "art-5",
    title: "Quantum Computing Unleashed: What Developers Need to Know",
    subtitle: "Understanding qubit superpositions, quantum algorithms, and practical applications in cryptography.",
    excerpt: "As quantum hardware approaches practical utility, software engineers must understand quantum circuits, entanglement, and post-quantum encryption standards.",
    category: "Science",
    format: "indepth",
    authorType: "individual",
    authorName: "Dr. Aris Thorne",
    authorBio: "Quantum Physicist & Tech Contributor",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    coverImage: "assets/science_space.jpg",
    date: "Jul 28, 2026",
    readingTime: "8 min read",
    claps: 310,
    tags: ["Science", "Quantum", "Future Tech"],
    featured: false,
    content: `## Beyond Classical Bit Logic

Classical computers manipulate bits that represent either a 0 or a 1. Quantum computing utilizes quantum mechanics phenomena like superposition and entanglement to solve calculations in parallel universes of possibility.

> "Quantum algorithms won't replace your laptop; they will solve computational problems that would take supercomputers 10,000 years to execute."

### Key Concepts for Engineers

- **Qubits & Superposition**: Allowing states to exist as linear combinations of 0 and 1 simultaneously.
- **Quantum Entanglement**: Interconnected qubit states regardless of physical distance.
- **Post-Quantum Cryptography**: Preparing modern web security for quantum factorization risks.`
  }
];

// --- APP STATE ---
let state = {
  articles: [],
  savedBookmarks: [],
  userClaps: {},
  comments: {
    "art-1": [
      { id: "c-1", author: "Sarah Jenkins", text: "This article on browser Web APIs is brilliant! Web workers make a huge difference in performance.", date: "Aug 3, 2026", claps: 12 },
      { id: "c-2", author: "Alex Rivera", text: "Loved the code example. Modern web standards are evolving so quickly!", date: "Aug 3, 2026", claps: 5 }
    ],
    "art-2": [
      { id: "c-3", author: "David K.", text: "As a fellow remote writer, the part about micro-routines resonated deeply with me. Great piece Elena!", date: "Aug 2, 2026", claps: 8 }
    ]
  },
  theme: "dark",
  activeTab: "all",
  activeCategory: "all",
  searchQuery: "",
  sortMode: "latest",
  activeReaderArticleId: null,
  isAudioPlaying: false,
  fontSize: "md"
};

// --- DOM ELEMENTS ---
const elements = {
  searchInput: document.getElementById('searchInput'),
  articlesGrid: document.getElementById('articlesGrid'),
  heroSpotlight: document.getElementById('heroSpotlight'),
  heroTitle: document.getElementById('heroTitle'),
  heroExcerpt: document.getElementById('heroExcerpt'),
  heroAuthorName: document.getElementById('heroAuthorName'),
  heroAuthorRole: document.getElementById('heroAuthorRole'),
  heroAuthorAvatar: document.getElementById('heroAuthorAvatar'),
  heroDate: document.getElementById('heroDate'),
  heroReadTime: document.getElementById('heroReadTime'),
  heroImage: document.getElementById('heroImage'),
  heroReadBtn: document.getElementById('heroReadBtn'),
  heroBookmarkBtn: document.getElementById('heroBookmarkBtn'),
  formatTabs: document.getElementById('formatTabs'),
  categoryPills: document.getElementById('categoryPills'),
  sortSelect: document.getElementById('sortSelect'),
  savedCountBadge: document.getElementById('savedCountBadge'),
  
  // Modals & Backdrops
  readerModalBackdrop: document.getElementById('readerModalBackdrop'),
  closeReaderBtn: document.getElementById('closeReaderBtn'),
  readerTitle: document.getElementById('readerTitle'),
  readerSubtitle: document.getElementById('readerSubtitle'),
  readerAuthorName: document.getElementById('readerAuthorName'),
  readerAuthorBio: document.getElementById('readerAuthorBio'),
  readerAuthorAvatar: document.getElementById('readerAuthorAvatar'),
  readerDate: document.getElementById('readerDate'),
  readerTime: document.getElementById('readerTime'),
  readerBannerImage: document.getElementById('readerBannerImage'),
  readerBodyText: document.getElementById('readerBodyText'),
  readerTagsContainer: document.getElementById('readerTagsContainer'),
  readerClapsCount: document.getElementById('readerClapsCount'),
  readerClapBtn: document.getElementById('readerClapBtn'),
  readerBookmarkBtn: document.getElementById('readerBookmarkBtn'),
  readerBookmarkIcon: document.getElementById('readerBookmarkIcon'),
  readingProgressTrack: document.getElementById('readingProgressTrack'),
  readerContentScroll: document.getElementById('readerContentScroll'),
  audioPlayerCard: document.getElementById('audioPlayerCard'),
  audioPlayBtn: document.getElementById('audioPlayBtn'),
  audioPlayIcon: document.getElementById('audioPlayIcon'),
  commentsContainer: document.getElementById('commentsContainer'),
  commentsTitle: document.getElementById('commentsTitle'),
  newCommentInput: document.getElementById('newCommentInput'),
  submitCommentBtn: document.getElementById('submitCommentBtn'),

  // Writer Modal
  writerModalBackdrop: document.getElementById('writerModalBackdrop'),
  openWriterBtn: document.getElementById('openWriterBtn'),
  closeWriterBtn: document.getElementById('closeWriterBtn'),
  writerForm: document.getElementById('writerForm'),
  writeTitle: document.getElementById('writeTitle'),
  writeExcerpt: document.getElementById('writeExcerpt'),
  writeCategory: document.getElementById('writeCategory'),
  writeFormat: document.getElementById('writeFormat'),
  writeAuthorType: document.getElementById('writeAuthorType'),
  writeAuthorName: document.getElementById('writeAuthorName'),
  writeTags: document.getElementById('writeTags'),
  writeCoverPreset: document.getElementById('writeCoverPreset'),
  writeContent: document.getElementById('writeContent'),
  previewTitle: document.getElementById('previewTitle'),
  previewExcerpt: document.getElementById('previewExcerpt'),
  previewBody: document.getElementById('previewBody'),

  // Analytics Modal
  analyticsModalBackdrop: document.getElementById('analyticsModalBackdrop'),
  analyticsBtn: document.getElementById('analyticsBtn'),
  closeAnalyticsBtn: document.getElementById('closeAnalyticsBtn'),
  statsReadCount: document.getElementById('statsReadCount'),
  statsClapsCount: document.getElementById('statsClapsCount'),
  statsSavedCount: document.getElementById('statsSavedCount'),

  // Newsletter Modal
  newsletterModalBackdrop: document.getElementById('newsletterModalBackdrop'),
  newsletterBtn: document.getElementById('newsletterBtn'),
  closeNewsletterBtn: document.getElementById('closeNewsletterBtn'),
  newsletterForm: document.getElementById('newsletterForm'),

  // Theme & Toast
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIcon: document.getElementById('themeIcon'),
  toastContainer: document.getElementById('toastContainer')
};

// --- INITIALIZATION ---
function init() {
  loadLocalStorageState();
  renderHeroSpotlight();
  renderGrid();
  updateSavedBadge();
  attachEventListeners();
}

// --- LOCAL STORAGE MANAGER ---
function loadLocalStorageState() {
  const localArticles = localStorage.getItem('chronicle_articles_v2');
  if (localArticles) {
    state.articles = JSON.parse(localArticles);
  } else {
    state.articles = SEED_ARTICLES;
    localStorage.setItem('chronicle_articles_v2', JSON.stringify(SEED_ARTICLES));
  }

  const localSaved = localStorage.getItem('chronicle_saved');
  state.savedBookmarks = localSaved ? JSON.parse(localSaved) : [];

  const localClaps = localStorage.getItem('chronicle_claps');
  state.userClaps = localClaps ? JSON.parse(localClaps) : {};

  const localComments = localStorage.getItem('chronicle_comments');
  if (localComments) state.comments = JSON.parse(localComments);

  const localTheme = localStorage.getItem('chronicle_theme');
  if (localTheme) {
    state.theme = localTheme;
    document.documentElement.setAttribute('data-theme', localTheme);
    updateThemeIcon();
  }
}

function saveState() {
  localStorage.setItem('chronicle_articles', JSON.stringify(state.articles));
  localStorage.setItem('chronicle_saved', JSON.stringify(state.savedBookmarks));
  localStorage.setItem('chronicle_claps', JSON.stringify(state.userClaps));
  localStorage.setItem('chronicle_comments', JSON.stringify(state.comments));
  localStorage.setItem('chronicle_theme', state.theme);
}

// --- HERO SPOTLIGHT RENDERER ---
function renderHeroSpotlight() {
  const featured = state.articles.find(a => a.featured) || state.articles[0];
  if (!featured) return;

  elements.heroTitle.textContent = featured.title;
  elements.heroExcerpt.textContent = featured.excerpt;
  elements.heroAuthorName.textContent = featured.authorName;
  elements.heroAuthorRole.textContent = featured.authorBio;
  elements.heroAuthorAvatar.src = featured.authorAvatar;
  elements.heroDate.innerHTML = `<i class="fa-regular fa-calendar"></i> ${featured.date}`;
  elements.heroReadTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${featured.readingTime}`;
  elements.heroImage.src = featured.coverImage;

  elements.heroReadBtn.onclick = () => openReader(featured.id);
  elements.heroBookmarkBtn.onclick = () => toggleBookmark(featured.id);
  
  updateBookmarkButtonUI(elements.heroBookmarkBtn, featured.id);
}

// --- MAIN GRID RENDERER & FILTERING ENGINE ---
function renderGrid() {
  let filtered = state.articles.filter(article => {
    // Search query filter
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = article.title.toLowerCase().includes(q);
      const matchExcerpt = article.excerpt.toLowerCase().includes(q);
      const matchAuthor = article.authorName.toLowerCase().includes(q);
      const matchTags = article.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchExcerpt && !matchAuthor && !matchTags) return false;
    }

    // Format tab filter
    if (state.activeTab === 'bookmarks') {
      if (!state.savedBookmarks.includes(article.id)) return false;
    } else if (state.activeTab !== 'all') {
      if (article.format !== state.activeTab) return false;
    }

    // Category filter
    if (state.activeCategory !== 'all') {
      if (article.category !== state.activeCategory) return false;
    }

    return true;
  });

  // Sort engine
  filtered.sort((a, b) => {
    if (state.sortMode === 'popular') return (b.claps || 0) - (a.claps || 0);
    if (state.sortMode === 'readingTime') return parseInt(b.readingTime) - parseInt(a.readingTime);
    return new Date(b.date) - new Date(a.date);
  });

  // Render HTML Cards
  if (filtered.length === 0) {
    elements.articlesGrid.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-folder-open empty-icon"></i>
        <h3>No Articles Found</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting your search filters, category selection, or tab options.</p>
      </div>
    `;
    return;
  }

  elements.articlesGrid.innerHTML = filtered.map(article => {
    const isSaved = state.savedBookmarks.includes(article.id);
    const tagClass = getTagClass(article.category);
    const isGroup = article.authorType === 'group';

    return `
      <article class="article-card">
        <div class="card-image-wrap" onclick="openReader('${article.id}')">
          <img src="${article.coverImage}" alt="${article.title}" class="card-image">
          <div class="card-badge-container">
            <span class="card-tag ${tagClass}">${article.category}</span>
            ${isGroup ? `<span class="card-tag" style="background: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3);"><i class="fa-solid fa-users"></i> Group</span>` : ''}
          </div>

          <button class="bookmark-card-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); toggleBookmark('${article.id}')" title="${isSaved ? 'Remove from Saved' : 'Save Article'}">
            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
          </button>
        </div>

        <div class="card-body">
          <h2 class="card-title" onclick="openReader('${article.id}')">${article.title}</h2>
          <p class="card-excerpt">${article.excerpt}</p>

          <div class="card-footer">
            <div class="author-chip">
              <img src="${article.authorAvatar}" alt="${article.authorName}" class="author-avatar" style="width: 32px; height: 32px;">
              <div>
                <div class="author-name" style="font-size: 0.82rem;">${article.authorName}</div>
                <div class="author-role" style="font-size: 0.72rem;">${article.date} • ${article.readingTime}</div>
              </div>
            </div>

            <button class="card-clap-btn" onclick="addClap('${article.id}')">
              <i class="fa-solid fa-hands-clapping"></i>
              <span>${article.claps || 0}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function getTagClass(category) {
  if (category === 'Technology') return 'tag-tech';
  if (category === 'Personal') return 'tag-diary';
  if (category === 'Design') return 'tag-tips';
  if (category === 'Science') return 'tag-science';
  return 'tag-tech';
}

// --- READER MODAL ENGINE ---
function openReader(articleId) {
  const article = state.articles.find(a => a.id === articleId);
  if (!article) return;

  state.activeReaderArticleId = articleId;

  elements.readerTitle.textContent = article.title;
  elements.readerSubtitle.textContent = article.subtitle || article.excerpt;
  elements.readerAuthorName.textContent = article.authorName;
  elements.readerAuthorBio.textContent = article.authorBio;
  elements.readerAuthorAvatar.src = article.authorAvatar;
  elements.readerDate.innerHTML = `<i class="fa-regular fa-calendar"></i> ${article.date}`;
  elements.readerTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${article.readingTime}`;
  elements.readerBannerImage.src = article.coverImage;
  elements.readerClapsCount.textContent = article.claps || 0;

  // Render Tags
  elements.readerTagsContainer.innerHTML = article.tags.map(t => 
    `<span style="padding: 0.2rem 0.6rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-full); font-size: 0.75rem; color: var(--accent-primary); font-weight: 600;">#${t}</span>`
  ).join('');

  // Render Markdown Body
  elements.readerBodyText.innerHTML = parseMarkdown(article.content);

  // Bookmark Button State
  updateBookmarkButtonUI(elements.readerBookmarkBtn, articleId);

  // Render Comments
  renderComments(articleId);

  // Open Backdrop
  elements.readerModalBackdrop.classList.add('active');
  elements.readerContentScroll.scrollTop = 0;
  elements.readingProgressTrack.style.width = '0%';

  // Update Reading Stats
  let currentReadCount = parseInt(localStorage.getItem('chronicle_stats_reads') || '4');
  localStorage.setItem('chronicle_stats_reads', (currentReadCount + 1).toString());
}

function closeReader() {
  elements.readerModalBackdrop.classList.remove('active');
  state.activeReaderArticleId = null;
  if (state.isAudioPlaying) toggleAudioPlayback();
}

// --- SIMPLE MARKDOWN PARSER ---
function parseMarkdown(md) {
  if (!md) return '';
  let html = md;

  // Code blocks
  html = html.replace(/```(javascript|css|html|json)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code>${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Unordered Lists
  html = html.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
  html = html.replace(/<\/ul>\n<ul>/g, '');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Paragraphs
  const lines = html.split('\n\n');
  return lines.map(line => {
    if (line.startsWith('<h') || line.startsWith('<block') || line.startsWith('<pre') || line.startsWith('<ul')) {
      return line;
    }
    return `<p>${line.trim()}</p>`;
  }).join('');
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// --- BOOKMARKING SYSTEM ---
function toggleBookmark(articleId) {
  const index = state.savedBookmarks.indexOf(articleId);
  if (index > -1) {
    state.savedBookmarks.splice(index, 1);
    showToast('Article removed from reading list', 'info');
  } else {
    state.savedBookmarks.push(articleId);
    showToast('Article saved to your reading list!', 'success');
  }
  saveState();
  updateSavedBadge();
  renderGrid();
  if (state.activeReaderArticleId === articleId) {
    updateBookmarkButtonUI(elements.readerBookmarkBtn, articleId);
  }
  updateBookmarkButtonUI(elements.heroBookmarkBtn, 'art-1');
}

function updateSavedBadge() {
  elements.savedCountBadge.textContent = state.savedBookmarks.length;
}

function updateBookmarkButtonUI(btn, articleId) {
  if (!btn) return;
  const isSaved = state.savedBookmarks.includes(articleId);
  const icon = btn.querySelector('i');
  if (icon) {
    icon.className = isSaved ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
    if (isSaved) btn.classList.add('saved');
    else btn.classList.remove('saved');
  }
}

// --- CLAPPINGS & LIKES ---
function addClap(articleId) {
  const article = state.articles.find(a => a.id === articleId);
  if (!article) return;

  article.claps = (article.claps || 0) + 1;
  state.userClaps[articleId] = (state.userClaps[articleId] || 0) + 1;
  saveState();

  if (state.activeReaderArticleId === articleId) {
    elements.readerClapsCount.textContent = article.claps;
  }

  showToast('➕ 1 Clap for story!', 'success');
  renderGrid();
  renderHeroSpotlight();
}

// --- COMMENTS ENGINE ---
function renderComments(articleId) {
  const list = state.comments[articleId] || [];
  elements.commentsTitle.textContent = `Community Comments (${list.length})`;

  if (list.length === 0) {
    elements.commentsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">Be the first to leave a comment on this story!</p>`;
    return;
  }

  elements.commentsContainer.innerHTML = list.map(c => `
    <div class="comment-card">
      <div class="comment-header">
        <i class="fa-solid fa-circle-user" style="font-size: 1.5rem; color: var(--accent-primary);"></i>
        <div>
          <div style="font-weight: 600; font-size: 0.9rem;">${c.author}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${c.date}</div>
        </div>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-primary); margin-top: 0.4rem;">${c.text}</p>
    </div>
  `).join('');
}

function submitComment() {
  const text = elements.newCommentInput.value.trim();
  if (!text || !state.activeReaderArticleId) return;

  const articleId = state.activeReaderArticleId;
  if (!state.comments[articleId]) state.comments[articleId] = [];

  state.comments[articleId].unshift({
    id: 'c-' + Date.now(),
    author: 'You (Reader)',
    text: text,
    date: 'Just now',
    claps: 0
  });

  saveState();
  elements.newCommentInput.value = '';
  renderComments(articleId);
  showToast('Comment posted successfully!', 'success');
}

// --- AUDIO TTS SIMULATOR ---
function toggleAudioPlayback() {
  state.isAudioPlaying = !state.isAudioPlaying;
  if (state.isAudioPlaying) {
    elements.audioPlayIcon.className = 'fa-solid fa-pause';
    elements.audioPlayerCard.classList.add('playing');
    showToast('Playing synthetic audio narration...', 'info');
  } else {
    elements.audioPlayIcon.className = 'fa-solid fa-play';
    elements.audioPlayerCard.classList.remove('playing');
  }
}

// --- WRITER STUDIO EDITOR ---
function handleWriterPublish(e) {
  e.preventDefault();

  const title = elements.writeTitle.value.trim();
  const excerpt = elements.writeExcerpt.value.trim();
  const category = elements.writeCategory.value;
  const format = elements.writeFormat.value;
  const authorType = elements.writeAuthorType.value;
  const authorName = elements.writeAuthorName.value.trim() || 'Anonymous Writer';
  const tagsStr = elements.writeTags.value.trim();
  const coverImage = elements.writeCoverPreset.value;
  const content = elements.writeContent.value.trim();

  if (!title || !excerpt || !content) return;

  const newArticle = {
    id: 'art-' + Date.now(),
    title,
    subtitle: excerpt,
    excerpt,
    category,
    format,
    authorType,
    authorName,
    authorBio: authorType === 'group' ? 'Group Publication' : 'Individual Author',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    coverImage,
    date: 'Just now',
    readingTime: Math.max(2, Math.ceil(content.split(' ').length / 150)) + ' min read',
    claps: 0,
    tags: tagsStr ? tagsStr.split(',').map(t => t.trim()) : [category],
    featured: false,
    content
  };

  state.articles.unshift(newArticle);
  saveState();
  renderGrid();
  closeWriterModal();
  showToast('🎉 Story published successfully to live feed!', 'success');
  openReader(newArticle.id);
}

function updateWriterPreview() {
  elements.previewTitle.textContent = elements.writeTitle.value || 'Story Title Preview';
  elements.previewExcerpt.textContent = elements.writeExcerpt.value || 'Excerpt preview will appear here...';
  elements.previewBody.innerHTML = parseMarkdown(elements.writeContent.value || 'Start typing content on the left...');
}

function openWriterModal() {
  elements.writerModalBackdrop.classList.add('active');
  updateWriterPreview();
}

function closeWriterModal() {
  elements.writerModalBackdrop.classList.remove('active');
}

// --- THEME ENGINE ---
function toggleTheme() {
  if (state.theme === 'dark') state.theme = 'light';
  else if (state.theme === 'light') state.theme = 'cyberpunk';
  else state.theme = 'dark';

  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
  saveState();
  showToast(`Theme switched to ${state.theme.toUpperCase()}`, 'info');
}

function updateThemeIcon() {
  if (state.theme === 'dark') elements.themeIcon.className = 'fa-solid fa-moon';
  else if (state.theme === 'light') elements.themeIcon.className = 'fa-solid fa-sun';
  else elements.themeIcon.className = 'fa-solid fa-bolt';
}

// --- TOAST SYSTEM ---
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}" style="color: var(--accent-primary);"></i>
    <span>${message}</span>
  `;
  elements.toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// --- EVENT LISTENERS ---
function attachEventListeners() {
  // Search
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderGrid();
  });

  // Format Tabs
  elements.formatTabs.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      elements.formatTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.getAttribute('data-tab');
      renderGrid();
    });
  });

  // Category Pills
  elements.categoryPills.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      elements.categoryPills.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.getAttribute('data-category');
      renderGrid();
    });
  });

  // Sort Dropdown
  elements.sortSelect.addEventListener('change', (e) => {
    state.sortMode = e.target.value;
    renderGrid();
  });

  // Reader Scroll Progress & Sticky Bar
  elements.readerContentScroll.addEventListener('scroll', () => {
    const el = elements.readerContentScroll;
    const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    elements.readingProgressTrack.style.width = Math.min(100, Math.max(0, pct)) + '%';
  });

  // Reader Controls
  elements.closeReaderBtn.addEventListener('click', closeReader);
  elements.readerModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.readerModalBackdrop) closeReader();
  });

  elements.readerClapBtn.addEventListener('click', () => {
    if (state.activeReaderArticleId) addClap(state.activeReaderArticleId);
  });

  elements.readerBookmarkBtn.addEventListener('click', () => {
    if (state.activeReaderArticleId) toggleBookmark(state.activeReaderArticleId);
  });

  elements.audioPlayBtn.addEventListener('click', toggleAudioPlayback);
  elements.submitCommentBtn.addEventListener('click', submitComment);

  // Font Size Switcher
  document.querySelectorAll('.font-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.font-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.getAttribute('data-size');
      elements.readerBodyText.className = `article-body-text font-${size}`;
    });
  });

  // Writer Studio
  elements.openWriterBtn.addEventListener('click', openWriterModal);
  elements.closeWriterBtn.addEventListener('click', closeWriterModal);
  elements.writerModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.writerModalBackdrop) closeWriterModal();
  });
  elements.writerForm.addEventListener('submit', handleWriterPublish);

  elements.writeTitle.addEventListener('input', updateWriterPreview);
  elements.writeExcerpt.addEventListener('input', updateWriterPreview);
  elements.writeContent.addEventListener('input', updateWriterPreview);

  // Analytics Modal
  elements.analyticsBtn.addEventListener('click', () => {
    const reads = localStorage.getItem('chronicle_stats_reads') || '4';
    let totalClaps = 0;
    Object.values(state.userClaps).forEach(c => totalClaps += c);

    elements.statsReadCount.textContent = reads;
    elements.statsClapsCount.textContent = totalClaps + 28;
    elements.statsSavedCount.textContent = state.savedBookmarks.length;

    elements.analyticsModalBackdrop.classList.add('active');
  });
  elements.closeAnalyticsBtn.addEventListener('click', () => {
    elements.analyticsModalBackdrop.classList.remove('active');
  });

  // Newsletter Modal
  elements.newsletterBtn.addEventListener('click', () => {
    elements.newsletterModalBackdrop.classList.add('active');
  });
  elements.closeNewsletterBtn.addEventListener('click', () => {
    elements.newsletterModalBackdrop.classList.remove('active');
  });
  elements.newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    elements.newsletterModalBackdrop.classList.remove('active');
    showToast('Subscribed! Welcome to the Chronicle dispatch family.', 'success');
  });

  // Theme Toggle
  elements.themeToggleBtn.addEventListener('click', toggleTheme);
}

// Start App
document.addEventListener('DOMContentLoaded', init);

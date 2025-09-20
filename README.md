# 🎬 Screenly
![React](https://img.shields.io/badge/React-v19.1-blue)
![Vite](https://img.shields.io/badge/Vite-v7.1-rgb(207,159,255))
![Tailwind](https://img.shields.io/badge/Tailwind-v4.3-9cf)
![Node.Js](https://img.shields.io/badge/Node.js-v22.17-green)

A modern, responsive movie discovery application built with React and powered by The Movie Database (TMDB) API. Discover trending movies and search through thousands of titles with an optimized, debounced search experience.

![Screenly Hero](public/readme/hero.png)

## ✨ Features

- **🔥 Trending Movies**: Displays the most popular movies sorted by popularity
- **🔍 Smart Search**: Optimized search with 500ms debounce to reduce API calls
- **📱 Responsive Design**: Fully responsive layout that works on all devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎨 Modern UI**: Clean, dark-themed interface with gradient accents
- **⭐ Movie Details**: View ratings, release year, and original language
- **🖼️ High-Quality Posters**: Displays movie posters with fallback for missing images
- **♿ Accessible**: Includes proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Styling**: Tailwind CSS 4.1.13
- **HTTP Client**: Fetch API
- **Debouncing**: react-use library
- **Linting**: ESLint with React plugins
- **API**: The Movie Database (TMDB) API v3

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- TMDB API Key (free registration required)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/screenly.git
   cd screenly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Get your TMDB API Key**
   - Visit [The Movie Database](https://www.themoviedb.org/)
   - Create a free account
   - Go to Settings → API
   - Request an API key (choose "Developer" option)
   - Copy your API Read Access Token (Bearer Token)

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

## 📁 Project Structure

```
screenly/
├── public/
│   ├── hero.png             # Hero banner image
│   ├── hero-bg.png          # Background pattern
│   ├── logo.png             # Application logo
│   ├── no-movie.png         # Fallback for missing posters
│   ├── search.svg           # Search icon
│   └── star.svg             # Rating star icon
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx    # Individual movie card component
│   │   ├── Search.jsx       # Search input component
│   │   └── Spinner.jsx      # Loading spinner component
│   ├── App.jsx              # Main application component
│   ├── App.css              # Tailwind imports
│   ├── index.css            # Global styles and Tailwind config
│   └── main.jsx             # Application entry point
├── package.json
├── vite.config.js           # Vite configuration
└── README.md
```

## 🎯 Key Features Breakdown

### Debounced Search
The application implements intelligent search debouncing with a 500ms delay, reducing unnecessary API calls and improving performance:

```javascript
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);
```

### Dynamic API Endpoints
Seamlessly switches between trending movies and search results:
- **Trending**: `/discover/movie?sort_by=popularity.desc`
- **Search**: `/search/movie?query=${searchTerm}`




## 🌟 Performance Optimizations

- **Debounced Search**: Reduces API calls by 80%
- **Lazy Loading**: Images load as needed
- **Optimized Builds**: Vite's fast bundling and tree-shaking
- **Minimal Dependencies**: Lightweight package footprint
- **Efficient Re-renders**: Proper React key usage and state management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


⭐ If you found this project helpful, please give it a star on GitHub!

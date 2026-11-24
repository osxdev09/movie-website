
const moviesData = [
    {
        id: 1,
        title: "Daredevil",
        duration: "1hr 30min",
        genre: "action",
        genreDisplay: "ACTION",
        rating: 7.5,
        image: "img/movies/actions/daredevil.jpg",
        video: "vid/The_Amazing_Spider-Man.mp4",
        desc: "A gripping tale of power, loyalty, and survival in the criminal underworld of the South. When territories clash, only the strongest will reign supreme.",
        year: 2025,
        cast: ["Michael B. Jordan", "Viola Davis", "Idris Elba"]
    },
    {
        id: 2,
        title: "Tribe of Judah",
        duration: "2hr 15min",
        genre: "comedy",
        genreDisplay: "COMEDY",
        rating: 6.8,
        image: "img/movies/comedy/tribe of judah.jpg",
        video: "vid/The_Amazing_Spider-Man.mp4",
        desc: "The world's most elite team of mercenaries reunites for one final mission that will test their limits and redefine brotherhood.",
        year: 2026,
        cast: ["Sylvester Stallone", "Jason Statham", "Jet Li"]
    },
    {
        id: 3,
        title: "Toy Story",
        duration: "1hr 45min",
        genre: "animation",
        genreDisplay: "ANIMATION",
        rating: 8.1,
        video: "vid/The_Amazing_Spider-Man.mp4",
        image: "img/movies/animation/Toy Story.jpg",
        desc: "Tariq St. Patrick navigates the dangerous world of drug dealing while trying to escape his father's shadow and protect his family.",
        year: 2025,
        cast: ["Michael Rainey Jr.", "Mary J. Blige", "Method Man"]
    },
    {
        id: 4,
        title: "All of us are dead",
        duration: "1hr 50min",
        genre: "horror",
        genreDisplay: "HORROR",
        rating: 7.2,
        image: "img/movies/horror/All of us are dead.jpg",
        video: "vid/The_Amazing_Spider-Man.mp4",
        poster: "img/movies/adventure/amazing spiderman.jpg",
        desc: "In the heart of Johannesburg, two brothers must navigate the treacherous world of organized crime while dealing with supernatural forces.",
        year: 2025,
        cast: ["Shona Ferguson", "Zolisa Xaluva", "Cindy Mahlangu"]
    },
    {
        id: 5,
        title: "The Amazing Spider-Man",
        duration: "2hr 55min",
        genre: "adventure",
        genreDisplay: "ADVENTURE",
        rating: 9.2,
        image: "img/movies/adventure/amazing spiderman.jpg",
        video: "vid/The_Amazing_Spider-Man.mp4",
        desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        year: 1972,
        cast: ["Marlon Brando", "Al Pacino", "James Caan"]
    },
    {
        id: 6,
        title: "John Wick",
        duration: "1hr 41min",
        genre: "action",
        genreDisplay: "ACTION",
        rating: 7.4,
        image: "img/movies/actions/John Wick 1.jfif",
        video: "vid/The_Amazing_Spider-Man.mp4",
        desc: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him. No one messes with John Wick's dog.",
        year: 2014,
        cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"]
    },
    {
        id: 7,
        title: "The Batman",
        duration: "2hr 56min",
        genre: "action",
        genreDisplay: "ACTION",
        rating: 7.8,
        image: "img/movies/actions/Gotham.jfif",
        desc: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
        year: 2022,
        cast: ["Robert Pattinson", "Zoe Kravitz", "Paul Dano"]
    },
    {
        id: 8,
        title: "Scream",
        duration: "1hr 52min",
        genre: "horror",
        genreDisplay: "HORROR",
        rating: 7.5,
        image: "img/movies/horror/scream.jpg",
        desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        year: 2013,
        cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"]
    },
    {
        id: 9,
        title: "The Flash",
        duration: "2hr 4min",
        genre: "adventure",
        genreDisplay: "ADVENTURE",
        rating: 7.0,
        image: "img/movies/adventure/flash.jpg",
        desc: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the newest attraction escapes.",
        year: 2015,
        cast: ["Chris Pratt", "Bryce Dallas Howard", "Vincent D'Onofrio"]
    },
    {
        id: 10,
        title: "Dilwale",
        duration: "1hr 53min",
        genre: "comedy",
        genreDisplay: "COMEDY",
        rating: 7.6,
        image: "img/movies/comedy/dilwale.jpg",
        desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        year: 2007,
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"]
    },
    {
        id: 11,
        title: "Encanto",
        duration: "1hr 57min",
        genre: "animation",
        genreDisplay: "ANIMATION",
        rating: 8.4,
        image: "img/movies/animation/Encanto.jpg",
        desc: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        year: 2018,
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"]
    },
    {
        id: 12,
        title: "Squid Game",
        duration: "1hr 44min",
        genre: "horror",
        genreDisplay: "HORROR",
        rating: 7.8,
        image: "img/movies/horror/squid game.jpg",
        desc: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        year: 2017,
        cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"]
    },
    {
        id: 13,
        title: "Avatar",
        duration: "2hr 35min",
        genre: "adventure",
        genreDisplay: "ADVENTURE",
        rating: 8.0,
        image: "img/movies/adventure/avatar.jpg",
        desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
        year: 2021,
        cast: ["Timothee Chalamet", "Rebecca Ferguson", "Oscar Isaac"]
    },
    {
        id: 14,
        title: "The Waiter",
        duration: "1hr 40min",
        genre: "comedy",
        genreDisplay: "COMEDY",
        rating: 7.7,
        image: "img/movies/comedy/the waiter.jpg",
        desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        year: 2009,
        cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
        id: 15,
        title: "Moana",
        duration: "1hr 45min",
        genre: "animation",
        genreDisplay: "ANIMATION",
        rating: 8.4,
        image: "img/movies/animation/moana.jpg",
        desc: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        year: 2017,
        cast: ["Anthony Gonzalez", "Gael Garcia Bernal", "Benjamin Bratt"]
    },
    {
        id: 16,
        title: "Ra One",
        duration: "2hr",
        genre: "action",
        genreDisplay: "ACTION",
        rating: 8.1,
        image: "img/movies/actions/Ra One.jpg",
        desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        year: 2015,
        cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]
    },
    {
        id: 17,
        title: "Hereditary",
        duration: "2hr 7min",
        genre: "horror",
        genreDisplay: "HORROR",
        rating: 7.3,
        image: "img/movies/horror/the last of us.jpg",
        desc: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
        year: 2018,
        cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"]
    },
    {
        id: 18,
        title: "Spongebob",
        duration: "1hr 40min",
        genre: "animation",
        genreDisplay: "ANIMATION",
        rating: 7.7,
        image: "img/movies/animation/spongebob.jpg",
        desc: "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
        year: 2019,
        cast: ["Tom Hanks", "Tim Allen", "Annie Potts"]
    }
];




const heroSlides = [
    {
        title: "The Gotham",
        desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        rating: 9.0,
        duration: "2h 32min",
        year: 2008,
        genre: "Action, Crime, Drama",
        image: "img/slides/slide11.jfif"
    },
    {
        title: "John Wick",
        desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 8.8,
        duration: "2h 28min",
        year: 2010,
        genre: "Sci-Fi, Action, Thriller",
        image: "img/slides/slide12.jfif"
    },
    {
        title: "John Wick 2",
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 8.7,
        duration: "2h 49min",
        year: 2014,
        genre: "Sci-Fi, Adventure, Drama",
        image: "img/slides/slide13.jfif"
    }
];

let currentSlide = 0;
let slideInterval = null;





const moviesGrid = document.getElementById('moviesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const navbar = document.querySelector('.navbar');
const movieModal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const toast = document.getElementById('toast');





function renderMovies(movies, append = false) {
    if (!moviesGrid) return;
    
    if (!append) {
        moviesGrid.innerHTML = '';
    }
    
    movies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'mov1';
        movieCard.style.animationDelay = `${index * 0.05}s`;
        movieCard.innerHTML = `
            <div class="movie-poster">
                <span class="movie-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                <div class="movie-overlay">
                    <i class="fas fa-play-circle"></i>
                </div>
            </div>
            <h5>${movie.title}</h5>
            <p>${movie.duration} | ${movie.genreDisplay}</p>
        `;
        
        movieCard.addEventListener('click', () => openMovieModal(movie));
        moviesGrid.appendChild(movieCard);
    });
}




function filterMovies(category) {
    if (category === 'all') {
        renderMovies(moviesData.slice(0, 12));
    } else {
        const filtered = moviesData.filter(m => m.genre === category);
        renderMovies(filtered);
    }
}

function searchMovies(query) {
    const filtered = moviesData.filter(m => 
        m.title.toLowerCase().includes(query.toLowerCase()) ||
        m.genreDisplay.toLowerCase().includes(query.toLowerCase())
    );
    renderMovies(filtered);
}





function openMovieModal(movie) {
    if (!movieModal || !modalBody) return;
    
    modalBody.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="modal-poster">
        <div class="modal-info">
            <h2>${movie.title}</h2>
            <div class="modal-meta">
                <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                <span><i class="fas fa-clock"></i> ${movie.duration}</span>
                <span><i class="fas fa-calendar"></i> ${movie.year}</span>
                <span><i class="fas fa-film"></i> ${movie.genreDisplay}</span>
            </div>
            <p class="modal-desc">${movie.desc}</p>
            <div class="modal-actions">
                <a href="watch.html?movie=${movie.id}" class="modal-btn-primary"><i class="fas fa-play"></i> Watch Now</a>
                <a href="movie-detail.html?movie=${movie.id}" class="modal-btn-secondary"><i class="fas fa-info-circle"></i> Details</a>
                <button class="modal-btn-secondary" onclick="addToWatchlist('${movie.title}')"><i class="fas fa-plus"></i> Watchlist</button>
            </div>
        </div>
    `;
    
    movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!movieModal) return;
    movieModal.classList.remove('active');
    document.body.style.overflow = '';
}




function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function addToWatchlist(title) {
    showToast(`${title} added to watchlist!`);
}





function changeSlide(index) {
    currentSlide = index;
    const slide = heroSlides[index];
    const header = document.querySelector('header');
    const title = document.querySelector('.hero-title');
    const desc = document.querySelector('.hero-desc');
    const dots = document.querySelectorAll('.dot');
    
    let dynamicStyle = document.getElementById('hero-dynamic-style');
    if (!dynamicStyle) {
        dynamicStyle = document.createElement('style');
        dynamicStyle.id = 'hero-dynamic-style';
        document.head.appendChild(dynamicStyle);
    }
    
    dynamicStyle.textContent = `
        header::before {
            background-image: url('${slide.image}') !important;
            opacity: 0.3 !important;
            transition: background-image 0.8s ease-in-out !important;
        }
    `;
    
    
    if (header) {
        header.style.backgroundImage = `url('${slide.image}')
        opacity: 0.3 !important;
        transition: background-image 0.8s ease-in-out !important;
        `;
    }
    
    
    if (title) {
        title.style.transition = 'opacity 0.3s ease';
        title.style.opacity = '0';
        setTimeout(() => {
            title.textContent = slide.title;
            title.style.opacity = '1';
        }, 300);
    }
    
    if (desc) {
        desc.style.transition = 'opacity 0.3s ease';
        desc.style.opacity = '0';
        setTimeout(() => {
            desc.textContent = slide.desc;
            desc.style.opacity = '1';
        }, 300);
    }
    
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}



function handleNewsletter(e) {
    e.preventDefault();
    showToast('Subscribed successfully! Check your email.');
    e.target.reset();
}





function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    
    if (email && password) {
        localStorage.setItem('cinematify_user', JSON.stringify({
            email: email,
            name: email.split('@')[0],
            loggedIn: true,
            timestamp: new Date().toISOString()
        }));
        showToast('Welcome back! Sign in successful.');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
}

function handleSignUp(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (name && email && password) {
        localStorage.setItem('cinematify_user', JSON.stringify({
            email: email,
            name: name,
            loggedIn: true,
            timestamp: new Date().toISOString()
        }));
        showToast('Account created successfully! Welcome to Cinematify.');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
}

function handleSocialSignIn(provider) {
    showToast(`Signing in with ${provider}...`);
    setTimeout(() => {
        localStorage.setItem('cinematify_user', JSON.stringify({
            email: `user@${provider.toLowerCase()}.com`,
            name: `${provider} User`,
            loggedIn: true,
            provider: provider,
            timestamp: new Date().toISOString()
        }));
        window.location.href = 'index.html';
    }, 1500);
}

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('cinematify_user'));
    if (user && user.loggedIn) {
        const signinBtn = document.querySelector('.signin-btn');
        if (signinBtn) {
            signinBtn.textContent = user.name;
            signinBtn.onclick = () => {
                if (confirm('Do you want to sign out?')) {
                    localStorage.removeItem('cinematify_user');
                    window.location.reload();
                }
            };
        }
        
        const accountNav = document.querySelector('.mobile-nav-item[href="signin.html"]');
        if (accountNav) {
            accountNav.querySelector('span').textContent = 'Profile';
            accountNav.querySelector('i').className = 'fas fa-user-check';
            accountNav.href = '#';
            accountNav.onclick = (e) => {
                e.preventDefault();
                if (confirm('Do you want to sign out?')) {
                    localStorage.removeItem('cinematify_user');
                    window.location.reload();
                }
            };
        }
    }
}





function initWatchPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie');
    
    
    let movie = moviesData.find(m => m.id == movieId);
    
    
    if (!movie) {
        movie = {
            title: "Movie Player",
            duration: "2h 00min",
            rating: 8.0,
            desc: "Enjoy your movie experience on Cinematify.",
            video: "vid/movie1.mp4",
            cast: ["Actor 1", "Actor 2", "Actor 3"]
        };
    }
    
    
    document.title = `Watching: ${movie.title} - Cinematify`;
    
    
    const titleEl = document.getElementById('watchTitle');
    const titleEl2 = document.getElementById('watchTitle2');
    const metaEl = document.getElementById('watchMeta');
    const descEl = document.getElementById('watchDesc');
    const castEl = document.getElementById('watchCast');
    
    if (titleEl) titleEl.textContent = movie.title;
    if (titleEl2) titleEl2.textContent = movie.title;
    if (metaEl) {
        metaEl.innerHTML = `
            <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
            <span><i class="fas fa-clock"></i> ${movie.duration}</span>
            <span><i class="fas fa-film"></i> ${movie.genreDisplay || 'Movie'}</span>
        `;
    }
    if (descEl) descEl.textContent = movie.desc;
    if (castEl) {
        castEl.innerHTML = movie.cast.map(actor => `
            <div class="cast-member">
                <img src="https://ui-avatars.com/api/?name=${actor.replace(' ', '+')}&background=ea1538&color=fff&size=60" alt="${actor}">
                <p>${actor}</p>
            </div>
        `).join('');
    }
    
    
    
    
    const video = document.getElementById('mainVideo');
    const videoSource = document.getElementById('videoSource');
    const playBtn = document.getElementById('playPauseBtn');
    const videoOverlay = document.getElementById('videoOverlay');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const volumeBtn = document.getElementById('volumeBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    if (!video) return;
    
    
    video.src = movie.video;
    video.load();
    
    
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00:00";
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    
    
    function updateProgress() {
        if (video.duration) {
            const progress = (video.currentTime / video.duration) * 100;
            if (progressFill) progressFill.style.width = `${progress}%`;
        }
        if (currentTimeEl) currentTimeEl.textContent = formatTime(video.currentTime);
    }
    
    
    video.addEventListener('loadedmetadata', () => {
        if (totalTimeEl) totalTimeEl.textContent = formatTime(video.duration);
    });
    
    
    video.addEventListener('timeupdate', updateProgress);
    
    
    function togglePlay() {
        if (video.paused) {
            video.play();
            if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            if (videoOverlay) videoOverlay.classList.add('hidden');
        } else {
            video.pause();
            if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i>';
            if (videoOverlay) videoOverlay.classList.remove('hidden');
        }
    }
    
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (videoOverlay) videoOverlay.addEventListener('click', togglePlay);
    if (video) video.addEventListener('click', togglePlay);
    
    
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            if (video.duration) {
                video.currentTime = percentage * video.duration;
            }
        });
    }
    
    
    let isMuted = false;
    if (volumeBtn) {
        volumeBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            video.muted = isMuted;
            volumeBtn.innerHTML = isMuted 
                ? '<i class="fas fa-volume-mute"></i>' 
                : '<i class="fas fa-volume-up"></i>';
        });
    }
    
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            const videoContainer = document.getElementById('videoPlayerContainer');
            if (!document.fullscreenElement) {
                if (videoContainer.requestFullscreen) {
                    videoContainer.requestFullscreen();
                } else if (videoContainer.webkitRequestFullscreen) {
                    videoContainer.webkitRequestFullscreen();
                } else if (videoContainer.msRequestFullscreen) {
                    videoContainer.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        });
    }
    
    
    video.addEventListener('ended', () => {
        if (playBtn) playBtn.innerHTML = '<i class="fas fa-redo"></i>';
        if (videoOverlay) videoOverlay.classList.remove('hidden');
        showToast('Movie finished!');
    });
    
    
    video.addEventListener('error', () => {
        console.error('Video error:', video.error);
        showToast('Error loading video. Check file path.');
        if (videoOverlay) {
            videoOverlay.innerHTML = '<div style="color:#ea1538;text-align:center;"><i class="fas fa-exclamation-triangle" style="font-size:40px;"></i><p>Video not found</p><p style="font-size:12px;">Check that the file exists at: ' + movie.video + '</p></div>';
            videoOverlay.classList.remove('hidden');
        }
    });
}





function initDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie');
    
    let movie = moviesData.find(m => m.id == movieId);
    if (!movie) {
        movie = {
            title: "Movie Details",
            duration: "2h 00min",
            rating: 8.0,
            desc: "Movie details page.",
            year: 2026,
            genreDisplay: "Action",
            cast: ["Actor 1", "Actor 2", "Actor 3"],
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop"
        };
    }
    
    document.title = `${movie.title} - Cinematify`;
    
    const detailHero = document.getElementById('detailHero');
    const detailPoster = document.getElementById('detailPoster');
    const detailTitle = document.getElementById('detailTitle');
    const detailMeta = document.getElementById('detailMeta');
    const detailDesc = document.getElementById('detailDesc');
    const detailCast = document.getElementById('detailCast');
    
    if (detailHero) detailHero.src = movie.image;
    if (detailPoster) detailPoster.src = movie.image;
    if (detailTitle) detailTitle.textContent = movie.title;
    if (detailMeta) {
        detailMeta.innerHTML = `
            <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
            <span><i class="fas fa-clock"></i> ${movie.duration}</span>
            <span><i class="fas fa-calendar"></i> ${movie.year}</span>
            <span><i class="fas fa-film"></i> ${movie.genreDisplay}</span>
        `;
    }
    if (detailDesc) detailDesc.textContent = movie.desc;
    if (detailCast) {
        detailCast.innerHTML = movie.cast.map(actor => `
            <div class="cast-member">
                <img src="https://ui-avatars.com/api/?name=${actor.replace(' ', '+')}&background=ea1538&color=fff&size=60" alt="${actor}">
                <p>${actor}</p>
            </div>
        `).join('');
    }
}





document.addEventListener('DOMContentLoaded', () => {
    
    
    checkAuth();
    
    
    const path = window.location.pathname;
    
    if (path.includes('watch.html')) {
        initWatchPage();
    } else if (path.includes('movie-detail.html')) {
        initDetailPage();
    } else {
        
        
        
        renderMovies(moviesData.slice(0, 12));
        
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterMovies(btn.dataset.filter);
            });
        });
        
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchMovies(e.target.value);
            });
        }
        
        
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                renderMovies(moviesData.slice(12), true);
                loadMoreBtn.style.display = 'none';
                showToast('More movies loaded!');
            });
        }
        
        
        window.addEventListener('scroll', () => {
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });
        
        
        if (movieModal) {
            movieModal.addEventListener('click', (e) => {
                if (e.target === movieModal) {
                    closeModal();
                }
            });
        }
        
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
        
        
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % heroSlides.length;
            changeSlide(currentSlide);
        }, 6000);
        
        
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        const currentPath = window.location.pathname;
        mobileNavItems.forEach(item => {
            if (item.getAttribute('href').includes(currentPath.split('/').pop())) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});

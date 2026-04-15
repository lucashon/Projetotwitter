const postsData = [
    {
        id: 1,
        user: "Marcus Arboés",
        handle: "@marcusarboes",
        time: "5h",
        content: "Esse é o Matheus Mbappé, camisa 10 do sub10 da escolinha do meu irmão. Na final, fez 3 gols e deu uma assistência!",
        image: "assets/jogador.png",
        likes: 8000
    },
    {
        id: 2,
        user: "G1",
        handle: "@g1",
        time: "7h",
        content: "Influenciadora Flávia Big Big morre aos 26 anos. Veja mais detalhes no link.",
        image: "assets/bigbig.jfif",
        likes: 96800
    },
    {
        id: 3,
        user: "Eliezer",
        handle: "@eliezer",
        time: "2h",
        content: "Oi gente, tô invadindo o tt do papai pra falar oi pra vocês! ❤️",
        image: "assets/viintube3.png",
        likes: 36800
    }
];

function showFeed() {
    document.getElementById('landing-page').classList.add('d-none');
    document.getElementById('main-feed').classList.remove('d-none');
    renderFeed();
    renderSidebar();
}

// Renderizar o Feed
function renderFeed() {
    const container = document.getElementById('coluna2');
    container.innerHTML = `
        <header class="p-3 border-bottom border-secondary sticky-top bg-black bg-opacity-75" style="backdrop-filter: blur(10px);">
            <h5 class="fw-bold m-0">Explorar</h5>
        </header>
    `;

    postsData.forEach(post => {
        const postHtml = `
            <article class="p-3 border-bottom border-secondary publi">
                <div class="d-flex">
                    <div class="me-3">
                        <div class="bg-secondary rounded-circle" style="width: 48px; height: 48px;"></div>
                    </div>
                    <div class="w-100">
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">${post.user} <span class="text-muted fw-normal">${post.handle} · ${post.time}</span></span>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <p class="mt-2">${post.content}</p>
                        ${post.image ? `<img src="${post.image}" class="img-fluid rounded-4 border border-secondary mb-3 w-100">` : ''}
                        
                        <div class="d-flex justify-content-between text-muted">
                            <div class="btn-interaction"><i class="bi bi-chat"></i> 4mil</div>
                            <div class="btn-interaction"><i class="bi bi-arrow-repeat"></i> 786</div>
                            <div class="btn-interaction like-btn" onclick="handleLike(${post.id})">
                                <i class="bi bi-heart" id="like-icon-${post.id}"></i> 
                                <span id="like-count-${post.id}">${post.likes.toLocaleString()}</span>
                            </div>
                            <div class="btn-interaction"><i class="bi bi-bar-chart"></i> 400k</div>
                        </div>
                    </div>
                </div>
            </article>
        `;
        container.innerHTML += postHtml;
    });
}

// Lógica de Like Dinâmico
function handleLike(postId) {
    const icon = document.getElementById(`like-icon-${postId}`);
    const countSpan = document.getElementById(`like-count-${postId}`);
    const post = postsData.find(p => p.id === postId);

    if (icon.classList.contains('bi-heart')) {
        icon.classList.replace('bi-heart', 'bi-heart-fill');
        icon.style.color = '#f91880';
        post.likes++;
    } else {
        icon.classList.replace('bi-heart-fill', 'bi-heart');
        icon.style.color = '';
        post.likes--;
    }
    countSpan.innerText = post.likes.toLocaleString();
}

// Sidebar com Switch de Dark Mode
function renderSidebar() {
    const col1 = document.getElementById('coluna1');
    col1.innerHTML = `
        <div class="py-3 d-flex flex-column align-items-center align-items-md-start h-100">
            <i class="bi bi-twitter-x fs-2 mb-4 px-md-3"></i>
            <div class="nav-item p-3 rounded-pill fw-bold"><i class="bi bi-house-door fs-4 me-3"></i> <span class="d-none d-md-inline">Página Inicial</span></div>
            <div class="nav-item p-3 rounded-pill fw-bold bg-secondary bg-opacity-25"><i class="bi bi-hash fs-4 me-3"></i> <span class="d-none d-md-inline">Explorar</span></div>
            
            <div class="mt-auto mb-4 p-3 w-100">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="darkModeSwitch" checked onchange="toggleDarkMode()">
                    <label class="form-check-label d-none d-md-inline" for="darkModeSwitch">Modo Escuro</label>
                </div>
            </div>
        </div>
    `;
}

function toggleDarkMode() {
    const html = document.documentElement;
    const body = document.body;
    if (html.getAttribute('data-bs-theme') === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
        body.classList.replace('bg-black', 'bg-white');
        body.classList.replace('text-white', 'text-dark');
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        body.classList.replace('bg-white', 'bg-black');
        body.classList.replace('text-dark', 'text-white');
    }
}
const state = {
    view: 'landing',
    user: { name: "Lucas", handle: "@iplusca", pfp: "Twitter/assets/perfil1.png" },
    posts: [
        { id: 1, user: "Sérgio Santos", handle: "@ZAMENZA", time: "16 h", content: "Tadeu ignorou completamente Ana Paula e Juliano. Gabriela merecia essa homenagem... #BBB26", img: "Twitter/assets/Gabi.avif", pfp: "Twitter/assets/perfil1.png", likes: "46 mil", comments: 211, retweets: "2 mil", views: "432 mil" },
        { id: 2, user: "G1 - Pop e Arte", handle: "@g1poparte", time: "1 h", content: "Beyoncé encanta Simba em nova produção. Confira os detalhes no portal.", img: "Twitter/assets/logott.png", pfp: "Twitter/assets/perfilg1.png", likes: 4, comments: 6, retweets: 8, views: "1.5k" },
        { id: 3, user: "Bernhard Mueller", handle: "@muellerberndt", time: "Anúncio", content: "Como a Holografia de Patch do Observador torna a Semiótica física.", img: null, pfp: "Twitter/assets/perfil3.png", likes: 12, comments: 2, retweets: 1, views: "10k" },
        { id: 4, user: "Marcus Arboés", handle: "@marcusarboes", time: "5 h", content: "Matheus Mbappé voando baixo no sub-10!", img: "Twitter/assets/jogador.png", pfp: "Twitter/assets/perfil1.png", likes: 850, comments: 12, retweets: 45, views: "12k" },
        { id: 5, user: "Eliezer", handle: "@eliezer", time: "2 h", content: "Oi gente, invadindo aqui! ❤️", img: "Twitter/assets/viintube3.png", pfp: "Twitter/assets/perfilEliezer.png", likes: "36 mil", comments: 150, retweets: "1.2 mil", views: "80k" },
        { id: 6, user: "Tech News", handle: "@technews", time: "10 h", content: "Ubuntu 24.04 está mudando o jogo para devs Linux. O que acham?", img: null, pfp: "Twitter/assets/perfil3.png", likes: 500, comments: 80, retweets: 30, views: "5k" },
        { id: 7, user: "One Piece", handle: "@op_brasil", time: "12 h", content: "O novo capítulo está de explodir a cabeça! 🏴‍☠️", img: null, pfp: "Twitter/assets/perfil1.png", likes: "15 mil", comments: 900, retweets: "5k", views: "1M" },
        { id: 8, user: "G1", handle: "@g1", time: "15 h", content: "Últimas notícias sobre tecnologia e inovação no Brasil.", img: "Twitter/assets/bigbig.jfif", pfp: "Twitter/assets/perfilg1.png", likes: "96 mil", comments: "1.2k", retweets: "10k", views: "2M" },
        { id: 9, user: "Design Daily", handle: "@design", time: "20 h", content: "Dica: Bordas suaves (low opacity) deixam sua UI muito mais moderna.", img: null, pfp: "Twitter/assets/perfil3.png", likes: 230, comments: 5, retweets: 12, views: "1k" },
        { id: 10, user: "Futebol", handle: "@fut_br", time: "1 d", content: "Quem leva a taça este ano? Deixe seu palpite!", img: null, pfp: "Twitter/assets/perfil1.png", likes: "2 mil", comments: 400, retweets: 150, views: "20k" }
    ]
};

// Funções de navegação e render
function navigate(view) { state.view = view; render(); }

function render() {
    const root = document.getElementById('app');
    root.innerHTML = state.view === 'landing' ? renderLanding() : renderFeed();
}

function renderLanding() {
    return `
    <div class="vh-100 d-flex flex-column animate-fade overflow-hidden">
        <div class="row flex-grow-1 align-items-center w-100 m-0">
            <div class="col-lg-7 d-none d-lg-flex justify-content-center">
                <i class="bi bi-twitter-x" style="font-size: clamp(10rem, 25vw, 20rem);"></i>
            </div>
            <div class="col-lg-5 p-5">
                <i class="bi bi-twitter-x d-lg-none fs-1 mb-4"></i>
                <h1 class="display-1 fw-bold mb-5" style="letter-spacing: -2px;">Acontecendo agora</h1>
                <h2 class="h3 fw-bold mb-4">Inscreva-se hoje</h2>
                <div class="d-grid gap-2 col-xl-9">
                    <button class="btn btn-light rounded-pill fw-bold py-2">Fazer login como ${state.user.name}</button>
                    <button class="btn btn-light rounded-pill fw-bold py-2">Inscrever-se com Apple</button>
                    <div class="d-flex align-items-center my-2 text-secondary"><hr class="flex-grow-1 opacity-25"> <span class="mx-2 small">OU</span> <hr class="flex-grow-1 opacity-25"></div>
                    <button class="btn btn-primary rounded-pill fw-bold py-2">Criar conta</button>
                    <p class="text-muted" style="font-size: 11px;">Ao se inscrever, você concorda com os Termos de Serviço.</p>
                    <h6 class="fw-bold mt-5">Já tem uma conta?</h6>
                    <button class="btn btn-outline-secondary rounded-pill fw-bold py-2 text-primary" onclick="navigate('feed')">Entrar</button>
                </div>
            </div>
        </div>
        ${renderFooter()}
    </div>`;
}

function renderFeed() {
    return `
    <div class="container animate-fade">
        <div class="row">
            <aside class="col-2 col-xl-3 vh-100 sticky-top p-2 border-end border-soft d-flex flex-column align-items-end align-items-xl-start">
                ${renderSidebar()}
            </aside>

            <main class="col-10 col-md-9 col-xl-6 p-0 border-end border-soft">
                <div class="sticky-top bg-black bg-opacity-75 border-bottom border-soft" style="backdrop-filter: blur(12px)">
                    <div class="d-flex border-bottom border-soft">
                        <div class="flex-grow-1 text-center py-3 fw-bold border-bottom border-primary border-4">Para você</div>
                        <div class="flex-grow-1 text-center py-3 text-muted">Seguindo</div>
                    </div>
                    <div class="p-3 d-flex">
                        <img src="${state.user.pfp}" class="rounded-circle me-3" style="width: 45px; height: 45px; object-fit: cover">
                        <div class="w-100">
                            <input type="text" class="form-control bg-transparent border-0 text-white fs-5" placeholder="O que está acontecendo?">
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="text-primary fs-5">
                                    <i class="bi bi-image me-3"></i><i class="bi bi-filetype-gif me-3"></i><i class="bi bi-emoji-smile me-3"></i><i class="bi bi-geo-alt opacity-50"></i>
                                </div>
                                <button class="btn btn-primary rounded-pill fw-bold px-4">Postar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>${state.posts.map(p => renderPostCard(p)).join('')}</div>
            </main>

            <aside class="d-none d-xl-block col-xl-3 p-3">
                <div class="bg-dark bg-opacity-50 rounded-4 p-3 mb-3 border border-soft">
                    <h5 class="fw-bold mb-3">O que está acontecendo</h5>
                    <div class="mb-3 small"><strong>#Maceio</strong><br><span class="text-muted">1.500 posts</span></div>
                    <div class="mb-3 small"><strong>#SistemasDeInformacao</strong><br><span class="text-muted">22k posts</span></div>
                </div>
            </aside>
        </div>
    </div>`;
}

function renderSidebar() {
    const navItems = [
        { icon: 'house-door-fill', label: 'Página Inicial' },
        { icon: 'search', label: 'Explorar' },
        { icon: 'bell', label: 'Notificações' },
        { icon: 'envelope', label: 'Mensagens' },
        { icon: 'person', label: 'Perfil' }
    ];
    return `
        <i class="bi bi-twitter-x fs-2 p-3"></i>
        ${navItems.map(n => `<div class="nav-btn d-flex align-items-center p-3 rounded-pill">
            <i class="bi bi-${n.icon} fs-4"></i> <span class="d-none d-xl-inline ms-3 fs-5">${n.label}</span>
        </div>`).join('')}
        <button class="btn btn-primary rounded-pill w-100 py-3 mt-3 d-none d-xl-block fw-bold">Postar</button>
        <button class="btn btn-primary rounded-circle p-0 mt-3 d-xl-none" style="width:50px; height:50px"><i class="bi bi-plus-lg fs-4"></i></button>
    `;
}

function renderPostCard(p) {
    return `
    <article class="p-3 border-bottom border-soft post-item">
        <div class="d-flex">
            <img src="${p.pfp}" class="rounded-circle me-3" style="width: 48px; height: 48px; object-fit:cover">
            <div class="w-100">
                <div class="d-flex justify-content-between">
                    <span><strong>${p.user}</strong> <i class="bi bi-patch-check-fill text-primary small"></i> <small class="text-muted">${p.handle} · ${p.time}</small></span>
                    <i class="bi bi-three-dots text-muted"></i>
                </div>
                <p class="mt-2 mb-2 fs-6">${p.content}</p>
                ${p.img ? `<img src="${p.img}" class="img-fluid rounded-4 border border-soft mb-3 w-100">` : ''}
                <div class="d-flex justify-content-between text-muted w-100" style="max-width: 425px">
                    <span class="act"><i class="bi bi-chat"></i> ${p.comments}</span>
                    <span class="act"><i class="bi bi-arrow-repeat"></i> ${p.retweets}</span>
                    <span class="act-heart"><i class="bi bi-heart"></i> ${p.likes}</span>
                    <span class="act"><i class="bi bi-bar-chart"></i> ${p.views}</span>
                </div>
            </div>
        </div>
    </article>`;
}

function renderFooter() {
    return `<footer class="p-3 text-center small text-muted border-top border-soft">© 2026 Lucas Corp | X Clone</footer>`;
}

render();
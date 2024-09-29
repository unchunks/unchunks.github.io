function loadCommonElements() {
    const header = document.getElementById('site-header');
    const footer = document.getElementById('site-footer');

    header.innerHTML = `
        <div class="logo">unchunks</div>
        <nav>
            <div class="hamburger-menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <ul>
                <li><a href="/index.html#about">自己紹介</a></li>
                <li><a href="/index.html#projects">プロジェクト</a></li>
                <li><a href="/index.html#news">ニュース</a></li>
                <li><a href="/index.html#contact">お問い合わせ</a></li>
            </ul>
        </nav>
    `;

    footer.innerHTML = `
        <div class="social-links">
            <a href="https://x.com/unchunks_dev" target="_blank" rel="noopener noreferrer" style="padding-right: 10px;">
                <img src="/images/x_icon.svg" alt="X (旧Twitter)" width="24" height="24">
            </a>
            <a href="https://github.com/unchunks" target="_blank" rel="noopener noreferrer" style="padding-left: 10px;">
                <img src="/images/github_icon.svg" alt="GitHub" width="24" height="24">
            </a>
        </div>
        <p>&copy; ${new Date().getFullYear()} unchunks. All rights reserved.</p>
    `;
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadCommonElements();
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // プロジェクトカードのホバーエフェクト
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // ハンバーガーメニューの開閉
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // プロジェクトフィルタリング
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 全てのボタンからアクティブクラスを削除
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // クリックされたボタンにアクティブクラスを追加
            button.classList.add('active');

            const category = button.getAttribute('data-filter');
            projectCards.forEach(card => {
                const cardCategories = card.dataset.category.split(' ');
                if (category === 'all' || cardCategories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

function loadCommonElements() {
    const header = document.getElementById('site-header');
    const footer = document.getElementById('site-footer');

    header.innerHTML = `
        <img src="https://unchunks.github.io/images/unchunks_logo_55_9.svg" width="220" height="36" alt="unchunksのロゴ">

        <div class="hamburger-menu" id="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="menu-content">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <!-- <li><a href="works.html">WORKS</a></li> -->
            </ul>
        </nav>
    `;

    footer.innerHTML = `
        <div class="social-links">
            <a href="https://x.com/unchunks_dev" target="_blank" rel="noopener noreferrer" style="padding-right: 10px;">
                <img src="https://unchunks.github.io/images/x_icon.svg" alt="X (旧Twitter)" width="24" height="24">
            </a>
            <a href="https://github.com/unchunks" target="_blank" rel="noopener noreferrer" style="padding-left: 10px;">
                <img src="https://unchunks.github.io/images/github_icon.svg" alt="GitHub" width="24" height="24">
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

$(function () {
    $('.hamburger-menu').on('click', function () {
        // ボタンがアクティブ状態かどうかを確認
        if (this.classList.contains('active')) {
            // アクティブから非アクティブに変更する場合
            this.classList.add('closing');    // closingクラスを追加（閉じるアニメーション用）
            this.classList.remove('active');  // activeクラスを削除

            // アニメーションが終わったらclosingクラスを削除
            setTimeout(() => {
                this.classList.remove('closing');
            }, 500); // アニメーションの時間（0.5秒）と同じ
        } else {
            // 非アクティブからアクティブに変更する場合
            this.classList.add('active');  // activeクラスを追加
        }
    });
});

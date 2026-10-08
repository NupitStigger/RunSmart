document.addEventListener('DOMContentLoaded', function() {
    // 1. Логика карусели слайдов с фиксированным размером
    const slides = document.querySelectorAll('.carousel-slides img');
    const prevBtn = document.querySelector('.carousel .prev');
    const nextBtn = document.querySelector('.carousel .next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    }

    // 2. Логика переключения карточек каталога («Подробнее» / «Назад»)
    document.querySelectorAll('.catalog-item').forEach(item => {
        const linkMore = item.querySelector('.catalog-item-link');
        const linkBack = item.querySelector('.catalog-item-back');
        const contents = item.querySelectorAll('.catalog-item-content');

        if (linkMore && linkBack) {
            linkMore.addEventListener('click', function(e) {
                e.preventDefault();
                contents.forEach(c => c.classList.toggle('active'));
            });

            linkBack.addEventListener('click', function(e) {
                e.preventDefault();
                contents.forEach(c => c.classList.toggle('active'));
            });
        }
    });
    // 3. Фильтрация каталога по вкладкам
    const tabs = document.querySelectorAll('.catalog-tabs .tab');
    const items = document.querySelectorAll('.catalog-item');

    function filterCatalog(category, animate) {
        items.forEach(item => {
            const match = item.dataset.category.split(' ').includes(category);
            item.classList.toggle('is-hidden', !match);
            item.classList.remove('fade-in');
            if (match && animate) {
                void item.offsetWidth; // перезапуск анимации
                item.classList.add('fade-in');
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterCatalog(tab.dataset.filter, true);
        });
    });

    // Начальное состояние — активная вкладка
    const activeTab = document.querySelector('.catalog-tabs .tab.active');
    if (activeTab) {
        filterCatalog(activeTab.dataset.filter, false);
    }
    // 4. Кнопка «Наверх»
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    // 5. Плавный переход к секции по кнопке (data-scroll="#id")
    document.querySelectorAll('[data-scroll]').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = document.querySelector(btn.dataset.scroll);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    // 6. Модальное окно «Купить»
    const modalOverlay = document.getElementById('buyModal');

    if (modalOverlay) {
        const modal = modalOverlay.querySelector('.modal');
        const modalProduct = modalOverlay.querySelector('.modal-product');
        const modalForm = modalOverlay.querySelector('.modal-form');
        const closeBtn = modalOverlay.querySelector('.modal-close');
        let closeTimer = null;

        function openModal(productName, price) {
            clearTimeout(closeTimer);
            modal.classList.remove('sent');
            modalProduct.textContent = '';
            if (productName) {
                const label = window.I18N ? window.I18N.t('chosen') : 'Вы выбрали:';
                const strong = document.createElement('strong');
                strong.textContent = productName;
                modalProduct.append(label + ' ', strong, price ? ' — ' + price : '');
            }
            modalOverlay.classList.add('open');
            modalOverlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            const firstInput = modalForm.querySelector('input');
            setTimeout(() => firstInput && firstInput.focus(), 350);
        }

        function closeModal() {
            modalOverlay.classList.remove('open');
            modalOverlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }

        // Кнопки «КУПИТЬ» в карточках каталога
        document.querySelectorAll('.catalog-item .btn-primary').forEach(btn => {
            btn.addEventListener('click', function() {
                const item = btn.closest('.catalog-item');
                const nameEl = item.querySelector('.catalog-item-subtitle');
                const priceEl = item.querySelector('.catalog-item-price');
                openModal(
                    nameEl ? nameEl.textContent.trim() : '',
                    priceEl ? priceEl.textContent.trim() : ''
                );
            });
        });

        // Закрытие: крестик, клик по тёмному фону, Esc
        closeBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
                closeModal();
            }
        });

        // Отправка формы
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            modal.classList.add('sent');
            modalForm.reset();
            closeTimer = setTimeout(closeModal, 2500);
        });
    }
});
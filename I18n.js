(function () {
    'use strict';

    var STORAGE_KEY = 'runsmart-lang';
    var DEFAULT_LANG = 'ru';
    var HTML_LANG = { ru: 'ru', kz: 'kk', en: 'en' };

    var translations = {
        ru: {
            title: `RunSmart - Подбор пульсометра`,
            dealer: `Официальный представитель`,
            callback: `ЗАКАЗАТЬ ЗВОНОК`,
            h1: `ПОДБОР ПУЛЬСОМЕТРА`,
            subtitle: `с учётом вашего уровня подготовки`,
            feat1: `Время подбора:<br>30 минут`,
            feat2: `Бесплатная<br>доставка`,
            feat3: `Ответим<br>на все вопросы`,
            orderConsult: `ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ`,
            or: `или`,
            toCatalog: `перейти в каталог`,

            advTitle: `НАШИ ПРЕИМУЩЕСТВА`,
            adv1h: `Делимся опытом`,
            adv1p: `Наши сотрудники всегда готовы поделиться своим опытом, так как сами бегают полумарафоны, переплыли Босфор, готовятся к соревнованиям по триатлону!`,
            adv2h: `Заботимся о здоровье`,
            adv2p: `Мы работаем для того, чтобы Ваши занятия спортом шли на пользу Вашему здоровью и были в радость Вам и Вашим близким!`,
            adv3h: `Учим бегать`,
            adv3p: `Помогаем с обучением правильной технике бега! Дружим с крупнейшей школой бега в России - <a href="#">I LOVE RUNNING</a>.`,

            consultH2: `ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ<br>ПО ПОДБОРУ ПУЛЬСОМЕТРА`,
            consultP: `Просто заполните форму заявки<br>и мы перезвоним вам в течение 10 минут`,
            phName: `Ваше имя`,
            phPhone: `Ваш телефон`,
            phEmail: `Ваш E-mail`,

            catalogH2: `КАТАЛОГ ПУЛЬСОМЕТРОВ`,
            tabFitness: `Для фитнеса`,
            tabRunning: `Для бега`,
            tabTriathlon: `Для триатлона`,
            pulsometer: `Пульсометр`,
            descr: `Для первых шагов в тренировках, основанных на сердечном ритме`,
            more: `ПОДРОБНЕЕ`,
            back: `НАЗАД`,
            li1: `Вы услышите звуковое оповещение о нужном пульсе во время тренировки;`,
            li2: `Вы увидите информативный графический индикатор целевых тренировочных зон пульса;`,
            li3: `Также Вы увидите информацию о расходе калорий за тренировку;`,
            li4: `Вы сможете посмотреть данные по 10 тренировкам.`,
            rub: `руб.`,
            buy: `КУПИТЬ`,

            reviewsH2: `ОТЗЫВЫ КЛИЕНТОВ`,
            revName1: `Ирина Иванченко`,
            revName2: `Иван Сёмочкин`,
            revName3: `Юлия Дашкина`,
            revSub1: `2 полумарафона`,
            revSub2: `1 полумарафон`,
            revSub3: `2 полумарафона`,
            rev1: `Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности. Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.<br><br>Новые цели - новый гаджет!<br><br>Спасибо, RunSmart!`,
            rev2: `Крутая штука-пульсометр. Обычно без них бегал. Оказывается только хуже себе делал.<br>Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую тренировку, научили пользоваться новым гаджетом. Также объяснили основы анатомии, составили план тренировок на месяц вперёд.<br><br>С ними подготовился к своему первому полумарафону! Спасибо!!!`,
            rev3: `Долго не могла начать бегать, т.к. до этого несколько раз начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с контролем пульса и решила попробовать.<br><br>Позвонила, ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и несколько более коротких забегов и не намерена останавливаться!<br><br>Спасибо!!!`,

            address: `Москва, Мясницкий проезд, д.3-с1`,
            mapTitle: `Карта: Москва, Мясницкий проезд, д.3-с1`,

            modalTitle: `ОФОРМЛЕНИЕ ЗАКАЗА`,
            chosen: `Вы выбрали:`,
            send: `ОТПРАВИТЬ ЗАЯВКУ`,
            thanks: `СПАСИБО!`,
            thanksP: `Заявка принята. Мы перезвоним вам в течение 10 минут.`,
            close: `Закрыть`,
            toTop: `Наверх`
        },

        kz: {
            title: `RunSmart - Пульсметр таңдау`,
            dealer: `Ресми өкіл`,
            callback: `ҚОҢЫРАУ ТАПСЫРУ`,
            h1: `ПУЛЬСМЕТР ТАҢДАУ`,
            subtitle: `дайындық деңгейіңізді ескере отырып`,
            feat1: `Таңдау уақыты:<br>30 минут`,
            feat2: `Тегін<br>жеткізу`,
            feat3: `Барлық сұрақтарға<br>жауап береміз`,
            orderConsult: `КЕҢЕС ТАПСЫРУ`,
            or: `немесе`,
            toCatalog: `каталогқа өту`,

            advTitle: `БІЗДІҢ АРТЫҚШЫЛЫҚТАРЫМЫЗ`,
            adv1h: `Тәжірибемізбен бөлісеміз`,
            adv1p: `Біздің қызметкерлеріміз өз тәжірибесімен бөлісуге әрқашан дайын, өйткені олар өздері жартылай марафондарда жүгіреді, Босфорды жүзіп өткен, триатлон жарыстарына дайындалуда!`,
            adv2h: `Денсаулыққа қамқор боламыз`,
            adv2p: `Біз сіздің спортпен шұғылдануыңыз денсаулығыңызға пайдалы болып, өзіңізге және жақындарыңызға қуаныш сыйлауы үшін жұмыс істейміз!`,
            adv3h: `Жүгіруге үйретеміз`,
            adv3p: `Жүгірудің дұрыс техникасына үйретуге көмектесеміз! Ресейдегі ең ірі жүгіру мектебі - <a href="#">I LOVE RUNNING</a> мектебімен тығыз байланыстамыз.`,

            consultH2: `ПУЛЬСМЕТР ТАҢДАУ БОЙЫНША<br>ТЕГІН КЕҢЕС АЛЫҢЫЗ`,
            consultP: `Өтінім пішінін толтырыңыз,<br>біз сізге 10 минут ішінде қоңырау шаламыз`,
            phName: `Атыңыз`,
            phPhone: `Телефон нөміріңіз`,
            phEmail: `E-mail мекенжайыңыз`,

            catalogH2: `ПУЛЬСМЕТРЛЕР КАТАЛОГЫ`,
            tabFitness: `Фитнес үшін`,
            tabRunning: `Жүгіру үшін`,
            tabTriathlon: `Триатлон үшін`,
            pulsometer: `Пульсметр`,
            descr: `Жүрек ырғағына негізделген жаттығулардағы алғашқы қадамдар үшін`,
            more: `ТОЛЫҒЫРАҚ`,
            back: `АРТҚА`,
            li1: `Жаттығу кезінде қажетті пульс туралы дыбыстық хабарландыру естисіз;`,
            li2: `Пульстің мақсатты жаттығу аймақтарының ақпаратты графикалық көрсеткішін көресіз;`,
            li3: `Сондай-ақ жаттығу кезінде жұмсалған калория туралы ақпаратты көресіз;`,
            li4: `10 жаттығу бойынша деректерді қарай аласыз.`,
            rub: `руб.`,
            buy: `САТЫП АЛУ`,

            reviewsH2: `КЛИЕНТТЕР ПІКІРЛЕРІ`,
            revName1: `Ирина Иванченко`,
            revName2: `Иван Сёмочкин`,
            revName3: `Юлия Дашкина`,
            revSub1: `2 жартылай марафон`,
            revSub2: `1 жартылай марафон`,
            revSub3: `2 жартылай марафон`,
            rev1: `Не сатып алуды білмедім - RunSmart жігіттеріне жүгіндім, олар менің мақсатыма да, қаржылық мүмкіндігіме де дәл келетін пульсметр таңдап берді. Біраз уақыттан кейін гаджетімді жаңартуды шештім - ойланбастан сол жерге қайта бардым.<br><br>Жаңа мақсаттар - жаңа гаджет!<br><br>Рахмет, RunSmart!`,
            rev2: `Пульсметр - тамаша нәрсе екен. Бұрын оларсыз жүгіретінмін. Сөйтсем, өзіме зиян келтіріппін.<br>Пульсметр сатып алдым, сыйлыққа жаттығу да алдым. Менімен бірге алғашқы жаттығуды өткізіп, жаңа гаджетті қолдануды үйретті. Сондай-ақ анатомия негіздерін түсіндіріп, бір айға арналған жаттығу жоспарын құрып берді.<br><br>Солармен бірге алғашқы жартылай марафоныма дайындалдым! Рахмет!!!`,
            rev3: `Ұзақ уақыт бойы жүгіре алмадым, себебі бұрын бірнеше рет бастағанмын, бірақ қиын болып, тастап кете беретінмін. Достарымнан RunSmart туралы және пульсті бақылай отырып жүгіру туралы естіп, байқап көруге бел будым.<br><br>Қоңырау шалдым, жігіттер менің мақсаттарыммен қызығып, жеңілдікпен өте қызықты нұсқа таңдап берді! Енді жүгіріп, жүгіруден ләззат аламын! Қазірдің өзінде 2 жартылай марафон және бірнеше қысқа қашықтыққа жүгіріп өттім, тоқтауға да ниетім жоқ!<br><br>Рахмет!!!`,

            address: `Мәскеу, Мясницкий өтпесі, 3-үй, 1-құрылыс`,
            mapTitle: `Карта: Мәскеу, Мясницкий өтпесі, 3-үй, 1-құрылыс`,

            modalTitle: `ТАПСЫРЫСТЫ РӘСІМДЕУ`,
            chosen: `Сіз таңдадыңыз:`,
            send: `ӨТІНІМ ЖІБЕРУ`,
            thanks: `РАХМЕТ!`,
            thanksP: `Өтінім қабылданды. Біз сізге 10 минут ішінде қоңырау шаламыз.`,
            close: `Жабу`,
            toTop: `Жоғары`
        },

        en: {
            title: `RunSmart - Heart Rate Monitor Selection`,
            dealer: `Official representative`,
            callback: `REQUEST A CALL`,
            h1: `HEART RATE MONITOR SELECTION`,
            subtitle: `tailored to your fitness level`,
            feat1: `Selection time:<br>30 minutes`,
            feat2: `Free<br>delivery`,
            feat3: `We'll answer<br>all your questions`,
            orderConsult: `REQUEST A CONSULTATION`,
            or: `or`,
            toCatalog: `go to catalog`,

            advTitle: `OUR ADVANTAGES`,
            adv1h: `We share our experience`,
            adv1p: `Our staff are always ready to share their experience: they run half marathons themselves, have swum across the Bosphorus and are training for triathlon competitions!`,
            adv2h: `We care about your health`,
            adv2p: `We work to make sure your sports activities benefit your health and bring joy to you and your loved ones!`,
            adv3h: `We teach running`,
            adv3p: `We help you learn proper running technique! We partner with the largest running school in Russia - <a href="#">I LOVE RUNNING</a>.`,

            consultH2: `GET A FREE CONSULTATION<br>ON CHOOSING A HEART RATE MONITOR`,
            consultP: `Just fill out the request form<br>and we'll call you back within 10 minutes`,
            phName: `Your name`,
            phPhone: `Your phone`,
            phEmail: `Your e-mail`,

            catalogH2: `HEART RATE MONITOR CATALOG`,
            tabFitness: `For fitness`,
            tabRunning: `For running`,
            tabTriathlon: `For triathlon`,
            pulsometer: `Heart rate monitor`,
            descr: `For your first steps in heart-rate-based training`,
            more: `DETAILS`,
            back: `BACK`,
            li1: `You will hear a sound alert for your target heart rate during training;`,
            li2: `You will see an informative graphic indicator of target heart rate zones;`,
            li3: `You will also see information about calories burned during your workout;`,
            li4: `You will be able to view data for 10 workouts.`,
            rub: `RUB`,
            buy: `BUY`,

            reviewsH2: `CUSTOMER REVIEWS`,
            revName1: `Irina Ivanchenko`,
            revName2: `Ivan Syomochkin`,
            revName3: `Yulia Dashkina`,
            revSub1: `2 half marathons`,
            revSub2: `1 half marathon`,
            revSub3: `2 half marathons`,
            rev1: `I didn't know what to buy, so I turned to the RunSmart team - they picked a heart rate monitor that fit exactly my goals and budget. After a while I decided to upgrade my gadget - and without hesitation I went back to them.<br><br>New goals - new gadget!<br><br>Thank you, RunSmart!`,
            rev2: `A great thing, the heart rate monitor. I used to run without one - turns out I was only doing myself harm.<br>I bought a monitor and got a training session as a gift. They did my first workout with me and taught me how to use the new gadget. They also explained the basics of anatomy and made a training plan for a month ahead.<br><br>I prepared for my first half marathon with them! Thank you!!!`,
            rev3: `For a long time I couldn't start running - I'd tried a few times, but it got hard and I gave up. I heard about RunSmart and heart-rate-controlled running from friends and decided to give it a try.<br><br>I called, the guys asked about my goals and picked a really interesting option with a discount! Now I run and enjoy it! I've already run 2 half marathons and several shorter races and have no intention of stopping!<br><br>Thank you!!!`,

            address: `Moscow, Myasnitsky Proezd, 3, bldg. 1`,
            mapTitle: `Map: Moscow, Myasnitsky Proezd, 3, bldg. 1`,

            modalTitle: `PLACE YOUR ORDER`,
            chosen: `You selected:`,
            send: `SUBMIT REQUEST`,
            thanks: `THANK YOU!`,
            thanksP: `Your request has been received. We'll call you back within 10 minutes.`,
            close: `Close`,
            toTop: `Back to top`
        }
    };

    var current = DEFAULT_LANG;

    function t(key) {
        var dict = translations[current] || {};
        if (dict[key] !== undefined) return dict[key];
        if (translations.ru[key] !== undefined) return translations.ru[key];
        return key;
    }

    function apply() {
        var map = { ru: 'ru', kz: 'kk', en: 'en' };

        document.documentElement.lang = HTML_LANG[current];
        document.title = t('title');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            el.innerHTML = t(el.dataset.i18nHtml);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            el.placeholder = t(el.dataset.i18nPlaceholder);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            el.alt = t(el.dataset.i18nAlt);
        });
        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.title = t(el.dataset.i18nTitle);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            el.setAttribute('aria-label', t(el.dataset.i18nAria));
        });

        // Язык интерфейса карты Google
        document.querySelectorAll('.footer-map iframe').forEach(function (frame) {
            var src = frame.getAttribute('src') || '';
            var next = src.replace(/hl=[a-z-]+/, 'hl=' + map[current]);
            if (next !== src) frame.setAttribute('src', next);
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            var active = btn.dataset.lang === current;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function setLang(lang) {
        if (!translations[lang]) return;
        current = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
        apply();
    }

    function init() {
        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
        if (saved && translations[saved]) current = saved;

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLang(btn.dataset.lang);
            });
        });

        apply();
    }

    if (typeof window !== 'undefined') {
        window.I18N = { t: t, setLang: setLang, getLang: function () { return current; } };
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = translations;
    }
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }
})();
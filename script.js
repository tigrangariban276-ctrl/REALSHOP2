// ============================================================
// ТОВАРЫ - ПО 10 В КАЖДОЙ КАТЕГОРИИ (С ВАШИМИ КАРТИНКАМИ)
// ============================================================
const productsData = {
    balls: [
        { id: 1, name: "Adidas Al Rihla", price: 5990, desc: "Официальный мяч ЧМ-2022", image: "https://avatars.mds.yandex.net/i?id=83872563b15ddb0f64a2da89b16e94a9_l-8181844-images-thumbs&n=13", category: "balls" },
        { id: 2, name: "Nike Flight", price: 5490, desc: "Аэродинамические канавки", image: "https://www.footballstore.ru/images/gal/27827/goods_27827_0_thumb5.jpg", category: "balls" },
        { id: 3, name: "Select Numero 10", price: 3990, desc: "FIFA Quality", image: "https://avatars.mds.yandex.net/i?id=785082d4794a46201af29370826f51f10498f986-4462005-images-thumbs&n=13", category: "balls" },
        { id: 4, name: "Puma Orbita 1", price: 4490, desc: "Технология POA", image: "https://avatars.mds.yandex.net/i?id=c0fa6c834200da32c7da2771d2e3c377_l-12496607-images-thumbs&n=13", category: "balls" },
        { id: 5, name: "Derbystar Brillant APS", price: 6990, desc: "Немецкое качество", image: "https://basket-05.wbbasket.ru/vol776/part77630/77630215/images/big/1.webp", category: "balls" },
        { id: 6, name: "Molten F5A5000", price: 5290, desc: "Футзальный мяч", image: "https://avatars.mds.yandex.net/get-mpic/3907093/img_id1439990560870256065.jpeg/orig", category: "balls" },
        { id: 7, name: "Uhlsport Elysia", price: 4790, desc: "Тренировочный мяч", image: "https://www.tradeinn.com/f/13664/136644792/uhlsport-elysia-competition-ligue-1-18-19-football-ball.webp", category: "balls" },
        { id: 8, name: "Kipsta F900", price: 3490, desc: "Для дворового футбола", image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/161/302/549/979/136/600018299645b7.jpg", category: "balls" },
        { id: 9, name: "Wilson Traditional", price: 3890, desc: "Классический дизайн", image: "https://i.ebayimg.com/00/s/MTQ5NVgxNTAw/z/by4AAOSw8CRkW~DG/$_1.JPG", category: "balls" },
        { id: 10, name: "Nike Premier League", price: 7990, desc: "Официальный мяч АПЛ", image: "https://www.football-mania.ru/f/product/fz3033_100_01.jpg", category: "balls" }
    ],
    jerseys: [
        { id: 11, name: "Barcelona Home 2024/25", price: 5490, desc: "Сине-гранатовый", image: "https://futurefootballshop.ru/wa-data/public/shop/products/22/97/19722/images/170452/170452.700.jpg", category: "jerseys" },
        { id: 12, name: "Real Madrid Home 2024/25", price: 5490, desc: "Белая классика", image: "https://futurefootballshop.ru/wa-data/public/shop/products/29/97/19729/images/168571/168571.700.jpg", category: "jerseys" },
        { id: 13, name: "PSG Home 2024/25", price: 5990, desc: "Черная с красной полосой", image: "https://futurefootballshop.ru/wa-data/public/shop/products/09/21/22109/images/196546/196546.700.jpg", category: "jerseys" },
        { id: 14, name: "Bayern Home 2024/25", price: 5290, desc: "Красная", image: "https://futurefootballshop.ru/wa-data/public/shop/products/20/97/19720/images/168580/168580.700.jpg", category: "jerseys" },
        { id: 15, name: "Manchester City Away", price: 5490, desc: "Небесно-синяя", image: "https://futurefootballshop.ru/wa-data/public/shop/products/15/97/19715/images/167897/167897.700.jpg", category: "jerseys" },
        { id: 16, name: "Liverpool Home 2024/25", price: 5490, desc: "Красная", image: "https://futurefootballshop.ru/wa-data/public/shop/products/50/99/19950/images/175339/175339.700.jpg", category: "jerseys" },
        { id: 17, name: "Arsenal Third", price: 4990, desc: "Красно-белая", image: "https://futurefootballshop.ru/wa-data/public/shop/products/77/97/19777/images/168049/168049.700.jpg", category: "jerseys" },
        { id: 18, name: "Juventus Home", price: 5190, desc: "Черно-белые полосы", image: "https://futurefootballshop.ru/wa-data/public/shop/products/66/97/19766/images/167948/167948.700.jpg", category: "jerseys" },
        { id: 19, name: "AC Milan Home", price: 5390, desc: "Красно-черные", image: "https://futurefootballshop.ru/wa-data/public/shop/products/16/98/19816/images/168467/168467.700.jpg", category: "jerseys" },
        { id: 20, name: "Chelsea Home 2024/25", price: 5490, desc: "Синяя", image: "https://futurefootballshop.ru/wa-data/public/shop/products/59/97/19759/images/167872/167872.700.jpg", category: "jerseys" }
    ],
    gear: [
        { id: 21, name: "Uhlsport Speed Contact", price: 5990, desc: "Вратарские перчатки", image: "https://i.ebayimg.com/images/g/Qt4AAOSwHmVmzadk/s-l400.jpg", category: "gear" },
        { id: 22, name: "Nike Charge Shield", price: 2790, desc: "Щитки", image: "https://keeper-shop.ru/images/product_images/popup_images/shop_items_catalog_image512223.jpg", category: "gear" },
        { id: 23, name: "Adalid Compression Socks", price: 1590, desc: "Компрессионные гетры", image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/48dc3223b4054571838f90efe8a3c902_9366/Copa_Zone_Cushion_5_OTC_White_IR1086_03_standard.jpg", category: "gear" },
        { id: 24, name: "Puma Teamwear Bag", price: 3490, desc: "Спортивная сумка", image: "https://static.onlinetrade.ru/img/items/b/sumka_sportivnaya_puma_team_goal_09023301_66x28x30sm_55l_3590730_1.jpg", category: "gear" },
        { id: 25, name: "G-Form Pro Shin Guards", price: 3990, desc: "Щитки с RPT", image: "https://www.tradeinn.com/f/14192/141928669/g-form-щитки-pro-s-blade-ce.webp", category: "gear" },
        { id: 26, name: "McDavid Hex Knee Pad", price: 2490, desc: "Наколенники", image: "https://i.pinimg.com/736x/ef/f4/47/eff4471e9aa629e74d5cf730d364f713.jpg", category: "gear" },
        { id: 27, name: "Nike Pitch Training Vest", price: 1890, desc: "Манишка", image: "https://ir.ozone.ru/s3/multimedia-1-c/6916205964.jpg", category: "gear" },
        { id: 28, name: "Adidas Copa Zone", price: 2290, desc: "Тактическая жилетка", image: "https://img-edg.joomcdn.net/acbd6f4117556a7662b6543b43f2c87fa98b71c0_1024_1024.jpeg", category: "gear" },
        { id: 29, name: "Puma Evospeed Water Bottle", price: 990, desc: "Бутылка 750мл", image: "https://amazingred.ru/upload/iblock/d90/mw6y7y2l75h94m9gv6b22zdnbzmcdlh3.jpg", category: "gear" },
        { id: 30, name: "Uhlsport Flex Grip", price: 4490, desc: "Перчатки для начинающих", image: "https://n.cdn.cdek.shopping/images/shopping/pbhhjPguPMEaZuOF.jpg?v=1", category: "gear" }
    ],
    boots: [
        { id: 31, name: "Nike Mercurial Vapor 15", price: 13990, desc: "Элитные бутсы", image: "https://shop.premier-football.ru/upload/shop_3/5/1/3/item_513797/item_513797.jpg", category: "boots" },
        { id: 32, name: "Adidas Predator Accuracy", price: 12490, desc: "Зоны удара", image: "https://shop.premier-football.ru/upload/shop_3/5/1/3/item_513185/shop_items_catalog_image513185.jpg", category: "boots" },
        { id: 33, name: "Puma Ultra 5", price: 10990, desc: "Сверхлегкие", image: "https://www.football-mania.ru/f/product/10816701_02.jpg", category: "boots" },
        { id: 34, name: "New Balance Furon v7", price: 9990, desc: "Гибкие", image: "https://avatars.mds.yandex.net/i?id=36d7f9776082a53771304373dbb2ce91_l-4495871-images-thumbs&n=13", category: "boots" },
        { id: 35, name: "Mizuno Morelia Neo", price: 15990, desc: "Японское качество", image: "https://avatars.mds.yandex.net/i?id=7ab2091de2067edc02c2617641882d32_l-4227431-images-thumbs&n=13", category: "boots" },
        { id: 36, name: "Under Armour Magnetico", price: 8990, desc: "CloneFit", image: "https://n.cdn.cdek.shopping/images/shopping/69Sjsi5neTWVNKdl.webp?v=1", category: "boots" },
        { id: 37, name: "Lotto Solista 200", price: 7990, desc: "Итальянские", image: "https://www.lotto.it/cdn/shop/files/218131_9Z4-01.jpg?v=1744133597&width=2048", category: "boots" },
        { id: 38, name: "Joma Champions FG", price: 6490, desc: "Для искусственного поля", image: "https://avatars.mds.yandex.net/i?id=0369105f86d64d52d893fd90f33518c8_l-3631034-images-thumbs&n=13", category: "boots" },
        { id: 39, name: "Kelme Precision", price: 6990, desc: "Испанские", image: "https://basket-28.wbbasket.ru/vol5436/part543652/543652914/images/c516x688/1.webp", category: "boots" },
        { id: 40, name: "Adidas X Crazyfast", price: 11990, desc: "Speedskin", image: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-57/283/418/893/105/7/100069274069b0.jpg", category: "boots" }
    ]
};

// ============================================================
// ОСНОВНАЯ ЛОГИКА КОРЗИНЫ С ПОЛНОЙ ФОРМОЙ
// ============================================================
let allProducts = [];
for (let category in productsData) {
    allProducts = allProducts.concat(productsData[category]);
}

const STORAGE_KEY = "footGearCart";
let cart = [];
let currentCategory = "balls";

function loadCartFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            cart = JSON.parse(stored);
            if (!Array.isArray(cart)) cart = [];
            cart = cart.filter(item => item && item.id);
        } catch(e) { cart = []; }
    } else { cart = []; }
}

function saveCartToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) { existing.quantity += 1; } 
    else { cart.push({ ...product, quantity: 1 }); }
    saveCartToStorage();
    renderCartUI();
    updateCartBadge();
    showToast(`✅ ${product.name} добавлен в корзину`);
}

function removeCartItem(productId) {
    const removedItem = cart.find(i => i.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    renderCartUI();
    updateCartBadge();
    if(removedItem) showToast(`❌ ${removedItem.name} удалён`);
}

function clearCart() {
    if(cart.length === 0) { showToast("Корзина уже пуста"); return; }
    cart = [];
    saveCartToStorage();
    renderCartUI();
    updateCartBadge();
    showToast("🧹 Корзина полностью очищена");
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById("cartCountBadge");
    if(badge) badge.innerText = totalItems;
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCartUI() {
    const container = document.getElementById("cartItemsContainer");
    const totalBlock = document.getElementById("cartTotalBlock");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-message">🛍️ Корзина пока пуста. Добавьте экипировку!</div>`;
        if(totalBlock) totalBlock.innerText = `💰 Итого: 0 ₽`;
        return;
    }

    let html = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        html += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₽ × ${item.quantity} = ${itemTotal.toLocaleString()} ₽</div>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item" data-id="${item.id}">Удалить</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    const total = getCartTotal();
    if(totalBlock) totalBlock.innerText = `💰 Итого: ${total.toLocaleString()} ₽`;

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.getAttribute('data-id'));
            if(!isNaN(id)) removeCartItem(id);
        });
    });
}

// ========== ВАЛИДАЦИЯ ВСЕХ ПОЛЕЙ ФОРМЫ ==========
function validateForm() {
    let isValid = true;
    
    const name = document.getElementById('clientName');
    const nameError = document.getElementById('nameError');
    if (!name.value.trim()) {
        nameError.innerText = 'Введите ваше имя';
        name.classList.add('invalid');
        isValid = false;
    } else {
        nameError.innerText = '';
        name.classList.remove('invalid');
    }
    
    const phone = document.getElementById('clientPhone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /[\d\+\(\)\-\s]{10,}/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
        phoneError.innerText = 'Введите корректный номер телефона';
        phone.classList.add('invalid');
        isValid = false;
    } else {
        phoneError.innerText = '';
        phone.classList.remove('invalid');
    }
    
    const email = document.getElementById('clientEmail');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        emailError.innerText = 'Введите корректный email';
        email.classList.add('invalid');
        isValid = false;
    } else {
        emailError.innerText = '';
        email.classList.remove('invalid');
    }
    
    const address = document.getElementById('clientAddress');
    const addressError = document.getElementById('addressError');
    if (!address.value.trim()) {
        addressError.innerText = 'Введите адрес доставки';
        address.classList.add('invalid');
        isValid = false;
    } else {
        addressError.innerText = '';
        address.classList.remove('invalid');
    }
    
    return isValid;
}

function getContactData() {
    return {
        name: document.getElementById('clientName').value.trim(),
        phone: document.getElementById('clientPhone').value.trim(),
        email: document.getElementById('clientEmail').value.trim(),
        address: document.getElementById('clientAddress').value.trim(),
        comment: document.getElementById('clientComment').value.trim()
    };
}

// Оформление заказа с полными контактными данными
function simulateOrderProcessing() {
    if (cart.length === 0) {
        showToast("⚠️ Корзина пуста, добавьте товары для заказа");
        return false;
    }
    
    if (!validateForm()) {
        showToast("⚠️ Заполните все контактные данные правильно!");
        return false;
    }
    
    const contact = getContactData();
    const totalSum = getCartTotal();
    const itemsList = cart.map(item => `• ${item.name} (${item.quantity} шт.) — ${(item.price * item.quantity).toLocaleString()} ₽`).join('\n');
    
    const orderMessage = `✅ ЗАКАЗ ПЕРЕДАН В ОБРАБОТКУ!\n\n━━━━━━━━━━━━━━━━━━━━━\n📋 КОНТАКТНЫЕ ДАННЫЕ:\n━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: ${contact.name}\n📞 Телефон: ${contact.phone}\n📧 Email: ${contact.email}\n🏠 Адрес: ${contact.address}\n${contact.comment ? `💬 Комментарий: ${contact.comment}\n` : ''}\n━━━━━━━━━━━━━━━━━━━━━\n🛒 СОСТАВ ЗАКАЗА:\n${itemsList}\n━━━━━━━━━━━━━━━━━━━━━\n💰 Сумма: ${totalSum.toLocaleString()} ₽\n━━━━━━━━━━━━━━━━━━━━━\n\nСпасибо за покупку! Наш менеджер свяжется с вами.`;
    
    alert(orderMessage);
    showToast("📞 Заказ передан в обработку! Менеджер свяжется с вами.");
    
    // Очищаем корзину и форму
    cart = [];
    saveCartToStorage();
    renderCartUI();
    updateCartBadge();
    
    document.getElementById('clientName').value = '';
    document.getElementById('clientPhone').value = '';
    document.getElementById('clientEmail').value = '';
    document.getElementById('clientAddress').value = '';
    document.getElementById('clientComment').value = '';
    
    return true;
}

function showToast(message, duration = 3000) {
    const existingToast = document.querySelector('.toast-msg');
    if(existingToast) existingToast.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => { if(toast && toast.remove) toast.remove(); }, duration);
}

function renderCatalog() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const currentProducts = productsData[currentCategory] || [];
    
    if (currentProducts.length === 0) {
        grid.innerHTML = `<div style="text-align:center; padding:2rem;">Нет товаров в этой категории</div>`;
        return;
    }
    
    grid.innerHTML = '';
    currentProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        let icon = '⚽';
        if (product.category === 'jerseys') icon = '👕';
        if (product.category === 'gear') icon = '🛡️';
        if (product.category === 'boots') icon = '👟';
        
        card.innerHTML = `
            <div class="product-img">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<div class="no-image">${icon}</div>`}
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">${product.price.toLocaleString()} ₽</div>
                <div class="product-desc">${product.desc}</div>
                <button class="add-to-cart" data-id="${product.id}">➕ В корзину</button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.getAttribute('data-id'));
            const productToAdd = allProducts.find(p => p.id === id);
            if(productToAdd) addToCart(productToAdd);
        });
    });
}

function switchCategory(category) {
    currentCategory = category;
    renderCatalog();
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if(btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function scrollToCart() {
    const cartPanel = document.getElementById("cartPanel");
    if(cartPanel) cartPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function init() {
    loadCartFromStorage();
    renderCatalog();
    renderCartUI();
    updateCartBadge();
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            if(category) switchCategory(category);
        });
    });
    
    const checkoutBtn = document.getElementById("checkoutBtn");
    if(checkoutBtn) checkoutBtn.addEventListener("click", simulateOrderProcessing);
    
    const clearBtn = document.getElementById("clearCartBtn");
    if(clearBtn) clearBtn.addEventListener("click", clearCart);
    
    const cartIcon = document.getElementById("cartIconBtn");
    if(cartIcon) cartIcon.addEventListener("click", scrollToCart);
    
    // Убираем ошибки при вводе
    const inputs = ['clientName', 'clientPhone', 'clientEmail', 'clientAddress'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if(input) {
            input.addEventListener('input', () => {
                input.classList.remove('invalid');
                const errorId = id.replace('client', '').toLowerCase() + 'Error';
                const errorSpan = document.getElementById(errorId);
                if(errorSpan) errorSpan.innerText = '';
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
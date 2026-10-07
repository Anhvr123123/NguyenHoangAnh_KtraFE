const carsData = [
    {
        id: 1,
        name: "Porsche 911 Carrera S",
        type: "sportscar",
        typeLabel: "Sportscar Petrol",
        priceVND: "9.920.000.000 VNĐ",
        priceUSD: "$396,800",
        hp: "450 HP",
        accel: "3.5 giây",
        maxSpeed: "308 km/h",
        engine: "3.0L Twin-Turbo Flat-6",
        img: "https://tse3.mm.bing.net/th/id/OIP.i_Rk17rNsIFrs2O_SGB3cAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 2,
        name: "Porsche Taycan 4S Electric",
        type: "electric",
        typeLabel: "Thuần Điện EV",
        priceVND: "5.720.000.000 VNĐ",
        priceUSD: "$228,800",
        hp: "530 HP",
        accel: "4.0 giây",
        maxSpeed: "250 km/h",
        engine: "Dual Permanent Magnet Motors",
        img: "https://th.bing.com/th/id/R.fe93469e438fa262697a670de2756314?rik=OZhZYAq8cUKEvA&pid=ImgRaw&r=0"
    },
    {
        id: 3,
        name: "Porsche Cayenne Turbo GT",
        type: "suv",
        typeLabel: "SUV Performance",
        priceVND: "12.250.000.000 VNĐ",
        priceUSD: "$490,000",
        hp: "640 HP",
        accel: "3.3 giây",
        maxSpeed: "300 km/h",
        engine: "4.0L Twin-Turbo V8",
        img: "https://porsche-vietnam.vn/wp-content/uploads/2023/09/E3-2nd-TOP-GT-model-page-headbanner.jpg"
    },
    {
        id: 4,
        name: "Porsche Panamera GTS",
        type: "sportscar",
        typeLabel: "Luxury Saloon",
        priceVND: "10.050.000.000 VNĐ",
        priceUSD: "$402,000",
        hp: "480 HP",
        accel: "3.9 giây",
        maxSpeed: "300 km/h",
        engine: "4.0L Twin-Turbo V8",
        img: "https://a.storyblok.com/f/322327/1700x1301/37fad573cb/pa24p5jox0003-design.jpg/m/1700x1155/smart/filters:format(avif)"
    },
    {
        id: 5,
        name: "Porsche Macan EV Turbo",
        type: "electric",
        typeLabel: "SUV Thuần Điện",
        priceVND: "4.790.000.000 VNĐ",
        priceUSD: "$191,600",
        hp: "639 HP",
        accel: "3.3 giây",
        maxSpeed: "260 km/h",
        engine: "PPE Platform Dual EV",
        img: "https://a.storyblok.com/f/322327/2244x2979/80af8b79a3/macan-turbo-front-1.jpg/m/900x1200/smart/filters:format(avif)"
    }
];

// Init page on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    renderCarsGrid(carsData);
});

// Tab Navigation Router
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    const targetSection = document.getElementById(`section-${tabId}`);
    if (targetSection) targetSection.classList.remove('hidden');

    const navBtn = document.getElementById(`nav-${tabId}`);
    if (navBtn) navBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        gold: {
                            400: '#e5c158',
                            500: '#d4af37',
                            600: '#c5a059',
                            700: '#997a2d'
                        },
                        porsche: {
                            dark: '#0a0a0c',
                            card: '#121318',
                            hover: '#1a1c23',
                            border: '#262933',
                            accent: '#d4af37',
                            red: '#cc0000'
                        }
                    },
                    fontFamily: {
                        cinzel: ['Cinzel', 'serif'],
                        sans: ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }

// Render Showroom Cars
function renderCarsGrid(cars) {
    const grid = document.getElementById('carsGrid');
    document.getElementById('carCount').innerText = cars.length;

    if (cars.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-gray-400 text-sm">Không tìm thấy mẫu xe Porsche nào phù hợp.</div>`;
        return;
    }

    grid.innerHTML = cars.map(car => `
                <div class="bg-porsche-card border border-porsche-border rounded-xl overflow-hidden gold-border-glow transition-all flex flex-col justify-between group">
                    <div>
                        <div class="relative overflow-hidden h-48">
                            <img src="${car.img}" alt="${car.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <span class="absolute top-3 right-3 bg-porsche-dark/80 backdrop-blur border border-gold-500/40 text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                ${car.typeLabel}
                            </span>
                        </div>
                        <div class="p-5">
                            <h3 class="font-cinzel font-bold text-lg text-white mb-1 group-hover:text-gold-400 transition-colors">${car.name}</h3>
                            <div class="text-xs text-gold-500 font-bold mb-4">${car.priceVND} <span class="text-gray-500 font-normal">(${car.priceUSD})</span></div>
                            
                            <!-- Tech Specs -->
                            <div class="grid grid-cols-2 gap-2 text-[11px] bg-porsche-dark p-3 rounded border border-porsche-border mb-4">
                                <div class="text-gray-400"><i class="fa-solid fa-gauge-high text-gold-500 mr-1"></i> Mã lực: <span class="text-white font-medium">${car.hp}</span></div>
                                <div class="text-gray-400"><i class="fa-solid fa-stopwatch text-gold-500 mr-1"></i> 0-100 km/h: <span class="text-white font-medium">${car.accel}</span></div>
                                <div class="text-gray-400"><i class="fa-solid fa-bolt text-gold-500 mr-1"></i> Tốc độ tối đa: <span class="text-white font-medium">${car.maxSpeed}</span></div>
                                <div class="text-gray-400 col-span-2 truncate"><i class="fa-solid fa-microchip text-gold-500 mr-1"></i> Động cơ: <span class="text-white font-medium">${car.engine}</span></div>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="px-5 pb-5 grid grid-cols-2 gap-3">
                        <button onclick="openTestDriveModal('${car.name}')" class="bg-porsche-dark border border-porsche-border text-gray-300 hover:text-gold-400 hover:border-gold-500 text-xs font-semibold py-2.5 rounded transition-all">
                            Đăng ký lái thử
                        </button>
                        <button onclick="openDepositModal('${car.name}')" class="bg-gold-500 text-porsche-dark font-bold text-xs py-2.5 rounded hover:brightness-110 transition-all">
                            Đặt cọc ngay
                        </button>
                    </div>
                </div>
            `).join('');
}

// Category Filter Logic
function filterCategory(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-gold-500', 'text-porsche-dark');
        b.classList.add('bg-porsche-card', 'text-gray-300');
    });
    btn.classList.add('active', 'bg-gold-500', 'text-porsche-dark');
    btn.classList.remove('bg-porsche-card', 'text-gray-300');

    if (cat === 'all') {
        renderCarsGrid(carsData);
    } else {
        const filtered = carsData.filter(c => c.type === cat);
        renderCarsGrid(filtered);
    }
}

// Search Filter
function filterCarsBySearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = carsData.filter(c => c.name.toLowerCase().includes(query) || c.engine.toLowerCase().includes(query));
    renderCarsGrid(filtered);
}

// Password Strength Indicator
function checkPasswordStrength() {
    const pass = document.getElementById('newPass').value;
    const bar = document.getElementById('strengthBar');
    const text = document.getElementById('strengthText');

    let strength = 0;
    if (pass.length >= 8) strength += 25;
    if (pass.match(/[A-Z]/)) strength += 25;
    if (pass.match(/[0-9]/)) strength += 25;
    if (pass.match(/[^a-zA-Z0-9]/)) strength += 25;

    bar.style.width = strength + '%';

    if (strength === 0) {
        text.innerText = 'Chưa nhập';
        text.className = 'font-semibold text-gray-500';
        bar.className = 'h-full w-0 transition-all duration-300';
    } else if (strength <= 50) {
        text.innerText = 'Yếu';
        text.className = 'font-semibold text-porsche-red';
        bar.className = 'h-full bg-porsche-red transition-all duration-300';
    } else if (strength <= 75) {
        text.innerText = 'Khá';
        text.className = 'font-semibold text-gold-400';
        bar.className = 'h-full bg-gold-400 transition-all duration-300';
    } else {
        text.innerText = 'Rất mạnh (An toàn)';
        text.className = 'font-semibold text-emerald-400';
        bar.className = 'h-full bg-emerald-400 transition-all duration-300';
    }
}

// Profile Form Submit
function saveProfile(e) {
    e.preventDefault();
    const newName = document.getElementById('profName').value;
    document.getElementById('profileDisplayName').innerText = newName;
    showToast('Thành công', 'Đã lưu thông tin hồ sơ chủ xe Porsche thành công!', 'success');
}

// Password Form Submit
function changePassword(e) {
    e.preventDefault();
    const newP = document.getElementById('newPass').value;
    const confP = document.getElementById('confirmPass').value;

    if (newP !== confP) {
        showToast('Lỗi', 'Mật khẩu xác nhận không khớp!', 'error');
        return;
    }
    showToast('Thành công', 'Mật khẩu tài khoản đã được thay đổi an toàn.', 'success');
    document.getElementById('passwordForm').reset();
    checkPasswordStrength();
}

// 2FA Toggle
function handle2FAToggle(checkbox) {
    const badge = document.getElementById('2faStatusBadge');
    if (checkbox.checked) {
        badge.innerText = 'Đã bật (Active)';
        badge.className = 'text-emerald-400 font-semibold';
        showToast('Bảo mật 2FA', 'Đã kích hoạt xác thực 2 yếu tố thành công.', 'success');
    } else {
        badge.innerText = 'Đã tắt (Cảnh báo)';
        badge.className = 'text-porsche-red font-semibold';
        showToast('Cảnh báo Bảo mật', 'Đã tắt 2FA. Tài khoản của bạn có thể kém an toàn hơn.', 'warning');
    }
}

// Revoke Session
function revokeSession(btn) {
    const parent = btn.closest('.flex');
    parent.remove();
    showToast('Bảo mật', 'Đã đăng xuất thiết bị từ xa thành công!', 'info');
}

function logoutAllDevices() {
    showToast('An toàn', 'Đã đăng xuất khỏi tất cả các thiết bị khác!', 'info');
}

// Support Ticket Submit
function submitSupportTicket(e) {
    e.preventDefault();
    showToast('CSKH Porsche', 'Yêu cầu hỗ trợ đã được gửi. Chuyên viên sẽ liên hệ trong 15 phút!', 'success');
    e.target.reset();
}

// Modal Open Handlers
function openTestDriveModal(carName) {
    document.getElementById('modalTitle').innerText = 'ĐĂNG KÝ LÁI THỬ PORSCHE VIP';
    document.getElementById('modalSub').innerText = carName;
    document.getElementById('bookingModal').classList.remove('hidden');
}

function openDepositModal(carName) {
    document.getElementById('modalTitle').innerText = 'ĐẶT CỌC XE PORSCHE';
    document.getElementById('modalSub').innerText = `${carName} - Đặt cọc ưu tiên 20%`;
    document.getElementById('bookingModal').classList.remove('hidden');
}

function openReturnModal(orderCode) {
    document.getElementById('returnOrderCode').innerText = `Mã đơn hàng: ${orderCode}`;
    document.getElementById('returnModal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function handleBookingSubmit(e) {
    e.preventDefault();
    closeModal('bookingModal');
    showToast('Thành công', 'Cảm ơn quý khách! Chuyên viên tư vấn Porsche sẽ liên hệ ngay.', 'success');
}

function handleReturnSubmit(e) {
    e.preventDefault();
    closeModal('returnModal');
    showToast('Tiếp nhận', 'Đã ghi nhận yêu cầu đổi trả phụ kiện Tequipment!', 'info');
}

// FAQ Toggle
function toggleFaq(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

function triggerAvatarUpload() {
    showToast('Thông báo', 'Tính năng tải ảnh avatar từ thiết bị đang mở chọn tệp...', 'info');
}

function downloadContract() {
    showToast('Tải hợp đồng', 'Đang xuất file HopDong_Porsche_911GT3RS.pdf...', 'info');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function scrollToGrid() {
    document.getElementById('showroomGrid').scrollIntoView({ behavior: 'smooth' });
}

// Toast Notification System
function showToast(title, message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');

    let borderColor = 'border-gold-500';
    let icon = 'fa-circle-check text-gold-500';

    if (type === 'error') {
        borderColor = 'border-porsche-red';
        icon = 'fa-circle-xmark text-porsche-red';
    } else if (type === 'info') {
        borderColor = 'border-blue-500';
        icon = 'fa-circle-info text-blue-500';
    } else if (type === 'warning') {
        borderColor = 'border-amber-500';
        icon = 'fa-triangle-exclamation text-amber-500';
    }

    toast.className = `bg-porsche-card border-l-4 ${borderColor} text-white p-4 rounded-r shadow-2xl flex items-start gap-3 transform translate-x-full transition-all duration-300 text-xs border-y border-r border-porsche-border`;
    toast.innerHTML = `
                <i class="fa-solid ${icon} text-lg mt-0.5"></i>
                <div class="flex-1">
                    <div class="font-bold text-sm">${title}</div>
                    <div class="text-gray-300 mt-0.5">${message}</div>
                </div>
                <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
            `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-x-full'), 10);

    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
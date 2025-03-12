function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateOptions = { timeZone: 'Asia/Jakarta', day: '2-digit', month: 'long', year: 'numeric' };

    document.getElementById('datetime').innerHTML = `
        <span>${new Intl.DateTimeFormat('id-ID', dateOptions).format(now)}</span> |
        <span>${new Intl.DateTimeFormat('id-ID', options).format(now)}</span>
    `;
}

// Update waktu setiap detik
setInterval(updateTime, 1000);
window.onload = updateTime;

// Fungsi untuk menangani pencarian
function search(engine) {
    const query = document.getElementById('search-input').value;
    if (!query) {
        alert('Masukkan kata kunci terlebih dahulu!');
        return;
    }

    let url = '';
    switch (engine) {
        case 'google':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'yahoo':
            url = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
            break;
        case 'bing':
            url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'shodan':
            url = `https://www.shodan.io/search?query=${encodeURIComponent(query)}`;
            break;
        case 'duckduckgo':
            url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            break;
        case 'yandex':
            url = `https://yandex.com/search/?text=${encodeURIComponent(query)}`;
            break;
        default:
            // alert('Mesin pencari tidak dikenal!');
            return;
    }

    window.open(url, '_blank'); // Buka di tab baru
}

// Debug information
console.log('Script loaded successfully');

// CSV data
const csvData = `merchantProfileId,"Coordinates (Latitude, Longitude)"
c59bf1ac-05e2-423b-9245-e29f6046a4db,"5.5489,95.324"
87a80b52-1633-4ee2-b75e-6b9853b418ef,"5.4939,95.3329"
3b22d3ad-01e9-4b90-b250-41b0ece739f9,"3.6382,98.4927"
763401df-999d-44e2-a29b-0b83e6f443c6,"3.0009,99.8208"
622d871e-4e52-4f4c-89b7-bf65953e2ab5,"2.9468,98.5228"
3e7d7eb5-2a54-4f15-945d-4f54d5fc5a1c,"2.7431,98.4138"
217990df-cb37-42d2-a0d3-4496f8a417d2,"1.6581,101.4428"
e8d8484d-1d91-402a-b529-82da356366ab,"1.3774,99.2678"
dcfe37e9-9ad8-4f9f-9051-1bc4918e1ba1,"1.0147,99.499"
fb693b6f-d905-4c20-ae71-33a6bb7b946b,"0.846,101.3215"`;

// Parse CSV data
const merchants = csvData.split('\n').slice(1).map(row => {
    const [id, coords] = row.split(',"');
    const [lat, lon] = coords.slice(0, -1).split(',').map(Number);
    return { id, lat, lon };
});

// Initialize the map
const map = L.map('map').setView([3, 100], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let userMarker;
let merchantMarkers = [];

// Haversine formula implementation
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
}

// Handle map clicks
map.on('click', function(e) {
    if (userMarker) {
        map.removeLayer(userMarker);
    }
    userMarker = L.marker(e.latlng, { icon: L.divIcon({ className: 'user-location', html: '🔴' }) }).addTo(map);
    document.getElementById('findMerchantsBtn').disabled = false;
});

// Find nearest merchants
document.getElementById('findMerchantsBtn').addEventListener('click', function() {
    if (!userMarker) return;

    const userLat = userMarker.getLatLng().lat;
    const userLon = userMarker.getLatLng().lng;

    const nearestMerchants = merchants.map(merchant => ({
        ...merchant,
        distance: haversineDistance(userLat, userLon, merchant.lat, merchant.lon)
    }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

    // Clear previous merchant markers
    merchantMarkers.forEach(marker => map.removeLayer(marker));
    merchantMarkers = [];

    // Add new merchant markers
    nearestMerchants.forEach(merchant => {
        const marker = L.marker([merchant.lat, merchant.lon], { icon: L.divIcon({ className: 'merchant-location', html: '📍' }) }).addTo(map);
        merchantMarkers.push(marker);
    });

    // Display merchant list
    const merchantsList = document.getElementById('merchantsList');
    merchantsList.innerHTML = '<h2>5 Nearest Merchants:</h2>' +
        nearestMerchants.map(merchant =>
            `<p>ID: ${merchant.id}<br>Distance: ${(merchant.distance / 1000).toFixed(2)} km<br>Coordinates: ${merchant.lat}, ${merchant.lon}</p>`
        ).join('');

    // Fit map to show all points
    const bounds = L.latLngBounds([userMarker.getLatLng(), ...nearestMerchants.map(m => [m.lat, m.lon])]);
    map.fitBounds(bounds);
});

console.log('Script execution completed');
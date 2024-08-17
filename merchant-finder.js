// CSV data
const csvData = `merchantProfileId,Name,"Coordinates (Latitude, Longitude)"
c59bf1ac-05e2-423b-9245-e29f6046a4db,Merchant A,"5.5489,95.324"
87a80b52-1633-4ee2-b75e-6b9853b418ef,Merchant B,"5.4939,95.3329"
3b22d3ad-01e9-4b90-b250-41b0ece739f9,Merchant C,"3.6382,98.4927"
763401df-999d-44e2-a29b-0b83e6f443c6,Merchant D,"3.0009,99.8208"
622d871e-4e52-4f4c-89b7-bf65953e2ab5,Merchant E,"2.9468,98.5228"
3e7d7eb5-2a54-4f15-945d-4f54d5fc5a1c,Merchant F,"2.7431,98.4138"
217990df-cb37-42d2-a0d3-4496f8a417d2,Merchant G,"1.6581,101.4428"
e8d8484d-1d91-402a-b529-82da356366ab,Merchant H,"1.3774,99.2678"
dcfe37e9-9ad8-4f9f-9051-1bc4918e1ba1,Merchant I,"1.0147,99.499"
fb693b6f-d905-4c20-ae71-33a6bb7b946b,Merchant J,"0.846,101.3215"`;

// Improved parsing function
function parseCSVRow(row) {
    const parts = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
    if (parts && parts.length === 3) {
        const [id, name, coords] = parts.map(part => part.replace(/^"(.*)"$/, '$1').trim());
        const [lat, lon] = coords.split(',').map(s => parseFloat(s.trim()));
        if (!isNaN(lat) && !isNaN(lon)) {
            return { id, name, lat, lon };
        }
    }
    throw new Error(`Invalid row format: ${row}`);
}

// Parse CSV data
const merchants = csvData.split('\n').slice(1).map(row => {
    try {
        const merchant = parseCSVRow(row);
        console.log(`Parsed merchant: ${merchant.name}, Lat: ${merchant.lat}, Lon: ${merchant.lon}`);
        return merchant;
    } catch (error) {
        console.error('Error parsing merchant row:', row, error.message);
        return null;
    }
}).filter(Boolean);

console.log('Merchants data parsed:', merchants);

// Initialize the map
let map;
let userMarker;
let merchantMarkers = [];

// Initialize the map
try {
    map = L.map('map').setView([3, 100], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    console.log('Map initialized successfully');
} catch (error) {
    console.error('Error initializing map:', error);
    document.getElementById('errorMsg').innerHTML = 'Error initializing map. Check console for details.';
}

// Function to create a merchant marker
function createMerchantMarker(merchant) {
    return L.circleMarker([merchant.lat, merchant.lon], {
        radius: 5,
        fillColor: '#0000ff',
        color: '#000',
        weight: 1,
        opacity: 0.7,
        fillOpacity: 0.4
    });
}

// Add all merchant locations to the map
merchants.forEach(merchant => {
    try {
        const marker = createMerchantMarker(merchant);
        marker.addTo(map);
        merchantMarkers.push({ merchant, marker });
        console.log('Added merchant marker:', merchant);
    } catch (error) {
        console.error('Error adding merchant marker:', merchant, error);
    }
});

console.log('Merchant markers added:', merchantMarkers.length);

// Revised Haversine formula implementation
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
    console.log('Map clicked:', e.latlng);
    if (userMarker) {
        map.removeLayer(userMarker);
    }
    userMarker = L.marker(e.latlng, {
        icon: L.divIcon({ className: 'user-location', html: '🔴' }) // Red dot for user
    }).addTo(map);
    document.getElementById('findMerchantsBtn').disabled = false;
});

// Reset all merchant markers to their original style
function resetMerchantMarkers() {
    merchantMarkers.forEach(({ marker }) => {
        marker.setStyle({
            fillColor: '#0000ff',
            opacity: 0.7,
            fillOpacity: 0.4
        });
    });
}

// Find nearest merchants
document.getElementById('findMerchantsBtn').addEventListener('click', function() {
    console.log('Find merchants button clicked');
    if (!userMarker) {
        console.warn('No user location set');
        return;
    }

    const userLat = userMarker.getLatLng().lat;
    const userLon = userMarker.getLatLng().lng;
    console.log('User location:', userLat, userLon);

    // Reset all markers first
    resetMerchantMarkers();

    // Recalculate distances for all merchants
    const merchantsWithDistances = merchantMarkers.map(({ merchant, marker }) => {
        const distance = haversineDistance(userLat, userLon, merchant.lat, merchant.lon);
        console.log(`Distance to ${merchant.name}:`, distance);
        return { merchant, marker, distance };
    });

    // Sort and get the 5 nearest merchants
    const nearestMerchants = merchantsWithDistances
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

    console.log('Nearest merchants:', nearestMerchants);

    // Highlight the nearest merchants
    nearestMerchants.forEach(({ marker }) => {
        marker.setStyle({
            fillColor: '#0000ff',
            opacity: 1,
            fillOpacity: 1
        });
        marker.bringToFront();
    });

    // Display merchant list
    const merchantsList = document.getElementById('merchantsList');
    merchantsList.innerHTML = '<h2>5 Nearest Merchants:</h2>' +
        nearestMerchants.map(({ merchant, distance }) => {
            const distanceKm = isNaN(distance) ? 'Error' : (distance / 1000).toFixed(2);
            return `<p>Name: ${merchant.name}<br>Distance from your location: ${distanceKm} km<br>Coordinates: ${merchant.lat}, ${merchant.lon}</p>`;
        }).join('');

    // Fit map to show all points
    const bounds = L.latLngBounds([
        userMarker.getLatLng(),
        ...nearestMerchants.map(m => [m.merchant.lat, m.merchant.lon])
    ]);
    map.fitBounds(bounds);
});

console.log('Script execution completed');
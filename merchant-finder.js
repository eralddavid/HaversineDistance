// Merchant CSV data
const merchantData = `merchantProfileId,Name,"Coordinates (Latitude, Longitude)",TransactionVolume,City
c59bf1ac-05e2-423b-9245-e29f6046a4db,Merchant A,"5.5489,95.324",15000,Banda Aceh
87a80b52-1633-4ee2-b75e-6b9853b418ef,Merchant B,"5.4939,95.3329",22000,Banda Aceh
3b22d3ad-01e9-4b90-b250-41b0ece739f9,Merchant C,"3.6382,98.4927",18000,Medan
763401df-999d-44e2-a29b-0b83e6f443c6,Merchant D,"3.0009,99.8208",12000,Pematangsiantar
622d871e-4e52-4f4c-89b7-bf65953e2ab5,Merchant E,"2.9468,98.5228",25000,Pematangsiantar
3e7d7eb5-2a54-4f15-945d-4f54d5fc5a1c,Merchant F,"2.7431,98.4138",30000,Medan
217990df-cb37-42d2-a0d3-4496f8a417d2,Merchant G,"1.6581,101.4428",10000,Pekanbaru
e8d8484d-1d91-402a-b529-82da356366ab,Merchant H,"1.3774,99.2678",28000,Padang
dcfe37e9-9ad8-4f9f-9051-1bc4918e1ba1,Merchant I,"1.0147,99.499",20000,Padang
fb693b6f-d905-4c20-ae71-33a6bb7b946b,Merchant J,"0.846,101.3215",17000,Pekanbaru`;

// BRI Link CSV data (truncated for brevity, include all 157 rows in actual implementation)
const briLinkData = `City_Regency,Address,Latitude,Longitude,name_random,identifier
KOTA MEDAN,N/A,3.613031,98.7394104,4fa1a125-b487-41a7-ba3d-e9e3d13fec51,BRI_Link
KOTA MEDAN,N/A,3.4882326,98.598852799999989,7688fffa-f32b-4d1c-99ea-abf1aa8f568c,BRI_Link
KOTA MEDAN,N/A,3.6889394,98.696522399999992,31d53bc0-09e1-4f79-a491-147302e80292,BRI_Link
KOTA MEDAN,N/A,3.5711934,98.642411799999991,9360e112-8914-48c0-9ce7-8b269a64a404,BRI_Link
KOTA MEDAN,N/A,3.514539,98.6693019,bc507980-ae1c-4629-a873-bd7cd8e79b9a,BRI_Link
KOTA MEDAN,N/A,3.5894767,98.7172793,01901043-144f-4fde-8c58-615329c3c04f,BRI_Link
KOTA MEDAN,N/A,3.5921730999999988,98.6023348,00cec781-c084-4382-be20-ed62799e2c4d,BRI_Link
KOTA MEDAN,N/A,3.5751983,98.70458099999999,d4446d81-0adb-4b33-a7e7-f5a08cb11203,BRI_Link
KOTA MEDAN,N/A,3.499553,98.6000742,f5e33565-498d-47ab-815c-c34c84db2302,BRI_Link
KOTA MEDAN,N/A,3.6159062999999989,98.697166,0de07eb0-263f-4b55-81e9-cf514ea5a530,BRI_Link
KOTA MEDAN,N/A,3.5814206,98.5512964,4a5337e9-da51-41c5-bf3c-e705b29474e2,BRI_Link
KOTA MEDAN,N/A,3.5962515,98.690973899999989,27f0eda8-8a0d-4a16-a869-6bca83451dc4,BRI_Link
KOTA MEDAN,N/A,3.5814452,98.7157091,7cd78e8d-b2cc-4278-b619-8243cb24a27f,BRI_Link
KOTA MEDAN,N/A,3.5639962,98.599439900000007,1c4e61a9-8d10-481e-9ec6-2ff1e43f5daf,BRI_Link
KOTA MEDAN,N/A,3.5378166,98.6052883,963a70ed-56c5-4dae-81e7-e190c384fe5e,BRI_Link
KOTA MEDAN,N/A,3.5722988,98.6998026,6e97f6c5-b8b4-4ae7-9bb8-e346e589df2e,BRI_Link
KOTA MEDAN,N/A,3.5888577,98.650659199999993,999da19e-d602-47c2-bb53-f78fa4f3844b,BRI_Link
KOTA MEDAN,N/A,3.7076153,98.6025548,836d9bae-c35b-47de-954d-53c0a97b4fe8,BRI_Link
KOTA MEDAN,N/A,3.5819315,98.7115968,3418ca1c-e688-4ea9-92f3-ff676111e7ea,BRI_Link
KOTA MEDAN,N/A,3.7170291,98.6637063,c11eb6df-fd3b-4bdb-a29b-ec1b06f60d3c,BRI_Link
KOTA MEDAN,N/A,3.5975691999999988,98.7228494,63cf8421-8983-4cd5-aa0e-8299f76903b1,BRI_Link
KOTA MEDAN,N/A,3.7394447,98.67809969999999,bbbc27fc-50a8-4225-af81-2139fb760af0,BRI_Link
KOTA MEDAN,N/A,3.5146225,98.6158294,ca208f1a-e764-45d9-9d5b-f993a23b4c1a,BRI_Link
KOTA MEDAN,N/A,3.5818463,98.6209289,a9b0bd2a-7a56-44ed-8292-c2074cf71aa1,BRI_Link
KOTA MEDAN,N/A,3.6890412,98.639307,6d957ded-c505-4c3b-b55f-eea0f6bf90b6,BRI_Link
KOTA MEDAN,N/A,3.5953157,98.718729299999993,aa75ed5f-d4fc-4805-8b25-befc18e31262,BRI_Link
KOTA MEDAN,N/A,3.5159509,98.679721399999991,07452264-5d2a-4bee-8eaf-9f3885d8982b,BRI_Link
KOTA MEDAN,N/A,3.6367748,98.6813873,441916e8-a9e1-4ec6-8f19-cc87ae5aacf9,BRI_Link
KOTA MEDAN,N/A,3.5111286,98.6152118,59fa8cfc-0c4b-4274-9a42-adc36a5efb50,BRI_Link
KOTA MEDAN,N/A,3.5944978,98.722019800000012,bd093374-3ac4-490b-9479-30197be3e0cb,BRI_Link
KOTA MEDAN,N/A,3.6604067,98.67785889999999,b6d22fb9-1564-4d0f-9d08-c445a0edc292,BRI_Link
KOTA MEDAN,N/A,3.5292408,98.7104148,0f9420fb-4e34-4af5-8225-ce6e2d6f55e9,BRI_Link
KOTA MEDAN,N/A,3.6010592,98.64018209999999,ac7f6e7d-b5ce-44e1-933e-a98ba782282d,BRI_Link
KOTA MEDAN,N/A,3.5841785,98.629327500000016,602ad1b9-e641-4349-8088-3010e838ab7c,BRI_Link
KOTA MEDAN,N/A,3.5059053,98.6830256,3c85ef57-9ccf-4491-a408-955a31bf358f,BRI_Link
KOTA MEDAN,N/A,3.5670777,98.56268279999999,1b3da375-b243-46fa-b9d5-1e27f1244c46,BRI_Link
KOTA MEDAN,N/A,3.633127899999999,98.6868894,db253e97-f8c5-4011-b895-38b73fb4564e,BRI_Link
KOTA MEDAN,N/A,3.6129093,98.700530199999989,301e44b3-baba-45bd-8f85-d42e1fe0ec3f,BRI_Link
KOTA MEDAN,N/A,3.585686,98.5951781,38311b40-6686-44b9-972f-7e363bffe9e2,BRI_Link
KOTA MEDAN,N/A,3.689351,98.6753943,54e49f4e-04ef-44be-a66c-08c5bbf80ceb,BRI_Link
KOTA MEDAN,N/A,3.5405463,98.823269200000013,cb565175-15b8-4e0b-957b-c6a681748611,BRI_Link
KOTA MEDAN,N/A,3.6059536,98.69663340000001,f98dc91e-94b4-431b-b51b-65ca6eea604c,BRI_Link
KOTA MEDAN,N/A,3.5786729,98.5895418,6aebb9a4-98d6-4ffb-989e-f7d1b4200e21,BRI_Link
KOTA MEDAN,N/A,3.6547897999999992,98.663578399999992,f6f5fa02-1c16-49e2-8cf7-bef2d1eb97ff,BRI_Link
KOTA MEDAN,N/A,3.7234526,98.680180299999989,d809c23e-e6da-43bc-8b07-8ec4078d63b0,BRI_Link
KOTA MEDAN,N/A,3.5818778999999989,98.6192738,384b4ea0-a6c3-4484-9896-73caaa672a52,BRI_Link
KOTA MEDAN,N/A,3.5477221,98.6727104,c3d0e4cc-aa5a-4036-a18f-25eb72299b83,BRI_Link
KOTA MEDAN,N/A,3.6895161,98.6575323,73b1a263-4cb0-4102-9880-41614dc36949,BRI_Link
KOTA MEDAN,N/A,3.6069637,98.7888488,80c0ec15-4db0-4c40-b2a6-8990957ba1c5,BRI_Link
KOTA MEDAN,N/A,3.5815003,98.714934700000015,41e9a7f3-fbb6-4553-8184-ec826f5f87af,BRI_Link`;

// Parse merchant data
function parseMerchantRow(row) {
    const parts = row.split(',');
    const [id, name, coords, transactionVolume, city] = parts.map(part => part.replace(/^"(.*)"$/, '$1').trim());
    const [lat, lon] = coords.split(',').map(s => parseFloat(s.trim()));
    if (!isNaN(lat) && !isNaN(lon)) {
        return { id, name, lat, lon, transactionVolume: parseInt(transactionVolume), city, type: 'Merchant' };
    }
    throw new Error(`Invalid merchant row format: ${row}`);
}

// Parse BRI Link data
function parseBRILinkRow(row) {
    const [city, address, lat, lon, name, identifier] = row.split(',');
    return {
        city,
        address,
        lat: parseFloat(lat),
        lon: parseFloat(lon),
        name,
        id: identifier,
        type: 'BRI_Link'
    };
}

// Parse all location data
const merchants = merchantData.split('\n').slice(1).map(row => {
    try {
        return parseMerchantRow(row);
    } catch (error) {
        console.error('Error parsing merchant row:', error);
        return null;
    }
}).filter(Boolean);

const briLinks = briLinkData.split('\n').slice(1).map(row => {
    try {
        return parseBRILinkRow(row);
    } catch (error) {
        console.error('Error parsing BRI Link row:', error);
        return null;
    }
}).filter(Boolean);

const allLocations = [...merchants, ...briLinks];

console.log('Total locations parsed:', allLocations.length);

let map;
let userMarker;
let locationMarkers = [];
let heatLayer;

// Initialize the map
try {
    map = L.map('map').setView([3, 100], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    console.log('Map initialized successfully');

    // Initialize heat map after map is loaded
    map.whenReady(() => {
        initializeHeatMap();
    });
} catch (error) {
    console.error('Error initializing map:', error);
    document.getElementById('errorMsg').innerHTML = 'Error initializing map. Check console for details.';
}

function initializeHeatMap() {
    try {
        const heatMapData = allLocations.map(loc => [loc.lat, loc.lon, 1]); // weight is 1 for all locations
        heatLayer = L.heatLayer(heatMapData, { radius: 25, blur: 15, maxZoom: 17 }).addTo(map);
        console.log('Heat map initialized successfully');
    } catch (error) {
        console.error('Error initializing heat map:', error);
    }
}

// Function to toggle heat map
function toggleHeatMap() {
    if (map.hasLayer(heatLayer)) {
        map.removeLayer(heatLayer);
    } else {
        map.addLayer(heatLayer);
    }
}

// Add a button to toggle the heat map
const heatMapButton = L.control({ position: 'topright' });
heatMapButton.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'heat-map-button');
    div.innerHTML = '<button onclick="toggleHeatMap()">Toggle Heat Map</button>';
    return div;
};
heatMapButton.addTo(map);

// Function to create a location marker
function createLocationMarker(location) {
    let marker;
    if (location.type === 'BRI_Link') {
        marker = L.marker([location.lat, location.lon], {
            icon: L.divIcon({ className: 'bri-link-icon', html: '🏪' })
        });
    } else {
        marker = L.circleMarker([location.lat, location.lon], {
            radius: 5,
            fillColor: '#3388ff',
            color: '#3388ff',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }

    marker.bindPopup(`<b>${location.name || location.id}</b><br>Type: ${location.type}<br>${location.city || ''}`);
    return marker;
}

// Add all locations to the map
allLocations.forEach(location => {
    try {
        const marker = createLocationMarker(location);
        marker.addTo(map);
        locationMarkers.push({ location, marker });
        console.log('Added location marker:', location.type);
    } catch (error) {
        console.error('Error adding location marker:', location, error);
    }
});

console.log('Location markers added:', locationMarkers.length);

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
    console.log('Map clicked:', e.latlng);
    if (userMarker) {
        map.removeLayer(userMarker);
    }
    userMarker = L.marker(e.latlng, {
        icon: L.divIcon({ className: 'user-location', html: '🔴' }) // Red dot for user
    }).addTo(map);
    document.getElementById('findLocationsBtn').disabled = false;
});

// Reset all location markers to their original style
function resetLocationMarkers() {
    locationMarkers.forEach(({ marker }) => {
        marker.setOpacity(1);
    });
}

// Find nearest locations
document.getElementById('findLocationsBtn').addEventListener('click', function() {
    console.log('Find locations button clicked');
    if (!userMarker) {
        console.warn('No user location set');
        return;
    }

    const userLat = userMarker.getLatLng().lat;
    const userLon = userMarker.getLatLng().lng;
    console.log('User location:', userLat, userLon);

    // Reset all markers first
    resetLocationMarkers();

    // Recalculate distances for all locations
    const locationsWithDistances = locationMarkers.map(({ location, marker }) => {
        const distance = haversineDistance(userLat, userLon, location.lat, location.lon);
        console.log(`Distance to ${location.name || location.id}:`, distance);
        return { location, marker, distance };
    });

    // Sort and get the 5 nearest locations
    const nearestLocations = locationsWithDistances
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

    console.log('Nearest locations:', nearestLocations);

    // Highlight the nearest locations
    nearestLocations.forEach(({ marker }) => {
        if (marker instanceof L.CircleMarker) {
            marker.setStyle({
                fillColor: '#ff3388',
                color: '#ff3388',
                fillOpacity: 1
            });
        } else {
            marker.setZIndexOffset(1000); // Bring marker to front for point markers
        }
    });

    // Display location list
    const locationsList = document.getElementById('locationsList');
    locationsList.innerHTML = '<h2>5 Nearest Locations:</h2>' +
        nearestLocations.map(({ location, distance }) => {
            const distanceKm = isNaN(distance) ? 'Error' : (distance / 1000).toFixed(2);
            return `<p>Name: ${location.name || location.id}<br>Type: ${location.type}<br>Distance from your location: ${distanceKm} km</p>`;
        }).join('');

    // Fit map to show all points
    const bounds = L.latLngBounds([
        userMarker.getLatLng(),
        ...nearestLocations.map(l => [l.location.lat, l.location.lon])
    ]);
    map.fitBounds(bounds);
});

// Reset all location markers to their original style
function resetLocationMarkers() {
    locationMarkers.forEach(({ location, marker }) => {
        if (marker instanceof L.CircleMarker) {
            marker.setStyle({
                fillColor: '#3388ff',
                color: '#3388ff',
                fillOpacity: 0.8
            });
        }
        // For point markers (BRI_Link), we don't need to reset anything
    });
}

function geospatialSearch(lat, lon, category) {
    const results = locationMarkers.map(({ location, marker }) => {
        const distance = haversineDistance(lat, lon, location.lat, location.lon);
        return { ...location, distance, marker };
    });

    let filteredResults;
    switch (category) {
        case '0-1km':
            filteredResults = results.filter(m => m.distance <= 1000);
            break;
        case '1-10km':
            filteredResults = results.filter(m => m.distance > 1000 && m.distance <= 10000);
            break;
        case '>10km':
            filteredResults = results.filter(m => m.distance > 10000);
            break;
        default:
            filteredResults = results;
    }

    return filteredResults.sort((a, b) => a.distance - b.distance);
}

// Add UI elements for geospatial search
const searchControl = L.control({ position: 'topleft' });
searchControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'geospatial-search');
    div.innerHTML = `
        <select id="distanceCategory">
            <option value="0-1km">0 - 1 km</option>
            <option value="1-10km">1 - 10 km</option>
            <option value=">10km">> 10 km</option>
        </select>
        <button onclick="performGeospatialSearch()">Search</button>
    `;
    return div;
};
searchControl.addTo(map);

function performGeospatialSearch() {
    if (!userMarker) {
        alert('Please set your location first');
        return;
    }

    const category = document.getElementById('distanceCategory').value;
    const userLat = userMarker.getLatLng().lat;
    const userLon = userMarker.getLatLng().lng;

    const searchResults = geospatialSearch(userLat, userLon, category);

    // Reset all markers
    resetLocationMarkers();

    // Highlight search results
    searchResults.forEach(result => {
        if (result.marker instanceof L.CircleMarker) {
            result.marker.setStyle({
                fillColor: '#ff3388',
                color: '#ff3388',
                fillOpacity: 1
            });
        } else {
            result.marker.setZIndexOffset(1000);
        }
    });

    // Update the location list
    const locationsList = document.getElementById('locationsList');
    locationsList.innerHTML = '<h2>Search Results:</h2>' +
        searchResults.map(location =>
            `<p>Name: ${location.name || location.id}<br>Type: ${location.type}<br>Distance: ${(location.distance / 1000).toFixed(2)} km</p>`
        ).join('');

    // Fit map to show all points
    const bounds = L.latLngBounds([userMarker.getLatLng(), ...searchResults.map(l => [l.lat, l.lon])]);
    map.fitBounds(bounds);
}

console.log('Script execution completed');
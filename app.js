// 📊 FULL DATA STRUCTURE
const masterBusData = {
    chelliparamba: {
        taliparamba: [
            { time: "05:30 AM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 5:25)", nameEn: "JJ (From Chemperi 5:25)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba", coords: [12.0402, 75.3610] },
            { time: "06:45 AM", name: "സാഗര (ചെമ്പേരിയിൽ നിന്ന് 6:35)", nameEn: "Sagara (From Chemperi 6:35)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba", coords: [12.0305, 75.4010] },
            { time: "06:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "പുളിക്കുരുമ്പ - തളിപ്പറമ്പ്", routeEn: "Pulikkurumba to Taliparamba", coords: [12.0450, 75.3700] },
            { time: "07:35 AM", name: "നന്ദനം", nameEn: "Nandanam", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba", coords: [12.0210, 75.4120] },
            { time: "08:30 AM", name: "കുന്നത്ത് (ചെമ്പേരിയിൽ നിന്ന് 8:20)", nameEn: "Kunnath (From Chemperi 8:20)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba", coords: [12.0350, 75.3540] }
        ],
        iritty: [
            { time: "07:30 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "ഇരുട്ടിക്ക് നേരിട്ട്", routeEn: "Direct to Iritty", coords: [11.9830, 75.6640] },
            { time: "07:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "ഇരുട്ടി വഴി മാനന്തവാടി", routeEn: "via Iritty to Mananthavady", coords: [11.9810, 75.6720] }
        ],
        alakode: [
            { time: "08:00 AM", name: "ഐ പി സി", nameEn: "IPC", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha", coords: [12.2280, 75.4660] }
        ]
    },
    kuthuparamba: {
        to_kannur: [
            { time: "06:00 AM", name: "TALENT [LS]", nameEn: "TALENT [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur", coords: [11.8290, 75.4850] },
            { time: "06:20 AM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur", coords: [11.8320, 75.4910] }
        ],
        from_kannur: [
            { time: "08:15 AM", name: "ASWIN [LS]", nameEn: "ASWIN [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba", coords: [11.8710, 75.3620] }
        ]
    }
};

const destRouteNames = {
    chelliparamba: [
        { id: "taliparamba", ml: "തളിപ്പറമ്പ്", en: "Taliparamba" },
        { id: "iritty", ml: "ഇരുട്ടി", en: "Iritty" },
        { id: "alakode", ml: "ആലക്കോട്", en: "Alakode" }
    ],
    kuthuparamba: [
        { id: "to_kannur", ml: "കണ്ണൂർ ഭാഗത്തേക്ക്", en: "Towards Kannur" },
        { id: "from_kannur", ml: "കണ്ണൂരിൽ നിന്ന് ഇങ്ങോട്ട്", en: "From Kannur" }
    ]
};

// Application State
let currentLang = 'ml';
let selectedSource = 'chelliparamba';
let selectedDest = 'taliparamba';
let mapInstance = null;
let currentMarker = null;

// Initialize Leaflet Map
function initMap() {
    if (!mapInstance) {
        mapInstance = L.map('map').setView([11.9350, 75.5200], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(mapInstance);
    }
}

// TOGGLE LANGUAGE
function toggleLanguage() {
    const btn = document.getElementById('langToggleBtn');
    if (currentLang === 'ml') {
        currentLang = 'en';
        btn.textContent = "മലയാളം";
    } else {
        currentLang = 'ml';
        btn.textContent = "English";
    }
    updateStaticTexts();
    renderDestinations();
    renderBuses();
}

function updateStaticTexts() {
    const sourceTitle = document.getElementById('sourceTitle');
    const searchHint = document.getElementById('searchHint');
    const srcBtnChelli = document.getElementById('srcBtnChelli');
    const srcBtnKuthu = document.getElementById('srcBtnKuthu');
    const mapHeading = document.getElementById('mapHeading');
    const mapSubText = document.getElementById('mapSubText');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    if (currentLang === 'ml') {
        if(sourceTitle) sourceTitle.textContent = "നിങ്ങൾ ഇപ്പോൾ എവിടെയാണ്?";
        if(searchHint) searchHint.textContent = "ബസ് പേര് അല്ലെങ്കിൽ";
        if(srcBtnChelli) srcBtnChelli.textContent = "ചെല്ലിപ്പറമ്പ് / ചെമ്പേരി";
        if(srcBtnKuthu) srcBtnKuthu.textContent = "கூത്തുപറമ്പ് / കണ്ണൂർ";
        if(mapHeading) mapHeading.textContent = "📍 ലൈവ് ട്രാക്കിംഗ് (Live Status)";
        if(mapSubText) mapSubText.textContent = "ട്രാഫിക്കും ലൈവ് ലൊക്കേഷനും കാണാൻ ഏതെങ്കിലും ഒരു ബസിൽ ക്ലിക്ക് ചെയ്യുക.";
        if(modalTitle) modalTitle.textContent = "ലൊക്കേഷൻ ഷെയർ ചെയ്യുക";
        if(modalDesc) modalDesc.textContent = "നിങ്ങളുടെ ലൈവ് ലൊക്കേഷൻ മറ്റുള്ളവർക്ക് ഷെയർ ചെയ്യാനുള്ള സമയം തിരഞ്ഞെടുക്കുക:";
    } else {
        if(sourceTitle) sourceTitle.textContent = "Where are you now?";
        if(searchHint) searchHint.textContent = "Bus Name Or";
        if(srcBtnChelli) srcBtnChelli.textContent = "Chelliparamba / Chemperi";
        if(srcBtnKuthu) srcBtnKuthu.textContent = "Kuthuparamba / Kannur";
        if(mapHeading) mapHeading.textContent = "📍 Live Tracking Status";
        if(mapSubText) mapSubText.textContent = "Click on any bus to see live location and traffic.";
        if(modalTitle) modalTitle.textContent = "Share Live Location";
        if(modalDesc) modalDesc.textContent = "Choose how long you want to share your live tracking link:";
    }
}

function selectSource(sourceId) {
    let cleanId = sourceId.trim().toLowerCase();
    if (cleanId.includes('chelliparamba')) selectedSource = 'chelliparamba';
    else if (cleanId.includes('kuthuparamba')) selectedSource = 'kuthuparamba';
    else selectedSource = cleanId;
    
    if (masterBusData[selectedSource]) {
        selectedDest = Object.keys(masterBusData[selectedSource])[0];
    }
    
    updateSourceTabStyles();
    renderDestinations();
    renderBuses();
    initMap();
}

function updateSourceTabStyles() {
    const tabs = document.querySelectorAll('.source-btn');
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick').toLowerCase().includes(selectedSource)) {
            tab.style.backgroundColor = '#2e7d32';
            tab.style.color = '#fff';
        } else {
            tab.style.backgroundColor = '#fff';
            tab.style.color = '#2e7d32';
        }
    });
}

function renderDestinations() {
    const container = document.getElementById('destContainer');
    if (!container) return;
    container.innerHTML = '';
    const destinations = destRouteNames[selectedSource] || [];
    
    destinations.forEach(dest => {
        const btn = document.createElement('button');
        btn.textContent = currentLang === 'ml' ? dest.ml : dest.en;
        btn.style.margin = "5px";
        btn.style.padding = "10px 18px";
        btn.style.borderRadius = "20px";
        btn.style.border = "1px solid var(--accent-green)";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "600";
        
        if (selectedDest === dest.id) {
            btn.style.backgroundColor = "#2e7d32";
            btn.style.color = "#fff";
        } else {
            btn.style.backgroundColor = "#fff";
            btn.style.color = "#333";
        }

        btn.onclick = () => {
            selectedDest = dest.id;
            renderDestinations();
            renderBuses();
        };
        container.appendChild(btn);
    });
}

function renderBuses() {
    const listContainer = document.getElementById('busList');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    const buses = (masterBusData[selectedSource] && masterBusData[selectedSource][selectedDest]) ? masterBusData[selectedSource][selectedDest] : [];
    
    if (buses.length === 0) {
        listContainer.innerHTML = `<p style="padding: 20px; text-align:center;">${currentLang === 'ml' ? 'ബസുകൾ ലഭ്യമല്ല' : 'No buses found'}</p>`;
        return;
    }
    
    buses.forEach((bus, index) => {
        const card = document.createElement('div');
        card.className = 'bus-card';
        
        const trafficOptions = [
            { textMl: "🟢 ട്രാഫിക് ഇല്ല (Smooth)", textEn: "🟢 Smooth Traffic", color: "#2e7d32" },
            { textMl: "🟡 മിതമായ ട്രാഫിക്", textEn: "🟡 Moderate Traffic", color: "#f57c00" },
            { textMl: "🔴 കനത്ത ട്രാഫിക്", textEn: "🔴 Heavy Traffic", color: "#d32f2f" }
        ];
        const traffic = trafficOptions[index % trafficOptions.length];

        const busName = currentLang === 'ml' ? bus.name : bus.nameEn;
        const busRoute = currentLang === 'ml' ? bus.route : bus.routeEn;
        const trafficText = currentLang === 'ml' ? traffic.textMl : traffic.textEn;
        
        card.innerHTML = `
            <div class="bus-info">
                <span class="bus-time" style="color: #2e7d32; font-weight: bold; font-size: 1.1rem;">⏰ ${bus.time}</span>
                <h3 style="margin: 5px 0; color: #222;">${busName}</h3>
                <p style="margin: 0 0 5px 0; color: #666; font-size: 0.9rem;">📍 ${busRoute}</p>
                <span class="traffic-indicator" style="background-color: ${traffic.color}15; color: ${traffic.color}">${trafficText}</span>
            </div>
        `;
        
        card.onclick = () => {
            document.querySelectorAll('.bus-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            showLiveLocation(bus, trafficText);
        };

        listContainer.appendChild(card);
    });
}

function showLiveLocation(bus, trafficStatus) {
    if (!mapInstance) return;
    const defaultCoords = [11.9350, 75.5200]; 
    const targetCoords = bus.coords || defaultCoords;

    document.getElementById('mapHeading').textContent = `📍 Tracking: ${currentLang === 'ml' ? bus.name : bus.nameEn}`;
    document.getElementById('mapSubText').textContent = `${trafficStatus} | Time: ${bus.time}`;

    if (currentMarker) mapInstance.removeLayer(currentMarker);

    currentMarker = L.marker(targetCoords).addTo(mapInstance);
    mapInstance.setView(targetCoords, 13, { animate: true, duration: 1 });
    currentMarker.bindPopup(`<b>${currentLang === 'ml' ? bus.name : bus.nameEn}</b><br>${trafficStatus}`).openPopup();
}

// 📍 LOCATION SHARE MODAL LOGICS
function openShareModal() {
    document.getElementById('shareModal').style.display = 'flex';
}

function closeShareModal() {
    document.getElementById('shareModal').style.display = 'none';
}

function generateShareLink() {
    const duration = document.getElementById('timeLimit').value;
    
    if (!navigator.geolocation) {
        alert(currentLang === 'ml' ? "നിങ്ങളുടെ ബ്രൗസർ ലൊക്കേഷൻ സപ്പോർട്ട് ചെയ്യുന്നില്ല!" : "Geolocation is not supported by your browser!");
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const expireTime = Date.now() + (parseInt(duration) * 60 * 1000);

        // Created a shareable tracking maps url with expiration stamp
        const trackingUrl = `${window.location.origin}${window.location.pathname}?lat=${lat}&lng=${lng}&expires=${expireTime}`;

        // Web Share API to directly prompt WhatsApp, Telegram etc.
        if (navigator.share) {
            navigator.share({
                title: 'NammadaBus Live Tracking',
                text: `എന്റെ ലൈവ് ബസ് ലൊക്കേഷൻ ട്രാക്ക് ചെയ്യൂ (വാലിഡിറ്റി: ${duration} മിനിറ്റ്):`,
                url: trackingUrl
            }).catch(err => console.log(err));
        } else {
            // Fallback: Copy link to clipboard
            navigator.clipboard.writeText(trackingUrl);
            alert(currentLang === 'ml' ? `ലിങ്ക് കോപ്പി ചെയ്തിട്ടുണ്ട്! ഇത് കൂട്ടുകാർക്ക് അയച്ചു കൊടുക്കൂ. വാലിഡിറ്റി: ${duration} മിനിറ്റ്.` : `Tracking link copied to clipboard! Valid for ${duration} mins.`);
        }
        closeShareModal();
    }, () => {
        alert(currentLang === 'ml' ? "ലൊക്കേഷൻ പെർമിഷൻ അനുവദിക്കുക!" : "Please enable location services permission!");
    });
}

// Check if user opened an active shared tracking link from someone else
function checkIncomingSharedLocation() {
    const urlParams = new URLSearchParams(window.location.search);
    const lat = urlParams.get('lat');
    const lng = urlParams.get('lng');
    const expires = urlParams.get('expires');

    if (lat && lng && expires) {
        if (Date.now() > parseInt(expires)) {
            alert(currentLang === 'ml' ? "ഈ ലൊക്കേഷൻ ലിങ്കിന്റെ സമയപരിധി കഴിഞ്ഞിരിക്കുന്നു!" : "This shared tracking link has expired!");
            return;
        }
        
        // Wait for map initialization and show shared marker
        setTimeout(() => {
            initMap();
            mapInstance.setView([lat, lng], 14);
            const marker = L.marker([lat, lng]).addTo(mapInstance);
            marker.bindPopup(`<b>Shared Live Location</b><br>Active`).openPopup();
            
            document.getElementById('mapHeading').textContent = `📍 Shared User Track`;
            document.getElementById('mapSubText').textContent = `Viewing active temporary position.`;
        }, 800);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    selectSource('chelliparamba');
    checkIncomingSharedLocation();
});

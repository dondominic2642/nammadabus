const masterBusData = {
    chelliparamba: {
        taliparamba: [
            { time: "05:30 AM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 5:25)", nameEn: "JJ (From Chemperi 5:25)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "06:45 AM", name: "സാഗര (ചെമ്പേരിയിൽ നിന്ന് 6:35)", nameEn: "Sagara (From Chemperi 6:35)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "06:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "പുളിക്കുരുമ്പ - തളിപ്പറമ്പ്", routeEn: "Pulikkurumba to Taliparamba" },
            { time: "07:35 AM", name: "നന്ദനം", nameEn: "Nandanam", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "08:30 AM", name: "കുന്നത്ത്", nameEn: "Kunnath", route: "ശ്രീകണ്ഠാപുരം വഴി തളിപ്പറമ്പ്", routeEn: "via Sreekandapuram to Taliparamba" }
        ],
        iritty: [
            { time: "07:30 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "ഇരുട്ടിക്ക് നേരിട്ട്", routeEn: "Direct to Iritty" },
            { time: "07:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "ഇരുട്ടി വഴി മാനന്തവാടി", routeEn: "via Iritty to Mananthavady" }
        ]
    },
    kuthuparamba: {
        to_kannur: [
            { time: "06:00 AM", name: "TALENT [LS]", nameEn: "TALENT [LS]", route: "കണ്ണൂരിലേക്ക്", routeEn: "to Kannur" },
            { time: "06:20 AM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "Towards Payyanur" }
        ],
        from_kannur: [
            { time: "05:20 AM", name: "SANMARIA [LS]", nameEn: "SANMARIA [LS]", route: "കൂത്തുപറമ്പ് വഴി തിരുനെല്ലിക്ക്", routeEn: "via Kuthuparamba to Thirunelly" }
        ]
    }
};

const destRouteNames = {
    chelliparamba: [
        { id: "taliparamba", ml: "തളിപ്പറമ്പ്", en: "Taliparamba" },
        { id: "iritty", ml: "ഇരുട്ടി", en: "Iritty" }
    ],
    kuthuparamba: [
        { id: "to_kannur", ml: "കണ്ണൂർ ഭാഗത്തേക്ക്", en: "Towards Kannur" },
        { id: "from_kannur", ml: "കണ്ണൂരിൽ നിന്ന് ഇങ്ങോട്ട്", en: "From Kannur" }
    ]
};

let currentLanguage = 'ml';
let selectedStand = 'chelliparamba';
let selectedRoute = 'taliparamba';
let showingAllBuses = false;

let standSelect, routeButtonsContainer, busListContainer, toggleBusesBtn, langToggleBtn;

document.addEventListener('DOMContentLoaded', () => {
    standSelect = document.getElementById('standSelect');
    routeButtonsContainer = document.getElementById('routeButtonsContainer');
    busListContainer = document.getElementById('busListContainer');
    toggleBusesBtn = document.getElementById('toggleBusesBtn');
    langToggleBtn = document.getElementById('langToggleBtn');

    setupEventListeners();
    renderRouteButtons();
    renderBusTimeline();
});

function setupEventListeners() {
    if (standSelect) {
        standSelect.addEventListener('change', (e) => {
            selectedStand = e.target.value;
            const available = destRouteNames[selectedStand] || [];
            selectedRoute = available.length > 0 ? available[0].id : '';
            showingAllBuses = false;
            renderRouteButtons();
            renderBusTimeline();
        });
    }

    if (toggleBusesBtn) {
        toggleBusesBtn.addEventListener('click', () => {
            showingAllBuses = !showingAllBuses;
            renderBusTimeline();
        });
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'ml' ? 'en' : 'ml';
            langToggleBtn.textContent = currentLanguage === 'ml' ? 'English' : 'മലയാളം';
            renderRouteButtons();
            renderBusTimeline();
        });
    }
}

function renderRouteButtons() {
    if (!routeButtonsContainer) return;
    routeButtonsContainer.innerHTML = '';
    const routes = destRouteNames[selectedStand] || [];

    routes.forEach((routeObj) => {
        const btn = document.createElement('button');
        btn.style.margin = "5px";
        btn.style.padding = "10px 15px";
        btn.style.border = "1px solid #ccc";
        btn.style.borderRadius = "20px";
        btn.style.cursor = "pointer";
        btn.style.background = selectedRoute === routeObj.id ? "#ff2e4d" : "#fff";
        btn.style.color = selectedRoute === routeObj.id ? "#fff" : "#333";
        
        btn.textContent = currentLanguage === 'ml' ? routeObj.ml : routeObj.en;
        
        btn.addEventListener('click', () => {
            selectedRoute = routeObj.id;
            renderRouteButtons();
            renderBusTimeline();
        });
        routeButtonsContainer.appendChild(btn);
    });
}

function parseTimeToMinutes(timeStr) {
    if (!timeStr) return 0;
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (hours === 12) hours = 0;
    if (modifier === 'PM') hours += 12;
    return hours * 60 + minutes;
}

function renderBusTimeline() {
    if (!busListContainer) return;
    busListContainer.innerHTML = '';
    
    const busArray = (masterBusData[selectedStand] && masterBusData[selectedStand][selectedRoute]) || [];
    
    if (busArray.length === 0) {
        busListContainer.innerHTML = '<p style="padding:20px; text-align:center;">No buses found.</p>';
        if (toggleBusesBtn) toggleBusesBtn.style.display = 'none';
        return;
    }

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const sortedBuses = [...busArray].sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
    let upcomingBuses = sortedBuses.filter(bus => parseTimeToMinutes(bus.time) >= currentMinutes);
    let busesToDisplay = showingAllBuses ? sortedBuses : upcomingBuses;

    if (toggleBusesBtn) {
        toggleBusesBtn.style.display = 'inline-block';
        toggleBusesBtn.textContent = showingAllBuses ? '🎯 Show Upcoming Only' : '📅 Show All Schedules';
    }

    if (busesToDisplay.length === 0) {
        busListContainer.innerHTML = '<p style="padding:20px; text-align:center; color:#ff2e4d; font-weight:bold;">🏁 No more buses left today.</p>';
        return;
    }

    busesToDisplay.forEach((bus) => {
        const card = document.createElement('div');
        card.style.background = "#fff";
        card.style.padding = "15px";
        card.style.margin = "10px 0";
        card.style.borderRadius = "8px";
        card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        card.style.display = "flex";
        card.style.justifyContent = "space-between";
        card.style.alignItems = "center";

        const name = currentLanguage === 'ml' ? bus.name : bus.nameEn;
        const rPath = currentLanguage === 'ml' ? bus.route : bus.routeEn;

        card.innerHTML = `
            <div>
                <h4 style="margin:0; font-size:18px; color:#333;">${name}</h4>
                <p style="margin:4px 0 0 0; font-size:14px; color:#666;">${rPath}</p>
            </div>
            <div style="background:#ff2e4d; color:white; padding:6px 12px; border-radius:4px; font-weight:bold;">${bus.time}</div>
        `;
        busListContainer.appendChild(card);
    });
}

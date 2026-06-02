// =========================================================================
// 🚌 NAMMADA BUS - COMPLETE ROUTING, DATABASE & NAVIGATION SYSTEM
// =========================================================================

const masterBusData = {
    chelliparamba: {
        taliparamba: [
            { time: "05:30 AM", name: "JJ (ജെ ജെ)", nameEn: "JJ", route: "ചെമ്പേരി - ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Chemperi - Sreekandapuram - Taliparamba" },
            { time: "06:15 AM", name: "SMRITI (സ്മൃതി)", nameEn: "Smriti", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ് വഴി കണ്ണൂർ", routeEn: "via Sreekandapuram - Taliparamba to Kannur" },
            { time: "06:45 AM", name: "SAGARA (സാഗര)", nameEn: "Sagara", route: "ചെമ്പേരി - ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Chemperi - Sreekandapuram - Taliparamba" },
            { time: "06:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "പുളിക്കുരുമ്പ - തളിപ്പറമ്പ്", routeEn: "Pulikkurumba to Taliparamba" },
            { time: "07:15 AM", name: "ST. ANTONY (സെന്റ് ആന്റണി)", nameEn: "St. Antony", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Sreekandapuram to Taliparamba" },
            { time: "07:35 AM", name: "NANDANAM (നന്ദനം)", nameEn: "Nandanam", route: "ചെമ്പേരി - ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ് വഴി പയ്യന്നൂർ", routeEn: "via Sreekandapuram - Taliparamba to Payyanur" },
            { time: "08:10 AM", name: "AVM", nameEn: "AVM", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Sreekandapuram to Taliparamba" },
            { time: "08:30 AM", name: "KUNNATH (കുന്നത്ത്)", nameEn: "Kunnath", route: "ശ്രീകണ്ഠാപുരം വഴി തളിപ്പറമ്പ്", routeEn: "via Sreekandapuram to Taliparamba" },
            { time: "09:15 AM", name: "KSRTC Ordinary", nameEn: "KSRTC Ordinary", route: "പയ്യാവൂർ - ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Payyavoor - Sreekandapuram - Taliparamba" },
            { time: "10:05 AM", name: "MATHA (മാതാ)", nameEn: "Matha", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Sreekandapuram to Taliparamba" },
            { time: "11:20 AM", name: "KSRTC FP", nameEn: "KSRTC Fast Passenger", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ് വഴി കോഴിക്കോട്", routeEn: "via Sreekandapuram - Taliparamba to Kozhikode" },
            { time: "12:45 PM", name: "SMRITI (സ്മൃതി)", nameEn: "Smriti", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Sreekandapuram to Taliparamba" },
            { time: "01:30 PM", name: "JJ (ജെ ജെ)", nameEn: "JJ", route: "ചെമ്പേരി - തളിപ്പറമ്പ്", routeEn: "Chemperi to Taliparamba" },
            { time: "02:20 PM", name: "NANDANAM (നന്ദനം)", nameEn: "Nandanam", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Sreekandapuram to Taliparamba" },
            { time: "03:40 PM", name: "KSRTC", nameEn: "KSRTC", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Sreekandapuram to Taliparamba" },
            { time: "04:15 PM", name: "AVM", nameEn: "AVM", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ് വഴി കണ്ണൂർ", routeEn: "via Sreekandapuram - Taliparamba to Kannur" },
            { time: "05:10 PM", name: "SAGARA (സാഗര)", nameEn: "Sagara", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ്", routeEn: "Sreekandapuram to Taliparamba" },
            { time: "06:30 PM", name: "ST. ANTONY (സെന്റ് ആന്റണി)", nameEn: "St. Antony", route: "ശ്രീകണ്ഠാപുരം - തളിപ്പറമ്പ് (അവസാന സർവീസ്)", routeEn: "Sreekandapuram to Taliparamba (Last Service)" }
        ],
        iritty: [
            { time: "07:30 AM", name: "SHYAMALAKSHMI (ശ്യാമളക്ഷ്മി)", nameEn: "Shyamalakshmi", route: "തളിപ്പറമ്പ് - ശ്രീകണ്ഠാപുരം - ഇരുട്ടി (Direct)", routeEn: "Taliparamba - Sreekandapuram - Iritty (Direct)" },
            { time: "07:55 AM", name: "KSRTC Limited Stop", nameEn: "KSRTC LS", route: "തളിപ്പറമ്പ് - ഇരുട്ടി വഴി മാനന്തവാടി", routeEn: "via Iritty to Mananthavady" },
            { time: "09:40 AM", name: "SADGURU (സദ്ഗുരു)", nameEn: "Sadguru", route: "ശ്രീകണ്ഠാപുരം - ഇരുട്ടി", routeEn: "Sreekandapuram to Iritty" },
            { time: "11:05 AM", name: "KSRTC Ordinary", nameEn: "KSRTC Ordinary", route: "തളിപ്പറമ്പ് - പയ്യാവൂർ - ഇരുട്ടി", routeEn: "Taliparamba - Payyavoor - Iritty" },
            { time: "01:15 PM", name: "SHYAMALAKSHMI (ശ്യാമളക്ഷ്മി)", nameEn: "Shyamalakshmi", route: "ശ്രീകണ്ഠാപുരം - ഇരുട്ടി", routeEn: "Sreekandapuram to Iritty" },
            { time: "03:10 PM", name: "SADGURU (സദ്ഗുരു)", nameEn: "Sadguru", route: "ശ്രീകണ്ഠാപുരം - ഇരുട്ടി", routeEn: "Sreekandapuram to Iritty" },
            { time: "04:50 PM", name: "KSRTC", nameEn: "KSRTC", route: "തളിപ്പറമ്പ് - ഇരുട്ടി - വിരാജ്പേട്ട വഴി മൈസൂർ", routeEn: "via Iritty - Virajpet to Mysore" },
            { time: "06:20 PM", name: "KSRTC", nameEn: "KSRTC", route: "ശ്രീകണ്ഠാപുരം - ഇരുട്ടി (അവസാന സർവീസ്)", routeEn: "Sreekandapuram to Iritty (Last Service)" }
        ]
    },
    kuthuparamba: {
        to_kannur: [
            { time: "06:00 AM", name: "TALENT [LS] (ടാലന്റ്)", nameEn: "TALENT [LS]", route: "കൂത്തുപറമ്പ് - മട്ടന്നൂർ വഴി കണ്ണൂർ", routeEn: "Kuthuparamba - Mattannur to Kannur" },
            { time: "06:20 AM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "കണ്ണൂർ - പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "Towards Kannur & Payyanur" },
            { time: "06:45 AM", name: "KSRTC Ordinary", nameEn: "KSRTC Ordinary", route: "തോപ്പിൽ - കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Thoppil - Kuthuparamba to Kannur" },
            { time: "07:10 AM", name: "AMBADI (അമ്പാടി)", nameEn: "Ambadi", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ (Direct)", routeEn: "Kuthuparamba to Kannur (Direct)" },
            { time: "07:35 AM", name: "ROYAL (റോയൽ)", nameEn: "Royal", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "08:00 AM", name: "TALENT [LS] (ടാലന്റ്)", nameEn: "TALENT [LS]", route: "കൂത്തുപറമ്പ് - മട്ടന്നൂർ വഴി കണ്ണൂർ", routeEn: "Kuthuparamba - Mattannur to Kannur" },
            { time: "08:25 AM", name: "KSRTC TT", nameEn: "KSRTC Town To Town", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur (Fast)" },
            { time: "09:00 AM", name: "SANMARIA [LS] (സാൻമരിയ)", nameEn: "SANMARIA [LS]", route: "മാനന്തവാടിയിൽ നിന്ന് കൂത്തുപറമ്പ് വഴി കണ്ണൂർ", routeEn: "From Mananthavady via Kuthuparamba to Kannur" },
            { time: "09:45 AM", name: "AMBADI (അമ്പാടി)", nameEn: "Ambadi", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "10:30 AM", name: "ROYAL (റോയൽ)", nameEn: "Royal", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "11:15 AM", name: "KSRTC Ordinary", nameEn: "KSRTC Ordinary", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "12:10 PM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "01:25 PM", name: "TALENT [LS] (ടാലന്റ്)", nameEn: "TALENT [LS]", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "02:45 PM", name: "SANMARIA [LS] (സാൻമരിയ)", nameEn: "SANMARIA [LS]", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "03:50 PM", name: "ROYAL (റോയൽ)", nameEn: "Royal", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "04:30 PM", name: "KSRTC TT", nameEn: "KSRTC Town To Town", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "05:15 PM", name: "AMBADI (അമ്പാടി)", nameEn: "Ambadi", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ വഴി പയ്യന്നൂർ", routeEn: "via Kannur to Payyanur" },
            { time: "06:10 PM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ", routeEn: "Kuthuparamba to Kannur" },
            { time: "07:30 PM", name: "KSRTC Ordinary", nameEn: "KSRTC Ordinary", route: "കൂത്തുപറമ്പ് - കണ്ണൂർ (അവസാന സർവീസ്)", routeEn: "Kuthuparamba to Kannur (Last Service)" }
        ],
        from_kannur: [
            { time: "05:20 AM", name: "SANMARIA [LS] (സാൻമരിയ)", nameEn: "SANMARIA [LS]", route: "കണ്ണൂരിൽ നിന്ന് കൂത്തുപറമ്പ് വഴി തിരുനെല്ലിക്ക്", routeEn: "from Kannur via Kuthuparamba to Thirunelly" },
            { time: "06:40 AM", name: "KSRTC Ordinary", nameEn: "KSRTC Ordinary", route: "കണ്ണൂർ - കൂത്തുപറമ്പ് - തോപ്പിൽ", routeEn: "Kannur to Kuthuparamba and Thoppil" },
            { time: "07:20 AM", name: "ROYAL (റോയൽ)", nameEn: "Royal", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "08:15 AM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "കണ്ണൂർ - കൂത്തുപറമ്പ് വഴി മട്ടന്നൂർ", routeEn: "via Kuthuparamba to Mattannur" },
            { time: "09:10 AM", name: "AMBADI (അമ്പാടി)", nameEn: "Ambadi", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "10:05 AM", name: "TALENT [LS] (ടാലന്റ്)", nameEn: "TALENT [LS]", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "11:45 AM", name: "KSRTC TT", nameEn: "KSRTC Town To Town", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "01:00 PM", name: "ROYAL (റോയൽ)", nameEn: "Royal", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "02:15 PM", name: "AMBADI (അമ്പാടി)", nameEn: "Ambadi", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "03:30 PM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "04:45 PM", name: "TALENT [LS] (ടാലന്റ്)", nameEn: "TALENT [LS]", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "05:40 PM", name: "KSRTC Ordinary", nameEn: "KSRTC Ordinary", route: "കണ്ണൂർ - കൂത്തുപറമ്പ്", routeEn: "Kannur to Kuthuparamba" },
            { time: "06:50 PM", name: "SANMARIA [LS] (സാൻമരിയ)", nameEn: "SANMARIA [LS]", route: "കണ്ണൂർ - കൂത്തുപറമ്പ് വഴി മാനന്തവാടി", routeEn: "via Kuthuparamba to Mananthavady" },
            { time: "08:15 PM", name: "KSRTC TT", nameEn: "KSRTC Town To Town", route: "കണ്ണൂർ - കൂത്തുപറമ്പ് (അവസാന സർവീസ്)", routeEn: "Kannur to Kuthuparamba (Last Service)" }
        ]
    }
};

const destRouteNames = {
    chelliparamba: [
        { id: "taliparamba", ml: "തളിപ്പറമ്പ് ഭാഗത്തേക്ക്", en: "Towards Taliparamba" },
        { id: "iritty", ml: "ഇരുട്ടി ഭാഗത്തേക്ക്", en: "Towards Iritty" }
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
        btn.className = `route-btn ${selectedRoute === routeObj.id ? 'active' : ''}`;
        btn.textContent = currentLanguage === 'ml' ? routeObj.ml : routeObj.en;
        btn.setAttribute('aria-pressed', selectedRoute === routeObj.id ? 'true' : 'false');
        
        btn.style.margin = "6px 4px";
        btn.style.padding = "10px 18px";
        btn.style.fontSize = "14px";
        btn.style.borderRadius = "25px";
        btn.style.cursor = "pointer";
        btn.style.fontWeight = "600";
        btn.style.transition = "all 0.2s ease";
        btn.style.border = selectedRoute === routeObj.id ? "1px solid #ff2e4d" : "1px solid #ddd";
        btn.style.background = selectedRoute === routeObj.id ? "#ff2e4d" : "#f8f9fa";
        btn.style.color = selectedRoute === routeObj.id ? "#fff" : "#333";
        btn.style.boxShadow = selectedRoute === routeObj.id ? "0 4px 8px rgba(255,46,77,0.2)" : "none";
        
        btn.addEventListener('click', () => {
            if (selectedRoute === routeObj.id) return;
            
            document.querySelectorAll('.route-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
                b.style.background = "#f8f9fa";
                b.style.color = "#333";
                b.style.border = "1px solid #ddd";
                b.style.boxShadow = "none";
            });
            
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            btn.style.background = "#ff2e4d";
            btn.style.color = "#fff";
            btn.style.border = "1px solid #ff2e4d";
            btn.style.boxShadow = "0 4px 8px rgba(255,46,77,0.2)";
            
            selectedRoute = routeObj.id;
            
            if (busListContainer) {
                busListContainer.style.transform = 'translateY(8px)';
                busListContainer.style.opacity = '0.2';
            }
            
            setTimeout(() => {
                renderBusTimeline();
                if (busListContainer) {
                    busListContainer.style.transform = 'translateY(0)';
                    busListContainer.style.opacity = '1';
                }
            }, 120);
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
        busListContainer.innerHTML = `
            <div style="padding:40px 20px; text-align:center;">
                <p style="color:#ff2e4d; font-weight:bold; font-size:18px; margin:0;">🏁 ഇന്നത്തെ ബസുകൾ കഴിഞ്ഞു.</p>
                <p style="color:#666; font-size:14px; margin-top:8px;">എല്ലാ സമയവിവരങ്ങളും കാണാൻ മുകളിലെ 'Show All Schedules' ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.</p>
            </div>`;
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
        card.style.borderLeft = "4px solid #ff2e4d";
        card.style.cursor = "pointer";
        card.title = "Click to view route and live traffic on Google Maps";

        const name = currentLanguage === 'ml' ? bus.name : bus.nameEn;
        const rPath = currentLanguage === 'ml' ? bus.route : bus.routeEn;

        card.innerHTML = `
            <div style="padding-right: 10px;">
                <h4 style="margin:0; font-size:16px; color:#333; font-weight:700;">${name}</h4>
                <p style="margin:4px 0 0 0; font-size:13px; color:#666; line-height:1.4;">${rPath} <span style="font-size:11px; color:#ff2e4d; display:inline-block; margin-left:4px;">📍 Maps</span></p>
            </div>
            <div style="background:#ff2e4d; color:white; padding:8px 12px; border-radius:6px; font-weight:bold; font-size:14px; white-space:nowrap; box-shadow: 0 2px 4px rgba(255,46,77,0.2);">
                ${bus.time}
            </div>
        `;

        card.addEventListener('click', () => {
            const startPlace = selectedStand === 'chelliparamba' ? 'Chelliparamba' : 'Kuthuparamba';
            
            let endPlace = '';
            if (selectedRoute === 'taliparamba') endPlace = 'Taliparamba';
            else if (selectedRoute === 'iritty') endPlace = 'Iritty';
            else if (selectedRoute === 'to_kannur' || selectedRoute === 'from_kannur') endPlace = 'Kannur';

            const searchQuery = encodeURIComponent(`Bus from ${startPlace} to ${endPlace} Kerala`);
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;

            window.open(googleMapsUrl, '_blank');
        });

        busListContainer.appendChild(card);
    });
}

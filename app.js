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
           { time: "07:30 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "ഇരുട്ടിക്ക് നേരിട്ട്", routeEn: "Direct to Iritty" },
            { time: "07:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "ഇരുട്ടി വഴി മാനന്തവാടി", routeEn: "via Iritty to Mananthavady" },
            { time: "08:35 AM", name: "KSRTC", nameEn: "KSRTC", route: "ഇരുട്ടി വഴി മാനന്തവാടി", routeEn: "via Iritty to Mananthavady" },
            { time: "09:20 AM", name: "സൂപ്പർ സ്റ്റാർ", nameEn: "Super Star", route: "ഇരുട്ടിക്ക് നേരിട്ട്", routeEn: "Direct to Iritty" },
            { time: "09:55 AM", name: "പ്രിൻസ്", nameEn: "Prince", route: "ഇരുട്ടിക്ക് നേരിട്ട്", routeEn: "Direct to Iritty" },
            { time: "10:25 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "ഇരുട്ടിക്ക് നേരിട്ട്", routeEn: "Direct to Iritty" },
            { time: "10:40 AM", name: "ജേക്കബ്സ്", nameEn: "Jacobs", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "10:55 AM", name: "കേരള", nameEn: "Kerala", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "11:00 AM", name: "സെന്റ് ജോർജ്", nameEn: "St. George", route: "ശ്രീകണ്ഠാപുരം വഴി ഇരുട്ടി", routeEn: "via Sreekandapuram to Iritty" },
            { time: "11:10 AM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "11:45 AM", name: "നിർമ്മാല്യം", nameEn: "Nirmalyam", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "12:15 PM", name: "아이 പി സി", nameEn: "IPC", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "12:25 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "12:50 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "01:15 PM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "02:00 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "02:20 PM", name: "ഷൈൻ സ്റ്റാർ", nameEn: "Shine Star", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "03:00 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ, ഇരുട്ടി വഴി മാനന്തവാടി", routeEn: "via Payyavur, Iritty to Mananthavady" },
            { time: "03:35 PM", name: "പ്രൊവിഡൻസ്", nameEn: "Providence", route: "പയ്യാവൂർ, ഇരുട്ടി വഴി തലശ്ശേരി", routeEn: "via Payyavur, Iritty to Thalassery" },
            { time: "03:50 PM", name: "സാത്വിക", nameEn: "Sathwika", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "04:15 PM", name: "എയ്ഞ്ചൽ", nameEn: "Angel", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "04:30 PM", name: "നിമിഷ", nameEn: "Nimisha", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "04:50 PM", name: "ആനന്ദ്", nameEn: "Anand", route: "പയ്യാവൂർ വരെ മാത്രം", routeEn: "To Payyavur Only" },
            { time: "05:00 PM", name: "സെന്റ് ജോർജ്", nameEn: "St. George", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "05:20 PM", name: "കേരള", nameEn: "Kerala", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "05:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "06:00 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" },
            { time: "06:30 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "പയ്യാവൂർ വഴി ഇരുട്ടി", routeEn: "via Payyavur to Iritty" }
        ]
    },
    alakode: [
            { time: "08:00 AM", name: "ഐ പി സി", nameEn: "IPC", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "09:05 AM", name: "എയ്ഞ്ചൽ", nameEn: "Angel", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "09:20 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട് വഴി ബളാൽ", routeEn: "via Alakode to Balal" },
            { time: "10:10 AM", name: "ഷൈൻ സ്റ്റാർ", nameEn: "Shine Star", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "10:20 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ വഴി മംഗലാപുരം", routeEn: "via Alakode, Cherupuzha to Mangalapuram" },
            { time: "11:00 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട് വഴി കാഞ്ഞങ്ങാട്", routeEn: "via Alakode to Kanhangad" },
            { time: "12:35 PM", name: "ആനന്ദ്", nameEn: "Anand", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "01:15 PM", name: "ജേക്കബ്സ്", nameEn: "Jacobs", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "01:35 PM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "02:15 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ വഴി കാഞ്ഞങ്ങാട്", routeEn: "via Alakode, Cherupuzha to Kanhangad" },
            { time: "03:15 PM", name: "സൂപ്പർ സ്റ്റാർ", nameEn: "Super Star", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "03:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ വഴി പനത്തടി", routeEn: "via Alakode, Cherupuzha to Panathady" },
            { time: "04:15 PM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "ആലക്കോട്, ചെറുപുഴ വഴി പനത്തടി", routeEn: "via Alakode, Cherupuzha to Panathady" },
            { time: "04:30 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "05:20 PM", name: "ആനന്ദ്", nameEn: "Anand", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" },
            { time: "05:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട് വഴി ചെറുപുഴ", routeEn: "via Alakode to Cherupuzha" }
        ],
        kudiyanmala: [
            { time: "08:50 AM", name: "കേരള", nameEn: "Kerala", route: "കൂടിയാന്മലക്ക് നേരിട്ട്", routeEn: "Direct to Kudiyanmala" },
            { time: "11:00 AM", name: "ചൈത്രം", nameEn: "Chaithram", route: "കൂടിയാന്മലക്ക് നേരിട്ട്", routeEn: "Direct to Kudiyanmala" },
            { time: "12:15 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "കൂടിയാന്മലക്ക് നേരിട്ട്", routeEn: "Direct to Kudiyanmala" },
            { time: "02:15 PM", name: "ഗാലക്സി", nameEn: "Galaxy", route: "കൂടിയാന്മലക്ക് നേരിട്ട്", routeEn: "Direct to Kudiyanmala" },
            { time: "03:50 PM", name: "കേരള", nameEn: "Kerala", route: "കൂടിയാന്മലക്ക് നേരിട്ട്", routeEn: "Direct to Kudiyanmala" },
            { time: "05:15 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "കൂടിയാന്മലക്ക് നേരിട്ട്", routeEn: "Direct to Kudiyanmala" },
            { time: "05:40 PM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "കൂടിയാന്മല വഴി വലിയരിക്കമല", routeEn: "via Kudiyanmala to Valiyarikkamala" },
            { time: "06:15 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "കൂടിയാന്മലക്ക് നേരിട്ട്", routeEn: "Direct to Kudiyanmala" }
        ],
    eruppazha: [
            { time: "07:45 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "08:30 AM", name: "പ്രിൻസ്", nameEn: "Prince", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "09:40 AM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "10:20 AM", name: "സെന്റ് ജോർജ്", nameEn: "St. George", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "11:50 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "01:55 PM", name: "സാഗര", nameEn: "Sagara", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "04:00 PM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "05:50 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "06:30 PM", name: "ആവേമരിയ", nameEn: "Ave Maria", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" },
            { time: "07:50 PM", name: "സാഗര", nameEn: "Sagara", route: "എരുപ്പശ്ശേരി (എരുപ്പഹ)", routeEn: "Eruppazha" }
        ],
        arikamala: [
            { time: "08:55 AM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "12:05 PM", name: "Family", nameEn: "Family", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "02:30 PM", name: "KSRTC", nameEn: "KSRTC", route: "വലിയരിക്കമല", routeEn: "Valiyarikkamala" },
            { time: "02:30 PM", name: "AIശ്വര്യ", nameEn: "Aishwarya", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "06:00 PM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "06:55 PM", name: "നന്ദനം", nameEn: "Nandanam", route: "മിഡിലായം", routeEn: "Midilayam" },
            { time: "07:25 PM", name: "KSRTC", nameEn: "KSRTC", route: "വലിയരിക്കമല", routeEn: "Valiyarikkamala" },
            { time: "07:45 PM", name: "നന്ദനം", nameEn: "Nandanam", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" }
        ],
    cherupuzha_net: [
            { time: "04:00 AM", name: "KSRTC SWIFT DELUXE", nameEn: "KSRTC Swift Deluxe", route: "[Departure: ഇരിട്ടി] പയ്യന്നൂർക്ക് (ചെറുപുഴ വഴി)", routeEn: "[Dep: Iritty] to Payyanur (via Cherupuzha)" },
            { time: "04:30 AM", name: "KSRTC SUPER DELUXE", nameEn: "KSRTC Super Deluxe", route: "[Departure: ഇരിട്ടി] കാഞ്ഞങ്ങാടേക്ക് (ചെമ്പേരി, ആലക്കോട്, ഒടയഞ്ചാൽ വഴി)", routeEn: "[Dep: Iritty] to Kanhangad (via Chemperi, Alakode, Odayanchal)" },
            { time: "05:45 AM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] മംഗലാപുരത്തേക്ക് (ആലക്കോട്, ഒടയഞ്ചാൽ, കാഞ്ഞങ്ങാട് വഴി)", routeEn: "[Dep: Iritty] to Mangalapuram (via Alakode, Odayanchal, Kanhangad)" },
            { time: "06:30 AM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] കാഞ്ഞങ്ങാടേക്ക് (ചെമ്പേരി, ആലക്കോട്, വെള്ളരിക്കുണ്ട് വഴി)", routeEn: "[Dep: Iritty] to Kanhangad (via Chemperi, Alakode, Vellarikundu)" },
            { time: "07:10 AM", name: "I PEE CEE", nameEn: "I PEE CEE", route: "[Departure: ഇരിട്ടി] ചെറുപുഴക്ക് (പയ്യാവൂർ, ചെമ്പേരി, ആലക്കോട് വഴി)", routeEn: "[Dep: Iritty] to Cherupuzha (via Payyavur, Chemperi, Alakode)" },
            { time: "08:00 AM", name: "THEKKEDATH", nameEn: "THEKKEDATH", route: "[Departure: ഇരിട്ടി] ഒടയഞ്ചാലിലേക്ക് (ചെമ്പേരി, ആലക്കോട്, വെള്ളരിക്കുണ്ട് വഴി)", routeEn: "[Dep: Iritty] to Odayanchal (via Chemperi, Alakode, Vellarikundu)" },
            { time: "08:07 AM", name: "BIGSHOW", nameEn: "BIGSHOW", route: "[Departure: ഇരിട്ടി] ഉളിക്കൽ / പയ്യാവൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Iritty] Towards Ulikkal / Payyavur" },
            { time: "08:45 AM", name: "KSRTC FP", nameEn: "KSRTC Fast Passenger", route: "[Departure: ഇരിട്ടി] ബലാലിലേക്ക് (ചെമ്പേരി, ആലക്കോട്, വെള്ളരിക്കുണ്ട് വഴി)", routeEn: "[Dep: Iritty] to Balal (via Chemperi, Alakode, Vellarikundu)" },
            { time: "09:15 AM", name: "BIGSHOW", nameEn: "BIGSHOW", route: "[Departure: ഇരിട്ടി] ചെറുപുഴക്ക് (പയ്യാവൂർ, ചെമ്പേരി, ആലക്കോട് വഴി)", routeEn: "[Dep: Iritty] to Cherupuzha (via Payyavur, Chemperi, Alakode)" },
            { time: "09:40 AM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] മംഗലാപുരത്തേക്ക് (ആലക്കോട്, ഒടയഞ്ചാൽ, കാഞ്ഞങ്ങാട് വഴി)", routeEn: "[Dep: Iritty] to Mangalapuram (via Alakode, Odayanchal, Kanhangad)" },
            { time: "10:05 AM", name: "THEKKEDATH", nameEn: "THEKKEDATH", route: "[Departure: ഇരിട്ടി] ആലക്കോട്ടേക്ക് (പയ്യാവൂർ, ചെമ്പേരി വഴി)", routeEn: "[Dep: Iritty] to Alakode (via Payyavur, Chemperi)" },
            { time: "10:15 AM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] കാഞ്ഞങ്ങാടേക്ക് (ആലക്കോട്, ചെറുപുഴ, ചിറ്റാരിക്കാൽ വഴി)", routeEn: "[Dep: Iritty] to Kanhangad (via Alakode, Cherupuzha, Chittarikkal)" },
            { time: "10:45 AM", name: "BIGSHOW", nameEn: "BIGSHOW", route: "[Departure: ഇരിട്ടി] കരുവൻചാലിലേക്ക് (പയ്യാവൂർ, നടുവിൽ വഴി)", routeEn: "[Dep: Iritty] to Karuvanchal (via Payyavur, Naduvil)" },
            { time: "11:00 AM", name: "KSRTC T T", nameEn: "KSRTC TT", route: "[Departure: ഇരിട്ടി] വെള്ളരിക്കുണ്ടിലേക്ക് (ആലക്കോട്, ചെറുപുഴ വഴി)", routeEn: "[Dep: Iritty] to Vellarikundu (via Alakode, Cherupuzha)" },
            { time: "11:40 AM", name: "AANAD AAKASH", nameEn: "AANAD AAKASH", route: "[Departure: ഇരിട്ടി] ചെറുപുഴക്ക് (പയ്യാവൂർ, ചെമ്പേരി, ആലക്കോട് വഴി)", routeEn: "[Dep: Iritty] to Cherupuzha (via Payyavur, Chemperi, Alakode)" },
            { time: "12:15 PM", name: "JACOBS", nameEn: "JACOBS", route: "[Departure: ഇരിട്ടി] പാണത്തൂരിലേക്ക് നേരിട്ട്", routeEn: "[Dep: Iritty] to Panathur" },
            { time: "12:35 PM", name: "CHAKOCHI", nameEn: "CHAKOCHI", route: "[Departure: ഇരിട്ടി] ബന്തടുക്കക്ക് (ആലക്കോട്, വെള്ളരിക്കുണ്ട്, ഒടയഞ്ചാൽ വഴി)", routeEn: "[Dep: Iritty] to Banthadukka (via Alakode, Vellarikundu, Odayanchal)" },
            { time: "01:20 PM", name: "KSRTC FP", nameEn: "KSRTC Fast Passenger", route: "[Departure: ഇരിട്ടി] കാഞ്ഞങ്ങാടേക്ക് (ചെമ്പേരി, ആലക്കോട്, ചെറുപുഴ വഴി)", routeEn: "[Dep: Iritty] to Kanhangad (via Chemperi, Alakode, Cherupuzha)" },
            { time: "02:05 PM", name: "ST MARYS", nameEn: "ST MARYS", route: "[Departure: ഇരിട്ടി] കൊന്നക്കാടേക്ക് (ചെമ്പേരി, ആലക്കോട്, വെള്ളരിക്കുണ്ട് വഴി)", routeEn: "[Dep: Iritty] to Konnakad (via Chemperi, Alakode, Vellarikundu)" },
            { time: "02:15 PM", name: "AJSAL", nameEn: "AJSAL", route: "[Departure: ഇരിട്ടി] പോത്തുകണ്ടത്തേക്ക് (ആലക്കോട്, തേർത്തല്ലി വഴി)", routeEn: "[Dep: Iritty] to Pothukandam (via Alakode, Therthalli)" },
            { time: "02:30 PM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] രാജപുരത്തേക്ക് (ചെറുപുഴ, വെള്ളരിക്കുണ്ട്, ബളാൽ വഴി)", routeEn: "[Dep: Iritty] to Rajapuram (via Cherupuzha, Vellarikundu, Balal)" },
            { time: "03:00 PM", name: "KSRTC FP", nameEn: "KSRTC Fast Passenger", route: "[Departure: ഇരിട്ടി] പാണത്തൂരിലേക്ക് (ആലക്കോട്, ചെറുപുഴ, രാജപുരം വഴി)", routeEn: "[Dep: Iritty] to Panathur (via Alakode, Cherupuzha, Rajapuram)" },
            { time: "03:15 PM", name: "KAVALAM", nameEn: "KAVALAM", route: "[Departure: ഇരിട്ടി] പാണത്തൂരിലേക്ക് (ആലക്കോട്, ചെറുപുഴ, ഒടയഞ്ചാൽ വഴി)", routeEn: "[Dep: Iritty] to Panathur (via Alakode, Cherupuzha, Odayanchal)" },
            { time: "03:40 PM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] ബലാലിലേക്ക് (ആലക്കോട്, ചെറുപുഴ, വെള്ളരിക്കുണ്ട് വഴി)", routeEn: "[Dep: Iritty] to Balal (via Alakode, Cherupuzha, Vellarikundu)" },
            { time: "04:20 PM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] ബന്തടുക്കക്ക് (ചെറുപുഴ, വെള്ളരിക്കുണ്ട്, രാജപുരം വഴി)", routeEn: "[Dep: Iritty] to Banthadukka (via Cherupuzha, Vellarikundu, Rajapuram)" },
            { time: "05:00 PM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] ബലാലിലേക്ക് (ചെമ്പേരി, ആലക്കോട്, വെള്ളരിക്കുണ്ട് വഴി)", routeEn: "[Dep: Iritty] to Balal (via Chemperi, Alakode, Vellarikundu)" },
            { time: "05:05 PM", name: "THEKKEDATH", nameEn: "THEKKEDATH", route: "[Departure: ഇരിട്ടി] ജോസ് ഗിരിക്ക് (ശ്രീകണ്ഠാപുരം, നടുവിൽ, ആലക്കോട് വഴി)", routeEn: "[Dep: Iritty] to Josegiri (via Sreekandapuram, Naduvil, Alakode)" },
            { time: "05:10 PM", name: "ANAND", nameEn: "ANAND", route: "[Departure: പയ്യാവൂർ] ചെറുപുഴ ഭാഗത്തേക്ക് പുറപ്പെടുന്നു", routeEn: "[Dep: Payyavur] Towards Cherupuzha" },
            { time: "05:40 PM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] കാഞ്ഞങ്ങാടേക്ക് (ചറുപുഴ വഴി നേരിട്ട്)", routeEn: "[Dep: Iritty] to Kanhangad (via Cherupuzha)" },
            { time: "05:45 PM", name: "DIVINE", nameEn: "DIVINE", route: "[Departure: ഇരിട്ടി] കരുവൻചാലിലേക്ക് (പയ്യാവൂർ വഴി)", routeEn: "[Dep: Iritty] to Karuvanchal (via Payyavur)" },
            { time: "07:40 PM", name: "KSRTC", nameEn: "KSRTC", route: "[Departure: ഇരിട്ടി] ചീക്കാടിലേക്ക് (ആലക്കോട് വഴി)", routeEn: "[Dep: Iritty] to Cheekad (via Alakode)" }
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

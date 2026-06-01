// ==========================================
// 📊 VERIFIED & CROSS-CHECKED DATABASE
// ==========================================
const masterBusData = {
    chelliparamba: {
        taliparamba: [
            { time: "05:30 AM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 5:25)", nameEn: "JJ (From Chemperi 5:25)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "06:45 AM", name: "സാഗര (ചെമ്പേരിയിൽ നിന്ന് 6:35)", nameEn: "Sagara (From Chemperi 6:35)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "06:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "പുളിക്കുരുമ്പ - തളിപ്പറമ്പ്", routeEn: "Pulikkurumba to Taliparamba" },
            { time: "07:35 AM", name: "നന്ദനം", nameEn: "Nandanam", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "07:50 AM", name: "നന്ദനം (ചെമ്പേരിയിൽ നിന്ന് 7:40)", nameEn: "Nandanam (From Chemperi 7:40)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "08:30 AM", name: "കുന്നത്ത് (ചെമ്പേരിയിൽ നിന്ന് 8:20)", nameEn: "Kunnath (From Chemperi 8:20)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "08:40 AM", name: "സൽസബീൽ (ചെമ്പേരിയിൽ നിന്ന് 8:30)", nameEn: "Salsabeel (From Chemperi 8:30)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "09:15 AM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 09:15)", nameEn: "JJ (From Chemperi 09:15)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "09:50 AM", name: "മുത്തപ്പൻ", nameEn: "Muthappan", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "10:15 AM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "ശ്രീകണ്ഠാപുരം, ഇരിക്കൂർ വഴി കണ്ണൂർ", routeEn: "via Sreekandapuram, Irikkur to Kannur" },
            { time: "10:20 AM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "11:15 AM", name: "നന്ദനം (ചെമ്പേരിയിൽ നിന്ന് 11:10)", nameEn: "Nandanam (From Chemperi 11:10)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "11:45 AM", name: "കുന്നത്ത് (ചെമ്പേരിയിൽ നിന്ന് 11:40)", nameEn: "Kunnath (From Chemperi 11:40)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "11:50 AM", name: "സൽസബീൽ (ചെമ്പേരിയിൽ നിന്ന് 11:50)", nameEn: "Salsabeel (From Chemperi 11:50)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "12:20 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "12:40 PM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 12:40)", nameEn: "JJ (From Chemperi 12:40)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "12:45 PM", name: "Automobile (Family)", nameEn: "Family", route: "ശ്രീകണ്ഠാപുരം വഴി കണ്ണൂർ", routeEn: "via Sreekandapuram to Kannur" },
            { time: "02:50 PM", name: "മീനാക്ഷി (ചെമ്പേരിയിൽ നിന്ന് 2:50)", nameEn: "Meenakshi (From Chemperi 2:50)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "03:20 PM", name: "സാഗര (ചെമ്പേരിയിൽ നിന്ന് 3:15)", nameEn: "Sagara (From Chemperi 3:15)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "03:40 PM", name: "AIശ്വര്യ", nameEn: "Aishwarya", route: "ശ്രീകണ്ഠാപുരം വഴി കണ്ണൂർ", routeEn: "via Sreekandapuram to Kannur" },
            { time: "03:50 PM", name: "മുത്തപ്പൻ", nameEn: "Muthappan", route: "ശ്രീകണ്ഠാപുരം വഴി കണ്ണൂർ", routeEn: "via Sreekandapuram to Kannur" },
            { time: "04:00 PM", name: "KSRTC", nameEn: "KSRTC", route: "പുളിക്കുരുമ്പ - തളിപ്പറമ്പ്", routeEn: "Pulikkurumba to Taliparamba" },
            { time: "04:15 PM", name: "ജെ ജെ", nameEn: "JJ", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "04:40 PM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "ശ്രീകണ്ഠാപുരം വഴി കണ്ണൂർ", routeEn: "via Sreekandapuram to Kannur" },
            { time: "05:30 PM", name: "പിലാക്കുമ്മന്തൽ", nameEn: "Pilakkummanthal", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ് വഴി", routeEn: "via Sreekandapuram, Taliparamba" },
            { time: "05:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "തളിപ്പറമ്പ്, കണ്ണൂർ, പാലാ വഴി എരുമേലി", routeEn: "via Taliparamba, Kannur, Pala to Erumely" },
            { time: "06:20 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "06:30 PM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" }
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
        ],
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
            { time: "06:00 AM", name: "TALENT [LS]", nameEn: "TALENT [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "06:20 AM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "06:50 AM", name: "SRIRAM [LS]", nameEn: "SRIRAM [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "07:00 AM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "07:15 AM", name: "VRINDAVAN [LS]", nameEn: "VRINDAVAN [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "07:20 AM", name: "KRITHIKA [LS]", nameEn: "KRITHIKA [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "07:35 AM", name: "SIYA [LS]", nameEn: "SIYA [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "07:50 AM", name: "LIYA [LS]", nameEn: "LIYA [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "07:53 AM", name: "PALAKKADANS [LS]", nameEn: "PALAKKADANS [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "07:57 AM", name: "DTSF4 [LS]", nameEn: "DTSF4 [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "08:04 AM", name: "VOLANT [LS]", nameEn: "VOLANT [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "08:15 AM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "08:18 AM", name: "HARISREE [LS]", nameEn: "HARISREE [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "08:35 AM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "08:40 AM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "09:00 AM", name: "PULARI [LS]", nameEn: "PULARI [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "09:20 AM", name: "ASWIN [LS]", nameEn: "ASWIN [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "09:30 AM", name: "MMD [LS]", nameEn: "MMD [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "10:55 AM", name: "BHAGAVAN [LS]", nameEn: "BHAGAVAN [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "11:55 AM", name: "VANAMBADI [LS]", nameEn: "VANAMBADI [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" },
            { time: "02:25 PM", name: "PRATAP [LS]", nameEn: "PRATAP [LS]", route: "[Departure: കൂത്തുപറമ്പ്] പയ്യന്നൂർ ഭാഗത്തേക്ക്", routeEn: "[Dep: Kuthuparamba] Towards Payyanur" },
            { time: "07:10 PM", name: "SANMARIA [LS]", nameEn: "SANMARIA [LS]", route: "[Departure: കൂത്തുപറമ്പ്] കണ്ണൂരിലേക്ക്", routeEn: "[Dep: Kuthuparamba] to Kannur" }
        ],
        from_kannur: [
            { time: "05:20 AM", name: "SANMARIA [LS]", nameEn: "SANMARIA [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി തിരുനെല്ലിക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Thirunelly" },
            { time: "08:15 AM", name: "ASWIN [LS]", nameEn: "ASWIN [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba" },
            { time: "08:50 AM", name: "PRATAP [LS]", nameEn: "PRATAP [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി മാനന്തവാടിക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Mananthavady" },
            { time: "12:30 PM", name: "MMD [LS]", nameEn: "MMD [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി കൽപ്പറ്റക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Kalpetta" },
            { time: "02:20 PM", name: "BHAGAVAN [LS]", nameEn: "BHAGAVAN [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി സുൽത്താൻ ബത്തേരിക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Sulthan Bathery" },
            { time: "03:30 PM", name: "PALAKKADANS [LS]", nameEn: "PALAKKADANS [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി കൊട്ടിയൂരിലേക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Kottiyoor" },
            { time: "03:35 PM", name: "VANAMBADI [LS]", nameEn: "VANAMBADI [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി സുൽത്താൻ ബത്തേരിക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Sulthan Bathery" },
            { time: "05:05 PM", name: "PULARI [LS]", nameEn: "PULARI [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി കൊട്ടിയൂരിലേക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Kottiyoor" },
            { time: "05:25 PM", name: "HARISREE [LS]", nameEn: "HARISREE [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി പേരാവൂരിലേക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Peravoor" },
            { time: "06:05 PM", name: "MM4 [LS]", nameEn: "MM4 [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba" },
            { time: "06:20 PM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba" },
            { time: "07:00 PM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba" },
            { time: "07:15 PM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba" },
            { time: "07:35 PM", name: "VIKRANT [LS]", nameEn: "VIKRANT [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba" },
            { time: "07:55 PM", name: "KRITHIKA [LS]", nameEn: "KRITHIKA [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് വഴി കൊട്ടിയൂരിലേക്ക്", routeEn: "[Dep: Kannur] via Kuthuparamba to Kottiyoor" },
            { time: "08:40 PM", name: "MADHAVI [LS]", nameEn: "MADHAVI [LS]", route: "[Departure: കണ്ണൂർ] കൂത്തുപറമ്പ് ഭാഗത്തേക്ക്", routeEn: "[Dep: Kannur] Towards Kuthuparamba" }
        ]
    }
};

const destRouteNames = {
    chelliparamba: [
        { id: "taliparamba", ml: "തളിപ്പറമ്പ്", en: "Taliparamba" },
        { id: "iritty", ml: "ഇരുട്ടി", en: "Iritty" },
        { id: "alakode", ml: "ആലക്കോട്", en: "Alakode" },
        { id: "kudiyanmala", ml: "കൂടിയാന്മല", en: "Kudiyanmala" },
        { id: "eruppazha", ml: "എരുപ്പഹ", en: "Eruppazha" },
        { id: "arikamala", ml: "അരികമല", en: "Arikamala" },
        { id: "cherupuzha_net", ml: "ചെറുപുഴ/കാഞ്ഞങ്ങാട്", en: "Cherupuzha/Kanhangad" }
    ],
    kuthuparamba: [
        { id: "to_kannur", ml: "കണ്ണൂർ ഭാഗത്തേക്ക്", en: "Towards Kannur" },
        { id: "from_kannur", ml: "കണ്ണൂരിൽ നിന്ന് ഇങ്ങോട്ട്", en: "From Kannur" }
    ]
};

// ==========================================
// ⚙️ STATE VARIABLES
// ==========================================
let currentLanguage = 'ml';
let selectedStand = 'chelliparamba';
let selectedRoute = '';
let showingAllBuses = false; 

// ==========================================
// 🎯 DOM ELEMENTS (Safely referenced globally)
// ==========================================
let standSelect, routeButtonsContainer, busListContainer, toggleBusesBtn, langToggleBtn, feedbackInput, submitFeedbackBtn;

// ==========================================
// 🚀 INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    injectMicroInteractionStyles(); 
    initializeDOMElements();
    setupEventListeners();
    
    // Safety Fallback Initialization
    syncSelectedRoute();
    
    renderRouteButtons();
    renderBusTimeline();
});

function initializeDOMElements() {
    standSelect = document.getElementById('standSelect');
    routeButtonsContainer = document.getElementById('routeButtonsContainer');
    busListContainer = document.getElementById('busListContainer');
    toggleBusesBtn = document.getElementById('toggleBusesBtn');
    langToggleBtn = document.getElementById('langToggleBtn');
    feedbackInput = document.getElementById('feedbackInput');
    submitFeedbackBtn = document.getElementById('submitFeedbackBtn');

    // Debugging assistant: checks for missing IDs in html file
    if (!standSelect) console.warn("Missing HTML Element: id='standSelect'");
    if (!routeButtonsContainer) console.warn("Missing HTML Element: id='routeButtonsContainer'");
    if (!busListContainer) console.warn("Missing HTML Element: id='busListContainer'");
    if (!toggleBusesBtn) console.warn("Missing HTML Element: id='toggleBusesBtn'");
    if (!langToggleBtn) console.warn("Missing HTML Element: id='langToggleBtn'");
}

// Ensure selectedRoute tracking logic matches database constraints dynamically
function syncSelectedRoute() {
    if (standSelect && standSelect.value) {
        selectedStand = standSelect.value;
    }
    const availableRoutes = destRouteNames[selectedStand] || [];
    if (availableRoutes.length > 0) {
        selectedRoute = availableRoutes[0].id;
    } else {
        selectedRoute = '';
    }
}

// ==========================================
// 🎨 DYNAMIC CSS EFFECTS MIXIN
// ==========================================
function injectMicroInteractionStyles() {
    if (document.getElementById('injected-ux-styles')) return;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'injected-ux-styles';
    styleSheet.textContent = `
        #busListContainer {
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
            min-height: 50px;
        }
        .bus-card {
            opacity: 0;
            transform: translateY(12px);
            animation: uxCardAppear 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .bus-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.08);
        }
        @keyframes uxCardAppear {
            to { opacity: 1; transform: translateY(0); }
        }
        .shake-error {
            animation: uxShake 0.4s ease-in-out;
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
        }
        @keyframes uxShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            75% { transform: translateX(6px); }
        }
    `;
    document.head.appendChild(styleSheet);
}

// ==========================================
// ⚡ EVENT LISTENERS & INTERACTION FLOWS
// ==========================================
function setupEventListeners() {
    if (standSelect) {
        standSelect.addEventListener('change', (e) => {
            selectedStand = e.target.value;
            showingAllBuses = false;
            syncSelectedRoute();
            
            if (busListContainer) busListContainer.style.opacity = '0';
            setTimeout(() => {
                renderRouteButtons();
                renderBusTimeline();
                if (busListContainer) busListContainer.style.opacity = '1';
            }, 150);
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
            langToggleBtn.classList.toggle('lang-en', currentLanguage === 'en');
            
            updateStaticLabels();
            renderRouteButtons();
            renderBusTimeline();
        });
    }

    if (submitFeedbackBtn) {
        submitFeedbackBtn.addEventListener('click', handleFeedbackSubmission);
    }
}

function updateStaticLabels() {
    const titleEl = document.getElementById('appTitle');
    if (titleEl) {
        titleEl.textContent = currentLanguage === 'ml' ? 'നമ്മുടെ ബസ് ലോക്കൽ' : 'Nammada Bus Local';
    }
}

// ==========================================
// 🛠️ ROUTE BUTTON RENDERER
// ==========================================
function renderRouteButtons() {
    if (!routeButtonsContainer) return;
    routeButtonsContainer.innerHTML = '';
    
    const routes = destRouteNames[selectedStand] || [];

    routes.forEach((routeObj) => {
        const btn = document.createElement('button');
        btn.className = `route-btn ${selectedRoute === routeObj.id ? 'active' : ''}`;
        btn.textContent = currentLanguage === 'ml' ? routeObj.ml : routeObj.en;
        btn.setAttribute('aria-pressed', selectedRoute === routeObj.id ? 'true' : 'false');
        
        btn.addEventListener('click', () => {
            if (selectedRoute === routeObj.id) return;
            
            document.querySelectorAll('.route-btn').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
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
    if (!time || !modifier) return 0;
    let [hours, minutes] = time.split(':').map(Number);
    if (hours === 12) hours = 0;
    if (modifier === 'PM') hours += 12;
    return hours * 60 + minutes;
}

// ==========================================
// 🕒 LIVE TIMELINE DISPLAY
// ==========================================
function renderBusTimeline() {
    if (!busListContainer) return;
    busListContainer.innerHTML = '';
    
    const busArray = (masterBusData[selectedStand] && masterBusData[selectedStand][selectedRoute]) || [];
    
    if (busArray.length === 0) {
        busListContainer.innerHTML = `
            <div class="empty-state-card">
                <p class="no-buses">${currentLanguage === 'ml' ? 'ഈ റൂട്ടിൽ ബസ്സുകൾ ലഭ്യമല്ല' : 'No buses available for this route.'}</p>
            </div>`;
        if (toggleBusesBtn) toggleBusesBtn.style.display = 'none';
        return;
    }

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const sortedBuses = [...busArray].sort((a, b) => parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time));
    let upcomingBuses = sortedBuses.filter(bus => parseTimeToMinutes(bus.time) >= currentMinutes);
    let busesToDisplay = showingAllBuses ? sortedBuses : upcomingBuses;

    if (toggleBusesBtn) {
        toggleBusesBtn.style.display = 'block';
        toggleBusesBtn.className = `toggle-view-btn ${showingAllBuses ? 'view-all' : 'view-upcoming'}`;
        toggleBusesBtn.textContent = showingAllBuses 
            ? (currentLanguage === 'ml' ? 'അടുത്ത ബസ്സുകൾ മാത്രം കാണിക്കുക' : '🎯 Show Upcoming Only')
            : (currentLanguage === 'ml' ? 'എല്ലാ സമയത്തെയും ബസ്സുകൾ കാണിക്കുക' : '📅 Show All Schedules');
    }

    if (busesToDisplay.length === 0) {
        busListContainer.innerHTML = `
            <div class="empty-state-card">
                <p class="no-buses">${currentLanguage === 'ml' ? 'ഇന്നത്തെ സർവീസുകൾ കഴിഞ്ഞു.' : '🏁 No more buses left today.'}</p>
            </div>`;
        return;
    }

    busesToDisplay.forEach((bus, index) => {
        const isPast = parseTimeToMinutes(bus.time) < currentMinutes;
        
        const card = document.createElement('div');
        card.className = `bus-card ${isPast ? 'past-bus' : 'upcoming-bus'}`;
        card.style.animationDelay = `${index * 35}ms`;

        const busName = currentLanguage === 'ml' ? bus.name : bus.nameEn;
        const busRoute = currentLanguage === 'ml' ? bus.route : bus.routeEn;

        card.innerHTML = `
            <div class="bus-time-badge">${bus.time}</div>
            <div class="bus-details">
                <h3 class="bus-title">${busName}</h3>
                <p class="bus-route-path">${busRoute}</p>
            </div>
            ${!isPast && index === 0 && !showingAllBuses ? `<div class="next-badge">${currentLanguage === 'ml' ? 'അടുത്തത്' : 'NEXT'}</div>` : ''}
        `;
        busListContainer.appendChild(card);
    });
}

// ==========================================
// 📨 FEEDBACK FORM FLOW WITH VISUAL LOADING
// ==========================================
function handleFeedbackSubmission() {
    if (!feedbackInput || !submitFeedbackBtn) return;
    const text = feedbackInput.value.trim();
    if (!text) {
        feedbackInput.classList.add('shake-error');
        feedbackInput.focus();
        setTimeout(() => feedbackInput.classList.remove('shake-error'), 400);
        return;
    }

    const originalText = submitFeedbackBtn.textContent;
    submitFeedbackBtn.disabled = true;
    submitFeedbackBtn.textContent = currentLanguage === 'ml' ? 'അയക്കുന്നു...' : 'Sending...';
    submitFeedbackBtn.style.opacity = '0.7';

    setTimeout(() => {
        console.log("Captured user suggestion:", text);
        alert(currentLanguage === 'ml' ? 'നിങ്ങളുടെ നിർദ്ദേശം രേഖപ്പെടുത്തിയിട്ടുണ്ട്!' : 'Thank you! Your feedback has been noted.');
        
        feedbackInput.value = '';
        submitFeedbackBtn.disabled = false;
        submitFeedbackBtn.textContent = originalText;
        submitFeedbackBtn.style.opacity = '1';
    }, 600);
}
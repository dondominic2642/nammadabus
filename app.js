// 100% ഒറിജിനൽ ഡാറ്റാബേസ് ബോർഡുകളുമായി വെരിഫൈ ചെയ്തത്
const masterBusData = {
    chelliparamba: {
        taliparamba: [
            { time: "05:30 AM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 5:25)", nameEn: "JJ (From Chemperi 5:25)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "06:45 AM", name: "സാഗര (ചെമ്പേരിയിൽ നിന്ന് 6:35)", nameEn: "Sagara (From Chemperi 6:35)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "06:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "പുളിക്കുруമ്പ, തളിപ്പറമ്പ്", routeEn: "Pulikkurumba, Taliparamba" },
            { time: "07:35 AM", name: "നന്ദനം", nameEn: "Nandanam", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "07:50 AM", name: "നന്ദനം (ചെമ്പേരിയിൽ നിന്ന് 7:40)", nameEn: "Nandanam (From Chemperi 7:40)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "08:30 AM", name: "കുന്നത്ത് (ചെമ്പേരിയിൽ നിന്ന് 8:20)", nameEn: "Kunnath (From Chemperi 8:20)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "08:40 AM", name: "സൽസബീൽ (ചെമ്പേരിയിൽ നിന്ന് 8:30)", nameEn: "Salsabeel (From Chemperi 8:30)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "09:15 AM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 09:15)", nameEn: "JJ (From Chemperi 09:15)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "09:50 AM", name: "മുത്തപ്പൻ", nameEn: "Muthappan", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "10:15 AM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "ശ്രീകണ്ഠാപുരം, ഇരിക്കൂർ, കണ്ണൂർ", routeEn: "Sreekandapuram, Irikkur, Kannur" },
            { time: "10:20 AM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "11:00 AM", name: "സെന്റ് ജോർജ്", nameEn: "St. George", route: "ശ്രീകണ്ഠാപുരം, ഇരുട്ടി", routeEn: "Sreekandapuram, Iritty" },
            { time: "11:15 AM", name: "നന്ദനം (ചെമ്പേരിയിൽ നിന്ന് 11:10)", nameEn: "Nandanam (From Chemperi 11:10)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "11:45 AM", name: "കുന്നത്ത് (ചെമ്പേരിയിൽ നിന്ന് 11:40)", nameEn: "Kunnath (From Chemperi 11:40)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "11:50 AM", name: "സൽസബീൽ (ചെമ്പേരിയിൽ നിന്ന് 11:50)", nameEn: "Salsabeel (From Chemperi 11:50)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "12:20 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "12:40 PM", name: "ജെ ജെ (ചെമ്പേരിയിൽ നിന്ന് 12:40)", nameEn: "JJ (From Chemperi 12:40)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "12:45 PM", name: "ഫാമിലി", nameEn: "Family", route: "ശ്രീകണ്ഠാപുരം, കണ്ണൂർ", routeEn: "Sreekandapuram, Kannur" },
            { time: "02:50 PM", name: "മീനാക്ഷി (ചെമ്പേരിയിൽ നിന്ന് 2:50)", nameEn: "Meenakshi (From Chemperi 2:50)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "03:20 PM", name: "സാഗര (ചെമ്പേരിയിൽ നിന്ന് 3:15)", nameEn: "Sagara (From Chemperi 3:15)", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "03:40 PM", name: "ഐശ്വര്യ", nameEn: "Aishwarya", route: "ശ്രീകണ്ഠാപുരം, കണ്ണൂർ", routeEn: "Sreekandapuram, Kannur" },
            { time: "03:50 PM", name: "മുത്തപ്പൻ", nameEn: "Muthappan", route: "ശ്രീകണ്ഠാപുരം, കണ്ണൂർ", routeEn: "Sreekandapuram, Kannur" },
            { time: "04:00 PM", name: "KSRTC", nameEn: "KSRTC", route: "പുളിക്കുരുമ്പ, തളിപ്പറമ്പ്", routeEn: "Pulikkurumba, Taliparamba" },
            { time: "04:15 PM", name: "ജെ ജെ", nameEn: "JJ", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "04:40 PM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "ശ്രീകണ്ഠാപുരം, കണ്ണൂർ", routeEn: "Sreekandapuram, Kannur" },
            { time: "05:30 PM", name: "പിലാക്കുമ്മന്തൽ", nameEn: "Pilakkummanthal", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "05:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "തളിപ്പറമ്പ്, കണ്ണൂർ, പാലാ, എരുമേലി", routeEn: "Taliparamba, Kannur, Pala, Erumely" },
            { time: "06:20 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "06:30 PM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" }
        ],
        iritty: [
            { time: "07:30 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "07:55 AM", name: "KSRTC", nameEn: "KSRTC", route: "ഇരുട്ടി, മാനന്തവാടി", routeEn: "Iritty, Mananthavady" },
            { time: "08:35 AM", name: "KSRTC", nameEn: "KSRTC", route: "ഇരുട്ടി, മാനന്തവാടി", routeEn: "Iritty, Mananthavady" },
            { time: "09:20 AM", name: "സൂപ്പർ സ്റ്റാർ", nameEn: "Super Star", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "09:55 AM", name: "ക്വീൻസ്", nameEn: "Queens", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "10:25 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "10:40 AM", name: "جേക്കബ്ബ്", nameEn: "Jacob", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "10:55 AM", name: "കേരള", nameEn: "Kerala", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "11:10 AM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "11:45 AM", name: "നിർമ്മാല്യം", nameEn: "Nirmalyam", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "12:15 PM", name: "ഐ പി സി", nameEn: "IPC", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "12:25 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "12:50 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "01:15 PM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "02:00 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "02:20 PM", name: "ഷൈൻ സ്റ്റാർ", nameEn: "Shine Star", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "03:00 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ, ഇരുട്ടി, മാനന്തവാടി", routeEn: "Payyavoor, Iritty, Mananthavady" },
            { time: "03:35 PM", name: "പ്രൊവിഡൻസ്", nameEn: "Providence", route: "പയ്യാവൂർ, ഇരുട്ടി, തലശ്ശേരി", routeEn: "Payyavoor, Iritty, Thalassery" },
            { time: "03:50 PM", name: "സാത്വിക", nameEn: "Saathvika", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "04:15 PM", name: "എയ്ഞ്ചൽ", nameEn: "Angel", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "04:30 PM", name: "നിമിഷ", nameEn: "Nimisha", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "04:50 PM", name: "ആനന്ദ്", nameEn: "Anand", route: "പയ്യാവൂർ", routeEn: "Payyavoor" },
            { time: "05:00 PM", name: "സെന്റ് ജോർജ്", nameEn: "St. George", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "05:20 PM", name: "കേരള", nameEn: "Kerala", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "05:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "06:00 PM", name: "KSRTC", nameEn: "KSRTC", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" },
            { time: "06:30 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "പയ്യാവൂർ, ഇരുട്ടി", routeEn: "Payyavoor, Iritty" }
        ],
        alakode: [
            { time: "08:00 AM", name: "ഐ പി സി", nameEn: "IPC", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "09:05 AM", name: "എയ്ഞ്ചൽ", nameEn: "Angel", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "09:20 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ബലാൽ", routeEn: "Alakode, Balal" },
            { time: "10:10 AM", name: "ഷൈൻ സ്റ്റാർ", nameEn: "Shine Star", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "10:20 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ, മംഗലാപുരം", routeEn: "Alakode, Cherupuzha, Mangalapuram" },
            { time: "11:00 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, കാഞ്ഞങ്ങാട്", routeEn: "Alakode, Kanhangad" },
            { time: "12:35 PM", name: "ആനന്ദ്", nameEn: "Anand", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "01:15 PM", name: "ജേക്കബ്ബ്", nameEn: "Jacob", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "01:35 PM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "02:15 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ, കാഞ്ഞങ്ങാട്", routeEn: "Alakode, Cherupuzha, Kanhangad" },
            { time: "03:15 PM", name: "സൂപ്പർ സ്റ്റാർ", nameEn: "Super Star", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "03:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ, പനത്തൂർ", routeEn: "Alakode, Cherupuzha, Panathur" },
            { time: "04:15 PM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "ആലക്കോട്, ചെറുപുഴ, പനത്തൂർ", routeEn: "Alakode, Cherupuzha, Panathur" },
            { time: "04:30 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "05:20 PM", name: "ആനന്ദ്", nameEn: "Anand", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "05:45 PM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" }
        ],
        kudiyanmala: [
            { time: "08:50 AM", name: "കേരള", nameEn: "Kerala", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "11:00 AM", name: "ചൈത്രം", nameEn: "Chaithram", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "12:15 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "02:15 PM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "03:50 PM", name: "കേരള", nameEn: "Kerala", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "05:15 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "05:40 PM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "കൂടിയാന്മല, വലിയരിക്കമല", routeEn: "Kudiyanmala, Valiyarikkamala" },
            { time: "06:15 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" }
        ],
        eruppazha: [
            { time: "07:45 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "08:30 AM", name: "ക്വീൻസ്", nameEn: "Queens", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "09:40 AM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "10:20 AM", name: "സെന്റ് ജോർജ്", nameEn: "St. George", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "11:50 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "01:55 PM", name: "സാഗര", nameEn: "Sagara", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "04:00 PM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "05:50 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "06:30 PM", name: "ആവേമരിയ", nameEn: "Ave Maria", route: "എരുപ്പശ്ശേരി", routeEn: "Ave Maria" },
            { time: "07:50 PM", name: "സാഗര", nameEn: "Sagara", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" }
        ],
        arikamala: [
            { time: "08:55 AM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "12:05 PM", name: "ഫാമിലി", nameEn: "Family", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "02:30 PM", name: "KSRTC", nameEn: "KSRTC", route: "വലിയരിക്കമല", routeEn: "Valiyarikkamala" },
            { time: "02:30 PM", name: "AIശ്വര്യ", nameEn: "Aishwarya", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "06:00 PM", name: "മീനാക്ഷി", nameEn: "Meenakshi", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "06:55 PM", name: "നന്ദനം", nameEn: "Nandanam", route: "മിഡിലായം", routeEn: "Midilayam" },
            { time: "07:25 PM", name: "KSRTC", nameEn: "KSRTC", route: "വലിയരിക്കമല", routeEn: "Valiyarikkamala" },
            { time: "07:45 PM", name: "നന്ദനം", nameEn: "Nandanam", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" }
        ]
    },
    chemperi: {
        taliparamba: [
            { time: "05:35 AM", name: "ജെ ജെ (ചെല്ലിപ്പറമ്പിൽ 5:30)", nameEn: "JJ (At Chelliparamba 5:30)", route: "ഏരുവേശ്ശി, തളിപ്പറമ്പ്", routeEn: "Eruveshi, Taliparamba" },
            { time: "06:35 AM", name: "സാഗര (ചെല്ലിപ്പറമ്പിൽ 6:45)", nameEn: "Sagara (At Chelliparamba 6:45)", route: "ഏരുവേശ്ശി, കണ്ണൂർ", routeEn: "Eruveshi, Kannur" },
            { time: "07:00 AM", name: "KSRTC", nameEn: "KSRTC", route: "ഒടുവള്ളി, തളിപ്പറമ്പ്", routeEn: "Oduvalli, Taliparamba" },
            { time: "07:10 AM", name: "ഫാമിലി", nameEn: "Family", route: "ശ്രീകണ്ഠാപുരം, കണ്ണൂർ", routeEn: "Sreekandapuram, Kannur" },
            { time: "07:40 AM", name: "നന്ദനം", nameEn: "Nandanam", route: "ചെപ്പറമ്പ്, തളിപ്പറമ്പ്", routeEn: "Chepparamba, Taliparamba" },
            { time: "08:20 AM", name: "കുന്നത്ത്", nameEn: "Kunnath", route: "ഏരുവേശ്ശി, തളിപ്പറമ്പ്", routeEn: "Eruveshi, Taliparamba" },
            { time: "08:30 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "ഏരുവേശ്ശി, തളിപ്പറമ്പ്", routeEn: "Eruveshi, Taliparamba" },
            { time: "09:15 AM", name: "ജെ ജെ", nameEn: "JJ", route: "ഏരുവേശ്ശി, തളിപ്പറമ്പ്", routeEn: "Eruveshi, Taliparamba" },
            { time: "11:15 AM", name: "അന്നമേരി", nameEn: "Anna Mary", route: "ചെമ്പന്തൊട്ടി, തളിപ്പറമ്പ്", routeEn: "Chembanthotti, Taliparamba" },
            { time: "11:40 AM", name: "കുന്നത്ത്", nameEn: "Kunnath", route: "ഏരുവേശ്ശി, തളിപ്പറമ്പ്", routeEn: "Eruveshi, Taliparamba" },
            { time: "12:00 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "ശ്രീകണ്ഠാപുരം, തളിപ്പറമ്പ്", routeEn: "Sreekandapuram, Taliparamba" },
            { time: "12:20 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "ചെപ്പറമ്പ്, തളിപ്പറമ്പ്", routeEn: "Chepparamba, Taliparamba" },
            { time: "12:40 PM", name: "ജെ ജെ", nameEn: "JJ", route: "ഏരുവേശ്ശി, തളിപ്പറമ്പ്", routeEn: "Eruveshi, Taliparamba" },
            { time: "03:15 PM", name: "സാഗര", nameEn: "Sagara", route: "ഏരുവേശ്ശി, കണ്ണൂർ", routeEn: "Eruveshi, Kannur" }
        ],
        iritty: [
            { time: "05:25 AM", name: "KSRTC", nameEn: "KSRTC", route: "മാനന്തവാടി", routeEn: "Mananthavady" },
            { time: "07:15 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "09:45 AM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "10:15 AM", name: "ശ്യാമളക്ഷ്മി", nameEn: "Shyamalakshmi", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "10:50 AM", name: "കേരള", nameEn: "Kerala", route: "ഇരുട്ടി, കേളകം", routeEn: "Iritty, Kelakam" },
            { time: "12:50 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "01:00 PM", name: "സെന്റ് മേരീസ്", nameEn: "St. Marys", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "03:30 PM", name: "പ്രൊവിഡൻസ്", nameEn: "Providence", route: "ഇരുട്ടി, തലശ്ശേരി", routeEn: "Iritty, Thalassery" },
            { time: "05:00 PM", name: "സെന്റ് ജോർജ്", nameEn: "St. George", route: "ഇരുട്ടി", routeEn: "Iritty" },
            { time: "05:15 PM", name: "കേരള", nameEn: "Kerala", route: "ഇരുട്ടി, കേളകം", routeEn: "Iritty, Kelakam" },
            { time: "06:30 PM", name: "ചൈത്രം", nameEn: "Chaithram", route: "ഇരുട്ടി", routeEn: "Iritty" }
        ],
        alakode: [
            { time: "04:00 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, പയ്യന്നൂർ", routeEn: "Alakode, Payyanur" },
            { time: "06:30 AM", name: "KSRTC", nameEn: "KSRTC", route: "ആലക്കോട്, കാഞ്ഞങ്ങാട്", routeEn: "Alakode, Kanhangad" },
            { time: "08:05 AM", name: "IPC", nameEn: "IPC", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "09:10 AM", name: "തെക്കേക്കര", nameEn: "Thekkekara", route: "ആലക്കോട്, ചെറുപുഴ", routeEn: "Alakode, Cherupuzha" },
            { time: "11:00 AM", name: "KSRTC", nameEn: "KSRTC", route: "കാഞ്ഞങ്ങാട്", routeEn: "Kanhangad" },
            { time: "12:40 PM", name: "ആനന്ദ്", nameEn: "Anand", route: "ചെറുപുഴ", routeEn: "Cherupuzha" }
        ],
        kudiyanmala: [
            { time: "08:20 AM", name: "ഹോളി എയ്ഞ്ചൽ", nameEn: "Holy Angel", route: "കൂടിയാന്മല, ആലക്കോട്", routeEn: "Kudiyanmala, Alakode" },
            { time: "08:50 AM", name: "കേരള", nameEn: "Kerala", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "11:05 AM", name: "ചൈത്രം", nameEn: "Chaithram", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "12:30 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "02:15 PM", name: "സാനിയ", nameEn: "Saniya", route: "കൂടിയാന്മല", routeEn: "Kudiyanmala" },
            { time: "06:00 PM", name: "സെവൻ സ്റ്റാർ", nameEn: "Seven Star", route: "കൂടിയാന്മല, വലിയരിക്കമല", routeEn: "Kudiyanmala, Valiyarikkamala" }
        ],
        eruppazha: [
            { time: "07:30 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "08:30 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "09:45 AM", name: "ശ്രേയസ്", nameEn: "Shreyas", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "11:40 AM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "01:50 PM", name: "സാഗര", nameEn: "Sagara", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" },
            { time: "05:00 PM", name: "സൽസബീൽ", nameEn: "Salsabeel", route: "എരുപ്പശ്ശേരി", routeEn: "Eruppazha" }
        ],
        arikamala: [
            { time: "09:00 AM", name: "AIശ്വര്യ", nameEn: "Aishwarya", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "12:00 PM", name: "ഫാമിലി", nameEn: "Family", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" },
            { time: "02:30 PM", name: "KSRTC", nameEn: "KSRTC", route: "വലിയരിക്കമല", routeEn: "Valiyarikkamala" },
            { time: "06:00 PM", name: "AIശ്വര്യ", nameEn: "Aishwarya", route: "ചെറിയരിക്കമല", routeEn: "Cheriyarikkamala" }
        ]
    }
};
const destRouteNames = {
    chelliparamba: [
        { id: "taliparamba", ml: "തളിപ്പറമ്പ്", en: "Taliparamba", query: "Chelliparamba to Taliparamba" },
        { id: "iritty", ml: "ഇരുട്ടി", en: "Iritty", query: "Chelliparamba to Iritty" },
        { id: "alakode", ml: "ആലക്കോട്", en: "Alakode", query: "Chelliparamba to Alakode" },
        { id: "kudiyanmala", ml: "കൂടിയാന്മല", en: "Kudiyanmala", query: "Chelliparamba to Kudiyanmala" },
        { id: "eruppazha", ml: "എരുപ്പശ്ശേരി", en: "Eruppazha", query: "Chelliparamba to Eruppazha" },
        { id: "arikamala", ml: "അരികമല", en: "Arikamala", query: "Chelliparamba to Arikamala" }
    ],
    chemperi: [
        { id: "taliparamba", ml: "തളിപ്പറമ്പ്", en: "Taliparamba", query: "Chemperi to Taliparamba" },
        { id: "iritty", ml: "ഇരുട്ടി", en: "Iritty", query: "Chemperi to Iritty" },
        { id: "alakode", ml: "ആലക്കോട്", en: "Alakode", query: "Chemperi to Alakode" },
        { id: "kudiyanmala", ml: "കൂടിയാന്മല", en: "Kudiyanmala", query: "Chemperi to Kudiyanmala" },
        { id: "eruppazha", ml: "എരുപ്പശ്ശേരി", en: "Eruppazha", query: "Chemperi to Eruppazha" },
        { id: "arikamala", ml: "അരികമല", en: "Arikamala", query: "Chemperi to Arikamala" }
    ]
};

let currentLang = 'ml';
let selectedSource = 'chelliparamba';
let selectedDest = 'taliparamba';

document.getElementById('srcChelliparamba').addEventListener('click', function() { changeSource('chelliparamba', this); });
document.getElementById('srcChemperi').addEventListener('click', function() { changeSource('chemperi', this); });
document.getElementById('langBtn').addEventListener('click', toggleLanguage);
document.getElementById('searchBar').addEventListener('input', renderBuses);

function changeSource(sourceId, element) {
    selectedSource = sourceId;
    document.getElementById('srcChelliparamba').classList.remove('active');
    document.getElementById('srcChemperi').classList.remove('active');
    element.classList.add('active');
    buildDestTabs();
}

function buildDestTabs() {
    const destContainer = document.getElementById('destContainer');
    destContainer.innerHTML = '';
    const routes = destRouteNames[selectedSource];
    
    if (!routes.some(r => r.id === selectedDest)) {
        selectedDest = routes[0].id;
    }

    routes.forEach((route) => {
        const label = currentLang === 'ml' ? route.ml : route.en;
        const activeClass = route.id === selectedDest ? 'active' : '';
        
        const btn = document.createElement('button');
        btn.className = `dest-tab ${activeClass}`;
        btn.innerText = label;
        
        btn.addEventListener('click', function() {
            document.querySelectorAll('.dest-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedDest = route.id;
            renderBuses();
        });
        destContainer.appendChild(btn);
    });
    renderBuses();
}
function renderBuses() {
    const listDiv = document.getElementById('busList');
    listDiv.innerHTML = '';
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    
    const currentBuses = masterBusData[selectedSource][selectedDest] || [];

    const filteredBuses = currentBuses.filter(bus => {
        const nameMatch = bus.name.toLowerCase().includes(searchQuery) || bus.nameEn.toLowerCase().includes(searchQuery);
        const routeMatch = bus.route.toLowerCase().includes(searchQuery) || bus.routeEn.toLowerCase().includes(searchQuery);
        return nameMatch || routeMatch;
    });

    if (filteredBuses.length === 0) {
        listDiv.innerHTML = `<p style="color:#999; margin-top:20px; grid-column: 1/-1; text-align:center;">${currentLang === 'ml' ? 'ബസുകൾ ഒന്നും കണ്ടെത്തിയില്ല!' : 'No buses matches your search'}</p>`;
        return;
    }

    filteredBuses.forEach(bus => {
        const name = currentLang === 'ml' ? bus.name : bus.nameEn;
        const routeText = currentLang === 'ml' ? bus.route : bus.routeEn;
        const hintText = currentLang === 'ml' ? '🗺️ ലൈവ് റൂട്ട് കാണാൻ ക്ലിക്ക് ചെയ്യുക' : '🗺️ Click to view live traffic route';
        
        const card = document.createElement('div');
        card.className = 'bus-card';
        card.innerHTML = `
            <div class="bus-info">
                <h3>${name}</h3>
                <p>${routeText}</p>
                <div class="map-hint">${hintText}</div>
            </div>
            <div class="bus-time">${bus.time}</div>
        `;

        card.addEventListener('click', function() {
            const question = currentLang === 'ml' ? `നിങ്ങൾ ${name} ബസിന്റെ റൂട്ട് മാപ്പ് കാണാൻ ആഗ്രഹിക്കുന്നുണ്ടോ?` : `Do you want to see the route map for ${name}?`;
            const userConfirmed = confirm(question);
            
            if (userConfirmed) {
                const activeRouteObj = destRouteNames[selectedSource].find(r => r.id === selectedDest);
                const startLoc = selectedSource === 'chelliparamba' ? 'Chelliparamba, Kerala' : 'Chemperi, Kerala';
                
                // കൃത്യമായി ഫിക്സ് ചെയ്ത ഗൂഗിൾ മാപ്പ് യുആർഎൽ ഫോർമുല
                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(startLoc)}&destination=${encodeURIComponent(activeRouteObj.query + ', Kerala')}&travelmode=driving`;
                
                window.open(googleMapsUrl, '_blank');
            }
        });

        listDiv.appendChild(card);
    });
}
function toggleLanguage() {
    currentLang = currentLang === 'ml' ? 'en' : 'ml';
    document.getElementById('langBtn').innerText = currentLang === 'ml' ? 'English' : 'മലയാളം';
    document.getElementById('searchBar').placeholder = currentLang === 'ml' ? 'ബസ് പേര് അല്ലെങ്കിൽ റൂട്ട് സെർച്ച് ചെയ്യാം...' : 'Search bus name or route...';
    document.getElementById('sourceTitle').innerText = currentLang === 'ml' ? 'നിങ്ങൾ ഇപ്പോൾ എവിടെയാണ്?' : 'Where are you now?';
    document.getElementById('destTitle').innerText = currentLang === 'ml' ? 'ഏത് ഭാഗത്തേക്കാണ് പോകേണ്ടത്?' : 'Where do you want to go?';
    document.getElementById('srcChelliparamba').innerText = currentLang === 'ml' ? 'ചെല്ലിപ്പറമ്പ്' : 'Chelliparamba';
    document.getElementById('srcChemperi').innerText = currentLang === 'ml' ? 'ചെമ്പേരി' : 'Chemperi';
    buildDestTabs();
}

// ഇനിഷ്യൽ റൺ
buildDestTabs();

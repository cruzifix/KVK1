
    var configuration = {
        "search": {
            "proxy": location.protocol + "//zoeken.kvk.nl",
            "page": "search.ashx",
            "autoFill": "Address.ashx",
            "querystring": "?q=query",
            "enable": true,
            "keys": 1,
            "instantdelay": 250,
            "idealSearch" : '/ondernemen/producten-handelsregister/uittreksels/bestel-eenvoudig-een-gewaarmerkt-uittreksel/',
            "idealSearchDguPage" : '/dgu/'
        },

        "labels": {
            "hint": "Zoek op trefwoord, bedrijfsnaam, KvK-nummer, postcode of straat", 
            "routehint": "Uw adres",
            "cookiePrefferedCollection": "KvKSearchCollection",
			"cookieBarNotificationText": '<p>Om deze website te verbeteren en de inhoud af te stemmen op uw interesses, gebruiken we cookies.<br/> <a href="/privacy/" class="statement">Lees meer over ons privacybeleid.</a> Geeft u ons toestemming om deze cookies te plaatsen?</p>',
			"cookieBarNotificationTextYes": "Ja, dat mag van mij",
			"cookieBarNotificationTextNo": "Nee, dat wil ik niet",
            "handelsregister": "Handelsregister",
            "evenementen": "Bijeenkomsten",
            "hallo": "Ervaringen ondernemers",
            "bestanden": "Documenten en formulieren",
            "corporate": "Informatie & advies",
            "subdossiernummer": "KvK- en subdossiernummer",
            "vestigingsnummer": "Vestigingsnummer"
        },
		
		"cookies": {
			"cookiePath" : ".kvk.nl",
			"enableTrackingCookieNotificationBar" : true
		},

        "paths": {
            "handelsregister": "/handelsregister/",
			"toegangscodeopvragen":"/handelsregister/toegangscode-opvragen/",
            "toegangscodeaanvragen":"/handelsregister/toegangscode-aanvragen/",
            "informatiebedrijven": "/informatie-over-bedrijven/",
            "productenhandelsregister": "/producten-handelsregister/",
            "bijeenkomsten": "/bijeenkomsten/",
            "search": "/zoek/"
        },

        "collections": {
            "handelsregister": "handelsregister",
            "evenementen": "evenementen",
            "hallo": "hallo",
            "bestanden": "bestanden",
            "corporate": "corporate",
            "alles": "alles"
        },

       "tags": {
            "amsterdam": "amsterdam",
            "brabant": "brabant",
            "centraal gelderland": "centraal gelderland",
            "den haag": "den haag",
            "gooi-, eem en flevoland": "gooi-, eem en flevoland",
            "limburg": "limburg",
            "midden nederland": "midden nederland",
            "noord-nederland": "noord-nederland",
            "noordwest-holland": "noordwest-holland",
            "oost nederland": "oost nederland",
            "rotterdam": "rotterdam",
            "zuid-west nederland": "zuidwest-nederland"
        },

        "url": {
            "localdomain": "http://www.kvk.nl/",
            "amsterdam": "/lokale-informatie/amsterdam/",
            "brabant": "/lokale-informatie/brabant/",
            "centraal_gelderland": "/lokale-informatie/centraal-gelderland/",
            "den_haag": "/lokale-informatie/den-haag/",
            "gooi_eem_flevoland": "/lokale-informatie/gooi-eem-en-flevoland/",
            "limburg": "/lokale-informatie/limburg/",
            "midden_nederland": "/lokale-informatie/midden-nederland/",
            "noord_nederland": "/lokale-informatie/noord-nederland/",
            "noordwest_holland": "/lokale-informatie/noordwest-holland/",
            "oost_nederland": "/lokale-informatie/oost-nederland/",
            "rotterdam": "/lokale-informatie/rotterdam/",
            "zuidwest_nederland": "/lokale-informatie/zuidwest-nederland/"
        },

        'kantorenkaart': {
            'standard': 'Toon dit kantoor standaard bij contact',
            'selected': 'Dit kantoor staat standaard bij contact',
            'route': 'praktische informatie (zoals parkeren, route, openbaar vervoer & dienstverlening).',
            'omgeving': 'Omgeving',
            '': ''
        },
		
		steleenvraag: {
			'gegevens van andere bedrijven': {
				region: 'landelijk',
				additionalFields: ["bedrijfsnaam", "kvknummer"]
			},
			'vragen over ondernemen': {
				region: 'regionaal', 
				fieldClass: 'region',
				requiredExtraFields: ["postcode"]
			},
			'betalen en facturen': {
				region: 'landelijk',
				additionalFields: ["bedrijfsnaam", "kvknummer"]
			},
			'inloggen en toegangscode': {
				region: 'landelijk',
				additionalFields: ["bedrijfsnaam", "kvknummer"]
			},
			'bestelling uittreksel, jaarrekening of ander product': {
				region: 'landelijk',
				additionalFields: ["bedrijfsnaam", "kvknummer"]
			},
			'wijziging binnen uw bedrijf, vereniging of stichting': { 
				region: 'regionaal', 
				fieldClass: 'region',
				requiredExtraFields: ["kvknummer", "postcode"]
			},
			'inschrijven handelsregister':{
				region: 'regionaal',
				fieldClass: 'region',
				requiredExtraFields: ["postcode"]
			}
		},

        'regex': {
            'bijeenkomstdatetimepattern': '^(?<year>\\d{2,4})-(?<month>\\d{1,2})-(?<day>\\d{1,2})-(?<hours>\\d{1,2})(?<min>\\d{1,2})$'
        }, 
        loginHandlerUrl: 'https://server.db.kvk.nl/wwwsrvu/html/loginHandler.html',
        loginRedirectUrl: '/handelsregister/zoekenframeset.asp?url=https://server.db.kvk.nl/tst-bin/rb/rbwww90@',
		bestedingsOverzichtUrl:  '/handelsregister/zoekenframeset.asp?url=https://server.db.kvk.nl/TST-BIN/RB/RBBSW01@',
        logoutRedirectUrl: '/uitgelogd',
        loggedInUserCookie: {
            name: "loggedInUser",
            options: {
                path: '/'
            }
        },
        logoutUser: {
            username: "uitloggen",
            password: "tjwmduvdk"
        }
    };
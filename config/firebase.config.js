export default {
	config: {
		apiKey: "AIzaSyCQuZoXusa7EqGQdCmmoQAi4DegvYs-GvY",
		authDomain: "easyword.firebaseapp.com",
		databaseURL: "https://easyword.firebaseio.com",
		projectId: "easyword",
		storageBucket: "easyword.appspot.com",
		messagingSenderId: "306976829495",
		appId: "1:306976829495:web:bc5ea0304a5644fbf7cfb2",
		measurementId: "G-0TJY810SB0"
	},
	services: {
		auth: {
			persistence: 'local',
			initialize: {
				onAuthStateChangedAction: 'onAuthStateChangedAction',
				subscribeManually: false,
			},
			ssr: true,
		},
		firestore: true,
		storage: true,
	},
};
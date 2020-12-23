import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const initAnalytics = () => {
  if (firebaseConfig.apiKey && firebase?.app && !firebase.apps?.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
};

export default initAnalytics;

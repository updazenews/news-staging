import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const newsConfig = {
  apiKey: process.env.NEXT_PUBLIC_NEWS_FIREBASE_API_KEY ?? 'AIzaSyDiRXSGIXw8lbbxx_jZk0VOyCzmt0rasLQ',
  authDomain: process.env.NEXT_PUBLIC_NEWS_FIREBASE_AUTH_DOMAIN ?? 'updaze-news.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_NEWS_FIREBASE_PROJECT_ID ?? 'updaze-news',
  storageBucket: process.env.NEXT_PUBLIC_NEWS_FIREBASE_STORAGE_BUCKET ?? 'updaze-news.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_NEWS_FIREBASE_MESSAGING_SENDER_ID ?? '360342332196',
  appId: process.env.NEXT_PUBLIC_NEWS_FIREBASE_APP_ID ?? '1:360342332196:web:732d9972e8d7f69a1209b1',
  measurementId: process.env.NEXT_PUBLIC_NEWS_FIREBASE_MEASUREMENT_ID ?? 'G-PHWVGJ3Q72'
};

const jobsConfig = {
  apiKey: process.env.NEXT_PUBLIC_JOBS_FIREBASE_API_KEY ?? 'AIzaSyCZSyty8XgrkBycReUHXzZZJgvajJMatJQ',
  authDomain: process.env.NEXT_PUBLIC_JOBS_FIREBASE_AUTH_DOMAIN ?? 'updaze-jobs.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_JOBS_FIREBASE_PROJECT_ID ?? 'updaze-jobs',
  storageBucket: process.env.NEXT_PUBLIC_JOBS_FIREBASE_STORAGE_BUCKET ?? 'updaze-jobs.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_JOBS_FIREBASE_MESSAGING_SENDER_ID ?? '208744900105',
  appId: process.env.NEXT_PUBLIC_JOBS_FIREBASE_APP_ID ?? '1:208744900105:web:84456f914b2ae57ee7fad8',
  measurementId: process.env.NEXT_PUBLIC_JOBS_FIREBASE_MEASUREMENT_ID ?? 'G-WM1KXZD6DL'
};

function getOrInitApp(name: string, config: FirebaseOptions): FirebaseApp {
  return getApps().some((app) => app.name === name) ? getApp(name) : initializeApp(config, name);
}

export const newsApp = getOrInitApp('updaze-news', newsConfig);
export const jobsApp = getOrInitApp('updaze-jobs', jobsConfig);

export const newsAuth = getAuth(newsApp);
export const jobsAuth = getAuth(jobsApp);
export const newsDb = getFirestore(newsApp);
export const jobsDb = getFirestore(jobsApp);

export const auth = newsAuth;
export const db = newsDb;

async function initAnalytics(app: FirebaseApp): Promise<Analytics | null> {
  if (typeof window === 'undefined') return null;
  const supported = await isSupported();
  return supported ? getAnalytics(app) : null;
}

export const newsAnalytics = initAnalytics(newsApp);
export const jobsAnalytics = initAnalytics(jobsApp);

export const sebenzaPortalUrl = process.env.NEXT_PUBLIC_SEBENZA_PORTAL_URL ?? 'https://updaze-jobs.web.app';

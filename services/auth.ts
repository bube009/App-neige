import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

export async function ensureAuth() {
  if (!auth.currentUser) await signInAnonymously(auth)
  return new Promise((resolve) => onAuthStateChanged(auth, (u) => u && resolve(u)))
}

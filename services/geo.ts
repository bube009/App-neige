import { Geolocation } from '@capacitor/geolocation'

export async function getCurrentPosition() {
  const perm = await Geolocation.requestPermissions()
  if (perm.location === 'granted') {
    const pos = await Geolocation.getCurrentPosition({ enableHighAccuracy: true })
    return { lat: pos.coords.latitude, lng: pos.coords.longitude }
  }
  throw new Error('Permission localisation refusée')
}

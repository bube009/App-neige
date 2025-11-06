<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>Conducteur</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" :disabled="running" @click="onStart">Démarrer tournée</ion-button>
      <ion-button expand="block" color="medium" :disabled="!running" @click="onPing">Envoyer ma position</ion-button>
      <ion-button expand="block" color="success" :disabled="!running" @click="onFinish">Terminer tournée</ion-button>

      <ion-list>
        <ion-item v-for="job in jobs" :key="job.id">
          <ion-label>
            <h2>{{ job.address }}</h2>
            <p>Statut: {{ job.status }}</p>
          </ion-label>
          <ion-button slot="end" :disabled="job.status==='done'" @click="complete(job.id)">Terminer</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonLabel } from '@ionic/vue'
import { ensureAuth } from '@/services/auth'
import { getCurrentPosition } from '@/services/geo'
import { startRun, pushDriverLocation, finishRun, markJobDone } from '@/services/api'

const running = ref(false)
const runId = ref<string | null>(null)
const driverId = ref<string>('driver-1') // à remplacer par l’ID auth
const jobs = ref<any[]>([
  { id: 'job-1', address: '12 Rue des Neiges', status: 'todo' },
  { id: 'job-2', address: '99 Av. du Froid', status: 'todo' },
])

onMounted(async () => { await ensureAuth() })

async function onStart() {
  runId.value = await startRun(driverId.value)
  running.value = true
}

async function onPing() {
  if (!runId.value) return
  const loc = await getCurrentPosition()
  await pushDriverLocation(runId.value, loc)
}

async function onFinish() {
  if (!runId.value) return
  await finishRun(runId.value)
  running.value = false
}

async function complete(jobId: string) {
  await markJobDone(jobId)
  jobs.value = jobs.value.map(j => j.id === jobId ? {...j, status:'done'} : j)
}
</script>

<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>Admin</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="r in runs" :key="r.id">
          <ion-label>
            <h2>Run {{ r.id }}</h2>
            <p>Status: {{ r.status }} – Dernier ping: {{ r.lastPingAt || 'n/a' }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue'
const runs = ref<any[]>([
  { id: 'run-abc', status: 'running', lastPingAt: '10:22' },
  { id: 'run-def', status: 'done', lastPingAt: '09:58' },
])
// TODO: brancher Firestore + filtre date
</script>

<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>Suivi client</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <div style="height: 340px; border:1px solid var(--ion-color-medium); display:flex; align-items:center; justify-content:center;">
        <p>Carte à intégrer (Google Maps / Leaflet). Afficher position du camion + ETA.</p>
      </div>
      <ion-item>
        <ion-label>Statut de votre passage</ion-label>
        <ion-badge :color="statusColor">{{ statusText }}</ion-badge>
      </ion-item>
      <ion-note>Vous recevrez une notification quand l’équipe entre dans votre rue.</ion-note>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonBadge, IonNote } from '@ionic/vue'

const statusText = ref('En route')
const statusColor = ref<'warning'|'success'|'primary'>('primary')
// TODO: Abonner ce composant à Firestore pour suivre `runs/{runId}.lastLoc`
</script>

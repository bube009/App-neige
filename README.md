# App-neige
Denaigement
deneigement-v1/
├─ src/
│  ├─ main.ts
│  ├─ router.ts
│  ├─ store/
│  │  └─ useAppStore.ts
│  ├─ services/
│  │  ├─ firebase.ts
│  │  ├─ auth.ts
│  │  ├─ geo.ts
│  │  └─ api.ts
│  ├─ pages/
│  │  ├─ DriverRunPage.vue        # Conducteur: démarrer/terminer tournée + upload photo
│  │  ├─ ClientMapPage.vue        # Client: voir position du camion + ETA
│  │  └─ AdminDashboardPage.vue   # Admin: liste, statut, preuves de passage
│  ├─ components/
│  │  ├─ JobCard.vue
│  │  └─ StatusChip.vue
│  └─ theme/variables.css
└─ capacitor.config.ts
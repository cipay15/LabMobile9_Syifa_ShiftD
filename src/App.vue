<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
    <TabsMenu v-if="showTabs" /> <!-- Menampilkan TabsMenu di halaman tertentu -->
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TabsMenu from '@/components/TabsMenu.vue'; // Import TabsMenu

// Mengakses rute aktif
const route = useRoute();

// Daftar rute yang tidak membutuhkan TabsMenu
const authRoutes = ['/', '/login'];

// Menentukan apakah TabsMenu perlu ditampilkan
const showTabs = computed(() => {
  return !authRoutes.includes(route.path);
});
</script>

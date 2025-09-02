<template>
  <div class="p-4 flex flex-column gap-4">
    <h1>🌞 PrimeVue no Nuxt (modo Light)</h1>

    <Button label="Clique para ver Toast" icon="pi pi-check" @click="showToast" />

    <Toast />
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'

const toast = useToast()

function showToast() {
  toast.add({
    severity: 'success',
    summary: 'Tudo certo!',
    detail: 'PrimeVue rodando em modo claro ✨',
    life: 3000
  })
}
</script>
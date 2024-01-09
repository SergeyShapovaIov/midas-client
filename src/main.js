import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import AddButton from '@/components/buttons/AddButton.vue'
import ConfirmationButton from '@/components/buttons/ConfirmationButton.vue'

const app = createApp(App)

app.component('add-button', AddButton)
app.component('confirm-button', ConfirmationButton)

app.use(createPinia())

app.mount('#app')

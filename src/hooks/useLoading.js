import { createApp } from 'vue'
import { Loading } from '../components/index'

export default function useLoading() {
    return {
        show: () => {
            const loading = document.getElementById('loading') || document.createElement('div') 
            loading.setAttribute('id', 'loading')
            document.body.append(loading)

            const app = createApp(Loading)
            app.mount(loading)
        },
        close: () => {
            const loading = document.getElementById('loading')
            if(loading) return loading.remove()
        }
    }
}
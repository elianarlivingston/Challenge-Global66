export default {
    get: (key) => {
        const data = localStorage.getItem(key)

        if(data) return JSON.parse(data)
    },
    set: (key, value) => {
        if(!key || !value) return
        
        localStorage.setItem(key, JSON.stringify(value))
    }
}
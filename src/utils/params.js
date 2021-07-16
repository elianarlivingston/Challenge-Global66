export default  {
    getParams: (url = '') => {
        const _URL= new URL(url)
        const URL_SEARCHPARAMS = _URL.searchParams
        const params = {}
        
        for (const [key, value] of URL_SEARCHPARAMS) {
            if(!value || !key) return

            params[key] = value
        }

        return params
    },
    setParams: (url = '', object = {}) => {
        const NEW_URL = new URL(url)

        if(typeof object !== 'object' || object === null) return url
        
        for (const key in object) {
            if(!object[key] || typeof object[key] !== 'string') return
            
            if(NEW_URL.searchParams.has(key)) {
                NEW_URL.searchParams.set(key, object[key])
            }

            NEW_URL.searchParams.append(key, object[key])
        }
        
        return NEW_URL.toString()
    }
}
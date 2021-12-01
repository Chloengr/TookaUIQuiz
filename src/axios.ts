import axios from 'axios'

export function jwtInterceptor() {
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('JWT_TOKEN')
        if (token && token !== '' && config && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
    
        return config
      },
      (error) => {
        console.log(error)
        return error
      }
    )

}

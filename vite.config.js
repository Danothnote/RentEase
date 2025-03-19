import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
    server: {
        cors: {
            origin: ['https://www.danosv.com/RentEase', 'http://localhost:5173'],
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type']
        },
        allowedHosts: ['www.danosv.com/RentEase']
    }
})
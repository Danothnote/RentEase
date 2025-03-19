import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
    server: {
        cors: {
            origin: ['https://rentease.danosv.com', 'http://localhost:5173'],
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type']
        },
        allowedHosts: ['rentease.danosv.com']
    }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      
      manifest: {
        name: "andev|Portfolio",
        short_name: "andev",
        desciption: "J.Andy Echevarria Contreras. Front-End Developer. A Developer Who Loves To Code.",
        theme_color: '#001120',
        icons: [
          {
            src: "/and-icon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable"
          },
          {
            src: "/and-icon.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,jpg,png,svg}']
      }
    })
  ],
})

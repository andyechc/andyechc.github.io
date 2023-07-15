import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      
      manifest: {
        name: "andev | Portfolio",
        short_name: "andev",
        description: "J.Andy Echevarria Contreras. Front-End Developer. A Developer Who Loves To Code.",
        theme_color: '#001120',
        background_color: '#001120',
        
        icons: [
          {
            src: "/and-icon.svg",
            type: "image/svg+xml",
            sizes:"512x512",
            purpose: "any maskable"
          },
          
          {
            src: "/and-icon.svg",
            type: "image/svg+xml",
            sizes:"192x192",
            purpose: "any maskable"
          },
        ]
      },
      
      workbox: {
        globPatterns: ['**/*.{js,css,html,jpg,png,svg}']
      }
    })
  ],
})

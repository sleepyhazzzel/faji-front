/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { mdi, aliases } from 'vuetify/iconsets/mdi-svg' 

// 中文語言包
import { zhHant } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi', // 指定 mdi 圖標集
    aliases, // 設定圖標別名
   sets: { mdi },  // 使用 SVG 而非 Webfont
  },
  theme: {
    themes: {
      light: {
        colors: {
          // primary: '#1867C0',
          // secondary: '#5CBBF6',
          third: '#F9C80E',
          forth: '#E67B21',
          fifth: '#31312D',
          sixth: '#244080',
          seventh: '#D92323',
          eigth: '#ffffff',
          ninth: '#3F000F'
        }
      }
    }
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant } // 中文字體引入
  },
  defaultAssets: {
    font: false, //  關閉預設字型載入
    icons: false  //確保不載入 Webfont
  },
})

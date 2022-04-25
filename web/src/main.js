// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/style/main.scss'

import DefaultLayout from '~/layouts/Default.vue'

import { pathToPage, slugByLocale } from './utils/localizedUrl'

// Import image url builder
import urlForImage from './utils/urlForImage'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.prototype.$pathToPage = pathToPage
  Vue.prototype.$slugByLocale = slugByLocale
  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
}

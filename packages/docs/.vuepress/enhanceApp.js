import RightMenuConfig from './config/right-menu'

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.mixin({
    data () {
      return {
        show: false,
      }
    },
    mounted() {
      import('vue-right-menu').then(module => {
        this.show = true
        Vue.use(module.default, (...arg) => RightMenuConfig(...arg, router))
      })
    },
  })
}

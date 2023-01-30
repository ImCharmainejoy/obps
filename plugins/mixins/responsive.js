/* 
REMINDER: THIS IS A SAMPLE IMPLEMENTATION ON HOW TO DO RESPONSIVE USING CSS + JAVASCRIPT
*/
export default {
  data: () => ({
    windowSize: {
      x: 0, // width
      y: 0 // height
    }
  }),
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  },
  computed: {
    height () {
      return this.windowSize.y
    },
    width () {
      return this.windowSize.x
    },
    toolbarOnly () {
      return ('height:' + (this.height - 60) + 'px;')
    },
    messageRow () {
      return ('height:' + (this.height - 130) + 'px;')
    },
    toolbarTabFooter () {
      return ('height:' + (this.height - 160) + 'px;')
    },
    toolbarTab () {
      return ('height:' + (this.height - 106) + 'px;')
    }
  }
}

<template>
  <div>
    <canvas 
      ref="signatureCanvas" 
      :width="width" 
      :height="height"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="stopDrawing"
    ></canvas>
    <br>
    <!-- <button @click="clearSignature">清除签名</button> -->
  </div>
</template>

<script>
export default {
  name: 'SignatureComponent',
  props: {
    width: {
      type: Number,
      default: 350
    },
    height: {
      type: Number,
      default: 150
    }
  },
  data() {
    return {
      isDrawing: false,
      context: null,
      lastX: 0,
      lastY: 0
    }
  },
  mounted() {
    this.context = this.$refs.signatureCanvas.getContext('2d')
    this.context.strokeStyle = '#000000'
    this.context.lineWidth = 2
    this.context.lineCap = 'round'
    this.context.lineJoin = 'round'
  },
  methods: {
    startDrawing(event) {
      this.isDrawing = true
      const { offsetX, offsetY } = this.getCoordinates(event)
      this.context.beginPath()
      this.context.moveTo(offsetX, offsetY)
      this.lastX = offsetX
      this.lastY = offsetY
    },
    draw(event) {
      if (!this.isDrawing) return
      const { offsetX, offsetY } = this.getCoordinates(event)
      this.context.lineTo(offsetX, offsetY)
      this.context.stroke()
      this.lastX = offsetX
      this.lastY = offsetY
    },
    stopDrawing() {
      this.isDrawing = false
    },
    clearSignature() {
      this.context.clearRect(0, 0, this.width, this.height)
    },
    handleTouchStart(event) {
      event.preventDefault()
      this.startDrawing(event.touches[0])
    },
    handleTouchMove(event) {
      event.preventDefault()
      this.draw(event.touches[0])
    },
    getCoordinates(event) {
      if (event.clientX) {
        const rect = this.$refs.signatureCanvas.getBoundingClientRect()
        return {
          offsetX: event.clientX - rect.left,
          offsetY: event.clientY - rect.top
        }
      } else {
        return {
          offsetX: event.pageX - this.$refs.signatureCanvas.offsetLeft,
          offsetY: event.pageY - this.$refs.signatureCanvas.offsetTop
        }
      }
    },
    // 新增方法：获取签名数据
    getSignatureData() {
      return this.$refs.signatureCanvas.toDataURL('image/png')
    },
    // 新增方法：检查签名是否为空
    isEmpty() {
      const blankCanvas = document.createElement('canvas')
      blankCanvas.width = this.width
      blankCanvas.height = this.height
      return this.$refs.signatureCanvas.toDataURL() === blankCanvas.toDataURL()
    }
  }
}
</script>

<style scoped>
canvas {
  border: 0.5px solid #999;
  touch-action: none;
}
</style>
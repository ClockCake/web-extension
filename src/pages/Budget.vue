<template>
<div class="container mx-auto flex flex-col justify-start items-start h-screen space-x-4">
    <img v-bind:src="image" alt="header" class="h-1/2 w-full">
    <div class="font-bold text-md text-222222 mt-4">确认签字</div>
    <p class="text-999999 text-xs mt-2">请在下方输写框内用正楷字体书写您的姓名，保持字迹清晰、完整。</p>
    <SignatureComponent class="mt-4" :width="signatureWidth" :height="signatureHeight"/>
  </div>
</template>

<script>
import SignatureComponent from '../components/Signature.vue';
export default {
  name: 'BudgetPage',
  data() {
    return {
        image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
        //屏幕宽度
        signatureWidth: window.innerWidth - 40,
        signatureHeight: 200
    }
  },
  components: {
    SignatureComponent
  },
 
  methods: {
    //保存签名 转换数据
    saveSignature() {
      const signatureComponent = this.$refs.signatureComponent
      if (!signatureComponent.isEmpty()) {
        const signatureData = signatureComponent.getSignatureData()
        // 在这里处理 signatureData，例如发送到服务器或保存到本地
        console.log('Signature data:', signatureData)
      } else {
        alert('请先签名')
      }
    }
  }
}
</script>

<style scoped>

</style>
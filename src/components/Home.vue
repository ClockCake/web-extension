<template>
    <div class="w-full min-h-screen">
        <ShaderBackground />
        <div class="container mx-auto">
            <h1 class="gradient-text font-bold text-3xl pt-8">{{ title }}</h1>
            <!-- gird 一行 4 列 -->
            <div class="grid grid-cols-4 gap-4 mt-8 mx-4">
                <div v-for="view in views" :key="view.title" class="bg-white p-4 rounded-lg border-2 border-gray-300 hover:border-blue-300">
                    <router-link :to="view.path">
                        <p class="text-center text-gray-800 font-bold text-xl b hover:text-blue-300">{{ view.title }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShaderBackground from './ShaderBackground.vue';
export default {
    name: 'HomePage',
    components: {
        ShaderBackground
    },
    data() {
        return {
        title: '极家汇 App Web 扩展页',
        views:[
            {
            title: '会员等级',
            path: '/level'
            },
            {
            title: '我的会员',
            path: '/my'
            },
            {
            title: '积分明细',
            path: '/integral'
            }
        ]
    }
  }
}
</script>

<style scoped>
.gradient-text {
  background-image: linear-gradient(
    to left,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #8b00ff
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s linear infinite;
  display: inline-block;
  position: relative;
}

.gradient-text::before {
  content: attr(data-text);
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    to left,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #8b00ff
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes shine {
  to {
    background-position: -200% center;
  }
}
</style>     
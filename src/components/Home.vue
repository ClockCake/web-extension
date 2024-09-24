<template>
    <div class="w-full min-h-screen bg-cover">
        <div class="container mx-auto">
            <h1 class="text-white opacity-70 font-bold text-3xl pt-8">{{ title }}</h1>
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
export default {
    name: 'HomePage',
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
</style>     
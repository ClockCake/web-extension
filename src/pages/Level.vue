<template>
    <div class="container mx-auto min-h-screen flex flex-col justify-star">
      <div class="bg-custom-gradient flex flex-row justify-start py-16 px-8 relative">
        <img src="../assets/logo-v.png" class="absolute top-0 right-0 z-10 h-full w-1/2" alt="v">
        <img v-bind:src="avatar" class="w-12 h-12 rounded-full" alt="avatar">
        <div class="flex flex-col justify-start items-start ml-4 w-full z-20">
            <div class="flex flex-row justify-start items-center">
                <p class="text-white font-bold ">{{ name }}</p>
                <img v-bind:src = "levelImage" class="w-12 h-5 ml-4" alt="level">
            </div>
            <div class="w-full bg-gray-500 rounded-full h-2 mt-2">
                <div class="bg-gradient-to-r from-FACEA3 to-FFEFD7 h-2 rounded-full" style="width: 65%"></div>
            </div>
            <div class="flex flex-row justify-between text-white font-bold text-xs mt-2 w-full">
                <div>还差{{ score }}积分可升级</div>
                <div>V.{{ level }}</div>
            </div>
         </div>
      </div>
      <div class="bg-white rounded-t-lg -mt-4 flex flex-col justify-center z-10">
        <p class="text-black font-bold mt-4 text-lg">会员特权</p>
        <!-- gird  一行 3 列-->
        <div class="grid grid-cols-3 gap-x-8 gap-y-4 my-4 mx-6 ">
            <div v-for="(memership, index) in memerships" :key="index" class="flex flex-col justify-center items-center">
                <img v-bind:src="memership.image" class="w-20 h-20" alt="level">
                <p class="text-black font-bold text-sm mt-2">{{ memership.title }}</p>
                <p class="text-gray-500 text-xs mt-1">{{ memership.desc }}</p>
            </div>
        </div>
      </div>
    </div>
</template>


<script>
export default{
    name: 'LevelPage',
    data(){
        return {
            avatar: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
            name: '极家汇',
            levelImage: require('../assets/level.png'),
            progress: 80,
            level: 2,
            score: 1000,
            memerships: [
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://image.itimes.me/i/2024/07/26/66a30d068028b.jpg',
                    title: '窗帘',
                    desc: '免费更换2扇窗纱',
                }
            ]

        }
    }
}
</script> 


<style scoped>
</style>
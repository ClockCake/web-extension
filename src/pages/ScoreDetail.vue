<template>
    <div class="container mx-auto flex flex-col justify-start min-h-full">
        <div class="flex flex-col justify-start items-start relative ">
            <img src="../assets/score-header.png" class="absolute h-full w-full" alt="header">
            <img src="../assets/logo-star.png" class="absolute right-0 bottom-0" alt="star">
             <div class="flex flex-row justify-start items-center mt-24 ml-4">
                <img src="../assets/logo-score.png" class="" alt="score">
                <p class="text-black text-lg mx-2 text-3xl font-bold">{{ currentScore }}</p>
             </div>
             <div class="text-gray-500 text-sm mt-1 ml-4">当前总积分</div>
        </div>
        <div class="bg-F8F8F8 w-full h-2 mt-4"></div>
        <!-- 列表-->
         <div class="flex flex-col justify-start items-start mx-4 mt-4">
            <p class="text-black font-bold text-md ">积分明细</p>
            <!-- 表头 -->
            <div class="flex flex-row justify-between items-center w-full mt-4">
                <!-- timeFilter 筛选弹窗 -->
                <TimeFilter :timeFilter="timeFilter" @filter-selected="handleFilterSelected" />
                <p class="inline-flex items-center  py-1 text-sm font-medium">
                    <span class="mr-1 text-222222">获得</span>
                    <span class="mr-2  text-CE9253">{{ goalScore }}</span>
                    <span class="mr-1 text-222222">使用</span>
                    <span class="text-999999">{{ usedScore }}</span>
                </p>
            </div>
            <!-- 表格 -->
            <div v-for="(item, index) in listData" :key="index" class="flex flex-col w-full">
                <div class="flex flex-row justify-between items-center mt-6 w-full">
                    <div class="flex flex-col justify-center items-start">
                    <p class="text-222222 text-sm">{{ item.title }}</p>
                    <p class="text-666666 text-xs mt-1">{{ item.time }}</p>
                    </div>
                    <p class="text-sm text-222222">{{ item.payOrGoal ? '-' : '+' }}{{ item.score }}</p>
                </div>
                <div class="w-full border-b border-solid border-gray-100 mt-4"></div>
            </div>
         </div>
    </div>
</template>

<script>
import TimeFilter from '../components/TimeFilter.vue';
export default{
    name: 'ScoreDetail',
    components: {
        TimeFilter
    },
    
    data() {
        return {
            currentScore: 213,
            timeFilter: [
                {
                    title: '全部',
                    value: 'all'
                },
                {
                    title: '本周',
                    value: 'week'
                },
                {
                    title: '本月',
                    value: 'month'
                },
                {
                    title: '本年',
                    value: 'year'
                }
            ],
            currentFilter: {},
            goalScore: 1000,
            usedScore:100,
            listData:[
                {
                    title: '兑换商品',
                    payOrGoal: false,  // true 为支出，false 为收入
                    score: 100,
                    time: '2021-01-01 12:00:00'
                },
                {
                    title: '做任务',
                    payOrGoal: true,  // true 为支出，false 为收入
                    score: 200,
                    time: '2021-01-01 13:00:00'
                },
                {
                    title: '下单',
                    payOrGoal: false,  // true 为支出，false 为收入
                    score: 100,
                    time: '2021-01-01 12:00:00'
                },
                {
                    title: '做任务',
                    payOrGoal: true,  // true 为支出，false 为收入
                    score: 200,
                    time: '2021-01-01 13:00:00'
                },
                {
                    title: '兑换商品',
                    payOrGoal: false,  // true 为支出，false 为收入
                    score: 100,
                    time: '2021-01-01 12:00:00'
                },
                {
                    title: '做任务',
                    payOrGoal: true,  // true 为支出，false 为收入
                    score: 200,
                    time: '2021-01-01 13:00:00'
                },
                {
                    title: '兑换商品',
                    payOrGoal: false,  // true 为支出，false 为收入
                    score: 100,
                    time: '2021-01-01 12:00:00'
                },
                {
                    title: '做任务',
                    payOrGoal: true,  // true 为支出，false 为收入
                    score: 200,
                    time: '2021-01-01 13:00:00'
                },
                {
                    title: '兑换商品',
                    payOrGoal: false,  // true 为支出，false 为收入
                    score: 100,
                    time: '2021-01-01 12:00:00'
                },
                {
                    title: '做任务',
                    payOrGoal: true,  // true 为支出，false 为收入
                    score: 200,
                    time: '2021-01-01 13:00:00'
                }
            ]
        }

    },
    created() {
    // 初始化当前选中项为默认值
    this.currentFilter = this.timeFilter[0];
    },
    methods: {
        handleFilterSelected(selected) {
        this.currentFilter = selected;
        console.log('选中的筛选项:', selected.title);
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <div class="relative inline-block text-left">
      <button @click="toggleDropdown" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
        {{ selected.title }}
        <svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
  
      <!-- Dropdown menu -->
      <div v-if="isOpen"  class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a
            v-for="(item, index) in timeFilter"
            :key="index"
            href="#"
            @click.prevent="selectItem(item)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            role="menuitem"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimeFilter',
    props: {
      timeFilter: {
        type: Array,
        required: true
      },
      defaultValue: {
        type: String,
        default: 'all'
      }
    },
    data() {
      return {
        isOpen: false,
        selected: {}
      };
    },
    created() {
      // Set default selected item based on defaultValue prop
      const defaultItem = this.timeFilter.find(item => item.value === this.defaultValue) || this.timeFilter[0];
      this.selected = defaultItem;
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectItem(item) {
        this.selected = item;
        this.isOpen = false;
        this.$emit('filter-selected', item);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add transition for dropdown */
  </style>
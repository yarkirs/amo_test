<template>
  <div class="relative">
    <button
      class="min-w-48 bg-gray-200 text-gray-700 border border-gray-400 px-4 py-2 rounded-md
       flex justify-between items-center w-full"
      @click="openDropdown()"
    >
      <div class="">
        {{ textButton }}
      </div>
      <svg
        v-if="options.length"
        class="arrow"
        :class="isOpen ? 'arrow-up' : ''"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10l5 5 5-5H7z"
          fill="#4A5568"
        />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute left-0 mt-2 w-full bg-white border border-gray-400 rounded-md z-10"
    >
      <ul class="py-1">
        <li
          v-for="(option, idx) in options"
          :key="`${option}_${idx}`"
          class="pr-4 pl-2 py-2 hover:bg-gray-100 cursor-pointer"
          @click="selectOption(option)"
        >
          <div class="flex items-center">
            <svg
              v-if="option === selected"
              class="text-center"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                fill="#4A5568"
              />
            </svg>
            <div class="ml-1.5">
              {{ option }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from 'vue';

const emit = defineEmits(['select']);
const props = defineProps({
  options: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});

const selected = ref<string>('');
const isOpen = ref<boolean>(false);

const textButton = computed(() => {
  if (!props.options.length) {
    return 'Список пуст';
  }

  return selected.value || props.options[0];
});
const openDropdown = () => {
  if (props.options?.length) {
    isOpen.value = !isOpen.value;
  }
};
const selectOption = (option: string) => {
  selected.value = option;
  isOpen.value = false;

  emit('select', option);
};
</script>

<style scoped>
.arrow {
  transition: transform 0.3s ease;
}

.arrow-up {
  transform: rotate(180deg);
}
</style>


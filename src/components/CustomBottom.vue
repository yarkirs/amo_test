<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['click']);
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() => [
  !props.disabled
    ? 'bg-blue-500 text-white border-blue-500 bold'
    : 'bg-gray-200 text-gray-600 border-gray-200 bold',
]);

const onClick = () => {
  if (!props.loading && !props.disabled) {
    emit('click');
  }
};
</script>

<template>
  <button
    class="transition ease-in-out py-2 px-4 rounded
     duration-150 font-bold focus:outline-none
     relative inline-flex items-center justify-center"
    :class="buttonClass"
    @click="onClick()"
  >
    <slot v-if="!loading">
      Button
    </slot>
    <template v-else>
      <svg
        class="animate-spin h-5 w-5 text-white absolute"
        :class="disabled ? 'text-blue-500' : 'text-white'"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2
           5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </template>
  </button>
</template>

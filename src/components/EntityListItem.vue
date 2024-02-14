<template>
  <div
    class="item-container p-4 m-2
   bg-white rounded-lg shadow border-b-blue-400 hover:shadow-xl transition-shadow duration-200 ease-in-out
   transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
  >
    <div class="text-md">
      Имя сущности: {{ props.name || 'Не заполнено' }}
    </div>
    <div class="text-sm text-sky-500">
      ID сущности: {{ props.entityId }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  name: {
    type: String as PropType<string>,
    default: '',
  },
  entityId: {
    type: [String, Number] as PropType<string|number>,
    default: 0,
  },
});
</script>

<style scoped>
.item-container {
  transition: all 0.1s ease-in-out;
}
</style>

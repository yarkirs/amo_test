<script setup lang="ts">
import DropDown from '@/components/DropDown.vue';
import CustomBottom from '@/components/CustomBottom.vue';
import { computed, onMounted, ref } from 'vue';
import EntityListItem from '@/components/EntityListItem.vue';
import ENTITYTYPE from '@/types';
import ApiController from '@/helpers/ApiController';

const dropDownOptions: string[] = [
  'Не выбрано',
  'Сделка',
  'Контакт',
  'Компания',
];
const selectedOption = ref<string>('');
const loading = ref<boolean>(false);
const disabledButton = computed<boolean>(() => (!selectedOption.value || selectedOption.value === 'Не выбрано'));
const list = ref([]);
const createEntity = async () => {
  if (selectedOption.value === 'Не выбрано' || !selectedOption.value) {
    return null;
  }

  loading.value = true;

  const convertValue: ENTITYTYPE = (function converter() {
    switch (selectedOption.value) {
      case 'Сделка': return ENTITYTYPE.LEAD;
      case 'Контакт': return ENTITYTYPE.CONTACTS;
      case 'Компания': return ENTITYTYPE.COMPANIES;
      default: return '';
    }
  }());

  try {
    const result = await ApiController.createEntity(convertValue);

    list.value = result;
  } catch (e) {

  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="w-96 h-96 bg-white scroll-m-28 border border-b-blue-400 shadow-2xl rounded">
    <div class="flex  p-10">
      <DropDown
        :options="dropDownOptions"
        @select="selectedOption = $event"
      />
      <CustomBottom
        class=" ml-3"
        :disabled="disabledButton"
        :loading="loading"
        @click="createEntity()"
      >
        Создать
      </CustomBottom>
    </div>
    <div
      v-if="list.length"
      class=" overflow-auto h-52 m-2"
    >
      <EntityListItem
        v-for="el in list"
        :key="el.id"
        :entity-id="el.id"
        :name="el.name"
      />
    </div>
    <div
      v-else
      class="text-center p-3"
    >
      Список пуст
    </div>
  </div>
</template>

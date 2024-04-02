<template>
  <img :src="props.svg" class=".icon" />
</template>

<script setup>
const props = defineProps({
  svg: {
    type: String,
    required: true
  },
  tailwindClass: {
    type: String,
    default: 'h-6 w-6'
  }
})
</script>

<style scoped>

.icon {
  width: 25px;
  height: 25px;
}

</style>

<!-- 

import Icon from '@/components/icons/Icon.vue';
import checkCircle from '@/assets/svgs/check-circle.svg';

const icon = h(Icon, {
    svg: checkCircle
});

<Button type="button" hierarcy="primary" size="base" text="Icon Left" @click="setIconLeft" />

-->

<script setup lang="ts">
import Job from '../types/Job';
import Card from './Card.vue';

defineProps<{
  jobs: Job[]
}>()

</script>

<template>
  <div v-for="job in jobs" :key="job.id">
    <Card>
      {{ job.title }}
      {{ job.location }}
      {{ job.salary }}
    </Card>
  </div>
</template>
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
      <h1 class="mb-3 text-4xl font-bold capitalize">{{ job.title }} In {{ job.location }}</h1>
      <span class="mb-3 text-lg text-primary">{{ job.salary }}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta sed a possimus nulla reiciendis voluptas
        sequi? Dolorem sunt iste laborum odit esse possimus. Quo aliquid fugit quas nesciunt laboriosam perferendis
        dolorum? Dolor incidunt delectus ullam odio eveniet nostrum blanditiis a tenetur, voluptatum excepturi! Delectus
        architecto deserunt corrupti distinctio veritatis!</p>
    </Card>
  </div>
</template>
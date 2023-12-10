<script setup lang="ts">
import { ref } from 'vue'
import Job from '../types/Job';
import JobList from '../components/JobList.vue';
import OrderTerm from '../types/OrderTerm';
import Button from '../elements/Button.vue'

const jobs = ref<Job[]>([
  { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
  { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
  { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
  { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
  { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
])

const order = ref<OrderTerm>('title')
const handleClick = (term: OrderTerm) => {
  order.value = term
}

</script>

<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="flex items-center justify-center mb-12 text-center">
      <img src="../assets/logo.png" alt="logo" class="w-36 h-w-36">
      <h1 class="mt-4 text-6xl font-bold">Clash<span class="text-primary">Quest</span></h1>
    </div>
    <div class="flex items-center justify-center mb-10">
      <Button class="mr-2" @click=" handleClick('title')">Order By
        Title</Button>
      <Button class="mr-2" @click="handleClick('location')">Order By Location</Button>
      <Button class="mr-2" @click="handleClick('salary')">Order By Salary</Button>
    </div>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>
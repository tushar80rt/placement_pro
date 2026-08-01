<script lang="ts">
  import { page } from '$app/stores'; 
  import LearningDetail from '$lib/components/placement/LearningDetail.svelte'; 
  import { aptitudeQuestions } from '$lib/data/catalogs'; 
  
  $: slug = $page.params.slug || '';
  $: questions = aptitudeQuestions.filter(q => q.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);
  $: topic = questions.length > 0 ? questions[0].topic : slug;
  $: category = {
    slug,
    title: topic,
    icon: 'target',
    theory: 'Master the core concepts of ' + topic + ' through dedicated practice.',
    concepts: [], formulas: [], examples: [],
    questions: questions
  };
</script>
<LearningDetail {category} backPath="/aptitude"/>

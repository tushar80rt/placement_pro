<script lang="ts">
  import { page } from '$app/stores'; 
  import LearningDetail from '$lib/components/placement/LearningDetail.svelte'; 
  import { reasoningQuestions } from '$lib/data/catalogs'; 
  
  let slug = $derived($page.params.slug || '');
  let questions = $derived(reasoningQuestions.filter(q => q.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug));
  let topic = $derived(questions.length > 0 ? questions[0].topic : slug);
  let category = $derived({
    slug,
    title: topic,
    icon: 'puzzle',
    theory: 'Master the core concepts of ' + topic + ' through dedicated practice.',
    concepts: [], formulas: [], examples: [],
    questions: questions
  });
</script>

<LearningDetail {category} backPath="/reasoning"/>

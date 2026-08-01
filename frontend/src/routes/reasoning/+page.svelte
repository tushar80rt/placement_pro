<script lang="ts">
  import LearningCatalog from '$lib/components/placement/LearningCatalog.svelte'; 
  import { reasoningQuestions } from '$lib/data/catalogs';

  const topics = Array.from(new Set(reasoningQuestions.map(q => q.topic)));
  const categories = topics.map(topic => ({
    slug: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: topic,
    icon: 'puzzle',
    theory: 'Master the core concepts of ' + topic + ' through dedicated practice.',
    concepts: [], formulas: [], examples: [],
    questions: reasoningQuestions.filter(q => q.topic === topic)
  }));
</script>
<LearningCatalog title="Logical Reasoning" subtitle="Build speed and clarity across reasoning patterns that appear in screening tests." categories={categories} basePath="/reasoning"/>

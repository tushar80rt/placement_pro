<script lang="ts">
  import LearningCatalog from '$lib/components/placement/LearningCatalog.svelte'; 
  import { aptitudeQuestions } from '$lib/data/catalogs';

  const topics = Array.from(new Set(aptitudeQuestions.map(q => q.topic)));
  const categories = topics.map(topic => ({
    slug: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: topic,
    icon: 'target',
    theory: 'Master the core concepts of ' + topic + ' through dedicated practice.',
    concepts: [], formulas: [], examples: [],
    questions: aptitudeQuestions.filter(q => q.topic === topic)
  }));
</script>
<LearningCatalog title="Quantitative Aptitude" subtitle="Master shortcuts and first principles across practice questions." categories={categories} basePath="/aptitude"/>

<script lang="ts">
  import LearningCatalog from '$lib/components/placement/LearningCatalog.svelte'; 
  import { technicalMCQs } from '$lib/data/catalogs';

  const topics = Array.from(new Set(technicalMCQs.map(q => q.topic)));
  const categories = topics.map(topic => ({
    slug: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title: topic,
    icon: 'terminal',
    theory: 'Master the core concepts of ' + topic + ' through dedicated practice.',
    concepts: [], formulas: [], examples: [],
    questions: technicalMCQs.filter(q => q.topic === topic)
  }));
</script>
<LearningCatalog title="Technical MCQs" subtitle="Verify your fundamentals across OS, DBMS, OOP, and Networking." categories={categories} basePath="/mcq"/>

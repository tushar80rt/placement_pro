<script lang="ts">
  // URL of the AI Engineer interview questions list (replace with actual URL)
  const questionsUrl = "https://www.example.com/100-must-prepare-ai-engineer-interview-questions-2026";
</script>

<style>
  .iframeContainer {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 */
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>

<div class="iframeContainer">
  <iframe src={questionsUrl} loading="lazy" title="AI Engineer Interview Questions"></iframe>
</div>

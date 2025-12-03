<script lang="ts">
	const { children, data } = $props();
</script>

<h2>Date: {data.date}</h2>

{@render children()}

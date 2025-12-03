<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<p>{page.url.pathname}</p>

<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/counter">Counter</a></li>
	<li><a href="/profile/user">Profile</a></li>
</ul>

{@render children()}

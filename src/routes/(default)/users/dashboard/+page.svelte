<script lang="ts">
	import { goto } from '$app/navigation';

	const { data } = $props();

	async function logout() {
		await fetch('/api/users/current', { method: 'DELETE' });
		await goto('/users/login');
	}
</script>

<h1>Hello {data.user}</h1>
<button onclick={logout}>Logout</button>

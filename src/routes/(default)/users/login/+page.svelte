<script lang="ts">
	import { goto } from '$app/navigation';

	let user = $state('');

	async function login(e: Event) {
		e.preventDefault();

		const response = await fetch('/api/users/login', {
			method: 'POST',
			body: JSON.stringify({ user })
		});

		if (response.ok) {
			await goto('/users/dashboard');
		}
	}
</script>

<form>
	<label for="user">User</label>
	<input type="text" name="user" id="user" bind:value={user} />
	<button onclick={login}>Login</button>
</form>

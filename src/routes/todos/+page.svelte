<script lang="ts">
	const { data } = $props();
</script>

<form method="post">
	<label for="todo">
		Todo:
		<input type="text" name="todo" id="todo" />
	</label>
	<button type="submit">Add</button>
</form>

<ul>
	{#each data.todos as todo}
		<li>{todo.id} - {todo.name}</li>
	{/each}
</ul>

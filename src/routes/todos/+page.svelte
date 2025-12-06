<script lang="ts">
	const { data } = $props();
</script>

<form action="?/add" method="post">
	<label for="todo">
		Todo:
		<input type="text" name="todo" id="todo" />
	</label>
	<button type="submit">Add</button>
</form>

<ul>
	{#each data.todos as todo}
		<li>
			{todo.id} - {todo.name}
			<form action="?/delete" method="post" style="display: inline-block">
				<input type="hidden" name="id" value={todo.id} />
				<button type="submit">Delete</button>
			</form>
		</li>
	{/each}
</ul>

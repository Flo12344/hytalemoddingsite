<script lang="ts">
	import './layout.css';
	
	let { children } = $props();
</script>

<main class="w-screen min-h-height">
	{@render children()}
</main>

<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/Sidebar.svelte';
	import Header from '$lib/Header.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-gray-50 flex">
	<Sidebar />
	
	<main class="flex-1 flex flex-col overflow-hidden ml-0 md:ml-64">
		<Header />
		
		<div class="flex-1 overflow-y-auto p-6">
			{@render children?.()}
		</div>
	</main>
</div>

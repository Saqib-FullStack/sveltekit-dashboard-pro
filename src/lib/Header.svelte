<script>
  export let title = 'Overview';
  export let buttonText = 'New Report';
</script>

<header class="bg-white shadow p-4 sticky top-0 z-10">
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-semibold text-gray-800">{title}</h1>
    <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
      {buttonText}
    </button>
  </div>
</header>

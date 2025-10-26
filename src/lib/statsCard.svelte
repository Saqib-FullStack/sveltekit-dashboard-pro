<script>
    import { dashboardData } from '$lib/stores/dashboardStore';

    // 💡 Props: Title, Icon (optional), aur kis 'key' ka data dikhana hai
    export let title;
    export let valueKey;
    export let prefix = ''; // Jaise '$' ya ''
    export let suffix = ''; // Jaise '%' ya ''
    
    // Store ko Svelte ke $ syntax se use karne ke liye export zaroori nahi hai
    // $dashboardData se hum store ki current value ko direct access kar sakte hain.
</script>

<div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <h3 class="text-sm font-medium text-gray-500 mb-2">{title}</h3>
    
    <p class="text-3xl font-bold text-gray-900">
        {prefix}{$dashboardData[valueKey].toLocaleString()}{suffix}
    </p>

    {#if valueKey === 'revenue'}
        <p class="mt-1 text-sm text-green-600 font-semibold">
            ▲ {$dashboardData.growthRate}%
        </p>
    {/if}
</div>
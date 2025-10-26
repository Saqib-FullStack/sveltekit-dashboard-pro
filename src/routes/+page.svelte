<!-- <script>
    import StatsCard from '$lib/StatsCard.svelte';
    import { dashboardData, updateData, activePeriod } from '$lib/stores/dashboardStore';
</script> -->

<script>
    import StatsCard from '$lib/StatsCard.svelte';
    import LineChart from '$lib/LineChart.svelte'; // 💡 New Component Import
    import { dashboardData, updateData, activePeriod } from '$lib/stores/dashboardStore';

    // Server se aaya hua data receive karein
    export let data; 
    
    // Store ko server se aaye data (data.stats) se initialize karein
    $: $dashboardData = data.stats; 
    
    // Ek variable mein initial posts ko store kar lete hain (agar zaroorat ho)
    const initialPosts = data.initialPosts; 
    
    console.log(`API fetched ${initialPosts.length} posts.`);

    // NOTE: Ab aapke buttons click karne par jo data updateData() function mein hai (mocked data),
    // woh data dikhega. Lekin page load par jo data dikhega, woh API se aayega.
</script>

<div class="flex space-x-3 mb-6">
    <button 
        on:click={() => updateData('30-days')}
        class="px-4 py-2 text-sm rounded-lg transition"
        class:bg-indigo-600={ $activePeriod === '30-days' }
        class:text-white={ $activePeriod === '30-days' }
        class:bg-white={ $activePeriod !== '30-days' }
        class:text-gray-700={ $activePeriod !== '30-days' }
    >
        Last 30 Days
    </button>
    <button 
        on:click={() => updateData('7-days')}
        class="px-4 py-2 text-sm rounded-lg transition"
        class:bg-indigo-600={ $activePeriod === '7-days' }
        class:text-white={ $activePeriod === '7-days' }
        class:bg-white={ $activePeriod !== '7-days' }
        class:text-gray-700={ $activePeriod !== '7-days' }
    >
        Last 7 Days
    </button>
</div>


<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatsCard title="Total Revenue" valueKey="revenue" prefix="$" />
    <StatsCard title="Total Sales" valueKey="sales" />
    <StatsCard title="New Customers" valueKey="customers" />
    <StatsCard title="Growth Rate" valueKey="growthRate" suffix="%" />
</div>


<div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Sales Trend Over Time</h3>
    <LineChart />
</div>


<p class="mt-8 text-lg font-medium text-gray-600">
    Data for: {$dashboardData.timePeriod}
</p>
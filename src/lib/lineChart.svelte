<script>
    import { onMount, onDestroy } from 'svelte';
    import { Chart, registerables } from 'chart.js';
    import { dashboardData } from '$lib/stores/dashboardStore';
    
    // Chart.js ko initialize karne ke liye registerables zaroori hai
    Chart.register(...registerables);

    let canvasElement; // HTML canvas element ko reference karega
    let chartInstance = null; // Chart object ko store karega
    
    // 💡 Chart Data: Hum is dummy data ko dynamic banane ke liye subscribe karenge
    let chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Time periods
        datasets: [{
            label: 'Sales Trend',
            data: [300, 500, 450, 700, 600, 850], // Initial dummy sales data
            borderColor: '#4f46e5', // Indigo-600 color
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(79, 70, 229, 0.1)' // Light indigo fill
        }]
    };

    // 💡 Svelte Lifecycle Function: Component load hone ke baad chalta hai
    onMount(() => {
        // 1. Chart ko initialize karein
        chartInstance = new Chart(canvasElement, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                // ... Baki options yahaan aayenge ...
            }
        });
    });

    // 💡 Svelte Store Subscription: Store mein change aane par chart update karein
    // Yeh Svelte ka reactive syntax hai jo Store ke change hone par chalta hai.
    $: {
        // Jab bhi $dashboardData change ho...
        if (chartInstance && $dashboardData.sales) {
            // Hum yahaan sirf ek data point change kar rahe hain as an example:
            // Actual revenue/sales ko line chart ke last point par daal rahe hain.
            const newSalesValue = $dashboardData.sales * 1.5; // Example dynamic value
            
            // Chart ke data ko update karein
            chartInstance.data.datasets[0].data.pop(); // Last point hatao
            chartInstance.data.datasets[0].data.push(newSalesValue); // Naya point add karo
            
            // Chart ko re-render karein
            chartInstance.update();
            
            console.log("Chart Updated with new data from store!");
        }
    }

    // 💡 Cleanup: Jab component hataya jaaye toh chart ko destroy kar dein
    onDestroy(() => {
        if (chartInstance) {
            chartInstance.destroy();
        }
    });
</script>

<div class="h-80 w-full">
    <canvas bind:this={canvasElement}></canvas>
</div>
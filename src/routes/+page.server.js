/**
 * Load function: SvelteKit server par chalta hai aur data fetch karta hai.
 * Yahan se hum kisi bhi external API ko call kar sakte hain.
 */
import { error } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function load() {
    // API Call ko try...catch block mein wrap karein
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Agar response OK nahi hai (jaise 404 ya 500 error), SvelteKit ka 'error' throw karein
        if (!res.ok) {
            // Server error ko throw karna zaroori hai
            throw error(res.status, 'Failed to fetch dashboard data from external API.');
        }
        
        const posts = await res.json();
        
        // Data Transformation (jaisa pehle tha)
        const totalPosts = posts.length;
        const uniqueUsers = new Set(posts.map(p => p.userId)).size;
        
        const transformedStats = {
            revenue: totalPosts * 500,
            sales: totalPosts,
            customers: uniqueUsers,
            growthRate: 15.8,
            timePeriod: 'Data from JSONPlaceholder API'
        };
        
        // Success par data return karein
        return {
            stats: transformedStats,
            initialPosts: posts
        };

    } catch (e) {
        // Network errors ya upar throw kiye gaye errors ko catch karein
        console.error('Data loading error:', e);
        // User ko batane ke liye ek user-friendly error throw karein
        throw error(500, 'Could not load the dashboard data. Please check network connection.');
    }
}
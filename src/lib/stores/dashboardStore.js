
// MOCK DATA

// import { writable } from 'svelte/store';

// // 💡 Initial Dashboard Data (Mock Data)
// const initialData = {
//     revenue: 45230,
//     sales: 1250,
//     customers: 84,
//     growthRate: 14.5, // 14.5%
//     timePeriod: 'Last 30 Days'
// };

// // 1. Writable Store for the Main Data
// export const dashboardData = writable(initialData);

// // 2. Writable Store for the Filter (Time Period)
// export const activePeriod = writable('30-days');

// // 3. Function to simulate data update based on a filter
// export function updateData(period) {
//     let newData;
    
//     // Fake logic to change data based on filter
//     if (period === '7-days') {
//         newData = {
//             revenue: 10500,
//             sales: 290,
//             customers: 25,
//             growthRate: 3.2,
//             timePeriod: 'Last 7 Days'
//         };
//     } else { // '30-days' (default)
//         newData = initialData;
//     }

//     // Update both the data and the active filter
//     dashboardData.set(newData);
//     activePeriod.set(period);
// }




// REAL API CALL BACKEND HANDLING
import { writable } from 'svelte/store';

// ⚠️ Initial Data hata diya gaya hai.
const initialData = {}; 

// Store ko ab khaali data se shuru kiya gaya hai.
export const dashboardData = writable(initialData);

export const activePeriod = writable('30-days');

// updateData function wahi rahega, sirf yeh naya data set karega:
export function updateData(period) {
    let newData;
    
    // Fake logic to change data based on filter
    if (period === '7-days') {
        newData = {
            revenue: 10500,
            sales: 290,
            customers: 25,
            growthRate: 3.2,
            timePeriod: 'Last 7 Days'
        };
    } else { // '30-days' (default)
        // 💡 NOTE: Is hisse mein woh data aayega jo aapne pehle server se load kiya hoga.
        // Abhi hum hardcoded data daal rahe hain jo real-world mein store mein pehle se maujood hoga.
        newData = {
            revenue: 45230,
            sales: 1250,
            customers: 84,
            growthRate: 14.5, 
            timePeriod: 'Last 30 Days'
        };
    }

    dashboardData.set(newData);
    activePeriod.set(period);
}
async function fetchWithFallback() {
    const primary = 'https://jsonplaceholder.typicode.com/todos1'; // invalid
    const fallback = 'https://jsonplaceholder.typicode.com/todos'; // valid

    console.log('Sending request to primary:', primary);

    try {
        const res = await fetch(primary);
        console.log('Primary response status:', res.status);

        if (res.status === 200) {
            const json = await res.json();
            console.log('Primary succeeded, first 3 items:', Array.isArray(json) ? json.slice(0, 3) : json);
            return json;
        }

        // treat non-200 as failure and fall back
        console.warn(`Primary returned status ${res.status}, falling back to ${fallback}`);
    } catch (err) {
        // network error (DNS, connection, etc.)
        console.warn('Primary request failed:', err.message || err);
    }

    // try fallback
    console.log('Sending request to fallback:', fallback);
    try {
        const res2 = await fetch(fallback);
        console.log('Fallback response status:', res2.status);

        if (res2.status === 200) {
            const json = await res2.json();
            console.log('Fallback succeeded, first 3 items:', Array.isArray(json) ? json.slice(0, 3) : json);
            return json;
        }

        // fallback returned non-200 -> treat as terminal error
        const bodyText = await res2.text().catch(() => '<unreadable body>');
        throw new Error(`Both primary and fallback failed. Fallback status: ${res2.status}. Body: ${bodyText}`);
    } catch (err) {
        // either fetch threw or we re-threw above
        if (err instanceof Error) {
            throw err;
        }
        throw new Error('Both primary and fallback requests failed: ' + String(err));
    }
}

async function initializeTestData() {
    try {
        await fetchWithFallback();
    } catch (e) {
        console.error('Initialization failed:', e.message || e);
    }
}

(async () => {
    // call anonymous async function to demonstrate behavior
    await initializeTestData();
/*     await initializeTestData();
    await initializeTestData();
    await initializeTestData(); */
})();

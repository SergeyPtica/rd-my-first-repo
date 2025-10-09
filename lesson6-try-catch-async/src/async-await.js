async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        console.log('Response:', response, 'ok:', response.ok, 'status:', response.status);
        if (!response.ok) {
            const bodyText = await response.text();
            const err = new Error('Network response was not ok: ' + response.status);
            err.status = response.status;
            err.body = bodyText;
            throw err;
        }
        const json = await response.json();
        return processData(json);
    } catch (err) {
        console.error('Fetch error:', err);
        throw err;
    }
}

function processData(json) {
    console.log('Processing JSON (first 5 items):');
    console.log(Array.isArray(json) ? json.slice(0, 5) : json);
    return Array.isArray(json) ? json.map(item => ({ id: item.id, title: item.title })) : json;
}

getData()
    .then(result => {
        console.log('Processed result (mapped, first 5):', Array.isArray(result) ? result.slice(0, 5) : result);
    })
    .catch(() => {
    /* помилка вже залогована в getData */
    });


function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log('Response:', response, 'ok:', response.ok, 'status:', response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
        })
        .then(json => processData(json))
        .catch(err => {
            console.error('Fetch error:', err);
            throw err;
        });
}

function processData(json) {
    console.log('Processing JSON (first 5 items):');
    console.log(Array.isArray(json) ? json.slice(0, 5) : json);
    return Array.isArray(json) ? json.map(item => ({ id: item.id, title: item.title })) : json;
}

getData()
    .then(result => {
        console.log('Processed result (mapped):', result.slice(0, 5));
    })
    .catch(() => {
    /* помилка вже залогована у getData */
    });

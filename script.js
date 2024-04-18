
function saveEntry() {
    const date = document.getElementById('date').value;
    const entry = document.getElementById('entry').value;

    if (date && entry) {
        const entryObject = { date, entry };
        let entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.push(entryObject);
        localStorage.setItem('entries', JSON.stringify(entries));
        displayEntries();
        clearForm();
    } else {
        alert('請輸入日期與內容');
    }
}

function displayEntries() {
    const entriesList = document.getElementById('entriesList');
    entriesList.innerHTML = '';
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    if (entries.length === 0) {
        entriesList.innerHTML = '目前無內容';
        return;
    }

    entries.forEach(entry => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${entry.date}</strong>: ${entry.entry}`;
        entriesList.appendChild(div);
    });
}


function clearForm() {
    document.getElementById('date').value = '';
    document.getElementById('entry').value = '';
}


displayEntries();

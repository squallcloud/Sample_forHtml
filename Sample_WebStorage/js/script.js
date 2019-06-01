function saveLocalStorage() {
    var array = [];
    var obj = {
        'キー1': '値1',
        'キー2': '値2'
    };
    array.push(obj);

    var setjson = JSON.stringify(obj);
    localStorage.setItem('キー', setjson);
}

function clearLocalStorage() {
    localStorage.clear();
}

function getLocalStorage() {
    var data = localStorage.getItem('キー');
    console.log(data);
    var obj = JSON.parse(data);
    return obj;
}
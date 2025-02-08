// 取得資料，初始化陣列

function getArrayFromLocalStorage(key, defaultValue = []) {
    try {
        let data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.warn(`localStorage 讀取錯誤: ${key}, 已重設為預設值`);
        return defaultValue;
    }
}

// 取得資料（確保是陣列）
let key1 = getArrayFromLocalStorage('key1');
let key2 = getArrayFromLocalStorage('key2');
let key3 = getArrayFromLocalStorage('key3');
let key4 = JSON.parse(localStorage.getItem('key4')) || 0;

// 結帳功能
function f50() {
    let f50t = prompt('杯數');
    let f50s = Number(f50t) * 50;
    key1.push(Number(f50t));
    key2.push(Number(f50s));
    localStorage.setItem('key1', JSON.stringify(key1));
    localStorage.setItem('key2', JSON.stringify(key2));
    od06();
    document.getElementById('out').innerText = `50。杯數：${f50t} 金額：${f50s} 已登記。`;
    sum();
}

function f60() {
    let f50t = prompt('杯數');
    let f50s = Number(f50t) * 60;
    key1.push(Number(f50t));
    key2.push(Number(f50s));
    localStorage.setItem('key1', JSON.stringify(key1));
    localStorage.setItem('key2', JSON.stringify(key2));
    od06();
    document.getElementById('out').innerText = `60。杯數：${f50t} 金額：${f50s} 已登記。`;
    sum();
}

function f70() {
    let f50t = prompt('杯數');
    let f50s = Number(f50t) * 70;
    key1.push(Number(f50t));
    key2.push(Number(f50s));
    localStorage.setItem('key1', JSON.stringify(key1));
    localStorage.setItem('key2', JSON.stringify(key2));
    od06();
    document.getElementById('out').innerText = `70。杯數：${f50t} 金額：${f50s} 已登記。`;
    sum();
}

function other() {
    let os = prompt('輸入本次交易其他總金額（勿輸入單價！）');
    key3.push(Number(os));
    localStorage.setItem('key3', JSON.stringify(key3));
    sum();
}

// 計算總額
function sum() {
    let sumk1 = key1.reduce((acc, curr) => acc + curr, 0);
    let sumk2 = key2.reduce((acc, curr) => acc + curr, 0);
    let sumk3 = key3.reduce((acc, curr) => acc + curr, 0);
    let sumk4 = sumk2 + sumk3;

    key4 = sumk4;

    localStorage.setItem('key1', JSON.stringify(key1));
    localStorage.setItem('key2', JSON.stringify(key2));
    localStorage.setItem('key3', JSON.stringify(key3));
    localStorage.setItem('key4', JSON.stringify(key4));
}

// 查看統計
function check() {
    let sumk1 = key1.reduce((acc, curr) => acc + curr, 0);
    let sumk2 = key2.reduce((acc, curr) => acc + curr, 0);
    let sumk3 = key3.reduce((acc, curr) => acc + curr, 0);
    let sumk4 = sumk2 + sumk3;
    od06();
    document.getElementById('out').innerText = `杯數：${sumk1}，飲料總額：${sumk2}，其他總額：${sumk3}，總營業額：${sumk4}`;
}

// 刪除統計
function del() {
    if (confirm('確定要刪除統計資料？（無法復原）')) {
        key1 = [];
        key2 = [];
        key3 = [];
        key4 = 0;
        localStorage.removeItem('key1');
        localStorage.removeItem('key2');
        localStorage.removeItem('key3');
        localStorage.removeItem('key4');
        alert('已刪除。');
    }
}

//同步統計資料至google sheet id:1CnGvRZeNOHkBB02lyUcuaAB3DMLi0ofotpHMzS4gQ_U。
function sendData() {
    ot1();
    var scriptURL = "https://script.google.com/macros/s/AKfycbyqzKhjEefFKNbViemFr0_r_r1-fd6XdPbx4n9E6xpnVA1RYg9ho-7Yck3FrS0hUsgb/exec"; // GAS 部署網址
    let sumk1 = key1.reduce((acc, curr) => acc + curr, 0);
    let sumk2 = key2.reduce((acc, curr) => acc + curr, 0);
    let sumk3 = key3.reduce((acc, curr) => acc + curr, 0);
    let sumk4 = sumk2 + sumk3;
    var data = {
        sumk1: sumk1,
        sumk2: sumk2,
        sumk3: sumk3,
        sumk4: sumk4,
    };
    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(() => ct1())
        .catch(error => console.error("錯誤:", error));
}

//系統使用說明
function openm() {
    document.getElementById('d00').style.display = 'block';
}

function closem() {
    document.getElementById('d00').style.display = 'none';
}

//負責各種動畫
function ot1() {
    document.getElementById('t1').style.display = 'block';
}
function ct1() {
    document.getElementById('t1').style.display = 'none';
    location.reload();
}

function od06() {
    document.getElementById('d06').style.display = 'block';
}
function cd06() {
    document.getElementById('d06').style.display = 'none';
}
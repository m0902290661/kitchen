//獲取google sheet資料
function fetchData() {
    var scriptURL = "https://script.google.com/macros/s/AKfycbzX_r4dEgttKxUz8JJPg-4p4jBfxzwCpRaCvaFBTejfy1G7gHElgowDSwvz7NqzXLpN/exec"; // 填入部署的 GAS 網址

    fetch(scriptURL)
        .then(response => response.json())
        .then(data => {
            var output = document.getElementById('d041');
            output.innerHTML = "<h3>歷來統計資料<span style='font-size: 14px;'>時間時區為英國GMT+0，台北為GMT+8</span></h3>";
            data.forEach(row => {
                output.innerHTML += `<p>${row.timestamp} - ${row.sumk1} - ${row.sumk2} - ${row.sumk3} - ${row.sumk4}</p>`;
            });
        })
        .catch(error => console.error('錯誤:', error));
}

setInterval(fetchData,1000);
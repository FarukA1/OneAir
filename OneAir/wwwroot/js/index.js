
var userLat;
var userLong;

var defaultLat;
var defaultLong;

var allMap;
var allGood;
var allModerate;
var allUSG;
var allUnhealthy;
var allVeryUnhealthy;
var allHazardous;

async function getLocation() {
    var location = document.getElementById("location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            userLat = position.coords.latitude;
            userLong = position.coords.longitude;

            getLatAndLong(userLat, userLong);

        }, function (error) {

            defaultLat = 53.277360;
            defaultLong = -2.826620;
            getLatAndLong(defaultLat, defaultLong);


        }, { timeout: 5000 });
    } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
    }

}

getLocation();

function getLatAndLong(lat, long) {
    location.innerHTML = "Latitude: " + lat + " & " +
        "Longitude: " + long;

    async function getForecast() {
        var forecast = document.getElementById("forecast");
        var descri = document.getElementById("descri");

        const forecast_url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=e9b6e482aac44a3bb6a7639b8ab76ab0';

        const response = await fetch(forecast_url);
        const dataForecast = await response.json();
        console.log(dataForecast);

        function getIcons(icon) {
            return icon == "clear sky" ? 'https://openweathermap.org/img/wn/01n@2x.png' :
                icon == "few clouds" ? 'https://openweathermap.org/img/wn/02n@2x.png' :
                    icon == "scattered clouds" ? 'https://openweathermap.org/img/wn/03n@2x.png' :
                        icon == "broken clouds" ? 'https://openweathermap.org/img/wn/04n@2x.png' :
                            icon == "shower rain" ? 'https://openweathermap.org/img/wn/09n@2x.png' :
                                icon == "rain" ? 'https://openweathermap.org/img/wn/10n@2x.png' :
                                    icon == "thunderstorm" ? 'https://openweathermap.org/img/wn/11n@2x.png' :
                                        icon == "snow" ? 'https://openweathermap.org/img/wn/13n@2x.png' :
                                            icon == "mist" ? 'https://openweathermap.org/img/wn/50n@2x.png' :
                                                'https://openweathermap.org/img/wn/01n@2x.png';
        }

        for (var i = 0; i < dataForecast.weather.length; ++i) {
            forecast.innerHTML = '<div><img class="rounded mx-auto d-block" src="' + getIcons(dataForecast.weather[i].description) + '">';
            descri.innerHTML = '<h4>' + 'Current Forecast: ' + dataForecast.weather[i].description + '</h4>';
        }

    }
    getForecast();

    allMap = L.map('mapid').setView([lat, long], 15);
    allGood = L.map('goodid').setView([lat, long], 15);
    allModerate = L.map('moderateid').setView([lat, long], 15);
    allUSG = L.map('usgid').setView([lat, long], 15);
    allUnhealthy = L.map('unhealthyid').setView([lat, long], 15);
    allVeryUnhealthy = L.map('veryunhealthyid').setView([lat, long], 15);
    allHazardous = L.map('hazardousid').setView([lat, long], 15);



    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFydWthMSIsImEiOiJja2p2bGpic2YwYTFuMndzZHpjbXowdTFsIn0.w6ULN29W4Chm7-L37UwW5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(allMap);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFydWthMSIsImEiOiJja2p2bGpic2YwYTFuMndzZHpjbXowdTFsIn0.w6ULN29W4Chm7-L37UwW5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(allGood);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFydWthMSIsImEiOiJja2p2bGpic2YwYTFuMndzZHpjbXowdTFsIn0.w6ULN29W4Chm7-L37UwW5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(allModerate);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFydWthMSIsImEiOiJja2p2bGpic2YwYTFuMndzZHpjbXowdTFsIn0.w6ULN29W4Chm7-L37UwW5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(allUSG);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFydWthMSIsImEiOiJja2p2bGpic2YwYTFuMndzZHpjbXowdTFsIn0.w6ULN29W4Chm7-L37UwW5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(allUnhealthy);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFydWthMSIsImEiOiJja2p2bGpic2YwYTFuMndzZHpjbXowdTFsIn0.w6ULN29W4Chm7-L37UwW5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(allVeryUnhealthy);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFydWthMSIsImEiOiJja2p2bGpic2YwYTFuMndzZHpjbXowdTFsIn0.w6ULN29W4Chm7-L37UwW5Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(allHazardous);

    const api_url = 'https://oneair.1809152.win.studentwebserver.co.uk/api/airqualities';

    async function getData() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);

        const good = data.filter(x => x.pM25 <= 35);
        const moderate = data.filter(x => x.pM25 >= 36 && x.pM25 <= 53);
        const usg = data.filter(x => x.pM25 >= 54 && x.pM25 <= 58);
        const unhealthy = data.filter(x => x.pM25 >= 59 && x.pM25 <= 64);
        const veryUnhealthy = data.filter(x => x.pM25 >= 65 && x.pM25 <= 70);
        const hazardous = data.filter(x => x.pM25 >= 71);

        function getColor(pM25) {

            return pM25 <= 35 ? '#00ff00' :
                pM25 <= 53 ? '#ffff00' :
                    pM25 <= 58 ? '#ffa500' :
                        pM25 <= 64 ? '#ff0000' :
                            pM25 <= 70 ? '#800080' :
                                pM25 >= 71 ? '#800000' :
                                    '#000000';
        }

        function getText(pM25) {

            return pM25 <= 35 ? 'Good' :
                pM25 <= 53 ? 'Moderate' :
                    pM25 <= 58 ? 'Unhealthy for Sensitive Groups' :
                        pM25 <= 64 ? 'Unhealthy' :
                            pM25 <= 70 ? 'Very Unhealthy' :
                                pM25 >= 71 ? 'Hazardous' :
                                    'Good';
        }


        function getImage(pM25) {

            //passing image for pM2.5 between 0 - 35

            var imgGood = document.createElement('img');
            imgGood.src = 'img/Good.png';

            //passing image for pM2.5 between 36 - 53

            var imgModerate = document.createElement('img');
            imgModerate.src = 'img/Moderate.png';

            //passing image for pM2.5 between 54 - 58

            var imgUnhealthySensitiveG = document.createElement('img');
            imgUnhealthySensitiveG.src = 'img/Unhealthy_Sensitive_Group.png';

            //passing image for pM2.5 between 59 - 64

            var imgUnhealthy = document.createElement('img');
            imgUnhealthy.src = 'img/Unhealthy.png';

            //passing image for pM2.5 between 65 - 70

            var imgVeryUnhealthy = document.createElement('img');
            imgVeryUnhealthy.src = 'img/Very_Unhealthy.png';

            //passing image for pM2.5 between 71 - higher

            var imgHazadous = document.createElement('img');
            imgHazadous.src = 'img/Hazadous.png';

            return pM25 <= 35 ? imgGood.src :
                pM25 <= 53 ? imgModerate.src :
                    pM25 <= 58 ? imgUnhealthySensitiveG.src :
                        pM25 <= 64 ? imgUnhealthy.src :
                            pM25 <= 70 ? imgVeryUnhealthy.src :
                                pM25 >= 71 ? imgHazadous.src :
                                    imgGood.src;

        }

        for (var i = 0; i < data.length; ++i) {

            const allMapData = L.circle([data[i].latitude, data[i].longitude], {
                color: getColor(data[i].pM25), radius: 2
            })
                .bindPopup(
                    '<h3 class="text-center"> Location ' + data[i].airQualityID + ' Details</h3>' +
                    '<img style="width:70%;display:block;margin-left:auto;margin-right:auto;" src=' + getImage(data[i].pM25) + '>' +
                    '<div' + ' style="background-color:' + getColor(data[i].pM25) + ';text-align:center; border: 2px outset #000000;">' +
                    '<h4>' + getText(data[i].pM25) + ' - ' + data[i].pM25 + 'pM' + '</h4>' +
                    '</div>' +
                    '<div>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> DeviceID: ' + data[i].deviceID + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Time: ' + data[i].time + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Latitude: ' + data[i].latitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Longitude: ' + data[i].longitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM10: ' + data[i].pM10 + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM2.5: ' + data[i].pM25 + '</p>' +
                    '</div>'
                );

            allMapData.addTo(allMap);
        }

        for (var i = 0; i < good.length; ++i) {

            const allGoodData = L.circle([good[i].latitude, good[i].longitude], { color: getColor(good[i].pM25), radius: 2 })
                .bindPopup(
                    '<h3 class="text-center"> Location ' + good[i].airQualityID + ' Details</h3>' +
                    '<img style="width:70%;display:block;margin-left:auto;margin-right:auto;" src=' + getImage(good[i].pM25) + '>' +
                    '<div' + ' style="background-color:' + getColor(good[i].pM25) + ';text-align:center; border: 2px outset #000000;">' +
                    '<h4>' + getText(good[i].pM25) + ' - ' + good[i].pM25 + 'pM' + '</h4>' +
                    '</div>' +
                    '<div>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> DeviceID: ' + good[i].deviceID + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Time: ' + good[i].time + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Latitude: ' + good[i].latitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Longitude: ' + good[i].longitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM10: ' + good[i].pM10 + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM2.5: ' + good[i].pM25 + '</p>' +
                    '</div>'
                );

            allGoodData.addTo(allGood);
        }

        for (var i = 0; i < moderate.length; ++i) {

            const allModerateData = L.circle([moderate[i].latitude, moderate[i].longitude], { color: getColor(moderate[i].pM25), radius: 2 })
                .bindPopup(
                    '<h3 class="text-center"> Location ' + moderate[i].airQualityID + ' Details</h3>' +
                    '<img style="width:70%;display:block;margin-left:auto;margin-right:auto;" src=' + getImage(moderate[i].pM25) + '>' +
                    '<div' + ' style="background-color:' + getColor(moderate[i].pM25) + ';text-align:center; border: 2px outset #000000;">' +
                    '<h4>' + getText(moderate[i].pM25) + ' - ' + moderate[i].pM25 + 'pM' + '</h4>' +
                    '</div>' +
                    '<div>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> DeviceID: ' + moderate[i].deviceID + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Time: ' + moderate[i].time + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Latitude: ' + moderate[i].latitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Longitude: ' + moderate[i].longitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM10: ' + moderate[i].pM10 + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM2.5: ' + moderate[i].pM25 + '</p>' +
                    '</div>'
                );

            allModerateData.addTo(allModerate);
        }

        for (var i = 0; i < usg.length; ++i) {

            const allUSGData = L.circle([usg[i].latitude, usg[i].longitude], { color: getColor(usg[i].pM25), radius: 2 })
                .bindPopup(
                    '<h3 class="text-center"> Location ' + usg[i].airQualityID + ' Details</h3>' +
                    '<img style="width:70%;display:block;margin-left:auto;margin-right:auto;" src=' + getImage(usg[i].pM25) + '>' +
                    '<div' + ' style="background-color:' + getColor(usg[i].pM25) + ';text-align:center; border: 2px outset #000000;">' +
                    '<h4>' + getText(usg[i].pM25) + ' - ' + usg[i].pM25 + 'pM' + '</h4>' +
                    '</div>' +
                    '<div>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> DeviceID: ' + usg[i].deviceID + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Time: ' + usg[i].time + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Latitude: ' + usg[i].latitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Longitude: ' + usg[i].longitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM10: ' + usg[i].pM10 + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM2.5: ' + usg[i].pM25 + '</p>' +
                    '</div>'
                );

            allUSGData.addTo(allUSG);
        }

        for (var i = 0; i < unhealthy.length; ++i) {

            const allUnhealthyData = L.circle([unhealthy[i].latitude, unhealthy[i].longitude], { color: getColor(unhealthy[i].pM25), radius: 2 })
                .bindPopup(
                    '<h3 class="text-center"> Location ' + unhealthy[i].airQualityID + ' Details</h3>' +
                    '<img style="width:70%;display:block;margin-left:auto;margin-right:auto;" src=' + getImage(unhealthy[i].pM25) + '>' +
                    '<div' + ' style="background-color:' + getColor(unhealthy[i].pM25) + ';text-align:center; border: 2px outset #000000;">' +
                    '<h4>' + getText(unhealthy[i].pM25) + ' - ' + unhealthy[i].pM25 + 'pM' + '</h4>' +
                    '</div>' +
                    '<div>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> DeviceID: ' + unhealthy[i].deviceID + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Time: ' + unhealthy[i].time + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Latitude: ' + unhealthy[i].latitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Longitude: ' + unhealthy[i].longitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM10: ' + unhealthy[i].pM10 + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM2.5: ' + unhealthy[i].pM25 + '</p>' +
                    '</div>'
                );

            allUnhealthyData.addTo(allUnhealthy);
        }

        for (var i = 0; i < veryUnhealthy.length; ++i) {

            const allVeryUnhealthyData = L.circle([veryUnhealthy[i].latitude, veryUnhealthy[i].longitude], { color: getColor(veryUnhealthy[i].pM25), radius: 2 })
                .bindPopup(
                    '<h3 class="text-center"> Location ' + veryUnhealthy[i].airQualityID + ' Details</h3>' +
                    '<img style="width:70%;display:block;margin-left:auto;margin-right:auto;" src=' + getImage(veryUnhealthy[i].pM25) + '>' +
                    '<div' + ' style="background-color:' + getColor(veryUnhealthy[i].pM25) + ';text-align:center; border: 2px outset #000000;">' +
                    '<h4>' + getText(veryUnhealthy[i].pM25) + ' - ' + veryUnhealthy[i].pM25 + 'pM' + '</h4>' +
                    '</div>' +
                    '<div>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> DeviceID: ' + veryUnhealthy[i].deviceID + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Time: ' + veryUnhealthy[i].time + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Latitude: ' + veryUnhealthy[i].latitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Longitude: ' + veryUnhealthy[i].longitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM10: ' + veryUnhealthy[i].pM10 + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM2.5: ' + veryUnhealthy[i].pM25 + '</p>' +
                    '</div>'
                );

            allVeryUnhealthyData.addTo(allVeryUnhealthy);
        }

        for (var i = 0; i < hazardous.length; ++i) {

            const allHazardousData = L.circle([hazardous[i].latitude, hazardous[i].longitude], { color: getColor(hazardous[i].pM25), radius: 2 })
                .bindPopup(
                    '<h3 class="text-center"> Location ' + hazardous[i].airQualityID + ' Details</h3>' +
                    '<img style="width:70%;display:block;margin-left:auto;margin-right:auto;" src=' + getImage(hazardous[i].pM25) + '>' +
                    '<div' + ' style="background-color:' + getColor(hazardous[i].pM25) + ';text-align:center; border: 2px outset #000000;">' +
                    '<h4>' + getText(hazardous[i].pM25) + ' - ' + hazardous[i].pM25 + 'pM' + '</h4>' +
                    '</div>' +
                    '<div>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> DeviceID: ' + hazardous[i].deviceID + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Time: ' + hazardous[i].time + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Latitude: ' + hazardous[i].latitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> Longitude: ' + hazardous[i].longitude + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM10: ' + hazardous[i].pM10 + '</p>' +
                    '<p class="text-center" style="font-size:13px;font-weight:bold;"> pM2.5: ' + hazardous[i].pM25 + '</p>' +
                    '</div>'
                );

            allHazardousData.addTo(allHazardous);
        }

    }

    getData();

    async function chart() {
        const respnseChart = await fetch(api_url);
        const dataChart = await respnseChart.json();
        console.log(dataChart);

        const pmDate = [];
        const pm25Value = [];

        for (let i = 0; i < dataChart.length; i++) {
            const dcDate = dataChart[i].time;
            pmDate.push(dcDate);
        }
        for (let i = 0; i < dataChart.length; i++) {
            const dC25 = dataChart[i].pM25;
            pm25Value.push(parseFloat(dC25));
        }

        var options = {
            series: [{
                name: 'pM 2.5',
                data: pm25Value
            }],
            chart: {
                height: 350,
                type: 'line'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Air Quality Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime',
                categories: pmDate
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
            annotations: {
                yaxis: [{
                    y: 0,
                    y2: 35,
                    borderColor: '#000',
                    fillColor: '#00ff00',
                    opacity: 0.2,
                    label: {
                        borderColor: '#333',
                        style: {
                            fontSize: '10px',
                            color: '#333',
                            background: '#00ff00',
                        },
                        text: 'Good',
                    }
                },
                {
                    y: 35,
                    y2: 53,
                    borderColor: '#000',
                    fillColor: '#ffff00',
                    opacity: 0.2,
                    label: {
                        borderColor: '#333',
                        style: {
                            fontSize: '10px',
                            color: '#333',
                            background: '#ffff00',
                        },
                        text: 'Moderate',
                    }
                },
                {
                    y: 53,
                    y2: 58,
                    borderColor: '#000',
                    fillColor: '#ffa500',
                    opacity: 0.2,
                    label: {
                        borderColor: '#333',
                        style: {
                            fontSize: '10px',
                            color: '#333',
                            background: '#ffa500',
                        },
                        text: 'Unhealthy for Sensitive Groups',
                    }
                },
                {
                    y: 58,
                    y2: 64,
                    borderColor: '#000',
                    fillColor: '#ff0000',
                    opacity: 0.2,
                    label: {
                        borderColor: '#333',
                        style: {
                            fontSize: '10px',
                            color: '#333',
                            background: '#ff0000',
                        },
                        text: 'Unhealthy',
                    }
                },
                {
                    y: 64,
                    y2: 70,
                    borderColor: '#000',
                    fillColor: '#800080',
                    opacity: 0.2,
                    label: {
                        borderColor: '#333',
                        style: {
                            fontSize: '10px',
                            color: '#333',
                            background: '#800080',
                        },
                        text: 'Very Unhealthy',
                    }
                },
                {
                    y: 70,
                    y2: 80,
                    borderColor: '#000',
                    fillColor: '#800000',
                    opacity: 0.2,
                    label: {
                        borderColor: '#333',
                        style: {
                            fontSize: '10px',
                            color: '#333',
                            background: '#800000',
                        },
                        text: 'Hazardous',
                    }
                }],
            },
        };

        const chart = new ApexCharts(document.querySelector("#chart"), options);

        chart.render();
    }
    chart();
}


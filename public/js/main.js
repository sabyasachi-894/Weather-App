const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = 'Please write name of city before search';
        data_hide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=604fd874b23c038ec33d6c1feebd774c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(data);

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather.main;

            if(tempMood === "Clear")
            {
                temp_status.innerHTML = "<i class='fa fa-sun' aria-hidden = 'true'></i>";
            }
            else if(tempMood === "Clouds")
            {
                temp_status.innerHTML = "<i class='fa fa-cloud' aria-hidden = 'true'></i>";
            }
            else if(tempMood === "Rain")
            {
                temp_status.innerHTML = "<i class='fa fa-rain' aria-hidden = 'true'></i>";
            }
            else 
            {
                temp_status.innerHTML = "<i class='fa fa-sun' aria-hidden = 'true'></i>";
            }

            data_hide.classList.remove('data_hide');

        }
        catch {
            city_name.innerText = 'Please enter valid city name';
            data_hide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo);
const submitbtn = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const cityout = document.getElementById('cityout');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middlelayer');


const getinfo = async(event) => {
    event.preventDefault();
    const cityval = cityname.value;
    if(cityval === ""){
        cityout.innerText = `Plz Write Name of City Before Search`;
        datahide.classList.add('data_hide');
    }else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=81724d3fc7817c08527228608e80d669`;
        const response = await fetch(url);
        const data = await response.json();
        const arr = [data];
        
        
        cityout.innerText = `${arr[0].name} , ${arr[0].sys.country}`;
        let tempin =  `${arr[0].main.temp}`;
        temp_real_val.innerText = Math.floor(tempin-273);
        const tempmod = arr[0].weather[0].main;
        
       // condition to check sunny or cloudy
       if(tempmod==="Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color:#eccc68;'></i>";
       }else if(tempmod==="Clouds"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
       }
       else if(tempmod==="Rain"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
       }else{
           temp_status.innerHTML=
           "<i class='fas fa-sun' style='color:#eccc68;'></i>";
       }
       
       datahide.classList.remove('data_hide');

        }catch{
            cityout.innerText = `Plz Enter The City Name Properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}
submitbtn.addEventListener('click',getinfo);
const cityname = document.getElementById('cityname');
const submitBtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const tempincel = document.getElementById('temp_incel'); 
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');
const date = document.getElementById('date'); 
const day = document.getElementById('day');

function ddayfunc() {
    var d = new Date();
    var day1 = ["Sunday","Monday","Tuesday","Wedday","Thursday","Friday","Saturday"];
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var n = d.getDay();
    var m = d.getMonth();
    var g = d.getDate();
    var year = d.getFullYear();
    day.innerText = day1[n];
    date.innerText = `${g} ${month[m]}, ${year}`;
  }
 
ddayfunc();


const getinfo = async(event)=>{  
    event.preventDefault();

    let cityval = cityname.value;
    if(cityval===""){
        city_name.innerText = `Write City Name Before you Search`;
        data_hide.classList.add('data_hide');
    }
    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f6a7b7c87358289a785ae9d67ecbb11d`;
        const res = await fetch(url);
        const data = await res.json();
        const arrdata = [data];
        const k = 273;
            
        city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
        var tempinK = arrdata[0].main.temp;
        var num = tempinK - k;
        tempincel.innerText =num.toFixed(2);
        const temp_status= arrdata[0].weather[0].main;
        if(temp_status=="clear"){
            temp_status.innerHTML = '<i class = "fas fa-sun" style="color:;"></i>';
        }
        else if(temp_status=="cloud")
        {
            temp_status.innerHTML = '<i class = "fas fa-cloud" style="color: #000066 ;"></i>';
        }
        else if(temp_status=="Rain")
        {
            temp_status.innerHTML = '<i class = "fas fa-rain" style="color: #a4b0be;"></i>';
        }
        else
        {
            temp_status.innerHTML = '<i class = "fas fa-sun" style="color: #f1f2f6;"></i>';
        }
          data_hide.classList.remove('data_hide');
        }

        
        catch{
            city_name.innerText = `Incorrect City Name`;
            data_hide.classList.add('data_hide');

        }
    }
    
}
submitbtn.addEventListener('click',getinfo);
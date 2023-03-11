import icons from './images/Icons.svg';

const form = document.querySelector('.header__form');
const labelDate = document.querySelector('.clock');
const labelDay = document.querySelector('.square-day');
const labelAbreDay = document.querySelector('.abbreviation-day');
const labelMonth = document.querySelector('.month');
const region = document.querySelector('.square-country');
const temperatura = document.querySelector('.square-degrees');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const amanecer = document.querySelector('.dawn');
const atardecer = document.querySelector('.sunset');
const icon = document.querySelector('.clima-icon');

const LOCALSTORAGE_KEY = "clima-message";

//Toma del Input
const tomaCiudadInput = function () {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const {
      elements: { ciudad },
    } = event.target;

    console.log(ciudad.value);
    busquedaClima(ciudad.value);
    localStorage.setItem(LOCALSTORAGE_KEY, ciudad.value);
    //console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    event.currentTarget.reset();
    clearInterval(timerVariable);

    ///////////////////////////////////////

    //const serializedState = JSON.stringify(value);

  });
};

tomaCiudadInput();

//Uso de la API de international
//Forma sencilla de formatear fechas y horas
/*const localInterval = setInterval(function () {
  const now = new Date();

  const optionClock = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  labelDate.innerText = new Intl.DateTimeFormat("local", optionClock).format(
    now
  );

}, 1000);*/

const localTime = function () {
  const now = new Date();

  const optionDay = {
    day: 'numeric',
    weekday: 'short',
  };

  const optionMonth = {
    month: 'long',
  };

  labelDay.innerText = new Intl.DateTimeFormat('local', optionDay).format(now);

  labelMonth.textContent = new Intl.DateTimeFormat('local', optionMonth).format(
    now
  );
};

localTime();

let timerVariable;

const busquedaClima = async function (busqueda) {
  try {
    const posClima = await fetch(`
    https://api.openweathermap.org/data/2.5/weather?q=${busqueda}&appid=c1e47110da4d70de2cafd30f980532f1&units=metric&lang=es`);
    const dataClima = await posClima.json();
    console.log(dataClima);

    if (!posClima.ok)
      throw new Error(`${dataClima.message} (${posClima.status})`);

    const { main, sys, wind, weather } = dataClima;
    console.log(weather[0]);

    let icon_Nubes = [weather[0].main];
    console.log(icon_Nubes);

    if (icon_Nubes.includes('Clouds')) {
      icon.setAttribute('xlink:href', `${icons}#icon-Nubes`);
    }
    if (icon_Nubes.includes('Clear')) {
      icon.setAttribute('xlink:href', `${icons}#icon-calor`);
    }
    if (icon_Nubes.includes('Fog')) {
      icon.setAttribute('xlink:href', `${icons}#icon-Icono1`);
    }
    if (icon_Nubes.includes('Rain')) {
      icon.setAttribute('xlink:href', `${icons}#icon-Icono1`);
    }
    if (icon_Nubes.includes('Snow')) {
      icon.setAttribute('xlink:href', `${icons}#icon-Icono3`);
    }

    temperatura.textContent = Math.trunc(main.temp);
    min.textContent = `${Math.trunc(main.temp_min)}°`;
    max.textContent = `${Math.trunc(main.temp_max)}°`;
    region.textContent = `${dataClima.name}, ${sys.country}`;
    console.log(`${dataClima.name}, ${sys.country}`);

    const output = function (amanecer) {
      let sunrise = moment.unix(amanecer).utc();
      return moment(sunrise._i).format('LT');
    };

    const closet = function (atardecer) {
      let sunset = moment.unix(atardecer).utc();
      return moment(sunset._i).format('LT');
    };

    const sunrise = output(sys.sunrise);
    const sunset = closet(sys.sunset);

    amanecer.textContent = sunrise;
    atardecer.textContent = sunset;

    function convertTime(dt, timezone) {
      let d = new Date(dt * 1000);
      d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
      d.setSeconds(d.getSeconds() + timezone);

      const date = new Date(d);
      console.log(date);

      const hra = date.getHours();
      const min = date.getMinutes();
      const seg = date.getSeconds();

      let h = 3600;
      let m = 60;
      let s = 1;

      const operacion = h * hra + m * min + s * seg;
      console.log(operacion);

      timerVariable = setInterval(countUpTimer, 1000);
      let totalSeconds = operacion;

      function countUpTimer() {
        ++totalSeconds;
        const hour = String(Math.floor(totalSeconds / 3600)).padStart(2, 0);
        const minute = String(
          Math.floor((totalSeconds - hour * 3600) / 60)
        ).padStart(2, 0);
        const seconds = String(
          totalSeconds - (hour * 3600 + minute * 60)
        ).padStart(2, 0);
        //console.log(hour + ":" + minute + ":" + seconds);
        labelDate.textContent = hour + ':' + minute + ':' + seconds;
      }

      const optionDay = {
        day: 'numeric',
        weekday: 'short',
      };

      const optionMonth = {
        month: 'long',
      };

      labelDay.textContent = new Intl.DateTimeFormat('local', optionDay).format(
        date
      );

      labelMonth.textContent = new Intl.DateTimeFormat(
        'local',
        optionMonth
      ).format(date);

      return d;
    }

    //console.log(convertTime(dataClima.dt, dataClima.timezone));
    convertTime(dataClima.dt, dataClima.timezone);
  } catch (err) {
    alert(err);
  }
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=&appid=c1e47110da4d70de2cafd30f980532f1`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data[0].name}, ${data[0].country}`);
      const country = data[0].country.toLowerCase();
      busquedaClima(data[0].name);

      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => {
      console.log(data[0]);
    })
    .catch(err => console.error(`${err.message} 💥`));
};

whereAmI();

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function (ev) {
  console.log('HTML analizado y dom construido');
});
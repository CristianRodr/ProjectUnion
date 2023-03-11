import icons from '../images/Icons.svg';
import Chart from 'chart.js/auto';

const containerMovements = document.querySelector('.cards');
const controlDos = document.querySelector('.control-2');
const form = document.querySelector('.header__form');
const region = document.querySelector('.card__region');
const icon = document.querySelector('.clima-ico');
const hidden = document.querySelector(".hidden");
const ocultar = document.querySelector(".ocultar");



document.addEventListener('DOMContentLoaded', function (ev) {
  console.log('HTML analizado y dom construido');
  const theme = localStorage.getItem("clima-message");
  console.log(theme);
  clima(theme);
  grafica(theme);
});



const tomaCiudadInput = function() {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const {
      elements: { ciudad },
    } = event.target;

    console.log(ciudad.value);
    //busquedaClima(ciudad.value);

    clima(ciudad.value);

    event.currentTarget.reset();
    //clearInterval(timerVariable);
  });
};

tomaCiudadInput();

const clima = async function(busqueda) {
  try {
    const posClima = await fetch(`
    http://api.openweathermap.org/data/2.5/forecast?q=${busqueda}&appid=c1e47110da4d70de2cafd30f980532f1&units=metric`);
    const dataClima = await posClima.json();
    console.log(dataClima);

    if (!posClima.ok)
      throw new Error(`${dataClima.message} (${posClima.status})`);

    const climaOp = dataClima;
    const listArr = climaOp.list;
    console.log(climaOp);
    console.log(listArr);

    region.textContent = `${climaOp.city.name}, ${climaOp.city.country}`;

    const converList = listArr
      .map(listNuva => listNuva.dt_txt.split(' '))
      .filter(fil => fil.includes('00:00:00'))
      .map(orden => orden.join(' '));

    const recepcionObje = [];

    for (const converListElement of converList) {
      const extraer = listArr.find(ext => ext.dt_txt === converListElement);
      recepcionObje.push(extraer);
    }
    recepcionObje.unshift(listArr.at(0));
    recepcionObje.pop();
    console.log(recepcionObje);

    containerMovements.innerHTML = '';

    recepcionObje.forEach(recep => {
      const { main, weather } = recep;

      let icon_Nubes = [weather[0].main];
      console.log(icon_Nubes);

      function nubason() {
        if (icon_Nubes.includes('Clouds')) {
          a = `${icons}#icon-Nubes`;
          return a;
        }
        if (icon_Nubes.includes('Clear')) {
          a = `${icons}#icon-calor`;
          return a;
        }
        if (icon_Nubes.includes('Fog')) {
          a = `${icons}#icon-Icono1`;
          return a;
        }
        if (icon_Nubes.includes('Rain')) {
          a = `${icons}#icon-Icono1`;
          return a;
        }
        if (icon_Nubes.includes('Snow')) {
          a = `${icons}#icon-Icono3`;
          return a;
        }
      }

      const tim = new Date(recep.dt_txt);

      const optionsDia = {
        weekday: 'long',
      };

      const optionsSem = {
        day: 'numeric',
        month: 'long',
      };

      const diaSem = moment(tim).format('dddd');
      //console.log(diaSem);
      const semDia = moment(tim).format('LL');
      //console.log(semDia)

      const html = `
  <div class='paragrafo'>

  <p class='card__row card-diatexto'>${diaSem}</p>
            <p class='card__row card-fecha'>${semDia}</p>
            <svg class='' width='35' height='35'>
                <use xlink:href='${nubason()}'></use>
              </svg>
            <ul class='min__max'>
            <li class= 'min__max--ajuste'><p class='card__row'>min</p><span class='min'>${Math.trunc(
        main.temp_min,
      )}°</span></li>
            <hr>
            <li class= 'min__max--ajuste'><p class='card__row'>max</p><span class='max'>${Math.trunc(
        main.temp_max,
      )}°</span></li>
            </ul>
            <a href='#'>more info</a>
        </div>
  `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
    });

    const tomaFecha = function(intFecha) {
      controlDos.innerHTML = '';
      const converFecha = listArr
        .map(listNuva => listNuva.dt_txt.split(' '))
        .filter(fil => fil.includes(intFecha))
        .map(orden => orden.join(' '));

      //console.log(converFecha)

      const recepcionObjTar = [];

      for (const converFechaElement of converFecha) {
        const extraer = listArr.find(ext => ext.dt_txt === converFechaElement);
        recepcionObjTar.push(extraer);
      }

      //console.log(recepcionObjTar);
      recepcionObjTar.forEach(cards => {
        const { main, wind, weather } = cards;

        let icon_Nubes = [weather[0].main];
        console.log(icon_Nubes);

        function nubason() {
          if (icon_Nubes.includes('Clouds')) {
            a = `${icons}#icon-Nubes`;
            return a;
          }
          if (icon_Nubes.includes('Clear')) {
            a = `${icons}#icon-calor`;
            return a;
          }
          if (icon_Nubes.includes('Fog')) {
            a = `${icons}#icon-Icono1`;
            return a;
          }
          if (icon_Nubes.includes('Rain')) {
            a = `${icons}#icon-Icono1`;
            return a;
          }
          if (icon_Nubes.includes('Snow')) {
            a = `${icons}#icon-Icono3`;
            return a;
          }
        }

        const fechaCard = new Date(cards.dt_txt);
        //console.log(fechaCard)

        const options = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        };

        const tiemCar = new Intl.DateTimeFormat('local', options).format(
          fechaCard,
        );

        const html = `
            <div class='cards-efecto'>
            <p class='card__row card-fecha'>${tiemCar}</p>
            <svg class='' width='35' height='35'>
                <use xlink:href=${nubason()}></use>
              </svg>
            <p class='card__row'><span class='card-tem'>${main.temp}°</span></p>
            <div class='magnitudes--ajuste'>
            <svg class='' width='19' height='20'>
                <use xlink:href='${icons}#icon-Presion'></use>
              </svg>
            <p class='card__row'><span class='presion'>${main.pressure}</span> mm</p></div>
            <div class='magnitudes--ajuste'>
            <svg class='humedad' width='18.79' height='20'>
                <use xlink:href='${icons}#icon-Humedad'></use>
              </svg>
            <p class='card__row'><span class='humedad'>${main.humidity}</span>%</p></div>
            <div class='magnitudes--ajuste'>
            <svg class='' width='20' height='16.7'>
                <use xlink:href='${icons}#icon-Velocidad'></use>
              </svg>
            <p class='card__row'><span class='velocidad'>${wind.speed}</span> m/s</p></div>
        </div>
        `;
        controlDos.insertAdjacentHTML('afterbegin', html);
      });
    };

    const semDia = document.querySelectorAll('.card-fecha');
    const ruta = document.querySelectorAll('a');

    ruta.forEach(a => {
      a.addEventListener('click', ev => {
        const rutaEvent =
          ev.target.ownerDocument.activeElement.parentElement.childNodes[3]
            .innerHTML;
        console.log(rutaEvent);

        const horaRuta = new Date(rutaEvent);
        console.log(horaRuta);

        const options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        };

        const timApi = new Intl.DateTimeFormat('lt-LT', options).format(
          horaRuta,
        );
        console.log(timApi);
        tomaFecha(timApi);

        document.querySelector(".btn").classList.remove("btn__hidden");

        const close = function () {
          document.querySelector(".control-2").classList.add("btn__hidden");

          document.querySelector(".btn").classList.add("btn__hidden");
        };

        document.querySelector(".btn").addEventListener("click", close);

        document.querySelector(".control-2").classList.remove("btn__hidden");

      });
    });

    //console.log(posClima);
  } catch (err) {
    alert(err);
  }


};

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


const busqueda = document.querySelector('.form-countries');
const buscar = document.querySelector('#buscar');
let chart;

async function grafica(valor) {
  try {
    const data = await climas(valor);
    if (chart) {
      chart.destroy();
    }
    chart = new Chart(
      document.getElementById('acquisitions'),
      {
        type: 'line',
        data: {
          labels: data.map(row => row.x),
          datasets: [
            {
              label: 'Temperatura en Celsius',
              data: data.map(row => row.y),
              backgroundColor: '#ff8000',
            },
          ],
        },
      },
    );
  } catch (error) {
    console.log(error);
  }
}


form.addEventListener('click', async (ev) => {
  try {
    //en valor se estaria capturando el valor del input
    const valor = busqueda.value;
    console.log(valor);
    await grafica(valor);
  } catch (error) {
    console.log(error);
  }
});

async function climas(valor) {

  try {
    const response = await fetch(`
  http://api.openweathermap.org/data/2.5/forecast?q=${valor}&appid=c1e47110da4d70de2cafd30f980532f1&units=metric`);
    const responsejson = await response.json();
    console.log(responsejson);
    const datosUnicos = [];
    const diasAgregados = [];
    const Datos = 5;
    let i = 0;
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    for (let clave in responsejson.list) {
      if (i >= Datos) {
        break;
      }
      const fecha = responsejson.list[clave].dt;
      const fechat = new Date(fecha * 1000);
      const dia = fechat.getDate();
      const mes = fechat.getMonth() + 1;
      const mestexto = meses[mes - 1];
      const temperatura = responsejson.list[clave].main.temp;
      const resultado = { x: `${dia} ${mestexto}`, y: temperatura };
      if (!diasAgregados.includes(resultado.x.split(' ')[0])) {
        datosUnicos.push(resultado);
        diasAgregados.push(resultado.x.split(' ')[0]);
        i++;
      }

    }
    console.log(datosUnicos);
    return datosUnicos;
  } catch (error) {
    console.log(error);
  }
}

grafica();

console.log(hidden);

hidden.addEventListener('click', function(e) {
  e.preventDefault();
  ocultar.classList.toggle("ocultar");
})
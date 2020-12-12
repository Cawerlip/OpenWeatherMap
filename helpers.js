const createWeatherHTML = (days) => {
        for (let i = 0; i < 5; i++ ) {
            const day =  days[i];

            const {
                pressure,
                feels_like: {
                    eve,
                },
            } = day;
            
            const date = dayjs().add(i, 'days').format('DD.MM.YYYY');
    
            $weatherAll.append(`
                <div class="item">
                    <h2 class="date">${date}</h2>
                    <h2 class="pressure">${hPaToMm(pressure)} MmHg</h2>
                    <h2 class="temp">Feels like: ${eve} °C</h2>
                </div>
            `);
        }
}

const hPaToMm = (hPa) => (Math.round(hPa / 1.333));

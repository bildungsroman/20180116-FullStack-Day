let app = new Vue({
    el: '#app',
    mounted: function() {
        console.log("Ready!");
        $('select').material_select();
        },
    data: {
        title: "How's the weather in your neck of the woods?",
        city: 'Portland',
        selectedWeather: '',
        options: [
            { value: 1,
            text: "really nice outside."},
            { value: 2,
            text: "sunny and perfect 😊"},
            { value: 3,
            text: "kinda grey..."},
            { value: 4,
            text: "raining and miserable"},
            { value: 5,
            text: "raining, but I like it."},
            { value: 6,
            text: "snowing! WTF?!?"},
            { value: 7,
            text: "snowing, wheeee!"},
            { value: 8,
            text: "what's this 'outside' you speak of?"},
        ],
        resultMain: "",
        resultDesc: "",
        iconSRC: "",
        weatherResults: {
            main: '',
            description: '',
            icon: '',
            temp: '',
            clouds: ''
        }
    },
    watch: {
        displaySelected: function (selectedWeather) {
            if (selectedWeather.value === 1 || selectedWeather.value === 2) {
                console.log("That's awesome!");
            } else if (selectedWeather.value === 3) {
                console.log("Maybe it'll brighten up later, let's see...");
            } else if (selectedWeather.value === 4) {
                console.log("That sucks 😔");
            } else if (selectedWeather.value === 5) {
                console.log("That's the spirit!");
            } else if (selectedWeather.value === 6) {
                console.log("I know, right?");
            } else if (selectedWeather.value === 7) {
                console.log("Let's build a snowman! ☃️");
            } else if (selectedWeather.value === 8) {
                console.log("Get off your computer, there's a big world out there!");
            }
        }
    },
    methods: {
        getWeather: function() {
            console.log("Getting weather for " + this.city);
            let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=0a4a01ff35467b0ba44767fcc74a1ad2';
            this.$http.get(url).then((response) => {
                console.log(response);
                // response = JSON.parse(response);
                // console.log(response);
                response = response.body;
                this.weatherResults.main = response.weather[0].main.toLowerCase();
                this.weatherResults.description = response.weather[0].description.toLowerCase();
                this.weatherResults.icon = response.weather[0].icon;
                this.iconSRC = "" + this.weatherResults.icon;
                this.weatherResults.temp = response.main.temp;
                this.weatherResults.clouds = response.clouds.all;
            });
            console.log("Done!");
            setTimeout(this.showWeather, 2000);
        },
        showWeather: function() {
            $('#introDiv').addClass('hidden');
            $('#resultDiv').removeClass('hidden');
            this.resultMain = "Right now, it is " + this.weatherResults.main + " in " + this.city + ".";
            this.resultDesc = "The weather is " + this.weatherResults.description + ", the temperature is "
                + (this.weatherResults.temp - 273.15) + "°C, with " + this.weatherResults.clouds + "% cloud cover."
        }
    }
});

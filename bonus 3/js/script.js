Vue.config.devtools = true;
// quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const app = new Vue(
    {
        el: '#root',
        data: {
            currentImageActive: 0,
            counterStop: null,
            sliders: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                }
            ]
        },
        methods: {
            // Funzione che al click:
            //            Se currentImageActive è > 0 diminuisce currentImageActive
            //            :  currentImageActive è uguale all' indice dell'ultimo elemento dell'array sliders
            showPreviousSlider: function() {
                if( this.currentImageActive > 0 ) {
                    this.currentImageActive--;
                } else{
                    this.currentImageActive = this.sliders.length - 1;
                }
            },
            // Funzione che al click:
            //            Se currentImageActive è < dell'ultimo elemento dell'array sliders aumenta currentImageActive
            //            :  currentImageActive è uguale a zero
            showNextSlider: function() {
                if( this.currentImageActive < this.sliders.length - 1 ) {
                    this.currentImageActive++;
                } else{
                    this.currentImageActive = 0;
                }
            },
            // Funzione che al click mostra in grande l'immagine cliccata
            // index -> parametro passato al click che viene assegnato a currentImageActive
            showThisImage: function(index) {
                this.currentImageActive = index;
            },
            // Funzione che sfruttando la funzione showNextSlider e venendo richiamata all'interno di created mostra ogni 3 secondi l'immagine successiva
            // grazie a showNextSlider una volta raggiunta l'ultima immagine riparte dalla prima
            // quado il mouse esce dallo slider riparte l'autoplay
            startAutoPlay: function() {
                this.counterStop = setInterval( () => {
                    this.showNextSlider();
                },3000);
            },
            // Funzione che al passaggio del mouse sopra lo slider ferma l'autoplay
            stopAutoPlay: function() {
                clearInterval(this.counterStop);
            }
        },
        created: function() {
            this.startAutoPlay()
        }
    }
);
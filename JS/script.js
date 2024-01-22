console.log('VUE-OK', Vue);

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            destinations: destinations,
            currentIndex: 0,
        };
    },
    methods: {
        direction(direction) {
            if (direction === 'next') {
                this.currentIndex += 1;
                if (this.currentIndex === this.destinations.length) {
                    this.currentIndex = 0;
                }
            } else {
                this.currentIndex -= 1;
                if (this.currentIndex < 0) {
                    this.currentIndex = this.destinations.length - 1;
                }
            }
        },
        currentImage(index) {
            this.currentIndex = index;
        },
        startAutoplay() {
            this.autoplayInterval = setInterval(() => {
                this.direction('next');
            }, 3000);
        },
        /*  stopAutoplay() {
           clearInterval(this.autoplayInterval);
         }, */
    },
    mounted() {
        this.startAutoplay();
    },
});

app.mount('#root');


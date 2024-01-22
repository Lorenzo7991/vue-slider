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
    },
});

app.mount('#root');

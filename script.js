const app = Vue.createApp({})

app.component("my-first-component", {
    data() {
        return {
            propertyName: 0
        }
    },
    template: `
        <button v-on:click="propertyName++">
            Clicked {{ propertyName }} times
        </button>
    `
})

app.mount("#my-first-div")

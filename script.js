const app = Vue.createApp({})

// 1 First component
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

// 2 Second component
const app2 = Vue.createApp({})

app2.component("header-component", {
    props: ["title"],
    template: `<h4>{{ title }}</h4>`
})
app2.mount("#component-props-div")

// 3 Emit an Event (build text and change text size on click)
const app3 = Vue.createApp({
    data() {
        return {
            headers: [
                {id: 1, title: "Header 1"},
                {id: 2, title: "Header 2"},
                {id: 3, title: "Header 3"}
            ],
            headerFontSize: 1
        }
    }
})

app3.component("header-component", {
    props: ["title"],
    template: `
    <div class="header-component">
        <h2>{{ title }}</h2>
        <button @click="$emit('increase-text-size')">
            Increase Text Size
        </button>
    </div>
    `

})

app3.mount("#emit-events-div")

// 4 How to use the slot keyword
const app4 = Vue.createApp({})
app4.component("slot-component", 
{
    template: `
    <div>
        <p>This is my slot component. (Text coded in script.js file)</p>
        <slot></slot>
    </div>`
})

app4.mount("#slots-div")

// 5 Build a dynamic component
const app5 = Vue.createApp({})

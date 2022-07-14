import "./application.css";
import { mapState, mapGetters } from "ui.vue3.vuex";

export const Application =
{
    methods: {
        increaseCounter() {
            this.$store.dispatch('counterStore/increaseCounter');
        },
        decreaseCounter() {
            this.$store.dispatch('counterStore/decreaseCounter');
        }
    },
    computed: {
        ...mapState('counterStore', ['counter']),
        ...mapState('statusStore', ['lastAction']),
        ...mapGetters('counterStore', ['double'])
    },
    // language=Vue
    template: `
        <div class="demo-header">{{$Bitrix.Loc.getMessage('DEMO_VUEX_TITLE')}}</div>
        <div>
            <div>{{ $Bitrix.Loc.getMessage('DEMO_VUEX_COUNTER', {'#COUNTER#': this.counter, '#DOUBLE#': this.double}) }}</div> 
            <div>{{ $Bitrix.Loc.getMessage('DEMO_VUEX_LAST_ACTION', {'#COUNTER#': this.lastAction}) }}</div> 
            <div>
                <button @click="increaseCounter">+</button>
                <button @click="decreaseCounter">-</button>
            </div>
        </div>
    `
};
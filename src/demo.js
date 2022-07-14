/**
 * Vuex demo
 *
 * @package vuex
 * @subpackage local
 * @copyright 2001-2022 Bitrix
 */

import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createStore } from 'ui.vue3.vuex';
import { counterStore } from './stores/counter';
import { statusStore } from './stores/status';

export class VuexDemo {
    #store;
    #rootNode
    #application;

    constructor(rootNode): void {
        this.#store = createStore({
            modules: {
                counterStore,
                statusStore,
            }
        });
        this.#rootNode = document.querySelector(rootNode);
    }

    start(): void {
        this.#application = BitrixVue.createApp({
            name: 'Vuex Application',
            components: {
                Application
            },
            template: '<Application/>'
        })
        this.#application.use(this.#store);
        this.#application.mount(this.#rootNode);
    }

    getStore(): Object {
        return this.#store;
    }
}
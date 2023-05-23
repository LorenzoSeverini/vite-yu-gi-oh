// store
import { reactive } from "vue";


export const store = reactive({
    loading: true,
    urlAPI: " https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cards: [],
    loadingCards: true,
    error: false,
    errorMessage: "",
});
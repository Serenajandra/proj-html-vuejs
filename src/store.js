import {reactive} from "vue";
export const store = reactive({
    headerLeftNav: ["home","pages","menu"],
    headerRightNav:["event","blog","landing"],
    headerRightRightNav: ["cards","search"],
    specialsList: [
        {
            price: "$10",
            name: "combo piccolo",
        },
        {
            price: "$20",
            name: "combo medio",
        },
        {
            price: "$30",
            name: "combo grande",
        },
    ]
    
})
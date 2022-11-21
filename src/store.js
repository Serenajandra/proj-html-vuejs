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
    ],
    RestaurantsAddress: [
        {
            address: "164 E. Bell Rd #104.",
            city: "Salerno, AZ 85022",
            tel: "(602) 867-1010"
        },
        {
            address: "204 E. Piazzetta Tommaso",
            city: "Sorrento, AZ 85022",
            tel: "(358) 867-1010"
        },
        {
            address: "Viale Puglia 54",
            city: "Torre Del Greco, AZ 85022",
            tel: "(359) 867-1010"
        },
        {
            address: "Corso Itali AA",
            city: "Naples, AZ 85022",
            tel: "(989) 867-1010"
        },
    ],


    
})
export const state = () => ({
    products: [{
            id: 1,
            name: "bursacanakkaletur",
            title: "Bursa-Çanakkale Turu",
            city: "Bursa",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "canakkale.jpg",
            price: "450 ₺",
            day: "1 Gece / 2 Gün",
        },
        {
            id: 2,
            name: "batikaradeniztur",
            title: "Batı Karadeniz Turu",
            city: "Karadeniz",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "batı-karadeniz12.jpg",
            price: "475 ₺",
            day: "1 Gece / 2 Gün",
        },
        {
            id: 3,
            name: "kapadokyatur",
            title: "KAPADOKYA TURU",
            city: "Kapadokya",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "kapadokya23.jpg",
            price: "150 ₺",
            day: "0 Gece / 1 Gün",
        },
        {
            id: 4,
            name: "bursacanakkaletur",
            title: "Bursa-Çanakkale Turu",
            city: "Bursa",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "gelibolu1.jpg",
            price: "450 ₺",
            day: "1 Gece / 2 Gün",
        },
        {
            id: 5,
            name: "batikaradeniztur",
            title: "Batı Karadeniz Turu",
            city: "Karadeniz",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "batı-karadeniz12.jpg",
            price: "475 ₺",
            day: "1 Gece / 2 Gün",
        },
        {
            id: 6,
            name: "kapadokyatur",
            title: "KAPADOKYA TURU",
            city: "Kapadokya",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "kapadokya23.jpg",
            price: "150 ₺",
            day: "5 Gece / 6 Gün",
        },
        {
            id: 7,
            name: "mardinurfatur",
            title: "Mardin Urfa Turu",
            city: "Mardin Urfa",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "urfa24.jpg",
            price: "600 ₺",
            day: "1 Gece / 2 Gün",
        },
        {
            id: 8,
            name: "sanlıurfatur",
            title: "ŞalıUrfa Antep Turu",
            city: "ŞalıUrfa Antep",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "urfa24.jpg",
            price: "450 ₺",
            day: "1 Gece / 2 Gün",
        },
        {
            id: 9,
            name: "dogukaradeniztur",
            title: "Doğu Karadeniz Turu",
            city: "Doğu Karadeniz",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "dogu-karadeniz1.jpg",
            price: "1150 ₺",
            day: "3 Gece / 4 Gün",
        },
        {
            id: 10,
            name: "egetur",
            title: "EGE TURU",
            city: "EGE",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "ege-tur1.jpg",
            price: "1000 ₺",
            day: "2 Gece / 3 Gün",
        },
        {
            id: 11,
            name: "kaplicatur",
            title: "Kaplıca TURU",
            day: "5 Gece / 6gün",
            city: "Kapadokya",
            snippet: "Pandemi tedbirleri günün şartlarına göre uygulanmaktadır.",
            people: "+5",
            image: "kaplica1.jpg",
            price: "800 ₺",
        },
    ]
})

export const getters = {
    getProductById: (state) => (id) => {
        return state.products.find(product => product.id == id)
    }
}
import './index.css';
import { Card } from "./Card.js";

const header_menu_button = document.querySelector(".header__menu-button");
const header_navigation = document.querySelector(".header__nav");
const card_section = document.querySelector(".card-section");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const popup_closed_button = popup.querySelector(".popup__button");
let is_header_menu_open = false;

header_navigation.classList.add("header__nav_closed");
popup.classList.add("popup_closed");

header_menu_button.addEventListener("click", (event) => {
    is_header_menu_open = !is_header_menu_open;
    if (is_header_menu_open) {
        header_navigation.classList.remove("header__nav_closed");
    } else {
        header_navigation.classList.add("header__nav_closed");
    }
});

popup_closed_button.addEventListener("click", (event) => {
    popup.classList.add("popup_closed");
    overlay.classList.remove("overlay_opened");
});

function buy() {
    popup.classList.remove("popup_closed");
    overlay.classList.add("overlay_opened");
}

function create_card(card) {
    return new Card(card.title, card.price, card.image, card.id, buy).generateCard();
}

function generate_cards(cards) {
    cards.forEach(card => {
        const card_element = create_card(card);
        card_section.appendChild(card_element);
    });
}


const myProducts = [
    // {
    //     title: 'Call of Duty®: Modern Warfare® II',
    //     price: 0,
    //     image: 'https://i.postimg.cc/65CgtSQy/Call-of-Duty-Modern-Warfare-II.jpg',
    //     id: 100,
    // }, 
    {
        title: 'Call of Duty Modern Warfare 3',
        price: 0,
        image: 'https://i.postimg.cc/j2S2tNHj/1.jpg',
        id: 101,
    },
    {
        title: 'Red Dead Redemption 2',
        price: 0,
        image: 'https://i.postimg.cc/GhZLS65t/2.jpg',
        id: 101,
    },
    {
        title: 'Control',
        price: 0,
        image: 'https://i.postimg.cc/cJcdCC4t/3.jpg',
        id: 101,
    },
    {
        title: 'Minecraft',
        price: 0,
        image: 'https://i.postimg.cc/ht1Gzp2G/4.jpg',
        id: 101,
    },
    {
        title: 'Borderlands 2 и3 ',
        price: 0,
        image: 'https://i.postimg.cc/vZYsjMvQ/5.jpg',
        id: 101,
    },
    {
        title: 'Grand Theft Auto V',
        price: 0,
        image: 'https://i.postimg.cc/nz3CQCzP/image.jpg',
        id: 101,
    },
    {
        title: 'Mortal Kombat 1 и 11',
        price: 0,
        image: 'https://i.postimg.cc/hGXHWGQq/6.jpg',
        id: 101,
    },
    {
        title: 'Assassin’s Creed Valhalla и Mirage',
        price: 0,
        image: 'https://i.postimg.cc/Hn62kQFv/images.jpg',
        id: 101,
    },
    {
        title: 'Batman: Arkham Knight',
        price: 0,
        image: 'https://i.postimg.cc/P50kqZjq/7.jpg',
        id: 101,
    },
    {
        title: 'Ghostrunner 1 и 2',
        price: 0,
        image: 'https://i.postimg.cc/HkX6Q7Mn/8.jpg',
        id: 101,
    },
    {
        title: 'God of War',
        price: 0,
        image: 'https://i.postimg.cc/sxGYst9x/9.jpg',
        id: 101,
    },
    {
        title: 'Metro 2033 Redux, Metro: Last Light Redux и Metro Exodus Gold Edition',
        price: 0,
        image: 'https://i.postimg.cc/Ls7kw9Lw/10.jpg',
        id: 101,
    },
    {
        title: 'Cyberpunk 2077',
        price: 0,
        image: 'https://i.postimg.cc/0jGpz7F1/11.jpg',
        id: 101,
    },

    {
        title: 'Все части стар варс !',
        price: 0,
        image: 'https://i.postimg.cc/43KVzDq5/12.jpg',
        id: 101,
    },
    {
        title: 'Alan Wake',
        price: 0,
        image: 'https://i.postimg.cc/0QKg1y3w/13.jpg',
        id: 101,
    },
    {
        title: 'Dark Souls',
        price: 0,
        image: 'https://i.postimg.cc/T2QjvJVn/14.jpg',
        id: 101,
    },

    {
        title: 'Mafia (серия игр)',
        price: 0,
        image: 'https://i.postimg.cc/qMhNDsjJ/15.jpg',
        id: 101,
    },
    {
        title: 'Resident Evil',
        price: 0,
        image: 'https://i.postimg.cc/grFmTZ2j/16.jpg',
        id: 101,
    },
    {
        title: 'Marvel s Spider-Man Remastered',
        price: 0,
        image: 'https://i.postimg.cc/wBTyVSrP/17.jpg',
        id: 101,
    },

    {
        title: 'Spider-Man: Miles Morales',
        price: 0,
        image: 'https://i.postimg.cc/JnSsRthV/18.jpg',
        id: 101,
    },
        {
        title: 'Hogwarts Legasy',
        price: 0,
        image: 'https://i.postimg.cc/FKBRx13d/19.jpg',
        id: 101,
    },
    {
        title: 'Death Stranding',
        price: 0,
        image: 'https://i.postimg.cc/PqgHxD14/20.jpg',
        id: 101,
    },
    {
        title: 'Dying Light 1 и 2',
        price: 0,
        image: 'https://i.postimg.cc/Y03BbyZn/21.jpg',
        id: 101,
    },

    {
        title: 'Crysis',
        price: 0,
        image: 'https://i.postimg.cc/63rkpmWW/22.jpg',
        id: 101,
    },
    {
        title: 'BALDUR’S GATE 3',
        price: 0,
        image: 'https://i.postimg.cc/Dyjt0sTX/23.jpg',
        id: 101,
    },

    {
        title: 'Battlefield 2042',
        price: 0,
        image: 'https://i.postimg.cc/cLt5Jbhp/24.jpg',
        id: 101,
    },
    {
        title: 'Forza Horizon',
        price: 0,
        image: 'https://i.postimg.cc/4xpbqkBx/25.jpg',
        id: 101,
    },
    {
        title: 'Party animals',
        price: 0,
        image: 'https://i.postimg.cc/x8kLPWXY/26.jpg',
        id: 101,
    },
    {
        title: 'Remenant 2',
        price: 0,
        image: 'https://i.postimg.cc/YSpgP4vd/27.jpg',
        id: 101,
    },

    {
        title: 'Starfield',
        price: 0,
        image: 'https://i.postimg.cc/KzWM4JJW/28.jpg',
        id: 101,
    },
    {
        title: 'Amnesia',
        price: 0,
        image: 'https://i.postimg.cc/kgwFqF30/29.jpg',
        id: 101,
    },
    {
        title: 'Chivarli 2',
        price: 0,
        image: 'https://i.postimg.cc/x1sHWfLY/30.jpg',
        id: 101,
    },
    {
        title: 'Dischonored',
        price: 0,
        image: 'https://i.postimg.cc/ZRNdB62K/31.jpg',
        id: 101,
    },
    {
        title: 'Fallout',
        price: 0,
        image: 'https://i.postimg.cc/6p75ptDB/32.jpg',
        id: 101,
    },
    {
        title: 'Hitman',
        price: 0,
        image: 'https://i.postimg.cc/L4NHkJSH/33.jpg',
        id: 101,
    },
    {
        title: 'Metal Gear Solid',
        price: 0,
        image: 'https://i.postimg.cc/m2PGQVVw/34.jpg',
        id: 101,
    },
    {
        title: 'The Outlast Trials',
        price: 0,
        image: 'https://i.postimg.cc/vTjkqFXv/35.jpg',
        id: 101,
    },


];
for (const myProduct of myProducts) {
    const myProductCard = create_card(myProduct);
    card_section.appendChild(myProductCard);
}

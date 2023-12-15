class Card {
    constructor(title, price, image, id, open_popup) {
        this._title = title;
        this._price = price;
        this._image = image;
        this._id = id;
        this._open_popup = open_popup;
    }

    _getTemplate() {
        const card_element = document.querySelector('#card-template').content.cloneNode(true);
        this._template_title = card_element.querySelector(".card__title");
        this._template_price = card_element.querySelector(".card__price");
        this._template_image = card_element.querySelector(".card__image");
        this._template_button = card_element.querySelector(".card__button");
        console.log(card_element)
        return card_element
    }

    generateCard() { 
        this._element = this._getTemplate();
        this._template_image.src = this._image;
        this._template_image.alt = this._title;
        this._template_title.textContent = this._title;
        this._template_price.textContent = this._price;
        this._template_button.addEventListener('click', this._open_popup);
        return this._element;
    }
}

export { Card };
class ProdutosCaninos extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        var componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'produtos')

        const image = document.createElement('img')
        image.src = (this.getAttribute('linkImage') || 'img.jpg')
        image.alt = (this.getAttribute('altImage') || '')
        image.style = (this.getAttribute('imgStyle') || '')

        const title = document.createElement('h1')
        title.textContent = this.getAttribute('titleProduct')

        const description = document.createElement('p')
        description.textContent = this.getAttribute('description') || ''

        const priceValue = document.createElement('span')
        priceValue.textContent = 'R$ ' + (this.getAttribute('price') || ' ')



        componentRoot.appendChild(image)
        componentRoot.appendChild(title)
        componentRoot.appendChild(description)
        componentRoot.appendChild(priceValue)

        return componentRoot
    }

    styles() {
        const style = document.createElement('style')

        style.textContent = `
        img {
            width: 150px;
            border-radius: 5%;
        }

        .produtos {
        	background-color: #FFFCED;
        	color: #1C1C1C;
        	width: 242px;
        	height: 342px;
        	border-radius: 10%;
        	padding: 10px;
            margin: 10px;
            display:flex;
        	flex-direction: column;
            justify-content: space-around;
        	align-items: center;
        	transition: 1s;

            box-shadow: 8px 9px 42px -14px rgba(0,0,0,0.78);
            -webkit-box-shadow: 8px 9px 42px -14px rgba(0,0,0,0.78);
            -moz-box-shadow: 8px 9px 42px -14px rgba(0,0,0,0.78);
        }

        .produtos:hover {
        	transform: scale(1.04);
        	transition: 1s;
        }

        .produtos h1{
            font-size: 22px;
        }

        .produtos p{
            color: #646363;
        }

        .produtos span {
            font-size: 17px;
            font-weight: 600;
            font-style: italic;
        }
        `
        return style

    }
}

customElements.define('produtos-caninos', ProdutosCaninos)

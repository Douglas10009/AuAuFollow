class MenuPrincipal extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        var componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'topbar')

        componentRoot.innerHTML = `
        <a href="/principal.html" id="logo"><img src="/Source/image/logo.png" alt="logo da loja" width="115px"
          height="115px"></a>

        <div class="tp-links">
            <a href="/principal" id="tb_inicio">INÍCIO</a>
            <a href="/Source/pages/AUAU PRODUTOS/auauProdutos.html" id="tb_produto">PRODUTO</a>
            <a href="/Source/pages/notfound.html" id="tb_raca">RAÇAS</a>
            <a href="/Game/gamex.html" id="tb_jogo">JOGO</a>
        </div>

        <a href="../Source/pages/notfound.html" id="tb_suporte_menu"><img src="/Source/image/salva-vidas.png" width="50px" height="50px" /> </a>`


        return componentRoot
    }

    styles() {
        const style = document.createElement('style')

        style.textContent = `
        .topbar {
            display:flex;
        	justify-content: space-between;
        	align-items: center;
        }

        .tp-links {
        	width: 526px;
        	justify-content: space-between;
        }

        .tp-links a {
        	padding: 9px 15px;
        	background-color: #DFCCF2;
            color: #ffffff;
        	text-decoration: none;
        	border-radius: 9px;
        	transition: 1000ms;
        }

        .tp-links a:hover {
        	transition: 1000ms;
        	padding: 10px 50px;
        	transform: translateY(-0px);
        	background-color: white;
            color: #DFCCF2;
            border: solid 2px #6AA6F9;
        }
        
        @media (max-width: 668px) {
            .topbar {
	        	visibility: hidden;
	        	display: none;
	        }
        }`

        return style

    }
}

customElements.define('menu-principal', MenuPrincipal)

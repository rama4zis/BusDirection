class HeaderTitle extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });

    }

    connectedCallback() {
        
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `

        <style>
        .header-title {
            text-align: center;
            font-size: 2.25rem;
            line-height: 2.5rem;
            font-weight: 700;
            --tw-text-opacity: 1;
            color: rgb(255 255 255 / var(--tw-text-opacity));
          }
        </style>

            <h1 class="header-title">
                Surabaya Travel Bus Direction
            </h1>
        `
    }


}

customElements.define('header-title', HeaderTitle);
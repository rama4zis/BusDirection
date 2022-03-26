class MainContainer extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }


  connectedCallback() {
    
    this.render();
    this.getData();
    console.log("Main ok = " + this.shadowDOM);

  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .content-wrapper {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 2.5rem;
    }
    
    .form-wrapper {
      width: 100%;
      --tw-bg-opacity: 1;
      background-color: rgb(148 163 184 / var(--tw-bg-opacity));
      margin: 0 auto;
    }
    
    .input-wrap {
      display: grid;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding: 1rem 0;
      text-align: center;
    }
    
    .input-wrap input {
      width: 100%;
      padding: 0.5rem;
    }
    
    .nomor1 {
      /* @apply bg-slate-400; */
    }
    
    .nomor2 {
      /* @apply bg-slate-300; */
    }
    
    .urban-list-container {
      position: relative;
      width: 75vh;
      /* transform: scaleY(0); */
      /* visibility: hidden; */
    }
    
    .urban-list {
      position: absolute;
      display: flex;
      max-height: 10rem;
      width: 75vh;
      flex-wrap: wrap;
      overflow-x: hidden;
      overflow-y: scroll;
      /* align-content: middle; */
    }
    
    .urban {
      width: 100%;
      cursor: pointer;
      --tw-bg-opacity: 1;
      background-color: rgb(241 245 249 / var(--tw-bg-opacity));
      padding: 0.75rem;
      transition: 0.5s ease;
    }
    
    .urban:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(148 163 184 / var(--tw-bg-opacity));
    }
    
    .data-submit {
      cursor: pointer;
      --tw-bg-opacity: 1;
      background-color: rgb(226 232 240 / var(--tw-bg-opacity));
      width: 30vh !important;
      transition: 0.5s;
    }
    
    .data-submit:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(148 163 184 / var(--tw-bg-opacity));
    }
    </style>


            <div class="form-wrapper">
                <div class="input-wrap nomor1">
                    <label for="cars">Pick Up: </label>
                    <input type="search" id="search-value">

                    <div class="urban-list-container">
                        <ul class="urban-list" id="urban-pick">
                            <!-- <li class="urban">
                                    <span>1Kecamatan: Wonokromo, Kelurahan: Ngaelrejo</span>
                                </li> -->
                        </ul>
                    </div>
                </div>

                <div class="input-wrap nomor2">
                    <label for="cars">Destination: </label>
                    <input type="search" id="search-value-target">
                    <div class="urban-list-container">
                        <ul class="urban-list" id="urban-target">

                        </ul>
                    </div>
                </div>

                <div class="input-wrap nomor3">
                    <form action="" id="submitForm">
                        <input type="submit" value="SEARCH" class="data-submit">
                    </form>
                </div>
            </div>
        `;
  }

  getData() {
    // Apply external styles to the shadow dom
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', './assets/script/data/data-geo.js');

    // Attach the created element to the shadow dom
    this.shadowDOM.appendChild(scriptEl);
  }

}

customElements.define("main-container", MainContainer);
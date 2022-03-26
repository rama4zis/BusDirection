const mainContainer = document.querySelector("main-container");
let shadowroot = mainContainer.shadowRoot;

if (mainContainer) {

    const baseUrl = "https://kodepos.now.sh";
    const dataKota = [];
    const dataKotaFix = [];
    const searchValue = shadowroot.getElementById("search-value");
    const searchValueTarget = shadowroot.getElementById("search-value-target");



    const searchUrban = async (urbanName, target = 'urban-pick') => {
        try {
            const response = await fetch(`${baseUrl}/search/?q=${urbanName}`);
            const responseJson = await response.json();
            if (responseJson.error) {
                alert(responseJson.message);
            } else {
                dataKota.push(...responseJson.data);
                for (let i in dataKota) {
                    // console.log(i);
                    for (let key in dataKota[i]) {
                        // Just Get Surabaya Data
                        if (dataKota[i][key] == "Surabaya") {
                            // console.log("Ini Surabaya");

                            // if dataKotaFix already have same postalcode, then do nothing
                            let found = false;
                            for (let j in dataKotaFix) {
                                if (dataKotaFix[j].postalcode === dataKota[i].postalcode) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                dataKotaFix.push(dataKota[i]);
                            }

                            // console.log(dataKota[i]);
                        }

                    }
                    dataKota[i] = null;
                }

                generateUrbanList(dataKotaFix, target);
            }
        } catch (error) {
            alert(error);
        }
    };

    const generateUrbanList = (kotaArray, target) => {
        clearUrbanList();
        let urbanList = shadowroot.getElementById(`${target}`);

        const kotaArrayLength = kotaArray.length;

        for (let i = 0; i < kotaArrayLength; i++) {
            // console.log(kotaArray[i].subdistrict + kotaArray[i].urban);
            let kecamatan = kotaArray[i].subdistrict;
            let kelurahan = kotaArray[i].urban;
            let postalcode = kotaArray[i].postalcode;
            urbanList.innerHTML +=
                `<li class="urban">
                <span id="${postalcode}">Kecamatan: ${kecamatan}, Kelurahan: ${kelurahan}</span>
            </li>`;
        }

    };

    const clearUrbanList = () => {
        const urbanList = shadowroot.querySelectorAll('.urban-list');
        for (let i = 0; i < urbanList.length; i++) {
            urbanList[i].innerHTML = "";
        }
        // urbanList.innerHTML = '';
    };

    // Wwhen urban list is clicked, add value to search-value
    const addValueToSearchValue = (e) => {
        // console.log(e);
        const urbanName = e.target.innerText;
        searchValue.value = urbanName;
        clearUrbanList();
    };

    const addValueToSearchValueTarget = (e) => {
        // console.log(e);
        const urbanName = e.target.innerText;
        searchValueTarget.value = urbanName;
        clearUrbanList();
    };

    const urbanItem = shadowroot.getElementById("urban-pick");
    urbanItem.addEventListener('click', addValueToSearchValue);

    const urbanItemTarget = shadowroot.getElementById("urban-target");
    urbanItemTarget.addEventListener('click', addValueToSearchValueTarget);

    searchValue.addEventListener('input', (e) => {
        // console.log(e.target.value);
        getValue(e.target.value, 'urban-pick');
    });

    searchValueTarget.addEventListener('input', (e) => {
        // console.log(e.target.value);
        getValue(e.target.value, 'urban-target');
    });

    const getValue = (value, target) => {
        if (value == "") {
            dataKotaFix = [];
            console.log(dataKotaFix);
            clearUrbanList();
            // console.log("kosong");
        } else {
            clearUrbanList();
            searchUrban(value, target);

        }
    };

    console.log("Data Geo Ok");
}
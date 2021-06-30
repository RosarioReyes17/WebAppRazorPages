(function () {

    const productsTable = document.querySelector("#productsTable")
    const productsTableTBody = productsTable.querySelector("tbody");

    axios.get('/Index?handler=products')
        .then(res => {
            for (var i in res.data) {
                const product = res.data[i];

                const tr = document.createElement("tr");

                tr.append(createTd(product.productID))
                tr.append(createTd(product.productName))
                tr.append(createTd(product.supplierID))
                tr.append(createTd(product.categoryID))
                tr.append(createTd(product.quantityPerUnit))
                productsTableTBody.appendChild(tr);
            }
        })
        .catch(err => {
            console.error(err)
        })

    function createTd(content) {
        const dt = document.createElement('td')
        dt.textContent = content;
        return dt
    }

}) ()
(function () {
    const productsTable = document.querySelector("#productsTable")
    const productsTableTBody = productsTable.querySelector("tbody")

    axios.get('/Index?handler=products')
        .then(res => {
            for (var i in res.data) {
                const product = res.data[i];

                const tr = document.createElement("tr");

                tr.append(createTd(product.ProductID))
                tr.append(createTd(product.ProductName))
                tr.append(createTd(product.SupplierID))
                tr.append(createTd(product.CategoryID))
                tr.append(createTd(product.QuantityPerUnit))

                productsTableTBody.appendChild(tr)
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
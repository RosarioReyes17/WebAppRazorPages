(function () {

    const productsTable = document.querySelector("#productsTable")
    const productsTableTBody = productsTable.querySelector("tbody");
    const createProductsModal = document.querySelector("#createProductModal")
    const createProductsButton = document.querySelector("#createProductsButton");

    createProductsButton.addEventListener("click", handleAcreateProductsModalClick)

    function handleAcreateProductsModalClick() {
        const modal = new bootstrap.Modal(createProductsModal);
        modal.show();
    }

    function createTd(content) {
        const dt = document.createElement('td')
        dt.textContent = content;
        return dt
    }

    axios.get('/Index?handler=products')
        .then(res => {
            for (var i in res.data) {
                const product = res.data[i];

                const tr = document.createElement("tr");

                tr.append(createTd(product.productName))
                tr.append(createTd(product.supplierID))
                tr.append(createTd(product.categoryID))
                tr.append(createTd(product.quantityPerUnit))
                tr.append(createTd(product.unitPrice))
                tr.append(createTd(product.unitsInStock))
                tr.append(createTd(product.unitsOnOrder))
                tr.append(createTd(product.reorderLevel))
                tr.append(createTd(product.discontinued))

                productsTableTBody.appendChild(tr);
            }
        })
        .catch(err => {
            console.error(err)
        })

}) ()
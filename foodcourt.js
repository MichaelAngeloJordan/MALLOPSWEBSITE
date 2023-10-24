document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const storeList = document.querySelectorAll(".store");
    const searchResultsContainer = document.getElementById("searchResults");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const searchResults = [];

        storeList.forEach(function (store) {
            const storeName = store.textContent.toLowerCase();
            if (storeName.includes(searchTerm)) {
                searchResults.push(store);
            } else {
                store.style.display = "none";
            }
        });

        searchResultsContainer.innerHTML = "";

        if (searchTerm === "") {
            // Jika tidak ada kata yang dicari, kembalikan tampilan ke awal
            storeList.forEach(function (store) {
                store.style.display = "block";
            });
            searchResultsContainer.textContent = "";
        } else if (searchResults.length > 0) {
            searchResultsContainer.textContent = "Hasil Pencarian:";
            searchResults.forEach(function (result) {
                result.classList.remove("highlight");
                result.style.display = "block";
                searchResultsContainer.appendChild(result);
            });
        } else {
            searchResultsContainer.textContent = "Tidak ada hasil yang cocok.";
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  // --- Filtro por marca ---
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove a classe 'active' de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Adiciona a classe 'active' ao botão clicado
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardBrand = card.getAttribute('data-brand');
        card.style.display = (filterValue === 'all' || cardBrand === filterValue) ? 'block' : 'none';
      });
    });
  });

  // --- Filtro por busca via URL (query string) ---
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search') ? params.get('search').toLowerCase() : '';

  if (searchTerm) {
    productCards.forEach(card => {
      const productName = card.querySelector('h4').textContent.toLowerCase();
      card.style.display = productName.includes(searchTerm) ? 'block' : 'none';
    });
  }

  // --- Redirecionamento ao clicar no botão de busca na própria página products.html ---
  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');

  if (searchInput && searchButton) {
    searchButton.addEventListener('click', () => {
      const value = searchInput.value.trim();
      if (value !== '') {
        window.location.href = `products.html?search=${encodeURIComponent(value)}`;
      } else {
        window.location.href = 'products.html';
      }
    });

    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        searchButton.click();
      }
    });
  }
});

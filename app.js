function prikaziVelicinuZaslona() {
    const sirina = window.innerWidth;
    const visina = window.innerHeight;
    const element = document.getElementById('velicinaZaslona');
    element.textContent = `Širina: ${sirina}px, Visina: ${visina}px`;
    // Ovdje možete dodati kod koji reagira na promjenu veličine zaslona
  }

  // Pozovite funkciju prilikom učitavanja stranice
  prikaziVelicinuZaslona();

  // Dodajte event listener za 'resize' događaj
  window.addEventListener('resize', prikaziVelicinuZaslona);
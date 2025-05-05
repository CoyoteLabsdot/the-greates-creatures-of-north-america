const translations = {
  es: {
    title: "Las criaturas más grandiosas de América del Norte",
    subtitle: "Enciclopedia de la fauna, flora y funga de América del Norte"
  },
  en: {
    title: "The Greatest Creatures of North America",
    subtitle: "Encyclopedia of North American fauna, flora, and funga"
  },
  fr: {
    title: "Les plus grandes créatures d'Amérique du Nord",
    subtitle: "Encyclopédie de la faune, flore et funga d'Amérique du Nord"
  },
  de: {
    title: "Die großartigsten Kreaturen Nordamerikas",
    subtitle: "Enzyklopädie der Fauna, Flora und Funga Nordamerikas"
  },
  nah: {
    title: "In huehueyoh tlen Ānawak ipan Mēxihco Tlāltikpak",
    subtitle: "Tlamatiliztli faunan, florān, wan fungan īpan Ānawak"
  },
  eo: {
    title: "La plej grandaj estaĵoj de Nordameriko",
    subtitle: "Enciklopedio de la faŭno, flaŭro kaj fungoj de Nordameriko"
  }
};

document.getElementById("languageSelector").addEventListener("change", function () {
  const lang = this.value;
  document.querySelector("header h1").childNodes[0].nodeValue = translations[lang].title + " ";
  document.querySelector("header p").innerText = translations[lang].subtitle;
});

document.getElementById("firma").addEventListener("click", () => {
  alert("Coyote Labs");
});

fetch('http://localhost:3000/especies')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('contenedor-especies');
    data.forEach(especie => {
      contenedor.innerHTML += `
        <div class="card">
          <img src="${especie.imagenUrl}" alt="${especie.nombreComun}">
          <div class="card-body">
            <h3>${especie.nombreComun}</h3>
            <p><em>${especie.nombreCientifico}</em></p>
            <p>${especie.descripcion}</p>
          </div>
        </div>
      `;
    });
  });
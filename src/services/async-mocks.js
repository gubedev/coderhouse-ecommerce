const products = [
  {
    category: "1",
    id: "MLA832761839",
    title: "Repetidor TP-Link TL-WA850RE",
    description:
      "Señal amplificada.El repetidor wifi TP-Link TL-WA850RE te va a permitir disfrutar de la conexión en una mayor cantidad de espacios. Este aparato extiende el rango de la señal para que puedas disfrutar de todos los equipos electrónicos de tu hogar o tu oficina sin inconvenientes.",
    warranty: "Garantía de fábrica: 30 días",
    price: 2175,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_668117-MLA31786420833_082019-O.webp",
  },
  {
    category: "1",
    id: "MLA832761849",
    title: "Notebook Hp Amd Ryzen 3 3250u 4gb 128gb Ssd Windows 10",
    description: `NOTEBOOK HP AMD RYZEN 3 3250U/4GB/128GB/14"/W10 (14-DK1022WM)
    Número de producto: 1A480UA
    Nombre del producto: Computadora portátil HP - 14-dk1022wm
    Microprocesador: AMD Ryzen ™ 3 3250U (reloj base de 2,6 GHz, reloj de impulso máximo de hasta 3,5 GHz, 1 MB de caché L2, 2 núcleos)
    Memoria, estándar: SDRAM DDR4-2400 de 4 GB (1 x 4 GB)
    Gráficos de video: Gráficos AMD Radeon ™ Vega 3
    Disco duro: SSD M.2 de 128 GB
  `,
    price: 57999,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_852751-MLA43878190921_102020-F.webp",
  },
  {
    category: "1",
    id: "MLA832761859",
    title: "Hp Chromebook 14 4gb 64gb Con Funda Y Mouse Inalambrico",
    description: `Descripción
    Intel® 802.11 Wireless-AC WLAN (2x2) + Bluetooth 5.0
    Chrome OS™
    1x Micro SD Media Card Reader
    Bonus HP Sleeve and Mouse
    Compatible with Google Assistant`,
    price: 54999,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_880421-MLA43774669956_102020-O.webp",
  },
  {
    category: "1",
    id: "MLA832761857",
    title: "Hp 14 Fhd Amd A4 4gb + 96gb / Notebook Chrome",
    description: `Descripción
    Intel® 802.11 Wireless-AC WLAN (2x2) + Bluetooth 5.0
    Chrome OS™
    1x Micro SD Media Card Reader
    Bonus HP Sleeve and Mouse
    Compatible with Google Assistant`,
    price: 54999,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_982835-MLA44163383251_112020-F.webp",
  },
  {
    category: "2",
    id: "MLA883627045",
    title: "Harry Potter Pack Colección 8 Peliculas En Dvd Saga Completa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
    warranty: "Garantía de fábrica: 30 días",
    price: 2200,
    pictureUrl: "https://http2.mlstatic.com/D_617506-MLA43746164726_102020-O.jpg",
  },
  {
    category: "2",
    id: "MLA749898152",
    title: "Dragon Ball [coleccion Completa 2019] [53 Dvds]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
    warranty: "Garantía de fábrica: 30 días",
    price: 7725,
    pictureUrl: "https://http2.mlstatic.com/D_761041-MLA41995986461_052020-O.jpg",
  },
]

export const fetchProducts = async categoryId => {
  const filtered = categoryId ? products.filter(p => p.category === categoryId) : products
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(filtered)
    }, 2000)
  })
}

export const fetchProduct = async itemId => {
 
  const filtered = products.find(p => p.id === itemId)

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(filtered)
    }, 2000)
  })
}

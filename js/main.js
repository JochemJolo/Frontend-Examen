const array = [
    {id: "edison", img: "../js/array-pictures/Edison.png", description: "De Edison Robot V3 – EdPack1 is een zorgvuldig ontworpen product voor personen die een sterke interesse hebben in de velden van codering en robotica. De EdPack1 bestaat uit een Edison V3 robot, die is uitgerust met een interne oplaadbare batterij.", name: "Edison Robot V3", price: "€49,38", link: "https://eu.robotshop.com/nl/products/edison-robot-v3-edpack1"},
    {id: "ventilator", img: "../js/array-pictures/Ventilator.png", description: "De Cytron DIY Zonne-Energie Ventilator Kit biedt een boeiende en interactieve manier voor kinderen om te leren over hernieuwbare energiebronnen. De ventilator, die wordt aangedreven door een zonnepaneel, is eenvoudig genoeg om te worden gemonteerd door een 4-jarige met de hulp van een volwassene. Kinderen van 6 jaar en ouder kunnen het zelfstandig monteren.", name: "Cytron DIY Zonne-Energie Ventilator Kit", price: "€1,90", link: "https://eu.robotshop.com/nl/products/cytron-diy-zonne-energie-ventilator-kit"},
    {id: "rover", img: "../js/array-pictures/Rover.png", description: "De Leo Rover v1.8 (Gemonteerd) is voorzien van een 4WD-roboticaset voor buiten en is ontworpen om betrouwbaar, waterdicht en uitbreidbaar te zijn.", name: "Leo Rover v1.8 (Gemonteerd)", price: "€6.653,79", link: "https://eu.robotshop.com/nl/products/leo-rover-v18-gemonteerd"},
    {id: "auto", img: "../js/array-pictures/Auto.png", description: 'Het is tijd om je eigen speelgoed te maken! Beter nog, een houten auto op zonne-energie! Koop de Cytron DIY houten Auto STEM-kit op zonne-energie om uw kinderen bezig te houden met praktische activiteiten terwijl ze genieten van de "robot" die rondrijdt die wordt aangedreven door groene energie, hernieuwbare energie - zonne-energie.', name: "Cytron DIY Houten Auto STEM-kit op Zonne-energie", price: "€2,86", link: "https://eu.robotshop.com/nl/products/cytron-diy-houten-auto-stem-kit-op-zonne-energie"},
    {id: "soldeerset", img: "../js/array-pictures/Soldeerset.png", description: "De Solarbotics Solarbotics Leer Soldeerset geeft je een paar eenvoudige onderdelen die op een bord kunnen worden gesoldeerd om je een draagbare knipperende LED-badge te geven. Het bord is aan de buitenkant voorzien van een vergulde bies. De logo's zijn allemaal koper in het midden van het bord.", name: "Solarbotics Leer Soldeerset", price: "€9,43", link: "https://eu.robotshop.com/nl/products/solarbotics-leer-soldeerset"}
]

const root = document.documentElement;
const productPlace = document.getElementById("itemcontainer")
const dialog = document.getElementById("itemDialog");
const dialogImg = document.getElementById("dialogImg");
const dialogName = document.getElementById("dialogName");

document.title = Config.siteName;

document.querySelectorAll("#company-name").forEach(element => {
    element.textContent = element.textContent.replace(
        "@Robotica",
        Config.reservedRights
    );
});

document.querySelector(".logo").src = "../images/"+Config.siteLogo

root.style.setProperty("--background", Config.backgroundColor);
root.style.setProperty("--navBackground", Config.navBackgroundColor);
root.style.setProperty("--bottomBackground", Config.bottomBackgroundColor);

function setupList(container, items) {
  container.innerHTML = items.map(item => `
    <li class="Box" data-id="${item.id}">
      <img id="${item.id}" class="Image-Box" src="${item.img}" alt="${item.name}">
      <div class="Text-Middle">
        <span>${item.name}<span>
      </div>
    </li>
  `).join("")

  container.addEventListener("click", (event) => {
    const li = event.target.closest(".Box");
    if (!li) return;

    const item = items.find(i => i.id === li.dataset.id);
    dialogImg.src = item.img;
    dialogImg.alt = item.name;
    dialogName.textContent = item.description;
    dialog.showModal();    // Shows a Dialog about that Charactor to know more about what that Character does inside the game
  });
}

setupList(productPlace, array)

document.getElementById("dialogClose").addEventListener("click", () => dialog.close());  // This closes the Dialog when you click on the Close Button

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();  // This closes the Dialog when you click anywhere else on the darkend background
});
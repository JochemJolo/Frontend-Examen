const root = document.documentElement;

document.title = Config.siteName;
document.querySelector(".bottomText").textContent = 
    document.querySelector(".bottomText").textContent.replace("@Robotica", Config.reservedRights)

root.style.setProperty("--background", Config.backgroundColor);
root.style.setProperty("--navBackground", Config.navBackgroundColor);
root.style.setProperty("--bottomBackground", Config.bottomBackgroundColor);
# Webshop pár lépésben - 1. rész

## Bevezető

Sajnos nem sikerült megfelelő embert találni egy webshop fejlesztésére, ezért
úgy döntöttem, összerakok egy kis oldalt, ahol egy wehshop minimális
szolgáltatásai elérhetőek lesznek.

## Eszközök kiválasztása

### Szolgáltató

Mivel nagyon kevés időm van foglalkozni a feladattal, a legegyszerűbb és
legkézenfekvőbb megoldásokat választottam.

* Heroku: olyan felhőszolgáltató, ahol nagy hangsúlyt fektetnek a fejlesztői
  élményre, pár kattintással vagy parancssorból pár paranccsal tudunk
  repositoryt, pipeline-t, dokumentációt, metrikákat létrehozni.
  És ami a legfontosabb: személyes használatra és kísérletezésre adnak ingyenes
  hozzáférést.

* MS Azure: választhattam volna ezt a megoldást is, viszont az MS kísérleti
  fiókot nehezebb beállítani.

* Google Cloud, Amazon: ezeket nem ismerem annyira, rizikós lett volna pont most
  megtanulni.

* DigitalOcean: virtuális géped ad olcsón, illetve Kubernetest, de nincsen
  kísérleti fiók, és nagyjából mindent nekem kellett volna feltelepíteni a build
  agenttől a webszerverig.

Így végül maradt a Heroku.

### Technológiák

1. Frontenden egyszerű volt a döntés: React. Ehhez értek, és szeretem is.
2. Backenden szóba jöhetett:
   * ASP.NET Core, de ha ezt választom, hegyeset köpnek a javások.
   * Java: ha ezt választom, hegyeset köpnek a .NET-esek.
   * PHP: ha ezt választom, hegyeset köpnek a javások és a .NET-esek.
   * Go: ezt választottam, és nem érdekel, ha hegyeset köpnek a .NET-esek,
     javások és a PHP-sok is :-)
     Amúgy is meg akarom tanulni.

### Fejlesztőeszközök

Visual Studio Code, mert szeretem és remek Go + React toolok vannak hozzá.

## Megvalósítás

A Visual Studio Code úgy van beállítva, hogy mind a build (`SHIFT-CTRL-B`),
mingód a run (`F5`) megfelelően működjön. Ez alap.

### Frontend

A webshop frontendje egy React single page alkalmazás lesz, ami egyúttal prog-
resszív webapp is, ezt a `create-react-app` out-of-the-box így hozza létre, így
ezzel nem kell külön foglalkozni.
A UI elemek megformázásan a `Material UI` lesz a segítségemre, jobbat úgysem tud-
nék összerekni, szerencsére MIT licenszes, nem lesz gond vele.
A webshop színeit majd CSS-ből beállítom, egyelőre marad a default material
színvilág.

A terv az, hogy a szövegek (magyarul és angolul) resource-ból jöjjenek. Egyelőre
a React wabappba lesznek belesütve, később majd a REST API-ból fogjuk lekérni.

A képek, videók, egyéb elemek statikusan lesznek kiszolgálva.

### Backend

Rövid keresés után rátaláltam a `gin` nevű Go projektre, egyszerű ám gyorsan
fejlődő web framework projekt, tulajdonképpen egy REST API + statikus kiszolgá-
lásra tökéletesen elegendő.

Tervek között szerepel az OAuth autentikáció, ehhez is ad támogatást, habár
lehet, hogy ez igényel némi fejlesztést. De ez az open-source lényege.


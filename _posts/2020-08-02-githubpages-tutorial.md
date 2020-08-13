---
author: haudraufhaun
title: "Jekyll & GitHub Pages Tutorial"
descr: "Entwickeln und kostenloses Hosten einer Website mithilfe von GitHubPages und Jekyll"
id: 4
layout: post
tags: ["jekyll", "GitHub Pages", "GitHub", "WebDev", "HTML"]
---

{%raw%}

Moin👋,

in diesem Blogpost soll es um den Bau einer einfachen Website mit Jekyll und das kostenlose Hosten dieser Seite mit `GitHub-Pages`.

### Vorrausetzungen

Wenn du diesem Tutorial folgen willst, dannn gehe bitte sicher, dass du schon HTML beherrschst, da ich hier nicht alles darüber erklären kann. Falls du noch nicht HTML beherrschst, ist dieses Tutorial empfehlenswert: <a href="https://www.youtube.com/watch?v=qmTNnZCDJY0"><ion-icon name="logo-youtube" style="color: firebrick; margin-left: 10px; margin-right: 10px; padding-top: 10px;"></ion-icon>Eigene Website mit HTML und CSS bauen</a>

Zudem erfülle bitte folgende Vorraussetzungen:

- habe auf deinem PC einen Codeeditor installiert, ich persönlich nutze VS Code, <a href="https://code.visualstudio.com/">hier</a> downloadbar (man kann zwar reintheoretisch auch den Standard Windowseditor benutzen was allerdings etwas umständlich ist)
- installiere <a href="https://git-scm.com/">Git</a> auf deinem PC🖥
- installiere <a href="https://www.ruby-lang.org/de/downloads/">Ruby</a> auf deinem PC💻
- nachdem du Ruby installiert hast, führe `gem install bundler jekyll` in deinem Terminal

Du erfüllst alle Vorrausetungen? Dann lass uns direkt starten🚀

## Erstellen eines neuen Projektes

Um mit dem Programmieren zu beginnen, navigiere zunächst in einem Terminal in den Ordner, in dem du das Projekt erstellen möchtest. Dorthin navigiert, führe in deinem Terminal zum erstellen des Projektes den Befehl

`jekyll new PROJEKTNAME`

aus. <br>
Damit wird dein Projekt erstellt.

Navigiere nun in den Projekordner mit

`cd PROJEKTNAME`

und führe den Befehl

`bundle exec jekyll serve`

aus. Wenn du nun in deinem Webbrowser <a href="localhost:4000">localhost:4000</a> eingibst, kannst du die Standardseite, die von Jekyll automatisch generiert wurde sehen.

## Eigene Inhalte erstellen

Nun wollen wir aber nicht die Jekyll-Defaultwebsite, sondern eine eigene Website entwickeln. Dazu stoppen wir zunächst den Server und löschen dann alles bis auf die Dateien `_config.yml`, `Gemfile`, `Gemfile.lock`, `.gitignore` und `404.html`.

Daraufhin ersetzen wir den Inhalt der Datei `_config.yml` durch folgendes:

```yml
title: Your awesome title
baseurl: ""
url: ""

plugins:
  - jekyll-feed
```

Dann erstellen wir eine Datei mit dem Namen `index.html`, die folgendermaßen aussieht:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hallo Jekyll</title>
  </head>
  <body>
    <h1>Hallo Welt</h1>
  </body>
</html>
```

<br>
Wenn wir nun mit 
<mark style="font-family: Consolas;
  font-weight: lighter;
  background-color: rgba(248, 248, 248, 0.938);
  color: red;
  padding: 4px;
  border-radius: 7px;">bundle exec jekyll serve</mark>
die Seite neu starten, bekommen wir folgendes zu sehen:

![](\assets\images\jekyll-githubpages-tutorial\screenshot1.jpg)

Das vorher programmierte `Hallo Welt` erscheint! Wenn wir das hier geschafft haben können wir die Seite nach unseren Wünschen und Bedürfnissen mit `HTML`; `CSS` und `JavaScript`gestalten.

## Layouts und Includes in Jekyll🔃

Bisher haben wir ein einfaches `Hallo Welt` auf der Website erscheinen lassen. Dies sah 1. nicht schön aus und zweitens ist eine richtige Website ja auch etwas anderes...

Meistens sind Websites ja so aufgebaut:

- oben: Navigationsleiste
- mitte: Inhalt
- unten: Fußzeile/Footer mit &copy; und Link zu Impressum

Wenn unsere Website mehrere Seiten beinhaltet, dann müssten wir rein theoretisch die Navigation und den Footer in jeder `HTML` Datei neu schreiben, was natürlich umständlich ist und bei Änderungen and diesen Komponenten schnell unübersichtlich wird, da wir die Komponente in jeder Datei dann ändern müssen.
Doch Jekyll nimmt uns diese Arbeit mit den sogenannten `Includes` und `Layouts` ab:

### Includes

Statt in jeder Datei z.B. deie Naviation neu zu programmieren, können wir die Navbar in **einer** Datei designen und müsssen diese dann lediglich in den anderen `HTML` Dateien importieren. Der Vorteil liegt auf der Hand: Wir ändern die auf jeder Seite vorhandene Komponente wie die Navigationsbar nur in einer Datei und müssen nicht in jeder Datei diese neu programmieren. Und so gehen wir dabei vor:

1. Wir erstellen einen Ordner mit dem Namen `_includes`. Dies ist wichtig, da Jekyll nur aus einem Ordner mit **exakt** diesem Namen importieren kann
2. Erstelle eine Datei mit dem Namen `_navbar.html` in dem in 1. erstellten Ordner, hier werden wir die Navigationsleiste unserer Seite erstellen.
3. Bearbeite nun deine `index.html` so, dass sie folgendermaßen aussieht:

```html
---
permalink: /
---

<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
    />
    <title>Your awesome title</title>
  </head>
  <body>
    <section class="section" style="margin-top: 0.2rem; margin-bottom: 1.5rem;">
      <div class="container"></div>
    </section>
    <br />
    <br />
  </body>
</html>
```

Damit importierst du <a href="https://bulma.io/">Bulma</a>, ein `CSS` Framework, das ich hier nutze, da es vorgefertigte Komponenten wie Navbars bereitstellt (das macht die Arbeit am Anfang deutlich leichter). Zudem definiertst du mit `permalink: /` den Link, mit dem `index.html` aufgerufen wird.

4. Nun programmieren wir die Navbar: dazu begeben wir uns zurück in die Datei `_navbar.html` und programmieren folgendes als Navbar:

```html
<nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item">
      Titel
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="/impressum/">
            Impressum
          </a>
        </div>
      </div>
    </div>
  </nav>
```

Du kannst auch deine eigene Navbar entwickeln, die (leider englische) Dokumentation dazu findest du <a href="https://bulma.io/documentation/components/navbar/">hier</a>.

5. Nun wollen wir die Navbar in unser `index.html` Datei importieren: Dazu öffnen wir `index.html` und fügen über `<section class="section">` die Zeile

<code>
{% include _navbar.html %}
</code>

hinzu, die dann die Navbar importiert. Wenn wir uns nun im Browser unsere Seite neu laden können wir in etwa folgendes sehen:

![](\assets\images\jekyll-githubpages-tutorial\screenshot4.jpg)

Zu sehen ist die von uns programmierte Navigationsleiste🥳

Nun kommen wir zur ersten Aufgabe für dich:

Programmiere für die Website einen Footer(= Fußzeile) und importiere diesen mithilfe von `Includes` in die Datei `index.html`. Die Footer Komponente von `Bulma` kannst du <a href="https://bulma.io/documentation/layout/footer/">hier</a> finden. Du kannst aber gerne auch einen eigenen Footer entwickeln.

### Layouts

`Layouts` sind gewissermaßen der Bruder der `Includes`, sie sind nämlich nicht nur wie die `Includes` eine Blaupause für eine Komponente der Seite, sondern eine Blaupause für die gesamte Seite (das Layout). Das tolle an `Layouts` ist, dass diese nicht nur für `HTML` Dateien funktionieren, sondern auch für `Markdown` verarbeiten können.

Um eigene `Layouts` zu erstellen, müssen wir zunächst neben `_includes` einen Ordner mit dem Namen `_layouts` erstellen; in diesem Ordner werden wir unsere Layouts speichern.

In dem gerade erstellten Ordner erstellen wir nun unser erstes Layout, indem wir eine Datei mit dem Namen `default.html` erstellen.
Danach dürfte die Ordnerstruktur unseres Projektes so aussehen:

![](\assets\images\jekyll-githubpages-tutorial\screenshot5.jpg)

Zunächst kopieren wir den gesamten Code unserer `index.html` in `default.html`.

Daraufhin bearbeiten wir die Datei `default.html` so, dass sie folgendermaßen aussieht:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
    />
    <title>Your awesome title</title>
  </head>
  <body>
    {% include _navbar.html %}
    <section class="section" style="margin-top: 0.2rem; margin-bottom: 1.5rem;">
      <div class="container content">
        <h1 class="title">{{page.title}}</h1>
        <br />
        {{content}}
      </div>
    </section>
    <br />
    <br />
  </body>
</html>
```

Nun bearbeiten wir die Datei `index.html` folgendermaßen:

```html
---
permalink: /
layout: default
title: Home
---

<div class="content">
  Hier steht der Inhalt der Indexseite...
</div>
```

Wenn wir uns nun unsere Ausgabe im Browser anschauen, können wir folgendes sehen:

![](\assets\images\jekyll-githubpages-tutorial\screenshot6.jpg)

Doch was genau haben wir her gemacht?

Wir haben zunächst in `default.html` ein Layout entwickelt, dass

1. Die Navbar per `include` importiert (wenn du einen eigenen Footer entwickelt hast, solltest du diesen natürlich auch includen 😉)
2. einen Ort definiert wo der Parameter `title`, also der Titel der jeweiligen Seite angezeigt wird; in diesem Falle ist dies logischerweise ein `h1` Tag
3. haben wir die Stelle definiert, an der der Inhalt (==`content`) unserer Seite steht
4. haben wir in dem Header von `index.html` den `title` sowie das `layout` definiert
5. haben wir in der `index.html` in dem `<div>` mit der Klasse `content` (die wir im Layout definiert haben) unsere Inhalte erstellt.

**Aufgabe**: Erstelle nun das Impressum

*Tips:*
- Da wir in der Navbar schon als Link für das Impressum /impressum/ angeben haben, ist es naheliegend, dies auch als Permalink zu nutzen
- erstelle deine `HTML` Datei für das Impressum im gleichen Ordner📁 wie `index.html`

## Kostenloses Hosting mit GitHub-Pages🔥

#### 🚧Wichtig! Lese diesen Abschnitt erst ganz genau durch, bevor du den beschriebenen Vorgang durchführst!🚧

Wenn du nun (hoffentlich mit der Hilfe dieses Tutorials🙃) eine eigene Website mit `Jekyll` entwickelt hast und diese veröffentlichen möchtest, bietet sich `GitHub-Pages` als besonders elegante und kostenlose💵 Lösung an. Eigentlich ist `Github` eine Website zum Teilen von Open-Soruce Code, allerdings gibt es inzwischen tausende Features mehr. Eines dieser vielen Features ist das kostenlose Hosten von Jekyll-Webpages. Die einzige Vorraussetzung ist: besitze einen kostenlosen <a href="https://github.com/">GitHub-Account</a>. Falls du noch keinen GitHub Account hast, aber dir einen speziell für `GitHub-Pages` erstellen willst, folgender Hinweis: Die Website bekommt standardmäßig **immer** folgende URL: `https://BENUTZERNAME.github.io`, wobei `BENUTZERNAME dein GitHub Username ist. Man kann das zwar auch auf andere Domains "umprogrammieren", dies verursacht allerdings Extraaufwand und kann auch Kosten hervorrufen (vor allem bei dem eigenen Domainnamen, denn der muss in der Regel gekauf werden). Aus diesen Gründen sei geraten, sich einen guten GitHub-Username auszusuchen, da dieser Bestandteil der URL ist!

Hast du deinen GitHub Account erstellt, kannst du auch schon direkt loslegen:

Erstelle zunächst unter [https://github.com/new](https://github.com/new) ein neues GitHub-Repository mit dem Namen `BENUTZERNAME.github.io`, wobei `BENUTZERNAME` dein **exakter** GitHub Benutzername sein muss!

Wähle dann folgende Optionen aus:

![](\assets\images\jekyll-githubpages-tutorial\screenshot2.jpg)

Wenn du fertig bist, klicke auf `Create Repository` und erstelle damit das Repository. Nun solltest du in etwa folgendes zu Gesicht bekommen:

![](\assets\images\jekyll-githubpages-tutorial\screenshot3.jpg)

Jetzt musst du nur noch auf `uploading an existing file` klicken. Dort gelangst du dann zu einer Übersicht, wo du deine Projektdateien uploaden kannst. Diese werden dann von `GitHub Pages` automatisch zum hosten genutzt. Du kannst auch in Zukunft die Dateien auf GitHub verändern, löschen und neue Dateien erstellen. All dieser Vorgänge werden von `GitHub Pages` automatisch verarbeitet.

{%endraw%}

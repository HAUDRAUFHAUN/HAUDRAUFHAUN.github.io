(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // dist/build/_fallback-5c5beadb.js
  var require_fallback_5c5beadb = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_5c5beadb_default
    });
    const main2 = __toModule(require_main());
    function v(s3) {
      let a3, e3, d3, f3, v2, x3, g2, h;
      return {c() {
        a3 = main2.e("div"), e3 = main2.e("div"), e3.textContent = "404", d3 = main2.a(), f3 = main2.e("div"), v2 = main2.t("Page not found. \n  \n  "), x3 = main2.e("a"), g2 = main2.t("Go back"), main2.b(e3, "class", "huge svelte-9lxw8q"), main2.b(x3, "href", h = s3[0]("../")), main2.b(f3, "class", "big"), main2.b(a3, "class", "e404 svelte-9lxw8q");
      }, m(s4, t3) {
        main2.c(s4, a3, t3), main2.d(a3, e3), main2.d(a3, d3), main2.d(a3, f3), main2.d(f3, v2), main2.d(f3, x3), main2.d(x3, g2);
      }, p(s4, [a4]) {
        1 & a4 && h !== (h = s4[0]("../")) && main2.b(x3, "href", h);
      }, i: main2.n, o: main2.n, d(s4) {
        s4 && main2.f(a3);
      }};
    }
    function x2(s3, a3, e3) {
      let t3;
      return main2.g(s3, main2.u, (s4) => e3(0, t3 = s4)), [t3];
    }
    class fallback_5c5beadb_default extends main2.S {
      constructor(s3) {
        super(), main2.i(this, s3, x2, v, main2.s, {});
      }
    }
  });

  // dist/build/index-de07920c.js
  var require_index_de07920c = __commonJS((exports) => {
    __export(exports, {
      default: () => index_de07920c_default
    });
    const main2 = __toModule(require_main());
    function u2(e3, t3, r3) {
      const s3 = e3.slice();
      return s3[3] = t3[r3], s3;
    }
    function x2(e3) {
      let t3, r3, c3, i3, g3, p3, f3, m3, u3 = e3[3].title.toUpperCase() + "";
      return {c() {
        t3 = main2.e("div"), r3 = main2.e("h2"), c3 = main2.e("a"), i3 = main2.t(u3), p3 = main2.a(), f3 = main2.e("p"), f3.textContent = "Some description", m3 = main2.a(), main2.b(c3, "class", "p-2 rounded-md dark:text-white hover:bg-green-200 hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-green-500"), main2.b(c3, "href", g3 = e3[0](e3[3].path)), main2.b(f3, "class", "text-gray-600 dark:text-gray-50"), main2.b(t3, "class", "p-8 min-w-full md:py-10 mx-2 my-2 md:my-6 shadow-lg rounded-md prose dark:text-white");
      }, m(e4, s3) {
        main2.c(e4, t3, s3), main2.d(t3, r3), main2.d(r3, c3), main2.d(c3, i3), main2.d(t3, p3), main2.d(t3, f3), main2.d(t3, m3);
      }, p(e4, t4) {
        1 & t4 && g3 !== (g3 = e4[0](e4[3].path)) && main2.b(c3, "href", g3);
      }, d(e4) {
        e4 && main2.f(t3);
      }};
    }
    function y(e3) {
      let t3, r3 = e3[1], s3 = [];
      for (let t4 = 0; t4 < r3.length; t4 += 1)
        s3[t4] = x2(u2(e3, r3, t4));
      return {c() {
        for (let e4 = 0; e4 < s3.length; e4 += 1)
          s3[e4].c();
        t3 = main2.h();
      }, m(e4, r4) {
        for (let t4 = 0; t4 < s3.length; t4 += 1)
          s3[t4].m(e4, r4);
        main2.c(e4, t3, r4);
      }, p(e4, [a3]) {
        if (3 & a3) {
          let n3;
          for (r3 = e4[1], n3 = 0; n3 < r3.length; n3 += 1) {
            const o3 = u2(e4, r3, n3);
            s3[n3] ? s3[n3].p(o3, a3) : (s3[n3] = x2(o3), s3[n3].c(), s3[n3].m(t3.parentNode, t3));
          }
          for (; n3 < s3.length; n3 += 1)
            s3[n3].d(1);
          s3.length = r3.length;
        }
      }, i: main2.n, o: main2.n, d(e4) {
        main2.j(s3, e4), e4 && main2.f(t3);
      }};
    }
    function k(e3, t3, r3) {
      let s3, a3;
      main2.g(e3, main2.l, (e4) => r3(2, s3 = e4)), main2.g(e3, main2.u, (e4) => r3(0, a3 = e4));
      let n3 = s3.children;
      return console.log(n3), [a3, n3];
    }
    class index_de07920c_default extends main2.S {
      constructor(e3) {
        super(), main2.i(this, e3, k, y, main2.s, {});
      }
    }
  });

  // dist/build/jekyll-tutorial-9578b426.js
  var require_jekyll_tutorial_9578b426 = __commonJS((exports) => {
    __export(exports, {
      default: () => jekyll_tutorial_9578b426_default,
      metadata: () => x2
    });
    const main2 = __toModule(require_main());
    function v(n3) {
      let a3, s3, t3, e3, p3, o3, l3, c3, i3, u3, w2, v2, f3, x3, y, T, H, q, D, L, M, C, z, N, j, W, S, P, B, E, J, $2, F, I, O, K, A, G, _, R, V, Y, Z, U, Q, X, nn, an, sn, tn, en, pn, on, ln, cn, un, rn, kn, dn, gn, mn, hn, bn, wn, vn, fn, xn, yn, Tn, Hn, qn, Dn, Ln, Mn, Cn, zn, Nn, jn, Wn, Sn, Pn, Bn, En, Jn, $n, Fn, In, On, Kn, An, Gn, _n, Rn, Vn;
      return {c() {
        a3 = main2.e("p"), a3.textContent = "Moin \u{1F44B},", s3 = main2.a(), t3 = main2.e("p"), t3.innerHTML = 'in diesem Blogpost soll es um den Bau einer einfachen Website mit Jekyll und das kostenlose Hosten dieser Seite mit <code class="dark:text-white">GitHub-Pages</code>.', e3 = main2.a(), p3 = main2.e("h3"), p3.textContent = "Vorrausetzungen", o3 = main2.a(), l3 = main2.e("p"), l3.innerHTML = 'Wenn du diesem Tutorial folgen willst, dannn gehe bitte sicher, dass du schon HTML beherrschst, da ich hier nicht alles dar\xFCber erkl\xE4ren kann. Falls du noch nicht HTML beherrschst, ist dieses Tutorial empfehlenswert: <a class="dark:text-white" href="https://www.youtube.com/watch?v=qmTNnZCDJY0">Eigene Website mit HTML und CSS bauen</a>', c3 = main2.a(), i3 = main2.e("p"), i3.textContent = "Zudem erf\xFClle bitte folgende Vorraussetzungen:", u3 = main2.a(), w2 = main2.e("ul"), w2.innerHTML = '<li>habe auf deinem PC einen Codeeditor installiert, ich pers\xF6nlich nutze VS Code, <a class="dark:text-white" href="https://code.visualstudio.com/">hier</a> downloadbar (man kann zwar reintheoretisch auch den Standard Windowseditor benutzen was allerdings etwas umst\xE4ndlich ist)</li> \n<li>installiere <a class="dark:text-white" href="https://git-scm.com/">Git</a> und <a class="dark:text-white" href="https://www.ruby-lang.org/de/downloads/">Ruby</a> auf deinem PC \u{1F5A5}</li> \n<li>nachdem du Ruby installiert hast, f\xFChre <code class="dark:text-white">gem install bundler jekyll</code> in deinem Terminal aus</li>', v2 = main2.a(), f3 = main2.e("p"), f3.textContent = "Du erf\xFCllst alle Vorrausetzungen? Dann lass uns direkt starten \u{1F680}", x3 = main2.a(), y = main2.e("h2"), y.textContent = "Erstellen eines neuen Projektes", T = main2.a(), H = main2.e("p"), H.textContent = "Um mit dem Programmieren zu beginnen, navigiere zun\xE4chst in einem Terminal in den Ordner, in dem du das Projekt erstellen m\xF6chtest. Dorthin navigiert, f\xFChre in deinem Terminal zum erstellen des Projektes den Befehl", q = main2.a(), D = main2.e("pre"), L = main2.a(), M = main2.e("p"), M.textContent = "aus. Damit wird dein Projekt erstellt.", C = main2.a(), z = main2.e("p"), z.textContent = "Navigiere nun in den Projekordner mit", N = main2.a(), j = main2.e("pre"), W = main2.a(), S = main2.e("p"), S.textContent = "und f\xFChre den Befehl", P = main2.a(), B = main2.e("pre"), E = main2.a(), J = main2.e("p"), J.innerHTML = 'aus. Wenn du nun in deinem Webbrowser <a class="dark:text-white" href="localhost:4000">localhost:4000</a> eingibst, kannst du die Standardseite, die von Jekyll automatisch generiert wurde, sehen.', $2 = main2.a(), F = main2.e("h2"), F.textContent = "Eigene Inhalte erstellen", I = main2.a(), O = main2.e("p"), O.innerHTML = 'Nun wollen wir aber nicht die Jekyll-Defaultwebsite, sondern eine eigene Website entwickeln. Dazu stoppen wir zun\xE4chst den Server und l\xF6schen dann alles bis auf die Dateien <code class="dark:text-white">_config.yml</code>, <code class="dark:text-white">Gemfile</code>, <code class="dark:text-white">Gemfile.lock</code>, <code class="dark:text-white">.gitignore</code> und <code class="dark:text-white">404.html</code>.', K = main2.a(), A = main2.e("p"), A.innerHTML = 'Daraufhin ersetzen wir den Inhalt der Datei <code class="dark:text-white">_config.yml</code> durch folgendes:', G = main2.a(), _ = main2.e("pre"), R = main2.a(), V = main2.e("p"), V.innerHTML = 'Dann erstellen wir eine Datei mit dem Namen <code class="dark:text-white">index.html</code>, die folgenderma\xDFen aussieht:', Y = main2.a(), Z = main2.e("pre"), U = main2.a(), Q = main2.e("br"), X = main2.t("\nWenn wir nun mit "), nn = main2.e("code"), nn.textContent = "bundle exec jekyll serve", an = main2.t(" die Seite neu starten, bekommen wir folgendes zu sehen:\n"), sn = main2.e("img"), en = main2.a(), pn = main2.e("p"), pn.innerHTML = 'Das vorher programmierte <code class="dark:text-white">Hallo Welt</code> erscheint! Wenn wir das hier geschafft haben k\xF6nnen wir die Seite nach unseren W\xFCnschen und Bed\xFCrfnissen mit <code class="dark:text-white">HTML</code> ; <code class="dark:text-white">CSS</code> und <code class="dark:text-white">JavaScript</code> gestalten.', on = main2.a(), ln = main2.e("h2"), ln.textContent = "Layouts und Includes in Jekyll \u{1F503}", cn = main2.t("\nBisher haben wir ein einfaches "), un = main2.e("code"), un.textContent = "Hallo Welt", rn = main2.t(" auf der Website erscheinen lassen. Dies sah 1. nicht sch\xF6n aus und zweitens ist eine richtige Website ja auch etwas anderes...\n"), kn = main2.e("p"), kn.textContent = "Meistens sind Websites ja so aufgebaut:", dn = main2.a(), gn = main2.e("ul"), gn.innerHTML = "<li>oben: Navigationsleiste</li> \n<li>mitte: Inhalt</li> \n<li>unten: Fu\xDFzeile/Footer mit \xA9 und Link zu Impressum</li>", mn = main2.a(), hn = main2.e("p"), hn.innerHTML = 'Wenn unsere Website mehrere Seiten beinhaltet, dann m\xFCssten wir rein theoretisch die Navigation und den Footer in jeder <code class="dark:text-white">HTML</code> Datei neu schreiben, was nat\xFCrlich umst\xE4ndlich ist und bei \xC4nderungen and diesen Komponenten schnell un\xFCbersichtlich wird, da wir die Komponente in jeder Datei dann \xE4ndern m\xFCssen.\nDoch Jekyll nimmt uns diese Arbeit mit den sogenannten <code class="dark:text-white">Includes</code> und <code class="dark:text-white">Layouts</code> ab:', bn = main2.a(), wn = main2.e("h3"), wn.textContent = "Includes", vn = main2.t("\nStatt in jeder Datei z.B. deie Naviation neu zu programmieren, k\xF6nnen wir die Navbar in "), fn = main2.e("b"), fn.textContent = "einer", xn = main2.t(" Datei designen und m\xFCsssen diese dann lediglich in den anderen "), yn = main2.e("code"), yn.textContent = "HTML", Tn = main2.t(" Dateien importieren. Der Vorteil liegt auf der Hand: Wir \xE4ndern die auf jeder Seite vorhandene Komponente wie die Navigationsbar nur in einer Datei und m\xFCssen nicht in jeder Datei diese neu programmieren. Und so gehen wir dabei vor:\n"), Hn = main2.e("ol"), Hn.innerHTML = '<li>Wir erstellen einen Ordner mit dem Namen <code class="dark:text-white">_includes</code>. Dies ist wichtig, da Jekyll nur aus einem Ordner mit <b>exakt</b> diesem Namen importieren kann</li> \n<li>Erstelle eine Datei mit dem Namen <code class="dark:text-white">_navbar.html</code> in dem in 1. erstellten Ordner, hier werden wir die Navigationsleiste unserer Seite erstellen.</li> \n<li>Bearbeite nun deine <code class="dark:text-white">index.html</code> so, dass sie folgenderma\xDFen aussieht:</li>', qn = main2.a(), Dn = main2.e("pre"), Ln = main2.a(), Mn = main2.e("p"), Mn.innerHTML = 'Damit importierst du <a href="https://bulma.io/" class="dark:text-white">Bulma</a>, ein <code class="dark:text-white">CSS</code> Framework, das ich hier nutze, da es vorgefertigte Komponenten wie Navbars bereitstellt (das macht die Arbeit am Anfang deutlich leichter). Zudem definiertst du mit <code class="dark:text-white">permalink: /</code> den Link, mit dem <code class="dark:text-white">index.html</code> aufgerufen wird.', Cn = main2.a(), zn = main2.e("ol"), zn.innerHTML = '<li>Nun programmieren wir die Navbar: dazu begeben wir uns zur\xFCck in die Datei <code class="dark:text-white">_navbar.html</code> und programmieren folgendes als Navbar:</li>', Nn = main2.a(), jn = main2.e("pre"), Wn = main2.a(), Sn = main2.e("p"), Sn.innerHTML = 'Du kannst auch deine eigene Navbar entwickeln, die (in englisch verfasste) Dokumentation dazu findest du <a href="https://bulma.io/documentation/components/navbar/" class="dark:text-white">hier</a>.', Pn = main2.a(), Bn = main2.e("ol"), Bn.innerHTML = "<li>Nun wollen wir die Navbar in unser <code>index.html</code> Datei importieren: Dazu \xF6ffnen wir <code>index.html</code> und f\xFCgen \xFCber <code>&lt;section class=&quot;section&quot;&gt;</code> die Zeile</li>", En = main2.a(), Jn = main2.e("pre"), $n = main2.a(), Fn = main2.e("p"), Fn.textContent = "hinzu, die dann die Navbar importiert. Wenn wir uns nun im Browser unsere Seite neu laden k\xF6nnen wir in etwa folgendes sehen:", In = main2.a(), On = main2.e("p"), On.textContent = "screenshot 4 here", Kn = main2.a(), An = main2.e("p"), An.textContent = "Zu sehen ist die von uns programmierte Navigationsleiste\u{1F973}", Gn = main2.a(), _n = main2.e("p"), _n.textContent = "Nun kommen wir zur ersten Aufgabe f\xFCr dich:", Rn = main2.a(), Vn = main2.e("p"), Vn.innerHTML = 'Programmiere f\xFCr die Website einen Footer(= Fu\xDFzeile) und importiere diesen mithilfe von <code>Includes</code> in die Datei <code>index.html</code>. Die Footer Komponente von <code>Bulma</code> kannst du <a href="https://bulma.io/documentation/layout/footer/">hier</a> finden. Du kannst aber gerne auch einen eigenen Footer entwickeln.', main2.b(p3, "class", "dark:text-white"), main2.b(y, "class", "dark:text-white"), main2.b(D, "class", "language-bash"), main2.b(j, "class", "language-bash"), main2.b(B, "class", "language-bash"), main2.b(F, "class", "dark:text-white"), main2.b(_, "class", "language-yml"), main2.b(Z, "class", "language-html"), main2.b(nn, "class", "dark:text-white"), main2.b(sn, "alt", "Result Screenshot no. 1"), sn.src !== (tn = "/images/jekyll-tutorial/screenshot1.jpg") && main2.b(sn, "src", "/images/jekyll-tutorial/screenshot1.jpg"), main2.b(ln, "class", "dark:text-white"), main2.b(un, "class", "dark:text-white"), main2.b(wn, "class", "dark:text-white"), main2.b(yn, "class", "dark:text-white"), main2.b(Dn, "class", "language-html"), main2.b(zn, "start", "4"), main2.b(jn, "class", "language-html"), main2.b(Bn, "start", "5"), main2.b(Jn, "class", "language-null");
      }, m(n4, r3) {
        main2.c(n4, a3, r3), main2.c(n4, s3, r3), main2.c(n4, t3, r3), main2.c(n4, e3, r3), main2.c(n4, p3, r3), main2.c(n4, o3, r3), main2.c(n4, l3, r3), main2.c(n4, c3, r3), main2.c(n4, i3, r3), main2.c(n4, u3, r3), main2.c(n4, w2, r3), main2.c(n4, v2, r3), main2.c(n4, f3, r3), main2.c(n4, x3, r3), main2.c(n4, y, r3), main2.c(n4, T, r3), main2.c(n4, H, r3), main2.c(n4, q, r3), main2.c(n4, D, r3), D.innerHTML = '<code class="language-bash">jekyll new PROJEKTNAME</code>', main2.c(n4, L, r3), main2.c(n4, M, r3), main2.c(n4, C, r3), main2.c(n4, z, r3), main2.c(n4, N, r3), main2.c(n4, j, r3), j.innerHTML = '<code class="language-bash"><span class="token builtin class-name">cd</span> PROJEKTNAME</code>', main2.c(n4, W, r3), main2.c(n4, S, r3), main2.c(n4, P, r3), main2.c(n4, B, r3), B.innerHTML = '<code class="language-bash">bundle <span class="token builtin class-name">exec</span> jekyll serve</code>', main2.c(n4, E, r3), main2.c(n4, J, r3), main2.c(n4, $2, r3), main2.c(n4, F, r3), main2.c(n4, I, r3), main2.c(n4, O, r3), main2.c(n4, K, r3), main2.c(n4, A, r3), main2.c(n4, G, r3), main2.c(n4, _, r3), _.innerHTML = '<code class="language-yml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Your awesome title\n<span class="token key atrule">baseurl</span><span class="token punctuation">:</span> <span class="token string">""</span>\n<span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">""</span>\n\n<span class="token key atrule">plugins</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> jekyll<span class="token punctuation">-</span>feed</code>', main2.c(n4, R, r3), main2.c(n4, V, r3), main2.c(n4, Y, r3), main2.c(n4, Z, r3), Z.innerHTML = '<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>de<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Hallo Jekyll<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hallo Welt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>', main2.c(n4, U, r3), main2.c(n4, Q, r3), main2.c(n4, X, r3), main2.c(n4, nn, r3), main2.c(n4, an, r3), main2.c(n4, sn, r3), main2.c(n4, en, r3), main2.c(n4, pn, r3), main2.c(n4, on, r3), main2.c(n4, ln, r3), main2.c(n4, cn, r3), main2.c(n4, un, r3), main2.c(n4, rn, r3), main2.c(n4, kn, r3), main2.c(n4, dn, r3), main2.c(n4, gn, r3), main2.c(n4, mn, r3), main2.c(n4, hn, r3), main2.c(n4, bn, r3), main2.c(n4, wn, r3), main2.c(n4, vn, r3), main2.c(n4, fn, r3), main2.c(n4, xn, r3), main2.c(n4, yn, r3), main2.c(n4, Tn, r3), main2.c(n4, Hn, r3), main2.c(n4, qn, r3), main2.c(n4, Dn, r3), Dn.innerHTML = '<code class="language-html">---\npermalink: /\n---\n\n<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>de<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Your awesome title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section<span class="token punctuation">"</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 0.2rem<span class="token punctuation">;</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>', main2.c(n4, Ln, r3), main2.c(n4, Mn, r3), main2.c(n4, Cn, r3), main2.c(n4, zn, r3), main2.c(n4, Nn, r3), main2.c(n4, jn, r3), jn.innerHTML = '<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar is-light<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main navigation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-brand<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      Titel\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>\n        <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-burger burger<span class="token punctuation">"</span></span>\n        <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span>\n        <span class="token attr-name">aria-expanded</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>\n        <span class="token attr-name">data-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbarBasicExample<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbarBasicExample<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-start<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Home\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-item<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/impressum/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            Impressum\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span></code>', main2.c(n4, Wn, r3), main2.c(n4, Sn, r3), main2.c(n4, Pn, r3), main2.c(n4, Bn, r3), main2.c(n4, En, r3), main2.c(n4, Jn, r3), Jn.innerHTML = '<code class="language-null">&#123;% include _navbar.html %&#125;</code>', main2.c(n4, $n, r3), main2.c(n4, Fn, r3), main2.c(n4, In, r3), main2.c(n4, On, r3), main2.c(n4, Kn, r3), main2.c(n4, An, r3), main2.c(n4, Gn, r3), main2.c(n4, _n, r3), main2.c(n4, Rn, r3), main2.c(n4, Vn, r3);
      }, p: main2.n, d(n4) {
        n4 && main2.f(a3), n4 && main2.f(s3), n4 && main2.f(t3), n4 && main2.f(e3), n4 && main2.f(p3), n4 && main2.f(o3), n4 && main2.f(l3), n4 && main2.f(c3), n4 && main2.f(i3), n4 && main2.f(u3), n4 && main2.f(w2), n4 && main2.f(v2), n4 && main2.f(f3), n4 && main2.f(x3), n4 && main2.f(y), n4 && main2.f(T), n4 && main2.f(H), n4 && main2.f(q), n4 && main2.f(D), n4 && main2.f(L), n4 && main2.f(M), n4 && main2.f(C), n4 && main2.f(z), n4 && main2.f(N), n4 && main2.f(j), n4 && main2.f(W), n4 && main2.f(S), n4 && main2.f(P), n4 && main2.f(B), n4 && main2.f(E), n4 && main2.f(J), n4 && main2.f($2), n4 && main2.f(F), n4 && main2.f(I), n4 && main2.f(O), n4 && main2.f(K), n4 && main2.f(A), n4 && main2.f(G), n4 && main2.f(_), n4 && main2.f(R), n4 && main2.f(V), n4 && main2.f(Y), n4 && main2.f(Z), n4 && main2.f(U), n4 && main2.f(Q), n4 && main2.f(X), n4 && main2.f(nn), n4 && main2.f(an), n4 && main2.f(sn), n4 && main2.f(en), n4 && main2.f(pn), n4 && main2.f(on), n4 && main2.f(ln), n4 && main2.f(cn), n4 && main2.f(un), n4 && main2.f(rn), n4 && main2.f(kn), n4 && main2.f(dn), n4 && main2.f(gn), n4 && main2.f(mn), n4 && main2.f(hn), n4 && main2.f(bn), n4 && main2.f(wn), n4 && main2.f(vn), n4 && main2.f(fn), n4 && main2.f(xn), n4 && main2.f(yn), n4 && main2.f(Tn), n4 && main2.f(Hn), n4 && main2.f(qn), n4 && main2.f(Dn), n4 && main2.f(Ln), n4 && main2.f(Mn), n4 && main2.f(Cn), n4 && main2.f(zn), n4 && main2.f(Nn), n4 && main2.f(jn), n4 && main2.f(Wn), n4 && main2.f(Sn), n4 && main2.f(Pn), n4 && main2.f(Bn), n4 && main2.f(En), n4 && main2.f(Jn), n4 && main2.f($n), n4 && main2.f(Fn), n4 && main2.f(In), n4 && main2.f(On), n4 && main2.f(Kn), n4 && main2.f(An), n4 && main2.f(Gn), n4 && main2.f(_n), n4 && main2.f(Rn), n4 && main2.f(Vn);
      }};
    }
    function f2(n3) {
      let a3, s3;
      const r3 = [x2];
      let k2 = {$$slots: {default: [v]}, $$scope: {ctx: n3}};
      for (let n4 = 0; n4 < r3.length; n4 += 1)
        k2 = main2.k(k2, r3[n4]);
      return a3 = new g({props: k2}), {c() {
        main2.m(a3.$$.fragment);
      }, m(n4, t3) {
        main2.o(a3, n4, t3), s3 = true;
      }, p(n4, [s4]) {
        const t3 = 0 & s4 ? main2.p(r3, [main2.w(x2)]) : {};
        1 & s4 && (t3.$$scope = {dirty: s4, ctx: n4}), a3.$set(t3);
      }, i(n4) {
        s3 || (main2.q(a3.$$.fragment, n4), s3 = true);
      }, o(n4) {
        main2.r(a3.$$.fragment, n4), s3 = false;
      }, d(n4) {
        main2.v(a3, n4);
      }};
    }
    const x2 = {title: "Jekyll & GitHub Pages Tutorial", description: "Entwickeln und kostenloses Hosten einer Website mithilfe von GitHubPages und Jekyll", layout: "post"};
    class jekyll_tutorial_9578b426_default extends main2.S {
      constructor(n3) {
        super(), main2.i(this, n3, null, f2, main2.s, {});
      }
    }
  });

  // dist/build/test-f7892d18.js
  var require_test_f7892d18 = __commonJS((exports) => {
    __export(exports, {
      default: () => test_f7892d18_default,
      metadata: () => g2
    });
    const main2 = __toModule(require_main());
    function d2(t3) {
      let s3;
      return {c() {
        s3 = main2.e("p"), s3.textContent = "This is a stupid test post.";
      }, m(t4, e3) {
        main2.c(t4, s3, e3);
      }, d(t4) {
        t4 && main2.f(s3);
      }};
    }
    function x2(t3) {
      let s3, e3;
      const $3 = [g2];
      let f3 = {$$slots: {default: [d2]}, $$scope: {ctx: t3}};
      for (let t4 = 0; t4 < $3.length; t4 += 1)
        f3 = main2.k(f3, $3[t4]);
      return s3 = new g({props: f3}), {c() {
        main2.m(s3.$$.fragment);
      }, m(t4, o3) {
        main2.o(s3, t4, o3), e3 = true;
      }, p(t4, [e4]) {
        const o3 = 0 & e4 ? main2.p($3, [main2.w(g2)]) : {};
        1 & e4 && (o3.$$scope = {dirty: e4, ctx: t4}), s3.$set(o3);
      }, i(t4) {
        e3 || (main2.q(s3.$$.fragment, t4), e3 = true);
      }, o(t4) {
        main2.r(s3.$$.fragment, t4), e3 = false;
      }, d(t4) {
        main2.v(s3, t4);
      }};
    }
    const g2 = {title: "Test", description: "A boring test", layout: "post"};
    class test_f7892d18_default extends main2.S {
      constructor(t3) {
        super(), main2.i(this, t3, null, x2, main2.s, {});
      }
    }
  });

  // dist/build/_layout-fbce22c0.js
  var require_layout_fbce22c0 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_fbce22c0_default
    });
    const main2 = __toModule(require_main());
    function d2(s3) {
      let e3, t3, d3;
      const f3 = s3[1].default, m2 = main2.x(f3, s3, s3[0], null);
      return {c() {
        e3 = main2.e("link"), t3 = main2.a(), m2 && m2.c(), main2.b(e3, "rel", "stylesheet"), main2.b(e3, "href", "/prism.css");
      }, m(s4, a3) {
        main2.d(document.head, e3), main2.c(s4, t3, a3), m2 && m2.m(s4, a3), d3 = true;
      }, p(s4, [e4]) {
        m2 && m2.p && 1 & e4 && main2.z(m2, f3, s4, s4[0], e4, null, null);
      }, i(s4) {
        d3 || (main2.q(m2, s4), d3 = true);
      }, o(s4) {
        main2.r(m2, s4), d3 = false;
      }, d(s4) {
        main2.f(e3), s4 && main2.f(t3), m2 && m2.d(s4);
      }};
    }
    function f2(s3, e3, t3) {
      let {$$slots: a3 = {}, $$scope: n3} = e3;
      return s3.$$set = (s4) => {
        "$$scope" in s4 && t3(0, n3 = s4.$$scope);
      }, [n3, a3];
    }
    class layout_fbce22c0_default extends main2.S {
      constructor(s3) {
        super(), main2.i(this, s3, f2, d2, main2.s, {});
      }
    }
  });

  // dist/build/index-72c2ee1d.js
  var require_index_72c2ee1d = __commonJS((exports) => {
    __export(exports, {
      default: () => index_72c2ee1d_default
    });
    const main2 = __toModule(require_main());
    function v(e3) {
      let t3;
      return {c() {
        t3 = main2.e("div"), t3.innerHTML = '<div class="coding inverse-toggle px-5 pt-4 shadow-xl text-gray-100 text-sm font-mono subpixel-antialiased \n                bg-gray-800 dark:bg-gray-900 pb-6 rounded-lg leading-normal overflow-hidden"><div class="top mb-2 flex"><div class="h-3 w-3 bg-red-500 rounded-full"></div> \n      <div class="ml-2 h-3 w-3 bg-yellow-400 rounded-full"></div> \n      <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div></div> \n    <div class="mt-4 flex justify-start"><span class="text-green-400">computer:~$</span> \n      <p class="pl-2 typewriter svelte-1c7j37q">echo &quot;Hello there \u{1F44B}\u{1F3FB}&quot;\n        <br/></p></div> \n    <div class="mt-4 flex justify-start"><span class="text-green-400">computer:~$</span> \n      <p class="pl-2 typewriter svelte-1c7j37q">apt-get social-media\n        <br/></p></div> \n    <div class="mt-4 flex"><div class="pl-2 flex flex-row align-middle space-x-4 max-w-full"><div class="flex flex-row space-x-1"><svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> \n          <a href="https://github.com/HAUDRAUFHAUN" target="_blank" rel="noopener" class="underline">HAUDRAUFHAUN</a></div> \n        <div class="flex flex-row space-x-1"><svg xmlns="http://www.w3.org/2000/svg" class="text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg> \n          <a href="https://twitter.com/haudraufhaun1" target="_blank" rel="noopener" class="underline">@haudraufhaun1</a></div> \n        <div class="flex flex-row space-x-1"><svg xmlns="http://www.w3.org/2000/svg" class="text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path><path d="M12 8l1 -5l6 1"></path><circle cx="19" cy="4" r="1"></circle><circle cx="9" cy="13" r=".5" fill="currentColor"></circle><circle cx="15" cy="13" r=".5" fill="currentColor"></circle><path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path></svg> \n          <a href="https://reddit.com/u/haudraufhaun" target="_blank" rel="noopener" class="underline">u/haudraufhaun</a></div> \n        <br/></div></div></div>', main2.b(t3, "class", "w-full mx-2 my-4");
      }, m(e4, a3) {
        main2.c(e4, t3, a3);
      }, p: main2.n, i: main2.n, o: main2.n, d(e4) {
        e4 && main2.f(t3);
      }};
    }
    class x2 extends main2.S {
      constructor(e3) {
        super(), main2.i(this, e3, null, v, main2.s, {});
      }
    }
    function g2(e3) {
      let t3, a3, f3, v2;
      return f3 = new x2({}), {c() {
        t3 = main2.e("h1"), t3.textContent = "haudraufhaun", a3 = main2.a(), main2.m(f3.$$.fragment), main2.b(t3, "class", "text-xl md:text-2xl lg:text-4xl");
      }, m(e4, s3) {
        main2.c(e4, t3, s3), main2.c(e4, a3, s3), main2.o(f3, e4, s3), v2 = true;
      }, p: main2.n, i(e4) {
        v2 || (main2.q(f3.$$.fragment, e4), v2 = true);
      }, o(e4) {
        main2.r(f3.$$.fragment, e4), v2 = false;
      }, d(e4) {
        e4 && main2.f(t3), e4 && main2.f(a3), main2.v(f3, e4);
      }};
    }
    function w2(e3) {
      return main2.A.title = "haudraufhaun - Home", main2.A.description = "Website of @haudraufhaun", [];
    }
    class index_72c2ee1d_default extends main2.S {
      constructor(e3) {
        super(), main2.i(this, e3, w2, g2, main2.s, {});
      }
    }
  });

  // dist/build/_layout-841becc8.js
  var require_layout_841becc8 = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_841becc8_default
    });
    const main2 = __toModule(require_main());
    function y(e3, t3, n3) {
      const r3 = e3.slice();
      return r3[8] = t3[n3], r3;
    }
    function $2(e3, t3, n3) {
      const r3 = e3.slice();
      return r3[8] = t3[n3], r3;
    }
    function M(e3) {
      let t3, n3, c3 = e3[8].name + "";
      return {c() {
        t3 = main2.e("a"), n3 = main2.t(c3), main2.b(t3, "href", e3[8].link), main2.b(t3, "class", "font-medium text-green-500 hover:text-green-800 hover:bg-green-300 dark:text-white dark:hover:text-green-800 p-3 rounded-md");
      }, m(e4, r3) {
        main2.c(e4, t3, r3), main2.d(t3, n3);
      }, p: main2.n, d(e4) {
        e4 && main2.f(t3);
      }};
    }
    function j(e3) {
      let t3, n3, c3 = e3[8].name + "";
      return {c() {
        t3 = main2.e("a"), n3 = main2.t(c3), main2.b(t3, "href", e3[8].link), main2.b(t3, "class", "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-green-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600"), main2.b(t3, "role", "menuitem");
      }, m(e4, r3) {
        main2.c(e4, t3, r3), main2.d(t3, n3);
      }, p: main2.n, d(e4) {
        e4 && main2.f(t3);
      }};
    }
    function C(e3) {
      let t3, n3, l3, p3, f3, x3, v2, w3, b2, k2, C2, H2, z2, B2, L2, S2, T2, D2, q, F, G, I, Y, A, E, J, K, N = e3[2], O = [];
      for (let t4 = 0; t4 < N.length; t4 += 1)
        O[t4] = M($2(e3, N, t4));
      let P = e3[2], Q = [];
      for (let t4 = 0; t4 < P.length; t4 += 1)
        Q[t4] = j(y(e3, P, t4));
      return {c() {
        t3 = main2.e("div"), n3 = main2.e("div"), l3 = main2.e("div"), p3 = main2.e("nav"), f3 = main2.e("div");
        for (let e4 = 0; e4 < O.length; e4 += 1)
          O[e4].c();
        x3 = main2.a(), v2 = main2.e("button"), v2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"></path><path d="M12 3v17"></path><path d="M12 12l3.544 -3.544"></path><path d="M12 17.3l5.558 -5.558"></path></svg>', w3 = main2.a(), b2 = main2.e("div"), k2 = main2.e("div"), C2 = main2.e("div"), H2 = main2.e("div"), z2 = main2.e("button"), z2.innerHTML = '<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>', B2 = main2.a(), L2 = main2.e("button"), L2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"></path><path d="M12 3v17"></path><path d="M12 12l3.544 -3.544"></path><path d="M12 17.3l5.558 -5.558"></path></svg>', S2 = main2.a(), T2 = main2.e("div"), D2 = main2.e("div"), q = main2.e("div"), F = main2.e("div"), G = main2.e("div"), I = main2.e("button"), I.innerHTML = '<span class="sr-only">Close main menu</span> \n                \n                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', Y = main2.a(), A = main2.e("div"), E = main2.e("div");
        for (let e4 = 0; e4 < Q.length; e4 += 1)
          Q[e4].c();
        main2.b(v2, "class", "right-0 absolute p-1 rounded-lg text-gray-600 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 fill-current"), main2.b(f3, "class", "hidden md:block lg:block xl:block md:ml-10 md:pr-4 md:space-x-8"), main2.b(p3, "class", "relative flex items-center justify-between sm:h-10 lg:justify-start lg:w-full"), main2.b(p3, "aria-label", "Global"), main2.b(l3, "class", "relative pt-6 px-4 sm:px-6 lg:px-8"), main2.b(z2, "class", "bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center text-gray-400 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"), main2.b(H2, "class", "-m3-2"), main2.b(L2, "class", "right-0 absolute p-1 mr-2 rounded-lg text-gray-600 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 fill-current"), main2.b(C2, "class", "px-4 flex items-center justify-between"), main2.B(k2, "hidden", e3[0] === "false"), main2.b(b2, "class", "md:hidden right-0"), main2.b(I, "type", "button"), main2.b(I, "class", "bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-red-500 dark:text-red-300 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"), main2.b(G, "class", "-mr-2"), main2.b(F, "class", "px-5 pt-4 flex items-center justify-between"), main2.b(E, "class", "px-2 pt-2 pb-3 space-y-1"), main2.b(E, "role", "none"), main2.b(A, "role", "menu"), main2.b(A, "aria-orientation", "vertical"), main2.b(A, "aria-labelledby", "main-menu"), main2.b(q, "class", "rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden"), main2.b(D2, "class", "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"), main2.B(T2, "hidden", e3[0] === "true"), main2.b(n3, "class", "relative z-10 pb-2 bg-white dark:bg-gray-800 sm:pb-8 md:pb-10 lg:max-w-full lg:w-full lg:pb-14 xl:pb-16"), main2.b(t3, "class", "max-w-full mx-auto");
      }, m(r3, a3) {
        main2.c(r3, t3, a3), main2.d(t3, n3), main2.d(n3, l3), main2.d(l3, p3), main2.d(p3, f3);
        for (let e4 = 0; e4 < O.length; e4 += 1)
          O[e4].m(f3, null);
        main2.d(f3, x3), main2.d(f3, v2), main2.d(n3, w3), main2.d(n3, b2), main2.d(b2, k2), main2.d(k2, C2), main2.d(C2, H2), main2.d(H2, z2), main2.d(C2, B2), main2.d(C2, L2), main2.d(n3, S2), main2.d(n3, T2), main2.d(T2, D2), main2.d(D2, q), main2.d(q, F), main2.d(F, G), main2.d(G, I), main2.d(q, Y), main2.d(q, A), main2.d(A, E);
        for (let e4 = 0; e4 < Q.length; e4 += 1)
          Q[e4].m(E, null);
        J || (K = [main2.C(v2, "click", e3[3]), main2.C(z2, "click", e3[4]), main2.C(L2, "click", e3[5]), main2.C(I, "click", e3[6])], J = true);
      }, p(e4, [t4]) {
        if (4 & t4) {
          let n4;
          for (N = e4[2], n4 = 0; n4 < N.length; n4 += 1) {
            const r3 = $2(e4, N, n4);
            O[n4] ? O[n4].p(r3, t4) : (O[n4] = M(r3), O[n4].c(), O[n4].m(f3, x3));
          }
          for (; n4 < O.length; n4 += 1)
            O[n4].d(1);
          O.length = N.length;
        }
        if (1 & t4 && main2.B(k2, "hidden", e4[0] === "false"), 4 & t4) {
          let n4;
          for (P = e4[2], n4 = 0; n4 < P.length; n4 += 1) {
            const r3 = y(e4, P, n4);
            Q[n4] ? Q[n4].p(r3, t4) : (Q[n4] = j(r3), Q[n4].c(), Q[n4].m(E, null));
          }
          for (; n4 < Q.length; n4 += 1)
            Q[n4].d(1);
          Q.length = P.length;
        }
        1 & t4 && main2.B(T2, "hidden", e4[0] === "true");
      }, i: main2.n, o: main2.n, d(e4) {
        e4 && main2.f(t3), main2.j(O, e4), main2.j(Q, e4), J = false, main2.D(K);
      }};
    }
    function H(e3, t3, n3) {
      function r3() {
        localStorage.theme === "dark" ? (localStorage.theme = "light", window.location.reload(true)) : localStorage.theme = "dark", window.location.reload(true);
      }
      let l3 = "true";
      return [l3, r3, [{link: "/", name: "Home"}, {link: "/blog", name: "Blog"}], () => r3(), () => n3(0, l3 = "false"), () => r3(), () => n3(0, l3 = "true")];
    }
    class z extends main2.S {
      constructor(e3) {
        super(), main2.i(this, e3, H, C, main2.s, {});
      }
    }
    function B(e3) {
      let t3, n3, g3, h2, u3, m3, p3, f3;
      return {c() {
        t3 = main2.e("br"), n3 = main2.a(), g3 = main2.e("footer"), h2 = main2.e("div"), u3 = main2.t("Copyright \xA9"), m3 = main2.t(e3[0]), p3 = main2.t("\xA0\xA0"), f3 = main2.e("a"), f3.textContent = "Imprint", main2.b(f3, "href", "/imprint"), main2.b(f3, "class", ""), main2.b(h2, "class", "justify-center justify-items-center"), main2.b(g3, "class", "relative bottom-0 left-0 right-0 min-w-full p-4 flex flex-col justify-center justify-items-center text-center content-center font-sans text-xs sm:text-base md:font-medium bg-green-500 text-white");
      }, m(e4, r3) {
        main2.c(e4, t3, r3), main2.c(e4, n3, r3), main2.c(e4, g3, r3), main2.d(g3, h2), main2.d(h2, u3), main2.d(h2, m3), main2.d(h2, p3), main2.d(h2, f3);
      }, p: main2.n, i: main2.n, o: main2.n, d(e4) {
        e4 && main2.f(t3), e4 && main2.f(n3), e4 && main2.f(g3);
      }};
    }
    function L(e3) {
      return [new Date().getFullYear()];
    }
    class S extends main2.S {
      constructor(e3) {
        super(), main2.i(this, e3, L, B, main2.s, {});
      }
    }
    function T(e3) {
      let t3, n3, l3, o3, i3, g3;
      t3 = new z({});
      const h2 = e3[1].default, u3 = main2.x(h2, e3, e3[0], null);
      return i3 = new S({}), {c() {
        main2.m(t3.$$.fragment), n3 = main2.a(), l3 = main2.e("main"), u3 && u3.c(), o3 = main2.a(), main2.m(i3.$$.fragment), main2.b(l3, "class", "dark:bg-gray-800 dark:text-white p-4 m-4 md:mx-11 md:px-11 box relative  max-w-full min-h-screen");
      }, m(e4, r3) {
        main2.o(t3, e4, r3), main2.c(e4, n3, r3), main2.c(e4, l3, r3), u3 && u3.m(l3, null), main2.c(e4, o3, r3), main2.o(i3, e4, r3), g3 = true;
      }, p(e4, [t4]) {
        u3 && u3.p && 1 & t4 && main2.z(u3, h2, e4, e4[0], t4, null, null);
      }, i(e4) {
        g3 || (main2.q(t3.$$.fragment, e4), main2.q(u3, e4), main2.q(i3.$$.fragment, e4), g3 = true);
      }, o(e4) {
        main2.r(t3.$$.fragment, e4), main2.r(u3, e4), main2.r(i3.$$.fragment, e4), g3 = false;
      }, d(e4) {
        main2.v(t3, e4), e4 && main2.f(n3), e4 && main2.f(l3), u3 && u3.d(e4), e4 && main2.f(o3), main2.v(i3, e4);
      }};
    }
    function D(e3, t3, n3) {
      let {$$slots: r3 = {}, $$scope: l3} = t3;
      return e3.$$set = (e4) => {
        "$$scope" in e4 && n3(0, l3 = e4.$$scope);
      }, [l3, r3];
    }
    class layout_841becc8_default extends main2.S {
      constructor(e3) {
        super(), main2.i(this, e3, D, T, main2.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      A: () => Dt,
      B: () => P,
      C: () => _,
      D: () => r2,
      S: () => rt,
      a: () => b,
      b: () => x2,
      c: () => h,
      d: () => d2,
      e: () => y,
      f: () => m2,
      g: () => l2,
      h: () => w2,
      i: () => ot,
      j: () => g2,
      k: () => e2,
      l: () => At,
      m: () => tt,
      n: () => t2,
      o: () => et,
      p: () => X,
      q: () => W,
      r: () => G,
      s: () => s2,
      t: () => $2,
      u: () => Bt,
      v: () => nt,
      w: () => Y,
      x: () => u2,
      y: () => v,
      z: () => f2
    });
    function t2() {
    }
    function e2(t3, e3) {
      for (const n3 in e3)
        t3[n3] = e3[n3];
      return t3;
    }
    function n2(t3) {
      return t3();
    }
    function o2() {
      return Object.create(null);
    }
    function r2(t3) {
      t3.forEach(n2);
    }
    function i2(t3) {
      return typeof t3 == "function";
    }
    function s2(t3, e3) {
      return t3 != t3 ? e3 == e3 : t3 !== e3 || t3 && typeof t3 == "object" || typeof t3 == "function";
    }
    function a2(e3, ...n3) {
      if (e3 == null)
        return t2;
      const o3 = e3.subscribe(...n3);
      return o3.unsubscribe ? () => o3.unsubscribe() : o3;
    }
    function c2(t3) {
      let e3;
      return a2(t3, (t4) => e3 = t4)(), e3;
    }
    function l2(t3, e3, n3) {
      t3.$$.on_destroy.push(a2(e3, n3));
    }
    function u2(t3, e3, n3, o3) {
      if (t3) {
        const r3 = p2(t3, e3, n3, o3);
        return t3[0](r3);
      }
    }
    function p2(t3, n3, o3, r3) {
      return t3[1] && r3 ? e2(o3.ctx.slice(), t3[1](r3(n3))) : o3.ctx;
    }
    function f2(t3, e3, n3, o3, r3, i3, s3) {
      const a3 = function(t4, e4, n4, o4) {
        if (t4[2] && o4) {
          const r4 = t4[2](o4(n4));
          if (e4.dirty === void 0)
            return r4;
          if (typeof r4 == "object") {
            const t5 = [], n5 = Math.max(e4.dirty.length, r4.length);
            for (let o5 = 0; o5 < n5; o5 += 1)
              t5[o5] = e4.dirty[o5] | r4[o5];
            return t5;
          }
          return e4.dirty | r4;
        }
        return e4.dirty;
      }(e3, o3, r3, i3);
      if (a3) {
        const r4 = p2(e3, n3, o3, s3);
        t3.p(r4, a3);
      }
    }
    function d2(t3, e3) {
      t3.appendChild(e3);
    }
    function h(t3, e3, n3) {
      t3.insertBefore(e3, n3 || null);
    }
    function m2(t3) {
      t3.parentNode.removeChild(t3);
    }
    function g2(t3, e3) {
      for (let n3 = 0; n3 < t3.length; n3 += 1)
        t3[n3] && t3[n3].d(e3);
    }
    function y(t3) {
      return document.createElement(t3);
    }
    function $2(t3) {
      return document.createTextNode(t3);
    }
    function b() {
      return $2(" ");
    }
    function w2() {
      return $2("");
    }
    function _(t3, e3, n3, o3) {
      return t3.addEventListener(e3, n3, o3), () => t3.removeEventListener(e3, n3, o3);
    }
    function x2(t3, e3, n3) {
      n3 == null ? t3.removeAttribute(e3) : t3.getAttribute(e3) !== n3 && t3.setAttribute(e3, n3);
    }
    function v(t3, e3) {
      e3 = "" + e3, t3.wholeText !== e3 && (t3.data = e3);
    }
    function P(t3, e3, n3) {
      t3.classList[n3 ? "add" : "remove"](e3);
    }
    let k;
    function j(t3) {
      k = t3;
    }
    function O() {
      if (!k)
        throw new Error("Function called outside component initialization");
      return k;
    }
    function E(t3, e3) {
      O().$$.context.set(t3, e3);
    }
    function L(t3) {
      return O().$$.context.get(t3);
    }
    const I = [];
    const S = [];
    const R = [];
    const T = [];
    const F = Promise.resolve();
    let N = false;
    function A() {
      N || (N = true, F.then(U));
    }
    function M() {
      return A(), F;
    }
    function C(t3) {
      R.push(t3);
    }
    let q = false;
    const B = new Set();
    function U() {
      if (!q) {
        q = true;
        do {
          for (let t3 = 0; t3 < I.length; t3 += 1) {
            const e3 = I[t3];
            j(e3), D(e3.$$);
          }
          for (j(null), I.length = 0; S.length; )
            S.pop()();
          for (let t3 = 0; t3 < R.length; t3 += 1) {
            const e3 = R[t3];
            B.has(e3) || (B.add(e3), e3());
          }
          R.length = 0;
        } while (I.length);
        for (; T.length; )
          T.pop()();
        N = false, q = false, B.clear();
      }
    }
    function D(t3) {
      if (t3.fragment !== null) {
        t3.update(), r2(t3.before_update);
        const e3 = t3.dirty;
        t3.dirty = [-1], t3.fragment && t3.fragment.p(t3.ctx, e3), t3.after_update.forEach(C);
      }
    }
    const H = new Set();
    let K;
    function z() {
      K = {r: 0, c: [], p: K};
    }
    function J() {
      K.r || r2(K.c), K = K.p;
    }
    function W(t3, e3) {
      t3 && t3.i && (H.delete(t3), t3.i(e3));
    }
    function G(t3, e3, n3, o3) {
      if (t3 && t3.o) {
        if (H.has(t3))
          return;
        H.add(t3), K.c.push(() => {
          H.delete(t3), o3 && (n3 && t3.d(1), o3());
        }), t3.o(e3);
      }
    }
    function Q(t3, e3) {
      t3.d(1), e3.delete(t3.key);
    }
    function V(t3, e3) {
      G(t3, 1, 1, () => {
        e3.delete(t3.key);
      });
    }
    function Z(t3, e3, n3, o3, r3, i3, s3, a3, c3, l3, u3, p3) {
      let f3 = t3.length, d3 = i3.length, h2 = f3;
      const m3 = {};
      for (; h2--; )
        m3[t3[h2].key] = h2;
      const g3 = [], y2 = new Map(), $3 = new Map();
      for (h2 = d3; h2--; ) {
        const t4 = p3(r3, i3, h2), a4 = n3(t4);
        let c4 = s3.get(a4);
        c4 ? o3 && c4.p(t4, e3) : (c4 = l3(a4, t4), c4.c()), y2.set(a4, g3[h2] = c4), a4 in m3 && $3.set(a4, Math.abs(h2 - m3[a4]));
      }
      const b2 = new Set(), w3 = new Set();
      function _2(t4) {
        W(t4, 1), t4.m(a3, u3), s3.set(t4.key, t4), u3 = t4.first, d3--;
      }
      for (; f3 && d3; ) {
        const e4 = g3[d3 - 1], n4 = t3[f3 - 1], o4 = e4.key, r4 = n4.key;
        e4 === n4 ? (u3 = e4.first, f3--, d3--) : y2.has(r4) ? !s3.has(o4) || b2.has(o4) ? _2(e4) : w3.has(r4) ? f3-- : $3.get(o4) > $3.get(r4) ? (w3.add(o4), _2(e4)) : (b2.add(r4), f3--) : (c3(n4, s3), f3--);
      }
      for (; f3--; ) {
        const e4 = t3[f3];
        y2.has(e4.key) || c3(e4, s3);
      }
      for (; d3; )
        _2(g3[d3 - 1]);
      return g3;
    }
    function X(t3, e3) {
      const n3 = {}, o3 = {}, r3 = {$$scope: 1};
      let i3 = t3.length;
      for (; i3--; ) {
        const s3 = t3[i3], a3 = e3[i3];
        if (a3) {
          for (const t4 in s3)
            t4 in a3 || (o3[t4] = 1);
          for (const t4 in a3)
            r3[t4] || (n3[t4] = a3[t4], r3[t4] = 1);
          t3[i3] = a3;
        } else
          for (const t4 in s3)
            r3[t4] = 1;
      }
      for (const t4 in o3)
        t4 in n3 || (n3[t4] = void 0);
      return n3;
    }
    function Y(t3) {
      return typeof t3 == "object" && t3 !== null ? t3 : {};
    }
    function tt(t3) {
      t3 && t3.c();
    }
    function et(t3, e3, o3) {
      const {fragment: s3, on_mount: a3, on_destroy: c3, after_update: l3} = t3.$$;
      s3 && s3.m(e3, o3), C(() => {
        const e4 = a3.map(n2).filter(i2);
        c3 ? c3.push(...e4) : r2(e4), t3.$$.on_mount = [];
      }), l3.forEach(C);
    }
    function nt(t3, e3) {
      const n3 = t3.$$;
      n3.fragment !== null && (r2(n3.on_destroy), n3.fragment && n3.fragment.d(e3), n3.on_destroy = n3.fragment = null, n3.ctx = []);
    }
    function ot(e3, n3, i3, s3, a3, c3, l3 = [-1]) {
      const u3 = k;
      j(e3);
      const p3 = e3.$$ = {fragment: null, ctx: null, props: c3, update: t2, not_equal: a3, bound: o2(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u3 ? u3.$$.context : []), callbacks: o2(), dirty: l3, skip_bound: false};
      let f3 = false;
      if (p3.ctx = i3 ? i3(e3, n3.props || {}, (t3, n4, ...o3) => {
        const r3 = o3.length ? o3[0] : n4;
        return p3.ctx && a3(p3.ctx[t3], p3.ctx[t3] = r3) && (!p3.skip_bound && p3.bound[t3] && p3.bound[t3](r3), f3 && function(t4, e4) {
          t4.$$.dirty[0] === -1 && (I.push(t4), A(), t4.$$.dirty.fill(0)), t4.$$.dirty[e4 / 31 | 0] |= 1 << e4 % 31;
        }(e3, t3)), n4;
      }) : [], p3.update(), f3 = true, r2(p3.before_update), p3.fragment = !!s3 && s3(p3.ctx), n3.target) {
        if (n3.hydrate) {
          const t3 = function(t4) {
            return Array.from(t4.childNodes);
          }(n3.target);
          p3.fragment && p3.fragment.l(t3), t3.forEach(m2);
        } else
          p3.fragment && p3.fragment.c();
        n3.intro && W(e3.$$.fragment), et(e3, n3.target, n3.anchor), U();
      }
      j(u3);
    }
    class rt {
      $destroy() {
        nt(this, 1), this.$destroy = t2;
      }
      $on(t3, e3) {
        const n3 = this.$$.callbacks[t3] || (this.$$.callbacks[t3] = []);
        return n3.push(e3), () => {
          const t4 = n3.indexOf(e3);
          t4 !== -1 && n3.splice(t4, 1);
        };
      }
      $set(t3) {
        var e3;
        this.$$set && (e3 = t3, Object.keys(e3).length !== 0) && (this.$$.skip_bound = true, this.$$set(t3), this.$$.skip_bound = false);
      }
    }
    var it = {queryHandler: {parse: (t3) => {
      return e3 = new URLSearchParams(t3), [...e3].reduce((t4, [e4, n3]) => (t4[e4] = n3, t4), {});
      var e3;
    }, stringify: (t3) => "?" + new URLSearchParams(t3).toString()}, urlTransform: {apply: (t3) => t3, remove: (t3) => t3}, useHash: false};
    const st = RegExp(/\:([^/()]+)/g);
    function at(t3) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      ct(t3), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t4} = window.location;
        if (t4) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t4.substring(1))) {
            const e3 = document.querySelector(t4);
            e3 && e3.scrollIntoView();
          }
        }
      }();
    }
    function ct(t3) {
      t3 && t3.scrollTo && t3.dataset.routify !== "scroll-lock" && t3.dataset["routify-scroll"] !== "lock" && (t3.style["scroll-behavior"] = "auto", t3.scrollTo({top: 0, behavior: "auto"}), t3.style["scroll-behavior"] = "", ct(t3.parentElement));
    }
    const lt = (t3) => {
      const e3 = [];
      let n3;
      for (; n3 = st.exec(t3); )
        e3.push(n3[1]);
      return e3;
    };
    function ut(t3, e3) {
      ut._console = ut._console || {log: console.log, warn: console.warn};
      const {_console: n3} = ut, o3 = t3.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t3.component.shortPath.split("/").pop()).replace(/^./, (t4) => t4.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r3 = [`<${o3}> received an unexpected slot "default".`, `<${o3}> was created with unknown prop 'scoped'`, `<${o3}> was created with unknown prop 'scopedSync'`];
      for (const t4 of ["log", "warn"])
        console[t4] = (...e4) => {
          r3.includes(e4[0]) || n3[t4](...e4);
        }, e3().then(() => {
          console[t4] = n3[t4];
        });
    }
    function pt() {
      let t3 = window.location.pathname + window.location.search + window.location.hash;
      it.useHash && (t3 = t3.replace(/.*#(.+)/, "$1"));
      const {url: e3, options: n3} = function(t4) {
        const [e4, n4] = t4.split("__[[routify_url_options]]__"), o3 = JSON.parse(decodeURIComponent(n4 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o3.prefetch, {url: e4, options: o3};
      }(t3);
      return {...ft(e3), options: n3};
    }
    function ft(t3) {
      const e3 = t3.startsWith("/") ? window.location.origin : void 0, n3 = new URL(t3, e3);
      return {url: n3, fullpath: n3.pathname + n3.search + n3.hash};
    }
    function dt(t3, e3, n3) {
      const o3 = it.useHash ? "#" : "";
      let r3;
      return r3 = function(t4, e4, n4) {
        const o4 = Object.assign({}, n4, e4), r4 = function(t5, e5) {
          if (!it.queryHandler)
            return "";
          const n5 = lt(t5), o5 = {};
          e5 && Object.entries(e5).forEach(([t6, e6]) => {
            n5.includes(t6) || (o5[t6] = e6);
          });
          return it.queryHandler.stringify(o5).replace(/\?$/, "");
        }(t4, e4);
        for (const [e5, n5] of Object.entries(o4))
          t4 = t4.replace(`:${e5}`, n5);
        return `${t4}${r4}`;
      }(t3, e3, n3), r3 = it.urlTransform.apply(r3), r3 = o3 + r3, r3;
    }
    function ht(t3) {
      let e3;
      const n3 = t3[1].default, o3 = u2(n3, t3, t3[0], null);
      return {c() {
        o3 && o3.c();
      }, m(t4, n4) {
        o3 && o3.m(t4, n4), e3 = true;
      }, p(t4, [e4]) {
        o3 && o3.p && 1 & e4 && f2(o3, n3, t4, t4[0], e4, null, null);
      }, i(t4) {
        e3 || (W(o3, t4), e3 = true);
      }, o(t4) {
        G(o3, t4), e3 = false;
      }, d(t4) {
        o3 && o3.d(t4);
      }};
    }
    function mt(t3, e3, n3) {
      let {$$slots: o3 = {}, $$scope: r3} = e3;
      return t3.$$set = (t4) => {
        "$$scope" in t4 && n3(0, r3 = t4.$$scope);
      }, [r3, o3];
    }
    class gt extends rt {
      constructor(t3) {
        super(), ot(this, t3, mt, ht, s2, {});
      }
    }
    const yt = [];
    function $t(e3, n3 = t2) {
      let o3;
      const r3 = [];
      function i3(t3) {
        if (s2(e3, t3) && (e3 = t3, o3)) {
          const t4 = !yt.length;
          for (let t5 = 0; t5 < r3.length; t5 += 1) {
            const n4 = r3[t5];
            n4[1](), yt.push(n4, e3);
          }
          if (t4) {
            for (let t5 = 0; t5 < yt.length; t5 += 2)
              yt[t5][0](yt[t5 + 1]);
            yt.length = 0;
          }
        }
      }
      return {set: i3, update: function(t3) {
        i3(t3(e3));
      }, subscribe: function(s3, a3 = t2) {
        const c3 = [s3, a3];
        return r3.push(c3), r3.length === 1 && (o3 = n3(i3) || t2), s3(e3), () => {
          const t3 = r3.indexOf(c3);
          t3 !== -1 && r3.splice(t3, 1), r3.length === 0 && (o3(), o3 = null);
        };
      }};
    }
    function bt(e3, n3, o3) {
      const s3 = !Array.isArray(e3), c3 = s3 ? [e3] : e3, l3 = n3.length < 2;
      return {subscribe: $t(o3, (e4) => {
        let o4 = false;
        const u3 = [];
        let p3 = 0, f3 = t2;
        const d3 = () => {
          if (p3)
            return;
          f3();
          const o5 = n3(s3 ? u3[0] : u3, e4);
          l3 ? e4(o5) : f3 = i2(o5) ? o5 : t2;
        }, h2 = c3.map((t3, e5) => a2(t3, (t4) => {
          u3[e5] = t4, p3 &= ~(1 << e5), o4 && d3();
        }, () => {
          p3 |= 1 << e5;
        }));
        return o4 = true, d3(), function() {
          r2(h2), f3();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const wt = $t(null);
    const _t = $t([]);
    _t.subscribe((t3) => window.routify.routes = t3);
    let xt = $t({component: {params: {}}});
    const vt = $t(null);
    const Pt = $t(true);
    function kt(t3, e3 = false) {
      t3 = it.urlTransform.remove(t3);
      let {pathname: n3, search: o3} = ft(t3).url;
      const r3 = c2(_t), i3 = r3.find((t4) => n3 === t4.meta.name) || r3.find((t4) => n3.match(t4.regex));
      if (!i3)
        throw new Error(`Route could not be found for "${n3}".`);
      const s3 = e3 ? Object.create(i3) : i3, {route: a3, redirectPath: l3, rewritePath: u3} = jt(s3, r3);
      return u3 && ({pathname: n3, search: o3} = ft(dt(u3, a3.params)).url, l3 && (a3.redirectTo = dt(l3, a3.params || {}))), it.queryHandler && (a3.params = Object.assign({}, a3.params, it.queryHandler.parse(o3))), function(t4, e4) {
        if (t4.paramKeys) {
          const n4 = function(t5) {
            const e5 = [];
            return t5.forEach((t6) => {
              e5[t6.path.split("/").filter(Boolean).length - 1] = t6;
            }), e5;
          }(t4.layouts), o4 = e4.split("/").filter(Boolean);
          (function(t5) {
            return t5.split("/").filter(Boolean).map((t6) => t6.match(/\:(.+)/)).map((t6) => t6 && t6[1]);
          })(t4.path).forEach((e5, r4) => {
            e5 && (t4.params[e5] = o4[r4], n4[r4] ? n4[r4].param = {[e5]: o4[r4]} : t4.param = {[e5]: o4[r4]});
          });
        }
      }(a3, n3), a3.leftover = t3.replace(new RegExp(a3.regex), ""), a3;
    }
    function jt(t3, e3, n3, o3) {
      const {redirect: r3, rewrite: i3} = t3.meta;
      if (r3 || i3) {
        n3 = r3 ? r3.path || r3 : n3, o3 = i3 ? i3.path || i3 : n3;
        const s3 = r3 && r3.params, a3 = i3 && i3.params, c3 = e3.find((t4) => t4.path === o3);
        return c3 === t3 && console.error(`${o3} is redirecting to itself`), c3 || console.error(`${t3.path} is redirecting to non-existent path: ${o3}`), (s3 || a3) && (c3.params = Object.assign({}, c3.params, s3, a3)), jt(c3, e3, n3, o3);
      }
      return {route: t3, redirectPath: n3, rewritePath: o3};
    }
    function Ot(t3, e3, n3) {
      const o3 = t3.slice();
      return o3[1] = e3[n3], o3;
    }
    function Et(t3, e3) {
      let n3, o3;
      return {key: t3, first: null, c() {
        n3 = y("iframe"), n3.src !== (o3 = e3[1].url) && x2(n3, "src", o3), x2(n3, "frameborder", "0"), x2(n3, "title", "routify prefetcher"), this.first = n3;
      }, m(t4, e4) {
        h(t4, n3, e4);
      }, p(t4, r3) {
        e3 = t4, 1 & r3 && n3.src !== (o3 = e3[1].url) && x2(n3, "src", o3);
      }, d(t4) {
        t4 && m2(n3);
      }};
    }
    function Lt(e3) {
      let n3, o3 = [], r3 = new Map(), i3 = e3[0];
      const s3 = (t3) => t3[1].options.prefetch;
      for (let t3 = 0; t3 < i3.length; t3 += 1) {
        let n4 = Ot(e3, i3, t3), a3 = s3(n4);
        r3.set(a3, o3[t3] = Et(a3, n4));
      }
      return {c() {
        n3 = y("div");
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].c();
        var t3, e4, r4;
        x2(n3, "id", "__routify_iframes"), t3 = "display", e4 = "none", n3.style.setProperty(t3, e4, r4 ? "important" : "");
      }, m(t3, e4) {
        h(t3, n3, e4);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].m(n3, null);
      }, p(t3, [e4]) {
        1 & e4 && (i3 = t3[0], o3 = Z(o3, e4, s3, 1, t3, i3, r3, n3, Q, Et, null, Ot));
      }, i: t2, o: t2, d(t3) {
        t3 && m2(n3);
        for (let t4 = 0; t4 < o3.length; t4 += 1)
          o3[t4].d();
      }};
    }
    const It = $t([]);
    const St = bt(It, (t3) => t3.slice(0, 2));
    function Rt(t3) {
      const e3 = t3.data ? t3.data.prefetchId : t3;
      if (!e3)
        return null;
      const n3 = c2(It).find((t4) => t4 && t4.options.prefetch == e3);
      if (n3) {
        const {gracePeriod: t4} = n3.options, o3 = new Promise((e4) => setTimeout(e4, t4)), r3 = new Promise((e4) => {
          window.requestIdleCallback ? window.requestIdleCallback(e4) : setTimeout(e4, t4 + 1e3);
        });
        Promise.all([o3, r3]).then(() => {
          It.update((t5) => t5.filter((t6) => t6.options.prefetch != e3));
        });
      }
    }
    function Tt(t3, e3, n3) {
      let o3;
      return l2(t3, St, (t4) => n3(0, o3 = t4)), [o3];
    }
    St.subscribe((t3) => t3.forEach(({options: t4}) => {
      setTimeout(() => Rt(t4.prefetch), t4.timeout);
    })), addEventListener("message", Rt, false);
    class Ft extends rt {
      constructor(t3) {
        super(), ot(this, t3, Tt, Lt, s2, {});
      }
    }
    function Nt() {
      return L("routify") || xt;
    }
    const At = {subscribe: (t3) => bt(Nt(), (t4) => t4.layout.api).subscribe(t3)};
    const Mt = {_hooks: [(t3) => Pt.set(false)], subscribe: qt};
    const Ct = {_hooks: [], subscribe: qt};
    function qt(t3) {
      const e3 = this._hooks, n3 = e3.length;
      return t3((t4) => {
        e3[n3] = t4;
      }), () => delete e3[n3];
    }
    const Bt = {subscribe: (t3) => bt([Nt(), wt, _t], (t4) => function(t5, e3, n3) {
      return function(o3, r3 = {}, i3) {
        const {component: s3} = t5, a3 = Object.assign({}, e3.params, s3.params);
        let c3 = o3 && o3.nodeType && o3;
        c3 && (o3 = o3.getAttribute("href")), o3 = o3 ? p3(o3) : s3.shortPath;
        const l3 = n3.find((t6) => [t6.shortPath || "/", t6.path].includes(o3));
        if (l3 && l3.meta.preload === "proximity" && window.requestIdleCallback) {
          const t6 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l3.api.preload());
          }, t6);
        }
        i3 && i3.strict !== false || (o3 = o3.replace(/index$/, ""));
        let u3 = dt(o3, r3, a3);
        return c3 ? (c3.href = u3, {update(t6) {
          c3.href = dt(o3, t6, a3);
        }}) : u3;
        function p3(t6) {
          if (t6.match(/^\.\.?\//)) {
            let [, e4, n4] = t6.match(/^([\.\/]+)(.*)/), o4 = s3.path.replace(/\/$/, "");
            const r4 = e4.match(/\.\.\//g) || [];
            s3.isPage && r4.push(null), r4.forEach(() => o4 = o4.replace(/\/[^\/]+\/?$/, "")), t6 = (t6 = `${o4}/${n4}`.replace(/\/$/, "")) || "/";
          } else if (t6.match(/^\//))
            ;
          else {
            const e4 = n3.find((e5) => e5.meta.name === t6);
            e4 && (t6 = e4.shortPath);
          }
          return t6;
        }
      };
    }(...t4)).subscribe(t3)};
    const Ut = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t3, e3) => [t3, (Ut.getLongest(Ut.templates, t3) || ((t4) => t4))(e3)]}, {name: "createMeta", condition: () => true, action(t3, e3) {
      Ut.writeMeta(t3, e3);
    }}, {name: "createOG", condition: (t3) => !t3.match(":"), action(t3, e3) {
      Ut.writeMeta(`og:${t3}`, e3);
    }}, {name: "createTitle", condition: (t3) => t3 === "title", action(t3, e3) {
      document.title = e3;
    }}], getLongest(t3, e3) {
      const n3 = t3[e3];
      if (n3) {
        const o3 = c2(wt).path;
        return n3[Object.keys(t3[e3]).filter((t4) => o3.includes(t4)).sort((t4, e4) => e4.length - t4.length)[0]];
      }
    }, writeMeta(t3, e3) {
      const n3 = document.getElementsByTagName("head")[0], o3 = t3.match(/(.+)\:/), r3 = o3 && o3[1] || "plain", {propField: i3, valueField: s3} = Dt.services[r3] || Dt.services.plain, a3 = document.querySelector(`meta[${i3}='${t3}']`);
      a3 && a3.remove();
      const c3 = document.createElement("meta");
      c3.setAttribute(i3, t3), c3.setAttribute(s3, e3), c3.setAttribute("data-origin", "routify"), n3.appendChild(c3);
    }, set(t3, e3) {
      Ut.plugins.forEach((n3) => {
        n3.condition(t3, e3) && ([t3, e3] = n3.action(t3, e3) || [t3, e3]);
      });
    }, clear() {
      const t3 = document.querySelector("meta");
      t3 && t3.remove();
    }, template(t3, e3) {
      const n3 = Ut.getOrigin();
      Ut.templates[t3] = Ut.templates[t3] || {}, Ut.templates[t3][n3] = e3;
    }, update() {
      Object.keys(Ut.props).forEach((t3) => {
        let e3 = Ut.getLongest(Ut.props, t3);
        Ut.plugins.forEach((n3) => {
          n3.condition(t3, e3) && ([t3, e3] = n3.action(t3, e3) || [t3, e3]);
        });
      });
    }, batchedUpdate() {
      Ut._pendingUpdate || (Ut._pendingUpdate = true, setTimeout(() => {
        Ut._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t3 = Nt();
      return t3 && c2(t3).path || "/";
    }, _pendingUpdate: false};
    const Dt = new Proxy(Ut, {set(t3, e3, n3, o3) {
      const {props: r3, getOrigin: i3} = t3;
      return Reflect.has(t3, e3) ? Reflect.set(t3, e3, n3, o3) : (r3[e3] = r3[e3] || {}, r3[e3][i3()] = n3), window.routify.appLoaded && t3.batchedUpdate(), true;
    }});
    function Ht(t3, e3, n3) {
      const o3 = t3.slice();
      return o3[18] = e3[n3].component, o3[19] = e3[n3].componentFile, o3[2] = e3[n3].decorator, o3[1] = e3[n3].nodes, o3;
    }
    function Kt(t3) {
      let e3, n3, o3 = [], r3 = new Map(), i3 = [t3[4]];
      const s3 = (t4) => function({meta: t5, path: e4, param: n4, params: o4}) {
        return JSON.stringify({path: e4, param: (t5["param-is-page"] || t5["slug-is-page"]) && n4, queryParams: t5["query-params-is-page"] && o4});
      }(t4[18]);
      for (let e4 = 0; e4 < 1; e4 += 1) {
        let n4 = Ht(t3, i3, e4), a3 = s3(n4);
        r3.set(a3, o3[e4] = Gt(a3, n4));
      }
      return {c() {
        for (let t4 = 0; t4 < 1; t4 += 1)
          o3[t4].c();
        e3 = w2();
      }, m(t4, r4) {
        for (let e4 = 0; e4 < 1; e4 += 1)
          o3[e4].m(t4, r4);
        h(t4, e3, r4), n3 = true;
      }, p(t4, n4) {
        4194365 & n4 && (i3 = [t4[4]], z(), o3 = Z(o3, n4, s3, 1, t4, i3, r3, e3.parentNode, V, Gt, e3, Ht), J());
      }, i(t4) {
        if (!n3) {
          for (let t5 = 0; t5 < 1; t5 += 1)
            W(o3[t5]);
          n3 = true;
        }
      }, o(t4) {
        for (let t5 = 0; t5 < 1; t5 += 1)
          G(o3[t5]);
        n3 = false;
      }, d(t4) {
        for (let e4 = 0; e4 < 1; e4 += 1)
          o3[e4].d(t4);
        t4 && m2(e3);
      }};
    }
    function zt(t3) {
      let e3, n3;
      return e3 = new Zt({props: {decorator: t3[2], nodes: [...t3[1]], scoped: {...t3[0], ...t3[22]}}}), {c() {
        tt(e3.$$.fragment);
      }, m(t4, o3) {
        et(e3, t4, o3), n3 = true;
      }, p(t4, n4) {
        const o3 = {};
        4 & n4 && (o3.decorator = t4[2]), 16 & n4 && (o3.nodes = [...t4[1]]), 4194305 & n4 && (o3.scoped = {...t4[0], ...t4[22]}), e3.$set(o3);
      }, i(t4) {
        n3 || (W(e3.$$.fragment, t4), n3 = true);
      }, o(t4) {
        G(e3.$$.fragment, t4), n3 = false;
      }, d(t4) {
        nt(e3, t4);
      }};
    }
    function Jt(t3) {
      let e3, n3, o3 = t3[18] && t3[1].length && zt(t3);
      return {c() {
        o3 && o3.c(), e3 = w2();
      }, m(t4, r3) {
        o3 && o3.m(t4, r3), h(t4, e3, r3), n3 = true;
      }, p(t4, n4) {
        t4[18] && t4[1].length ? o3 ? (o3.p(t4, n4), 16 & n4 && W(o3, 1)) : (o3 = zt(t4), o3.c(), W(o3, 1), o3.m(e3.parentNode, e3)) : o3 && (z(), G(o3, 1, 1, () => {
          o3 = null;
        }), J());
      }, i(t4) {
        n3 || (W(o3), n3 = true);
      }, o(t4) {
        G(o3), n3 = false;
      }, d(t4) {
        o3 && o3.d(t4), t4 && m2(e3);
      }};
    }
    function Wt(t3) {
      let n3, o3, r3;
      const i3 = [{scoped: t3[0]}, {scopedSync: t3[5]}, t3[3].param || {}];
      var s3 = t3[19];
      function a3(t4) {
        let n4 = {$$slots: {default: [Jt, ({scoped: t5, decorator: e3}) => ({22: t5, 2: e3}), ({scoped: t5, decorator: e3}) => (t5 ? 4194304 : 0) | (e3 ? 4 : 0)]}, $$scope: {ctx: t4}};
        for (let t5 = 0; t5 < i3.length; t5 += 1)
          n4 = e2(n4, i3[t5]);
        return {props: n4};
      }
      return s3 && (n3 = new s3(a3(t3))), {c() {
        n3 && tt(n3.$$.fragment), o3 = b();
      }, m(t4, e3) {
        n3 && et(n3, t4, e3), h(t4, o3, e3), r3 = true;
      }, p(t4, e3) {
        const r4 = 41 & e3 ? X(i3, [1 & e3 && {scoped: t4[0]}, 32 & e3 && {scopedSync: t4[5]}, 8 & e3 && Y(t4[3].param || {})]) : {};
        if (12582933 & e3 && (r4.$$scope = {dirty: e3, ctx: t4}), s3 !== (s3 = t4[19])) {
          if (n3) {
            z();
            const t5 = n3;
            G(t5.$$.fragment, 1, 0, () => {
              nt(t5, 1);
            }), J();
          }
          s3 ? (n3 = new s3(a3(t4)), tt(n3.$$.fragment), W(n3.$$.fragment, 1), et(n3, o3.parentNode, o3)) : n3 = null;
        } else
          s3 && n3.$set(r4);
      }, i(t4) {
        r3 || (n3 && W(n3.$$.fragment, t4), r3 = true);
      }, o(t4) {
        n3 && G(n3.$$.fragment, t4), r3 = false;
      }, d(t4) {
        n3 && nt(n3, t4), t4 && m2(o3);
      }};
    }
    function Gt(t3, e3) {
      let n3, o3, r3, i3;
      var s3 = e3[2];
      function a3(t4) {
        return {props: {scoped: t4[0], $$slots: {default: [Wt]}, $$scope: {ctx: t4}}};
      }
      return s3 && (o3 = new s3(a3(e3))), {key: t3, first: null, c() {
        n3 = w2(), o3 && tt(o3.$$.fragment), r3 = w2(), this.first = n3;
      }, m(t4, e4) {
        h(t4, n3, e4), o3 && et(o3, t4, e4), h(t4, r3, e4), i3 = true;
      }, p(t4, n4) {
        e3 = t4;
        const i4 = {};
        if (1 & n4 && (i4.scoped = e3[0]), 8388669 & n4 && (i4.$$scope = {dirty: n4, ctx: e3}), s3 !== (s3 = e3[2])) {
          if (o3) {
            z();
            const t5 = o3;
            G(t5.$$.fragment, 1, 0, () => {
              nt(t5, 1);
            }), J();
          }
          s3 ? (o3 = new s3(a3(e3)), tt(o3.$$.fragment), W(o3.$$.fragment, 1), et(o3, r3.parentNode, r3)) : o3 = null;
        } else
          s3 && o3.$set(i4);
      }, i(t4) {
        i3 || (o3 && W(o3.$$.fragment, t4), i3 = true);
      }, o(t4) {
        o3 && G(o3.$$.fragment, t4), i3 = false;
      }, d(t4) {
        t4 && m2(n3), t4 && m2(r3), o3 && nt(o3, t4);
      }};
    }
    function Qt(e3) {
      let n3, o3, r3, s3, a3, c3 = e3[4] && Kt(e3);
      return {c() {
        c3 && c3.c(), n3 = b(), o3 = y("span");
      }, m(l3, u3) {
        var p3;
        c3 && c3.m(l3, u3), h(l3, n3, u3), h(l3, o3, u3), r3 = true, s3 || (p3 = e3[8].call(null, o3), a3 = p3 && i2(p3.destroy) ? p3.destroy : t2, s3 = true);
      }, p(t3, [e4]) {
        t3[4] ? c3 ? (c3.p(t3, e4), 16 & e4 && W(c3, 1)) : (c3 = Kt(t3), c3.c(), W(c3, 1), c3.m(n3.parentNode, n3)) : c3 && (z(), G(c3, 1, 1, () => {
          c3 = null;
        }), J());
      }, i(t3) {
        r3 || (W(c3), r3 = true);
      }, o(t3) {
        G(c3), r3 = false;
      }, d(t3) {
        c3 && c3.d(t3), t3 && m2(n3), t3 && m2(o3), s3 = false, a3();
      }};
    }
    function Vt(t3, e3, n3) {
      let o3, r3, i3, s3;
      l2(t3, wt, (t4) => n3(14, i3 = t4));
      let a3, {nodes: c3 = []} = e3, {scoped: u3 = {}} = e3, {isRoot: p3 = false} = e3, {decorator: f3} = e3, d3 = null, h2 = null, m3 = {};
      const g3 = $t(null);
      l2(t3, g3, (t4) => n3(4, s3 = t4));
      const y2 = L("routify");
      l2(t3, y2, (t4) => n3(10, r3 = t4));
      function $3(t4) {
        n3(5, m3 = {...u3}), h2.length === 0 && async function() {
          await M(), at(a3);
          const t5 = s3.component.path === i3.path;
          !window.routify.stopAutoReady && t5 && async function({page: t6, metatags: e5, afterPageLoad: n4}) {
            const {path: o4} = t6, {options: r4} = pt(), i4 = r4.prefetch;
            for (const e6 of n4._hooks)
              e6 && await e6(t6.api);
            e5.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o4, prefetchId: i4}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: s3.component, metatags: Dt, afterPageLoad: Mt});
        }();
        const e4 = {nodes: h2, decorator: f3 || gt, layout: d3.isLayout ? d3 : o3 && o3.layout, component: d3, route: i3, componentFile: t4, parentNode: a3 || o3 && o3.parentNode};
        g3.set(e4), p3 && xt.set(e4);
      }
      return E("routify", g3), t3.$$set = (t4) => {
        "nodes" in t4 && n3(1, c3 = t4.nodes), "scoped" in t4 && n3(0, u3 = t4.scoped), "isRoot" in t4 && n3(9, p3 = t4.isRoot), "decorator" in t4 && n3(2, f3 = t4.decorator);
      }, t3.$$.update = () => {
        1024 & t3.$$.dirty && (o3 = r3), 2 & t3.$$.dirty && n3(3, [d3, ...h2] = c3, d3), 8 & t3.$$.dirty && function(t4) {
          let e4 = t4.component();
          e4 instanceof Promise ? e4.then($3) : $3(e4);
        }(d3), 16 & t3.$$.dirty && s3 && ut(s3, M);
      }, [u3, c3, f3, d3, s3, m3, g3, y2, (t4) => a3 = t4.parentNode, p3, r3];
    }
    class Zt extends rt {
      constructor(t3) {
        super(), ot(this, t3, Vt, Qt, s2, {nodes: 1, scoped: 0, isRoot: 9, decorator: 2});
      }
    }
    function Xt(t3, e3) {
      let n3 = false;
      function o3(o4, r4) {
        const i3 = kt(o4 || pt().fullpath);
        i3.redirectTo && (history.replaceStateNative({}, null, i3.redirectTo), delete i3.redirectTo);
        const s3 = [...(r4 && kt(pt().fullpath, t3) || i3).layouts, i3];
        n3 && delete n3.last, i3.last = n3, n3 = i3, o4 || vt.set(i3), wt.set(i3), i3.api.preload().then(() => {
          Pt.set(true), e3(s3);
        });
      }
      const r3 = function(t4) {
        ["pushState", "replaceState"].forEach((t5) => {
          history[t5 + "Native"] = history[t5], history[t5] = async function(e5 = {}, n5, o4) {
            if (o4 === location.pathname + location.search + location.hash)
              return false;
            const {id: r4, path: i3, params: s3} = c2(wt);
            e5 = {id: r4, path: i3, params: s3, ...e5};
            const a3 = new Event(t5.toLowerCase());
            Object.assign(a3, {state: e5, title: n5, url: o4});
            return await te(a3, o4) ? (history[t5 + "Native"].apply(this, [e5, n5, o4]), dispatchEvent(a3)) : void 0;
          };
        });
        let e4 = false;
        const n4 = {click: Yt, pushstate: () => t4(), replacestate: () => t4(), popstate: async (n5) => {
          e4 ? e4 = false : await te(n5, pt().fullpath) ? t4() : (e4 = true, n5.preventDefault(), history.go(1));
        }};
        Object.entries(n4).forEach((t5) => addEventListener(...t5));
        return () => {
          Object.entries(n4).forEach((t5) => removeEventListener(...t5));
        };
      }(o3);
      return {updatePage: o3, destroy: r3};
    }
    function Yt(t3) {
      const e3 = t3.target.closest("a"), n3 = e3 && e3.href;
      if (t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button || t3.defaultPrevented)
        return;
      if (!n3 || e3.target || e3.host !== location.host)
        return;
      const o3 = new URL(n3), r3 = o3.pathname + o3.search + o3.hash;
      t3.preventDefault(), history.pushState({}, "", r3);
    }
    async function te(t3, e3) {
      const n3 = kt(e3).api;
      for (const o3 of Ct._hooks.filter(Boolean)) {
        if (!await o3(t3, n3, {url: e3}))
          return false;
      }
      return true;
    }
    function ee(t3) {
      let e3, n3;
      return e3 = new Zt({props: {nodes: t3[0], isRoot: true}}), {c() {
        tt(e3.$$.fragment);
      }, m(t4, o3) {
        et(e3, t4, o3), n3 = true;
      }, p(t4, n4) {
        const o3 = {};
        1 & n4 && (o3.nodes = t4[0]), e3.$set(o3);
      }, i(t4) {
        n3 || (W(e3.$$.fragment, t4), n3 = true);
      }, o(t4) {
        G(e3.$$.fragment, t4), n3 = false;
      }, d(t4) {
        nt(e3, t4);
      }};
    }
    function ne(t3) {
      let e3, n3, o3, r3 = t3[0] && t3[1] !== null && ee(t3);
      return n3 = new Ft({}), {c() {
        r3 && r3.c(), e3 = b(), tt(n3.$$.fragment);
      }, m(t4, i3) {
        r3 && r3.m(t4, i3), h(t4, e3, i3), et(n3, t4, i3), o3 = true;
      }, p(t4, [n4]) {
        t4[0] && t4[1] !== null ? r3 ? (r3.p(t4, n4), 3 & n4 && W(r3, 1)) : (r3 = ee(t4), r3.c(), W(r3, 1), r3.m(e3.parentNode, e3)) : r3 && (z(), G(r3, 1, 1, () => {
          r3 = null;
        }), J());
      }, i(t4) {
        o3 || (W(r3), W(n3.$$.fragment, t4), o3 = true);
      }, o(t4) {
        G(r3), G(n3.$$.fragment, t4), o3 = false;
      }, d(t4) {
        r3 && r3.d(t4), t4 && m2(e3), nt(n3, t4);
      }};
    }
    function oe(t3, e3, n3) {
      let o3;
      l2(t3, wt, (t4) => n3(1, o3 = t4));
      let r3, i3, {routes: s3} = e3, {config: a3 = {}} = e3;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(it, a3);
      E("routifyupdatepage", (...t4) => i3 && i3.updatePage(...t4));
      const c3 = (t4) => n3(0, r3 = t4), u3 = () => {
        i3 && (i3.destroy(), i3 = null);
      };
      let p3 = null;
      var f3;
      return f3 = u3, O().$$.on_destroy.push(f3), t3.$$set = (t4) => {
        "routes" in t4 && n3(2, s3 = t4.routes), "config" in t4 && n3(3, a3 = t4.config);
      }, t3.$$.update = () => {
        4 & t3.$$.dirty && s3 && (clearTimeout(p3), p3 = setTimeout(() => {
          u3(), i3 = Xt(s3, c3), _t.set(s3), i3.updatePage();
        }));
      }, [r3, o3, s3, a3];
    }
    class re extends rt {
      constructor(t3) {
        super(), ot(this, t3, oe, ne, s2, {routes: 2, config: 3});
      }
    }
    function ie(t3) {
      const e3 = async function(e4) {
        return await se(t3, {file: e4.tree, state: {treePayload: e4}, scope: {}});
      };
      return e3.sync = function(e4) {
        return ae(t3, {file: e4.tree, state: {treePayload: e4}, scope: {}});
      }, e3;
    }
    async function se(t3, e3) {
      const n3 = await t3(e3);
      if (n3 === false)
        return false;
      const o3 = n3 || e3.file;
      if (o3.children) {
        const n4 = await Promise.all(o3.children.map(async (n5) => se(t3, {state: e3.state, scope: ce(e3.scope || {}), parent: e3.file, file: await n5})));
        o3.children = n4.filter(Boolean);
      }
      return o3;
    }
    function ae(t3, e3) {
      const n3 = t3(e3);
      if (n3 === false)
        return false;
      const o3 = n3 || e3.file;
      if (o3.children) {
        const n4 = o3.children.map((n5) => ae(t3, {state: e3.state, scope: ce(e3.scope || {}), parent: e3.file, file: n5}));
        o3.children = n4.filter(Boolean);
      }
      return o3;
    }
    function ce(t3) {
      return JSON.parse(JSON.stringify(t3));
    }
    const le = ie(({file: t3}) => {
      (t3.isPage || t3.isFallback) && (t3.regex = ((t4, e3) => {
        const n3 = e3 ? "" : "/?$";
        return `^${t4 = (t4 = (t4 = t4.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(st, "([^/]+)") + n3}`;
      })(t3.path, t3.isFallback));
    });
    const ue = ie(({file: t3}) => {
      t3.paramKeys = lt(t3.path);
    });
    const pe = ie(({file: t3}) => {
      t3.isFallback || t3.isIndex ? t3.shortPath = t3.path.replace(/\/[^/]+$/, "") : t3.shortPath = t3.path;
    });
    const fe = ie(({file: t3}) => {
      t3.ranking = (({path: t4}) => t4.split("/").filter(Boolean).map((t5) => t5 === "_fallback" ? "A" : t5.startsWith(":") ? "B" : "C").join(""))(t3);
    });
    const de = ie(({file: t3}) => {
      const e3 = t3, n3 = t3.meta && t3.meta.children || [];
      n3.length && (e3.children = e3.children || [], e3.children.push(...n3.map((t4) => ({isMeta: true, ...t4, meta: t4}))));
    });
    const he = ie((t3) => {
      const {file: e3} = t3, {isFallback: n3, meta: o3} = e3, r3 = e3.path.match("/:"), i3 = e3.path.endsWith("/index"), s3 = o3.index || o3.index === 0, a3 = o3.index === false;
      e3.isIndexable = s3 || !n3 && !r3 && !i3 && !a3, e3.isNonIndexable = !e3.isIndexable;
    });
    const me = ie(({file: t3, parent: e3}) => {
      Object.defineProperty(t3, "parent", {get: () => e3}), Object.defineProperty(t3, "nextSibling", {get: () => ye(t3, 1)}), Object.defineProperty(t3, "prevSibling", {get: () => ye(t3, -1)}), Object.defineProperty(t3, "lineage", {get: () => ge(e3)});
    });
    function ge(t3, e3 = []) {
      return t3 && (e3.unshift(t3), ge(t3.parent, e3)), e3;
    }
    function ye(t3, e3) {
      if (!t3.root) {
        const n3 = t3.parent.children.filter((t4) => t4.isIndexable), o3 = n3.indexOf(t3);
        return n3[o3 + e3];
      }
    }
    const $e = ie(({file: t3, parent: e3}) => {
      t3.isIndex && Object.defineProperty(e3, "index", {get: () => t3});
    });
    const be = ie(({file: t3, scope: e3}) => {
      function n3(t4) {
        const {parent: e4} = t4, o3 = e4 && e4.component && e4, r3 = o3 && o3.isReset, i3 = e4 && !r3 && n3(e4) || [];
        return o3 && i3.push(o3), i3;
      }
      Object.defineProperty(t3, "layouts", {get: () => n3(t3)});
    });
    const we = ie(({file: t3}) => {
      const e3 = t3.root ? function() {
      } : t3.children ? (t3.isPage, function() {
      }) : (t3.isReset || t3.isLayout || t3.isFallback, function() {
      });
      Object.setPrototypeOf(t3, e3.prototype);
    });
    var _e = Object.freeze({__proto__: null, setRegex: le, setParamKeys: ue, setShortPath: pe, setRank: fe, addMetaChildren: de, setIsIndexable: he, assignRelations: me, assignIndex: $e, assignLayout: be, createFlatList: (t3) => {
      ie((t4) => {
        (t4.file.isPage || t4.file.isFallback) && t4.state.treePayload.routes.push(t4.file);
      }).sync(t3), t3.routes.sort((t4, e3) => t4.ranking >= e3.ranking ? -1 : 1);
    }, setPrototype: we});
    const xe = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function ve(t3) {
      return Object.entries(xe).forEach(([e3, n3]) => {
        t3[e3] === void 0 && (t3[e3] = n3);
      }), t3.children && (t3.children = t3.children.map(ve)), t3;
    }
    const Pe = ie(({file: t3}) => {
      t3.api = new ke(t3);
    });
    class ke {
      constructor(t3) {
        this.__file = t3, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t3.isMeta, this.path = t3.path, this.title = function(t4) {
          return t4.meta.title !== void 0 ? t4.meta.title : (t4.shortPath || t4.path).split("/").pop().replace(/-/g, " ");
        }(t3), this.meta = t3.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t3) => !t3.isNonIndexable).sort((t3, e3) => t3.isMeta && e3.isMeta ? 0 : (t3 = (t3.meta.index || t3.meta.title || t3.path).toString(), e3 = (e3.meta.index || e3.meta.title || e3.path).toString(), t3.localeCompare(e3, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t3}) => t3);
      }
      get next() {
        return je(this, 1);
      }
      get prev() {
        return je(this, -1);
      }
      async preload() {
        const t3 = [...this.__file.layouts, this.__file].map((t4) => t4.component());
        await Promise.all(t3);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function je(t3, e3) {
      if (!t3.__file.root) {
        const n3 = t3.parent.children.indexOf(t3);
        return t3.parent.children[n3 + e3];
      }
    }
    const Oe = {..._e, restoreDefaults: ({tree: t3}) => ve(t3), assignAPI: Pe};
    const Ee = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_5c5beadb())).then((t3) => t3.default)}, {isDir: true, children: [{isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/blog/index", id: "_blog_index", component: () => Promise.resolve().then(() => __toModule(require_index_de07920c())).then((t3) => t3.default)}, {ext: "svx", isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/blog/jekyll-tutorial", id: "_blog_jekyllTutorial", component: () => Promise.resolve().then(() => __toModule(require_jekyll_tutorial_9578b426())).then((t3) => t3.default)}, {ext: "svx", isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/blog/test", id: "_blog_test", component: () => Promise.resolve().then(() => __toModule(require_test_f7892d18())).then((t3) => t3.default)}], isLayout: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/blog", id: "_blog__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_fbce22c0())).then((t3) => t3.default)}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_72c2ee1d())).then((t3) => t3.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_841becc8())).then((t3) => t3.default)};
    const {tree: Le, routes: Ie} = function(t3) {
      const e3 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n3 = {tree: t3, routes: []};
      for (let t4 of e3) {
        (Oe[t4].sync || Oe[t4])(n3);
      }
      return n3;
    }(Ee);
    function Se(e3) {
      let n3, o3;
      return n3 = new re({props: {routes: Ie}}), {c() {
        tt(n3.$$.fragment);
      }, m(t3, e4) {
        et(n3, t3, e4), o3 = true;
      }, p: t2, i(t3) {
        o3 || (W(n3.$$.fragment, t3), o3 = true);
      }, o(t3) {
        G(n3.$$.fragment, t3), o3 = false;
      }, d(t3) {
        nt(n3, t3);
      }};
    }
    !function(t3, e3 = {target: document.body}, n3 = "hmr", o3 = "app-loaded") {
      const r3 = document.getElementById(n3), i3 = document.createElement("div");
      function s3() {
        r3 && r3.remove(), i3.style.visibility = null, i3.setAttribute("id", n3);
      }
      i3.style.visibility = "hidden", e3.target.appendChild(i3), r3 ? addEventListener(o3, s3) : s3(), new t3({...e3, target: i3});
    }(class extends rt {
      constructor(t3) {
        super(), ot(this, t3, null, Se, s2, {});
      }
    }, {target: document.body}, "routify-app");
  });

  // dist/build/Post-6e3ebf94.js
  const main = __toModule(require_main());
  function f(s2) {
    let t2, e2, u2, f2, w2;
    const g2 = s2[3].default, b = main.x(g2, s2, s2[2], null);
    return {c() {
      t2 = main.e("h1"), e2 = main.t(s2[0]), u2 = main.a(), f2 = main.e("div"), b && b.c(), main.b(t2, "class", "text-xl md:text-2xl lg:text-4xl mb-6 pb-2"), main.b(f2, "class", "prose md:prose-lg lg:prose-xl dark:text-white  max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl");
    }, m(s3, l2) {
      main.c(s3, t2, l2), main.d(t2, e2), main.c(s3, u2, l2), main.c(s3, f2, l2), b && b.m(f2, null), w2 = true;
    }, p(s3, [t3]) {
      (!w2 || 1 & t3) && main.y(e2, s3[0]), b && b.p && 4 & t3 && main.z(b, g2, s3, s3[2], t3, null, null);
    }, i(s3) {
      w2 || (main.q(b, s3), w2 = true);
    }, o(s3) {
      main.r(b, s3), w2 = false;
    }, d(s3) {
      s3 && main.f(t2), s3 && main.f(u2), s3 && main.f(f2), b && b.d(s3);
    }};
  }
  function w(s2, t2, e2) {
    let {$$slots: l2 = {}, $$scope: a2} = t2, {title: i2} = t2, {description: n2 = ""} = t2;
    return s2.$$set = (s3) => {
      "title" in s3 && e2(0, i2 = s3.title), "description" in s3 && e2(1, n2 = s3.description), "$$scope" in s3 && e2(2, a2 = s3.$$scope);
    }, s2.$$.update = () => {
      1 & s2.$$.dirty && (main.A.title = i2 + " Post"), 2 & s2.$$.dirty && (main.A.description = n2);
    }, [i2, n2, a2, l2];
  }
  class g extends main.S {
    constructor(s2) {
      super(), main.i(this, s2, w, f, main.s, {title: 0, description: 1});
    }
  }
  require_main();
})();

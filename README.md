# Ärvd cirkel med klass

## Uppgift

I denna uppgift ska du komplettera med kod så att objekt, som representerar en cirkel, skapas enligt _"class syntax"_.

Övningsuppgiften ska delas upp i två filer och du ska skriva kod i som skapar objekt enligt nämnt designmönster. Genomför uppgiften genom att arbeta med filerna, och designmönster, i tur och ordning.

1. `src/Circle.js` - _"class syntax"_ (saknas)
2. `src/Ellipse.js` - _"class syntax"_
3. `src/app.js` - instansierar och använder objekt av typen `Circle` och `Ellipse`. (saknas)
4. `test/Circle.test.js` - tester till typen `Circle`.
5. `test/Ellipse.test.js` - tester till typen `Ellipse`.

![Beroendediagram](/.readme/dependency-graph.svg)

Genom att använda designmönstret ska den egendefinierade typen `Circle` ärva från `Ellipse` och kompletteras med egenskap och överskuggad metod enligt nedan. Det är viktigt att du följer anvisningarna för att bifogade enhetstester ska vara meningsfulla.

### src/Circle.js

Du ska skriva klassen `Circle` där arean och omkretsen ska kunna beräknas. I samband med att objekt instansieras av klassen ska det vara möjligt att ange radien, som betecknas `radius`. __Se till att återanvända kod i så stor utsträckning som möjligt från typen Ellipse genom att använda arv__.

En cirkels area kan bestämmas med $`A=\pi r^2`$, `Math.PI * radius * radius`, och dess omkrets med $`O=2 \pi r`$, `2 * Math.PI * radius`. _(Samma formler kan användas som för en ellips area och omkrets, eller?)_

#### Klassdiagram

![Klassdiagram](/.readme/class-diagram.svg)

#### Egenskap

- `radius`, radien.

Egenskapen `radius` ska vara gemensam för samtliga objekt som instansieras av typen `Circle`. _(Lämpligt att egenskapen kapslar in egenskaperna `a` och `b` då dessa har samma värde, radien, för en cirkel, eller?)_

#### Metod

- `toString`, ska returnera en sträng representerande aktuellt objekt, med radien satt till 42.7, enligt `radius: 42.7, area: 5728.0, circumference: 268.3` där arean respektive omkretsen ska avrundas till en decimal.

Metoden ska vara gemensamma för samtliga objekt som instansieras av typen `Circle`.

### src/app.js

Du ska importera modulerna `src/Circle.js` och `src/Ellipse.js` så du kan instansiera objekt av typerna `Circle` och `Ellipse`.

Ellipsen du skapar ska initialt ha värdet `42,7` för halva storaxelns längd (`a`), och värdet `13,8` för halva lillaxelns längd (`b`). En textbeskrivning av objektet ska presenteras.

Vidare ska du presentera en textbeskrivning av objektet för värdena `63` och `18,4` samt `78,9` och `68,4` för halva storaxelns längd (`a`) respektive för halva lillaxelns längd (`b`).

Cirkeln du skapar ska initial ha radien `6,7`, och en textbeskrivning av objektet ska presenteras. Även en textbeskrivning av cirkeln ska presenteras för radien `3,8`.

```shell
Ellipse
=======
a: 42.7, b: 13.8, area: 1851.2, circumference: 199.4
a: 63, b: 18.4, area: 3641.7, circumference: 291.6
a: 78.9, b: 68.4, area: 16954.4, circumference: 463.9

Circle
======
radius: 6.7, area: 141.0, circumference: 42.1
radius: 3.8, area: 45.4, circumference: 23.9
```

## Tips

Genom att köra enhetstesterna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).

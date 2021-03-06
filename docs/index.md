# tp_processing_SoSe2022
Kursmaterial TP Processing (p5js) Sommersemester 2022
Kursdokumentation TP Processing FH|W–S FB Gestaltung  

## 25.03.2022 – Einfache Formen und Farben
- [TP 1A](https://einraum-design.github.io/tp_processing_SoSe2022/TP1_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP1_A/sketch.js)
- [TP 1B](https://einraum-design.github.io/tp_processing_SoSe2022/TP1_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP1_B/sketch.js)

### Kommentare  
werden vom Compiler ignoriert:
```
// one line comment
```

``` 
/* block comment 
 long 
 comment 
 to 
 explaine
 something  
or to 
ignore 
a longer
part of 
the application */
```


### Sketchgröße

Die Fenstergröße einer Anwendung mit der createCanvas() Funktion definiert.
Der erste Parameter ist die Skechtbreite, der zweite die Höhe. Alle Größen- und Positionsangaben sind Pixelmaße.
```
createCanvas(800, 600);
```
  
Die createCanvas Function wird bin bestimmte Fällen noch mit einem dritten Parameter aufgerufen.
zB. Wenn der Sketch ein PDF erstellt, eine 3D Szene gezeigt oder ein performanterer Renderer genutzt werden soll.



### Shapes

Die Rechtecks Funktion kann mit 
- 4 Parametern: xPosition, yPosition, width, height
- 5 Parametern: xPosition, yPosition, width, height, cornerRadius
- 8 Parametern: xPosition, yPosition, width, height, cornerRadius1, cornerRadius2, cornerRadius3, cornerRadius4
aufgerufen werden.


Standartmäßig wird das Rechteck von der linken oberen Ecke als Referenzpunkt gezeichnet.

Über den rectMode() lässt sich das aber auch auf Zeichnen von der Mitte aus umstellen.

```
rectMode(CENTER); // alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
rectMode(CORNER); // (Processing default)alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Über den ellipseMode() lässt sich das aber auch auf Zeichnen von der linken oberen Ecke aus umstellen.

```
ellipseMode(CENTER); // (Processing default) alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
ellipseMode(CORNER); // alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Wechsel vom ellipseMode / rectMode wirkt sich immer auf die nach dem Aufruf gezeichneten Formen aus.


Hinweis zu arc():
Die Winkel von Start und Ende vom Bogen werden nicht in Grad sondern in Bogenmaß erwartet. 
Ihr könnt euch mit der Funktion radians(GRADZAHL) eine Gradzahl in Bogenmaß umrechnen lassen.
```
// arc (xPosition, yPosition, breite, höhe, Startwinkel, Endwinkel, Zeichentyp)  
arc(300, 300, 400, 400, radians(45), radians(360-45), PIE);
```


Colors
Standardeinstellung von Processing ist, dass alle Formen mit einer weißen Füllfarbe und schwarzer Kontur mit 1px Strichstärke gezeichnet werden.

Um eigene Farbe für Formen festzulegen gibt es die fill und stroke Funktionen.
Standartmäßig nutzt Processing das RGB Farbsystem und erwartet Zahlen im 8Bit Bereich als Farbwerte: 0 - 255
(Ihr könnt den Zahlenbereich und auch das Farbsystem mit der coloMode() Funktion umstellen.)

fill() und stroke() können mit 
- 1 Parameter aufgerufen werden: Grauwert - schwarz bis weiß - 0 - 255
- 3 Parametern: rotwert, grünwert, blauwert -> je 0 - 255
- 4 Parametern: rotwert, grünwert, blauwert, alpha -> je 0 - 255. Alpha definiert die Transparenz.

fill() und stroke() müssen jeweils bevor eine Form gezeichnet wird festgelegt werden. Nach einem Aufruf werden alle Formen in diesen Farben gezeichnet, bis fill() oder stroke() mit neuen Werten aufgerufen werden.

Mit noFill() und noStroke() kann auch keine Füllfarb oder keine Kontur festgelegt werden.




## 01.04.2022 – Grundstruktur setup & draw. Systemvariablen
- [TP 2A](https://einraum-design.github.io/tp_processing_SoSe2022/TP2_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP2_A/sketch.js)
- [TP 2B](https://einraum-design.github.io/tp_processing_SoSe2022/TP2_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP2_B/sketch.js)


### Processing Variablen

Processing bietet mehrere Variablen die von Processing vordefiniert sind.
Diese könne einfach als Platzhalter im Skript eingesetzt werden und werden während der Laufzeit 
des Programmes mit den aktuellen Werten ersetzt.

mouseX -> Maus x - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
mouseY -> Maus y - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
width ->  Sketchbreite Zahlenwert Ganzzahlen (Integer)
height -> Sketchhöhe Zahlenwert Ganzzahlen (Integer)

width und height sollten verwendet werden, um Positionen von graphischen Elementen in der Anwendung unabhängig von der Fenstergröße zu berechnen.





## 22.04.2022 – Variablentypen & if-Bedingungen
- [TP 3A](https://einraum-design.github.io/tp_processing_SoSe2022/TP3_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP3_A/sketch.js)
- [TP 3B](https://einraum-design.github.io/tp_processing_SoSe2022/TP3_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP3_B/sketch.js)


### Variablentypen

***elementaren Variablen***
- Ganzzahlen Integers int --> 1, 3, 34, -23
- Fließkommazahlen FloatingPointNumbers float --> 0.234, 123.234, 1.0, -234.234
- Boolean bool --> true / false
- Character char --> 'a', 'b', ' ', '+', '\'' (escapen von sonderzeichen über \Sonderzeichen)

***Objekte***
- Textkette String --> "Hello World", " ", "8ohasdf"
- PImage Bilder
- PFont Schriften

Variablen Definition in den meisten Programmiersprachen
```
// Typ variablenNamen ( = Wert);
int alter = 18;
```

Variabeln Definition in p5js
```
let myXPos = 40.0;
let myYPos = 60;
let xSpeed, ySpeed;
```

if-Bedingungen 
Mit if-Bedinungen lassen sich ein Programm steuern. 
Über Bedingungen lässt sich steuern, welche Programmteile ausgeführt werden.

```
// if-Bedingungen
// if(CONDITION) { wenn CONDITION erfüllt ist, wird alles im Rumpf (zwischen den {}) ausgeführt}
if(mouseX > 300){
    ellipse(mouseX, mouseY, 50, 50);
}
```

Um Bedingungen zu formulieren gibt es ***Vergleichsoperatoren***
- A > B  --> wenn A größer als B ist
- A < B  --> wenn A kleiner als B ist
- A >= B --> wenn A größer oder gleich B ist
- A <= B --> wenn A kleiner oder gleich B ist
- A == B --> wenn der Wert von A gleich B ist
- A === B --> wenn der Wert von A gleich B ist und der Typ von A und B gleich ist
- A != B --> wenn der Wert von A nicht gleich B ist
  
  
Um mehrere Bedingung miteinander zu verbinden gibt es ***Verknüpfungsoperatoren***
- CONDITION_A && CONDITION_B --> Wenn Bedingung A UND Bedingung B erfüllt sind
- CONDITION_A || CONDITION_B --> Wenn Bedingung A ODER Bedingung B (oder beide) erfüllt sind
  
  
## 29.04.2022 – if-else Bedingungen, Buttons, Eventlistener
- [TP 4_1 A](https://einraum-design.github.io/tp_processing_SoSe2022/TP4_1_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP4_1_A/sketch.js)
[TP 4_2 A](https://einraum-design.github.io/tp_processing_SoSe2022/TP4_2_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP4_2_A/sketch.js)
- [TP 4_1 B](https://einraum-design.github.io/tp_processing_SoSe2022/TP4_1_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP4_1_B/sketch.js)
[TP 4_2 B](https://einraum-design.github.io/tp_processing_SoSe2022/TP4_2_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP4_2_B/sketch.js)


„Schaltflächen" innerhalb des Canvas Elements lassen sich in p5js auf die Weise erstellen, dass abgefragt wird, ob der Cursor über der Position der definierten Fläche ist.

Bei rechteckigen Buttons lässt sich von allen vier Seiten abfragen, 
Ob die Maus-X-Position größer als die linke Seite und kleiner als die rechte Kantenposition des Rechtecks ist. Analog dazu Ober- und Unterkante des Rechtecks.

```
if (mouseX >= xButton && 
    mouseX <= xButton + wButton && 
    mouseY >= yButton && 
    mouseY <= yButton + hButton) {
        // Maus ist über dem Rechteck
}
```

Bei einem Kreis kann man einfach den Abstand des Cursors zum Mittelpunkt des Kreises berechnen und daran den Status festlegen.

```
// mit der dist() funktion den Abstand 
// zwischen Mauskoordinaten und Button Mittelpunkt berechnen:
float cursorToEllipseCente = dist(mouseX, mouseY, xCircleButton, yCircleButton);

if (cursorToEllipseCente < diameterCircleButton/2) {
    // Maus ist über dem Kreis
}
```

Ein „hover“ Effekt für die Schaltflächen lässt sich erstellen, indem in der function draw – also in jedem Frame – abgefragt wird ob die Maus über der Fläche ist und die Darstellung damit verändert wird. 


Soll sich der Status des Buttons auf ein Event (zB. Click) hin umschalten, muss beachtet werden, dass der Wechsel nicht innerhalb der void draw mehrfach ausgeführt wird.
Deshalb gibt es Event Händler, die auf bestimmte Events hin jeweils einmal ausgeführt werden. Diese stehen außerhalb der function setup() und der function draw().
```
// wird in dem Moment aufgerufen, wenn die Maustaste gedrückt wird.
void mousePressed() {
    // der Inhalt im Funktionsrumpf wird pro Click einmal ausgeführt.
}
```

Weiter Eventhandler für Maus- und TastaturEvents sind in der Referenz zu finden.


## 13.05.2022 – html, css und die Ordnerstruktur
- [TP Block A](https://einraum-design.github.io/tp_processing_SoSe2022/TP_Block1_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP_Block1_A/sketch.js)
- [TP Block B](https://einraum-design.github.io/tp_processing_SoSe2022/TP_Block1_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP_Block1_B/sketch.js)



## 13.05.2022 – Transformationen
- [TP 5_1 A](https://einraum-design.github.io/tp_processing_SoSe2022/TP5_1_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP5_1_A/sketch.js)
[TP 5_2 A](https://einraum-design.github.io/tp_processing_SoSe2022/TP5_2_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP5_2_A/sketch.js)
- [TP 5_1 B](https://einraum-design.github.io/tp_processing_SoSe2022/TP5_1_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP5_1_B/sketch.js)
[TP 5_2 B](https://einraum-design.github.io/tp_processing_SoSe2022/TP5_2_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP5_2_B/sketch.js)

Um Zeichenelemente im Processing Sketch zu bewegen, gibt es einige Transformations Tools.

Transformationen werden immer vom Nullpunkt des Koordinatensystems ausgeführt.
Zu Beginn der void draw ist das Koordinatensystem immer in der linken oberen Ecke.
Wird ein rotate(float Winkel) Befehl ausgeführt wird also alles um diese Ecke rotiert. 

Um um einen anderen Mittelpunkt rotieren zu können, muss zuerst das Zeichenkoordinatensystem 
an den gewünschten Mittelpunkt verschoben werden.
Die geschieht über den translate(float x, float y) Befehl. Translate kann das Zeichenkoordinatensystem
in x und y Richtung verschieben.

Als drittes Transformationstool gibt es den scale(float x, float y) Befehl. 
Dieser Skaliert das Koordinatensystem. Scale funktioniert mit positiven wie auch negativen Werten. Damit lassen sich Inhalte auch spiegeln. 

Es können beliebig viele Transformationen hintereinander ausgeführt werden. 
Jede Verschiebung und Rotation wird aber auf die vorherigen aufaddiert!
Wenn das Koordinatensystem mit rotate() verdreht wurde und anschließend wieder 
ein translate ausgeführt wird, wird das Koordinatensystem in die rotierte Richtung verschoben.

Bei jedem Neustart der void draw() wird das Koordinatensystem wieder auf das Standart Koordinatensystem zurück gesetzt.

Das Zeichenkoordiantensystem lässt sich innerhalb der void draw wieder auf Standartposition, Rotation und Skalierung zurücksetzen:

```
 resetMatrix();
```


## 20.05.2022 – Arrays & Objekte
- [TP 6A](https://einraum-design.github.io/tp_processing_SoSe2022/TP6_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP6_A/sketch.js)
- [TP 6B](https://einraum-design.github.io/tp_processing_SoSe2022/TP6_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP6_B/sketch.js)


Um mehrere Werte in nur einem Variablenname speichern zu können gibt es unterschiedlich Konstrukte. 

### Arrays
Es gibt Array, bei denen jeder Wert über einen Index (Zahl von 0 - n) als Schlüssel angesprochen werden kann.
Arrays werden über eckige Klammern gekennzeichnet:

```
 let myArray = [];
```
Der Zugriff auf die Werte erfolg über die den Index in den eckigen Klammern:
```
 let myArray[0] = "hello"; // wert "hello" an der Stelle 0 im Array
```
Bei Arrays kann man über das Attribut **length** abrufen, wie viele Werte in dem Array aktuell enthalten sind.
Mit der Methode **.push()** lassen sich neue Werte an das Array hinten anhängen.

### Objekte
Objekte sind noch etwas allgemeiner gefasst. Hier sind die Schlüssel, um auf die einzelnen Werte von dem Objekt zugreifen zu können nicht festgelegt auf durchnummerierte Zahlen, sondern können jeder Begriff sein.
Objekt werden über die geschweiften Klammern definiert:

```
 let myObject = {};
```
Schlüssel - Wert - Paare lassen sich einfach über den Punkt-Operator hinzufügen:
```
 let myObject = {}
 myObject.name = "Otto";
 myObject.alter = 43;

 // oder über den Schlüssel als String ("") in eckigen Klammern hinzufügen:
 myObject["sex"] = "male";
```

## 27.05.2022 – while & for Loops
- [TP 7A](https://einraum-design.github.io/tp_processing_SoSe2022/TP7_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP7_A/sketch.js)
- [TP 7B](https://einraum-design.github.io/tp_processing_SoSe2022/TP7_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP7_B/sketch.js)

Um Funktionen mehrfach auszuführen, gibt es unterschiedliche Schleifen Konstrukte (while-loop, do-while-loop, for-loop und for-each-loop).

### WHILE-LOOP:

Die while loop ist von der Syntax am einfachsten aufgebaut. 
```
  while (CONDITION) {
    /* do something - Schleifenrumpf */
  }
```
Die Bedingung wird überprüft - wenn die Bedingung true ist, wird der Schleifenrumpf ausgeführt.
Anschließend wird die Bedingung erneut überprüft und der Schleifenrumpf erneut ausgeführt etc.
Ist die Bedingung nicht erfüllt, wird die Wiederholung unterbrochen und das Programm nach der Schleife fortgesetzt.

### FOR-LOOP
Die for Schleife funktioniert sehr ähnlich der while Schleife.
Als Parameter werden jedoch 3 Teile (statt nur der Bedingung) erwartet.

- Im ersten Teil kann eine Variabel definiert werden. Diese ist dann nur innerhalb des Scheifenrumpfs gültig
- Im zweiten Teil wird wie in der while Schleife eine Bedingung formuliert.
- Der dritte Teil wird jeweils am Ende des Schleifenrumps aufgeführt. (Hier wird zB. die Zählervariabel nach jeder  Wiederholung inkrementiert).

```
// for (VARIABLE-DEFINITION; CONDITION; INCREMENTOR)
  for (let i = 0; i < 20; i = i + 1) {
    rotate(random(TWO_PI));
    fill(100, 100 + i, random(200, 255));
    ellipse(0, random(-100, 100), 10, 10);
  }
```

## 4.06.2022 – functions
- [TP 8A](https://einraum-design.github.io/tp_processing_SoSe2022/TP8_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP8_A/sketch.js)
- [TP 8B](https://einraum-design.github.io/tp_processing_SoSe2022/TP8_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2022/blob/main/docs/TP8_B/sketch.js)

Processing bietet einige vordefinierte Funktionen, wie zb. die ellipse(), map(), fill() … Funktionen.
Wir können jedoch auch beliebig eigene Funktionen definieren.

Eine eigene Funktion besteht aus vier Teilen:
Deklaration "function" 

Funktionsname
- beginnt mit einem Kleinbuchstaben
- ein Wort! (Keine Leerzeichen/Kommas/Punkte)

Klammern (optional Paramater …) 

```
function myFunction (parameter1, parameter2){
    // optional Rückgabewert
    return result;

}
```

Es lassen sich auch optionale Parameter in der Funktion definieren:
```
function myFunction (parameter1 = 100){
    ...
}
```
Wenn ein Parameter beim Funktionsaufruf mitgegeben wird, wird dieser als parameter1 gesetzt. Ansonsten wird der Standartwert 100 genutzt.


Es lassen sich zwei Funktionstypen unterscheiden: 

- Funktionen ohne Rückgabetyp:
Bei Funktionsaufruf wird alles was im Rumpf steht einfach ausgeführt und danach kehrt das Programme wieder an die Stelle, an der die Funktion aufgerufen wurde zurück und führt die nächsten Befehle aus ...

- Funktionen mit Rückgabetyp
Am Ende des Funktionsaufrufs muss ein ein „return" mit dem Rückgabewert stehen. 
die random() Funktion liefert zB. ein Fließkommerzahl zurück ...

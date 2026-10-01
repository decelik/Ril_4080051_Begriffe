Ril. 408.0051 Quiz

Deutsch

Quiz starten

Deutsch

Willkommen beim Ril. 408.0051 Quiz!

Dieses Projekt ist eine webbasierte Quiz-Anwendung zur Unterstützung beim Lernen und Wiederholen von Inhalten aus der Richtlinie 408.0051.

Das Quiz ermöglicht es, Begriffe und Regelungen interaktiv zu lernen und das eigene Wissen anhand von Fragen und Antworten zu überprüfen.

Inhaltsverzeichnis

Projektübersicht

Funktionen

Installation

Verwendung

Projektstruktur

Mitwirken

Lizenz

Kontakt

Projektübersicht

Das Ril. 408.0051 Quiz bietet eine einfache Möglichkeit, Inhalte der Richtlinie 408.0051 zu lernen und das eigene Wissen zu überprüfen.

Die Anwendung besteht aus einer webbasierten Quiz-Oberfläche und verwendet HTML, CSS und JavaScript. Fragen und Erklärungen werden strukturiert in einer separaten JavaScript-Datei verwaltet.

Nach der Auswahl einer Antwort kann eine Erklärung zum jeweiligen Thema angezeigt werden. Dadurch eignet sich das Quiz sowohl zum Üben als auch zum Wiederholen bereits gelernter Inhalte.

Funktionen

Interaktives Quiz: Fragen werden nacheinander angezeigt und können direkt beantwortet werden.

Antwortmöglichkeiten: Zu jeder Frage stehen mehrere Antwortmöglichkeiten zur Verfügung.

Erklärungen: Zu den Fragen können zusätzliche Erklärungen und Informationen angezeigt werden.

Timer: Ein Countdown zeigt die verbleibende Bearbeitungszeit an.

Fortschrittsanzeige: Der aktuelle Fortschritt innerhalb des Quiz wird angezeigt.

Responsive Design: Die Anwendung kann auf unterschiedlichen Bildschirmgrößen genutzt werden.

Lernorientierte Darstellung: Neben der richtigen Antwort können zusätzliche Erläuterungen zum jeweiligen Begriff angezeigt werden.

Installation
Repository klonen
git clone https://github.com/decelik/Ril_4080051_Begriffe


Anschließend den Projektordner in Visual Studio Code öffnen.

Voraussetzungen

Für die lokale Nutzung werden keine besonderen Frameworks oder Pakete benötigt.

Empfohlen wird:

Visual Studio Code

die VS-Code-Erweiterung Live Server

ein aktueller Webbrowser

Verwendung

Den Projektordner in Visual Studio Code öffnen.

Die Datei index.html mit Live Server starten.

Das Quiz wird im Browser geöffnet.

Die angezeigte Frage lesen und eine Antwort auswählen.

Nach der Beantwortung kann die Erklärung zum jeweiligen Thema angezeigt werden.

Mit der Schaltfläche „Next“ zur nächsten Frage wechseln.

Der Timer zeigt die verbleibende Bearbeitungszeit an.

Über die Fortschrittsanzeige kann der aktuelle Stand des Quiz nachvollzogen werden.

Projektstruktur

Die wichtigsten Dateien und Verzeichnisse des Projekts:

Ril-4080051-Quiz/
│
├── index.html          # Hauptseite des Quiz
├── style.css           # Gestaltung und Layout
├── script.js           # Quiz-Logik und Interaktionen
├── questions.js        # Fragen und Erklärungen
└── images/             # Verwendete Bilder und Grafiken

index.html

Enthält die HTML-Struktur der Quiz-Anwendung, unter anderem:

Fragenbereich

Antwortmöglichkeiten

Lösungs-/Erklärungsbereich

Timer

Fortschrittsanzeige

Navigation

style.css

Enthält die Gestaltung der Anwendung, beispielsweise:

Farben

Schriftarten

Abstände

Buttons

Quiz-Layout

responsive Darstellung

script.js

Enthält die JavaScript-Logik der Anwendung, beispielsweise:

Anzeige der Fragen

Verarbeitung der Antworten

Auswertung

Navigation

Timer

Fortschrittsanzeige

Anzeige der Erklärungen

questions.js

Enthält die Fragen, Antwortmöglichkeiten und Erklärungen des Quiz.

Beispiel:

export const questions = [
    {
        question: "Bahnhöfe, Bahnhofsteile",

        explanation: `Bahnhöfe sind Bahnanlagen mit mindestens einer Weiche, wo Züge beginnen, enden, halten, kreuzen, überholen oder wenden dürfen.

Bahnhöfe können in Bahnhofsteile unterteilt sein. Bahnhofsteile können durch Zwischensignale bzw. Signale Ne 14 gegeneinander abgegrenzt sein.`
    }
];

Inhaltliche Grundlage

Die Fragen und Erklärungen dieses Projekts orientieren sich an den Inhalten der Richtlinie 408.0051.

Das Quiz dient ausschließlich als Lern- und Übungshilfe. Für verbindliche Regelungen und die betriebliche Anwendung sind stets die jeweils gültigen offiziellen Regelwerke und betrieblichen Vorgaben maßgebend.

Mitwirken

Beiträge und Verbesserungen sind willkommen.

Wenn du das Projekt erweitern oder verbessern möchtest:

Repository forken.

Einen neuen Branch erstellen:

git checkout -b feature/Neue-Funktion


Änderungen vornehmen.

Änderungen committen:

git add .
git commit -m "Neue Fragen hinzugefügt"


Branch pushen:

git push origin feature/Neue-Funktion


Einen Pull Request erstellen.

Lizenz

Informationen zur Lizenz des Projekts können hier ergänzt werden.

Kontakt

Bei Fragen, Verbesserungsvorschlägen oder Fehlern kann ein Issue im GitHub-Repository erstellt werden.

Hinweis: Dieses Projekt ist ein privates Lernprojekt und ersetzt nicht die jeweils gültigen offiziellen Regelwerke, Richtlinien oder betrieblichen Anweisungen.

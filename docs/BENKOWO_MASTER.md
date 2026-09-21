# BENKOWO — centralny rejestr projektu

> Kanoniczne źródło wiedzy operacyjnej dla projektu Benkowo Białowieża. Każdy wątek specjalistyczny przed rozpoczęciem pracy musi sprawdzić aktualną wersję tego dokumentu i działać w granicach otrzymanego briefu.

## A. Metryka dokumentu

- **Wersja:** 0.1
- **Status:** `W TOKU` — pierwsza wersja rejestru; wymaga bieżącej synchronizacji z wynikami wątków specjalistycznych
- **Data aktualizacji:** 2026-09-21
- **Autor aktualizacji:** główny koordynator projektu BENKOWO.PL
- **Ostatni zaakceptowany stan:** rola i zasady koordynacji zatwierdzone przez właściciela 2026-09-21
- **Repozytorium:** https://github.com/prosiak3/benkowo_pl
- **Gałąź produkcyjna:** `main` — `462dbb0f6b057628552ab47634464cc134c879ff` (stan sprawdzony 2026-09-21)
- **Gałąź rozwojowa:** `redesign-preview` — `93b7c594ac87a8cbccc1d869c83d24438f6d0f1f` przed dodaniem tego dokumentu
- **Hosting:** Cloudflare Workers, worker `benkowo-pl`
- **Domena:** https://benkowo.pl/

### Zasada nadrzędna zarządzania

- Właściciel projektu podejmuje decyzje biznesowe i zatwierdza publikację produkcyjną.
- Główny koordynator prowadzi wspólny stan projektu, ustala kolejność prac, przygotowuje briefy, odbiera wyniki, rozstrzyga kwestie operacyjne w granicach zatwierdzonych decyzji oraz kieruje zadania do wątków specjalistycznych.
- Wątki specjalistyczne są podporządkowane koordynacji projektu: wykonują zadania w granicach briefu, nie zmieniają samodzielnie decyzji ogólnoprojektowych i raportują wynik koordynatorowi.
- Rekomendacja wątku specjalistycznego nie jest decyzją. Istotna zmiana obowiązuje dopiero po ocenie koordynatora i — gdy tego wymaga — akceptacji właściciela.
- W razie konfliktu obowiązuje: najnowsza jednoznaczna decyzja właściciela, następnie aktualna decyzja w tym dokumencie, następnie potwierdzone dane, rekomendacje specjalistyczne i hipotezy robocze.

## B. Cel biznesowy

### Cel nadrzędny

Zbudować z `benkowo.pl` skuteczny system bezpośredniej sprzedaży pobytów w całej posiadłości Benkowo Białowieża, przeznaczonej dla jednej odpowiedzialnej rodziny lub zaufanej grupy, przy jednoczesnym zabezpieczeniu interesu właściciela.

### Miary sukcesu

- liczba wartościowych zapytań i rezerwacji bezpośrednich;
- udział rezerwacji bez pośredników;
- współczynnik przejścia: wejście → kontakt/sprawdzenie dostępności → rezerwacja;
- wartość i rentowność rezerwacji;
- udział odpowiednich gości i ograniczenie zapytań niedopasowanych;
- brak podwójnych rezerwacji i problemów płatniczych;
- mierzalność źródeł zapytań i rezerwacji;
- wzrost widoczności na zapytania transakcyjne, lokalne i rodzinne.

### Aktualny etap

`W TOKU` — porządkowanie projektu, test nowej witryny PL/EN, wybór systemu rezerwacji i płatności, przygotowanie decyzji cenowych, prawnych, treściowych i materiałowych przed publikacją pełnej strony.

### Najważniejszy priorytet

Doprowadzić wersję testową i model rezerwacji do stanu, w którym właściciel może świadomie zatwierdzić ofertę, zasady, płatności i publikację bez ryzyka udostępnienia niepotwierdzonych informacji.

## C. Fakty potwierdzone

### Marka i kontakt

- `POTWIERDZONE` Marka nadrzędna: **Benkowo**.
- `POTWIERDZONE` Aktualna lokalizacja komunikowana publicznie: **Benkowo Białowieża**.
- `POTWIERDZONE` Nie komunikujemy publicznie planowanych kolejnych lokalizacji.
- `POTWIERDZONE` Nazwa pochodzi od imienia ojca właściciela — Benedykta.
- `POTWIERDZONE` Marka ma charakter rodzinny i autentyczny.
- `POTWIERDZONE` Adres: Stoczek 178, 17-230 Białowieża.
- `POTWIERDZONE` Telefon: +48 602 761 082.

### Model najmu i preferowani goście

- `POTWIERDZONE` Cała posiadłość jest wynajmowana jednej grupie.
- `POTWIERDZONE` Nie wynajmujemy pojedynczych pokoi i nie dokwaterowujemy obcych osób.
- `POTWIERDZONE` Maksymalna liczba gości: 14.
- `POTWIERDZONE` Mniejsza grupa może wynająć całość, jeśli zapłaci cenę minimalną za cały obiekt; konkretna cena nie jest ustalona do publikacji.
- `POTWIERDZONE` Preferowani goście: duże rodziny, 2–3 rodziny z dziećmi, spotkania wielopokoleniowe, zaufane grupy przyjaciół i spokojne małe wyjazdy koncepcyjne/warsztatowe.
- `POTWIERDZONE` Nie promujemy wieczorów kawalerskich i panieńskich, głośnych imprez, dużych integracji firmowych, najmu pokoi ani grup kierujących się wyłącznie najniższą ceną.
- `POTWIERDZONE` Kluczowa cecha gościa: odpowiedzialność za miejsce i ewentualne szkody.

### Posiadłość

- `POTWIERDZONE` 2 budynki mieszkalne, łącznie 6 sypialni, 4 łazienki i 2 kuchnie.
- `POTWIERDZONE` Sauna, ogród, zadaszona wiata, miejsce na grill i ognisko oraz mini plac zabaw.
- `POTWIERDZONE` Garaż na 1 samochód.
- `POTWIERDZONE` Parking wewnętrzny: około 4 samochodów; ewentualnie 5 przy ciaśniejszym ustawieniu; dodatkowe miejsce przed bramą.
- `POTWIERDZONE` Na posesji znajdują się granitowe ścieżki, trawnik, pergola z winogronem, drzewa owocowe, duże świerki przy głównym domu i spokojna zadrzewiona część działki.
- `POTWIERDZONE` Rodzinna nazwa drugiego budynku „czworaki” nie ma być automatycznie używana publicznie.

### Historia

- `POTWIERDZONE` Rodzice właściciela kupili posiadłość około 20 lat temu od małżeństwa nauczycieli.
- `POTWIERDZONE` Dostosowali ją do wygodniejszego użytkowania z poszanowaniem wcześniejszej zabudowy, lokalnego charakteru i uwarunkowań architektonicznych.

### Stan techniczny sprawdzony 2026-09-21

- `POTWIERDZONE` Repozytorium jest publiczne, a połączenie ma uprawnienia administracyjne i zapisu.
- `POTWIERDZONE` `main` nie ma ochrony gałęzi i uruchamia produkcyjne wdrożenie — każda zmiana wymaga szczególnej ostrożności i zgody właściciela.
- `POTWIERDZONE` Produkcyjna strona `/` działa i nadal pokazuje krótką zapowiedź „Nowa strona i oferta pobytu już wkrótce”.
- `POTWIERDZONE` Podglądy https://benkowo.pl/test/ i https://benkowo.pl/test/en/ odpowiadają kodem 200.
- `POTWIERDZONE` Obie wersje `/test/` zawierają `noindex,nofollow`.
- `POTWIERDZONE` Wersja angielska pod `/test/en/` ma `lang="en"`, własny tytuł i opis, canonical/hreflang oraz zapamiętywanie wyboru języka w `localStorage`.
- `POTWIERDZONE` `main` zawiera produkcyjną zapowiedź oraz kopie wersji testowych w `public/test/`.
- `POTWIERDZONE` `redesign-preview` zawiera przyszłe pliki główne PL/EN, Markdown, SEO, dane strukturalne, favicony, manifest, `robots.txt`, `sitemap.xml` i `llms.txt`.
- `POTWIERDZONE` Na produkcji `/sitemap.xml` i `/llms.txt` zwracają obecnie 404.
- `POTWIERDZONE` Produkcyjny `/robots.txt` jest generowany/zmieniany przez Cloudflare i obecnie pokazuje wyłącznie komunikat o content signals; nie zawiera deklaracji `Sitemap` z pliku przygotowanego na gałęzi rozwojowej.

## D. Decyzje zaakceptowane

### DEC-001 — model wynajmu całej posiadłości

- **Data:** przed 2026-09-21
- **Status:** `ZATWIERDZONE`
- **Decyzja:** Benkowo wynajmuje całą posiadłość jednej grupie; nie wynajmuje pojedynczych pokoi.
- **Uzasadnienie:** prywatność, spójność oferty i kontrola profilu gości.
- **Obszary:** oferta, ceny, rezerwacje, strona, SEO, regulamin.
- **Zatwierdzający:** właściciel.

### DEC-002 — ochrona produkcyjnej strony

- **Data:** 2026-09-20
- **Status:** `ZATWIERDZONE`
- **Decyzja:** nie zastępować strony głównej ani nie modyfikować `main` bez jednoznacznej zgody właściciela; rozwój prowadzić bezpiecznie, a podgląd publikować pod `/test` i wyłączać z indeksowania.
- **Uzasadnienie:** ograniczenie ryzyka przedwczesnej publikacji i automatycznego wdrożenia.
- **Obszary:** strona, Cloudflare, SEO.
- **Zatwierdzający:** właściciel.
- **Ponowne rozpatrzenie:** po akceptacji kompletnej wersji, zasad i ścieżki rezerwacji.

### DEC-003 — architektura marki

- **Data:** przed 2026-09-21
- **Status:** `ZATWIERDZONE`
- **Decyzja:** publicznie komunikujemy Benkowo Białowieża; rozwiązania mają umożliwiać rozwój marki Benkowo, lecz bez ujawniania przyszłych lokalizacji.
- **Obszary:** marka, technologia, domena, SEO.
- **Zatwierdzający:** właściciel.

### DEC-004 — hierarchia koordynacji

- **Data:** 2026-09-21
- **Status:** `ZATWIERDZONE`
- **Decyzja:** ten wątek pełni funkcję głównego koordynatora projektu. Wątki specjalistyczne otrzymują zakres od koordynatora, raportują do niego i nie zmieniają samodzielnie ustaleń ogólnoprojektowych. Najwyższą władzę decyzyjną zachowuje właściciel.
- **Uzasadnienie:** utrzymanie jednego źródła prawdy i eliminacja sprzecznych decyzji między wątkami.
- **Obszary:** wszystkie.
- **Zatwierdzający:** właściciel.

### DEC-005 — komunikacja drugiego budynku

- **Data:** przed 2026-09-21
- **Status:** `ZATWIERDZONE`
- **Decyzja:** rodzinnej nazwy „czworaki” nie używać automatycznie w komunikacji publicznej.
- **Obszary:** treści PL/EN, oznaczenia planu, SEO.
- **Zatwierdzający:** właściciel.

## E. Hipotezy

- `HIPOTEZA HYP-001` Publiczna nazwa drugiego budynku „Dom Ogrodowy” — użyta w wersji rozwojowej, ale wymaga potwierdzenia jako stały element nazewnictwa.
- `HIPOTEZA HYP-002` Najlepszy model rezerwacji powinien łączyć kalendarz, ochronę przed podwójnymi rezerwacjami, płatności BLIK/kartą/przelewem dla Polski i bezpieczne płatności zagraniczne.
- `HIPOTEZA HYP-003` Strona może pozostać one-page w pierwszym wydaniu; podział na podstrony nastąpi po zebraniu wystarczającej liczby potwierdzonych treści i zdjęć.
- `HIPOTEZA HYP-004` Naturalna automatyczna wersja językowa powinna uwzględniać język przeglądarki i ostatni wybór użytkownika — mechanizm istnieje na podglądzie i wymaga testów przed produkcją.
- `HIPOTEZA HYP-005` Główny komunikat sprzedażowy powinien eksponować całą prywatną posesję, dwa budynki, 6 sypialni, 4 łazienki, 2 kuchnie, ogród i saunę do 14 osób.

## F. Otwarte pytania

| ID | Pytanie | Odpowiedzialny | Wpływ / co blokuje | Moment decyzji |
|---|---|---|---|---|
| OQ-001 | Jaki system rezerwacji i operator płatności wybieramy? | Rezerwacje i płatności + właściciel | blokuje docelową ścieżkę konwersji, płatności, synchronizację i część regulaminu | przed wdrożeniem rezerwacji |
| OQ-002 | Jaki jest model cenowy, cena minimalna, sezony, dopłaty i rabaty? | Ceny i rentowność + właściciel | blokuje cennik i automatyczne wyliczenie rezerwacji | przed publikacją cen |
| OQ-003 | Jakie są zaliczki, anulowanie, kaucja i odpowiedzialność za szkody? | Prawo + rezerwacje + właściciel | blokuje regulamin, płatności i bezpieczną sprzedaż | przed przyjmowaniem płatności online |
| OQ-004 | Jakie są zasady dotyczące zwierząt, dzieci i minimalnej długości pobytu? | Właściciel | blokuje FAQ, regulamin i publikację kompletnych warunków | przed pełną publikacją |
| OQ-005 | Czy „Dom Ogrodowy” staje się zatwierdzoną publiczną nazwą drugiego budynku? | Właściciel / marka | wpływa na PL, EN, plan posesji i nazwy zdjęć | przed finalnym zatwierdzeniem tekstów |
| OQ-006 | Czy rozkład pomieszczeń użyty w plikach Markdown i podglądzie jest w pełni potwierdzony: Dom Główny 5 sypialni/3 łazienki, drugi budynek 1 sypialnia + poddasze z 4 łóżkami/1 łazienka? | Właściciel | blokuje uznanie szczegółowego rozkładu za fakt publikacyjny | przed produkcją |
| OQ-007 | Jaki zestaw materiałów zdjęciowych jest dostępny i czego brakuje? | Zdjęcia i materiały + właściciel | blokuje galerię i pełną wiarygodność oferty | teraz |
| OQ-008 | Czy Cloudflare ma zachować/zmienić ustawienia content signals oraz jak zapewnić docelowy `robots.txt` z sitemapą? | Strona/Cloudflare + SEO + właściciel dla polityki AI | blokuje docelową konfigurację indeksowania i widoczności AI | przed produkcją nowej strony |

## G. Rejestr wątków roboczych

| Wątek | Rola | Aktualne zadanie / wynik | Status | Zależności | Ostatnia synchronizacja |
|---|---|---|---|---|---|
| Główny koordynator BENKOWO.PL | wspólny stan, decyzje, briefy, odbiór | utworzenie rejestru centralnego i diagnoza projektu | `W TOKU` | wszystkie obszary | 2026-09-21 |
| Strategia Benkowo Białowieża | marka, oferta, treści, SEO | opracowano nową wersję, treści i kierunek widoczności; konieczny raport końcowy do koordynatora | `W TOKU` | strona, ceny, zdjęcia, rezerwacje | 2026-09-21 |
| Strona Benkowa Cloudflare | implementacja i wdrożenia | działa podgląd PL/EN pod `/test`; automatyczny język i pamięć wyboru wdrożone testowo | `W TOKU` | treści, SEO, akceptacja właściciela | 2026-09-21 |
| Analiza systemu rezerwacji | rezerwacje i płatności | trwa porównanie bezpieczeństwa płatności polskich i zagranicznych oraz ochrony obu stron | `W TOKU` | ceny, regulamin, anulowanie | 2026-09-21 |
| Ceny i rentowność | model cenowy | brak potwierdzonego modelu w rejestrze | `ZABLOKOWANE` | koszty, sezonowość, strategia sprzedaży | 2026-09-21 |
| Prawo i zasady pobytu | regulamin/RODO/cookies | brak zatwierdzonych dokumentów | `ZABLOKOWANE` | płatności, anulowanie, dane usługodawcy | 2026-09-21 |
| Zdjęcia i materiały | galeria i multimedia | brak kompletnego inwentarza materiałów | `W TOKU` | treści, SEO, strona | 2026-09-21 |

### Obowiązkowy raport wątku specjalistycznego

Każdy etap kończy się sekcjami: **Wykonano, Rekomendacje, Decyzje potrzebne od właściciela, Nowe fakty, Hipotezy, Ryzyka, Zmiany w plikach, Wpływ na inne wątki, Proponowane aktualizacje BENKOWO_MASTER.md**.

## H. Rejestr dokumentów i artefaktów

| Artefakt | Ścieżka / adres | Właściciel obszaru | Status | Ostatnia aktualizacja |
|---|---|---|---|---|
| Centralny rejestr projektu | `docs/BENKOWO_MASTER.md` | koordynator | `W TOKU` | 2026-09-21 |
| Strategia SEO i widoczności AI | `docs/seo-strategia.md` na `redesign-preview` | SEO/analityka | `W TOKU` | 2026-09-21 |
| Produkcyjna zapowiedź | `public/index.html` na `main` | strona/Cloudflare | `ZATWIERDZONE` jako stan tymczasowy | 2026-09-21 |
| Polski podgląd | `public/test/index.html` na `main`; https://benkowo.pl/test/ | strona/Cloudflare | `W TOKU` | 2026-09-21 |
| Angielski podgląd | `public/test/en/index.html` na `main`; https://benkowo.pl/test/en/ | strona/Cloudflare | `W TOKU` | 2026-09-21 |
| Przyszła strona PL | `public/index.html` na `redesign-preview` | strona + marka | `W TOKU` | 2026-09-21 |
| Przyszła strona EN | `public/en/index.html` na `redesign-preview` | strona + marka | `W TOKU` | 2026-09-21 |
| Źródło tekstowe PL | `public/benkowo-bialowieza.md` na `redesign-preview` | treści/SEO | `W TOKU` | 2026-09-21 |
| Źródło tekstowe EN | `public/en/benkowo-bialowieza.md` na `redesign-preview` | treści/SEO | `W TOKU` | 2026-09-21 |
| Pliki discovery | `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` na `redesign-preview` | SEO + techniczny | `W TOKU`, jeszcze nieprodukcyjne | 2026-09-21 |
| Favicon i manifest | `public/favicon*`, `public/apple-touch-icon.png`, `public/assets/icon-*`, `public/site.webmanifest` | strona/marka | `W TOKU`, jeszcze nieprodukcyjne | 2026-09-21 |
| Analiza rezerwacji | dokument z wątku „Analiza systemu rezerwacji” | rezerwacje/płatności | `W TOKU` | 2026-09-20 |
| Regulamin | do utworzenia | prawo | `ZABLOKOWANE` | — |
| Polityka prywatności/cookies | do utworzenia | prawo + analityka | `ZABLOKOWANE` | — |
| Model cenowy | do utworzenia | ceny/rentowność | `ZABLOKOWANE` | — |

## I. Backlog

### Teraz

| ID | Priorytet | Zadanie | Właściciel | Zależności | Kryterium ukończenia |
|---|---|---|---|---|---|
| BL-001 | P0 | zsynchronizować aktywne wątki z koordynatorem i tym dokumentem | koordynator + wszystkie wątki | komunikat koordynacyjny | każdy aktywny wątek potwierdzi rolę, zakres i raportowanie |
| BL-002 | P0 | zakończyć analizę systemu rezerwacji i płatności | wątek rezerwacji | wymagania PL/zagranica, bezpieczeństwo | porównanie, rekomendacja, koszty, ryzyka i decyzje właściciela |
| BL-003 | P0 | potwierdzić fakty publikacyjne oraz brakujące zasady | koordynator + właściciel | lista OQ | zatwierdzony pakiet danych do strony, regulaminu i rezerwacji |
| BL-004 | P1 | przegląd wersji testowej desktop/mobile, języków, 404, formularzy i konsoli | strona/Cloudflare | aktualny `/test` | raport testów z błędami i kryteriami publikacji |
| BL-005 | P1 | zinwentaryzować zdjęcia i przygotować shot list | zdjęcia/materiały | dostęp do materiałów | lista istniejących i brakujących ujęć z priorytetem |

### Następne

- `BL-006 P0` Opracować i zatwierdzić model cenowy oraz rentowność.
- `BL-007 P0` Przygotować regulamin, politykę prywatności/cookies i zasady odpowiedzialności do weryfikacji prawnej.
- `BL-008 P1` Zintegrować wybrany kalendarz, synchronizację i płatności w środowisku testowym.
- `BL-009 P1` Naprawić docelową konfigurację `robots.txt`, sitemapy i `llms.txt`, uwzględniając ustawienia Cloudflare.
- `BL-010 P1` Zaprojektować plan analityki konwersji i test jego zdarzeń.
- `BL-011 P1` Przygotować checklistę akceptacji przed zmianą strony głównej.

### Później

- rozwój podstron tematycznych po zgromadzeniu treści i zdjęć;
- Profil Firmy Google i lokalne cytowania;
- treści scenariuszy pobytu;
- automatyzacja komunikacji po rezerwacji;
- rozwój architektury pod kolejne obiekty bez ich publicznego ujawniania.

### Zablokowane

- publikacja cen — brak zatwierdzonego modelu;
- pełna automatyczna rezerwacja — brak wyboru systemu, płatności i zasad;
- regulamin finalny — brak decyzji dotyczących zaliczki, anulowania, szkód, zwierząt i minimalnego pobytu;
- zastąpienie strony głównej — wymaga kompletnej kontroli i jednoznacznej zgody właściciela.

### Odrzucone

- wynajem pojedynczych pokoi;
- pozycjonowanie jako tania agroturystyka, hotel lub miejsce imprezowe;
- bezpośrednie scalenie całej `redesign-preview` do `main` bez selekcji zmian i akceptacji.

## J. Rejestr ryzyk

| ID | Ryzyko | Prawdopodobieństwo / wpływ | Działanie |
|---|---|---|---|
| RSK-001 | publikacja niepotwierdzonych cen, warunków lub szczegółów | średnie / wysokie | blokada publikacji do akceptacji właściciela |
| RSK-002 | niespójność PL/EN/Markdown/HTML | średnie / wysokie | jeden rejestr faktów i kontrola porównawcza przed produkcją |
| RSK-003 | przypadkowe zastąpienie produkcji przez push do `main` | średnie / krytyczne | brak zmian `main` bez zgody; sprawdzanie SHA; praca na gałęzi |
| RSK-004 | brak ochrony `main` | wysokie / wysokie | rozważyć branch protection lub obowiązkowy PR po ustaleniu procesu |
| RSK-005 | bezpośrednie scalenie `redesign-preview` usunie strukturę `/test` lub zmieni produkcję | wysokie / krytyczne | przenosić selektywne zmiany, nie scalać całej gałęzi |
| RSK-006 | `redesign-preview/wrangler.jsonc` nie zawiera trasy `www.benkowo.pl/*`, którą ma `main` | wysokie przy merge / wysokie | zachować konfigurację `www` w każdym docelowym wdrożeniu |
| RSK-007 | produkcyjne sitemap/llms 404, a robots jest modyfikowany przez Cloudflare | pewne / średnie | rozstrzygnąć content signals i wdrożyć discovery razem z produkcją |
| RSK-008 | podwójne rezerwacje | nieznane / krytyczne | system nadrzędnego kalendarza, kontrola synchronizacji i alerty |
| RSK-009 | nieudane/niebezpieczne płatności krajowe lub zagraniczne | średnie / krytyczne | operator regulowany, 3DS/SCA, webhooki, jednoznaczne potwierdzenia |
| RSK-010 | niewłaściwi goście i szkody | średnie / wysokie | zasady, weryfikacja rezerwacji, kaucja/odpowiedzialność po analizie prawnej |
| RSK-011 | brak regulaminu i informacji usługodawcy | wysokie / wysokie | przygotowanie dokumentów przed płatnościami online |
| RSK-012 | brak pełnej galerii osłabia sprzedaż i wiarygodność | wysokie / wysokie | inwentaryzacja i sesja zdjęciowa |
| RSK-013 | niespójność cen między kanałami | średnie / wysokie | jeden model cenowy i kontrolowany channel manager |
| RSK-014 | brak pomiaru konwersji | wysokie / średnie | plan zdarzeń i test przed pełną publikacją |
| RSK-015 | informacje o atrakcjach zewnętrznych się zestarzeją | średnie / średnie | oznaczać niezależność, weryfikować aktualność, nie obiecywać dostępności |

## K. Dziennik zmian

### 2026-09-21 — wersja 0.1

- utworzono centralny rejestr projektu;
- potwierdzono nowe SHA `main` i `redesign-preview`;
- potwierdzono działanie produkcji oraz podglądów PL/EN;
- wykryto 404 dla produkcyjnych `sitemap.xml` i `llms.txt`;
- wykryto, że produkcyjny `robots.txt` jest zastępowany/generowany przez Cloudflare;
- wykryto różnicę tras `www` między `main` i `redesign-preview`;
- zapisano hierarchię koordynacji zatwierdzoną przez właściciela;
- do poinformowania: wszystkie aktywne wątki specjalistyczne.

## Komunikat obowiązkowy dla wątków specjalistycznych

> Działasz jako specjalistyczny wątek projektu BENKOWO.PL. Głównym koordynatorem projektu jest wątek „Główny koordynator BENKOWO.PL”. Przed dalszą pracą zapoznaj się z aktualnym `docs/BENKOWO_MASTER.md`. Wykonuj zadania w granicach briefu koordynatora, nie zmieniaj samodzielnie ustaleń ogólnoprojektowych i nie traktuj rekomendacji jako zatwierdzonej decyzji. Konflikty, nowe fakty, ryzyka i decyzje wymagane od właściciela zgłaszaj koordynatorowi. Najwyższą władzę decyzyjną zachowuje właściciel projektu. Każdy etap zakończ raportem w formacie określonym w `BENKOWO_MASTER.md`.

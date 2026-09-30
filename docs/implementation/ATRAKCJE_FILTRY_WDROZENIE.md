# Wdrożenie kart planów dnia i filtrów — raport

> Wątek: Strona Benkowa Cloudflare  
> Gałąź: `redesign-preview`  
> Data: 2026-09-21  
> Status: `WDROŻONE NA GAŁĘZI, NIEOPUBLIKOWANE NA MAIN`

## Wykonano

- Zastąpiono 9 starych kart shortlistą 7 planów MVP z researchu.
- Usunięto publiczną kartę zbieractwa/grzybobrania do czasu pełnej weryfikacji prawnej i terenowej.
- Zmieniono pojedynczy filtr na filtry wielokrotnego wyboru:
  - pora roku;
  - grupa;
  - charakter;
  - pogoda;
  - transport;
  - czas;
  - rezerwacja.
- Logika: alternatywa `OR` wewnątrz jednego wymiaru i koniunkcja `AND` między wymiarami.
- Dodano 5 widocznych szybkich filtrów, panel „Więcej filtrów”, licznik, czyszczenie i pusty stan.
- Stan filtrów zapisuje się w adresie przez wielokrotne parametry `filter=wymiar:wartość`, dzięki czemu zestaw można skopiować lub odświeżyć.
- Mobile: szybkie filtry przewijają się poziomo, a pełny panel działa jako dolny arkusz. Desktop: modalny panel o ograniczonej szerokości.
- Karty stosują Details First: czas, sezon/pogoda, grupa, transport, rezerwacja, tempo/charakter i ograniczenie są pokazane przed opisem.
- Zachowano osobne wersje PL i EN, istniejący wybór języka, canonical/hreflang oraz dotychczasową strukturę strony.
- Nie zmieniono `main`, `public/test/` ani konfiguracji publikacji.

## Audyt zdjęć i licencji

W starej sekcji było 9 kart i tylko 5 źródeł zdjęć. Powtarzały się zdjęcia żubra, lasu i kolejki.

Nowa sekcja nie powtarza żadnego zdjęcia. Użyte są 3 różne pliki Wikimedia Commons z atrybucją na karcie:

| Plan | Plik | Autor | Licencja |
|---|---|---|---|
| Żubry i łatwy spacer | European bison (Bison bonasus) male Białowieza.jpg | Charles J. Sharp | CC BY-SA 4.0 |
| Kolejką do Topiła | Kolejka-hajnowka-2.JPG | Dariusz.Biegacz | CC BY-SA 3.0 |
| Hajnówka–Topiło na rowerze | Poland - Topilo Lake with dam.JPG | Merlin | CC BY 2.5 |

Cztery plany nie mają jeszcze materiału o bezspornych prawach i zgodności z treścią. Zamiast powielać lub fałszywie podpisywać inne zdjęcie pokazują jawny komunikat o brakującym materiale:

1. Muzeum BPN + Park Pałacowy.
2. Muzeum + cerkiew + sztuka + jedzenie.
3. Lokalne smaki i rękodzieło.
4. Zimowy dzień w Białowieży.

Rekomendacja: wykonać własne kadry albo pozyskać pisemną zgodę autora/partnera. Po otrzymaniu plików placeholder można zastąpić bez zmiany modelu karty.

## Moduł filmu YouTube

Kod obsługuje opcjonalny moduł wideo, ale żaden film nie został dodany bez weryfikacji. Wymagany model danych:

- `youtubeVideoId`;
- tytuł;
- kanał/autor;
- URL źródłowy;
- data weryfikacji;
- `embedAllowed`;
- informacja o napisach.

Zasady implementacji:

- miniatura/poster i przycisk „Obejrzyj film”;
- iframe tworzony dopiero po kliknięciu;
- `youtube-nocookie.com`;
- brak autoplay przy wejściu;
- responsywne 16:9, `title`, fokus klawiatury, pełny ekran;
- zapasowy link do YouTube;
- brak kopiowania lub pobierania filmu na serwer;
- osadzenie tylko przy `embedAllowed=true`;
- przed publikacją trzeba dopuścić domeny YouTube w docelowej CSP i uwzględnić politykę cookies/consent.

## Testy

Sprawdzenia wykonane dla PL i EN:

- 7 kart w każdej wersji;
- 5 szybkich filtrów;
- 24 pola w pełnym panelu;
- brak powtórzonego URL zdjęcia;
- poprawna składnia wszystkich bloków JavaScript;
- brak zduplikowanych identyfikatorów HTML;
- brak karty wędkarstwa i zbieractwa;
- obecność licznika, pustego stanu, czyszczenia i stanu filtrów w URL;
- obecność `youtube-nocookie.com` w opcjonalnym loaderze;
- zachowana responsywna siatka 3 / 2 / 1 kolumna.

## Braki i ryzyka

- Cztery własne/licencjonowane zdjęcia nadal są potrzebne.
- Siedem docelowych podstron nie ma jeszcze kompletnych, zweryfikowanych kart operacyjnych dnia, map, QR i Planów B. Karty prowadzą obecnie do najbliższych istniejących szkiców; treść tych podstron trzeba zsynchronizować przed produkcją.
- Filtry są gotowe na gałęzi, ale nie zostały zweryfikowane urządzeniowo w Safari iOS ani na realnym Androidzie.
- Zewnętrzne zdjęcia Wikimedia są obecnie pobierane z serwera Wikimedia. Docelowo warto zapisać zoptymalizowane kopie w repo z rejestrem atrybucji, jeżeli warunki licencji i sposób dystrybucji zostaną zachowane.
- Aktualne główne pliki gałęzi nie mają `noindex`, ponieważ są kandydatem na przyszłą produkcję. Istniejących stron `/test/` z `noindex,nofollow` nie zmieniono.
- Moduł YouTube wymaga decyzji dotyczącej consent i nagłówka CSP przed dodaniem pierwszego filmu.

## Zmiany w plikach

- `public/index.html`
- `public/en/index.html`
- `docs/implementation/ATRAKCJE_FILTRY_WDROZENIE.md`

## Proponowane aktualizacje BENKOWO_MASTER.md

- Strona/Cloudflare: `FILTRY I 7 KART MVP WDROŻONE NA REDESIGN-PREVIEW — DO QA I UZUPEŁNIENIA ZDJĘĆ`.
- Nowy blocker materiałowy: 4 zweryfikowane zdjęcia.
- Nowy blocker treściowy: finalne karty operacyjne i mapy/QR dla 7 podstron.
- Nowa decyzja do zatwierdzenia: sposób obsługi consent/CSP dla opcjonalnych filmów YouTube.

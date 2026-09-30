# Podstrony planów, stabilne adresy i QR — raport wdrożenia

> Gałąź: `redesign-preview`  
> Data: 2026-09-21  
> Status: `WDROŻONE NA GAŁĘZI, NIEOPUBLIKOWANE NA MAIN`

## Zakres

Wdrożono komplet 7 planów dnia w dwóch językach. Każda podstrona zawiera:

- profil grupy, sezon, pogodę, czas, transport i rezerwacje;
- realistyczną sekwencję dnia bez wymyślonych czasów dojazdu od Stoczek 178;
- Plan B;
- ograniczenia i jawne luki wymagające weryfikacji;
- źródła oraz datę weryfikacji 21.09.2026;
- informację, że atrakcje i usługi prowadzą niezależni operatorzy;
- CTA do Benkowa;
- canonical, wzajemny hreflang PL/EN, Open Graph i JSON-LD;
- responsywny układ oraz widoczne stany fokusu.

## Podstrony PL

1. `public/aktywnosci/rodzinnie-w-bialowiezy/index.html`
2. `public/aktywnosci/rezerwat-pokazowy-zubrow/index.html`
3. `public/aktywnosci/hajnowka-na-niepogode/index.html`
4. `public/aktywnosci/kolejka-waskotorowa/index.html`
5. `public/aktywnosci/rowerem-i-sauna/index.html`
6. `public/aktywnosci/dzien-w-benkowie/index.html`
7. `public/aktywnosci/biegowki-i-sauna/index.html`

## Podstrony EN

1. `public/en/activities/family-time-in-bialowieza/index.html`
2. `public/en/activities/bison-show-reserve/index.html`
3. `public/en/activities/hajnowka-on-a-rainy-day/index.html`
4. `public/en/activities/narrow-gauge-forest-railway/index.html`
5. `public/en/activities/cycling-and-sauna/index.html`
6. `public/en/activities/a-day-at-benkowo/index.html`
7. `public/en/activities/cross-country-skiing-and-sauna/index.html`

## Stabilne adresy do QR

- `/p/pierwszy-dzien/`
- `/p/zubry-z-dziecmi/`
- `/p/kultura-i-sztuka/`
- `/p/kolejka-topilo/`
- `/p/topilo-rower/`
- `/p/lokalne-smaki/`
- `/p/zimowy-dzien/`

Każdy adres wybiera PL/EN na podstawie zapamiętanego języka lub ustawienia przeglądarki. Strony przejściowe mają `noindex,follow`. QR koduje wyłącznie stabilny adres w domenie Benkowa, nie godziny, ceny, telefon ani trasę zewnętrzną.

## Pliki QR

- `public/assets/qr/pierwszy-dzien.svg`
- `public/assets/qr/zubry-z-dziecmi.svg`
- `public/assets/qr/kultura-i-sztuka.svg`
- `public/assets/qr/kolejka-topilo.svg`
- `public/assets/qr/topilo-rower.svg`
- `public/assets/qr/lokalne-smaki.svg`
- `public/assets/qr/zimowy-dzien.svg`

Wspólne style: `public/assets/activity-detail.css`.

## Decyzja mapowa

Nie utworzono żadnej fałszywie precyzyjnej trasy Google Maps. Brak potwierdzonych Place ID, parkingów i wejść jest widoczny na stronie jako „do weryfikacji”. Przycisk operacyjny prowadzi do oficjalnego źródła zasad/trasy. Bezpośrednią trasę Google Maps można dodać dopiero po potwierdzeniu punktów w terenie.

## QA

Automatycznie sprawdzono 29 plików:

- obecność wszystkich 14 podstron;
- canonical i hreflang PL/EN;
- wspólny arkusz stylów;
- odwołanie do właściwego lokalnego QR;
- sekcję Plan B i zastrzeżenie o operatorach;
- brak niezweryfikowanych linków `google.com/maps/dir`;
- poprawną strukturę SVG wszystkich 7 kodów QR;
- zgodne kotwice powrotu do strony PL/EN.

Wynik: brak wykrytych problemów.

## Commity

Zmiany zostały zapisane bezpośrednio przez GitHub Contents API jako sekwencja małych commitów plikowych, aby nie nadpisać równoległych prac na wspólnej gałęzi. Końcowy commit implementacji i korekty nawigacji:

- `712d03ad9ed99fca1f50361e9f185a8039869616` — Fix English navigation in cross-country-skiing-and-sauna.

Niniejszy raport jest osobnym, końcowym commitem dokumentacyjnym. Produkcyjne `main` nie zostało zmienione ani opublikowane.

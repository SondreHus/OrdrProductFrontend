# Product-assignment - Ordr hjemmeoppgave i frontend/react
I denne oppgaven ønsker vi å teste deg i React. Vi ønsker at du lager et produktsøk med fokus på filtrering av søkeresultatet. Vi ønsker ikke at du bruker et ferdig bibliotek for å lage søket.

Siden skal bestå av 3 elementer:
* En header
* En produktliste med tilhørende søkefelt
* Muligheten for å klikke på et produkt for å vise en preview av produktet til høyre i skjermen


# Data
I `/src/data` finner du en json fil `products.json` hvor man finner følgende data:
* name - produktnavnet
* description - beskrivelse av produktet
* image - bilde av produktet
* variants - en liste med prisvarianter, her er det bare `price` som er relevant for oppgaven

# Oppgave
## Header (vektlegging: 0.5)
Her er det ikke vits å bruke for mye tid, finn en bakgrunnsfarge du liker + Simpel h1 med teksten "Products". Du kan være kreativ når underliggende er løst.

## Produktliste og søk (Vektlegging: 4.5)
1) Her ønsker vi at alle produkter blir listet opp med hvertfall navn og pris i en liste (se image1.png)
2) Vi ønsker å ha muligheten til å søke etter produkter basert på navnet, hvor man da filtrerer bort alle som ikke er en match (se image2.png).

## Produktdetaljer (Vektlegging: 2)
1) Her vil vi at du skal presentere dataen på en fin og ryddig måte. Du kan velge å presentere det akkurat som du vil, men vi ønsker at du hvertfall skal vise bilde, navn, beskrivelse og pris (se image3.png). 
Bonus) Om du får tid kan dere lage kule animasjoner / hover-effekt / popup etc.. 

## Ekstra utfordring:
Skriv tester.

# UI
Du kan bruke ui-bibliotek til å lage utseende. Men du kan ikke bruke ferdig bibliotek som har fuzzy search eller søk innebygget.
Du kan også lage css'en selv, eller du kan bruke styled-components. 

# Vurdering
- Vi vil se hvordan du modellerer data og håndterer state.
- Vi vektlegger funksjonalitet høyere enn utseende. 
- Vi vektlegger struktur og orden i kode.


# Hvordan komme i gang
Vi anbefaler node versjon 14++
Clone / Fork prosjektet
```
$ npm install
$ npm start
```

Åpne http://localhost:3000

## Hvordan importere data
Vi har gjort det enkelt slik at du kan importere json filen inne i src/data. Alt du trenger å importere filen øverst i fila der du vil bruke det. 

```
import React from 'react';
import products from '../data/products.json'
...


const Component = () => {
  // bruk products her
   return <div> ... </div>
}

```

# Levering (velg 1 av 2)
## Fork
Fork vårt prosjekt og push på din egen repo. 

## Eget github repo
Lag et public/private repo og push koden dit. 



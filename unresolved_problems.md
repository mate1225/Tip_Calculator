kód struktúrális problémák:

- az inputoknak nem használják a saját komponensüket
- nem reseteli a megfelelő időben a "btnValue" értékét a kód

felhasználói szepmontból nézet problémák:

- nincsen semmilyen szabályozás, tehát a felhasználó akár 10000000-ret is bírhat a "custom" mezőbe, ahova max 100 kerülhetne . E mellet ha a többi mezőbe nagyon nagy számokat írnak be akkor elkezdenk ki lógni egyre jobban a karakterek a "dobozból".
- ha frissítik az oldalt véletlenül minden adat eltűnik

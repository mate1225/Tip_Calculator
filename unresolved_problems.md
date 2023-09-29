kód struktúrális problémák:

- az inputoknak nem használják a saját komponensüket

felhasználói szepmontból nézet problémák:

- amikor a "custom" mezőbe beír a felhasznló adatot a gomb aktív marad kinézetileg, így össze zavaró lehet hogy akkor most melyik adatott használja (kódilag ebben nincsne próbléma,mivel amíg nem üres a mező addog a gombok értékét figyelmen kívűé haggya)
- nincsen semmilyen szabályozás, tehát a felhasználó akár 10000000-ret is bírhat a "custom" mezőbe, ahova max 100 kerülhetne . E mellet ha a többi mezőbe nagyon nagy számokat írnak be akkor elkezdenk ki lógni egyre jobban a karakterek a "dobozból".
- ha frissítik az oldalt véletlenül minden adat eltűnik

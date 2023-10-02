kód struktúrális problémák:

- az inputok nem használják a saját komponensüket
- nem reseteli a megfelelő időben a "btnValue" értékét a kód
- lehetne egyszerűsíteni még majd a main content -ben ezt a részt :

```jsx
<div className=" mb-[0.38rem] flex items-center justify-between">
  <Title text="Bill" />
  <Error text={errorState.bill} />
</div>
```

felhasználói szepmontból nézet problémák:

- nincsen semmilyen szabályozás, tehát a felhasználó akár 10000000-ret is bírhat a "custom" mezőbe, ahova max 100 kerülhetne . E mellet ha a többi mezőbe nagyon nagy számokat írnak be akkor elkezdenk ki lógni egyre jobban a karakterek a "dobozból".
- ha frissítik az oldalt véletlenül minden adat eltűnik

```

```

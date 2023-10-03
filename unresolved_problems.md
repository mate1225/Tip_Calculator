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

```

```

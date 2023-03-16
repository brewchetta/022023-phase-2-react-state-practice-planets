# React State Practice - Planets

This practice focuses a lot on conditional rendering however you'll also have to use a lot of state and understand information flow.

## Getting Started

Fork and clone the repository and then run `npm install` followed by `npm start`.

## Deliverable One

<!-- Map through all of the planets and display them as `PlanetCard`s in the `PlanetContainer`. -->

Hint: We're passing them from `App` for a reason that'll be important later...

## Deliverable Two

<!-- Create a toggle between light mode and dark mode! When we click the button that says 'Toggle Light Mode', a piece of state changes which conditionally gives the className `App light-mode` or `App dark-mode` for the main div in `App`.

Hint: You'll want your state in App...

Hint: It'll be easiest if you create a piece of state that's either `true` or `false` and use a ternary. -->

## Deliverable Three

<!-- When a planet card is clicked, change it so that instead of the picture, it displays the planet's information. This can be toggled so if it gets clicked again, it shows the planet picture again.

To make your life easy, everything you'll need for the planet's facts is located in the `PlanetFacts` component. -->

## Deliverable Four

<!-- If a planet is not classified as a planet (probably a dwarf planet or an asteroid) then give the planetary image a `className` of `not-planet`. For example:

```html
<img className="not-planet" />
```

If a planet _is_ in fact a planet, leave its `className` empty with an empty string or `null`.

Hint: You won't need state for this one... -->

## BONUS: Deliverable Five

When someone types into the search bar in `PlanetSearch` they can see only the planets whose names match.

Hint: The planets array lives in App... where should the state for your search term go?

# Directives

## empty-is-null [src](EmptyIsNull.directive.ts)

Angular set empty string as value when remove the contents of inputs/textarea,
this set null instead.

### Example

```html
<bb-input-container label="Input">
  <input bb-child [(ngModel)]="models.string_empty_null" empty-is-null />
</bb-input-container>
```

## integer [src](Integer.directive.ts)

Angular `&lt;input type="number" /%gt;` allow comma, dot and e letter
this forbid those so the result must be an integer.

Repeat: This only check the key input forbid comma, dot and e letter,
the model could be a float if you enter very big numbers...

### Example

```html
<bb-input-container label="Input">
  <input bb-child [(ngModel)]="models.integer" integer type="number" />
</bb-input-container>
```

## no-comma [src](NoComma.directive.ts)

Forbid to enter a comma character in input/texarea (prevent keydown).

This makes number english compatible disallowing spanish language.

### Example

```html
<bb-input-container label="Input">
  <input bb-child [(ngModel)]="models.string_empty_null" empty-is-null />
</bb-input-container>
```

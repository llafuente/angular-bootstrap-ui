## Directives

### input[bb-child], textarea[bb-child], select[bb-child]
<a name="bb-child"></a>
Expose the control itself to `bb-input-container`.

Also handle control state.


#### [source](/projects/angular-bootstrap-ui/src/bbchild.directive.ts)

#### Example

```html

<bb-input-container label="label text!">
  <input bb-child [(ngModel)]="inputs.example1" />
</bb-input-container>

<bb-input-container label="Dropdown!">
  <select bb-child [(ngModel)]="inputs.dropdown">
    <option value="v1">v1</option>
    <option value="v2">v2</option>
    <option value="v3">v3</option>
    <option value="v4">v4</option>
  </select>
</bb-input-container>

```

### textarea, textarea[bb-autosize]
<a name="bb-autosize"></a>

Auto resize textareas to fit the content and never display scroll bars.

**Note**: The minimun are 3 rows.

#### [source](/projects/angular-bootstrap-ui/src/bbtextarea-autosize.directive.ts)

#### Example

```html
<textarea>Content
more!
even more!
even even more!
even even even more!
even even even even more!
even even even even even more!
</textarea>
```

### empty-is-null

Angular set empty string as value when remove the contents of inputs/textarea,
this set null instead.

#### [source](/projects/angular-bootstrap-ui/src/empty-is-null.directive.ts)

#### Example

```html
<bb-input-container label="Input">
  <input bb-child [(ngModel)]="models.string_empty_null" empty-is-null />
</bb-input-container>
```

### integer

Angular `&lt;input type="number" /%gt;` allow comma, dot and e letter
this forbid those so the result must be an integer.

Repeat: This only check the key input forbid comma, dot and e letter,
the model could be a float if you enter very big numbers...

#### [source](Integer.directive.ts)

#### Example

```html
<bb-input-container label="Input">
  <input bb-child [(ngModel)]="models.integer" integer type="number" />
</bb-input-container>
```

### no-comma

Forbid to enter a comma character in input/texarea (prevent keydown).

This makes number english compatible disallowing spanish language.

#### [source](NoComma.directive.ts)

#### Example

```html
<bb-input-container label="Input">
  <input bb-child [(ngModel)]="models.string_empty_null" empty-is-null />
</bb-input-container>
```

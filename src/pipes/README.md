# pipes


## Subject pipes

Displaying a loading for componets could be tricky, the pipes below solve most
of the problem.

Note this subject work with subject not observables! You need to convert
`HttpClient` to subjects.

`bb-section-content` use subject as source to display loading/content/error
state, It's a good example of what you can do.

## getError

Returns the Error when the subject is resolved with an error, false otherwise.

Use it to display errors.

### Example

```html
<alert type="danger" *ngIf="subject | isError">
  <p>{{(subject | getError)?.message}}</p>
</div>
```

## isError

Returns true when the subject is resolved with an error, false otherwise.

Use it to display your content or error.

### Example

```html
<div [ngSwitch]="subject | isError">
  <div *ngSwitchCase="false">
    <alert type="danger">Error found</alert>
  </div>

  <div *ngSwitchCase="true">
    Content!
  </div>
</div>
```

## isLoading

Returns true while the subject is not resolved, false otherwise

Use it to dislay a spinner.

### Example

```html
<div [ngSwitch]="subject | isLoading">
  <div *ngSwitchCase="true">
    <bb-progress></bb-progress>
  </div>

  <div *ngSwitchCase="false">
    Content!
  </div>
</div>
```


## isSuccess

Returns true when the subject is resolved successfully, false otherwise.

Use it to display your content or error.

### Example

```html
<div [ngSwitch]="subject | isSuccess">
  <div *ngSwitchCase="true">
    Content fetched
  </div>

  <div *ngSwitchCase="false">
    Error or loading
  </div>
</div>
```

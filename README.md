# Minimal Cookie Law Plugin #

I needed a bare-bones library to help with the EU cookie law for a project. I couldn't find anything I liked, 
so I wrote one and I'm sharing it here.

Out-of-the-box it offers only click bindings to accept (`#cookie-accept`) and decline (`#cookie-decline`) buttons, 
and it displays a prompt `#cookies-prompt` based on past choices. It assumes the prompt is hidden via `.hidden` class.

Other CSS/HTML is all up to you.

Of course, you can also use the library as you wish, by binding/calling the functions listed below yourself.

## Prerequisites ##

- Cookies.js
- jQuery (planning to remove this as a prereq.)

## API ##

The library exposes the following functions.

```javascript
// Remembers that the user has accepted cookies.
cookies_accept()
```

```javascript
// Remembers that the user has declined cookies.
cookies_decline()
```

```javascript
// Returns true if the user has either accepted or declined cookies.
cookies_choice_made()
```

```javascript
// Forgets the user's choice.
cookies_forget_choice()
```

```javascript
// Returns true if the user has accepted cookies.
cookies_allowed()
```

Set the `COOKIE_EXPIRES` variable (in seconds, default: one year) to control when the cookie choice expires. 

## Example ##

A minimal example would be as follows. First, add a cookie prompt (note the element IDs).

```html
<div id="cookies-prompt" class="hidden">
  <p>
    Allow cookies? EU cookie law yadda yadda.
  </p>
  <button id="cookie-accept">Accept</button> <button id="cookie-decline">Decline</button>
</div>
```

Now you can conditionally load your javascript, depending on the user's choice.

```javascript
if (cookies_allowed()) {
    // Execute your code here, e.g., a Google Analytics snippet.
}
```

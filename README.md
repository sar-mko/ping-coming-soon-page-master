# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![Desktop](images/desktop-prev.png)
![Mobile](images/mobile-prev.png)

### Links

- Live Site URL: [Live Site](https://sar-mko.github.io/ping-coming-soon-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned
Targetted the input's *value* for a regex test rather than checking text.
```js
 if(emailRegex.test(input.value)){
        alert('Submitted!')
        ...
 }
```

### Continued development

I would add more smoother transitions between the media queries, for a cleaner look.

## Author

- Github - [Sarah Mko](https://github.com/sar-mko)
- Frontend Mentor - [@sar-mko](https://www.frontendmentor.io/profile/sar-mko)

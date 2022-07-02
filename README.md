# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./src/assets/desktop-preview.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/ecommerce-website-frontend-part-react-splidejs-typescript-tgpc6jb_bF](https://www.frontendmentor.io/solutions/ecommerce-website-frontend-part-react-splidejs-typescript-tgpc6jb_bF)
- Live Site URL: [https://e-commerce-product-website.vercel.app/](https://e-commerce-product-website.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass/Scss
- Mobile-first workflow
- TypeScript
- [React](https://reactjs.org/) - JS library
- [Splide.js](https://splidejs.com/) - slider library

### What I learned

I made svgs accessible by the following code;

```jsx
export default function PlusIcon() {
  return (
    <svg
      width="12"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby="plus"
    >
      <title id="plus">Plus</title>
      <defs>
        <path
          d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
          id="b"
        />
      </defs>
      <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
    </svg>
  );
}
```

`min` attribute on `input` did not work in Content.tsx, so I used function `handleInput` to disable minus button and prevent the input amount become minus value when the amount is less than 1.

```jsx
const handleInput = () => {
  if (amount < 1) {
    setAmount(0);
  } else {
    setAmount(amount - 1);
  }
};
```

```jsx
<input
  type="number"
  name="amount"
  id="amount"
  value={amount}
  min="0"
  onChange={(e) => setAmount(Number(e.target.value))}
/>
```

I also learnt methods on splide.js. I used `go()` to change slide by clicking thumbnails and `sync()` to syncronize the slide on main page and on modal.

### Continued development

To achieve high level of accessibility, I used splide.js, however it ended up with so many errors pointed out by Deque University. I know achieving a good accessibility for slider is hard, but I want to try other frameworks or suggest not to use slider as much as possible.

This project is only frontend part of the website, following the task given by frontend mentor. I would like to try similar website as full-stack app and elavorate to bigger website.

I used prop drilling, so my code got a little messy but I can keep track what I was doing. I can use context or redux next time.

### Useful resources

- [Splide official documents](https://splidejs.com/)

## Author

- Website - [https://yukohorita-dev.vercel.app/](https://yukohorita-dev.vercel.app/)
- Frontend Mentor - [@Sloth247](https://e-commerce-product-website.vercel.app/)

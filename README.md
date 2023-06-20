# Sizzle test project

## Install

Checkout the project and run in your terminal:

```
npm install
```

## Run development mode

```
npm run dev
```

## Build for production

```
npm run build
```

The output will be under _/dist_

## How to use images

To use images, you can import them in your current file and webpack will give you the image as a base64 encoded string or as a path to the image.

```javascript
import * as image from "./image.jpg";

const ImageComponent = () => <img src={image} />;
```

import uniqid from "uniqid";

export const reversedControls = (e, direction) => {
  switch (e.keyCode) {
    //touche du haut
    case 38:
      // console.log("going up");
      if (direction.current !== "UP") {
        direction.current = "DOWN";
      }
      // Going up
      break;
    case 40:
      if (direction.current !== "DOWN") {
        direction.current = "UP";
      }
      // Going down
      break;
    case 37:
      if (direction.current !== "LEFT") {
        direction.current = "RIGHT";
      }
      // Going left
      break;
    case 39:
      if (direction.current !== "RIGHT") {
        direction.current = "LEFT";
      }
      // Going right
      break;

    default:
      break;
  }
};

export const defaultControls = (e, direction) => {
  switch (e.keyCode) {
    case 38:
      // console.log("going up");
      if (direction.current !== "DOWN") {
        direction.current = "UP";
      }
      // Going up
      break;
    case 40:
      if (direction.current !== "UP") {
        direction.current = "DOWN";
      }
      // Going down
      break;
    case 37:
      if (direction.current !== "RIGHT") {
        direction.current = "LEFT";
      }
      // Going left
      break;
    case 39:
      if (direction.current !== "LEFT") {
        direction.current = "RIGHT";
      }
      // Going right
      break;

    default:
      break;
  }
};

export const generateRandomCoordinates = (mode) => {
  // console.log("generate random");
  const id = uniqid();
  let min = 0;
  let max = 49;
  let x, y;

  if (mode.includes("corner")) {
    // logique pour générer des coordonnées uniquement sur les côtés
    const side = Math.random();
    console.log(side);

    if (side <= 0.25) {
      console.log("generate left");
      //générer à gauche
      x = min;
      y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
      y *= 10;
    } else if (side > 0.25 && side <= 0.5) {
      console.log("generate right");
      //générer à droite
      x = max * 10;
      y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
      y *= 10;
    } else if (side > 0.5 && side <= 0.75) {
      console.log("generate bottom");
      x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
      x *= 10;

      y = max * 10;
      //générer en bas
    } else if (side > 0.75) {
      console.log("generate top");
      x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
      x *= 10;

      y = min;
      //générer en haut
    }

    // console.log(side);
  } else {
    // logique classique
    x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

    x *= 10;

    y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

    y *= 10;
  }

  // console.log(x, y);

  return { x, y, id };
};
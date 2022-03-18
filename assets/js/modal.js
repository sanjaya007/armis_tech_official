var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

// modal vector
const modalBox = document.querySelector(".modal-wrapper");

const modalVectorDotFirst = document.querySelector(".modal-vector-dot-first");
const modalVectorDotSecond = document.querySelector(".modal-vector-dot-second");
const modalVectorDotThird = document.querySelector(".modal-vector-dot-third");
const modalVectorDotFourth = document.querySelector(".modal-vector-dot-fourth");
const modalVectorDotFifth = document.querySelector(".modal-vector-dot-fifth");
const modalVectorPlusFirst = document.querySelector(".modal-vector-plus-first");
const modalVectorPlusSecond = document.querySelector(
  ".modal-vector-plus-second"
);
const modalVectorPlusThird = document.querySelector(".modal-vector-plus-third");
const modalVectorPlusFourth = document.querySelector(
  ".modal-vector-plus-fourth"
);
const modalVectorPlusFifth = document.querySelector(".modal-vector-plus-fifth");
const modalVectorSquareFirst = document.querySelector(
  ".modal-vector-square-first"
);
const modalVectorSquareSecond = document.querySelector(
  ".modal-vector-square-second"
);
const modalVectorTriangleFirst = document.querySelector(
  ".modal-vector-triangle-first"
);
const modalVectorTriangleSecond = document.querySelector(
  ".modal-vector-triangle-second"
);

let modalBoxWidth = modalBox.getBoundingClientRect().width;
let modalBoxHeight = modalBox.getBoundingClientRect().height;

// dot first
let modalVectorDotFirstSpeedX = 0.7;
let modalVectorDotFirstSpeedY = 0.7;
let modalVectorDotFirstPositionX = 0;
let modalVectorDotFirstPositionY = 0;

function moveModalVectorDotFirst() {
  modalVectorDotFirstPositionX += modalVectorDotFirstSpeedX;
  modalVectorDotFirstPositionY += modalVectorDotFirstSpeedY;

  if (
    modalVectorDotFirstPositionX >= modalBoxWidth ||
    modalVectorDotFirstPositionX <= 0
  ) {
    modalVectorDotFirstSpeedX *= -1;
  }

  if (
    modalVectorDotFirstPositionY >= modalBoxHeight ||
    modalVectorDotFirstPositionY <= 0
  ) {
    modalVectorDotFirstSpeedY *= -1;
  }

  modalVectorDotFirst.style.left = modalVectorDotFirstPositionX + "px";
  modalVectorDotFirst.style.top = modalVectorDotFirstPositionY + "px";

  requestAnimationFrame(moveModalVectorDotFirst);
}
moveModalVectorDotFirst();

// dot second
let modalVectorDotSecondSpeedX = 0.7;
let modalVectorDotSecondSpeedY = 0.7;
let modalVectorDotSecondPositionX = modalBoxWidth - 1;
let modalVectorDotSecondPositionY = 0;

function moveModalVectorDotSecond() {
  modalVectorDotSecondPositionX += modalVectorDotSecondSpeedX;
  modalVectorDotSecondPositionY += modalVectorDotSecondSpeedY;

  if (
    modalVectorDotSecondPositionX >= modalBoxWidth ||
    modalVectorDotSecondPositionX <= 0
  ) {
    modalVectorDotSecondSpeedX *= -1;
  }

  if (
    modalVectorDotSecondPositionY >= modalBoxHeight ||
    modalVectorDotSecondPositionY <= 0
  ) {
    modalVectorDotSecondSpeedY *= -1;
  }

  modalVectorDotSecond.style.left = modalVectorDotSecondPositionX + "px";
  modalVectorDotSecond.style.top = modalVectorDotSecondPositionY + "px";

  requestAnimationFrame(moveModalVectorDotSecond);
}
moveModalVectorDotSecond();

// dot Third
let modalVectorDotThirdSpeedX = 0.7;
let modalVectorDotThirdSpeedY = 0.7;
let modalVectorDotThirdPositionX = modalBoxWidth / 1.5;
let modalVectorDotThirdPositionY = modalBoxWidth / 2;

function moveModalVectorDotThird() {
  modalVectorDotThirdPositionX -= modalVectorDotThirdSpeedX;
  modalVectorDotThirdPositionY -= modalVectorDotThirdSpeedY;

  if (
    modalVectorDotThirdPositionX >= modalBoxWidth ||
    modalVectorDotThirdPositionX <= 0
  ) {
    modalVectorDotThirdSpeedX *= -1;
  }

  if (
    modalVectorDotThirdPositionY >= modalBoxHeight ||
    modalVectorDotThirdPositionY <= 0
  ) {
    modalVectorDotThirdSpeedY *= -1;
  }

  modalVectorDotThird.style.left = modalVectorDotThirdPositionX + "px";
  modalVectorDotThird.style.top = modalVectorDotThirdPositionY + "px";

  requestAnimationFrame(moveModalVectorDotThird);
}
moveModalVectorDotThird();

// dot Fourth
let modalVectorDotFourthSpeedX = 0.8;
let modalVectorDotFourthSpeedY = 0.8;
let modalVectorDotFourthPositionX = modalBoxWidth / 2;
let modalVectorDotFourthPositionY = 0;

function moveModalVectorDotFourth() {
  modalVectorDotFourthPositionX += modalVectorDotFourthSpeedX;
  modalVectorDotFourthPositionY += modalVectorDotFourthSpeedY;

  if (
    modalVectorDotFourthPositionX >= modalBoxWidth ||
    modalVectorDotFourthPositionX <= 0
  ) {
    modalVectorDotFourthSpeedX *= -1;
  }

  if (
    modalVectorDotFourthPositionY >= modalBoxHeight ||
    modalVectorDotFourthPositionY <= 0
  ) {
    modalVectorDotFourthSpeedY *= -1;
  }

  modalVectorDotFourth.style.left = modalVectorDotFourthPositionX + "px";
  modalVectorDotFourth.style.top = modalVectorDotFourthPositionY + "px";

  requestAnimationFrame(moveModalVectorDotFourth);
}
moveModalVectorDotFourth();

// dot Fifth
let modalVectorDotFifthSpeedX = 0.8;
let modalVectorDotFifthSpeedY = 0.8;
let modalVectorDotFifthPositionX = modalBoxWidth / 2;
let modalVectorDotFifthPositionY = modalBoxHeight / 3;

function moveModalVectorDotFifth() {
  modalVectorDotFifthPositionX -= modalVectorDotFifthSpeedX;
  modalVectorDotFifthPositionY -= modalVectorDotFifthSpeedY;

  if (
    modalVectorDotFifthPositionX >= modalBoxWidth ||
    modalVectorDotFifthPositionX <= 0
  ) {
    modalVectorDotFifthSpeedX *= -1;
  }

  if (
    modalVectorDotFifthPositionY >= modalBoxHeight ||
    modalVectorDotFifthPositionY <= 0
  ) {
    modalVectorDotFifthSpeedY *= -1;
  }

  modalVectorDotFifth.style.left = modalVectorDotFifthPositionX + "px";
  modalVectorDotFifth.style.top = modalVectorDotFifthPositionY + "px";

  requestAnimationFrame(moveModalVectorDotFifth);
}
moveModalVectorDotFifth();

// plus First
let modalVectorPlusFirstSpeedX = 0.5;
let modalVectorPlusFirstSpeedY = 0.5;
let modalVectorPlusFirstPositionX = 0;
let modalVectorPlusFirstPositionY = modalBoxHeight / 2;

function moveModalVectorPlusFirst() {
  modalVectorPlusFirstPositionX += modalVectorPlusFirstSpeedX;
  modalVectorPlusFirstPositionY += modalVectorPlusFirstSpeedY;

  if (
    modalVectorPlusFirstPositionX >= modalBoxWidth ||
    modalVectorPlusFirstPositionX <= 0
  ) {
    modalVectorPlusFirstSpeedX *= -1;
  }

  if (
    modalVectorPlusFirstPositionY >= modalBoxHeight ||
    modalVectorPlusFirstPositionY <= 0
  ) {
    modalVectorPlusFirstSpeedY *= -1;
  }

  modalVectorPlusFirst.style.left = modalVectorPlusFirstPositionX + "px";
  modalVectorPlusFirst.style.top = modalVectorPlusFirstPositionY + "px";

  requestAnimationFrame(moveModalVectorPlusFirst);
}
moveModalVectorPlusFirst();

// plus Second
let modalVectorPlusSecondSpeedX = 0.5;
let modalVectorPlusSecondSpeedY = 0.5;
let modalVectorPlusSecondPositionX = modalBoxWidth - 1;
let modalVectorPlusSecondPositionY = modalBoxHeight / 2;

function moveModalVectorPlusSecond() {
  modalVectorPlusSecondPositionX += modalVectorPlusSecondSpeedX;
  modalVectorPlusSecondPositionY += modalVectorPlusSecondSpeedY;

  if (
    modalVectorPlusSecondPositionX >= modalBoxWidth ||
    modalVectorPlusSecondPositionX <= 0
  ) {
    modalVectorPlusSecondSpeedX *= -1;
  }

  if (
    modalVectorPlusSecondPositionY >= modalBoxHeight ||
    modalVectorPlusSecondPositionY <= 0
  ) {
    modalVectorPlusSecondSpeedY *= -1;
  }

  modalVectorPlusSecond.style.left = modalVectorPlusSecondPositionX + "px";
  modalVectorPlusSecond.style.top = modalVectorPlusSecondPositionY + "px";

  requestAnimationFrame(moveModalVectorPlusSecond);
}
moveModalVectorPlusSecond();

// plus Third
let modalVectorPlusThirdSpeedX = 0.5;
let modalVectorPlusThirdSpeedY = 0.5;
let modalVectorPlusThirdPositionX = modalBoxWidth / 2;
let modalVectorPlusThirdPositionY = modalBoxHeight / 2;

function moveModalVectorPlusThird() {
  modalVectorPlusThirdPositionX += modalVectorPlusThirdSpeedX;
  modalVectorPlusThirdPositionY += modalVectorPlusThirdSpeedY;

  if (
    modalVectorPlusThirdPositionX >= modalBoxWidth ||
    modalVectorPlusThirdPositionX <= 0
  ) {
    modalVectorPlusThirdSpeedX *= -1;
  }

  if (
    modalVectorPlusThirdPositionY >= modalBoxHeight ||
    modalVectorPlusThirdPositionY <= 0
  ) {
    modalVectorPlusThirdSpeedY *= -1;
  }

  modalVectorPlusThird.style.left = modalVectorPlusThirdPositionX + "px";
  modalVectorPlusThird.style.top = modalVectorPlusThirdPositionY + "px";

  requestAnimationFrame(moveModalVectorPlusThird);
}
moveModalVectorPlusThird();

// plus Fourth
let modalVectorPlusFourthSpeedX = 0.5;
let modalVectorPlusFourthSpeedY = 0.5;
let modalVectorPlusFourthPositionX = modalBoxWidth / 2;
let modalVectorPlusFourthPositionY = modalBoxHeight / 2;

function moveModalVectorPlusFourth() {
  modalVectorPlusFourthPositionX -= modalVectorPlusFourthSpeedX;
  modalVectorPlusFourthPositionY -= modalVectorPlusFourthSpeedY;

  if (
    modalVectorPlusFourthPositionX >= modalBoxWidth ||
    modalVectorPlusFourthPositionX <= 0
  ) {
    modalVectorPlusFourthSpeedX *= -1;
  }

  if (
    modalVectorPlusFourthPositionY >= modalBoxHeight ||
    modalVectorPlusFourthPositionY <= 0
  ) {
    modalVectorPlusFourthSpeedY *= -1;
  }

  modalVectorPlusFourth.style.left = modalVectorPlusFourthPositionX + "px";
  modalVectorPlusFourth.style.top = modalVectorPlusFourthPositionY + "px";

  requestAnimationFrame(moveModalVectorPlusFourth);
}
moveModalVectorPlusFourth();

// plus Fifth
let modalVectorPlusFifthSpeedX = 0.5;
let modalVectorPlusFifthSpeedY = 0.5;
let modalVectorPlusFifthPositionX = modalBoxWidth / 1.5;
let modalVectorPlusFifthPositionY = 0;

function moveModalVectorPlusFifth() {
  modalVectorPlusFifthPositionX += modalVectorPlusFifthSpeedX;
  modalVectorPlusFifthPositionY += modalVectorPlusFifthSpeedY;

  if (
    modalVectorPlusFifthPositionX >= modalBoxWidth ||
    modalVectorPlusFifthPositionX <= 0
  ) {
    modalVectorPlusFifthSpeedX *= -1;
  }

  if (
    modalVectorPlusFifthPositionY >= modalBoxHeight ||
    modalVectorPlusFifthPositionY <= 0
  ) {
    modalVectorPlusFifthSpeedY *= -1;
  }

  modalVectorPlusFifth.style.left = modalVectorPlusFifthPositionX + "px";
  modalVectorPlusFifth.style.top = modalVectorPlusFifthPositionY + "px";

  requestAnimationFrame(moveModalVectorPlusFifth);
}
moveModalVectorPlusFifth();

// square first
let modalVectorSquareFirstSpeedX = 0.3;
let modalVectorSquareFirstSpeedY = 0.3;
let modalVectorSquareFirstPositionX = modalBoxWidth / 3;
let modalVectorSquareFirstPositionY = modalBoxHeight / 1.5;

function moveModalVectorSquareFirst() {
  modalVectorSquareFirstPositionX -= modalVectorSquareFirstSpeedX;
  modalVectorSquareFirstPositionY -= modalVectorSquareFirstSpeedY;

  if (
    modalVectorSquareFirstPositionX >= modalBoxWidth ||
    modalVectorSquareFirstPositionX <= 0
  ) {
    modalVectorSquareFirstSpeedX *= -1;
  }

  if (
    modalVectorSquareFirstPositionY >= modalBoxHeight ||
    modalVectorSquareFirstPositionY <= 0
  ) {
    modalVectorSquareFirstSpeedY *= -1;
  }

  modalVectorSquareFirst.style.left = modalVectorSquareFirstPositionX + "px";
  modalVectorSquareFirst.style.top = modalVectorSquareFirstPositionY + "px";

  requestAnimationFrame(moveModalVectorSquareFirst);
}
moveModalVectorSquareFirst();

// square Second
let modalVectorSquareSecondSpeedX = 0.3;
let modalVectorSquareSecondSpeedY = 0.3;
let modalVectorSquareSecondPositionX = modalBoxWidth - 1;
let modalVectorSquareSecondPositionY = modalBoxHeight / 3;

function moveModalVectorSquareSecond() {
  modalVectorSquareSecondPositionX += modalVectorSquareSecondSpeedX;
  modalVectorSquareSecondPositionY += modalVectorSquareSecondSpeedY;

  if (
    modalVectorSquareSecondPositionX >= modalBoxWidth ||
    modalVectorSquareSecondPositionX <= 0
  ) {
    modalVectorSquareSecondSpeedX *= -1;
  }

  if (
    modalVectorSquareSecondPositionY >= modalBoxHeight ||
    modalVectorSquareSecondPositionY <= 0
  ) {
    modalVectorSquareSecondSpeedY *= -1;
  }

  modalVectorSquareSecond.style.left = modalVectorSquareSecondPositionX + "px";
  modalVectorSquareSecond.style.top = modalVectorSquareSecondPositionY + "px";

  requestAnimationFrame(moveModalVectorSquareSecond);
}
moveModalVectorSquareSecond();

// Triangle first
let modalVectorTriangleFirstSpeedX = 0.4;
let modalVectorTriangleFirstSpeedY = 0.4;
let modalVectorTriangleFirstPositionX = modalBoxWidth / 2.5;
let modalVectorTriangleFirstPositionY = modalBoxHeight / 2;

function moveModalVectorTriangleFirst() {
  modalVectorTriangleFirstPositionX -= modalVectorTriangleFirstSpeedX;
  modalVectorTriangleFirstPositionY -= modalVectorTriangleFirstSpeedY;

  if (
    modalVectorTriangleFirstPositionX >= modalBoxWidth ||
    modalVectorTriangleFirstPositionX <= 0
  ) {
    modalVectorTriangleFirstSpeedX *= -1;
  }

  if (
    modalVectorTriangleFirstPositionY >= modalBoxHeight ||
    modalVectorTriangleFirstPositionY <= 0
  ) {
    modalVectorTriangleFirstSpeedY *= -1;
  }

  modalVectorTriangleFirst.style.left =
    modalVectorTriangleFirstPositionX + "px";
  modalVectorTriangleFirst.style.top = modalVectorTriangleFirstPositionY + "px";

  requestAnimationFrame(moveModalVectorTriangleFirst);
}
moveModalVectorTriangleFirst();

// Triangle Second
let modalVectorTriangleSecondSpeedX = 0.4;
let modalVectorTriangleSecondSpeedY = 0.4;
let modalVectorTriangleSecondPositionX = modalBoxWidth / 1.5;
let modalVectorTriangleSecondPositionY = modalBoxHeight / 2;

function moveModalVectorTriangleSecond() {
  modalVectorTriangleSecondPositionX += modalVectorTriangleSecondSpeedX;
  modalVectorTriangleSecondPositionY += modalVectorTriangleSecondSpeedY;

  if (
    modalVectorTriangleSecondPositionX >= modalBoxWidth ||
    modalVectorTriangleSecondPositionX <= 0
  ) {
    modalVectorTriangleSecondSpeedX *= -1;
  }

  if (
    modalVectorTriangleSecondPositionY >= modalBoxHeight ||
    modalVectorTriangleSecondPositionY <= 0
  ) {
    modalVectorTriangleSecondSpeedY *= -1;
  }

  modalVectorTriangleSecond.style.left =
    modalVectorTriangleSecondPositionX + "px";
  modalVectorTriangleSecond.style.top =
    modalVectorTriangleSecondPositionY + "px";

  requestAnimationFrame(moveModalVectorTriangleSecond);
}
moveModalVectorTriangleSecond();

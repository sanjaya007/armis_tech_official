$(window).on("load", function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  // about vector
  const aboutBox = document.querySelector(".about-container");

  const aboutVectorDotFirst = document.querySelector(".about-vector-dot-first");
  const aboutVectorDotSecond = document.querySelector(
    ".about-vector-dot-second"
  );
  const aboutVectorDotThird = document.querySelector(".about-vector-dot-third");
  const aboutVectorDotFourth = document.querySelector(
    ".about-vector-dot-fourth"
  );
  const aboutVectorPlusFirst = document.querySelector(
    ".about-vector-plus-first"
  );
  const aboutVectorPlusSecond = document.querySelector(
    ".about-vector-plus-second"
  );
  const aboutVectorPlusThird = document.querySelector(
    ".about-vector-plus-third"
  );
  const aboutVectorPlusFourth = document.querySelector(
    ".about-vector-plus-fourth"
  );

  let aboutBoxWidth = aboutBox.getBoundingClientRect().width;
  let aboutBoxHeight = aboutBox.getBoundingClientRect().height;

  // dot first
  let aboutVectorDotFirstSpeedX = 0.7;
  let aboutVectorDotFirstSpeedY = 0.7;
  let aboutVectorDotFirstPositionX = 0;
  let aboutVectorDotFirstPositionY = 0;

  function moveAboutVectorDotFirst() {
    aboutVectorDotFirstPositionX += aboutVectorDotFirstSpeedX;
    aboutVectorDotFirstPositionY += aboutVectorDotFirstSpeedY;

    if (
      aboutVectorDotFirstPositionX >= aboutBoxWidth ||
      aboutVectorDotFirstPositionX <= 0
    ) {
      aboutVectorDotFirstSpeedX *= -1;
    }

    if (
      aboutVectorDotFirstPositionY >= aboutBoxHeight ||
      aboutVectorDotFirstPositionY <= 0
    ) {
      aboutVectorDotFirstSpeedY *= -1;
    }

    aboutVectorDotFirst.style.left = aboutVectorDotFirstPositionX + "px";
    aboutVectorDotFirst.style.top = aboutVectorDotFirstPositionY + "px";

    requestAnimationFrame(moveAboutVectorDotFirst);
  }
  moveAboutVectorDotFirst();

  // dot second
  let aboutVectorDotSecondSpeedX = 0.7;
  let aboutVectorDotSecondSpeedY = 0.7;
  let aboutVectorDotSecondPositionX = aboutBoxWidth - 1;
  let aboutVectorDotSecondPositionY = 0;

  function moveAboutVectorDotSecond() {
    aboutVectorDotSecondPositionX += aboutVectorDotSecondSpeedX;
    aboutVectorDotSecondPositionY += aboutVectorDotSecondSpeedY;

    if (
      aboutVectorDotSecondPositionX >= aboutBoxWidth ||
      aboutVectorDotSecondPositionX <= 0
    ) {
      aboutVectorDotSecondSpeedX *= -1;
    }

    if (
      aboutVectorDotSecondPositionY >= aboutBoxHeight ||
      aboutVectorDotSecondPositionY <= 0
    ) {
      aboutVectorDotSecondSpeedY *= -1;
    }

    aboutVectorDotSecond.style.left = aboutVectorDotSecondPositionX + "px";
    aboutVectorDotSecond.style.top = aboutVectorDotSecondPositionY + "px";

    requestAnimationFrame(moveAboutVectorDotSecond);
  }
  moveAboutVectorDotSecond();

  // dot Third
  let aboutVectorDotThirdSpeedX = 0.7;
  let aboutVectorDotThirdSpeedY = 0.7;
  let aboutVectorDotThirdPositionX = aboutBoxWidth / 1.5;
  let aboutVectorDotThirdPositionY = aboutBoxWidth / 2;

  function moveAboutVectorDotThird() {
    aboutVectorDotThirdPositionX -= aboutVectorDotThirdSpeedX;
    aboutVectorDotThirdPositionY -= aboutVectorDotThirdSpeedY;

    if (
      aboutVectorDotThirdPositionX >= aboutBoxWidth ||
      aboutVectorDotThirdPositionX <= 0
    ) {
      aboutVectorDotThirdSpeedX *= -1;
    }

    if (
      aboutVectorDotThirdPositionY >= aboutBoxHeight ||
      aboutVectorDotThirdPositionY <= 0
    ) {
      aboutVectorDotThirdSpeedY *= -1;
    }

    aboutVectorDotThird.style.left = aboutVectorDotThirdPositionX + "px";
    aboutVectorDotThird.style.top = aboutVectorDotThirdPositionY + "px";

    requestAnimationFrame(moveAboutVectorDotThird);
  }
  moveAboutVectorDotThird();

  // dot Fourth
  let aboutVectorDotFourthSpeedX = 0.8;
  let aboutVectorDotFourthSpeedY = 0.8;
  let aboutVectorDotFourthPositionX = aboutBoxWidth / 2;
  let aboutVectorDotFourthPositionY = 0;

  function moveAboutVectorDotFourth() {
    aboutVectorDotFourthPositionX += aboutVectorDotFourthSpeedX;
    aboutVectorDotFourthPositionY += aboutVectorDotFourthSpeedY;

    if (
      aboutVectorDotFourthPositionX >= aboutBoxWidth ||
      aboutVectorDotFourthPositionX <= 0
    ) {
      aboutVectorDotFourthSpeedX *= -1;
    }

    if (
      aboutVectorDotFourthPositionY >= aboutBoxHeight ||
      aboutVectorDotFourthPositionY <= 0
    ) {
      aboutVectorDotFourthSpeedY *= -1;
    }

    aboutVectorDotFourth.style.left = aboutVectorDotFourthPositionX + "px";
    aboutVectorDotFourth.style.top = aboutVectorDotFourthPositionY + "px";

    requestAnimationFrame(moveAboutVectorDotFourth);
  }
  moveAboutVectorDotFourth();

  // plus First
  let aboutVectorPlusFirstSpeedX = 0.5;
  let aboutVectorPlusFirstSpeedY = 0.5;
  let aboutVectorPlusFirstPositionX = 0;
  let aboutVectorPlusFirstPositionY = aboutBoxHeight / 2;

  function moveAboutVectorPlusFirst() {
    aboutVectorPlusFirstPositionX += aboutVectorPlusFirstSpeedX;
    aboutVectorPlusFirstPositionY += aboutVectorPlusFirstSpeedY;

    if (
      aboutVectorPlusFirstPositionX >= aboutBoxWidth ||
      aboutVectorPlusFirstPositionX <= 0
    ) {
      aboutVectorPlusFirstSpeedX *= -1;
    }

    if (
      aboutVectorPlusFirstPositionY >= aboutBoxHeight ||
      aboutVectorPlusFirstPositionY <= 0
    ) {
      aboutVectorPlusFirstSpeedY *= -1;
    }

    aboutVectorPlusFirst.style.left = aboutVectorPlusFirstPositionX + "px";
    aboutVectorPlusFirst.style.top = aboutVectorPlusFirstPositionY + "px";

    requestAnimationFrame(moveAboutVectorPlusFirst);
  }
  moveAboutVectorPlusFirst();

  // plus Second
  let aboutVectorPlusSecondSpeedX = 0.5;
  let aboutVectorPlusSecondSpeedY = 0.5;
  let aboutVectorPlusSecondPositionX = aboutBoxWidth - 1;
  let aboutVectorPlusSecondPositionY = aboutBoxHeight / 2;

  function moveAboutVectorPlusSecond() {
    aboutVectorPlusSecondPositionX += aboutVectorPlusSecondSpeedX;
    aboutVectorPlusSecondPositionY += aboutVectorPlusSecondSpeedY;

    if (
      aboutVectorPlusSecondPositionX >= aboutBoxWidth ||
      aboutVectorPlusSecondPositionX <= 0
    ) {
      aboutVectorPlusSecondSpeedX *= -1;
    }

    if (
      aboutVectorPlusSecondPositionY >= aboutBoxHeight ||
      aboutVectorPlusSecondPositionY <= 0
    ) {
      aboutVectorPlusSecondSpeedY *= -1;
    }

    aboutVectorPlusSecond.style.left = aboutVectorPlusSecondPositionX + "px";
    aboutVectorPlusSecond.style.top = aboutVectorPlusSecondPositionY + "px";

    requestAnimationFrame(moveAboutVectorPlusSecond);
  }
  moveAboutVectorPlusSecond();

  // plus Third
  let aboutVectorPlusThirdSpeedX = 0.5;
  let aboutVectorPlusThirdSpeedY = 0.5;
  let aboutVectorPlusThirdPositionX = aboutBoxWidth / 2;
  let aboutVectorPlusThirdPositionY = aboutBoxHeight / 2;

  function moveAboutVectorPlusThird() {
    aboutVectorPlusThirdPositionX += aboutVectorPlusThirdSpeedX;
    aboutVectorPlusThirdPositionY += aboutVectorPlusThirdSpeedY;

    if (
      aboutVectorPlusThirdPositionX >= aboutBoxWidth ||
      aboutVectorPlusThirdPositionX <= 0
    ) {
      aboutVectorPlusThirdSpeedX *= -1;
    }

    if (
      aboutVectorPlusThirdPositionY >= aboutBoxHeight ||
      aboutVectorPlusThirdPositionY <= 0
    ) {
      aboutVectorPlusThirdSpeedY *= -1;
    }

    aboutVectorPlusThird.style.left = aboutVectorPlusThirdPositionX + "px";
    aboutVectorPlusThird.style.top = aboutVectorPlusThirdPositionY + "px";

    requestAnimationFrame(moveAboutVectorPlusThird);
  }
  moveAboutVectorPlusThird();

  // plus Fourth
  let aboutVectorPlusFourthSpeedX = 0.5;
  let aboutVectorPlusFourthSpeedY = 0.5;
  let aboutVectorPlusFourthPositionX = aboutBoxWidth / 2;
  let aboutVectorPlusFourthPositionY = aboutBoxHeight / 2;

  function moveAboutVectorPlusFourth() {
    aboutVectorPlusFourthPositionX -= aboutVectorPlusFourthSpeedX;
    aboutVectorPlusFourthPositionY -= aboutVectorPlusFourthSpeedY;

    if (
      aboutVectorPlusFourthPositionX >= aboutBoxWidth ||
      aboutVectorPlusFourthPositionX <= 0
    ) {
      aboutVectorPlusFourthSpeedX *= -1;
    }

    if (
      aboutVectorPlusFourthPositionY >= aboutBoxHeight ||
      aboutVectorPlusFourthPositionY <= 0
    ) {
      aboutVectorPlusFourthSpeedY *= -1;
    }

    aboutVectorPlusFourth.style.left = aboutVectorPlusFourthPositionX + "px";
    aboutVectorPlusFourth.style.top = aboutVectorPlusFourthPositionY + "px";

    requestAnimationFrame(moveAboutVectorPlusFourth);
  }
  moveAboutVectorPlusFourth();

  // product vector
  const productBox = document.querySelector(".product-container");

  const productVectorDotFirst = document.querySelector(
    ".product-vector-dot-first"
  );
  const productVectorDotSecond = document.querySelector(
    ".product-vector-dot-second"
  );
  const productVectorDotThird = document.querySelector(
    ".product-vector-dot-third"
  );
  const productVectorDotFourth = document.querySelector(
    ".product-vector-dot-fourth"
  );
  const productVectorPlusFirst = document.querySelector(
    ".product-vector-plus-first"
  );
  const productVectorPlusSecond = document.querySelector(
    ".product-vector-plus-second"
  );
  const productVectorPlusThird = document.querySelector(
    ".product-vector-plus-third"
  );
  const productVectorPlusFourth = document.querySelector(
    ".product-vector-plus-fourth"
  );

  let productBoxWidth = productBox.getBoundingClientRect().width;
  let productBoxHeight = productBox.getBoundingClientRect().height;

  // dot first
  let productVectorDotFirstSpeedX = 0.7;
  let productVectorDotFirstSpeedY = 0.7;
  let productVectorDotFirstPositionX = 0;
  let productVectorDotFirstPositionY = 0;

  function moveProductVectorDotFirst() {
    productVectorDotFirstPositionX += productVectorDotFirstSpeedX;
    productVectorDotFirstPositionY += productVectorDotFirstSpeedY;

    if (
      productVectorDotFirstPositionX >= productBoxWidth ||
      productVectorDotFirstPositionX <= 0
    ) {
      productVectorDotFirstSpeedX *= -1;
    }

    if (
      productVectorDotFirstPositionY >= productBoxHeight ||
      productVectorDotFirstPositionY <= 0
    ) {
      productVectorDotFirstSpeedY *= -1;
    }

    productVectorDotFirst.style.left = productVectorDotFirstPositionX + "px";
    productVectorDotFirst.style.top = productVectorDotFirstPositionY + "px";

    requestAnimationFrame(moveProductVectorDotFirst);
  }
  moveProductVectorDotFirst();

  // dot second
  let productVectorDotSecondSpeedX = 0.7;
  let productVectorDotSecondSpeedY = 0.7;
  let productVectorDotSecondPositionX = productBoxWidth - 1;
  let productVectorDotSecondPositionY = 0;

  function moveProductVectorDotSecond() {
    productVectorDotSecondPositionX += productVectorDotSecondSpeedX;
    productVectorDotSecondPositionY += productVectorDotSecondSpeedY;

    if (
      productVectorDotSecondPositionX >= productBoxWidth ||
      productVectorDotSecondPositionX <= 0
    ) {
      productVectorDotSecondSpeedX *= -1;
    }

    if (
      productVectorDotSecondPositionY >= productBoxHeight ||
      productVectorDotSecondPositionY <= 0
    ) {
      productVectorDotSecondSpeedY *= -1;
    }

    productVectorDotSecond.style.left = productVectorDotSecondPositionX + "px";
    productVectorDotSecond.style.top = productVectorDotSecondPositionY + "px";

    requestAnimationFrame(moveProductVectorDotSecond);
  }
  moveProductVectorDotSecond();

  // dot Third
  let productVectorDotThirdSpeedX = 0.7;
  let productVectorDotThirdSpeedY = 0.7;
  let productVectorDotThirdPositionX = productBoxWidth / 1.5;
  let productVectorDotThirdPositionY = productBoxWidth / 2;

  function moveProductVectorDotThird() {
    productVectorDotThirdPositionX -= productVectorDotThirdSpeedX;
    productVectorDotThirdPositionY -= productVectorDotThirdSpeedY;

    if (
      productVectorDotThirdPositionX >= productBoxWidth ||
      productVectorDotThirdPositionX <= 0
    ) {
      productVectorDotThirdSpeedX *= -1;
    }

    if (
      productVectorDotThirdPositionY >= productBoxHeight ||
      productVectorDotThirdPositionY <= 0
    ) {
      productVectorDotThirdSpeedY *= -1;
    }

    productVectorDotThird.style.left = productVectorDotThirdPositionX + "px";
    productVectorDotThird.style.top = productVectorDotThirdPositionY + "px";

    requestAnimationFrame(moveProductVectorDotThird);
  }
  moveProductVectorDotThird();

  // dot Fourth
  let productVectorDotFourthSpeedX = 0.8;
  let productVectorDotFourthSpeedY = 0.8;
  let productVectorDotFourthPositionX = productBoxWidth / 2;
  let productVectorDotFourthPositionY = 0;

  function moveProductVectorDotFourth() {
    productVectorDotFourthPositionX += productVectorDotFourthSpeedX;
    productVectorDotFourthPositionY += productVectorDotFourthSpeedY;

    if (
      productVectorDotFourthPositionX >= productBoxWidth ||
      productVectorDotFourthPositionX <= 0
    ) {
      productVectorDotFourthSpeedX *= -1;
    }

    if (
      productVectorDotFourthPositionY >= productBoxHeight ||
      productVectorDotFourthPositionY <= 0
    ) {
      productVectorDotFourthSpeedY *= -1;
    }

    productVectorDotFourth.style.left = productVectorDotFourthPositionX + "px";
    productVectorDotFourth.style.top = productVectorDotFourthPositionY + "px";

    requestAnimationFrame(moveProductVectorDotFourth);
  }
  moveProductVectorDotFourth();
  // plus First
  let productVectorPlusFirstSpeedX = 0.5;
  let productVectorPlusFirstSpeedY = 0.5;
  let productVectorPlusFirstPositionX = 0;
  let productVectorPlusFirstPositionY = productBoxHeight / 2;

  function moveProductVectorPlusFirst() {
    productVectorPlusFirstPositionX += productVectorPlusFirstSpeedX;
    productVectorPlusFirstPositionY += productVectorPlusFirstSpeedY;

    if (
      productVectorPlusFirstPositionX >= productBoxWidth ||
      productVectorPlusFirstPositionX <= 0
    ) {
      productVectorPlusFirstSpeedX *= -1;
    }

    if (
      productVectorPlusFirstPositionY >= productBoxHeight ||
      productVectorPlusFirstPositionY <= 0
    ) {
      productVectorPlusFirstSpeedY *= -1;
    }

    productVectorPlusFirst.style.left = productVectorPlusFirstPositionX + "px";
    productVectorPlusFirst.style.top = productVectorPlusFirstPositionY + "px";

    requestAnimationFrame(moveProductVectorPlusFirst);
  }
  moveProductVectorPlusFirst();

  // plus Second
  let productVectorPlusSecondSpeedX = 0.5;
  let productVectorPlusSecondSpeedY = 0.5;
  let productVectorPlusSecondPositionX = productBoxWidth - 1;
  let productVectorPlusSecondPositionY = productBoxHeight / 2;

  function moveProductVectorPlusSecond() {
    productVectorPlusSecondPositionX += productVectorPlusSecondSpeedX;
    productVectorPlusSecondPositionY += productVectorPlusSecondSpeedY;

    if (
      productVectorPlusSecondPositionX >= productBoxWidth ||
      productVectorPlusSecondPositionX <= 0
    ) {
      productVectorPlusSecondSpeedX *= -1;
    }

    if (
      productVectorPlusSecondPositionY >= productBoxHeight ||
      productVectorPlusSecondPositionY <= 0
    ) {
      productVectorPlusSecondSpeedY *= -1;
    }

    productVectorPlusSecond.style.left =
      productVectorPlusSecondPositionX + "px";
    productVectorPlusSecond.style.top = productVectorPlusSecondPositionY + "px";

    requestAnimationFrame(moveProductVectorPlusSecond);
  }
  moveProductVectorPlusSecond();

  // plus Third
  let productVectorPlusThirdSpeedX = 0.5;
  let productVectorPlusThirdSpeedY = 0.5;
  let productVectorPlusThirdPositionX = productBoxWidth / 2;
  let productVectorPlusThirdPositionY = productBoxHeight / 2;

  function moveProductVectorPlusThird() {
    productVectorPlusThirdPositionX += productVectorPlusThirdSpeedX;
    productVectorPlusThirdPositionY += productVectorPlusThirdSpeedY;

    if (
      productVectorPlusThirdPositionX >= productBoxWidth ||
      productVectorPlusThirdPositionX <= 0
    ) {
      productVectorPlusThirdSpeedX *= -1;
    }

    if (
      productVectorPlusThirdPositionY >= productBoxHeight ||
      productVectorPlusThirdPositionY <= 0
    ) {
      productVectorPlusThirdSpeedY *= -1;
    }

    productVectorPlusThird.style.left = productVectorPlusThirdPositionX + "px";
    productVectorPlusThird.style.top = productVectorPlusThirdPositionY + "px";

    requestAnimationFrame(moveProductVectorPlusThird);
  }
  moveProductVectorPlusThird();

  // plus Fourth
  let productVectorPlusFourthSpeedX = 0.5;
  let productVectorPlusFourthSpeedY = 0.5;
  let productVectorPlusFourthPositionX = productBoxWidth / 2;
  let productVectorPlusFourthPositionY = productBoxHeight / 2;

  function moveProductVectorPlusFourth() {
    productVectorPlusFourthPositionX -= productVectorPlusFourthSpeedX;
    productVectorPlusFourthPositionY -= productVectorPlusFourthSpeedY;

    if (
      productVectorPlusFourthPositionX >= productBoxWidth ||
      productVectorPlusFourthPositionX <= 0
    ) {
      productVectorPlusFourthSpeedX *= -1;
    }

    if (
      productVectorPlusFourthPositionY >= productBoxHeight ||
      productVectorPlusFourthPositionY <= 0
    ) {
      productVectorPlusFourthSpeedY *= -1;
    }

    productVectorPlusFourth.style.left =
      productVectorPlusFourthPositionX + "px";
    productVectorPlusFourth.style.top = productVectorPlusFourthPositionY + "px";

    requestAnimationFrame(moveProductVectorPlusFourth);
  }
  moveProductVectorPlusFourth();
});

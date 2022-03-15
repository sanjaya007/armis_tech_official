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
});

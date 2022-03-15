$(window).on("load", function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  // head vector
  const headBox = document.querySelector(".head-container");

  const headVectorBall = document.querySelector(".head-vector-ball");
  const headVectorPlus = document.querySelector(".head-vector-plus");
  const headVectorCircle = document.querySelector(".head-vector-circle");
  const headVectorSquare = document.querySelector(".head-vector-square");
  const headVectorImageFirst = document.querySelector(
    ".head-vector-image-first"
  );
  const headVectorImageSecond = document.querySelector(
    ".head-vector-image-second"
  );

  let headBoxWidth = headBox.getBoundingClientRect().width;
  let headBoxHeight = headBox.getBoundingClientRect().height;

  // ball
  let headVectorBallSpeedX = 1;
  let headVectorBallSpeedY = 1;
  let headVectorBallPositionX = 0;
  let headVectorBallPositionY = 0;

  function moveHeadVectorBall() {
    headVectorBallPositionX += headVectorBallSpeedX;
    headVectorBallPositionY += headVectorBallSpeedY;

    if (
      headVectorBallPositionX >= headBoxWidth ||
      headVectorBallPositionX <= 0
    ) {
      headVectorBallSpeedX *= -1;
    }

    if (
      headVectorBallPositionY >= headBoxHeight ||
      headVectorBallPositionY <= 0
    ) {
      headVectorBallSpeedY *= -1;
    }

    headVectorBall.style.left = headVectorBallPositionX + "px";
    headVectorBall.style.top = headVectorBallPositionY + "px";

    requestAnimationFrame(moveHeadVectorBall);
  }
  moveHeadVectorBall();

  // plus
  let headVectorPlusSpeedX = 0.5;
  let headVectorPlusSpeedY = 0.5;
  let headVectorPlusPositionX = headBoxWidth;
  let headVectorPlusPositionY = headBoxHeight;

  function moveHeadVectorPlus() {
    headVectorPlusPositionX -= headVectorPlusSpeedX;
    headVectorPlusPositionY -= headVectorPlusSpeedY;

    if (
      headVectorPlusPositionX >= headBoxWidth ||
      headVectorPlusPositionX <= 0
    ) {
      headVectorPlusSpeedX *= -1;
    }

    if (
      headVectorPlusPositionY >= headBoxHeight ||
      headVectorPlusPositionY <= 0
    ) {
      headVectorPlusSpeedY *= -1;
    }

    headVectorPlus.style.left = headVectorPlusPositionX + "px";
    headVectorPlus.style.top = headVectorPlusPositionY + "px";

    requestAnimationFrame(moveHeadVectorPlus);
  }
  moveHeadVectorPlus();

  // image first
  let headVectorImageFirstSpeedX = 0.8;
  let headVectorImageFirstSpeedY = 0.8;
  let headVectorImageFirstPositionX = headBoxWidth / 1.5;
  let headVectorImageFirstPositionY = headBoxHeight / 1.5;

  function moveHeadVectorImageFirst() {
    headVectorImageFirstPositionX -= headVectorImageFirstSpeedX;
    headVectorImageFirstPositionY -= headVectorImageFirstSpeedY;

    if (
      headVectorImageFirstPositionX >= headBoxWidth ||
      headVectorImageFirstPositionX <= 0
    ) {
      headVectorImageFirstSpeedX *= -1;
    }

    if (
      headVectorImageFirstPositionY >= headBoxHeight ||
      headVectorImageFirstPositionY <= 0
    ) {
      headVectorImageFirstSpeedY *= -1;
    }

    headVectorImageFirst.style.left = headVectorImageFirstPositionX + "px";
    headVectorImageFirst.style.top = headVectorImageFirstPositionY + "px";

    requestAnimationFrame(moveHeadVectorImageFirst);
  }
  moveHeadVectorImageFirst();

  // image second
  let headVectorImageSecondSpeedX = 0.3;
  let headVectorImageSecondSpeedY = 0.3;
  let headVectorImageSecondPositionX = headBoxWidth / 3;
  let headVectorImageSecondPositionY = headBoxHeight / 3;

  function moveHeadVectorImageSecond() {
    headVectorImageSecondPositionX += headVectorImageSecondSpeedX;
    headVectorImageSecondPositionY += headVectorImageSecondSpeedY;

    if (
      headVectorImageSecondPositionX >= headBoxWidth ||
      headVectorImageSecondPositionX <= 0
    ) {
      headVectorImageSecondSpeedX *= -1;
    }

    if (
      headVectorImageSecondPositionY >= headBoxHeight ||
      headVectorImageSecondPositionY <= 0
    ) {
      headVectorImageSecondSpeedY *= -1;
    }

    headVectorImageSecond.style.left = headVectorImageSecondPositionX + "px";
    headVectorImageSecond.style.top = headVectorImageSecondPositionY + "px";

    requestAnimationFrame(moveHeadVectorImageSecond);
  }
  moveHeadVectorImageSecond();

  // square
  let headVectorSquareSpeedX = 0.4;
  let headVectorSquareSpeedY = 0.4;
  let headVectorSquarePositionX = headBoxWidth / 2;
  let headVectorSquarePositionY = headBoxHeight / 2;

  function moveHeadVectorSquare() {
    headVectorSquarePositionX += headVectorSquareSpeedX;
    headVectorSquarePositionY += headVectorSquareSpeedY;

    if (
      headVectorSquarePositionX >= headBoxWidth ||
      headVectorSquarePositionX <= 0
    ) {
      headVectorSquareSpeedX *= -1;
    }

    if (
      headVectorSquarePositionY >= headBoxHeight ||
      headVectorSquarePositionY <= 0
    ) {
      headVectorSquareSpeedY *= -1;
    }

    headVectorSquare.style.left = headVectorSquarePositionX + "px";
    headVectorSquare.style.top = headVectorSquarePositionY + "px";

    requestAnimationFrame(moveHeadVectorSquare);
  }
  moveHeadVectorSquare();

  // circle
  let headVectorCircleSpeedX = 0.7;
  let headVectorCircleSpeedY = 0.7;
  let headVectorCirclePositionX = headBoxWidth / 2;
  let headVectorCirclePositionY = headBoxHeight / 2;

  function moveHeadVectorCircle() {
    headVectorCirclePositionX -= headVectorCircleSpeedX;
    headVectorCirclePositionY -= headVectorCircleSpeedY;

    if (
      headVectorCirclePositionX >= headBoxWidth ||
      headVectorCirclePositionX <= 0
    ) {
      headVectorCircleSpeedX *= -1;
    }

    if (
      headVectorCirclePositionY >= headBoxHeight ||
      headVectorCirclePositionY <= 0
    ) {
      headVectorCircleSpeedY *= -1;
    }

    headVectorCircle.style.left = headVectorCirclePositionX + "px";
    headVectorCircle.style.top = headVectorCirclePositionY + "px";

    requestAnimationFrame(moveHeadVectorCircle);
  }
  moveHeadVectorCircle();

  // ------------------------------------------------------------------------------

  // exp vector
  const expBox = document.querySelector(".experience-container");

  const expVectorDotFirst = document.querySelector(".exp-vector-dot-first");
  const expVectorDotSecond = document.querySelector(".exp-vector-dot-second");
  const expVectorDotThird = document.querySelector(".exp-vector-dot-third");

  const expVectorBallFirst = document.querySelector(".exp-vector-ball-first");
  const expVectorBallSecond = document.querySelector(".exp-vector-ball-second");

  const expVectorPlusFirst = document.querySelector(".exp-vector-plus-first");
  const expVectorPlusSecond = document.querySelector(".exp-vector-plus-second");

  let expBoxWidth = expBox.getBoundingClientRect().width;
  let expBoxHeight = expBox.getBoundingClientRect().height;

  // dot first
  let expVectorDotFirstSpeedX = 0.8;
  let expVectorDotFirstSpeedY = 0.8;
  let expVectorDotFirstPositionX = 0;
  let expVectorDotFirstPositionY = 0;

  function moveExpVectorDotFirst() {
    expVectorDotFirstPositionX += expVectorDotFirstSpeedX;
    expVectorDotFirstPositionY += expVectorDotFirstSpeedY;

    if (
      expVectorDotFirstPositionX >= expBoxWidth ||
      expVectorDotFirstPositionX <= 0
    ) {
      expVectorDotFirstSpeedX *= -1;
    }

    if (
      expVectorDotFirstPositionY >= expBoxHeight ||
      expVectorDotFirstPositionY <= 0
    ) {
      expVectorDotFirstSpeedY *= -1;
    }

    expVectorDotFirst.style.left = expVectorDotFirstPositionX + "px";
    expVectorDotFirst.style.top = expVectorDotFirstPositionY + "px";

    requestAnimationFrame(moveExpVectorDotFirst);
  }
  moveExpVectorDotFirst();

  // dot second
  let expVectorDotSecondSpeedX = 0.8;
  let expVectorDotSecondSpeedY = 0.8;
  let expVectorDotSecondPositionX = expBoxWidth - 1;
  let expVectorDotSecondPositionY = 0;

  function moveExpVectorDotSecond() {
    expVectorDotSecondPositionX += expVectorDotSecondSpeedX;
    expVectorDotSecondPositionY += expVectorDotSecondSpeedY;

    if (
      expVectorDotSecondPositionX >= expBoxWidth ||
      expVectorDotSecondPositionX <= 0
    ) {
      expVectorDotSecondSpeedX *= -1;
    }

    if (
      expVectorDotSecondPositionY >= expBoxHeight ||
      expVectorDotSecondPositionY <= 0
    ) {
      expVectorDotSecondSpeedY *= -1;
    }

    expVectorDotSecond.style.left = expVectorDotSecondPositionX + "px";
    expVectorDotSecond.style.top = expVectorDotSecondPositionY + "px";

    requestAnimationFrame(moveExpVectorDotSecond);
  }
  moveExpVectorDotSecond();

  // dot Third
  let expVectorDotThirdSpeedX = 1;
  let expVectorDotThirdSpeedY = 1;
  let expVectorDotThirdPositionX = expBoxWidth / 2;
  let expVectorDotThirdPositionY = 0;

  function moveExpVectorDotThird() {
    expVectorDotThirdPositionX += expVectorDotThirdSpeedX;
    expVectorDotThirdPositionY += expVectorDotThirdSpeedY;

    if (
      expVectorDotThirdPositionX >= expBoxWidth ||
      expVectorDotThirdPositionX <= 0
    ) {
      expVectorDotThirdSpeedX *= -1;
    }

    if (
      expVectorDotThirdPositionY >= expBoxHeight ||
      expVectorDotThirdPositionY <= 0
    ) {
      expVectorDotThirdSpeedY *= -1;
    }

    expVectorDotThird.style.left = expVectorDotThirdPositionX + "px";
    expVectorDotThird.style.top = expVectorDotThirdPositionY + "px";

    requestAnimationFrame(moveExpVectorDotThird);
  }
  moveExpVectorDotThird();

  // ball first
  let expVectorBallFirstSpeedX = 0.5;
  let expVectorBallFirstSpeedY = 0.5;
  let expVectorBallFirstPositionX = expBoxWidth / 2;
  let expVectorBallFirstPositionY = expBoxHeight / 2;

  function moveExpVectorBallFirst() {
    expVectorBallFirstPositionX -= expVectorBallFirstSpeedX;
    expVectorBallFirstPositionY -= expVectorBallFirstSpeedY;

    if (
      expVectorBallFirstPositionX >= expBoxWidth ||
      expVectorBallFirstPositionX <= 0
    ) {
      expVectorBallFirstSpeedX *= -1;
    }

    if (
      expVectorBallFirstPositionY >= expBoxHeight ||
      expVectorBallFirstPositionY <= 0
    ) {
      expVectorBallFirstSpeedY *= -1;
    }

    expVectorBallFirst.style.left = expVectorBallFirstPositionX + "px";
    expVectorBallFirst.style.top = expVectorBallFirstPositionY + "px";

    requestAnimationFrame(moveExpVectorBallFirst);
  }
  moveExpVectorBallFirst();

  // ball second
  let expVectorBallSecondSpeedX = 0.5;
  let expVectorBallSecondSpeedY = 0.5;
  let expVectorBallSecondPositionX = expBoxWidth - 1;
  let expVectorBallSecondPositionY = expBoxHeight - 1;

  function moveExpVectorBallSecond() {
    expVectorBallSecondPositionX -= expVectorBallSecondSpeedX;
    expVectorBallSecondPositionY -= expVectorBallSecondSpeedY;

    if (
      expVectorBallSecondPositionX >= expBoxWidth ||
      expVectorBallSecondPositionX <= 0
    ) {
      expVectorBallSecondSpeedX *= -1;
    }

    if (
      expVectorBallSecondPositionY >= expBoxHeight ||
      expVectorBallSecondPositionY <= 0
    ) {
      expVectorBallSecondSpeedY *= -1;
    }

    expVectorBallSecond.style.left = expVectorBallSecondPositionX + "px";
    expVectorBallSecond.style.top = expVectorBallSecondPositionY + "px";

    requestAnimationFrame(moveExpVectorBallSecond);
  }
  moveExpVectorBallSecond();

  // plus first
  let expVectorPlusFirstSpeedX = 0.7;
  let expVectorPlusFirstSpeedY = 0.7;
  let expVectorPlusFirstPositionX = expBoxWidth / 1.2;
  let expVectorPlusFirstPositionY = expBoxHeight / 2;

  function moveExpVectorPlusFirst() {
    expVectorPlusFirstPositionX -= expVectorPlusFirstSpeedX;
    expVectorPlusFirstPositionY -= expVectorPlusFirstSpeedY;

    if (
      expVectorPlusFirstPositionX >= expBoxWidth ||
      expVectorPlusFirstPositionX <= 0
    ) {
      expVectorPlusFirstSpeedX *= -1;
    }

    if (
      expVectorPlusFirstPositionY >= expBoxHeight ||
      expVectorPlusFirstPositionY <= 0
    ) {
      expVectorPlusFirstSpeedY *= -1;
    }

    expVectorPlusFirst.style.left = expVectorPlusFirstPositionX + "px";
    expVectorPlusFirst.style.top = expVectorPlusFirstPositionY + "px";

    requestAnimationFrame(moveExpVectorPlusFirst);
  }
  moveExpVectorPlusFirst();

  // plus second
  let expVectorPlusSecondSpeedX = 0.7;
  let expVectorPlusSecondSpeedY = 0.7;
  let expVectorPlusSecondPositionX = expBoxWidth / 3;
  let expVectorPlusSecondPositionY = expBoxHeight / 2;

  function moveExpVectorPlusSecond() {
    expVectorPlusSecondPositionX += expVectorPlusSecondSpeedX;
    expVectorPlusSecondPositionY += expVectorPlusSecondSpeedY;

    if (
      expVectorPlusSecondPositionX >= expBoxWidth ||
      expVectorPlusSecondPositionX <= 0
    ) {
      expVectorPlusSecondSpeedX *= -1;
    }

    if (
      expVectorPlusSecondPositionY >= expBoxHeight ||
      expVectorPlusSecondPositionY <= 0
    ) {
      expVectorPlusSecondSpeedY *= -1;
    }

    expVectorPlusSecond.style.left = expVectorPlusSecondPositionX + "px";
    expVectorPlusSecond.style.top = expVectorPlusSecondPositionY + "px";

    requestAnimationFrame(moveExpVectorPlusSecond);
  }
  moveExpVectorPlusSecond();

  // ---------------------------------------------------------------------------------

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

  // ------------------------------------------------------------------------------------

  // company vector
  const companyBox = document.querySelector(".company-container");

  const companyVectorDotFirst = document.querySelector(
    ".company-vector-dot-first"
  );
  const companyVectorDotSecond = document.querySelector(
    ".company-vector-dot-second"
  );
  const companyVectorDotThird = document.querySelector(
    ".company-vector-dot-third"
  );
  const companyVectorPlusFirst = document.querySelector(
    ".company-vector-plus-first"
  );
  const companyVectorPlusSecond = document.querySelector(
    ".company-vector-plus-second"
  );
  const companyVectorPlusThird = document.querySelector(
    ".company-vector-plus-third"
  );
  const companyVectorCube = document.querySelector(".company-vector-cube");

  let companyBoxWidth = companyBox.getBoundingClientRect().width;
  let companyBoxHeight = companyBox.getBoundingClientRect().height;

  // dot first
  let companyVectorDotFirstSpeedX = 0.7;
  let companyVectorDotFirstSpeedY = 0.7;
  let companyVectorDotFirstPositionX = 0;
  let companyVectorDotFirstPositionY = 0;

  function moveCompanyVectorDotFirst() {
    companyVectorDotFirstPositionX += companyVectorDotFirstSpeedX;
    companyVectorDotFirstPositionY += companyVectorDotFirstSpeedY;

    if (
      companyVectorDotFirstPositionX >= companyBoxWidth ||
      companyVectorDotFirstPositionX <= 0
    ) {
      companyVectorDotFirstSpeedX *= -1;
    }

    if (
      companyVectorDotFirstPositionY >= companyBoxHeight ||
      companyVectorDotFirstPositionY <= 0
    ) {
      companyVectorDotFirstSpeedY *= -1;
    }

    companyVectorDotFirst.style.left = companyVectorDotFirstPositionX + "px";
    companyVectorDotFirst.style.top = companyVectorDotFirstPositionY + "px";

    requestAnimationFrame(moveCompanyVectorDotFirst);
  }
  moveCompanyVectorDotFirst();

  // dot second
  let companyVectorDotSecondSpeedX = 0.7;
  let companyVectorDotSecondSpeedY = 0.7;
  let companyVectorDotSecondPositionX = companyBoxWidth - 1;
  let companyVectorDotSecondPositionY = 0;

  function moveCompanyVectorDotSecond() {
    companyVectorDotSecondPositionX += companyVectorDotSecondSpeedX;
    companyVectorDotSecondPositionY += companyVectorDotSecondSpeedY;

    if (
      companyVectorDotSecondPositionX >= companyBoxWidth ||
      companyVectorDotSecondPositionX <= 0
    ) {
      companyVectorDotSecondSpeedX *= -1;
    }

    if (
      companyVectorDotSecondPositionY >= companyBoxHeight ||
      companyVectorDotSecondPositionY <= 0
    ) {
      companyVectorDotSecondSpeedY *= -1;
    }

    companyVectorDotSecond.style.left = companyVectorDotSecondPositionX + "px";
    companyVectorDotSecond.style.top = companyVectorDotSecondPositionY + "px";

    requestAnimationFrame(moveCompanyVectorDotSecond);
  }
  moveCompanyVectorDotSecond();

  // dot Third
  let companyVectorDotThirdSpeedX = 0.7;
  let companyVectorDotThirdSpeedY = 0.7;
  let companyVectorDotThirdPositionX = companyBoxWidth / 1.5;
  let companyVectorDotThirdPositionY = companyBoxWidth / 2;

  function moveCompanyVectorDotThird() {
    companyVectorDotThirdPositionX -= companyVectorDotThirdSpeedX;
    companyVectorDotThirdPositionY -= companyVectorDotThirdSpeedY;

    if (
      companyVectorDotThirdPositionX >= companyBoxWidth ||
      companyVectorDotThirdPositionX <= 0
    ) {
      companyVectorDotThirdSpeedX *= -1;
    }

    if (
      companyVectorDotThirdPositionY >= companyBoxHeight ||
      companyVectorDotThirdPositionY <= 0
    ) {
      companyVectorDotThirdSpeedY *= -1;
    }

    companyVectorDotThird.style.left = companyVectorDotThirdPositionX + "px";
    companyVectorDotThird.style.top = companyVectorDotThirdPositionY + "px";

    requestAnimationFrame(moveCompanyVectorDotThird);
  }
  moveCompanyVectorDotThird();

  // plus First
  let companyVectorPlusFirstSpeedX = 0.5;
  let companyVectorPlusFirstSpeedY = 0.5;
  let companyVectorPlusFirstPositionX = 0;
  let companyVectorPlusFirstPositionY = companyBoxHeight / 2;

  function moveCompanyVectorPlusFirst() {
    companyVectorPlusFirstPositionX += companyVectorPlusFirstSpeedX;
    companyVectorPlusFirstPositionY += companyVectorPlusFirstSpeedY;

    if (
      companyVectorPlusFirstPositionX >= companyBoxWidth ||
      companyVectorPlusFirstPositionX <= 0
    ) {
      companyVectorPlusFirstSpeedX *= -1;
    }

    if (
      companyVectorPlusFirstPositionY >= companyBoxHeight ||
      companyVectorPlusFirstPositionY <= 0
    ) {
      companyVectorPlusFirstSpeedY *= -1;
    }

    companyVectorPlusFirst.style.left = companyVectorPlusFirstPositionX + "px";
    companyVectorPlusFirst.style.top = companyVectorPlusFirstPositionY + "px";

    requestAnimationFrame(moveCompanyVectorPlusFirst);
  }
  moveCompanyVectorPlusFirst();

  // plus Second
  let companyVectorPlusSecondSpeedX = 0.5;
  let companyVectorPlusSecondSpeedY = 0.5;
  let companyVectorPlusSecondPositionX = companyBoxWidth - 1;
  let companyVectorPlusSecondPositionY = companyBoxHeight / 2;

  function moveCompanyVectorPlusSecond() {
    companyVectorPlusSecondPositionX += companyVectorPlusSecondSpeedX;
    companyVectorPlusSecondPositionY += companyVectorPlusSecondSpeedY;

    if (
      companyVectorPlusSecondPositionX >= companyBoxWidth ||
      companyVectorPlusSecondPositionX <= 0
    ) {
      companyVectorPlusSecondSpeedX *= -1;
    }

    if (
      companyVectorPlusSecondPositionY >= companyBoxHeight ||
      companyVectorPlusSecondPositionY <= 0
    ) {
      companyVectorPlusSecondSpeedY *= -1;
    }

    companyVectorPlusSecond.style.left =
      companyVectorPlusSecondPositionX + "px";
    companyVectorPlusSecond.style.top = companyVectorPlusSecondPositionY + "px";

    requestAnimationFrame(moveCompanyVectorPlusSecond);
  }
  moveCompanyVectorPlusSecond();

  // plus Third
  let companyVectorPlusThirdSpeedX = 0.5;
  let companyVectorPlusThirdSpeedY = 0.5;
  let companyVectorPlusThirdPositionX = companyBoxWidth / 2;
  let companyVectorPlusThirdPositionY = companyBoxHeight / 2;

  function moveCompanyVectorPlusThird() {
    companyVectorPlusThirdPositionX += companyVectorPlusThirdSpeedX;
    companyVectorPlusThirdPositionY += companyVectorPlusThirdSpeedY;

    if (
      companyVectorPlusThirdPositionX >= companyBoxWidth ||
      companyVectorPlusThirdPositionX <= 0
    ) {
      companyVectorPlusThirdSpeedX *= -1;
    }

    if (
      companyVectorPlusThirdPositionY >= companyBoxHeight ||
      companyVectorPlusThirdPositionY <= 0
    ) {
      companyVectorPlusThirdSpeedY *= -1;
    }

    companyVectorPlusThird.style.left = companyVectorPlusThirdPositionX + "px";
    companyVectorPlusThird.style.top = companyVectorPlusThirdPositionY + "px";

    requestAnimationFrame(moveCompanyVectorPlusThird);
  }
  moveCompanyVectorPlusThird();

  // cube
  let companyVectorCubeSpeedX = 0.3;
  let companyVectorCubeSpeedY = 0.3;
  let companyVectorCubePositionX = companyBoxWidth / 2;
  let companyVectorCubePositionY = companyBoxHeight / 2;

  function moveCompanyVectorCube() {
    companyVectorCubePositionX -= companyVectorCubeSpeedX;
    companyVectorCubePositionY -= companyVectorCubeSpeedY;

    if (
      companyVectorCubePositionX >= companyBoxWidth ||
      companyVectorCubePositionX <= 0
    ) {
      companyVectorCubeSpeedX *= -1;
    }

    if (
      companyVectorCubePositionY >= companyBoxHeight ||
      companyVectorCubePositionY <= 0
    ) {
      companyVectorCubeSpeedY *= -1;
    }

    companyVectorCube.style.left = companyVectorCubePositionX + "px";
    companyVectorCube.style.top = companyVectorCubePositionY + "px";

    requestAnimationFrame(moveCompanyVectorCube);
  }
  moveCompanyVectorCube();

  // ------------------------------------------------------------------------------------

  // team vector
  const teamBox = document.querySelector(".team-container");

  const teamVectorDotFirst = document.querySelector(".team-vector-dot-first");
  const teamVectorDotSecond = document.querySelector(".team-vector-dot-second");
  const teamVectorDotThird = document.querySelector(".team-vector-dot-third");
  const teamVectorPlusFirst = document.querySelector(".team-vector-plus-first");
  const teamVectorPlusSecond = document.querySelector(
    ".team-vector-plus-second"
  );
  const teamVectorPlusThird = document.querySelector(".team-vector-plus-third");
  const teamVectorCube = document.querySelector(".team-vector-cube");

  let teamBoxWidth = teamBox.getBoundingClientRect().width;
  let teamBoxHeight = teamBox.getBoundingClientRect().height;

  // dot first
  let teamVectorDotFirstSpeedX = 0.7;
  let teamVectorDotFirstSpeedY = 0.7;
  let teamVectorDotFirstPositionX = 0;
  let teamVectorDotFirstPositionY = 0;

  function moveTeamVectorDotFirst() {
    teamVectorDotFirstPositionX += teamVectorDotFirstSpeedX;
    teamVectorDotFirstPositionY += teamVectorDotFirstSpeedY;

    if (
      teamVectorDotFirstPositionX >= teamBoxWidth ||
      teamVectorDotFirstPositionX <= 0
    ) {
      teamVectorDotFirstSpeedX *= -1;
    }

    if (
      teamVectorDotFirstPositionY >= teamBoxHeight ||
      teamVectorDotFirstPositionY <= 0
    ) {
      teamVectorDotFirstSpeedY *= -1;
    }

    teamVectorDotFirst.style.left = teamVectorDotFirstPositionX + "px";
    teamVectorDotFirst.style.top = teamVectorDotFirstPositionY + "px";

    requestAnimationFrame(moveTeamVectorDotFirst);
  }
  moveTeamVectorDotFirst();

  // dot second
  let teamVectorDotSecondSpeedX = 0.7;
  let teamVectorDotSecondSpeedY = 0.7;
  let teamVectorDotSecondPositionX = teamBoxWidth - 1;
  let teamVectorDotSecondPositionY = 0;

  function moveTeamVectorDotSecond() {
    teamVectorDotSecondPositionX += teamVectorDotSecondSpeedX;
    teamVectorDotSecondPositionY += teamVectorDotSecondSpeedY;

    if (
      teamVectorDotSecondPositionX >= teamBoxWidth ||
      teamVectorDotSecondPositionX <= 0
    ) {
      teamVectorDotSecondSpeedX *= -1;
    }

    if (
      teamVectorDotSecondPositionY >= teamBoxHeight ||
      teamVectorDotSecondPositionY <= 0
    ) {
      teamVectorDotSecondSpeedY *= -1;
    }

    teamVectorDotSecond.style.left = teamVectorDotSecondPositionX + "px";
    teamVectorDotSecond.style.top = teamVectorDotSecondPositionY + "px";

    requestAnimationFrame(moveTeamVectorDotSecond);
  }
  moveTeamVectorDotSecond();

  // dot Third
  let teamVectorDotThirdSpeedX = 0.7;
  let teamVectorDotThirdSpeedY = 0.7;
  let teamVectorDotThirdPositionX = teamBoxWidth / 1.5;
  let teamVectorDotThirdPositionY = teamBoxWidth / 2;

  function moveTeamVectorDotThird() {
    teamVectorDotThirdPositionX -= teamVectorDotThirdSpeedX;
    teamVectorDotThirdPositionY -= teamVectorDotThirdSpeedY;

    if (
      teamVectorDotThirdPositionX >= teamBoxWidth ||
      teamVectorDotThirdPositionX <= 0
    ) {
      teamVectorDotThirdSpeedX *= -1;
    }

    if (
      teamVectorDotThirdPositionY >= teamBoxHeight ||
      teamVectorDotThirdPositionY <= 0
    ) {
      teamVectorDotThirdSpeedY *= -1;
    }

    teamVectorDotThird.style.left = teamVectorDotThirdPositionX + "px";
    teamVectorDotThird.style.top = teamVectorDotThirdPositionY + "px";

    requestAnimationFrame(moveTeamVectorDotThird);
  }
  moveTeamVectorDotThird();

  // plus First
  let teamVectorPlusFirstSpeedX = 0.5;
  let teamVectorPlusFirstSpeedY = 0.5;
  let teamVectorPlusFirstPositionX = 0;
  let teamVectorPlusFirstPositionY = teamBoxHeight / 2;

  function moveTeamVectorPlusFirst() {
    teamVectorPlusFirstPositionX += teamVectorPlusFirstSpeedX;
    teamVectorPlusFirstPositionY += teamVectorPlusFirstSpeedY;

    if (
      teamVectorPlusFirstPositionX >= teamBoxWidth ||
      teamVectorPlusFirstPositionX <= 0
    ) {
      teamVectorPlusFirstSpeedX *= -1;
    }

    if (
      teamVectorPlusFirstPositionY >= teamBoxHeight ||
      teamVectorPlusFirstPositionY <= 0
    ) {
      teamVectorPlusFirstSpeedY *= -1;
    }

    teamVectorPlusFirst.style.left = teamVectorPlusFirstPositionX + "px";
    teamVectorPlusFirst.style.top = teamVectorPlusFirstPositionY + "px";

    requestAnimationFrame(moveTeamVectorPlusFirst);
  }
  moveTeamVectorPlusFirst();

  // plus Second
  let teamVectorPlusSecondSpeedX = 0.5;
  let teamVectorPlusSecondSpeedY = 0.5;
  let teamVectorPlusSecondPositionX = teamBoxWidth - 1;
  let teamVectorPlusSecondPositionY = teamBoxHeight / 2;

  function moveTeamVectorPlusSecond() {
    teamVectorPlusSecondPositionX += teamVectorPlusSecondSpeedX;
    teamVectorPlusSecondPositionY += teamVectorPlusSecondSpeedY;

    if (
      teamVectorPlusSecondPositionX >= teamBoxWidth ||
      teamVectorPlusSecondPositionX <= 0
    ) {
      teamVectorPlusSecondSpeedX *= -1;
    }

    if (
      teamVectorPlusSecondPositionY >= teamBoxHeight ||
      teamVectorPlusSecondPositionY <= 0
    ) {
      teamVectorPlusSecondSpeedY *= -1;
    }

    teamVectorPlusSecond.style.left = teamVectorPlusSecondPositionX + "px";
    teamVectorPlusSecond.style.top = teamVectorPlusSecondPositionY + "px";

    requestAnimationFrame(moveTeamVectorPlusSecond);
  }
  moveTeamVectorPlusSecond();

  // plus Third
  let teamVectorPlusThirdSpeedX = 0.5;
  let teamVectorPlusThirdSpeedY = 0.5;
  let teamVectorPlusThirdPositionX = teamBoxWidth / 2;
  let teamVectorPlusThirdPositionY = teamBoxHeight / 2;

  function moveTeamVectorPlusThird() {
    teamVectorPlusThirdPositionX += teamVectorPlusThirdSpeedX;
    teamVectorPlusThirdPositionY += teamVectorPlusThirdSpeedY;

    if (
      teamVectorPlusThirdPositionX >= teamBoxWidth ||
      teamVectorPlusThirdPositionX <= 0
    ) {
      teamVectorPlusThirdSpeedX *= -1;
    }

    if (
      teamVectorPlusThirdPositionY >= teamBoxHeight ||
      teamVectorPlusThirdPositionY <= 0
    ) {
      teamVectorPlusThirdSpeedY *= -1;
    }

    teamVectorPlusThird.style.left = teamVectorPlusThirdPositionX + "px";
    teamVectorPlusThird.style.top = teamVectorPlusThirdPositionY + "px";

    requestAnimationFrame(moveTeamVectorPlusThird);
  }
  moveTeamVectorPlusThird();

  // cube
  let teamVectorCubeSpeedX = 0.3;
  let teamVectorCubeSpeedY = 0.3;
  let teamVectorCubePositionX = teamBoxWidth / 2;
  let teamVectorCubePositionY = teamBoxHeight / 2;

  function moveTeamVectorCube() {
    teamVectorCubePositionX -= teamVectorCubeSpeedX;
    teamVectorCubePositionY -= teamVectorCubeSpeedY;

    if (
      teamVectorCubePositionX >= teamBoxWidth ||
      teamVectorCubePositionX <= 0
    ) {
      teamVectorCubeSpeedX *= -1;
    }

    if (
      teamVectorCubePositionY >= teamBoxHeight ||
      teamVectorCubePositionY <= 0
    ) {
      teamVectorCubeSpeedY *= -1;
    }

    teamVectorCube.style.left = teamVectorCubePositionX + "px";
    teamVectorCube.style.top = teamVectorCubePositionY + "px";

    requestAnimationFrame(moveTeamVectorCube);
  }
  moveTeamVectorCube();

  // ------------------------------------------------------------------------------------

  // partner vector
  const partnerBox = document.querySelector(".partner-container");

  const partnerVectorCubeFirst = document.querySelector(
    ".partner-vector-cube-first"
  );
  const partnerVectorCubeSecond = document.querySelector(
    ".partner-vector-cube-second"
  );
  const partnerVectorCubeThird = document.querySelector(
    ".partner-vector-cube-third"
  );
  const partnerVectorCubeFourth = document.querySelector(
    ".partner-vector-cube-fourth"
  );
  const partnerVectorCubeFifth = document.querySelector(
    ".partner-vector-cube-fifth"
  );

  let partnerBoxWidth = partnerBox.getBoundingClientRect().width;
  let partnerBoxHeight = partnerBox.getBoundingClientRect().height;

  // cube first
  let partnerVectorCubeFirstSpeedX = 0.3;
  let partnerVectorCubeFirstSpeedY = 0.3;
  let partnerVectorCubeFirstPositionX = 0;
  let partnerVectorCubeFirstPositionY = 0;

  function movePartnerVectorCubeFirst() {
    partnerVectorCubeFirstPositionX += partnerVectorCubeFirstSpeedX;
    partnerVectorCubeFirstPositionY += partnerVectorCubeFirstSpeedY;

    if (
      partnerVectorCubeFirstPositionX >= partnerBoxWidth ||
      partnerVectorCubeFirstPositionX <= 0
    ) {
      partnerVectorCubeFirstSpeedX *= -1;
    }

    if (
      partnerVectorCubeFirstPositionY >= partnerBoxHeight ||
      partnerVectorCubeFirstPositionY <= 0
    ) {
      partnerVectorCubeFirstSpeedY *= -1;
    }

    partnerVectorCubeFirst.style.left = partnerVectorCubeFirstPositionX + "px";
    partnerVectorCubeFirst.style.top = partnerVectorCubeFirstPositionY + "px";

    requestAnimationFrame(movePartnerVectorCubeFirst);
  }
  movePartnerVectorCubeFirst();

  // Cube second
  let partnerVectorCubeSecondSpeedX = 0.4;
  let partnerVectorCubeSecondSpeedY = 0.4;
  let partnerVectorCubeSecondPositionX = partnerBoxWidth - 1;
  let partnerVectorCubeSecondPositionY = 0;

  function movePartnerVectorCubeSecond() {
    partnerVectorCubeSecondPositionX += partnerVectorCubeSecondSpeedX;
    partnerVectorCubeSecondPositionY += partnerVectorCubeSecondSpeedY;

    if (
      partnerVectorCubeSecondPositionX >= partnerBoxWidth ||
      partnerVectorCubeSecondPositionX <= 0
    ) {
      partnerVectorCubeSecondSpeedX *= -1;
    }

    if (
      partnerVectorCubeSecondPositionY >= partnerBoxHeight ||
      partnerVectorCubeSecondPositionY <= 0
    ) {
      partnerVectorCubeSecondSpeedY *= -1;
    }

    partnerVectorCubeSecond.style.left =
      partnerVectorCubeSecondPositionX + "px";
    partnerVectorCubeSecond.style.top = partnerVectorCubeSecondPositionY + "px";

    requestAnimationFrame(movePartnerVectorCubeSecond);
  }
  movePartnerVectorCubeSecond();

  // Cube Third
  let partnerVectorCubeThirdSpeedX = 0.5;
  let partnerVectorCubeThirdSpeedY = 0.5;
  let partnerVectorCubeThirdPositionX = partnerBoxWidth / 1.5;
  let partnerVectorCubeThirdPositionY = partnerBoxHeight - 1;

  function movePartnerVectorCubeThird() {
    partnerVectorCubeThirdPositionX -= partnerVectorCubeThirdSpeedX;
    partnerVectorCubeThirdPositionY -= partnerVectorCubeThirdSpeedY;

    if (
      partnerVectorCubeThirdPositionX >= partnerBoxWidth ||
      partnerVectorCubeThirdPositionX <= 0
    ) {
      partnerVectorCubeThirdSpeedX *= -1;
    }

    if (
      partnerVectorCubeThirdPositionY >= partnerBoxHeight ||
      partnerVectorCubeThirdPositionY <= 0
    ) {
      partnerVectorCubeThirdSpeedY *= -1;
    }

    partnerVectorCubeThird.style.left = partnerVectorCubeThirdPositionX + "px";
    partnerVectorCubeThird.style.top = partnerVectorCubeThirdPositionY + "px";

    requestAnimationFrame(movePartnerVectorCubeThird);
  }
  movePartnerVectorCubeThird();

  // Cube Fourth
  let partnerVectorCubeFourthSpeedX = 0.6;
  let partnerVectorCubeFourthSpeedY = 0.6;
  let partnerVectorCubeFourthPositionX = partnerBoxWidth / 2.5;
  let partnerVectorCubeFourthPositionY = 0;

  function movePartnerVectorCubeFourth() {
    partnerVectorCubeFourthPositionX += partnerVectorCubeFourthSpeedX;
    partnerVectorCubeFourthPositionY += partnerVectorCubeFourthSpeedY;

    if (
      partnerVectorCubeFourthPositionX >= partnerBoxWidth ||
      partnerVectorCubeFourthPositionX <= 0
    ) {
      partnerVectorCubeFourthSpeedX *= -1;
    }

    if (
      partnerVectorCubeFourthPositionY >= partnerBoxHeight ||
      partnerVectorCubeFourthPositionY <= 0
    ) {
      partnerVectorCubeFourthSpeedY *= -1;
    }

    partnerVectorCubeFourth.style.left =
      partnerVectorCubeFourthPositionX + "px";
    partnerVectorCubeFourth.style.top = partnerVectorCubeFourthPositionY + "px";

    requestAnimationFrame(movePartnerVectorCubeFourth);
  }
  movePartnerVectorCubeFourth();

  // Cube Fifth
  let partnerVectorCubeFifthSpeedX = 0.7;
  let partnerVectorCubeFifthSpeedY = 0.7;
  let partnerVectorCubeFifthPositionX = partnerBoxWidth / 3;
  let partnerVectorCubeFifthPositionY = partnerBoxHeight - 1;

  function movePartnerVectorCubeFifth() {
    partnerVectorCubeFifthPositionX -= partnerVectorCubeFifthSpeedX;
    partnerVectorCubeFifthPositionY -= partnerVectorCubeFifthSpeedY;

    if (
      partnerVectorCubeFifthPositionX >= partnerBoxWidth ||
      partnerVectorCubeFifthPositionX <= 0
    ) {
      partnerVectorCubeFifthSpeedX *= -1;
    }

    if (
      partnerVectorCubeFifthPositionY >= partnerBoxHeight ||
      partnerVectorCubeFifthPositionY <= 0
    ) {
      partnerVectorCubeFifthSpeedY *= -1;
    }

    partnerVectorCubeFifth.style.left = partnerVectorCubeFifthPositionX + "px";
    partnerVectorCubeFifth.style.top = partnerVectorCubeFifthPositionY + "px";

    requestAnimationFrame(movePartnerVectorCubeFifth);
  }
  movePartnerVectorCubeFifth();
});

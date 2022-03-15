$(window).on("load", function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

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

$(window).on("load", function () {
  // text animation
  $(".text-img-A").animate(
    {
      opacity: 1,
    },
    function () {
      $(".text-img-R").animate(
        {
          opacity: 1,
        },
        function () {
          $(".text-img-M").animate(
            {
              opacity: 1,
            },
            function () {
              $(".text-img-I").animate(
                {
                  opacity: 1,
                },
                function () {
                  $(".text-img-S").animate({
                    opacity: 1,
                  });
                }
              );
            }
          );
        }
      );
    }
  );

  // product
  // $(".scroll-box").on("scroll", function (e) {
  //   console.log(e);
  //   console.log(e.target.clientWidth);
  // });

  // modal
  $(".modal-wrapper").fadeOut(1000, function () {
    $(".modal-wrapper").remove();
    $("#modalScript").remove();
    $("#whatwedoBody").removeClass("fixed-body");
  });

  // nav
  $(".nav-tab").on("click", function () {
    $(".mobile-nav").animate({
      left: 0,
    });
    $("#whatwedoBody").addClass("fixed-body");
  });

  // mobile nav
  $(".close-icon").on("click", function () {
    $(".mobile-nav").animate({
      left: "-100%",
    });
    $("#whatwedoBody").removeClass("fixed-body");
  });
});

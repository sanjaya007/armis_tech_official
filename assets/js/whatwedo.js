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

  // product
  let numberOfProducts = $("#productBox > *").length;
  const productWidth = $("#productBox")
    .children()[0]
    .getBoundingClientRect().width;

  function updateProgress(count) {
    const initialProgress = 100 / numberOfProducts;
    $("#totalCount").text(
      count >= 10 ? numberOfProducts : `0${numberOfProducts}`
    );
    $("#currentCount").text(count >= 10 ? count : `0${count}`);
    $("#projectCount").text(count >= 10 ? count : `0${count}`);
    $("#progressBar").animate({ width: initialProgress * count + "%" });
  }

  function scrollProducts(direction, count) {
    updateProgress(count);
    if (direction === "positive" && count < numberOfProducts) {
      setTimeout(() => {
        ++count;
        $("#productBox").animate({ scrollLeft: `+=${productWidth}` });
        if (count === numberOfProducts) {
          scrollProducts("negative", count);
        } else {
          scrollProducts(direction, count);
        }
      }, 3000);
    } else {
      setTimeout(() => {
        --count;
        $("#productBox").animate({ scrollLeft: `-=${productWidth}` });
        if (count <= 1) {
          scrollProducts("positive", count);
        } else {
          scrollProducts(direction, count);
        }
      }, 3000);
    }
  }
  scrollProducts("positive", 1);
});

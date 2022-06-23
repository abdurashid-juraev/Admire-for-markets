// search-btn
let searchBtn = document.querySelector(".search-btn");
let nav = document.querySelector(".nav");
let search = document.querySelector(".search");
let searchX = document.querySelector(".search-x");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    search.classList.toggle("shov");
  });
}
if (searchX) {
  searchX.addEventListener("click", () => {
    search.classList.remove("shov");
  });
}

//==========================================================================
// footer tab
let footerMenu = document.querySelector(".footer-menu");
let footerMenuItem = document.querySelectorAll(".footer-menu-item");

footerMenuItem.forEach((el) => {
  el.addEventListener("click", function () {
    footerMenu.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});

//==========================================================================

// modal
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modalCloseButton");
const body = document.querySelector(".modal-bg");

let isModal = document.querySelectorAll(".isModal");
isModal.forEach((el) => {
  el.addEventListener("click", (id) => {
    if (modal) {
      let modal = document.querySelector("#id");
    }
    modal.classList.toggle("modalActive");
    body.classList.add("bodyShadow");
  });
});
if (modalCloseButton) {
  modalCloseButton.addEventListener("click", () => {
    modal.classList.toggle("modalActive");
    body.classList.remove("bodyShadow");
  });
}
if (modal) {
  body.addEventListener("click", function () {
    modal.classList.remove("modalActive");
    body.classList.remove("bodyShadow");
  });
}
//==========================================================================
// today chart
let chartVertical = document.querySelector("#todayChart");
if (chartVertical) {
  const labels = ["Dus", "Ses", "Cho", "Pay", "Jum", "Sha", "Yak"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Chuchvara",
        data: [15, 9, 18, 15, 15, 13, 10],
        borderRadius: 8,
        backgroundColor: [
          "#F27272",
          "#F27272",
          "#F27272",
          "#F27272",
          "#F27272",
          "#F27272",
        ],

        borderWidth: 1,
      },
      {
        label: "Tuxum",
        data: [12, 12, 10, 10, 5, 5, 14],
        borderRadius: 8,
        backgroundColor: [
          "#446EA6",
          "#446EA6",
          "#446EA6",
          "#446EA6",
          "#446EA6",
          "#446EA6",
        ],

        borderWidth: 1,
      },
      {
        label: "Muzqaymoq",
        data: [25, 15, 5, 2, 12, 18, 8],
        borderRadius: 8,
        backgroundColor: [
          "#85E394",
          "#85E394",
          "#85E394",
          "#85E394",
          "#85E394",
          "#85E394",
        ],

        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          boxColor: "blue",
          labels: {
            boxWidth: 4,
            color: "black",
            padddin: 20,
            usePointStyle: true,
            pointStyle: "Rounded",
            padding: 15,
            font: {
              size: 15,
            },
          },
        },
      },
    },
  };

  const todayChart = new Chart(document.getElementById("todayChart"), config);
}

//===========================================================================
// weekly chart
let chartHor = document.querySelector("#bar-chart-horizontal");
if (chartHor) {
  const horizontalChart = new Chart(
    document.getElementById("bar-chart-horizontal"),
    {
      type: "bar",
      data: {
        labels: ["Chuchvara", "Tuxum", "Muzqaymoq", "Chips", "Hydrolife"],
        datasets: [
          {
            label: "Hafta",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: [450, 720, 550, 350, 530],
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            grid: {
              display: true,
            },
          },
          y: {
            ticks: {
              color: "black",
              crossAlign: "far",
              font: {
                weight: "bold",
                size: 16,
              },
            },
            grid: {
              display: false,
            },
          },
        },

        plugins: {
          legend: {
            display: true,
            position: "bottom",
            align: "start",
            labels: {
              display: true,
              boxWidth: 4,
              usePointStyle: true,
              pointStyle: "Rounded",

              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
        },
      },
    }
  );
}

//==========================================================================

// statistic scrollabe-tab
$(document).ready(function () {
  (function ($) {
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");

    $(".tab ul.tabs li a").click(function (g) {
      var tab = $(this).closest(".tab"),
        index = $(this).closest("li").index();

      tab.find("ul.tabs > li").removeClass("current");
      $(this).closest("li").addClass("current");

      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();

      g.preventDefault();
    });
  })(jQuery);
});
//=========================================================================================
// login parol
let visible = document.querySelector(".visible");
if (visible) {
  visible.addEventListener("click", () => {
    if (document.querySelector("#passwordInput").type === "password") {
      visible.classList.remove("lineEye");
      document.querySelector("#passwordInput").type = "text";
    } else if (document.querySelector("#passwordInput").type === "text") {
      document.querySelector("#passwordInput").type = "password";
      visible.classList.add("lineEye");
    }
  });
}

//=======================================================================================
// debt check
let card = document.querySelector(".debt-check");
if (card) {
  let hiddenContent = document.querySelector(".hidden-content");
  card.addEventListener("click", () => {
    hiddenContent.classList.toggle("show-content");
  });
}

//===============================================================================
const debtBtn = document.querySelector(".info-debt");
let rotateArrow = document.querySelector(".info-debt img");
const checkDebt = document.querySelectorAll(".debt-check2");
if (debtBtn) {
  debtBtn.addEventListener("click", function () {
    rotateArrow.classList.toggle("openEl");
    checkDebt.forEach((el) => {
      el.classList.toggle("open");
    });
  });
}
//===============================================================================
$(document).ready(function () {
  $(".product-add").select2();
});
//============================================================================
let tab1 = document.querySelector(".tab1");
let tab2 = document.querySelector(".tab2");
let content1 = document.querySelector(".content1");
let content2 = document.querySelector(".content2");
if ((tab1, tab2, content1, content2)) {
  tab1.addEventListener("click", () => {
    content1.classList.remove("scale");
    content2.classList.add("scale");
    tab1.classList.remove("opacity");
    tab2.classList.add("opacity");
  });

  tab2.addEventListener("click", () => {
    content1.classList.add("scale");
    content2.classList.remove("scale");
    tab2.classList.remove("opacity");
    tab1.classList.add("opacity");
  });
}

// const benefitsTab1 = document.getElementById("threatDetection");
// const benefitsTab2 = document.getElementById("endpointDetection");
// const benefitsTab3 = document.getElementById("organizationLevel");
// const benefitsTab4 = document.getElementById("investigationRes");

// const tabsImages1 = document.getElementById("threatDetectionImg");
// const tabsImages2 = document.getElementById("endpointDetectionImg");
// const tabsImages3 = document.getElementById("organizationLevelImg");
// const tabsImages4 = document.getElementById("investigationResImg");

// benefitsTab1.addEventListener("click", (event) => {
//   benefitsData("threatDetectionImg");
//   tabsImages2.style.display = "none";
//   tabsImages3.style.display = "none";
//   tabsImages4.style.display = "none";
//   event.stopPropagation();
// });

// benefitsTab2.addEventListener("click", (event) => {
//   benefitsData("endpointDetectionImg");
//   tabsImages1.style.display = "none";
//   tabsImages3.style.display = "none";
//   tabsImages4.style.display = "none";
//   event.stopPropagation();
// });

// benefitsTab3.addEventListener("click", (event) => {
//   benefitsData("organizationLevelImg");
//   tabsImages1.style.display = "none";
//   tabsImages2.style.display = "none";
//   tabsImages4.style.display = "none";
//   event.stopPropagation();
// });

// benefitsTab4.addEventListener("click", (event) => {
//   benefitsData("investigationResImg");
//   tabsImages1.style.display = "none";
//   tabsImages2.style.display = "none";
//   tabsImages3.style.display = "none";
//   event.stopPropagation();
// });

// function benefitsData(imgId) {
//   let imageID = document.getElementById(imgId);
//   imageID.style.display = "block";
// }

const benefitsTab1 = document.getElementById("advanceRisk");
const benefitsTab2 = document.getElementById("threatDetection");
const benefitsTab3 = document.getElementById("endpointDetection");
const benefitsTab4 = document.getElementById("organizationLevel");
const benefitsTab5 = document.getElementById("investigationRes");

function benefitsData(imgId) {
  let imageID = document.querySelector(".advanceRiskImg");
  imageID.setAttribute("src", imgId);
}

benefitsTab1.addEventListener("click", () => {
  benefitsData(
    "https://wordpress-1006724-4097819.cloudwaysapps.com/wp-content/uploads/2024/02/capabilities-benefits-img.png"
  );
});
benefitsTab2.addEventListener("click", () => {
  benefitsData(
    "https://wordpress-1006724-4097819.cloudwaysapps.com/wp-content/uploads/2024/01/human-monitoring-img.png"
  );
});
benefitsTab3.addEventListener("click", () => {
  benefitsData(
    "https://wordpress-1006724-4097819.cloudwaysapps.com/wp-content/uploads/2024/01/endpoint-mgm-img.png"
  );
});
benefitsTab4.addEventListener("click", () => {
  benefitsData(
    "https://wordpress-1006724-4097819.cloudwaysapps.com/wp-content/uploads/2024/01/how-works-img.png"
  );
});
benefitsTab5.addEventListener("click", () => {
  benefitsData(
    "https://wordpress-1006724-4097819.cloudwaysapps.com/wp-content/uploads/2024/01/Executive-Dashboard.png"
  );
});

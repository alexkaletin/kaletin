//code for submitting the function
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  //prevents the refresh from happening
  event.preventDefault();

  //collects information from the form and adds it to the console
  name = form.name.value;
  email = form.email.value;
  message = form.message.value;
  const str = `Your name is ${name}
  Your email is ${email}
  Your message is ${message}`;
  console.log(str);
}

//This function will create find the about section and append my bio paragrpah
const about = () => {
  let about = document.querySelector("#about");

  //bio paragraph
  let p = document.createElement("p");
  p.setAttribute("class", "bio");
  p.textContent =
    "My name is Aleksandr Kaletin, but I go by Alex. I'm an undergraduate student and expecting to graduate June 2022 from PSU. I have experience with creating object-oriented programs and working with agile/ scrum methodology. The languages that I have worked with include Java, C/C++, JavaScript, HTML/CSS, and Python. The projects that I have worked on include SRE experience with making a site reliable, creating websites from scratch, using docker to create and store images, and using cloud services as PaaS and IaaS. I just recently joined my church’s web management team where I’m currently transforming the previous old site to a more modern looking site that has more features. I’m currently hoping to learn AI/ ML basics so I can become a more well-rounded programmer.";
  about.append(p);
};

//This function will create an accordion and add my work information
const work = () => {
  $(document).ready(function () {
    $("#work")
      //First job
      .append(
        $("<div>")
          .addClass("accordion-item")
          .append(
            $("<h2>")
              .addClass("accordion-header")
              .attr("id", "itemOne")
              .append(
                $("<button>")
                  .addClass("accordion-button")
                  .attr("type", "button")
                  .attr("data-bs-toggle", "collapse")
                  .attr("data-bs-target", "#collapseOne")
                  .attr("aria-expanded", "false")
                  .attr("aria-controls", "collapseOne")
                  .append(
                    $("<div>").append(
                      $("<h3>")
                        .text("Certified Pharmacy Technician Lead")
                        .append($("<h5>").text("Consonus Pharmacy Services"))
                        .append($("<h6>").text("August 2020 - Present"))
                    )
                  )
              )
          )
          //First job descriptions (hidden in the beginning)
          .append(
            $("<div>")
              .addClass("accordion-collapse collapse")
              .attr("id", "collapseOne")
              .attr("aria-labelledby", "itemOne")
              .attr("data-bs-parent", "work")
              .append(
                $("<div>")
                  .addClass("accordion-body")
                  .append(
                    $("<ul>")
                      .append($("<li>").text("Trained new employees"))
                      .append($("<li>").text("Managed daily workflows"))
                      .append($("<li>").text("Lead daily team meetings"))
                  )
              )
          )
      )
      //Second job
      .append(
        $("<div>")
          .addClass("accordion-item")
          .append(
            $("<h2>")
              .addClass("accordion-header")
              .attr("id", "itemTwo")
              .append(
                $("<button>")
                  .addClass("accordion-button")
                  .attr("type", "button")
                  .attr("data-bs-toggle", "collapse")
                  .attr("data-bs-target", "#collapseTwo")
                  .attr("aria-expanded", "false")
                  .attr("aria-controls", "collapseTwo")
                  .append(
                    $("<div>").append(
                      $("<h3>")
                        .text("Certified Pharmacy Technician")
                        .append($("<h5>").text("Consonus Pharmacy Services"))
                        .append($("<h6>").text("August 2015 - August 2020"))
                    )
                  )
              )
          )
          //Second job descriptions (hidden in the beginning)
          .append(
            $("<div>")
              .addClass("accordion-collapse collapse")
              .attr("id", "collapseTwo")
              .attr("aria-labelledby", "itemTwo")
              .attr("data-bs-parent", "work")
              .append(
                $("<div>")
                  .addClass("accordion-body")
                  .append(
                    $("<ul>")
                      .append(
                        $("<li>").text(
                          "Managed patient profiles to keep records up to date"
                        )
                      )
                      .append(
                        $("<li>").text(
                          "Prioritized tasks to achieve on-time delivery"
                        )
                      )
                  )
              )
          )
      );
  });
};

//This function will toggle dark-mode on/off
function switchModes() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

about();
work();

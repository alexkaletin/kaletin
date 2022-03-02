const about = () => {
  let about = document.querySelector("#about");

  //bio paragraph
  let p = document.createElement("p");
  p.setAttribute("class", "bio");
  p.textContent =
    "I'm Aleksandr Kaletin, but I go by Alex. I'm an undergrad student and expecting to graduate June 2022 from PSU. I have experience with creating object-oriented programs and working with agile/ scrum methodology. The languages that I have worked with include Java, C/C++, JavaScript, HTML/CSS, and Python. The projects that I have worked on include SRE experience with making a site reliable, creating websites from scratch, using docker to create and store images, and using cloud services as PaaS and IaaS. I just recently joined my church’s web management team where I’m currently transforming the previous old site to a more modern looking site that has more features. I’m currently hoping to learn AI/ ML basics so I can become a more well-rounded programmer.";
  about.append(p);
};

about();

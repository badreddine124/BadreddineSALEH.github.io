AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Science Intern",
    cardImage: "./assets/images/experience-page/FY Computing.png",
    place: "FY Computing",
    time: "(February, 2023 - Present)",
    desp: `
    As part of the <b>data & Deep Learning</b> team, my missions were as follows:
    <ul>
    <li><b>Acquired, Processing and Visualization</b> of RNA-sequences data from the <b>S3 (AWS)</b>.</li>
    <li><b>Exploratory Data Analysis</b> of hundreds of millions of <b>RNA-sequences</b> using <b>PySpark</b>.</li>
    <li>Conducted <b>feature selection</b> to address high-dimensionality data.</li>
    <li>Study of <b>Deep Learning</b> algorithms (Bi-LSTM, CNN-LSTM and Transformers).</li>
    <li><b>Fine-Tuning</b> these algorithms for performance metrics of evaluation (precision, recall and ROC).</li>
    <li><b>Deployment</b> of the best model <b>on ZIWIG platform</b> for <b>predicting new samples</b>.</li>
    </ul>
    `,
  },
  {
    title: "Data Science Intern",
    cardImage: "./assets/images/experience-page/AIOX Labs.png",
    place: "AIOX Labs",
    time: "(January, 2020 - December, 2020)",
    desp: `
    Developed an end-to-end data pipeline to examine the influence of ESG controversies on South Africa's economy through dialect analysis. Key components of this project included.
    <br>
    As part of the <b>Data Science</b> team, my missions were as follows:
    <ul>
    <li>Scraping articles and tweets using <b>Selenium</b>.</li>
    <li>Building a <b>language identification</b> model using SVM and Naive Bayes.</li>
    <li>Conducting topic modeling by comparing <b>BERTopic, LDA, and Top2vec</b> results.</li>
    <li>Performing sentiment analysis with <b>RoBERTa</b>.</li>
    <li>Calculating ESG scores (<b>novelty, controversy and risk</b>) to create an ESG Dashboard.</li>
    </ul>
    `,
  },
];

const showCards1 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1" style="height:350px">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "UmojaHack Africa 2022: Faulty Air Quality Sensor Challenge",
    subtitle: "ranked 1st in Morocco & 82/493 in Africa",
    image: "./assets/images/experience-page/zindi.png",
    desp: "I participated alongside other great members of the Automatants Association to this DataThon where we learned a lot about ensemble modeling and used state of the art Machine Learning (XGBoost) to perform this task.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://zindi.africa/users/Badreddine_SALEH/competitions/certificate" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

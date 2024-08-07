import './App.css';
import Navbar from './navbar';
import Features from './features';
import Register from './register';
import AboutSection from './about';
import Regist from './regist';
import Person from './person';
import CoreContents from './core_contents';

function App() {
const description_1 = "Generate more leads with a professional landing page!";
const description_2 = "Ready to get started? Sign up now!";
const featurestyle = "features";
const cardstyle = "cardstyle";
const des_content = "des-content";
const features = [{
  name:"Fully Responsive Design",
  description:"This theme will look great on any device, no matter the size!",
  img:"https://cdn-icons-png.flaticon.com/128/11625/11625655.png"},
  {
    name:"Bootstrap 5 Ready",
    description:"Featuring the latest build of the new Bootstrap 5 framework!",
    img:"https://cdn-icons-png.flaticon.com/128/1659/1659687.png"},
    {
      name:"Easy to Use",
      description:"Ready to use with your own content, or customize the source files!",
      img:"https://cdn-icons-png.flaticon.com/128/6146/6146685.png"}]
  const persons = [{
    name:"Margaret E.",
    description:"This is fantastic! Thanks so much guys!",
    img:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg"
  }, {
    name:"Fred S.",
    description:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    img:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg"
  }, {
    name:"Sarah W.",
    description:"Thanks so much for making these free resources available to us!",
    img:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg"
  }]

  const core_contents = [{
    name:"Fully Responsive Design",
    description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    img:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
  },{
    name:"Updated For Bootstrap 5",
    description:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    img:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
  }, {
    name:"Easy to Use & Customize",
    description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    img:"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
  }]
  return (
    <>
    <Navbar/>
    <Register description={description_1} idname="Register"/>
    <div className="All-features">
      {features.map(((val,idx) => (<Features model={val} key={idx} style={featurestyle}/>)))}
      </div>
      <div className="all-features">
        {core_contents.map(((val,idx) => (<CoreContents model={val} key={idx} style={cardstyle} des_content={des_content}/>)))}
        </div>
    <h1>What People are saying...</h1>
    <div className="All-features">
      {persons.map(((val,idx) => (<Person model={val}key={idx} style={featurestyle}
      imgstyle={{height:'200px',
        borderRadius:'50%',
        boxShadow:'5px 5px 5px rgba(0,0,0,0.4)'}}/>)))}
        </div>
        <Regist description={description_2} style={{fontSize:'large'}} idname='Register'/>
        <AboutSection/>
      </>
  );
};

export default App

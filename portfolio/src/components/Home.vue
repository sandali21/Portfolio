<template>
  <h3>
    Hello, I'm Sandali Herath
  </h3>
  <h4 class="subtitle"> Graduate Student at SLIIT </h4> 
  <div class="about">
    <div style="width: 760px;">
      <h4 class="projecttitle"> About Me </h4> 
      <p style="width: 75%;"> As a recent graduate in Information Technology, I have a strong interest in software development and UI/UX design. I've worked on several academic and internship projects, and I'm excited to grow further in the tech industry.
      </p> <br/>
      <div class="tech">
        <vs-button> React.js </vs-button>
        <vs-button> Vue.js </vs-button> 
        <vs-button> Flutter </vs-button> 
        <vs-button> Javascript </vs-button>  
        <vs-button> HTML/CSS </vs-button>
        <vs-button> Figma </vs-button>   <br/> <br/> 
        <vs-button> Java </vs-button>
        <vs-button> Python </vs-button> 
        <vs-button> Php </vs-button> 
        <vs-button> R </vs-button> <br/> <br/> 
        <vs-button> MySQL </vs-button> 
        <vs-button> Oracle </vs-button>
        <vs-button> MongoDB </vs-button> 
      </div>
    </div>
    <div>
      <br/> 
      <router-link to=""><h4 class="projecttitle-about"> View My Resume </h4></router-link>
      <h4 class="projecttitle-about"> Contact </h4>
      <div class="icons">
        <p> <i class="fa-solid fa-phone"></i> &nbsp; 075 78 25 208 </p> 
        <p> <i class="fa-solid fa-envelope"></i> &nbsp; sandaliherath00@gmail.com </p>
        <p> <i class="fa-solid fa-house"></i> &nbsp; 57/A, "Kumara Sewana", Bokkawela road, Poojapitiya, Kandy </p>
        <p> <i class="fa-brands fa-github"></i> &nbsp; GitHub Link -<a href="https://github.com/sandali21" class="demo" target="_blank" rel="noopener">@sandali21</a></p>
        <p> <i class="fa-brands fa-linkedin"></i> &nbsp; LinkedIn -<a href="https://www.linkedin.com/in/sandali-herath-08769a224" class="demo" target="_blank" rel="noopener">@sandaliherath</a></p>
      </div> 
    </div>
  </div>
  <br/>
  <div class="qualification">
    <div>
      <h4 class="projecttitle">
    Education
    </h4> <br/>
    <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-icon"></div>
          <div class="timeline-position"> <h4> BSc(Hons) in Information Technology specializing in Information Technology </h4> </div>
          <div class="timeline-content">
            <h5> Sri Lanka Institute of Information Technology (SLIIT)</h5>
            <h5 class="timeline-date"> 2021-2024 </h5>
          </div>
        </div>
    </div> 
    </div><br/>
    <div>
      <h4 class="projecttitle">
      Work Experience
    </h4> <br/>
    <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-icon"></div>
          <div class="timeline-position"> <h4> Web Developer Intern </h4> </div>
          <div class="timeline-content">
            <h5> Aadhira Holdings, Bambalapitiya</h5>
            <h5 class="timeline-date"> 2023 October - 2024 April </h5>
          </div>
        </div>
    </div>
    </div>
  </div> <br/>
  <h4 class="projecttitle">
    My Latest Projects
  </h4> <br/>
  <div class="box">
    <div class="box-item">
      <router-link to="/web" > 
        <img class="logo" src="@/assets/web1.png" width="125" height="125" />
        <h4>Web App Development </h4>
      </router-link> 
    </div>
    <div class="box-item">
      <router-link to="/mobile" > 
        <img class="logo" src="@/assets/mobile.png" width="125" height="125" />
        <h4>Mobile App Development</h4>
      </router-link> 
    </div>
    <div class="box-item">
      <router-link to="/ui" >
        <img class="logo" src="@/assets/ui.png" width="125" height="125" />
        <h4> UI/UX Design </h4>
      </router-link> 
    </div>
    <div class="box-item">
      <router-link to="/data" >
        <img class="logo" src="@/assets/data.png" width="125" height="125" />
        <h4> Data Analytics  </h4>
      </router-link>
    </div>
  </div> <br/> 
</template>

<style scoped>
  .box{
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  .box-item{
    margin-right: 100px;
    margin-left: 25px;
    background-color: #253146;
    padding: 20px 30px 0 30px;
    border-radius: 10px;
  }

  h3, h4{
    font-weight: 600;
    margin-top: 10px;
  }

  .subtitle{
    color: rgb(176, 219, 213);
    font-weight: 500;
  }

  .projecttitle{
    color: rgb(210, 219, 176);
    font-weight: 600;
    margin-top: 50px;
    margin-bottom: 5px;
  }

  .projecttitle-about{
    color: rgb(210, 219, 176);
    font-weight: 600;
  }

  .tech vs-button{
    background-color: #545457;
    border-radius: 50px;
    padding:3px 10px 3px 12px;
    margin-right: 10px;
    color:#f3c634;
    font-weight: 500;
  }

  .timeline{
    border-left: 2px solid #98a2dd;
    position: relative;
    margin: 10px 0 0 30px;
    padding-left: 5px;
    list-style: none;
  }

  .timeline-date{
    color: #68858f;
    margin-top: 5px;
    font-weight: 400;
  }

  .timeline-item{
    width: 100%;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    margin-right: 200px;
  }

  .timeline-position h4{
    font-weight: 500;
  }

  .timeline-content{
    position: relative;
    padding-top: 5px;
    font-size:17px;
  }

  .timeline-icon{
    position: absolute;
    top: 35px;
    left: -11px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #98a2dd;
  }

  .qualification, .about{
    display: flex;
    flex-direction: row;
  }

  .icons {
    margin:10px 0 5px 0;
    font-size: 14px;
    padding-bottom: 5px;
  }

</style>

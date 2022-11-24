import React from "react";
import "../App.css";
export default function Project() {
return (
       <div>
        <section className = "cardprojects" styles = {{
            backgroundColor: '#CAFFB9'

        }}>
        <h1><center>Project Links</center></h1>
        
        <center><a href="https://alanjose23.github.io/pre-work-studyguide/"><img class = "projpic" src = "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=2000" alt = 'proj1'></img></a>
        <h3>Prework Poject: notes archive</h3></center>
        <center><a href = "https://wakasagi-burt.github.io/first-baby/"><img class = "projpic" src = "https://media.istockphoto.com/vectors/cinema-icons-set-collection-icon-popcorn-box-movie-clapper-board-film-vector-id1339430762?b=1&k=20&m=1339430762&s=170667a&w=0&h=HU9DPa37nZfNVzb121QGtw2HW04RnA5eW3lrOECTA3I=" alt = 'proj2'></img></a>
          <h3>Film Detective</h3></center>
        <center><a href = "https://techwreckblog.herokuapp.com/#"><img class = "projpic" src = "https://www.codecademy.com/resources/blog/content/images/2020/11/technical-portfolio-tips.png" alt = 'proj3'></img></a>
        <h3>TechWreck</h3></center>
        <center><a href = "https://jate1232.herokuapp.com/"><img class = "projpic" src = "https://ph-files.imgix.net/51fb7e6d-02fe-48f4-8773-09413e5d266b.png?auto=format&fit=crop"alt = 'proj4'></img></a>
        <h3>JATE</h3></center>
        <center><a href = "https://notetaker1232.herokuapp.com/"><img class = "projpic" src = "https://www.the-learning-agency.com/wp-content/uploads/2021/03/when-should-our-students-use-technology-for-note-taking_orig.jpg" alt = 'proj5'></img></a>
        <h3>NoteTakerApp</h3></center>
      </section>
      </div>
    )
};
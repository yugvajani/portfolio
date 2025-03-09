// import React, { useContext } from "react";
// import "./WorkExperience.scss";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
// import { workExperiences } from "../../portfolio";
// import { Fade } from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function WorkExperience() {
//   const { isDark } = useContext(StyleContext);
//   if (workExperiences.display) {
//     return (
//       <div id="experience">
//         <Fade bottom duration={1000} distance="20px">
//           <div className="experience-container" id="workExperience">
//             <div>
//               <h1 className="experience-heading">Work Experience</h1>
//               <div className="timeline-container">
//                 <div className="timeline">
//                   {workExperiences.experience.map((card, i) => (
//                     <div
//                       className={`timeline-item ${i % 2 === 0 ? 'even' : 'odd'}`}
//                       key={i}
//                     >
//                       {/* Timeline Date */}
//                       <div className="timeline-date">{card.date}</div>

//                       {/* Timeline Icon */}
//                       <div className="timeline-icon">
//                         <span className="icon">{card.company[0]}</span>
//                       </div>

//                       {/* Timeline Content */}
//                       <div className="timeline-content">
//                         <div className="timeline-header">
//                           <h3>{card.role}</h3>
//                           <h4>{card.company}</h4>
//                         </div>
//                         <ul className="timeline-skills">
//                           {card.descBullets.map((bullet, idx) => (
//                             <li key={idx}>{bullet}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//         </Fade>
//       </div>
//     );
//   }
//   return null;
// }

import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Work Experience</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        techStack: card.techStack
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
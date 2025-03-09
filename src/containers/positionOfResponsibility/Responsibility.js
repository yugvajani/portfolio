import React, {useContext} from "react";
import "./Responsibility.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {posOfResponsibilitySection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Responsibility() {
  const {isDark} = useContext(StyleContext);
  if (!posOfResponsibilitySection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {posOfResponsibilitySection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {posOfResponsibilitySection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {posOfResponsibilitySection.responsibilities.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

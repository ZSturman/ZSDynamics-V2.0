import { useState } from "react";
import SkillItems from "./skillItems.json";
import * as FaIcons from "react-icons/fa6";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";

interface IconMapping {
  [key: string]: React.ComponentType;
}

interface ActiveCategoryState {
  category: string | null;
  type: 'click' | 'hover' | null;
}

const SkillsList = () => {
  const [activeState, setActiveState] = useState<ActiveCategoryState>({ category: null, type: null });

  const handleEvent = (type: 'click' | 'hover', category: string) => {
    if (type === 'click') {
      setActiveState({ category, type });
    } else if (type === 'hover') {
      setActiveState({ category, type });
    }
  };

  const handleMouseLeave = () => {
    if (activeState.type !== 'click') {
      setActiveState({ category: null, type: null });
    }
  };


  const iconMapping: IconMapping = {
    FaPython: FaIcons.FaPython,
    IoLogoCss3: IoIcons.IoLogoCss3,
    SiSass: SiIcons.SiSass,
    SiJavascript: SiIcons.SiJavascript,
    FaReact: FaIcons.FaReact,
    SiTypescript: SiIcons.SiTypescript,
    FaCloud: FaIcons.FaCloud,
    FaSwift: FaIcons.FaSwift,
    SiFlask: SiIcons.SiFlask,
    SiCsharp: SiIcons.SiCsharp,
    SiJinja: SiIcons.SiJinja,
    FaHtml5: FaIcons.FaHtml5,
    FaNodeJs: FaIcons.FaNodeJs,
    SiOpencv: SiIcons.SiOpencv,
    SiPytorch: SiIcons.SiPytorch,
    SiTensorflow: SiIcons.SiTensorflow,
    SiPandas: SiIcons.SiPandas,
    FaBootstrap: FaIcons.FaBootstrap,
    SiPostgresql: SiIcons.SiPostgresql,
    SiThreedotjs: SiIcons.SiThreedotjs,
    SiMysql: SiIcons.SiMysql,
    SiMongodb: SiIcons.SiMongodb,
    SiRedis: SiIcons.SiRedis,
    FaGitAlt: FaIcons.FaGitAlt,
    FaDocker: FaIcons.FaDocker,
    SiKubernetes: SiIcons.SiKubernetes,
    FaAws: FaIcons.FaAws,
    FaGoogle: FaIcons.FaGoogle,
    analytics: SiIcons.SiGoogleanalytics,
    backend: FaIcons.FaGear,
    frontend: FaIcons.FaPalette,
    cloud: FaIcons.FaCloud,
    database: FaIcons.FaDatabase,
    ai: FaIcons.FaBrain,
  };

  const categoryList = ["analytics", "backend", "frontend", "cloud", "database", "ai"]

  return (
    <div className="skills-list-and-categories">
      <h2>Skills</h2>

      <div className="skill-category-list" onMouseLeave={handleMouseLeave}>
        {categoryList.map((category) => {
          const IconComponent = iconMapping[category];
          return (
            <div
              className={`skill-category-item ${category === activeState.category ? "active" : ""}`}
              onClick={() => handleEvent('click', category)}
              onMouseEnter={() => handleEvent('hover', category)}
            >
              {IconComponent && <IconComponent />}
              <div className="category-name">{category}</div>
            </div>
          );
        })}
      </div>

      <div className="skills-list">
        {SkillItems.map((skill) => {
          const IconComponent = iconMapping[skill.importName];
          const isHighlighted =
          activeState && activeState.category
            ? skill.category.includes(activeState.category)
            : false;
          return (
            <div className={`skill-item ${isHighlighted ? "highlighted" : ""}`}>
              {IconComponent && <IconComponent />}
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsList;

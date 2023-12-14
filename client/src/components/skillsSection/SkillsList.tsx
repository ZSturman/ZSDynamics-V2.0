import React from "react";
import SkillItems from "./skillItems.json";
import * as FaIcons from "react-icons/fa6";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";

interface IconMapping {
  [key: string]: React.ComponentType;
}

const SkillsList = () => {
  const iconMapping: IconMapping = {
    FaPython: FaIcons.FaPython,
    IoLogoCss3: IoIcons.IoLogoCss3,
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
  };

  return (
    <div className="skills-list-and-categories">
      <h2>Skills</h2>

      <div className="skill-category-list">
        <div className="skill-category-item">
          <SiIcons.SiGoogleanalytics />
          <div className="category-name">Analytics</div>
        </div>
        <div className="skill-category-item">
          <FaIcons.FaGear />
          <div className="category-name">Backend</div>
        </div>
        <div className="skill-category-item">
          <FaIcons.FaPalette />
          <div className="category-name">Frontend</div>
        </div>
        <div className="skill-category-item">
          <FaIcons.FaCloud />
          <div className="category-name">Cloud</div>
        </div>
        <div className="skill-category-item">
          <FaIcons.FaDatabase />
          <div className="category-name">Database Management</div>
        </div>
        <div className="skill-category-item">
          <FaIcons.FaBrain />
          <div className="category-name">AI</div>
        </div>
      </div>

      <div className="skills-list">
        {SkillItems.map((skill) => {
          const IconComponent = iconMapping[skill.importName];
          return (
            <div className="skill-item">
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

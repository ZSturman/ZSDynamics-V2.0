import SocialMediaBtns from "../../socialMediaBtns/SocialMediaBtns";


const NameTitle = () => {
  return (
    <div className="name-title-container">
      <div className="name-title">
        <div className="pre-name">hi. my name is</div>
        <div className="name">zachary sturman</div>
        <div className="one-line">
          <div className="pre-title">a</div>
          <div className="title">software engineer</div>
        </div>
        <div className="tag-line">making computers do stuff since 2017</div>
      </div>
      <SocialMediaBtns />

    </div>
  );
};

export default NameTitle;

import "./About.scss";
import Button from "../Button/Button";

const aboutMeData = {
  one: {
    name: "Carrotie",
    imageUrl: "/images/me.webp",
    externalLink: "https://www.youtube.com/@carrotkhumbell",
    content: [
      {
        header: "Giới thiệu về tôi",
        paragraphs: [
        "  Xin chào👋! Cảm ơn bạn đã ghé thăm <3!!! Tôi tên là Cà Rốt . Tôi là một animator, developer!"
      },
      {
        header: "Fun Facts",
        paragraphs: [
          " - Tôi bị ám ảnh bởi những thứ dễ thương. Đặc biệt, tôi rất thích gấu trúc vì chúng rất đáng yêu và dễ thương.",
          " - Tôi thích sáng tạo, mọi loại hình nghệ thuật đều vô cùng hấp dẫn đối với tôi, từ âm nhạc, gốm sứ, móc len, đến hội họa, v.v. Tôi không giỏi nhiều thứ, nhưng vẫn thích tất cả chúng haha."
        ],
      },
    ],
  },
};

const About = () => {
  const data = aboutMeData["one"];

  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div className="data-container">
      <div className="image-wrapper">
        <img src={data.imageUrl} alt={data.name} className="data-image" />
      </div>

      <Button href={data.externalLink} type={"link"}>
        View my channel!
      </Button>

      {data.content.map((section, index) => (
        <div key={index} className="data-section">
          <h2 className="about-section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <div className="image-wrapper-two">
        <img
          src="/images/inprogress.webp"
          alt={"Crochet Mr. Cloud in progress"}
          className="data-image-two"
        />
      </div>
      <p className="section-paragraph">
        - - Mr. Cloud in progress (looks like a fish haha 🐟) - -
      </p>

      <div className="image-wrapper-two">
        <img
          src="/images/crochet.webp"
          alt={"Crochet Mr. Cloud"}
          className="data-image-two"
        />
      </div>
      <p className="section-paragraph">- - Mr. Cloud - -</p>

      <div className="image-wrapper-3">
        <img
          src="/images/partner.webp"
          alt={"Partner in Crime"}
          className="data-image"
        />
      </div>
      <p className="section-paragraph">- - My partner in crime - -</p>
    </div>
  );
};

export default About;

import Error from "./Error";
import Title from "./Titles";

function SectionHeader({ text, title, margin }) {
  return (
    <div
      className={` mb-[0.38rem]  flex items-center justify-between ${margin}`}
    >
      <Title text={title} />
      <Error text={text} />
    </div>
  );
}

export default SectionHeader;

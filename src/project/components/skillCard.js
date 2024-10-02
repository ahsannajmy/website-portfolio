export const SkillCard = (props) => {
  return (
    <>
      <div className="p-2 rounded-lg text-white bg-main-color hover:bg-main-color/80 text-center flex items-center">
        <span className="text-[8px] sm:text-xs font-semibold">
          {props.label}
        </span>
      </div>
    </>
  );
};

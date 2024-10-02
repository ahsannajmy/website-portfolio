export const Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className="bg-main-color hover:bg-main-color/80 
      text-white duration-300 ease-in-out p-2 rounded-lg text-base sm:text-xl"
      >
        {props.label}
      </button>
    </>
  );
};

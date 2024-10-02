export const NavbarItem = ({ label, handler }) => {
  return (
    <>
      <button onClick={handler}>
        <span
          className="text-sm font-semibold text-main-color
       hover:text-white p-2 bg-transparent hover:bg-main-color rounded-lg duration-500 ease-in-out"
        >
          {label}
        </span>
      </button>
    </>
  );
};

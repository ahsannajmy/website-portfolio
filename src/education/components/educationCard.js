export const EducationCard = ({ yearRange, institute, major, description }) => {
  return (
    <>
      <div className="text-main-color p-4 rounded-lg shadow-lg w-full">
        <div className="flex flex-col gap-4">
          <span className="text-base font-medium">{yearRange}</span>
          <span className="text-xl font-bold">{institute}</span>
          <span className="text-lg font-semibold">{major}</span>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

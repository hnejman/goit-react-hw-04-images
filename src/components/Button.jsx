export const Button = ({next}) => {
  return (
    <>
      <button
        className="Button"
        type="button"
        onClick={() => {
          next();
        }}
      >
        Load more
      </button>
    </>
  );
};

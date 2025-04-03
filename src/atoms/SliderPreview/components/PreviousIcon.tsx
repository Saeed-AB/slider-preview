const PreviousIcon = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div
      className="absolute left-32 top-2/4"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default PreviousIcon;

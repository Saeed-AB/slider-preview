const NextIcon = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div className="absolute right-32 top-2/4" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default NextIcon;

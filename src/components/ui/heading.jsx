export const Heading = ({ title, description, imageSrc }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-32">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <img src={imageSrc} alt={title} className="max-w-md" />
      </div>
    </>
  );
};

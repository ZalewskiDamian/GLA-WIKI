import { Heading } from "@/components/ui/heading";
import headingImage from "@/assets/images/heading/marineford-heading.png";
import { Card } from "@/components/ui/card";
import data from "@/data/marineford";

const Marineford = () => {
  return (
    <>
      <Heading
        title="Marineford"
        description="Spis mechanik wszystkich bossów na rajdzie Marineford"
        imageSrc={headingImage}
      />
      <div className="grid grid-cols-4 pt-20 gap-x-5 gap-y-14">
        {data.map((card) => (
          <Card
            key={card.id}
            url={card.url}
            imageSrc={card.sprite}
            name={card.name}
            color={card.color}
          />
        ))}
      </div>
    </>
  );
};

export default Marineford;

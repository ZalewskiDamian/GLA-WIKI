import { Heading } from "@/components/ui/heading";
import headingImage from "@/assets/images/heading/marineford-heading.png";
import { Card } from "@/components/ui/card";
import data from "@/data/marineford";
import { Title } from "@/components/ui/title";
import { Separator } from "@/components/ui/separator";
import { Box } from "@/components/ui/box";

//TANK
import spriteAokiji from "@/assets/images/sprites/aokiji-sprite.png";
import spriteSmoker from "@/assets/images/sprites/smoker-sprite.png";
import spriteEustass from "@/assets/images/sprites/eustass-sprite.png";
import spriteRebecca from "@/assets/images/sprites/rebecca-sprite.png";

//SUPPORT
import spriteMoria from "@/assets/images/sprites/moria-sprite.png";
import spriteLeo from "@/assets/images/sprites/leo-sprite.png";
import spriteBonney from "@/assets/images/sprites/bonney-sprite.png";
import spriteIvankov from "@/assets/images/sprites/ivankov-sprite.png";
import spriteBrook from "@/assets/images/sprites/brook-sprite.png";

//DPS MELE
import spriteMihawk from "@/assets/images/sprites/mihawk-sprite.png";
import spriteKiller from "@/assets/images/sprites/killer-sprite.png";
import spriteHina from "@/assets/images/sprites/hina-sprite.png";

//DPS RANGE
import spriteEnel from "@/assets/images/sprites/enel-sprite.png";
import spriteBasil from "@/assets/images/sprites/basil-sprite.png";
import spriteVanaugur from "@/assets/images/sprites/vanaugur-sprite.png";
import spriteNami from "@/assets/images/sprites/nami-sprite.png";
import spriteCapone from "@/assets/images/sprites/capone-sprite.png";
import spriteUta from "@/assets/images/sprites/uta-sprite.png";
import spriteRobin from "@/assets/images/sprites/robin-sprite.png";

const Marineford = () => {
  return (
    <>
      <Heading
        title="Marineford"
        description="Spis mechanik wszystkich bossów na rajdzie Marineford"
        imageSrc={headingImage}
      />
      <Separator />
      <Title className="text-center mb-0">
        Rekomendowane postacie
      </Title>
      <p className="text-sm text-muted-foreground text-center mb-4">
        Wszystkie postacie posiadają bronie, słomkowi Time Skipa
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Box>
          <p className="text-2xl font-bold text-center mb-3">Tank</p>
          <div className="flex justify-start items-center flex-wrap gap-4">
            <img
              src={spriteSmoker}
              alt="image"
              className="h-[140px]"
            />
            <img
              src={spriteEustass}
              alt="image"
              className="h-[140px]"
            />
            <img
              src={spriteRebecca}
              alt="image"
              className="h-[140px]"
            />
            <img
              src={spriteAokiji}
              alt="image"
              className="h-[140px]"
            />
          </div>
        </Box>
        <Box>
          <p className="text-2xl font-bold text-center mb-3">
            Support
          </p>
          <div className="flex justify-start items-center flex-wrap gap-4">
            <img
              src={spriteMoria}
              alt="image"
              className="h-[140px]"
            />
            <img src={spriteLeo} alt="image" className="h-[140px]" />
            <img
              src={spriteBonney}
              alt="image"
              className="h-[140px]"
            />
            <img
              src={spriteBrook}
              alt="image"
              className="h-[140px]"
            />
            <img
              src={spriteIvankov}
              alt="image"
              className="h-[140px]"
            />
          </div>
        </Box>
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-4">
        <Box>
          <p className="text-2xl font-bold text-center mb-3">
            DPS Mele
          </p>
          <div className="flex justify-start items-center flex-wrap gap-4">
            <img
              src={spriteMihawk}
              alt="image"
              className="h-[140px]"
            />
            <img src={spriteHina} alt="image" className="h-[140px]" />
            <img
              src={spriteKiller}
              alt="image"
              className="h-[140px]"
            />
          </div>
        </Box>
        <Box>
          <p className="text-2xl font-bold text-center mb-3">
            DPS Range
          </p>
          <div className="flex justify-start items-center flex-wrap gap-4">
            <img src={spriteEnel} alt="image" className="h-[140px]" />
            <img
              src={spriteBasil}
              alt="image"
              className="h-[140px]"
            />
            <img
              src={spriteVanaugur}
              alt="image"
              className="h-[140px]"
            />
            <img src={spriteNami} alt="image" className="h-[140px]" />
            <img
              src={spriteCapone}
              alt="image"
              className="h-[140px]"
            />
            <img src={spriteUta} alt="image" className="h-[140px]" />
            <img
              src={spriteRobin}
              alt="image"
              className="h-[140px]"
            />
          </div>
        </Box>
      </div>
      <Separator />
      <Title className="text-center mb-0">Mechaniki Bossów</Title>
      <p className="text-sm text-muted-foreground text-center mb-4">
        Wszystkie postacie posiadają bronie
      </p>
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

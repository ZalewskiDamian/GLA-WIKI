import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Heading } from "@/components/ui/heading";
import { Title } from "@/components/ui/title";
import { List } from "@/components/ui/list";
import { ListItem } from "@/components/ui/list-item";
import { Separator } from "@/components/ui/separator";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

import headingImage from "@/assets/images/heading/dalmatian-heading.png";

//SKILL RANGE
import skill_dog_claws_range from "@/assets/images/marineford/dalmatian/dalmatian-dog-claws-range.png";
import skill_shingan_ten_range from "@/assets/images/marineford/dalmatian/dalmatian-shigan-ten-range.png";
import skill_overpower_range from "@/assets/images/marineford/dalmatian/dalmatian-overpower-range.png";
import skill_tekkai_range from "@/assets/images/marineford/dalmatian/dalmatian-tekkai-range.png";
import skill_carnage_range from "@/assets/images/marineford/dalmatian/dalmatian-carnage-range.png";
import skill_dog_claws_instinct_range from "@/assets/images/marineford/dalmatian/dalmatian-dog-claws-instinct-range.png";

const Dalmatian = () => {
  return (
    <>
      <Heading
        title="Dalmatian"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>
            Bardzo uważać postaciami mele, głównie atakują dystansowcy
          </ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>
          1. Dog Claws - wave o obszarze 3x2. Bije też po bokach
          Dalmatiana
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_dog_claws_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>2. Shingan Ten - wave o obszarze 3x4.</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_shingan_ten_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          3. Overpower - wave o obszarze 3x6. Dalmatian przed użyciem
          opuszcza rękę do dołu i może uzywać tego spella w różnych
          kierunkach.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_overpower_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          4. Tekkai - Dalmatian zwiększa swoją obronę o 200% na 2,5
          sekundy.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_tekkai_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          5. Carange - obszar 5x5. Należy odejść 2 sqm od Dalmatiana.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_carnage_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          6. Instinct Dog Claws - Dalmatian dashuje 3x zadając
          obrażenia na dużym obszarze. 8 sqm szerokości ale nie jestem
          pewien ile wysokości.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_dog_claws_instinct_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
    </>
  );
};

export default Dalmatian;

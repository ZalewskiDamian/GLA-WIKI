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

import headingImage from "@/assets/images/heading/smoker-heading.png";

//SKILL RANGE
import skill_white_blow_range from "@/assets/images/marineford/smoker/smoker-white-blow-range.png";
import skill_white_out_range from "@/assets/images/marineford/smoker/smoker-white-out-range.png";
import skill_white_strike_range from "@/assets/images/marineford/smoker/smoker-white-strike-range.png";
import skill_white_vine_range from "@/assets/images/marineford/smoker/smoker-white-vine-range.png";
import skill_white_snake_range from "@/assets/images/marineford/smoker/smoker-white-snake-range.png";
import skill_smoke_wave_range from "@/assets/images/marineford/smoker/smoker-smoke-wave-range.png";
import skill_anty_range_range from "@/assets/images/marineford/smoker/smoker-anty-range-range.png";

const Smoker = () => {
  return (
    <>
      <Heading
        title="Smoker"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>
            Po minucie od pojawienia się przywołuje 2 Elite Marinsy
          </ListItem>
          <ListItem>
            Kolejne Elite Marinsy przywoływane są co 75 sekund
          </ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>1. White Blow - wave o wyznaczonym obszarze</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_white_blow_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>2. White Out - wave nakładający silence 3x5</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_white_out_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>3. White Strike - obszar 5x5</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_white_strike_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>4. White Vine - obszar 5x5</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_white_vine_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          5. White Snake - obszar 3x3, odbija się od wszystkich celów
          w pobliżu
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_white_snake_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          6. Smoke Wave - obszar 5x5, pojawia się pod postacią, nie
          należy stać blisko siebie
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_smoke_wave_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          7. Anty Range Smoke - obszar 3x3, pojawia się pod postacią
          jeśli stoi za daleko od Smokera.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_anty_range_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">Video</TabsContent>
        </Tabs>
      </Box>
    </>
  );
};

export default Smoker;

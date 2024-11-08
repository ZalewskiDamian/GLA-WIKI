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
import skill_carange_range from "@/assets/images/marineford/dalmatian/dalmatian-carange-range.png";
import skill_dog_claws_instinct_range from "@/assets/images/marineford/dalmatian/dalmatian-dog-claws-instinct-range.png";

//SKILL CAST
import skill_dog_claws_cast from "@/assets/images/marineford/dalmatian/dalmatian-dog-claws-cast.mp4";
import skill_shingan_ten_cast from "@/assets/images/marineford/dalmatian/dalmatian-shingan-ten-cast.mp4";
import skill_overpower_cast from "@/assets/images/marineford/dalmatian/dalmatian-overpower-cast.mp4";
import skill_tekkai_cast from "@/assets/images/marineford/dalmatian/dalmatian-tekkai-cast.mp4";
import skill_carange_cast from "@/assets/images/marineford/dalmatian/dalmatian-carange-cast.mp4";
import skill_dog_claws_instinct_cast from "@/assets/images/marineford/dalmatian/dalmatian-dog-claws-instinct-cast.mp4";

//SKILL VIDEO
import skill_dog_claws_video from "@/assets/images/marineford/dalmatian/dalmatian-dog-claws-cast.mp4";
import skill_shingan_ten_video from "@/assets/images/marineford/dalmatian/dalmatian-shingan-ten-cast.mp4";
import skill_overpower_video from "@/assets/images/marineford/dalmatian/dalmatian-overpower-video.mp4";
import skill_tekkai_video from "@/assets/images/marineford/dalmatian/dalmatian-tekkai-cast.mp4";
import skill_carange_video from "@/assets/images/marineford/dalmatian/dalmatian-carange-video.mp4";
import skill_dog_claws_instinct_video from "@/assets/images/marineford/dalmatian/dalmatian-dog-claws-instinct-cast.mp4";

const Dalmatian = () => {
  return (
    <>
      <Heading
        title="Dalmatian"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Pełna walka:</Title>
      <Box>
        <Text>
          <a
            href="https://youtu.be/u5gBRm4RC8A?si=XXYN6NeP7aXl6xwE&t=3836"
            target="_blank"
          >
            https://youtu.be/u5gBRm4RC8A?si=XXYN6NeP7aXl6xwE&t=3836
          </a>
        </Text>
      </Box>
      <Separator />
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
          <TabsContent value="cast">
            <video
              src={skill_dog_claws_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_dog_claws_video}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          2. Shingan Ten - wave o obszarze 3x4. Dalmatian rozstawia
          szeroko ręce przed użyciem.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_shingan_ten_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_shingan_ten_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_shingan_ten_video}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
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
          <TabsContent value="cast">
            <video
              src={skill_overpower_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_overpower_video}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
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
          <TabsContent value="cast">
            <video
              src={skill_tekkai_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_tekkai_video}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          5. Carange - obszar 5x5. Należy odejść 2 sqm od Dalmatiana.
          Dalmatian leczy się z tego spella za 130k.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_carange_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_carange_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_carange_video}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
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
          <TabsContent value="cast">
            <video
              src={skill_dog_claws_instinct_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_dog_claws_instinct_video}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
        </Tabs>
      </Box>
    </>
  );
};

export default Dalmatian;

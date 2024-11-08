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

import headingImage from "@/assets/images/heading/bastille-heading.png";

//SKILL RANGE
import skill_zanbato_slash_range from "@/assets/images/marineford/bastille/bastille-zanbato-slash-range.png";
import skill_birukatta_range from "@/assets/images/marineford/bastille/bastille-birukatta-range.png";
import skill_furaingusodo_range from "@/assets/images/marineford/bastille/bastille-furaingusodo-range.png";
import skill_brute_force_one_range from "@/assets/images/marineford/bastille/bastille-brute-force-one-range.png";
import skill_brute_force_two_range from "@/assets/images/marineford/bastille/bastille-brute-force-two-range.png";
import skill_strawberry_range from "@/assets/images/marineford/bastille/bastille-strawberry-range.png";
import skill_bomb_attack_range from "@/assets/images/marineford/bastille/bastille-bomb-attack-range.png";

//SKILL CAST
import skill_zenbato_slash_cast from "@/assets/images/marineford/bastille/bastille-zanbato-slash-cast.mp4";
import skill_birukatta_cast from "@/assets/images/marineford/bastille/bastille-birukatta-cast.mp4";
import skill_furaingusodo_cast from "@/assets/images/marineford/bastille/bastille-furaingusodo-cast.mp4";
import skill_brute_force_cast from "@/assets/images/marineford/bastille/bastille-brute-force-cast.mp4";
import skill_strawberry_cast from "@/assets/images/marineford/bastille/bastille-strawberry-cast.mp4";
import skill_bomb_attack_cast from "@/assets/images/marineford/bastille/bastille-bomb-attack-cast.mp4";

//SKILL VIDEO
import skill_zenbato_slash_video from "@/assets/images/marineford/bastille/bastille-zanbato-slash-cast.mp4";
import skill_birukatta_video from "@/assets/images/marineford/bastille/bastille-birukatta-video.mp4";
import skill_furaingusodo_video from "@/assets/images/marineford/bastille/bastille-furaingusodo-video.mp4";
import skill_brute_force_video from "@/assets/images/marineford/bastille/bastille-brute-force-video.mp4";
import skill_strawberry_video from "@/assets/images/marineford/bastille/bastille-strawberry-video.mp4";
import skill_bomb_attack_video from "@/assets/images/marineford/bastille/bastille-bomb-attack-video.mp4";
const Bastille = () => {
  return (
    <>
      <Heading
        title="Bastille"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Pełna walka:</Title>
      <Box>
        <Text>
          <a
            href="https://youtu.be/u5gBRm4RC8A?si=Nxqs_vACGROZmwuo&t=1349"
            target="_blank"
          >
            https://youtu.be/u5gBRm4RC8A?si=Nxqs_vACGROZmwuo&t=1349
          </a>
        </Text>
      </Box>
      <Separator />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>
            Bastille pojawia się z duża falą marinsów tylko na
            początku
          </ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>1. Zanbato Slash </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_zanbato_slash_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_zenbato_slash_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_zenbato_slash_video}
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
        <Text>2. Birukatta - wave 3x8</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_birukatta_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_birukatta_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_birukatta_video}
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
          3. Furaingusodo - wave o różnej szerokości na 7 sqm w przód.
          Można unikać skosując w stronę Bastille.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_furaingusodo_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_furaingusodo_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_furaingusodo_video}
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
          4. Brute Force - obasz uderzający 2x. Pierwsza fala ma
          obszar 2x2 wokół Bastille, kolejna fala 4x4.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img
              src={skill_brute_force_one_range}
              alt="skill"
              className="mb-2"
            />
            <img src={skill_brute_force_two_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_brute_force_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_brute_force_video}
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
          5. Strawberry - spada on w miejscu ciena zadając dmg w
          obszarze 2x2 od niego. Dodatkowo bije 2x wave o zasięgu
          Birukatty lewo oraz prawo, lub góra i dół.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_strawberry_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_strawberry_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_strawberry_video}
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
          6. Bomb Attack - Bastille teleportuje się na środek mapy,
          pojawia się zielono kółko. Jest to jedyny bezpieczny obszar
          na którym wszyscy muszą stanąć. Każdy sqm na mapie poza tym
          okręgiem będzie bombardowany.{" "}
          <b>
            Ważne! Po spadnięciu bomb trzeba szybko uciekać od
            Bastilla w lini prostej ponieważ wykona atak obszarowy 3x3
            sqm wokół siebie.
          </b>
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_bomb_attack_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_bomb_attack_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_bomb_attack_video}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
        </Tabs>
      </Box>
      <Separator />
    </>
  );
};

export default Bastille;

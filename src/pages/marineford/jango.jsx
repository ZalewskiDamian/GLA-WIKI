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

import headingImage from "@/assets/images/heading/jango-heading.png";

//SKILL RANGE
import skill_stronger_range from "@/assets/images/marineford/jango/jango-stronger-range.png";
import skill_kira_chakram_range from "@/assets/images/marineford/jango/jango-kira-chakram-range.png";
import skill_dual_chakram_range from "@/assets/images/marineford/jango/jango-dual-chakram-range.png";
import skill_one_two_jango_range from "@/assets/images/marineford/jango/jango-one-two-jango-range.png";
//SKILL CAST
import skill_stronger_cast from "@/assets/images/marineford/jango/jango-stronger-cast.mp4";
import skill_kira_chakram_cast from "@/assets/images/marineford/jango/jango-kira-chakram-cast.mp4";
import skill_dual_chakram_cast from "@/assets/images/marineford/jango/jango-dual-chakram-cast.mp4";
import skill_one_two_jango_cast from "@/assets/images/marineford/jango/jango-one-two-jango-video.mp4";
//SKILL VIDEO
import skill_stronger_video from "@/assets/images/marineford/jango/jango-stronger-video.mp4";
import skill_kira_chakram_video from "@/assets/images/marineford/jango/jango-kira-chakram-video.mp4";
import skill_dual_chakram_video from "@/assets/images/marineford/jango/jango-dual-chakram-video.mp4";
import skill_one_two_jango_video from "@/assets/images/marineford/jango/jango-one-two-jango-video.mp4";

const Jango = () => {
  return (
    <>
      <Heading
        title="Jango"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Pełna walka:</Title>
      <Box>
        <Text>
          <a
            href="https://youtu.be/u5gBRm4RC8A?si=qTgI_u9tg1vJ2KKf&t=901"
            target="_blank"
          >
            https://youtu.be/u5gBRm4RC8A?si=qTgI_u9tg1vJ2KKf&t=901
          </a>
        </Text>
      </Box>
      <Separator />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>Jango na start przywołuje falę marinsów</ListItem>
          <ListItem>
            Następna fala marinsów pojawia się po 20 sekundach
          </ListItem>
          <ListItem>
            Kolejne fale marinsów będą się pojawiać co 45 sekundach
          </ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>
          1. Stronger! Stronger! - Jango buffuje marinsów dając im 25%
          ataku i 40 MS
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_stronger_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_stronger_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_stronger_video}
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
          2. Kira Chakram - Jango porusza się z czakramami wokół
          siebie na obszarze 5x5. Przed użyciem kręci się dwukrotnie.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_kira_chakram_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_kira_chakram_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_kira_chakram_video}
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
          3. Dual Chakram - Skill anty-range ale może rzucić na
          blisko. Jango puszcza chakram na obszarze 3x5
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_dual_chakram_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_dual_chakram_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_dual_chakram_video}
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
          4. 1,2, Jango! - Jango zaczyna mówić nazwę swojej
          umiejętnośći. Jeśli nikt nie zada mu obrażeń usypia
          wszystkich na 6 sekund.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_one_two_jango_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_one_two_jango_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_one_two_jango_video}
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

export default Jango;

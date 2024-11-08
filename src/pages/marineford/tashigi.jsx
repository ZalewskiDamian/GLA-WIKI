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

import headingImage from "@/assets/images/heading/tashigi-heading.png";

//SKILL RANGE
import skill_sakura_blossoms_range from "@/assets/images/marineford/tashigi/tashigi-sakura-blossoms-range.png";
import skill_senbon_sakura_range from "@/assets/images/marineford/tashigi/tashigi-senbon-sakura-range.png";
import skill_kiri_shigure_range from "@/assets/images/marineford/tashigi/tashigi-kiri-shigure-range.png";
import skill_usugasumi_range from "@/assets/images/marineford/tashigi/tashigi-kiri-shigure-range.png";
//SKILL CAST
import skill_sakura_blossoms_cast from "@/assets/images/marineford/tashigi/tashigi-sakura-blossoms-video.mp4";
import skill_senbon_sakura_cast from "@/assets/images/marineford/tashigi/tashigi-senbon-sakura-cast.mp4";
import skill_kiri_shigure_cast from "@/assets/images/marineford/tashigi/tashigi-kiri-shigure-cast.mp4";
import skill_usugasumi_cast from "@/assets/images/marineford/tashigi/tashigi-usugasumi-cast.mp4";
//SKILL VIDEO
import skill_sakura_blossoms_video from "@/assets/images/marineford/tashigi/tashigi-sakura-blossoms-video.mp4";
import skill_senbon_sakura_video from "@/assets/images/marineford/tashigi/tashigi-senbon-sakura-video.mp4";
import skill_kiri_shigure_video from "@/assets/images/marineford/tashigi/tashigi-kiri-shigure-video.mp4";
import skill_usugasumi_video from "@/assets/images/marineford/tashigi/tashigi-usugasumi-video.mp4";

const Tashigi = () => {
  return (
    <>
      <Heading
        title="Tashigi"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Pełna walka:</Title>
      <Box>
        <Text>
          <a
            href="https://youtu.be/u5gBRm4RC8A?si=iii5Zn0D3kH1yPv7&t=492"
            target="_blank"
          >
            https://youtu.be/u5gBRm4RC8A?si=iii5Zn0D3kH1yPv7&t=492
          </a>
        </Text>
      </Box>
      <Separator />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>
            Należy zachować spelle obszarowe, 20 sekund od pojawienia
            się bossa pojawia się fala Marinsów
          </ListItem>
          <ListItem>
            Kolejne fale marinsów pojawiają się co 90 sekund
          </ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>
          1. Sakura Blossoms - obszar 5x5, trzeba z niego wyjść zanim
          płatki sakury znikną
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_sakura_blossoms_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_sakura_blossoms_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_sakura_blossoms_video}
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
        <Text>2. Senbon Sakura - obszar 3x4</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_senbon_sakura_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_senbon_sakura_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_senbon_sakura_video}
              loop
              autoPlay
              controls
            />
          </TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>3. Kiri Shigure - obszar 3x5</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_kiri_shigure_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_kiri_shigure_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_kiri_shigure_video}
              loop
              autoPlay
              controls
            />
          </TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          4. Usugasumi - Tashigi dashuje 3x na wybrany cel przy użyciu
          umiejętności Kiri Shigure. Chuj wie jak to unikać
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_usugasumi_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_usugasumi_cast}
              loop
              autoPlay
              controls
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_usugasumi_video}
              loop
              autoPlay
              controls
            />
          </TabsContent>
        </Tabs>
      </Box>
    </>
  );
};

export default Tashigi;

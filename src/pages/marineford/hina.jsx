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

import headingImage from "@/assets/images/heading/hina-heading.png";

//SKILL RANGE
import skill_kuroori_supaiku_range from "@/assets/images/marineford/hina/hina-kuroori-supaiku-range.png";
import skill_rankyaku_range from "@/assets/images/marineford/hina/hina-rankyaku-range.png";
import skill_awase_baori_range from "@/assets/images/marineford/hina/hina-awase-baori-range.png";
import skill_anty_range_range from "@/assets/images/marineford/hina/hina-anty-range-range.png";
import skill_wave_range from "@/assets/images/marineford/hina/hina-wave-range.png";
import skill_cage_range from "@/assets/images/marineford/hina/hina-cage-range.png";

//SKILL CAST
import skill_kuroori_supaiku_cast from "@/assets/images/marineford/hina/hina-kuroori-supaiku-cast.mp4";
import skill_rankyaku_cast from "@/assets/images/marineford/hina/hina-rankyaku-cast.mp4";
import skill_awase_baori_cast from "@/assets/images/marineford/hina/hina-awase-baori-cast.mp4";
import skill_anty_range_kuroori_cast from "@/assets/images/marineford/hina/hina-anty-range-kuroori-cast.mp4";
import skill_wave_kuroori_cast from "@/assets/images/marineford/hina/hina-wave-kuroori-cast.mp4";
import skill_cage_kuroori_cast from "@/assets/images/marineford/hina/hina-cage-kuroori-cast.mp4";

//SKILL VIDEO
import skill_kuroori_supaiku_video from "@/assets/images/marineford/hina/hina-kuroori-supaiku-video.mp4";
import skill_rankyaku_video from "@/assets/images/marineford/hina/hina-rankyaku-cast.mp4";
import skill_awase_baori_video from "@/assets/images/marineford/hina/hina-awase-baori-cast.mp4";
import skill_anty_range_kuroori_video from "@/assets/images/marineford/hina/hina-anty-range-kuroori-cast.mp4";
import skill_wave_kuroori_video from "@/assets/images/marineford/hina/hina-wave-kuroori-video.mp4";
import skill_cage_kuroori_video from "@/assets/images/marineford/hina/hina-cage-kuroori-video.mp4";

const Hina = () => {
  return (
    <>
      <Heading
        title="Hina"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Pełna walka:</Title>
      <Box>
        <Text>
          <a
            href="https://youtu.be/u5gBRm4RC8A?si=-cE67lOJi2q8SWjc&t=3431"
            target="_blank"
          >
            https://youtu.be/u5gBRm4RC8A?si=-cE67lOJi2q8SWjc&t=3431
          </a>
        </Text>
      </Box>
      <Separator />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>Przywołuje na start falę marinsów</ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>
          1. Kuroori Supaiku - atak o przedstawionym obszarze. Stojąc
          na przeciwko Hiny trzeba odejść 5 sqm od niej.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_kuroori_supaiku_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_kuroori_supaiku_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_kuroori_supaiku_video}
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
          2. Rankyaku - wave o przedstawionym obszarze. Można uniknąć
          skosem na skos od Hiny.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_rankyaku_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_rankyaku_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_rankyaku_video}
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
          3. Awase Baori - wave 3x4. Bije też po bokach Hiny. Można
          uniknąć skosem na skos od Hiny.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_awase_baori_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_awase_baori_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_awase_baori_video}
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
          4. Anty Range Kuroori - obszar 3x3 na postacie dystansowe.
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
          <TabsContent value="cast">
            <video
              src={skill_anty_range_kuroori_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_anty_range_kuroori_video}
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
          5. Wave Kuroori - Hina wypuszcza fale kolców. Zadają one
          obrażenia naprzemiennie. Należy robić krok w miejsce
          pojawiających się prętów i wracać.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_wave_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_wave_kuroori_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_wave_kuroori_video}
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
          6. Cage Kuroori - Na mapie pojawia się klatka o wyznaczonym
          obszarze. Można z niej uciec przed zamknięciem używając
          dasha. Jeśli komuś się nie uda i będzie zamknięty wewnątrz
          będzie musiał unikać co sekundę kolców pojawiąjących się pod
          nogami.{" "}
          <b>
            WAŻNE! Reszta drużyny w tym czasie musi atakować Hinę, po
            zadaniu odpowiedniej ilośći obrażeń anuluje ona klatkę.
          </b>
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_cage_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_cage_kuroori_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_cage_kuroori_video}
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

export default Hina;

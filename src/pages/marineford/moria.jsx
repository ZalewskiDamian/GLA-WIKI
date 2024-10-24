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

import headingImage from "@/assets/images/heading/moria-heading.png";

//SKILLS RANGE
import skill_hasami_giri_range from "@/assets/images/marineford/moria/moria-hasami-giri-range.png";
import skill_hasami_giri_dash_range from "@/assets/images/marineford/moria/moria-hasami-giri-dash-range.png";
import skill_kitem_no_hasami_range from "@/assets/images/marineford/moria/moria-kitem-no-hasami-range.png";
import skill_tokage_wave_range from "@/assets/images/marineford/moria/moria-tokage-wave-range.png";
import skill_brick_bat_range from "@/assets/images/marineford/moria/moria-brick-bat-range.png";
import skill_kage_wo_yokase_range from "@/assets/images/marineford/moria/moria-kage-wo-yokase-range.png";
import skill_kage_no_tobira_range from "@/assets/images/marineford/moria/moria-kage-no-tobira-range.png";
import skill_tsuno_tokage_range from "@/assets/images/marineford/moria/moria-tsuno-tokage-range.png";
import skill_shadow_asgard_range from "@/assets/images/marineford/moria/moria-shadow-asgard-range.png";
import skill_brick_bat_wave_range from "@/assets/images/marineford/moria/moria-brick-bat-wave-range.png";

const Moria = () => {
  return (
    <>
      <Heading
        title="Moria"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>
            Po przywołaniu pojawia się fala marinsów zamienionych w
            zombie
          </ListItem>
          <ListItem>
            Moria posiada 2 formy, doppelman oraz swoją oryginalną
          </ListItem>
          <ListItem>
            Po zadaniu odpowiedniej ilości dmg w doppelmana, Moria
            zmienia się w oryginalną formę, która będzie trwała 45
            sekund
          </ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności - Doppelman:</Title>
      <Box>
        <Text>
          1. Hasami Giri - moria uderze przed siebie na obszarze 3x3
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_hasami_giri_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          2. Hasami Giri Dash - moria uderze przed siebie 5x Hasami
          Giri. Nie należy stać naprzeciw Morii. Przed użyciem
          umiejętności Moria kuca pochylając się do przodu.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_hasami_giri_dash_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          3. Kitem No Hasami - moria kręci się zadając obrażenia w
          obszarze 3x3 od niego.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_kitem_no_hasami_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          4. Tokage Wave - moria przywołuje loso cienie zadające
          obszar 3x3.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_tokage_wave_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Title>Umiejętności - Forma Normalna:</Title>
      <Box>
        <Text>
          1. Brick Bat - wave o pokazanym obszarze. Zadaje obrażenia w
          3 seriach.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_brick_bat_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>2. Kage Wo Yokase - wave o obszarze 5x4.</Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_kage_wo_yokase_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          3. Tsuno Tokage - Moria wykonuje w pierwszej kolejności
          Dash. Z miejsca w którym użył umiejętności powstaje Tsuno
          Tokage.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img
              src={skill_kage_no_tobira_range}
              alt="skill"
              className="mb-2"
            />
            <img src={skill_tsuno_tokage_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          4. Shadow Asgard - Moria zadaje duże obrażenia na obszarze
          9x8.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_shadow_asgard_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
      <Separator />
      <Box>
        <Text>
          5. Brick Bat Wave - Moria tworzy 3x okręgi o wyznaczonym
          obszarze
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_brick_bat_wave_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="video">video</TabsContent>
        </Tabs>
      </Box>
    </>
  );
};

export default Moria;

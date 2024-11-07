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

import headingImage from "@/assets/images/heading/brannew-heading.png";

//SKILLS RANGE
import skill_gatling_gun_range from "@/assets/images/marineford/brannew/brannew-gatling-gun-range.png";
import skill_haki_punch_range from "@/assets/images/marineford/brannew/brannew-haki-punch-range.png";
import skill_haki_stomp_range from "@/assets/images/marineford/brannew/brannew-haki-stomp-range.png";
import skill_jump_range from "@/assets/images/marineford/brannew/brannew-jump-range.png";
import skill_marine_hold_range from "@/assets/images/marineford/brannew/brannew-marine-hold-range.png";
import skill_onigumo_range from "@/assets/images/marineford/brannew/brannew-onigumo-range.png";

//SKILLS CAST
import skill_gataling_gun_cast from "@/assets/images/marineford/brannew/brannew-gataling-gun-cast.mp4";
import skill_haki_punch_cast from "@/assets/images/marineford/brannew/brannew-haki-punch-cast.mp4";
import skill_jump_cast from "@/assets/images/marineford/brannew/brannew-jump-cast.mp4";
import skill_marine_hold_cast from "@/assets/images/marineford/brannew/brannew-marine-hold-cast.mp4";
import skill_onigumo_cast from "@/assets/images/marineford/brannew/brannew-onigumo-cast.mp4";

//SKILLS VIDEO
import skill_gataling_gun_video from "@/assets/images/marineford/brannew/brannew-gataling-gun-video.mp4";
import skill_haki_punch_video from "@/assets/images/marineford/brannew/brannew-haki-punch-video.mp4";
import skill_jump_video from "@/assets/images/marineford/brannew/brannew-jump-video.mp4";
import skill_marine_hold_video from "@/assets/images/marineford/brannew/brannew-marine-hold-video.mp4";
import skill_onigumo_video from "@/assets/images/marineford/brannew/brannew-onigumo-video.mp4";

const Brannew = () => {
  return (
    <>
      <Heading
        title="Brannew"
        description="Jeden z początkowych bosów pojawiających się na 10 fali"
        imageSrc={headingImage}
      />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>
            Podczas bicia bossa należy trzymać się blisko siebie,
            ponieważ może zaatakować marinsami którzy nas trzymają
          </ListItem>
          <ListItem>
            Nie wchdzić pomiędzy osobę która jest atakowana Gataling
            Gunem
          </ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>
          1. Gatling Gun - Kiedy na postaci pojawia się celownik musi
          ona uciekać slalomem od Brannewa. Obszar bicia jest między
          celem a Brannewem, dlatego nie można wchodzić między
          atakowaną osobę.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_gatling_gun_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_gataling_gun_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_gataling_gun_video}
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
          2. Haki Punch & Jump - Brannew pokrywa ręce haki. Atak
          sekwencyjny. Brannew uderza 2x pięścią oraz skacze zadając
          obrażenia na obszarze 3x3 od niego.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img
              src={skill_haki_punch_range}
              alt="skill"
              className="mb-2"
            />
            <img src={skill_haki_stomp_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_haki_punch_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_haki_punch_video}
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
          3. Jump - Brannew skacze do góry. Ląduje w miejscu w którym
          jest cień zadając obrażenia na obszarze 3x3 od niego.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_jump_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_jump_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_jump_video}
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
          4. Marine Hold - Brannew przywołuje 3 marinsów którzy
          trzymają postacie. Dlatego warto trzymać się obok siebie
          żeby za pomocą obszarowych umiejętności uwolnić wszystkich
          na raz. Jeśli się to nie uda należy poczekać aż na jednej z
          postaci pojawi się celownik - ta osoba będzie atakowana
          pierwsza. Postacie mele muszą uważać ponieważ obszar bicia
          Gatling Guna bije też wokół celu. Używa skilla co 75 sekund.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_marine_hold_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_marine_hold_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_marine_hold_video}
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
          5. Onigumo - Brannew przywołuje Onigumo, który kręci się
          dookoła niego. Należy odejść od Brannewa na 5 sqm.
        </Text>
        <Tabs defaultValue="range" className="w-[1000px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="range">
            <img src={skill_onigumo_range} alt="skill" />
          </TabsContent>
          <TabsContent value="cast">
            <video
              src={skill_onigumo_cast}
              loop
              autoPlay
              controls
              muted
            />
          </TabsContent>
          <TabsContent value="video">
            <video
              src={skill_onigumo_video}
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

export default Brannew;

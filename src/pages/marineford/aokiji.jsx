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

import headingImage from "@/assets/images/heading/aokiji-heading.png";

const Aokiji = () => {
  return (
    <>
      <Heading
        title="Aokiji"
        description="Jeden z bosów pojawiających się na 25 fali"
        imageSrc={headingImage}
      />
      <Title>Informacje:</Title>
      <Box>
        <List>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
          <ListItem>test</ListItem>
        </List>
      </Box>
      <Separator />
      <Title>Umiejętności:</Title>
      <Box>
        <Text>1. Spell</Text>
        <Tabs defaultValue="range" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="range">Range</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
            <TabsTrigger value="gif">GIF</TabsTrigger>
          </TabsList>
          <TabsContent value="range">Range</TabsContent>
          <TabsContent value="cast">Cast</TabsContent>
          <TabsContent value="gif">Gif</TabsContent>
        </Tabs>
      </Box>
    </>
  );
};

export default Aokiji;

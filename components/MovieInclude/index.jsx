import { FormLabel } from "@chakra-ui/form-control";
import { Text, VStack } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";


export function MovieInclude() {

  return (
    <form>
      <VStack>
        <FormLabel htmlFor="movie" mb={0}>
          <Text>映画も含む→</Text>
        </FormLabel>
        <Switch id="movie" size='md' colorScheme='teal' />
      </VStack>
    </form>
  );
}
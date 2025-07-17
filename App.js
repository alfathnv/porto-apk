import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { 
  Provider as PaperProvider, 
  Appbar, 
  Card, 
  Title, 
  Paragraph, 
  Button, 
  Chip,
  Avatar,
  List,
  Divider,
  FAB,
  Portal,
  Modal,
  TextInput,
  useTheme
} from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          
          {/* App Bar */}
          <Appbar.Header>
            <Appbar.Content title="React Native Paper Demo" subtitle="Material Design Components" />
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <Appbar.Action icon="dots-vertical" onPress={() => {}} />
          </Appbar.Header>

          {/* Content */}
          <ScrollView style={{ flex: 1, padding: 16 }}>
            {/* Welcome Card */}
            <Card style={{ marginBottom: 16 }}>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Content>
                <Title>Welcome to React Native Paper! 🎉</Title>
                <Paragraph>
                  This app demonstrates Material Design components using React Native Paper.
                  You can create beautiful UIs with pre-built components that follow Material Design guidelines.
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => {}}>Learn More</Button>
                <Button mode="contained" onPress={() => {}}>Get Started</Button>
              </Card.Actions>
            </Card>

            {/* Button Examples */}
            <Card style={{ marginBottom: 16 }}>
              <Card.Content>
                <Title>Button Components</Title>
                <Paragraph>Different button styles and variants</Paragraph>
              </Card.Content>
              <Card.Content>
                <View style={{ gap: 8, marginBottom: 8 }}>
                  <Button mode="contained" onPress={() => {}}>
                    Contained Button
                  </Button>
                  <Button mode="outlined" onPress={() => {}}>
                    Outlined Button
                  </Button>
                  <Button mode="text" onPress={() => {}}>
                    Text Button
                  </Button>
                  <Button mode="contained-tonal" onPress={() => {}}>
                    Tonal Button
                  </Button>
                  <Button mode="elevated" onPress={() => {}}>
                    Elevated Button
                  </Button>
                </View>
              </Card.Content>
            </Card>

            {/* Chip Examples */}
            <Card style={{ marginBottom: 16 }}>
              <Card.Content>
                <Title>Chip Components</Title>
                <Paragraph>Interactive chips for selection and display</Paragraph>
              </Card.Content>
              <Card.Content>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                  <Chip icon="information" onPress={() => {}}>Info</Chip>
                  <Chip icon="check" onPress={() => {}}>Success</Chip>
                  <Chip icon="alert" onPress={() => {}}>Warning</Chip>
                  <Chip icon="close" onPress={() => {}}>Error</Chip>
                  <Chip icon="star" onPress={() => {}}>Favorite</Chip>
                  <Chip icon="heart" onPress={() => {}}>Love</Chip>
                </View>
              </Card.Content>
            </Card>

            {/* List Examples */}
            <Card style={{ marginBottom: 16 }}>
              <Card.Content>
                <Title>List Components</Title>
                <Paragraph>Material Design list items</Paragraph>
              </Card.Content>
              <List.Section>
                <List.Item
                  title="First Item"
                  description="This is a description"
                  left={props => <List.Icon {...props} icon="folder" />}
                  right={props => <List.Icon {...props} icon="chevron-right" />}
                />
                <Divider />
                <List.Item
                  title="Second Item"
                  description="Another description"
                  left={props => <List.Icon {...props} icon="file" />}
                  right={props => <List.Icon {...props} icon="chevron-right" />}
                />
                <Divider />
                <List.Item
                  title="Third Item"
                  description="Yet another description"
                  left={props => <List.Icon {...props} icon="image" />}
                  right={props => <List.Icon {...props} icon="chevron-right" />}
                />
              </List.Section>
            </Card>

            {/* Avatar Examples */}
            <Card style={{ marginBottom: 16 }}>
              <Card.Content>
                <Title>Avatar Components</Title>
                <Paragraph>Different avatar styles and sizes</Paragraph>
              </Card.Content>
              <Card.Content>
                <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                  <Avatar.Text size={24} label="JD" />
                  <Avatar.Text size={40} label="AB" />
                  <Avatar.Text size={56} label="CD" />
                  <Avatar.Icon size={40} icon="account" />
                  <Avatar.Image size={40} source={{ uri: 'https://picsum.photos/200' }} />
                </View>
              </Card.Content>
            </Card>

            {/* Text Input Example */}
            <Card style={{ marginBottom: 16 }}>
              <Card.Content>
                <Title>Text Input</Title>
                <Paragraph>Material Design text input with different modes</Paragraph>
              </Card.Content>
              <Card.Content>
                <TextInput
                  label="Outlined Input"
                  mode="outlined"
                  value={text}
                  onChangeText={text => setText(text)}
                  style={{ marginBottom: 8 }}
                />
                <TextInput
                  label="Flat Input"
                  mode="flat"
                  value={text}
                  onChangeText={text => setText(text)}
                  style={{ marginBottom: 8 }}
                />
                <TextInput
                  label="Password Input"
                  mode="outlined"
                  secureTextEntry
                  right={<TextInput.Icon icon="eye" />}
                />
              </Card.Content>
            </Card>
          </ScrollView>

          {/* Floating Action Button */}
          <Portal>
            <FAB
              icon="plus"
              style={{
                position: 'absolute',
                margin: 16,
                right: 0,
                bottom: 0,
              }}
              onPress={showModal}
            />
          </Portal>

          {/* Modal */}
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{
              backgroundColor: 'white',
              padding: 20,
              margin: 20,
              borderRadius: 8,
            }}>
              <Title>Add New Item</Title>
              <Paragraph>This is a modal dialog using React Native Paper.</Paragraph>
              <View style={{ marginTop: 16, gap: 8 }}>
                <Button mode="contained" onPress={hideModal}>
                  Close
                </Button>
              </View>
            </Modal>
          </Portal>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}


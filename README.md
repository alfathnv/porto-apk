# Porto APK - React Native with Paper

A React Native 0.79 project built with Expo SDK 53 and React Native Paper for Material Design components.

## 🚀 Features

- **React Native 0.79** - Latest stable version
- **Expo SDK 53** - Latest Expo SDK with enhanced features
- **React Native Paper** - Material Design component library
- **Material Design** - Beautiful, consistent UI components
- **Cross-platform** - Works on Android, iOS, and Web
- **Safe Area Support** - Proper handling of device safe areas

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm 18.18.0 (recommended)
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd porto-apk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## 📱 Running the App

### Android
```bash
npm run android
```

### iOS (macOS only)
```bash
npm run ios
```

### Web
```bash
npm run web
```

## 🎨 React Native Paper Components

This project uses React Native Paper to provide Material Design components. Here's how to use them:

### Basic Setup
```jsx
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {/* Your app content */}
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
```

### Available Components

#### Buttons
```jsx
import { Button } from 'react-native-paper';

<Button mode="contained" onPress={() => {}}>
  Contained Button
</Button>
<Button mode="outlined" onPress={() => {}}>
  Outlined Button
</Button>
<Button mode="text" onPress={() => {}}>
  Text Button
</Button>
```

#### Cards
```jsx
import { Card, Title, Paragraph } from 'react-native-paper';

<Card>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Content>
    <Title>Card Title</Title>
    <Paragraph>Card content goes here</Paragraph>
  </Card.Content>
  <Card.Actions>
    <Button onPress={() => {}}>Action</Button>
  </Card.Actions>
</Card>
```

#### App Bar
```jsx
import { Appbar } from 'react-native-paper';

<Appbar.Header>
  <Appbar.Content title="App Title" subtitle="Subtitle" />
  <Appbar.Action icon="magnify" onPress={() => {}} />
  <Appbar.Action icon="dots-vertical" onPress={() => {}} />
</Appbar.Header>
```

#### Text Input
```jsx
import { TextInput } from 'react-native-paper';

<TextInput
  label="Email"
  mode="outlined"
  value={email}
  onChangeText={setEmail}
/>
```

#### Chips
```jsx
import { Chip } from 'react-native-paper';

<Chip icon="information" onPress={() => {}}>
  Info Chip
</Chip>
```

#### Lists
```jsx
import { List, Divider } from 'react-native-paper';

<List.Item
  title="List Item"
  description="Description"
  left={props => <List.Icon {...props} icon="folder" />}
  right={props => <List.Icon {...props} icon="chevron-right" />}
/>
<Divider />
```

#### Floating Action Button
```jsx
import { FAB, Portal } from 'react-native-paper';

<Portal>
  <FAB
    icon="plus"
    style={{
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    }}
    onPress={() => {}}
  />
</Portal>
```

### Component Examples in the App

The app includes demonstrations of:

- **App Bar** - Material Design app bar with actions
- **Cards** - Content cards with covers, content, and actions
- **Buttons** - All button variants (contained, outlined, text, tonal, elevated)
- **Chips** - Interactive chips with icons
- **Lists** - Material Design list items with icons
- **Avatars** - Different avatar types and sizes
- **Text Inputs** - Various input modes and styles
- **FAB** - Floating action button
- **Modal** - Modal dialogs using Portal

## 📁 Project Structure

```
porto-apk/
├── App.js                 # Main app component with Paper components
├── assets/               # Images, fonts, etc.
├── package.json          # Dependencies and scripts
└── app.json             # Expo configuration
```

## 🎯 Key Dependencies

- `react-native`: 0.79.5
- `expo`: ~53.0.17
- `react-native-paper`: ^5.12.3
- `react-native-safe-area-context`: ^4.8.2
- `@expo/vector-icons`: ^14.0.0

## 🚀 Development Tips

1. **Theme Customization**: Customize the Material Design theme using `PaperProvider`
2. **Icons**: Use Material Design icons from `@expo/vector-icons`
3. **Safe Areas**: Always wrap your app with `SafeAreaProvider` and `SafeAreaView`
4. **Portals**: Use Portal for modals and overlays
5. **Accessibility**: React Native Paper components include built-in accessibility features

## 🎨 Theming

You can customize the Material Design theme:

```jsx
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};

<PaperProvider theme={theme}>
  {/* Your app */}
</PaperProvider>
```

## 📚 Resources

- [React Native Paper Documentation](https://callstack.github.io/react-native-paper/)
- [Material Design Guidelines](https://material.io/design)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. 
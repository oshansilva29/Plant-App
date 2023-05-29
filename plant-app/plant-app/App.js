// Import necessary dependencies
import React from 'react';
import { StyleSheet, Text, View, Image, Button,TextInput,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




//welcomepage 
const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Plant App</Text>
      <Image
     style={styles.img}
        source={require('./assets/welcome.jfif')}
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> LETS START </Text>
      </TouchableOpacity>

      </View>
      
      );
};














// Login screen component
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Image source={require('./assets/Farfugium-japonicum.jpg')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
     
      
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      
    </View>
  );
};


//orchid
//bonsai pln detils
const PlantDetailsScreens = ({ navigation }) => {
  const plant = {
    name: 'Serissa fotoproz',
    image: require('./assets/cymbidiumorchid.jfif'),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plant Details</Text>
      <Image source={plant.image} style={styles.image} />
      <Text style={styles.plantName}>{plant.name}</Text>
      <Text style={styles.plantDescription}>{plant.description}</Text>
     

       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      
     
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.buttonText}>Proceed to Chectout</Text>
      </TouchableOpacity>
    </View>
  );
};











// Plant list screen component



//////////
const OrchidListScreen = ({ navigation }) => {
  // Bonsai plants data
  const OrchidPlants = [
    {
      id: 1,
      name: 'Cymbidium Orchid',
      description: 'Cymbidium, commonly known as boat orchids, is a genus of evergreen flowering plants in the orchid family Orchidaceae. Orchids in this genus are epiphytic, lithophytic, terrestrial or rarely leafless saprophytic herbs usually with pseudobulbs.There are usually between three and twelve leaves arranged in two ranks on each pseudobulb or shoot and lasting for several years. From one to a large number of flowers are arranged on an unbranched flowering stem arising from the base of the pseudobulb',
      image: require('./assets/cymbidiumorchid.jfif'),
    },
    {
      id: 2,
      name: 'Vanda',
      description: 'Vanda, abbreviated in the horticultural trade  is a genus in the orchid family, Orchidaceae. There are about 87 species,and the genus is commonly cultivated for the marketplace. This genus and its allies are considered to be among the most specifically adapted of all orchids within the Orchidaceae. The genus is highly prized in horticulture for its showy, fragrant, long-lasting, and intensely colorful flowers. Vanda species are widespread across East Asia, Southeast Asia, and New Guinea, with a few species extending into Queensland and some of the islands of the western Pacific.',
      image: require('./assets/vanda.jfif'),
    },
    {
      id: 3,
      name: 'Venus slipper',
      description:'Venus slipper, is a genus of the lady slipper orchid subfamily Cypripedioideae of the flowering plant family Orchidaceae. The genus comprises some 80 accepted taxa including several natural hybrids. The genus is native to Southeast Asia, the Indian Subcontinent, southern China, New Guinea and the Solomon and Bismarck Islands.',
      image: require('./assets/venus.jfif'),
    },
    {
       id: 4,
      name: 'Mokara',
      description: 'Mokara orchids are manmade orchids that can’t be found in nature. This group of orchids were created by cross breeding orchids of the genera Ascocentrum, Arachnis and Vanda. Different Mokara orchids where created using different species within these genera. The first Mokara orchid was presented to the world in Singapore in 1969. Since then countless other types have been developed.',
      image: require('./assets/Mokara.jfif'),
    },
    {
       id: 5,
      name: 'Stanhopea',
      description: 'Stanhopea wardii also called as Wards Stanhopea, Stanhopea amoena, Stanhopea anfracta, Stanhopea aurea, Stanhopea inodora var. amoena, Stanhopea peruviana, Stanhopea wardii var.aurantiaca, Stanhopea wardii var aurea, Stanhopea wardii var. aureum, Stanhopea wardii var. flavescens, Stanhopea wardii var.Stanhopea wardii is native to Nicaragua, Costa Rica, Panama, Colombia, and Venezuela. It grows on trees and on rocks in warm to cool cloud forests at elevations of 800-1600 meters above sea level.',
      image: require('./assets/stanhopewardii.jpg'),
    },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orchid Plants</Text>
      {OrchidPlants.map((plant) => (
        <View key={plant.id} style={styles.plantItem}>
          <Image source={plant.image} style={styles.image} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantDescription}>{plant.description}</Text>
        </View>
      ))}
     
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlantDetails')}>
        <Text style={styles.buttonText}>View Orchid Details</Text>
      </TouchableOpacity>


       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
     
    </View>
  );
};






const CatcusListScreen = ({ navigation }) => {
  // Bonsai plants data
  const CatcusPlants = [
    {
      id: 1,
      name: 'Parodia Catcus',
      description: 'Parodia is a genus of flowering plants in the family Cactaceae, native to the eastern slopes of the Andes in northwestern Argentina and southwestern Bolivia and in the lowland pampas regions of northeastern Argentina,',
      image: require('./assets/Parodia_microsperma.jpg'),
    },
    {
      id: 2,
      name: 'Rattail Cactus',
      description: 'attail cactus, is a species of flowering plant in the cactus family Cactaceae, and is the most cultivated species in the genus Aporocactus. Due to its ease of cultivation and attractive floral displays, it is often grown as an ornamental potted plant.',
      image: require('./assets/RatsTailCactus.jpg'),
    },
    {
      id: 3,
      name: 'Gymnocalycium',
      description: 'Gymnocalycium, commonly called chin cactus, is a genus of about 70 South American species of cactus. The genus name Gymnocalycium (from Greek, "naked calyx") refers to the flower buds bearing no hair or spines.Their main area of distribution is Argentina, part of Uruguay, Paraguay, southern Bolivia and part of Brazil. Most species are rather small varying from 4 to 15 centimetres in size. In cultivation they are popular for their easy flowering habits, and the flowers are generally brightly coloured. Where temperatures fall below 10 °C (50 °F) they must be cultivated under glass with heat.',
      image: require('./assets/Gymjfif.jfif'),
    },
    {
       id: 4,
      name: 'Rebutia',
      description: 'Rebutia is a genus of flowering plants in the family Cactaceae, native to Bolivia and Argentina. They are generally small, colorful cacti, globular in form, which freely produce flowers that are relatively large in relation to the body. They have no distinctive ribs, but do have regularly arranged small tubercles. They are considered fairly easy to grow and they may produce large quantities of seeds that germinate freely around the parent plant.',
      image: require('./assets/rebutia.jfif'),
    },
    {
       id: 5,
      name: 'Cephalocereus',
      description: 'Cephalocereus senilis is a tall, columnar species with clusters of stems that may grow to 5–15 m tall; the individual stems are usually unbranched, being unable to withstand the weight of side branches adequately. The most striking feature is the shaggy coat of long, white hairs suggestive of unkempt hair on an old man. The coat is a particularly striking silvery white on the young cactus; as the plant ages the stem begins to lose its covering. The flowers are red, yellow, or white, though the plant may not flower until 10–20 years old.',
      image: require('./assets/cephalo.jfif'),
    },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Catcus Plants</Text>
      {CatcusPlants.map((plant) => (
        <View key={plant.id} style={styles.plantItem}>
          <Image source={plant.image} style={styles.image} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantDescription}>{plant.description}</Text>
        </View>
      ))}
      
      
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CatcusDetails')}>
        <Text style={styles.buttonText}>View Catcus Details</Text>
      </TouchableOpacity>
      
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

       
  
      
    </View>
  );
};

/////////////////////////////////////////////////////////////////////////////
//bonsai
// Bonsai list screen component
const BonsaiListScreen = ({ navigation }) => {
  // Bonsai plants data
  const bonsaiPlants = [
    {
      id: 1,
      name: 'Juniper Bonsai',
      description: 'The Juniper Bonsai is an evergreen coniferous tree that belongs to the cypress family. It is one of the most popular bonsai species and is known for its graceful, sweeping branches and small, needle-like leaves.',
      image: require('./assets/juniper.jfif'),
    
    },
    {
      id: 2,
      name: 'Ficus Bonsai',
      description: 'The Ficus Bonsai, also known as the Ficus benjamina, is a popular choice for bonsai enthusiasts. It has small, glossy leaves and a thick, gnarled trunk that adds character to the tree.',
      image: require('./assets/ficus-bonsai.jpg'),
    },
    {
      id: 3,
      name: 'Japanese maple',
      description: 'Acer palmatum, commonly known as Japanese maple,[3] palmate maple,or smooth Japanese maple[5] (Japanese: irohamomiji, or momiji, is a species of woody plant native to Japan, Korea, China, eastern Mongolia, and southeast Russia.[6] Many different cultivars of this maple have been selected and they are grown worldwide for their large variety of attractive forms, leaf shapes, and spectacular colors',
      image: require('./assets/japan.jfif'),
    },

    {
      id: 4,
      name: 'Bougainvillea ',
      description: 'Bougainvillea is a genus of thorny ornamental vines, bushes, and treesbelonging to the four o clock family, Nyctaginaceae. It is native to eastern South America, found from Brazil, west to Peru, and south to southern Argentina. Different authors accept from 4 to 22 species in the genus',
      image: require('./assets/bonsai-species-azalea-bonsai-heike.jpg'),
    },
    {
      id: 5,
      name: 'Serissa ',
      description: 'The Serissa is an evergreen or semi-evergreen tree with fine oval, shiny green leaves. Foliage and roots have an unpleasant smell if damaged. Except for its lovely flowers, the serissa is valued for its fine ramification and rough grey bark.The serissa is not easy to care for and better suitable for experienced growers because the tree is very sensitive to changes in location and temperature. The correct name of this tree is "Serissa japonica" but most people still use the old name “Serissa foetida”.',
      image: require('./assets/bonsai-species-serissa-fotoproze.jpg'),
    },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonsai Plants</Text>
      {bonsaiPlants.map((plant) => (
        <View key={plant.id} style={styles.plantItem}>
          <Image source={plant.image} style={styles.image} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantDescription}>{plant.description}</Text>
        </View>
      ))}
     
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DescriptionScreen')}>
        <Text style={styles.buttonText}>View Bonsai Details</Text>
      </TouchableOpacity>
      
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};



// Signup screen component
const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
  <TextInput  style={styles.input}
        placeholder="Full name"
        ></TextInput>

        <TextInput  style={styles.input}
        placeholder="Email"
        ></TextInput>
        <TextInput  style={styles.input}
        placeholder="Password"
        ></TextInput>
         <TextInput  style={styles.input}
        placeholder=" Re-Enter Password"
        ></TextInput>
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

// Home screen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlantList')}>
        <Text style={styles.buttonText}>Herbal Plants</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('bonsai')}>
        <Text style={styles.buttonText}>Bonsai Plants</Text>
      </TouchableOpacity>
     
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Catcus')}>
        <Text style={styles.buttonText}>Catcus Plants</Text>
      </TouchableOpacity>
    
       
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Orchid')}>
        <Text style={styles.buttonText}>Orchid Plants</Text>
      </TouchableOpacity>
    </View>
  );
};

// Plant list screen component
const PlantListScreen = ({ navigation }) => {
  const plants = [
    {
      id: 1,
      name: 'AloeVera', 
      description: 'Aloe vera is a succulent plant species of the genus Aloe. It is widely distributed, and is considered an invasive species in many world regions. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world.It is cultivated for commercial products, mainly as a topical treatment used over centuries.The species is attractive for decorative purposes, and succeeds indoors as a potted plant.',
image :require('./assets/UK_advice-gardening-grow-your-own-aloe-vera-plant-care_main.jpg'),

    },
    {
      id: 2,
      name: 'Kohomba',
      description: 'Azadirachta indica, commonly known as margosa, neem, nimtree or Indian lilac,[3] is a tree in the mahogany family Meliaceae. It is one of two species in the genus Azadirachta. It is native to the northeast of the Indian subcontinent and to Indochina, but is naturalized and grown around the world in tropical and subtropical areas. Its fruits and seeds are the source of neem oil. .',
      image: require('./assets/kohoba.jpg'),
    },
    {
      id: 3,
      name: 'Calendula',
      description: ' Calendula officinalis, the pot marigold, common marigold, ruddle Marys gold or Scotch marigold, is a flowering plant in the daisy family Asteraceae. It is probably native to southern Europe, though its long history of cultivation makes its precise origin unknown, and it may possibly be of garden origin. It is also widely naturalised farther north in Europe  and elsewhere in warm temperate regions of the world',
      image: require('./assets/images.jfif'),
     
    },
    {
      id: 4,
      name: 'Oregano',
      description: ' Oregano ( Origanum vulgare) is a species of flowering plant in the mint family Lamiaceae. It was native to the Mediterranean region, but widely naturalised elsewhere in the temperate Northern Hemisphere.Oregano is a woody perennial plant, growing 20–80 cm (8–31 in) tall, with opposite leaves 1–4 cm  long',
      image: require('./assets/herb-profile-oregano-1761786-4-d1197219842c4d21b00ae50ca95d1c12.jpg'),
     
    },
    {
      id: 5,
      name: 'Calendula',
      description: ' Rauvolfia serpentina, the Indian snakeroot, devil pepper, or serpentine wood,[4] is a species of flower in the milkweed family Apocynaceae.It is native to the Indian subcontinent and East Asia (from India to Indonesia).Rauvolfia is a perennial undershrub widely distributed in India in the sub-Himalayan regions up to 1,000 metres.',
      image: require('./assets/download.jfif'),
     
    },
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Herbal Plants</Text>
      {plants.map((plant) => (
        <View key={plant.id} style={styles.plantItem}>
          <Image source={plant.image} style={styles.image} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantDescription}>{plant.description}</Text>
        </View>
      ))}
     

       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlantDetails')}>
        <Text style={styles.buttonText}>View Plant Details</Text>
      </TouchableOpacity>
      

       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};


// Plant details screen component
const PlantDetailsScreen = ({ navigation }) => {
  const plant = {
    name: 'Serissa fotoproze',
    description: '',
    image: require('./assets/bonsai-species-serissa-fotoproze.jpg'),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plant Details</Text>
      <Image source={plant.image} style={styles.image} />
      <Text style={styles.plantName}>{plant.name}</Text>
      <Text style={styles.plantDescription}>{plant.description}</Text>
     

       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      
     
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.buttonText}>Proceed to Chectout</Text>
      </TouchableOpacity>
    </View>
  );
};

// Checkout screen component
const CheckoutScreen = ({ navigation }) => {
  const plant = {
    name: 'Aloe Vera',
    image: require('./assets/UK_advice-gardening-grow-your-own-aloe-vera-plant-care_main.jpg'),
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checkout</Text>
      <Image source={plant.image} style={styles.image} />
      
      <Text style={styles.plantName}>{plant.name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Details"

      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
  
      />

      <TextInput
        style={styles.input}
        placeholder="Delivery Address"
    
      />
     
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    
     
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThankYou')}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

// Thank you screen component
const ThankYouScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank You</Text>
     <Image
     style={styles.img}
        source={require('./assets/bonsai-species-serissa-fotoproze.jpg')}
      />
    
     
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomePage}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlantList" component={PlantListScreen} />
        <Stack.Screen name="PlantDetails" component={PlantDetailsScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />
        <Stack.Screen name="bonsai" component={BonsaiListScreen}/>
        <Stack.Screen name="Catcus" component={CatcusListScreen}/>
        <Stack.Screen name ="Orchid" component={OrchidListScreen}/>
        <Stack.Screen name="plantdetailsScreens" component={PlantDetailsScreens}/>
        
           
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#66ff66',
   
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignItems:'center',
    justifyContent:'center',
  


  },
  plantItem: {
    marginBottom: 20,
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  plantDescription: {
    fontSize: 16,
    color: 'gray',
  },
  logo:{
    width: 200,
    height: 200,
    marginBottom: 30,
    borderRadius:25,


  },
 
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:25,
  },

  img:{
alignItems:'center',
width:200,
height:200,
marginBottom:10,
borderRadius:20,




  },
 button: {
    width: '70%',
    height: 40,
    backgroundColor: '#009900',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius:25,
    paddingTop:5,
 },
 title:{
fontSize:20,
 fontWeight: 'bold',
 alignContent:'center',
 paddingBottom:30,

 },
 buttonText:{
fontWeight:'bold',
paddingBottom:10,


 },

  
});

export default App;


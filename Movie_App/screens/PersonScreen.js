import { View, Text, Dimensions, Platform , ScrollView,SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';
import MovieList from '../components/movieList';
import Loading from '../components/loading';


var {width,height} = Dimensions.get('window'); 
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? "" : "my-3";

export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1,2,3,4]);
    const [loading, setLoading] = useState(false);
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back button */}
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center px-4" +
          verticalMargin
        }
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1 ml-3"
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          className="mr-3"
        >
          <HeartIcon size="35" color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Person details */}
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                source={require("../assets/images/moviePoster1.png")}
                style={{ height: height * 0.43, width: width * 0.74 }}
              />
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">
              Keanu Reeves
            </Text>
            <Text className="text-base text-neutral-500 text-center">
              London, United Kingdom
            </Text>
          </View>
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">1999-07-13</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">Action</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">64.23</Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              Ram Pothineni (born 15 May 1988) is an Indian actor who primarily
              works in Telugu films. He made his acting debut with the box
              office success Devadasu (2006), for which he won Filmfare Award
              for Best Male Debut – South. He has two Filmfare Award South and
              one SIIMA Awards to his credit.Ram Pothineni (born 15 May 1988) is
              an Indian actor who primarily works in Telugu films. He made his
              acting debut with the box office success Devadasu (2006), for
              which he won Filmfare Award for Best Male Debut – South. He has
              two Filmfare Award South and one SIIMA Awards to his credit.
            </Text>
          </View>
          {/* Movies */}
          <MovieList title={"Movies"} hideSeeAll={true} data={personMovies} />
        </View>
      )}
    </ScrollView>
  );
}
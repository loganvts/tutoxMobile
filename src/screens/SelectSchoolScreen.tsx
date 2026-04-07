import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectSchool'>;

export default function SelectSchoolScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedSchool, setSelectedSchool] = React.useState<number | null>(0);

  const schools = [
    { id: 0, name: 'School Name', schoolId: '123456', address: '842 Gulf Street Rosedale, NY 11422' },
    { id: 1, name: 'School Name', schoolId: '12345', address: '842 Gulf Street Rosedale, NY 11423' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center">
        {/* Card Container inline styles to emulate drop-shadow since NativeWind handles it slightly differently per-platform */}
        <View className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100" style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 5,
        }}>
          {/* Header */}
          <Text className="text-2xl font-extrabold text-center text-textMain mb-2">Select School</Text>
          <Text className="text-sm text-center text-textSub mb-8">Choose a school proceed</Text>

          {/* School List */}
          <View>
            {schools.map((school, index) => (
              <TouchableOpacity
                key={school.id}
                onPress={() => setSelectedSchool(school.id)}
                className={`border rounded-2xl p-4 mb-4 ${selectedSchool === school.id ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'
                  }`}
              >
                <View className="flex-row items-center mb-1">
                  {/* Radio button */}
                  <View className={`w-5 h-5 rounded-full border items-center justify-center mr-3 ${selectedSchool === school.id ? 'border-primary' : 'border-gray-300'
                    }`}>
                    {selectedSchool === school.id && (
                      <View className="w-3 h-3 rounded-full bg-primary" />
                    )}
                  </View>
                  <Text className="font-bold text-base text-textMain">{school.name}</Text>
                </View>
                <View className="pl-8">
                  <Text className="text-xs text-textSub font-medium mb-1">School ID: {school.schoolId}</Text>
                  <Text className="text-xs text-textSub leading-4">{school.address}</Text>
                </View>
              </TouchableOpacity>
            ))}

            {/* Continue Button */}
            <TouchableOpacity
              className="bg-primary rounded-full py-4 mt-6 shadow-sm"
              onPress={() => navigation.navigate('Dashboard')}
            >
              <Text className="text-white text-center font-bold text-base tracking-widest">CONTINUE</Text>
            </TouchableOpacity>

            {/* Support Link */}
            <TouchableOpacity className="mt-4">
              <Text className="text-center text-sm text-textSub">
                Having issues? <Text className="text-primary font-medium">Contact Support</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

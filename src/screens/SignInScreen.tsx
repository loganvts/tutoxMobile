import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, Modal, FlatList, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

const COUNTRY_CODES = [
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
];

export default function SignInScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('+91');
  const [pin, setPin] = React.useState('8');
  const [isChecked, setIsChecked] = React.useState(true);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [errors, setErrors] = React.useState<{ phone?: string, pin?: string, terms?: string }>({});

  const handleSignIn = () => {
    const newErrors: typeof errors = {};

    if (phoneNumber.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (pin.length !== 6) {
      newErrors.pin = 'Please enter a valid 6-digit PIN';
    }

    if (!isChecked) {
      newErrors.terms = 'You must agree to the Terms and Privacy Policy';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigation.navigate('SelectSchool');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center">
        {/* Card Container */}
        <View className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100" style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 5,
        }}>
          {/* Header */}
          <Text className="text-2xl font-extrabold text-center text-textMain mb-2">Sign In</Text>
          <Text className="text-sm text-center text-textSub mb-8">Enter your phone no and password</Text>

          {/* Form */}
          <View>
            {/* Phone Input with Country Picker */}
            <View className={`flex-row items-center border rounded-2xl px-4 py-4 bg-gray-50/50 mb-1 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(true)}
                className="flex-row items-center border-r border-gray-300 pr-3 mr-3"
              >
                <Text className="text-base text-textSub font-medium">{countryCode}</Text>
                <MaterialCommunityIcons name="chevron-down" size={16} color="#666" className="ml-1" />
              </TouchableOpacity>
              <TextInput
                className="flex-1 text-base text-textMain font-medium"
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={(val) => {
                  setPhoneNumber(val);
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                keyboardType="phone-pad"
                maxLength={10}
              />
              <MaterialCommunityIcons name="cellphone" size={20} color="#666" />
            </View>
            {errors.phone && <Text className="text-[10px] text-red-500 ml-2 mb-3">{errors.phone}</Text>}

            {/* Password Input (Pin style) */}
            <View className="mt-4 px-1">
              <View className="flex-row justify-between items-center mb-1">
                {[1, 2, 3, 4, 5, 6].map((i, index) => (
                  <TouchableOpacity
                    key={i}
                    activeOpacity={1}
                    className={`border rounded-xl w-11 h-14 items-center justify-center
                      ${index === pin.length ? 'border-primary bg-white shadow-sm' :
                        errors.pin ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50/50'}
                    `}
                  >
                    {index < pin.length ? (
                      <View className="w-2.5 h-2.5 rounded-full bg-textMain" />
                    ) : null}
                  </TouchableOpacity>
                ))}
              </View>
              {/* Invisible input to capture PIN */}
              <TextInput
                style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%' }}
                value={pin}
                onChangeText={(val) => {
                  setPin(val);
                  if (errors.pin) setErrors({ ...errors, pin: undefined });
                }}
                keyboardType="number-pad"
                maxLength={6}
                autoFocus={true}
              />
            </View>
            {errors.pin && <Text className="text-[10px] text-red-500 ml-2 mt-1">{errors.pin}</Text>}

            {/* Sign In Button */}
            <TouchableOpacity
              className="bg-primary rounded-full py-4 mt-10 shadow-sm"
              onPress={handleSignIn}
            >
              <Text className="text-white text-center font-bold text-base tracking-widest">SIGN IN</Text>
            </TouchableOpacity>

            {/* Forgot Password */}
            <TouchableOpacity className="mt-5">
              <Text className="text-center text-sm font-semibold text-textMain">Forgot password ?</Text>
            </TouchableOpacity>
          </View>

          {/* Terms Section */}
          <View className="flex-row items-start justify-center mt-10">
            <TouchableOpacity
              onPress={() => {
                setIsChecked(!isChecked);
                if (errors.terms) setErrors({ ...errors, terms: undefined });
              }}
              className={`w-5 h-5 rounded flex items-center justify-center mr-3 mt-0.5 ${isChecked ? 'bg-primary' : 'border border-gray-300'} ${errors.terms ? 'border-red-500' : ''}`}
            >
              {isChecked && <MaterialCommunityIcons name="check" size={14} color="white" />}
            </TouchableOpacity>
            <View className="flex-1">
              <Text className="text-[10px] text-textSub leading-4">
                By continuing, you agree to our{"\n"}
                <Text className="text-primary font-bold">Terms of Service</Text> and <Text className="text-primary font-bold">Privacy Policy</Text>.
              </Text>
              {errors.terms && <Text className="text-[9px] text-red-500 mt-1 font-medium">{errors.terms}</Text>}
            </View>
          </View>
        </View>

        {/* Logo at bottom */}
        <View className="absolute bottom-10 self-center items-center">
          <Image
            source={require('../../assets/official_logo.png')}
            style={{ width: 140, height: 60, resizeMode: 'contain' }}
          />
        </View>
      </View>

      {/* Country Code Selection Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-end"
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View className="bg-white rounded-t-[32px] p-6 max-h-[50%]">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-lg font-extrabold text-textMain">Select Country Code</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <MaterialCommunityIcons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={COUNTRY_CODES}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="flex-row items-center py-4 border-b border-gray-100"
                  onPress={() => {
                    setCountryCode(item.code);
                    setIsModalVisible(false);
                  }}
                >
                  <Text className="text-xl mr-3">{item.flag}</Text>
                  <Text className="flex-1 text-base text-textMain font-medium">{item.name}</Text>
                  <Text className="text-base text-textSub font-bold">{item.code}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

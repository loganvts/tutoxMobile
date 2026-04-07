import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

const STUDENTS = [
    { id: '1', name: 'John Doe', class: '10 A' },
    { id: '2', name: 'Logan', class: '7 B' },
];

export default function DashboardScreen() {
    const [selectedStudent, setSelectedStudent] = React.useState(STUDENTS[0]);
    const [isStudentModalVisible, setIsStudentModalVisible] = React.useState(false);
    const [isMenuVisible, setIsMenuVisible] = React.useState(false);
    const [isComingSoonVisible, setIsComingSoonVisible] = React.useState(false);
    const [activeFeatureName, setActiveFeatureName] = React.useState('');

    const showComingSoon = (name: string) => {
        setActiveFeatureName(name);
        setIsComingSoonVisible(true);
    };

    const MENU_ITEMS = [
        { id: '1', name: 'School', icon: 'bank', color: '#ef4444' },
        { id: '2', name: 'Fee Pay', icon: 'cash', color: '#6B33D4' },
        { id: '3', name: 'Tutox Learn', icon: 'school', color: '#c084fc' },
        { id: '4', name: 'Store', icon: 'cart', color: '#fbbf24' },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header section (red background) */}
            <View className="bg-[#ef4444] pt-10 pb-6 rounded-b-[40px] px-4 shadow-md" style={{ zIndex: 10 }}>
                {/* Top Icons row */}
                <View className="flex-row justify-between mb-8 px-1">
                    <TouchableOpacity
                        onPress={() => showComingSoon('School Portal')}
                        className="items-center bg-white rounded-2xl p-2 w-[22%] shadow-sm h-24 justify-center"
                    >
                        <View className="bg-[#ef4444] w-12 h-12 rounded-full items-center justify-center mb-1">
                            <MaterialCommunityIcons name="bank" size={24} color="white" />
                        </View>
                        <Text className="text-[10px] text-red-500 font-bold">School</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => showComingSoon('Fee Pay')}
                        className="items-center bg-white rounded-2xl p-2 w-[22%] shadow-sm h-24 justify-center"
                    >
                        <View className="bg-[#6B33D4] w-12 h-12 rounded-full items-center justify-center mb-1">
                            <MaterialCommunityIcons name="cash" size={24} color="white" />
                        </View>
                        <Text className="text-[10px] text-[#6B33D4] font-bold">Fee Pay</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => showComingSoon('Tutox Learn')}
                        className="items-center bg-white rounded-2xl p-2 w-[22%] shadow-sm h-24 justify-center"
                    >
                        <View className="bg-[#c084fc] w-12 h-12 rounded-full items-center justify-center mb-1 overflow-hidden">
                            <Image
                                source={require('../../assets/official_logo.png')}
                                style={{ width: 28, height: 28, resizeMode: 'contain', tintColor: 'white' }}
                            />
                        </View>
                        <Text className="text-[10px] text-[#c084fc] font-bold" numberOfLines={1}>Tutox Learn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => showComingSoon('Store')}
                        className="items-center bg-white rounded-2xl p-2 w-[22%] shadow-sm h-24 justify-center"
                    >
                        <View className="bg-[#fbbf24] w-12 h-12 rounded-full items-center justify-center mb-1">
                            <MaterialCommunityIcons name="cart" size={24} color="white" />
                        </View>
                        <Text className="text-[10px] text-[#fbbf24] font-bold">Store</Text>
                    </TouchableOpacity>
                </View>

                {/* User Picker */}
                <View className="flex-row items-center px-1">
                    <TouchableOpacity
                        onPress={() => setIsMenuVisible(true)}
                        className="bg-white/20 p-2.5 rounded-full mr-3"
                    >
                        <MaterialCommunityIcons name="menu" size={22} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setIsStudentModalVisible(true)}
                        className="flex-1 bg-white rounded-full flex-row items-center px-5 py-3 shadow-sm"
                    >
                        <MaterialCommunityIcons name="account-circle-outline" size={22} color="#666" />
                        <Text className="flex-1 ml-2 font-bold text-textMain text-sm">
                            {selectedStudent.name} - {selectedStudent.class}
                        </Text>
                        <MaterialCommunityIcons name="chevron-down" size={22} color="#666" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, paddingTop: 24, paddingBottom: 100 }}>

                {/* Grid Cards */}
                <View className="flex-row flex-wrap justify-between">
                    {/* English Class Test */}
                    <TouchableOpacity
                        onPress={() => showComingSoon('Class Tests')}
                        className="w-[48%] bg-cardBlue rounded-2xl p-4 mb-4"
                    >
                        <MaterialCommunityIcons name="calendar-text-outline" size={20} color="#c084fc" className="mb-2" />
                        <Text className="text-white font-semibold text-sm mb-1 mt-1">English Class Test</Text>
                        <Text className="text-white/70 text-xs mb-3">Mon 21 January</Text>
                        <View className="bg-white/20 self-start px-2 py-1 rounded text-xs">
                            <Text className="text-white text-[10px] font-medium">Scheduled</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Transportation */}
                    <TouchableOpacity
                        onPress={() => showComingSoon('Transportation')}
                        className="w-[48%] bg-cardYellow rounded-2xl p-4 mb-4"
                    >
                        <MaterialCommunityIcons name="bus" size={20} color="#b45309" className="mb-2" />
                        <Text className="text-gray-900 font-semibold text-sm mb-1 mt-1">Transportation</Text>
                        <Text className="text-gray-800/70 text-xs mb-3">At C4 by 7:20 AM</Text>
                        <View className="bg-black/10 self-start px-2 py-1 rounded text-xs">
                            <Text className="text-gray-900 text-[10px] font-medium">Bus No. 29</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Attendance */}
                    <TouchableOpacity
                        onPress={() => showComingSoon('Attendance')}
                        className="w-[48%] bg-[#fef08a] rounded-2xl p-4 mb-4"
                    >
                        <MaterialCommunityIcons name="account-check-outline" size={20} color="#b45309" className="mb-2" />
                        <Text className="text-gray-900 font-semibold text-sm mb-1 mt-1">Attendance</Text>
                        <Text className="text-gray-800/70 text-xs mb-3">89/100 Days</Text>
                        <View className="bg-black/10 self-start px-2 py-1 rounded text-xs">
                            <Text className="text-gray-900 text-[10px] font-medium">Present</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Upcoming Fee */}
                    <TouchableOpacity
                        onPress={() => showComingSoon('Fees & Expenses')}
                        className="w-[48%] bg-primary rounded-2xl p-4 mb-4"
                    >
                        <MaterialCommunityIcons name="currency-inr" size={20} color="#fcd34d" className="mb-2" />
                        <Text className="text-white font-semibold text-sm mb-1 mt-1">Upcoming Fee</Text>
                        <Text className="text-white/70 text-xs mb-3">28 April 2026</Text>
                        <View className="bg-white/20 self-start px-2 py-1 rounded text-xs">
                            <Text className="text-white text-[10px] font-bold">₹3850</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Weekly Performance */}
                <View className="mt-2 mb-6">
                    <Text className="text-lg font-bold text-textMain mb-8">Weekly Performance</Text>
                    <View className="h-40 flex-row items-end justify-between px-2">
                        {[
                            { val: 60, col: 'bg-orange-200' },
                            { val: 90, col: 'bg-teal-200' },
                            { val: 70, col: 'bg-yellow-200' },
                            { val: 30, col: 'bg-red-300' },
                            { val: 60, col: 'bg-orange-200' },
                            { val: 60, col: 'bg-orange-200' },
                            { val: 80, col: 'bg-green-500' },
                        ].map((item, idx) => (
                            <View key={idx} className="items-center w-8">
                                <Text className="text-[10px] text-gray-500 mb-1">{item.val}%</Text>
                                <View className={`w-6 rounded-t-sm ${item.col}`} style={{ height: `${item.val}%` }} />
                                <Text className="text-[10px] text-gray-400 mt-2">W{idx + 1}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Free Courses */}
                <View className="mb-6">
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-lg font-bold text-textMain">Free Courses</Text>
                        <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 20 }}>
                        {/* Course 1 */}
                        <View className="w-48 mr-4">
                            <View className="bg-gray-200 h-28 rounded-xl mb-2" />
                            <Text className="font-semibold text-sm text-textMain">Let's Math Together course</Text>
                            <Text className="text-[10px] text-gray-400" numberOfLines={1}>We have positively disrupted our own...</Text>
                        </View>
                        {/* Course 2 */}
                        <View className="w-48 mr-4">
                            <View className="bg-gray-200 h-28 rounded-xl mb-2" />
                            <Text className="font-semibold text-sm text-textMain">Let's Math Together course</Text>
                            <Text className="text-[10px] text-gray-400" numberOfLines={1}>We have positively disrupted our own...</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* Current Chapter Card */}
                <View className="border border-gray-200 rounded-2xl p-4 flex-row items-center justify-between mb-8">
                    <View className="flex-row items-center border-b-2 border-primary pb-2">
                        <View className="bg-gray-100 w-10 h-10 rounded-lg mr-3" />
                        <View>
                            <Text className="font-semibold text-sm text-textMain">Lets Math Together</Text>
                            <Text className="text-xs text-textSub">Chapter 1</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
                        <MaterialCommunityIcons name="play" size={24} color="#666" />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View className="flex-row justify-between items-center border-t border-gray-100 px-6 py-2 bg-white" style={{ paddingBottom: 20 }}>
                <TouchableOpacity className="items-center">
                    <MaterialCommunityIcons name="home-outline" size={24} color="#6B33D4" />
                    <Text className="text-[10px] text-primary mt-1 font-medium">Home</Text>
                </TouchableOpacity>
                <TouchableOpacity className="items-center">
                    <MaterialCommunityIcons name="book-open-variant" size={24} color="#9ca3af" />
                    <Text className="text-[10px] text-gray-400 mt-1">Academic</Text>
                </TouchableOpacity>
                <TouchableOpacity className="items-center">
                    <MaterialCommunityIcons name="bell-outline" size={24} color="#9ca3af" />
                    <Text className="text-[10px] text-gray-400 mt-1">Today</Text>
                </TouchableOpacity>
                <TouchableOpacity className="items-center">
                    <View className="w-6 h-6 rounded-full border-2 border-gray-400 mt-1"></View>
                    <Text className="text-[10px] text-gray-400 mt-1">Learns</Text>
                </TouchableOpacity>
                <TouchableOpacity className="items-center">
                    <MaterialCommunityIcons name="account-outline" size={24} color="#9ca3af" />
                    <Text className="text-[10px] text-gray-400 mt-1">Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Student Selection Modal */}
            <Modal
                visible={isStudentModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsStudentModalVisible(false)}
            >
                <TouchableOpacity
                    className="flex-1 bg-black/50 justify-end"
                    activeOpacity={1}
                    onPress={() => setIsStudentModalVisible(false)}
                >
                    <View className="bg-white rounded-t-[32px] p-6 max-h-[40%]">
                        <View className="flex-row justify-between items-center mb-6">
                            <Text className="text-lg font-extrabold text-textMain">Switch Student</Text>
                            <TouchableOpacity onPress={() => setIsStudentModalVisible(false)}>
                                <MaterialCommunityIcons name="close" size={24} color="#666" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={STUDENTS}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    className={`flex-row items-center py-4 px-4 border rounded-2xl mb-3 ${selectedStudent.id === item.id ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
                                    onPress={() => {
                                        setSelectedStudent(item);
                                        setIsStudentModalVisible(false);
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="account-circle"
                                        size={28}
                                        color={selectedStudent.id === item.id ? "#6B33D4" : "#ccc"}
                                    />
                                    <View className="ml-3 flex-1">
                                        <Text className={`text-base font-bold ${selectedStudent.id === item.id ? 'text-primary' : 'text-textMain'}`}>
                                            {item.name}
                                        </Text>
                                        <Text className="text-xs text-textSub">Class {item.class}</Text>
                                    </View>
                                    {selectedStudent.id === item.id && (
                                        <MaterialCommunityIcons name="check-circle" size={20} color="#6B33D4" />
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>

            {/* Side Menu Modal */}
            <Modal
                visible={isMenuVisible}
                transparent={true}
                animationType="none"
                onRequestClose={() => setIsMenuVisible(false)}
            >
                <View className="flex-1 flex-row">
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setIsMenuVisible(false)}
                        className="absolute inset-0 bg-black/40"
                    />

                    <View className="w-[75%] bg-white h-full shadow-2xl">
                        {/* Drawer Header */}
                        <View className="bg-primary pt-16 pb-8 px-6 rounded-br-[40px]">
                            <View className="flex-row items-center mb-6">
                                <View className="bg-white/20 p-2 rounded-full mr-4">
                                    <MaterialCommunityIcons name="account-circle" size={50} color="white" />
                                </View>
                                <View>
                                    <Text className="text-white text-xl font-bold">{selectedStudent.name}</Text>
                                    <Text className="text-white/70 text-sm">Class {selectedStudent.class}</Text>
                                </View>
                            </View>
                            <View className="bg-white/20 h-[1px] w-full mb-6" />
                            <Text className="text-white/80 text-[10px] uppercase font-bold tracking-widest">Main Portal</Text>
                        </View>

                        {/* Drawer Content */}
                        <View className="p-6">
                            {MENU_ITEMS.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    className="flex-row items-center py-5 border-b border-gray-50"
                                    onPress={() => setIsMenuVisible(false)}
                                >
                                    <View className="w-10 h-10 rounded-xl items-center justify-center mr-4" style={{ backgroundColor: item.color + '15' }}>
                                        <MaterialCommunityIcons name={item.icon as any} size={22} color={item.color} />
                                    </View>
                                    <Text className="flex-1 text-base font-bold text-textMain">{item.name}</Text>
                                    <MaterialCommunityIcons name="chevron-right" size={18} color="#ccc" />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Drawer Footer */}
                        <View className="absolute bottom-10 left-0 right-0 px-6">
                            <TouchableOpacity
                                className="flex-row items-center py-4 bg-gray-50 rounded-2xl px-4"
                                onPress={() => setIsMenuVisible(false)}
                            >
                                <MaterialCommunityIcons name="logout" size={20} color="#ef4444" />
                                <Text className="ml-3 text-red-500 font-bold">Logout</Text>
                            </TouchableOpacity>

                            <View className="items-center mt-6 opacity-30">
                                <Image
                                    source={require('../../assets/official_logo.png')}
                                    style={{ width: 80, height: 30, resizeMode: 'contain' }}
                                />
                                <Text className="text-[8px] font-bold mt-1 uppercase tracking-[2px]">Tutox App v1.0</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Coming Soon Modal */}
            <Modal
                visible={isComingSoonVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsComingSoonVisible(false)}
            >
                <TouchableOpacity
                    className="flex-1 bg-black/60 justify-center items-center px-6"
                    activeOpacity={1}
                    onPress={() => setIsComingSoonVisible(false)}
                >
                    <View className="bg-white rounded-[40px] p-8 w-full items-center shadow-2xl">
                        <View className="bg-primary/10 w-24 h-24 rounded-full items-center justify-center mb-6">
                            <MaterialCommunityIcons name="rocket-launch" size={50} color="#6B33D4" />
                        </View>

                        <Text className="text-2xl font-extrabold text-textMain mb-2 text-center">Coming Soon!</Text>
                        <Text className="text-base text-textSub text-center mb-8 px-4 leading-6">
                            We are currently building the <Text className="font-bold text-primary">{activeFeatureName}</Text> experience. Stay tuned for updates!
                        </Text>

                        <TouchableOpacity
                            className="bg-primary w-full py-4 rounded-full shadow-lg"
                            onPress={() => setIsComingSoonVisible(false)}
                        >
                            <Text className="text-white text-center font-extrabold text-lg">Got it!</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

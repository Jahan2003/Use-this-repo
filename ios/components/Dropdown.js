// import React, {useState} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';

// const data = [
//     {label: 'II-CSE-A', value: '1'},
//     {label: 'II-CSE-B', value: '2'},
//     {label: 'II-CSE-B', value: '3'},
//     {label: 'III-CSE-A', value: '4'},
//     {label: 'III-CSE-B', value: '5'},
//     {label: 'III-CSE-C', value: '6'},
//     {label: 'IV-CSE-A', value: '7'},
//     {label: 'IV-CSE-B', value: '8'},
//     {label: 'IV-CSE-c', value: '9'},
// ];

// const DropdownScreen = _props => {
//     const [dropdown, setDropdown] = useState(null);
//     const _renderItem = item => {
//         return (
//         <View style={styles.item}>
//             <Text style={styles.textItem}>{item.label}</Text>
//         </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <Dropdown
//                 style={styles.dropdown}
//                 containerStyle={styles.shadow}
//                 data={data}
//                 search
//                 searchPlaceholder="Search"
//                 labelField="label"
//                 valueField="value"
//                 label="Dropdown"
//                 placeholder="Select CLASS"
//                 value={dropdown}
//                 onChange={item => {
//                 setDropdown(item.value);
//                     console.log('selected', item);
//                 }}
            
//                 renderItem={item => _renderItem(item)}
//                 textError="Error"
//             />

//             </View>
//     );
// };

// export default DropdownScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 3,
//         backgroundColor: 'white',
//         padding: 20,
//     },
//     dropdown: {
//         backgroundColor: 'white',
//         borderBottomColor: 'gray',
//         borderBottomWidth: 1,
//         marginTop: 100,
//     },
//     icon: {
//         marginRight: 10,
//         width: 18,
//         height: 18,
//     },
//     item: {
//         paddingVertical: 20,
//         paddingHorizontal: 4,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     textItem: {
//         flex: 4,
//         fontSize: 16,

//     },
//     shadow: {
//         shadowColor: '#000',
//         shadowOffset: {
//         width: 10,
//         height: 1,
//         },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 6,
//     },
// });

import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';

  const data = [
    {label: 'II-CSE-A', value: '1'},
    {label: 'II-CSE-B', value: '2'},
    {label: 'II-CSE-B', value: '3'},
    {label: 'III-CSE-A', value: '4'},
    {label: 'III-CSE-B', value: '5'},
    {label: 'III-CSE-C', value: '6'},
    {label: 'IV-CSE-A', value: '7'},
    {label: 'IV-CSE-B', value: '8'},
    {label: 'IV-CSE-C', value: '9'},
];

  const DropdownScreen= () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Selected Class
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            console.log('selected', item);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="team"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  export default DropdownScreen;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height:50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
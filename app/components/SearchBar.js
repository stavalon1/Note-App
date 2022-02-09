import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import colors from '../misc/colors';
import {AntDesign} from '@expo/vector-icons';

const SearchBar = ({containerStyle, value,onClear, onChangeText }) => {
    return (
        <View value={value} onChangeText={onChangeText} style={[styles.container, {...containerStyle}]}>
            <TextInput 
                style={styles.searchBar}
                placeholder='Search here...'/>
                {value ? ( 
                <AntDesign 
                  name='close'
                  size={20} 
                  color={colors.PRIMARY} 
                  onPress={onClear}
                  style={styles.clearIcon}
                  />  ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar:{
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        borderRadius: 40,
        paddingLeft: 15,
        fontSize:20,
    },
    container:{
        justifyContent: 'center',
    },
    clearIcon:{
        position: 'absolute',
        right: 10,
    },
});
    
export default SearchBar;

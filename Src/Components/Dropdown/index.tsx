import React, { useState } from "react";
import {  View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./Styles";

const Dropdown = ({ items,text }:{text:string}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={styles.Box}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={() => {}} 
        placeholder={text}
        containerStyle={styles.dropDownContainerStyle}
        dropDownDirection="DOWN" 
      />
    </View>
  );
};

export default Dropdown;

import { Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    name: any,
    onPress: () => void,
    color: string
}

function IconButton({onPress, name, color}: Props) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.container}>
            <Ionicons name={name} color={color} size={24}/>
        </Pressable>
    )
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        opacity: 0.6,
    }
})
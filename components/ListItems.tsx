import { Text, View, StyleSheet } from "react-native";

interface Props{
    title: string,
    textitems: string[],
}

function ListItems(props: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            {props.textitems.map(item => <View style={styles.textContainer} key={item}><Text style={styles.text}>{item}</Text></View>)}
        </View>
    )
}

export default ListItems;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    titleContainer: {
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 5
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    textContainer: {
        borderRadius: 15,
        marginTop: 8,
        backgroundColor: 'orange',
    },
    text: {
        textAlign: 'center',
        padding: 4,
    }
})
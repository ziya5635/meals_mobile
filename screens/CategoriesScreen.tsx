import { View, StyleSheet, ScrollView } from "react-native";
import { CATEGORIES as data } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

function CategoriesView() {
    return (
        <ScrollView>
            <View style={styles.innerContainer} >
                {data.map(item => <CategoryItem {...item} key={item.id}/>)}
            </View>
        </ScrollView>
    )
}

export default CategoriesView;

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
})
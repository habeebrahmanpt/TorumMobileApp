import { StyleSheet } from 'react-native';
import Colors from 'themes/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    },
    item: {
        backgroundColor: Colors.white,
        margin: 4,
        padding: 8,
        height: 400,
    },
    time: {
        fontSize: 12,
        marginLeft: 4,
        fontWeight: 'bold',
    },
    location: {
        marginLeft: 30,
        fontSize: 12,
        fontWeight: 'bold',
    },
    text: {
        flexDirection: 'column',
    },
    strings: {
        flexDirection: 'row',
    },
    title: {
        color: Colors.black,
        fontSize: 17,

        marginHorizontal: 5,
        fontWeight: 'bold',
    },
    postStyle: {
        height: '100%',
        width: '100%',
    },

    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        height: 55,
        width: 55,
        marginHorizontal: 6,
        marginVertical: 5,
        borderRadius: 200,
    },
    postImage: {
        maxHeight: '100%',
        maxWidth: '100%',
        height: 270,
    },
    postDescription: {
        maxHeight: '100%',
        maxWidth: '100%',
        justifyContent: 'center',

        height: 250,
    },
    caption: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 2,
    },
    description: {
        fontSize: 12,
        fontWeight: 'normal',
        marginVertical: 2,
    },
    descriptionBody: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: 'normal',
        marginVertical: 2,
    },
    reactionContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
    },
    like: {
        height: 27,
        width: 27,
    },
    comment: {
        height: 26,
        width: 26,
        marginLeft: 15,
    },
    count: {
        fontSize: 14,
        marginLeft: 8,
        fontWeight: 'bold',
    },
    more: {
        height: 35,
        width: 35,
        right: 0,
    },
    userContainer: {
        flexDirection: 'row',
    },
    moreContainer: {
        marginLeft: 20,
    },
    flatListStyles: {},
});

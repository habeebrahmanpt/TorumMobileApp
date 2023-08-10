import { PixelRatio, StyleSheet } from 'react-native';
import Colors from 'themes/Colors';
import { px } from 'themes/Metrics';

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
    items: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
    },
    commentContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        padding: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stringsContainer: {
        width: '80%',
        marginLeft: '4%',
        borderRadius: 5,
        paddingBottom: 8,
        backgroundColor: Colors.iconBackground,
    },
    imageStyle: {
        height: 45,
        width: 45,
        borderRadius: 100,
    },
    usernames: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 2,
        marginLeft: '5%',
        color: Colors.welcomePageText,
    },
    captionTextContainer: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
    },
    captionTime: {
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: '5%',
        alignSelf: 'flex-end',
    },
    comments: {
        fontSize: 14,
        fontWeight: 'bold',
        maxWidth: '90%',
        marginLeft: '5%',
    },
    flatList: {
        width: '100%',
        marginTop: '3%',
        backgroundColor: Colors.white,
    },
    placeholderStyle: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginBottom: 10,
        bottom: 0,
        padding: 8,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: Colors.white,
        fontSize: 15,
        fontWeight: 'bold',
        width: '80%',
    },
    sendIcon: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.iconBackground,
    },
    following: {
        right: 12,
        top: 12,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: Colors.appTheme,
    },
    followingText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.white,
    },
});

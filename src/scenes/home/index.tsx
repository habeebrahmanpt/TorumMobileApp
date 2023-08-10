import React, { useEffect, useState } from 'react';
import {
    Button,
    Dimensions,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from 'navigation/StackParamList';
import appColors from 'themes/Colors';
import style from './style';
import { Colors, Images } from '../../themes';
import appImages from 'themes/Images';
import apiClient from 'api/api-client';
import AppHeader from 'components/ui/app-header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { timeConverter } from 'utils/time-converter';
import AppIndicator from 'components/ui/AppIndicator';

const HomeScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [feedsData, setFeedsData] = useState<any>(null);

    useEffect(() => {
        getFeeds();
    }, []);

    const getFeeds = () => {
        apiClient
            .getFeeds(20, 0)
            .then(response => {
                setFeedsData(response.data?.articles);
            })
            .catch(error => {});
    };

    const imageHandler = async () => {};

    const addPost = () => {};

    const goToFeedDetails = (slug: any) => {
        navigation.navigate('FeedDetails', slug);
    };
    const Item = ({ item }: any) => {
        return (
            <View style={style.item}>
                <View style={style.userContainer}>
                    <View style={style.imageContainer}>
                        <Image
                            source={{ uri: item?.author?.image }}
                            style={style.image}
                        />
                        <View style={style.text}>
                            <Text style={style.title}>
                                {item?.author?.username}
                            </Text>
                            <View style={style.strings}>
                                <Text style={style.time}>
                                    {timeConverter(item?.createdAt)}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.moreContainer}>
                        <TouchableOpacity>
                            <Image source={appImages.more} style={style.more} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={style.caption}>{item?.title}</Text>
                {item?.image ? (
                    <TouchableOpacity
                        onPress={() => goToFeedDetails(item?.slug)}>
                        <Image
                            source={{ uri: item?.image }}
                            style={style.postImage}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={style.postDescription}
                        onPress={() => goToFeedDetails(item?.slug)}>
                        <Text style={style.description} numberOfLines={8}>
                            {item?.description}
                        </Text>
                        <Text style={style.descriptionBody} numberOfLines={8}>
                            {item?.body}
                        </Text>
                    </TouchableOpacity>
                )}
                <View style={style.reactionContainer}>
                    <TouchableOpacity onPress={() => {}}>
                        {item?.favorited ? (
                            <Icon
                                name="favorite"
                                color={Colors.appTheme}
                                size={22}
                            />
                        ) : (
                            <Icon name="favorite" color="grey" size={22} />
                        )}
                    </TouchableOpacity>
                    <Text style={style.count}>{item?.favoritesCount}</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Image
                            source={appImages.comment}
                            style={style.comment}
                        />
                    </TouchableOpacity>
                    {item?.comments ? (
                        <Text style={style.count}>{item?.comments}</Text>
                    ) : null}
                </View>
            </View>
        );
    };

    return (
        <View style={style.container}>
            <AppHeader
                label={'Feeds'}
                leftIcon={'camera'}
                rightIcon={'file-text2'}
                onPressLeft={imageHandler}
                onPressRight={addPost}
            />
            {feedsData ? (
                <FlatList
                    data={feedsData}
                    style={style.flatListStyles}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(_, index) => index?.toString()}
                />
            ) : (
                <AppIndicator size="large" />
            )}
        </View>
    );
};
export default HomeScreen;

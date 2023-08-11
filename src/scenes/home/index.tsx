import React, { useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from 'navigation/StackParamList';
import style from './style';
import { Colors } from '../../themes';
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
    const [articlesCount, setArticlesCount] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getFeeds(10, 0);
    }, []);

    const getFeeds = async (limit: number, offset: number) => {
        if (isLoading) return;
        setIsLoading(true);
        apiClient
            .getFeeds(limit, offset)
            .then(response => {
                setArticlesCount(response.data?.articlesCount)
                if (offset == 0)
                    setFeedsData(response.data?.articles);
                else
                    setFeedsData((prevData: any) => [...prevData, ...response.data?.articles]);
            })
            .catch(error => {
                console.log('API error', error);
            }).finally(() => {
                setIsLoading(false);
            })
    };
    const onEndReached = () => {
        if (feedsData && feedsData?.length < articlesCount) {
            getFeeds(10, feedsData?.length);
        }
    }
    const onRefresh = () => {
        getFeeds(10, 0);
    }

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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
            />
            {feedsData ? (
                <FlatList
                    data={feedsData}
                    style={style.flatListStyles}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(_, index) => index?.toString()}
                    refreshControl={
                        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
                    }
                    onEndReached={onEndReached}
                />
            ) : (
                <AppIndicator size="large" />
            )}
        </View>
    );
};
export default HomeScreen;

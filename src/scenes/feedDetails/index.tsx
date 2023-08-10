import React, { useEffect, useState } from 'react';
import {
    Button,
    Dimensions,
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
import CustomIcon from 'components/ui/custom-icon';

const FeedDetails = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<StackParamList>>();
    const [feedsData, setFeedsData] = useState<any>(null);
    const [commentData, setCommentData] = useState<any>([]);
    const [comment, setComment] = useState<string>('');

    const route: any = useRoute();
    const slug = route.params;
    useEffect(() => {
        getFeeds(slug);
    }, []);

    const getFeeds = (slug: any) => {
        apiClient
            .getFeedDetails(slug)
            .then(response => {
                // console.log('API response : ', JSON.stringify(response?.data))
                setFeedsData(response.data?.article);
            })
            .catch(error => {});
        getFeedComments(slug);
    };

    const getFeedComments = (slug: any) => {
        apiClient
            .getFeedComments(slug, 200, 0)
            .then(response => {
                // console.log('API getFeedComments : ', JSON.stringify(response?.data))
                setCommentData(response.data?.comments);
            })
            .catch(error => {});
    };

    const onPressLeft = async () => {
        navigation.goBack();
    };

    const commentItem = ({ item }: any) => {
        return (
            <View style={style.items}>
                <View style={style.commentContainer}>
                    {item?.author?.image ? (
                        <Image
                            source={{ uri: item?.author?.image }}
                            style={style.imageStyle}
                        />
                    ) : (
                        <Image
                            source={appImages.profilePic}
                            style={style.imageStyle}
                        />
                    )}
                    <View style={style.stringsContainer}>
                        {item?.author?.username && (
                            <Text style={style.usernames}>
                                {item?.author?.username}
                            </Text>
                        )}
                        {item?.body && (
                            <View style={style.captionTextContainer}>
                                <Text style={style.comments}>{item?.body}</Text>
                                {item?.createdAt && (
                                    <Text style={style.captionTime}>
                                        {timeConverter(item?.createdAt)}
                                    </Text>
                                )}
                            </View>
                        )}
                    </View>
                </View>
            </View>
        );
    };
    const ListHeaderComponent = () => {
        return (
            <View style={style.item}>
                <View style={style.userContainer}>
                    <View style={style.imageContainer}>
                        <Image
                            source={{ uri: feedsData?.author?.image }}
                            style={style.image}
                        />
                        <View style={style.text}>
                            <Text style={style.title}>
                                {feedsData?.author?.username}
                            </Text>
                            <View style={style.strings}>
                                <Text style={style.time}>
                                    {timeConverter(feedsData?.createdAt)}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={style.moreContainer}>
                        {feedsData?.author?.following ? (
                            <TouchableOpacity style={style.following}>
                                <Text style={style.followingText}>
                                    following
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={style.following}>
                                <Text style={style.followingText}>follow</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <Text style={style.caption}>{feedsData?.title}</Text>
                {feedsData?.image ? (
                    <TouchableOpacity>
                        <Image
                            source={{ uri: feedsData?.image }}
                            style={style.postImage}
                        />
                    </TouchableOpacity>
                ) : null}
                <View style={style.postDescription}>
                    <Text style={style.description} numberOfLines={8}>
                        {feedsData?.description}
                    </Text>
                    <Text style={style.descriptionBody} numberOfLines={30}>
                        {feedsData?.body}
                    </Text>
                </View>
                <View style={style.reactionContainer}>
                    <TouchableOpacity onPress={() => {}}>
                        {feedsData?.favorited ? (
                            <Icon
                                name="favorite"
                                color={Colors.appTheme}
                                size={22}
                            />
                        ) : (
                            <Icon name="favorite" color="grey" size={22} />
                        )}
                    </TouchableOpacity>
                    <Text style={style.count}>{feedsData?.favoritesCount}</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Image
                            source={appImages.comment}
                            style={style.comment}
                        />
                    </TouchableOpacity>
                    {feedsData?.comments ? (
                        <Text style={style.count}>{feedsData?.comments}</Text>
                    ) : null}
                </View>
            </View>
        );
    };

    const commentHandler = () => {
        postFeedComment(slug);
    };
    const postFeedComment = (slug: any) => {
        const requestObj = { comment: { body: comment } };
        apiClient
            .postFeedComment(slug, requestObj)
            .then(response => {
                setComment('');
                getFeedComments(slug);
            })
            .catch(error => {
                console.log('API response : 3', JSON.stringify(error));
            });
    };
    return (
        <View style={style.container}>
            <AppHeader
                label={'Feed'}
                leftIcon={'arrow-left'}
                onPressLeft={onPressLeft}
            />
            {feedsData ? (
                <FlatList
                    ListHeaderComponent={ListHeaderComponent}
                    data={commentData}
                    renderItem={commentItem}
                    keyExtractor={item => item?.id?.toString()}
                />
            ) : (
                <AppIndicator size="large" />
            )}
            {feedsData ? (
                <View style={style.placeholderStyle}>
                    <TextInput
                        style={style.input}
                        placeholder="Add Comment to this Post"
                        returnKeyType="done"
                        value={comment}
                        onChangeText={text => setComment(text)}
                    />
                    <View style={style.sendIcon}>
                        <TouchableOpacity onPress={() => commentHandler()}>
                            <CustomIcon name="send" size={32} />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
        </View>
    );
};
export default FeedDetails;

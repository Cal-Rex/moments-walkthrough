import { axiosReq } from "../api/axiosDefaults"

export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next)
        setResource(prevResource => ({
            ...prevResource,
            next:data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                    ? acc : [...acc, cur];
            }, prevResource.results)
        }))
    } catch(err) {

    }
}

export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
        ? // this is the profile i clicked on,
            // update its followers count and set its following id
            {
            ...profile,
            followers_count: profile.followers_count + 1,
            following_id
            }
        : profile.is_owner
        ? // tis is the profile of the logged in user
            //update its following count
            {
            ...profile, following_count: profile.following_count + 1
            }
        : // this is not the profile the user clicked on
            // or the profile the user owns, so just return unchanged
            profile;
}

export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
    ? // this is the profile i clicked on,
        // update its followers count and nulls the following id that's been deleted
        {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
        }
    : profile.is_owner
    ? // this is the profile of the logged in user
        //update its following count
        {
        ...profile, 
        following_count: profile.following_count - 1
        }
    : // this is not the profile the user clicked on
        // or the profile the user owns, so just return unchanged
        profile;
}
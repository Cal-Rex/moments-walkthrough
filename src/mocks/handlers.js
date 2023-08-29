import { rest } from "msw"

const baseURL = "https://django-rest-walkthrough-8fb26a5960d5.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    "pk":1,
                    "username":"admin",
                    "email":"",
                    "first_name":"",
                    "last_name":"",
                    "profile_id":1,
                    "profile_image":"https://res.cloudinary.com/deth0ifla/image/upload/v1/media/../samples/landscapes/girl-urban-view"
                }
            )
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];
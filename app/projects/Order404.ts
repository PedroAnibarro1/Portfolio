import Project, { ProjectType } from "@/models/Project";


class Order404 implements Project {

    name = "Order 404";
    description = "Order 404 is a crossplatform app made in NativeScript for 404 Coffee & Beers";
    imageURL = "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/1c/c7/6e/1cc76e94-4d38-c955-4bf3-e57865f6630b/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp";
    type = ProjectType.mobileApp;
    projectURL = "http://app.404.rocks";

}

export default Order404;
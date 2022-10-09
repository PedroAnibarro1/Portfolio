

export enum ProjectType {
    mobileApp,
    webPage,
    other
}

export class Project {

    name: string;
    description: string;
    imageURL: string;
    type: ProjectType;    
    projectURL: string;

}

export default Project;
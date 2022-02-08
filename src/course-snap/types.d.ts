import { Arguments } from 'yargs';

export type Args = Arguments<{
    path: string;
    device: string[];
    listDevices: boolean;
    courseUrl: string;
}>;

export type Title = string;
export type Description = string;
export type Passmark = number;
export type UnitID = string;
export type Title1 = string;
export type Status = Status1 & Status2;
export type Status1 = Unavailable | Available | Started | Completed | Failed | Passed | Locked;
export type Unavailable = 'UNAVAILABLE';
export type Available = 'AVAILABLE';
export type Started = 'STARTED';
export type Completed = 'COMPLETED';
export type Failed = 'FAILED';
export type Passed = 'PASSED';
export type Locked = 'LOCKED';
export type Status2 = string;
export type Description1 = string;
export type Arguments = string;
export type PageID = string;
export type Title2 = string;
export type Status3 = Status1 & Status2;
export type Required = Required1 & Required2;
export type Required1 = boolean;
export type Required2 = Yes | No;
export type Yes = true;
export type Description2 = string;
export type Variant = 'standard' | 'flush' | 'hero' | 'fill';
export type BackgroundImageVariantStandardHero = string;
export type BackLinkVariantStandard = string;
export type Text = string;
export type Link = string;
export type TableOfContents = {
    text?: string;
    link?: string;
    [k: string]: unknown;
}[];
export type Arguments1 = string;
export type BlockID = string;
export type Template = Template1 & Template2;
export type Template1 =
    | Accordion
    | AdminCourseOverview
    | AdminImageReview
    | AdminModules
    | AdminPages
    | AdminSearchAssets
    | AdminShortcuts
    | AdminTemplates
    | BcuMap
    | Carousel
    | Charts
    | Coursemap
    | Launch
    | List
    | Quiz
    | Resources
    | Text1
    | Video;
export type Accordion = 'Accordion';
export type AdminCourseOverview = 'AdminCourseOverview';
export type AdminImageReview = 'AdminImageReview';
export type AdminModules = 'AdminModules';
export type AdminPages = 'AdminPages';
export type AdminSearchAssets = 'AdminSearchAssets';
export type AdminShortcuts = 'AdminShortcuts';
export type AdminTemplates = 'AdminTemplates';
export type BcuMap = 'BcuMap';
export type Carousel = 'Carousel';
export type Charts = 'Charts';
export type Coursemap = 'Coursemap';
export type Launch = 'Launch';
export type List = 'List';
export type Quiz = 'Quiz';
export type Resources = 'Resources';
export type Text1 = 'Text';
export type Video = 'Video';
export type Template2 = string;
export type Status4 = Status1 & Status2;
export type Visible = Visible1 & Visible2;
export type Visible1 = boolean;
export type Visible2 = Yes | No;
export type JSONPath = string;
export type Arguments2 = string;
export type Blocks = {
    blockID?: BlockID;
    template?: Template;
    status?: Status4;
    isVisible?: Visible;
    jsonPath?: JSONPath;
    arguments?: Arguments2;
    [k: string]: unknown;
}[];
export type Introduction = {
    unitID?: UnitID;
    title?: Title1;
    status?: Status;
    description?: Description1;
    arguments?: Arguments;
    pages?: {
        pageID?: PageID;
        title?: Title2;
        status?: Status3;
        isCompletionRequired?: Required;
        description?: Description2;
        options?: Options;
        action?: Action;
        toc?: TableOfContents;
        arguments?: Arguments1;
        blocks?: Blocks;
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
}[];
export type Units = {
    unitID?: UnitID;
    title?: Title1;
    status?: Status;
    description?: Description1;
    arguments?: Arguments;
    pages?: {
        pageID?: PageID;
        title?: Title2;
        status?: Status3;
        isCompletionRequired?: Required;
        description?: Description2;
        options?: Options;
        action?: Action;
        toc?: TableOfContents;
        arguments?: Arguments1;
        blocks?: Blocks;
        [k: string]: unknown;
    }[];
    [k: string]: unknown;
}[];
export type GlobalPages = {
    pageID?: PageID;
    title?: Title2;
    status?: Status3;
    isCompletionRequired?: Required;
    description?: Description2;
    options?: Options;
    action?: Action;
    toc?: TableOfContents;
    arguments?: Arguments1;
    blocks?: Blocks;
    [k: string]: unknown;
}[];
export type Schema = string;

export interface Course {
    title?: Title;
    description?: Description;
    passmark?: Passmark;
    introUnits?: Introduction;
    units?: Units;
    globalPages?: GlobalPages;
    schema?: Schema;
    [k: string]: unknown;
}
export interface No {
    [k: string]: unknown;
}
export interface Options {
    variant?: Variant;
    backgroundImage?: BackgroundImageVariantStandardHero;
    backLink?: BackLinkVariantStandard;
    [k: string]: unknown;
}
export interface Action {
    text?: Text;
    link?: Link;
    [k: string]: unknown;
}

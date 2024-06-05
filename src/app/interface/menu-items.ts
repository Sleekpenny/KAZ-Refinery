export interface MenuItems {
    path:string,
    open? :boolean,
    title: string,
    dropDown?: boolean;
    subItems?: subItem[];
}

export interface sliderItems {
    image: string,
    title: string,
    about: string
}

export interface mailService  {
    icon: string,
    name: string,
    url: string
}

export interface functionItems {
    image: string,
    title: string,
    body: string,
    path: string,
}

interface subItem {
    path: string,
    lists: string,
}
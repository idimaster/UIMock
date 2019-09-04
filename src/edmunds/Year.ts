export interface Year {
    id: number;
    year: number;
    styles: Style[];
}

export interface Style {
    id: number;
    name: string;
    submodel: Submodel;
    trim: string;
}

export interface Submodel {
    body: string;
    modelName: string;
    niceName: string;
}